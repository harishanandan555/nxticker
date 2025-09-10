import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Crown, ArrowRight, Sparkles, Calculator, TrendingUp, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [calculatorInputs, setCalculatorInputs] = useState({
    requests: 10000,
    dataTypes: ['stocks', 'crypto'],
    realTime: true,
    support: 'email'
  });

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      period: 'forever',
      description: 'Perfect for testing and small projects',
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        'End-of-day data only',
        'Delayed intraday (15+ min)',
        '30 requests/minute',
        'Basic US equities',
        'Community support',
        'JSON format only'
      ],
      limitations: [
        'No real-time data',
        'Limited symbols',
        'No bulk downloads'
      ],
      buttonText: 'Start Free',
      buttonStyle: 'bg-slate-600 hover:bg-slate-700 text-white border-slate-600',
      popular: false,
      gradient: 'from-slate-500 to-slate-600'
    },
    {
      name: 'Developer',
      price: { monthly: 29, yearly: 290 },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For indie developers and small teams',
      icon: <Zap className="h-6 w-6" />,
      features: [
        'Real-time US market data',
        '120 requests/minute',
        '2 years intraday history',
        'All US exchanges',
        'Email support',
        'JSON, CSV formats',
        'Basic fundamentals',
        'WebSocket access'
      ],
      limitations: [],
      buttonText: 'Start 7-day Trial',
      buttonStyle: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-transparent',
      popular: true,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Pro',
      price: { monthly: 199, yearly: 1990 },
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For professional traders and growing businesses',
      icon: <Shield className="h-6 w-6" />,
      features: [
        'Global market coverage',
        '600 requests/minute',
        'Complete fundamentals data',
        'Corporate actions',
        'FX & crypto data',
        'Bulk downloads',
        'Priority support',
        'All formats (JSON, CSV, Parquet)',
        'Advanced analytics'
      ],
      limitations: [],
      buttonText: 'Start 14-day Trial',
      buttonStyle: 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-transparent',
      popular: false,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      period: 'pricing',
      description: 'For large institutions and high-volume applications',
      icon: <Crown className="h-6 w-6" />,
      features: [
        'Unlimited requests',
        'Dedicated infrastructure',
        'SLA guarantees',
        'SSO integration',
        'IP whitelisting',
        'Options chains data',
        'Custom endpoints',
        'White-label solutions',
        '24/7 phone support'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-transparent',
      popular: false,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (typeof plan.price[billingCycle] === 'number') {
      return billingCycle === 'yearly' ? plan.price[billingCycle] / 10 : plan.price[billingCycle];
    }
    return plan.price[billingCycle];
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (typeof plan.price.yearly === 'number' && typeof plan.price.monthly === 'number') {
      const yearlyMonthly = plan.price.yearly / 12;
      const savings = ((plan.price.monthly - yearlyMonthly) / plan.price.monthly) * 100;
      return Math.round(savings);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Transparent Pricing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Simple, Powerful
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Choose the plan that fits your needs. All plans include our core features with no hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                billingCycle === 'yearly'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`relative bg-white/80 backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-300 shadow-xl shadow-blue-500/20 ring-1 ring-blue-200' 
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{plan.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-slate-900">
                        {typeof getPrice(plan) === 'number' ? '$' : ''}{getPrice(plan)}
                      </span>
                      {typeof getPrice(plan) === 'number' && billingCycle === 'yearly' && (
                        <span className="text-slate-600 ml-1">/mo</span>
                      )}
                      {typeof getPrice(plan) === 'number' && billingCycle === 'monthly' && (
                        <span className="text-slate-600">{plan.period}</span>
                      )}
                      {typeof getPrice(plan) === 'string' && (
                        <span className="text-slate-600 ml-2">{plan.period}</span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                      <div className="text-sm text-green-600 font-semibold mt-1">
                        Save {getSavings(plan)}% annually
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">{plan.description}</p>
                  
                  <Link
                    to="/signup"
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 block text-center group/button relative overflow-hidden ${plan.buttonStyle}`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                  
                  <div className="mt-8">
                    <h4 className="text-slate-900 font-bold mb-6 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Everything included:
                    </h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/feature">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                          <span className="text-slate-700 text-sm leading-relaxed group-hover/feature:text-slate-900 transition-colors duration-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Pricing Calculator
              {showCalculator ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
            </button>
          </div>

          {showCalculator && (
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Estimate Your Usage</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Monthly API Requests
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="1000000"
                        step="1000"
                        value={calculatorInputs.requests}
                        onChange={(e) => setCalculatorInputs(prev => ({ ...prev, requests: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-slate-600 mt-2">
                        <span>1K</span>
                        <span className="font-bold text-slate-900">{calculatorInputs.requests.toLocaleString()}</span>
                        <span>1M</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Data Types
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['stocks', 'crypto', 'forex', 'fundamentals'].map((type) => (
                          <label key={type} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={calculatorInputs.dataTypes.includes(type)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setCalculatorInputs(prev => ({
                                    ...prev,
                                    dataTypes: [...prev.dataTypes, type]
                                  }));
                                } else {
                                  setCalculatorInputs(prev => ({
                                    ...prev,
                                    dataTypes: prev.dataTypes.filter(t => t !== type)
                                  }));
                                }
                              }}
                              className="mr-2"
                            />
                            <span className="text-sm text-slate-700 capitalize">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Real-time Data
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={calculatorInputs.realTime}
                          onChange={(e) => setCalculatorInputs(prev => ({ ...prev, realTime: e.target.checked }))}
                          className="mr-2"
                        />
                        <span className="text-sm text-slate-700">Include real-time data</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Recommended Plan</h3>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900">Developer Plan</h4>
                        <p className="text-slate-600">Perfect for your usage</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-700">Monthly requests:</span>
                        <span className="font-semibold">{calculatorInputs.requests.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Data types:</span>
                        <span className="font-semibold">{calculatorInputs.dataTypes.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700">Real-time:</span>
                        <span className="font-semibold">{calculatorInputs.realTime ? 'Yes' : 'No'}</span>
                      </div>
                    </div>

                    <div className="border-t border-cyan-200 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-slate-900">Monthly Cost:</span>
                        <span className="text-3xl font-bold text-cyan-600">$29</span>
                      </div>
                      <Link
                        to="/signup"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg block text-center"
                      >
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Compare All Features
              {showComparison ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
            </button>
          </div>

          {showComparison && (
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 shadow-xl overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Features</th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-slate-700">Free</th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-slate-700">Developer</th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-slate-700">Pro</th>
                    <th className="text-center py-4 px-4 text-sm font-bold text-slate-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feature: 'API Requests/Month', free: '1,800', developer: '7,200', pro: '36,000', enterprise: 'Unlimited' },
                    { feature: 'Rate Limit', free: '30/min', developer: '120/min', pro: '600/min', enterprise: 'Custom' },
                    { feature: 'Real-time Data', free: '❌', developer: '✅', pro: '✅', enterprise: '✅' },
                    { feature: 'Historical Data', free: '1 year', developer: '2 years', pro: '10 years', enterprise: 'Unlimited' },
                    { feature: 'Data Types', free: 'US Stocks', developer: 'US + Crypto', pro: 'Global Markets', enterprise: 'All Markets' },
                    { feature: 'WebSocket Access', free: '❌', developer: '✅', pro: '✅', enterprise: '✅' },
                    { feature: 'Bulk Downloads', free: '❌', developer: '❌', pro: '✅', enterprise: '✅' },
                    { feature: 'Support', free: 'Community', developer: 'Email', pro: 'Priority', enterprise: '24/7 Phone' },
                    { feature: 'SLA', free: '99%', developer: '99.5%', pro: '99.9%', enterprise: '99.99%' },
                    { feature: 'Custom Endpoints', free: '❌', developer: '❌', pro: '❌', enterprise: '✅' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                      <td className="py-4 px-4 text-sm font-semibold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-4 text-sm text-slate-700 text-center">{row.free}</td>
                      <td className="py-4 px-4 text-sm text-slate-700 text-center">{row.developer}</td>
                      <td className="py-4 px-4 text-sm text-slate-700 text-center">{row.pro}</td>
                      <td className="py-4 px-4 text-sm text-slate-700 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Developers Worldwide
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our customers are building with our API
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Lead Developer',
                company: 'FinTech Startup',
                avatar: 'SC',
                testimonial: 'BetaTickers has been a game-changer for our trading platform. The real-time data is incredibly reliable and the documentation is excellent.',
                rating: 5
              },
              {
                name: 'Michael Rodriguez',
                role: 'CTO',
                company: 'Investment Firm',
                avatar: 'MR',
                testimonial: 'We switched from multiple data providers to BetaTickers and reduced our costs by 60% while improving data quality.',
                rating: 5
              },
              {
                name: 'Emily Johnson',
                role: 'Product Manager',
                company: 'Crypto Exchange',
                avatar: 'EJ',
                testimonial: 'The WebSocket implementation is flawless. Our users get real-time updates without any delays or connection issues.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Plans Include
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Enterprise-grade infrastructure and developer experience across all tiers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '99.99% Uptime SLA',
                description: 'Enterprise-grade reliability with redundant infrastructure and automatic failover',
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: 'Global CDN',
                description: 'Low latency access from anywhere in the world with 50+ edge locations',
                icon: <Globe className="h-8 w-8" />
              },
              {
                title: 'No Setup Fees',
                description: 'Start immediately with instant API access and comprehensive onboarding',
                icon: <Zap className="h-8 w-8" />
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing and features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I upgrade or downgrade anytime?',
                answer: 'Yes, you can change your plan at any time. Upgrades are immediate, downgrades take effect at the next billing cycle with prorated refunds.'
              },
              {
                question: 'What happens if I exceed my rate limit?',
                answer: 'You\'ll receive a 429 status code with retry headers. We offer burst capacity and can discuss custom limits for enterprise clients.'
              },
              {
                question: 'Do you offer data for international markets?',
                answer: 'Currently US markets with global expansion planned for Q2 2025 including EU, UK, India, and APAC exchanges with full regulatory compliance.'
              },
              {
                question: 'Is there an SLA for data accuracy?',
                answer: 'Yes, we guarantee 99.95% data accuracy with daily reconciliation and quality checks. Enterprise plans include enhanced SLAs and dedicated support.'
              },
              {
                question: 'How does the free trial work?',
                answer: 'All paid plans include a free trial period with full access to features. No credit card required to start, and you can cancel anytime during the trial.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, ACH transfers for enterprise plans, and offer net-30 terms for qualified businesses with annual contracts.'
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Application?
              </h3>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Join the developers who've already built amazing financial products with our API
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;