import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, Mail, Lock, User, ArrowRight, CheckCircle, Sparkles, Eye, EyeOff, AlertCircle, Github, Chrome, Building, Briefcase, Globe, Zap, Shield, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    useCase: '',
    plan: 'free'
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      try {
        await signup(formData.email, formData.password);
        navigate('/dashboard');
      } catch (error) {
        setErrors({ general: 'Signup failed. Please try again.' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const benefits = [
    'Instant API access',
    'No credit card required',
    '30 requests/minute',
    'Community support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`text-center ${isVisible ? 'slide-up' : ''}`}>
          <Link to="/" className="inline-flex items-center space-x-3 group mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
                            <span className="text-3xl font-bold text-white">NxTicker</span>
          </Link>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Building Today
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Create your free account and get instant access to our API
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-4xl mb-8">
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl ${isVisible ? 'slide-up stagger-1' : ''}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose NxTicker?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Lightning Fast</h4>
              <p className="text-slate-300 text-sm">Sub-millisecond response times with global CDN</p>
            </div>
            
            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise Security</h4>
              <p className="text-slate-300 text-sm">Bank-grade security with API keys and rate limiting</p>
            </div>
            
            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Global Coverage</h4>
              <p className="text-slate-300 text-sm">US, EU, UK, India, and APAC market data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl ${isVisible ? 'slide-up stagger-2' : ''}`}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                {errors.general}
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-white mb-3">
                  First Name
                </label>
                <div className="relative group">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-4 pl-12 border border-white/20 bg-white/10 backdrop-blur-sm placeholder-slate-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                    placeholder="John"
                  />
                  <User className="h-5 w-5 text-slate-400 absolute left-4 top-4.5 group-focus-within:text-cyan-400 transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-white mb-3">
                  Last Name
                </label>
                <div className="relative group">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-4 pl-12 border border-white/20 bg-white/10 backdrop-blur-sm placeholder-slate-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                    placeholder="Doe"
                  />
                  <User className="h-5 w-5 text-slate-400 absolute left-4 top-4.5 group-focus-within:text-cyan-400 transition-colors duration-300" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-3">
                Email address
              </label>
              <div className="relative group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-4 pl-12 border border-white/20 bg-white/10 backdrop-blur-sm placeholder-slate-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                  placeholder="you@company.com"
                />
                <Mail className="h-5 w-5 text-slate-400 absolute left-4 top-4.5 group-focus-within:text-cyan-400 transition-colors duration-300" />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-400 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-white mb-3">
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-4 pl-12 border border-white/20 bg-white/10 backdrop-blur-sm placeholder-slate-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                  placeholder="••••••••"
                />
                <Lock className="h-5 w-5 text-slate-400 absolute left-4 top-4.5 group-focus-within:text-cyan-400 transition-colors duration-300" />
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-400 font-medium">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-white mb-3">
                Confirm Password
              </label>
              <div className="relative group">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-4 pl-12 border border-white/20 bg-white/10 backdrop-blur-sm placeholder-slate-400 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-white/30"
                  placeholder="••••••••"
                />
                <Lock className="h-5 w-5 text-slate-400 absolute left-4 top-4.5 group-focus-within:text-cyan-400 transition-colors duration-300" />
              </div>
              {errors.confirmPassword && <p className="mt-2 text-sm text-red-400 font-medium">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-white/20 rounded bg-white/10 backdrop-blur-sm mt-1"
                required
              />
              <label htmlFor="agree-terms" className="text-sm text-slate-300 leading-relaxed">
                I agree to the{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">Privacy Policy</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 overflow-hidden pulse-glow"
              >
                <span className="relative z-10 flex items-center">
                  {isLoading ? 'Creating Account...' : 'Create Free Account'}
                  {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/10 backdrop-blur-sm text-slate-300 font-medium">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-4 px-4 border border-white/20 text-lg font-bold rounded-xl text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 transition-all duration-300 hover:shadow-xl group"
              >
                <span className="flex items-center">
                  Sign In Instead
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Sparkles className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-bold text-sm">Free Plan Includes</span>
                </div>
                <p className="text-green-300 text-sm">
                  Instant API access • No credit card required • 1,800 requests/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;