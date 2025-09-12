import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, RefreshCw, AlertTriangle, CheckCircle, Clock, Mail } from 'lucide-react';

const CancellationRefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-slate-900">NXTicker</span>
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
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Cancellation & Refund Policy</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This Cancellation & Refund Policy applies to subscriptions and services offered by Conglorean Datalabs and Media Private Limited.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Effective: January 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Transparent Policy</span>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-slate-700 leading-relaxed">
                  This Cancellation & Refund Policy applies to subscriptions and services offered by Conglorean Datalabs and Media Private Limited ("NXTicker", "we", "our", "us"). By subscribing to or using our APIs and services, you agree to the terms of this Policy.
                </p>
              </section>

              {/* Section 1: Subscription Cancellation */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Subscription Cancellation</h2>
                
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-cyan-600" />
                      Self-Cancellation
                    </h3>
                    <p className="text-slate-700">
                      Users may cancel their subscription at any time through their account dashboard or by contacting support@nxticker.com.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                      Effect of Cancellation
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Cancellation will take effect at the end of the current billing cycle.</li>
                      <li>• Users will retain access to their subscription until the end of the paid period.</li>
                      <li>• No partial refunds will be issued for unused days in a billing cycle.</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-amber-600" />
                      Auto-Renewal
                    </h3>
                    <p className="text-slate-700">
                      All subscriptions auto-renew unless cancelled at least 7 days before the renewal date.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Refund Policy */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Refund Policy</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                      Non-Refundable Fees
                    </h3>
                    <p className="text-slate-700">
                      All subscription fees are non-refundable, including one-time setup fees, unless otherwise required by applicable law.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Exceptional Refunds
                    </h3>
                    <p className="text-slate-700 mb-3">Refunds may be granted only in the following cases:</p>
                    <ul className="space-y-2 text-slate-700 ml-4">
                      <li>• Duplicate payment due to technical error.</li>
                      <li>• Accidental double subscription under the same account.</li>
                      <li>• Service unavailability for more than 72 consecutive hours, attributable solely to NXTicker.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <RefreshCw className="h-5 w-5 mr-2 text-cyan-600" />
                      Refund Processing
                    </h3>
                    <p className="text-slate-700">
                      Approved refunds will be processed to the original payment method within 7–14 business days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Free Trials and Promotional Offers */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Free Trials and Promotional Offers</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>If a subscription is cancelled during a free trial period, no charges will be applied.</li>
                  <li>Promotional offers are subject to specific terms and may not be eligible for refunds.</li>
                </ul>
              </section>

              {/* Section 4: Changes to Plans */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Changes to Plans</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Users may upgrade or downgrade subscription plans.</li>
                  <li>For upgrades, the change will be effective immediately, and prorated charges may apply.</li>
                  <li>For downgrades, the change will apply from the next billing cycle.</li>
                </ul>
              </section>

              {/* Section 5: Termination by NXTicker */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Termination by NXTicker</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate a subscription without refund if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>The User breaches our Terms of Service or Fair Use Policy.</li>
                  <li>The APIs are misused for unlawful or unauthorized purposes.</li>
                </ul>
              </section>

              {/* Section 6: Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  For cancellations, billing disputes, or refund requests, please contact us at:
                </p>
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="bg-cyan-100 rounded-full p-2">
                        <Mail className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Conglorean Datalabs and Media Private Limited</p>
                        <p>Email: support@nxticker.com</p>
                        <p>Website: https://www.nxticker.com</p>
                      </div>
                    </div>
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

export default CancellationRefundPolicyPage;