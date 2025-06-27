
import React from 'react';
import { Helmet } from 'react-helmet-async';
import UnifiedNavbar from '@/components/UnifiedNavbar';
import Footer from '@/components/Footer';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Terra Echo Studios</title>
        <meta name="description" content="Terms of Service for Terra Echo Studios - Professional audio engineering services terms and conditions." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-nature-cream/30 via-white to-nature-sage/20">
        <UnifiedNavbar />
        
        <main className="flex-grow pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-nature-forest mb-4">Terms of Service</h1>
                <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </header>

              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Agreement to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using Terra Echo Studios' services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                    from using our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Services Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Terra Echo Studios provides professional audio engineering services including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Audio mixing and mastering</li>
                    <li>Sound design and post-production</li>
                    <li>Dolby Atmos production</li>
                    <li>Podcasting services</li>
                    <li>Music production and recording</li>
                    <li>Custom audio solutions</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Client Responsibilities</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide accurate project information and requirements</li>
                    <li>Submit audio files in agreed-upon formats and quality standards</li>
                    <li>Respond to communications within reasonable timeframes</li>
                    <li>Make payments according to agreed terms</li>
                    <li>Respect intellectual property rights</li>
                    <li>Provide necessary licenses for copyrighted material</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Payment Terms</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Payment is due according to the agreed schedule in your project contract</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Refund policies are outlined in individual project agreements</li>
                    <li>All payments are processed securely through third-party providers</li>
                    <li>Disputed charges must be reported within 30 days</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Clients retain ownership of their original content and recordings</li>
                    <li>Terra Echo Studios retains rights to our proprietary techniques and processes</li>
                    <li>Final deliverables are owned by the client upon full payment</li>
                    <li>We may use project excerpts for portfolio and marketing purposes with client consent</li>
                    <li>Clients are responsible for obtaining necessary licenses for copyrighted material</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain strict confidentiality regarding all client projects and materials. We will not disclose, 
                    share, or use your confidential information for any purpose other than completing your project, 
                    except with your explicit written consent or as required by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Project Deliverables</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Deliverables will be provided in agreed-upon formats and specifications</li>
                    <li>Revision rounds are included as specified in project agreements</li>
                    <li>Additional revisions may incur extra charges</li>
                    <li>Final files will be delivered via secure digital transfer</li>
                    <li>Backup storage is maintained for a limited time as specified in contracts</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Terra Echo Studios' liability is limited to the amount paid for the specific service. We are not liable 
                    for indirect, incidental, or consequential damages. While we strive for excellence, we cannot guarantee 
                    specific outcomes or commercial success of your project.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Cancellation Policy</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Projects may be cancelled with written notice</li>
                    <li>Cancellation fees may apply based on work completed</li>
                    <li>Refunds are calculated based on the stage of project completion</li>
                    <li>Emergency cancellations are subject to additional terms</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Force Majeure</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We are not liable for delays or failures in performance due to circumstances beyond our reasonable control, 
                    including but not limited to natural disasters, technical failures, or other unforeseeable events.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Dispute Resolution</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Any disputes will be resolved through good faith negotiation. If resolution cannot be reached, 
                    disputes will be subject to binding arbitration in accordance with applicable laws.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-nature-cream/20 rounded-lg">
                    <p className="font-medium text-nature-forest">Terra Echo Studios</p>
                    <p className="text-gray-700">Email: terraechostudios@gmail.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-nature-forest mb-4">Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting on our website. Continued use of our services constitutes acceptance of modified terms.
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

export default TermsOfServicePage;
