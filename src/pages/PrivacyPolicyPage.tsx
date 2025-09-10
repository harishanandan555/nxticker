import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

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
                <span className="text-2xl font-bold text-slate-900">NxTicker</span>
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
              Your privacy is important to us. This Privacy Policy explains how NxTicker collects, uses, and protects your information.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Last updated: January 2025</span>
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
              {/* Introduction */}
              <section>
                <p className="text-slate-700 leading-relaxed">
                  This Privacy Policy describes how Conglorean Datalabs and Media Private Limited ("NxTicker", "we", "us", or "our") collects, uses, and protects your information when you use our financial data API platform and related services (collectively, the "Service").
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>Name and email address when you create an account</li>
                      <li>Billing information for subscription payments</li>
                      <li>Company information for business accounts</li>
                      <li>Communication preferences and support interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Usage Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>API usage patterns and request logs</li>
                      <li>IP addresses and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on our platform</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>API keys and authentication tokens</li>
                      <li>Error logs and performance metrics</li>
                      <li>Security and access logs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Provide and maintain our API services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Monitor API usage and enforce rate limits</li>
                  <li>Improve our services and develop new features</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                  <li>Send important service updates and notifications</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers with physical security measures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request limitation of processing activities</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
                <p className="text-slate-700 leading-relaxed">
                  We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. API usage logs are typically retained for 12 months, while account information is retained for the duration of your subscription plus a reasonable period thereafter for legal and business purposes.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience and analyze usage patterns:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">International Data Transfers</h2>
                <p className="text-slate-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="space-y-2 text-slate-700">
                    <p><strong>Email:</strong> privacy@nxticker.com</p>
                    <p><strong>Address:</strong> Conglorean Datalabs and Media Private Limited</p>
                    <p>Bengaluru, Karnataka, India</p>
                    <p><strong>Data Protection Officer:</strong> dpo@nxticker.com</p>
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