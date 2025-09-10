import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Clock, 
  TrendingUp,
  Star,
  CheckCircle,
  Sparkles,
  Activity,
  Users,
  Award
} from 'lucide-react';
import Navigation from '../components/Navigation';

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Database className="h-7 w-7" />,
      title: 'Comprehensive Coverage',
      description: 'US equities, FX majors, top cryptocurrencies, and fundamentals all in one unified API.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: 'Lightning Performance',
      description: 'Sub-millisecond response times with global CDN and optimized data structures.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with API keys, rate limiting, and compliance-ready infrastructure.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: 'Global Markets',
      description: 'Expanding coverage across US, EU, UK, India, and APAC exchanges.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: 'Multiple Formats',
      description: 'JSON, CSV, and Parquet formats with bulk download capabilities.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: 'Real-time & Historical',
      description: 'Both live streaming and extensive historical data with corporate actions.',
      gradient: 'from-red-500 to-pink-500'
    },
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime SLA', icon: <Activity className="h-6 w-6" /> },
    { value: '10M+', label: 'API Calls/Day', icon: <BarChart3 className="h-6 w-6" /> },
    { value: '500+', label: 'Happy Developers', icon: <Users className="h-6 w-6" /> },
    { value: '<50ms', label: 'Avg Response', icon: <Zap className="h-6 w-6" /> },
  ];

  const testimonials = [
    {
      quote: "BetaTickers transformed our trading platform. The reliability and speed are unmatched.",
      author: "Sarah Chen",
      role: "CTO, FinTech Startup",
      avatar: "SC"
    },
    {
      quote: "Finally, a financial data API that doesn't break the bank. Excellent documentation too.",
      author: "Michael Rodriguez",
      role: "Lead Developer, Hedge Fund",
      avatar: "MR"
    },
    {
      quote: "The real-time data quality is exceptional. Our quant models have never been more accurate.",
      author: "Dr. Emily Watson",
      role: "Quantitative Researcher",
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/50 rounded-full px-4 py-2 mb-8 ${isVisible ? 'slide-up' : ''}`}>
              <Sparkles className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">Trusted by 500+ developers worldwide</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${isVisible ? 'slide-up stagger-1' : ''}`}>
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Financial Data API
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'slide-up stagger-2' : ''}`}>
              Access real-time and historical market data for equities, FX, crypto, and fundamentals. 
              <span className="text-blue-600 font-semibold"> Designed for fintech startups, quant researchers, and enterprise applications.</span>
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              <Link
                to="/signup"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/docs"
                className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 border border-slate-200 hover:border-blue-300 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  View Documentation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'slide-up stagger-4' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white/80 hover:border-blue-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 hover:scale-105">
                    <div className="text-cyan-600 mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Industry Leading Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need for
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Market Data Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive coverage, lightning-fast delivery, and developer-friendly APIs designed for the modern financial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/10 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Loved by Developers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See what developers and financial professionals are saying about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Advantage */}
      <div className="py-24 lg:py-32 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                BetaTickers?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We've solved the problems that frustrate developers with other providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">The Competition</h3>
              {[
                { name: 'Alpha Vantage', issue: 'Severe rate limiting kills productivity' },
                { name: 'Polygon.io', issue: 'Expensive pricing for basic features' },
                { name: 'EOD Historical', issue: 'Complex API with poor documentation' },
                { name: 'Tiingo', issue: 'Limited market coverage and reliability' },
              ].map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <span className="text-slate-900 font-semibold">{competitor.name}</span>
                  <span className="text-red-500 text-sm font-medium">{competitor.issue}</span>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">BetaTickers</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Generous rate limits on all plans',
                    'Transparent, developer-friendly pricing',
                    'Intuitive API design with excellent docs',
                    'Comprehensive global market coverage',
                    '99.99% uptime with enterprise SLA',
                    'Sub-50ms response times globally'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-semibold text-sm">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-white">Ready to get started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Build the Future of
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Financial Technology
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join thousands of developers building innovative financial applications with our enterprise-grade API infrastructure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/signup"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 pulse-glow"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Building Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/pricing"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                View Pricing
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">BetaTickers</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-6">
                Professional market data infrastructure for developers, traders, and enterprises. 
                Built with reliability, performance, and developer experience in mind.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <span className="text-slate-400 hover:text-white text-sm font-bold">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer">
                  <span className="text-slate-400 hover:text-white text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-3">
                <li><Link to="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Pricing</Link></li>
                <li><Link to="/docs" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Documentation</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">API Status</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 BetaTickers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;