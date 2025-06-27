import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useRateLimiting } from './useRateLimiting';
import { useSessionCache } from './useSessionCache';
import { validateEmail, validatePassword, sanitizeText } from '@/utils/security';

export interface AuthSession {
  id: string;
  user_id: string;
  login_method: string;
  ip_address?: string | null;
  user_agent?: string | null;
  location?: string | null;
  device_info?: any;
  session_start: string;
  session_end?: string | null;
  is_active: boolean;
  created_at: string;
}

export const useEnhancedAuth = () => {
  const { signIn, signUp, signOut, user, session, loading } = useAuth();
  const { toast } = useToast();
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);

  // Rate limiting for auth attempts
  const authRateLimit = useRateLimiting({
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    blockDurationMs: 30 * 60 * 1000 // 30 minutes
  });

  // Session caching
  const sessionsCache = useSessionCache(
    `sessions_${user?.id}`,
    () => getActiveSessionsInternal(),
    { maxAge: 2 * 60 * 1000 } // 2 minutes cache
  );

  const signInWithGoogle = async () => {
    if (!authRateLimit.checkRateLimit()) return { error: new Error('Rate limit exceeded') };
    
    setSocialLoading('google');
    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl
        },
      });

      if (error) {
        toast({
          title: "Google Sign In Error",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Google Sign In Error",
        description: error.message || "An unexpected error occurred during Google sign in.",
        variant: "destructive",
      });
      return { error };
    } finally {
      setSocialLoading(null);
    }
  };

  // Enhanced sign in with validation and rate limiting
  const enhancedSignIn = async (email: string, password: string) => {
    return authRateLimit.attemptAction(async () => {
      // Validate inputs
      const sanitizedEmail = sanitizeText(email);
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Invalid email format');
      }

      const { isValid, errors } = validatePassword(password);
      if (!isValid) {
        throw new Error(errors[0]);
      }

      return await signIn(sanitizedEmail, password);
    });
  };

  // Enhanced sign up with validation and first/last name
  const enhancedSignUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    return authRateLimit.attemptAction(async () => {
      // Validate inputs
      const sanitizedEmail = sanitizeText(email);
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Invalid email format');
      }

      const { isValid, errors } = validatePassword(password);
      if (!isValid) {
        throw new Error(errors.join(', '));
      }

      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: firstName || '',
            last_name: lastName || ''
          }
        }
      });

      return { error };
    });
  };

  // Forgot password functionality
  const forgotPassword = async (email: string) => {
    if (!authRateLimit.checkRateLimit()) {
      toast({
        title: "Rate Limit Exceeded",
        description: "Too many requests. Please try again later.",
        variant: "destructive",
      });
      return { error: new Error('Rate limit exceeded') };
    }

    setForgotPasswordLoading(true);
    try {
      const sanitizedEmail = sanitizeText(email);
      if (!validateEmail(sanitizedEmail)) {
        throw new Error('Invalid email format');
      }

      const { error } = await supabase.auth.resetPasswordForEmail(sanitizedEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: "Password Reset Error",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Password Reset Email Sent",
        description: "Check your email for password reset instructions.",
      });

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Password Reset Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
      return { error };
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  const trackLoginSession = async (loginMethod: string) => {
    if (!user) return;

    try {
      const userAgent = navigator.userAgent;
      const deviceInfo = {
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        screenResolution: `${screen.width}x${screen.height}`,
      };

      const { data, error } = await supabase.rpc('track_login_session', {
        p_user_id: user.id,
        p_login_method: loginMethod,
        p_user_agent: userAgent,
        p_device_info: deviceInfo,
      });

      if (error) {
        console.warn('Failed to track login session:', error);
      }

      // Invalidate sessions cache to refresh data
      sessionsCache.invalidate();
    } catch (error) {
      console.warn('Error tracking login session:', error);
    }
  };

  const getActiveSessionsInternal = async (): Promise<AuthSession[]> => {
    if (!user) return [];

    try {
      const { data, error } = await supabase
        .from('auth_sessions')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('session_start', { ascending: false });

      if (error) {
        console.error('Failed to fetch sessions:', error);
        return [];
      }

      return (data || []).map(session => ({
        ...session,
        ip_address: session.ip_address as string | null,
        user_agent: session.user_agent as string | null,
        location: session.location as string | null,
        session_end: session.session_end as string | null,
      }));
    } catch (error) {
      console.error('Error fetching sessions:', error);
      return [];
    }
  };

  const getActiveSessions = async (): Promise<AuthSession[]> => {
    const cached = sessionsCache.data;
    if (cached) return cached;
    
    return getActiveSessionsInternal();
  };

  const terminateSession = async (sessionId: string) => {
    try {
      const { error } = await supabase
        .from('auth_sessions')
        .update({ 
          is_active: false, 
          session_end: new Date().toISOString() 
        })
        .eq('id', sessionId);

      if (error) {
        toast({
          title: "Error Terminating Session",
          description: error.message || "Failed to terminate session.",
          variant: "destructive",
        });
        return { error };
      }

      // Invalidate cache to refresh data
      sessionsCache.invalidate();

      toast({
        title: "Session Terminated",
        description: "The session has been successfully terminated.",
      });

      return { error: null };
    } catch (error: any) {
      toast({
        title: "Error Terminating Session",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
      return { error };
    }
  };

  return {
    // Original auth methods
    signIn: enhancedSignIn,
    signUp: enhancedSignUp,
    signOut,
    user,
    session,
    loading,
    
    // Enhanced social auth methods (only Google now)
    signInWithGoogle,
    socialLoading,
    
    // Forgot password functionality
    forgotPassword,
    forgotPasswordLoading,
    
    // Session management
    trackLoginSession,
    getActiveSessions,
    terminateSession,
    
    // Rate limiting info
    isRateLimited: authRateLimit.isBlocked,
    rateLimitRemaining: authRateLimit.getRemainingTime,
    
    // Session cache
    sessionsLoading: sessionsCache.loading,
    refreshSessions: sessionsCache.refetch
  };
};
