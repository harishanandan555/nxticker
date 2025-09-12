import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="/nxticker-icon.png" 
                    alt="NXTicker Icon" 
                    className="h-10 w-10"
                  />
                  <img 
                    src="/nxticker-logo.png" 
                    alt="NXTicker" 
                    className="h-10"
                  />
                </div>
              </Link>
            </div>
            <Link
              to="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This Privacy Policy explains how NXTicker collects, uses, and safeguards information resulting from your use of our Service.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Effective: 01-September-2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserCheck className="h-4 w-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              {/* Section 1: Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-700 leading-relaxed">
                  Welcome to Conglorean Datalabs and Media Private Limited ("NXTicker", "we", "our", or "us").
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  NXTicker operates https://www.nxticker.com and related API services (the "Service").
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  This Privacy Policy explains how we collect, use, and safeguard information resulting from your use of our Service. By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Our Terms of Service ("Terms") govern all use of our Service, and together with this Privacy Policy, constitute your agreement with us.
                </p>
              </section>

              {/* Section 2: Definitions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Definitions</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Service:</strong> The NXTicker APIs, website, and related services.</li>
                  <li><strong>Personal Data:</strong> Data that can identify a living individual (e.g., name, email, billing details).</li>
                  <li><strong>Usage Data:</strong> Data automatically collected during use of our Service (e.g., IP address, API request logs, device/browser details).</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to track preferences and improve Service.</li>
                  <li><strong>Data Controller:</strong> NXTicker, determining the purposes and means of processing your data.</li>
                  <li><strong>Data Processor / Service Providers:</strong> Third-party entities engaged by us to process data on our behalf.</li>
                  <li><strong>User:</strong> The individual or company using our Service.</li>
                </ul>
              </section>

              {/* Section 3: Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information We Collect</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect the following categories of data:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Personal Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>Name and email address</li>
                      <li>Company name and billing details</li>
                      <li>API account credentials</li>
                      <li>Payment-related details (handled securely via third-party processors)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Usage Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>API usage logs (e.g., request counts, endpoints accessed)</li>
                      <li>IP address, browser type, device type</li>
                      <li>Access times and dates</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Tracking Data</h3>
                    <p className="text-slate-700">
                      We use cookies and similar technologies to track Service usage and improve functionality.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: How We Use Your Data */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Your Data</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use collected data for purposes including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Providing and maintaining the Service</li>
                  <li>Managing API access and subscriptions</li>
                  <li>Customer support and communication</li>
                  <li>Monitoring Service usage, security, and fraud prevention</li>
                  <li>Billing and collection</li>
                  <li>Sending service updates, technical notices, and marketing communications (opt-out available)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              {/* Section 5: Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>We retain Personal Data only as long as necessary for the purposes outlined in this Policy.</li>
                  <li>API Usage Data may be retained longer for analytics, fraud prevention, or legal compliance.</li>
                </ul>
              </section>

              {/* Section 6: Data Sharing & Disclosure */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Sharing & Disclosure</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may share Personal Data only in the following cases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>With trusted Service Providers (e.g., hosting, analytics, payment processors) under confidentiality obligations.</li>
                  <li>To comply with legal obligations or law enforcement requests.</li>
                  <li>In the event of a merger, acquisition, or sale of assets.</li>
                  <li>To protect our rights, customers, or the public.</li>
                  <li>With your consent.</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 font-semibold">
                  We do not sell your personal data.
                </p>
              </section>

              {/* Section 7: International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. International Data Transfers</h2>
                <p className="text-slate-700 leading-relaxed">
                  If you access our Service from outside India, note that your data may be transferred and processed in jurisdictions with different data protection laws. We ensure reasonable safeguards for such transfers.
                </p>
              </section>

              {/* Section 8: Security of Data */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security of Data</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use commercially reasonable safeguards to protect your Personal Data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 9: Your Data Rights */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Your Data Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have rights including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Access, rectification, or deletion of your Personal Data</li>
                  <li>Restriction or objection to processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent (where applicable)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Requests can be made by contacting us at support@nxticker.com.
                </p>
              </section>

              {/* Section 10: Payments */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Payments</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use third-party payment processors (e.g., PayPal, Razorpay, ApplePay, GPay, Stripe) for subscription billing. We do not store or process card details directly. Your data is governed by the privacy policies of these processors.
                </p>
              </section>

              {/* Section 11: Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Third-Party Links</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our Service may contain links to third-party websites. We are not responsible for their content or privacy practices.
                </p>
              </section>

              {/* Section 12: Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our Services are not directed to children under 18. We do not knowingly collect data from minors. If we learn we have collected data from a child, we will delete it promptly.
                </p>
              </section>

              {/* Section 13: Changes to this Policy */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to this Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "effective date". Significant changes may also be communicated via email.
                </p>
              </section>

              {/* Section 14: Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For questions about this Privacy Policy or to exercise your data rights:
                </p>
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                  <div className="space-y-2 text-slate-700">
                    <p className="font-semibold">Conglorean Datalabs and Media Private Limited</p>
                    <p>Email: support@nxticker.com</p>
                    <p>Website: https://www.nxticker.com</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;