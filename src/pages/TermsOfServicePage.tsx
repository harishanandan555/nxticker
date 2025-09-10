import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, Scale, AlertTriangle } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
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
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These Terms of Service govern the use of the NxTicker Platform operated by Conglorean Datalabs and Media Private Limited.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Effective immediately</span>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-slate-700 leading-relaxed">
                  These Terms of Service (the "Terms") govern the use of the NxTicker application programming interfaces and related services (the "NxTicker Platform") operated by Conglorean Datalabs and Media Private Limited ("NxTicker", "we", or "us"). These Terms apply to any person or entity who accesses or uses the NxTicker Platform ("Client", "User", or "you"). By accessing or using the NxTicker Platform, you agree to be bound by these Terms.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  NxTicker and User shall individually be referred to as a "Party" and collectively as the "Parties."
                </p>
              </section>

              {/* Section 1: Definitions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900">a. NxTicker Platform:</p>
                    <p className="text-slate-700 ml-4">The stock market data APIs, analytics, documentation, software, and related services owned and operated by NxTicker.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">b. Content:</p>
                    <p className="text-slate-700 ml-4">Any and all data, text, code, information, or materials accessed through the NxTicker Platform.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">c. Client Application:</p>
                    <p className="text-slate-700 ml-4">Any software or product developed by the User that integrates or uses the NxTicker APIs.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Grant of License */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Grant of License</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  NxTicker grants User a limited, non-exclusive, non-transferable, revocable license to access and use the APIs and Content, solely in accordance with these Terms.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">• Commercial Use:</p>
                    <p className="text-slate-700 ml-4">Use is deemed commercial if the APIs are integrated into a product or service offered by financial institutions, wealth managers, brokers, or fintech apps for their business or end-users.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">• Internal Use:</p>
                    <p className="text-slate-700 ml-4">Users may also consume the APIs for research, analytics, or internal purposes.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Restrictions */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Restrictions</h2>
                <p className="text-slate-700 leading-relaxed mb-4">You may not:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Reverse engineer, disassemble, or attempt to discover source code of the Platform.</li>
                  <li>Redistribute or resell the Content "as is" without adding material value (e.g., raw redistribution of NxTicker feeds).</li>
                  <li>Use the APIs for unlawful, misleading, or harmful activities, including investment advice without necessary regulatory approvals.</li>
                </ul>
              </section>

              {/* Section 4: Intellectual Property Rights */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4 font-semibold">
                  Copyright © Conglorean Datalabs and Media Private Limited, 2025. All rights reserved.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">• By NxTicker:</p>
                    <p className="text-slate-700 ml-4">All rights, title, and interest in the NxTicker Platform, including software, algorithms, and datasets, remain with NxTicker.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">• By User:</p>
                    <p className="text-slate-700 ml-4">Users retain ownership of their own applications, customer data, and any proprietary content they create using NxTicker APIs.</p>
                  </div>
                </div>
              </section>

              {/* Section 5: License Term */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. License Term</h2>
                <p className="text-slate-700 leading-relaxed">
                  Licenses are granted on a subscription basis (monthly/annual) and automatically renew unless cancelled by either Party with 30 days' written notice.
                </p>
              </section>

              {/* Section 6: Fees & Payment */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Fees & Payment</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>API access is subject to fees as per the subscription plan selected.</li>
                  <li>Payments must be made in accordance with invoicing terms.</li>
                  <li>Failure to pay may result in suspension or termination of access.</li>
                </ul>
              </section>

              {/* Section 7: Termination */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Either Party may terminate with notice. On termination:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>User access is revoked.</li>
                  <li>Fees already paid are non-refundable.</li>
                  <li>Sections on Intellectual Property, Indemnity, Limitation of Liability, and Governing Law shall survive termination.</li>
                </ul>
              </section>

              {/* Section 8: Warranties & Disclaimers */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Warranties & Disclaimers</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>NxTicker provides data on an "as is" and "as available" basis.</li>
                  <li>We do not guarantee uninterrupted, accurate, or error-free data feeds.</li>
                  <li>No warranties are given regarding fitness for a particular purpose, merchantability, or non-infringement.</li>
                </ul>
              </section>

              {/* Section 9: Indemnity */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnity</h2>
                <p className="text-slate-700 leading-relaxed">
                  User agrees to indemnify and hold harmless NxTicker, its affiliates, directors, employees, and agents against any claims, damages, or liabilities arising from misuse of the Platform, violation of laws, or infringement of third-party rights.
                </p>
              </section>

              {/* Section 10: Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
                <p className="text-slate-700 leading-relaxed">
                  To the maximum extent permitted by law, NxTicker's total liability shall not exceed the subscription fees paid by User in the preceding 12 months. NxTicker is not liable for indirect, consequential, or punitive damages.
                </p>
              </section>

              {/* Section 11: Force Majeure */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Force Majeure</h2>
                <p className="text-slate-700 leading-relaxed">
                  Neither Party is responsible for failure to perform obligations due to events beyond reasonable control, including outages, natural disasters, cyberattacks, strikes, or governmental restrictions.
                </p>
              </section>

              {/* Section 12: Governing Law & Jurisdiction */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law & Jurisdiction</h2>
                <p className="text-slate-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction of courts in Bengaluru, Karnataka.
                </p>
              </section>

              {/* Section 13: Assignment */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Assignment</h2>
                <p className="text-slate-700 leading-relaxed">
                  User may not assign rights or obligations without prior written consent of NxTicker.
                </p>
              </section>

              {/* Section 14: Entire Agreement */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Entire Agreement</h2>
                <p className="text-slate-700 leading-relaxed">
                  These Terms constitute the entire agreement between the Parties with respect to the subject matter and supersede prior agreements or understandings.
                </p>
              </section>

              {/* Copyright Notice */}
              <section className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-center text-slate-600 font-semibold">
                  Copyright © Conglorean Datalabs and Media Private Limited, 2025. All rights reserved.
                </p>
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
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;