
import React from 'react';
import { Helmet } from 'react-helmet-async';
import UnifiedNavbar from '@/components/UnifiedNavbar';
import Footer from '@/components/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Terra Echo Studios</title>
        <meta name="description" content="Privacy Policy for Terra Echo Studios - Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-nature-cream/30 via-white to-nature-sage/20">
        <UnifiedNavbar />
        
        <main className="flex-grow pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-nature-forest mb-4">Privacy Policy</h1>
                <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </header>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Terra Echo Studios, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our audio engineering services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-medium text-nature-bark mb-3">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Project details and audio files you submit for our services</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication preferences and history</li>
                  </ul>

                  <h3 className="text-xl font-medium text-nature-bark mb-3 mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide and deliver our audio engineering services</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>With service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>With your explicit consent</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                    the internet is 100% secure.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. 
                    You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-nature-cream/20 rounded-lg">
                    <p className="font-medium text-nature-forest">Terra Echo Studios</p>
                    <p className="text-gray-700">Email: terraechostudios@gmail.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
