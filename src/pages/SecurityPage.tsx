import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Security</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn about NxTicker's comprehensive security measures and how we protect your data and API access.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>

          {/* Security Content */}
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-slate-700 leading-relaxed">
                  At NxTicker, security is our top priority. We implement industry-leading security measures to protect your data, ensure API reliability, and maintain the highest standards of information security.
                </p>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Protection</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Database className="h-5 w-5 mr-2 text-cyan-600" />
                      Encryption
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• TLS 1.3 for data in transit</li>
                      <li>• End-to-end encryption for sensitive data</li>
                      <li>• Regular key rotation and management</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-cyan-600" />
                      Access Control
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Multi-factor authentication (MFA)</li>
                      <li>• Role-based access controls (RBAC)</li>
                      <li>• API key management and rotation</li>
                      <li>• IP whitelisting and restrictions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Infrastructure Security */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Infrastructure Security</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud Infrastructure</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Hosted on enterprise-grade cloud providers</li>
                      <li>• Multi-region deployment for high availability</li>
                      <li>• Automated backups and disaster recovery</li>
                      <li>• 99.9% uptime SLA guarantee</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Network Security</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• DDoS protection and mitigation</li>
                      <li>• Web Application Firewall (WAF)</li>
                      <li>• Intrusion detection and prevention systems</li>
                      <li>• Regular security assessments and penetration testing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* API Security */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">API Security</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <UserCheck className="h-5 w-5 mr-2 text-cyan-600" />
                      Authentication
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• OAuth 2.0 and JWT token authentication</li>
                      <li>• API key-based authentication</li>
                      <li>• Rate limiting and throttling</li>
                      <li>• Request signing and validation</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-cyan-600" />
                      Monitoring
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Real-time API monitoring and alerting</li>
                      <li>• Comprehensive audit logging</li>
                      <li>• Anomaly detection and threat analysis</li>
                      <li>• 24/7 security operations center</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compliance */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Compliance & Certifications</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-slate-50 rounded-lg p-6">
                    <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">SOC 2 Type II</h3>
                    <p className="text-sm text-slate-600">Security, availability, and confidentiality controls</p>
                  </div>
                  <div className="text-center bg-slate-50 rounded-lg p-6">
                    <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">ISO 27001</h3>
                    <p className="text-sm text-slate-600">Information security management system</p>
                  </div>
                  <div className="text-center bg-slate-50 rounded-lg p-6">
                    <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Lock className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">GDPR Compliant</h3>
                    <p className="text-sm text-slate-600">Data protection and privacy regulations</p>
                  </div>
                </div>
              </section>

              {/* Security Best Practices */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Best Practices</h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-amber-800">API Key Security</h3>
                        <p className="text-sm text-amber-700 mt-1">
                          Store API keys securely, never in client-side code. Rotate keys regularly and use environment variables.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div className="flex">
                      <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">HTTPS Only</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Always use HTTPS for API requests. We enforce TLS 1.3 for all connections.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium text-green-800">Rate Limiting</h3>
                        <p className="text-sm text-green-700 mt-1">
                          Implement proper rate limiting in your applications to avoid hitting API limits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Incident Response */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Incident Response</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We have a comprehensive incident response plan to quickly address and resolve any security issues:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>24/7 security monitoring and incident detection</li>
                  <li>Automated alerting and escalation procedures</li>
                  <li>Rapid response team with defined roles and responsibilities</li>
                  <li>Post-incident analysis and continuous improvement</li>
                  <li>Customer notification and communication protocols</li>
                </ul>
              </section>

              {/* Security Contact */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Contact</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you discover a security vulnerability or have security concerns, please contact us immediately:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="space-y-2 text-slate-700">
                    <p><strong>Security Team:</strong> security@nxticker.com</p>
                    <p><strong>Emergency Contact:</strong> +91-XXX-XXXX-XXXX</p>
                    <p><strong>Bug Bounty Program:</strong> bounty@nxticker.com</p>
                    <p className="text-sm text-slate-600 mt-4">
                      Please include detailed information about the vulnerability and steps to reproduce it.
                    </p>
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
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started Securely
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;