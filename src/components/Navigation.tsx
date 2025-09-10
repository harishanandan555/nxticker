import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/pricing', label: 'Pricing' },
    { path: '/documentation', label: 'Documentation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                BetaTickers
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-200 group ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 text-sm font-medium">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      <button
                        onClick={logout}
                        className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-slate-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-50 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;