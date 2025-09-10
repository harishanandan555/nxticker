import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent opacity-20">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <TrendingUp className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have taken a detour. Don't worry, 
              even the best traders sometimes take the wrong path!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link
              to="/"
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Go Home</h3>
                <p className="text-sm text-slate-600">Return to the main page</p>
              </div>
            </Link>

            <Link
              to="/dashboard"
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Dashboard</h3>
                <p className="text-sm text-slate-600">View your analytics</p>
              </div>
            </Link>

            <Link
              to="/pricing"
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Pricing</h3>
                <p className="text-sm text-slate-600">View our plans</p>
              </div>
            </Link>

            <Link
              to="/documentation"
              className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
                <p className="text-sm text-slate-600">Get help and guides</p>
              </div>
            </Link>
          </div>

          {/* Back Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>
            
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <Home className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Take Me Home
            </Link>
          </div>

          {/* Fun Fact */}
          <div className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Did You Know?</h3>
            <p className="text-slate-700 text-sm">
              The HTTP 404 error was named after room 404 at CERN, where the original web servers were located. 
              Just like missing data in the markets, sometimes the best opportunities are found when you least expect them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;