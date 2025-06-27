
import React from "react";
import { useSettings } from "@/hooks/useSettings";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useEnhancedAuth } from "@/contexts/EnhancedAuthContext";
import { Link } from "react-router-dom";

const iconMap: { [key: string]: React.ElementType } = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { data: settings } = useSettings();
  const { user } = useEnhancedAuth();
  const socialLinks = (settings?.social_links as { platform: string; url: string }[]) || [];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-nature-bark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img alt="Sound Studio Logo" className="h-24 w-24 object-contain bg-white/90 rounded-md p-1" src="/lovable-uploads/7b1e0e62-bb07-45e5-b955-59e6626241d5.png" />
              <span className="text-xl font-bold">Terra Echo Studios</span>
            </div>
            
            <p className="text-sm text-nature-cream/80">
              Authentic Audio, Naturally Engineered.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Testimonials", "Contact"].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }} 
                    className="text-nature-cream/80 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              {user && (
                <li>
                  <Link to="/profile" className="text-nature-cream/80 hover:text-white transition-colors">
                    Profile
                  </Link>
                </li>
              )}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Mixing", "Mastering", "Sound Design", "Music Editing", "Podcasting"].map(service => (
                <li key={service} className="text-nature-cream/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-nature-cream/80">
              <li>
                <a 
                  href="mailto:terraechostudios@gmail.com"
                  className="hover:text-white transition-colors underline"
                >
                  terraechostudios@gmail.com
                </a>
              </li>
              <li className="text-xs text-nature-cream/60 mt-2 pt-2 border-t border-white/10">
                Studio Hours: Monday - Sunday: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-nature-cream/70 mb-4 md:mb-0">
            © 2025 Terra Echo Studios. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.platform.toLowerCase()];
                  return IconComponent ? (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nature-cream/70 hover:text-white transition-colors"
                      aria-label={link.platform}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  ) : null;
                })}
              </div>
            )}
            
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-nature-cream/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-nature-cream/70 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="text-sm text-nature-cream/70 hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
