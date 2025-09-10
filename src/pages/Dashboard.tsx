import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Key, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Copy, 
  RefreshCw, 
  Eye, 
  EyeOff,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Activity,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Crown,
  Bell,
  Search,
  Download,
  MoreHorizontal,
  Star,
  Plus,
  ExternalLink,
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showApiKey, setShowApiKey] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced mock data
  const usageData = [
    { name: 'Dec 26', requests: 1200, latency: 45, errors: 2, success: 98.3 },
    { name: 'Dec 27', requests: 1800, latency: 42, errors: 1, success: 99.4 },
    { name: 'Dec 28', requests: 1500, latency: 38, errors: 0, success: 100 },
    { name: 'Dec 29', requests: 2200, latency: 41, errors: 3, success: 98.6 },
    { name: 'Dec 30', requests: 1900, latency: 39, errors: 1, success: 99.5 },
    { name: 'Dec 31', requests: 2800, latency: 44, errors: 2, success: 99.3 },
    { name: 'Jan 1', requests: 3100, latency: 37, errors: 1, success: 99.7 },
  ];

  const recentActivity = [
    { endpoint: '/quote', symbol: 'AAPL', timestamp: '2025-01-01 10:30:15', status: 'success', latency: '34ms', method: 'GET' },
    { endpoint: '/intraday', symbol: 'TSLA', timestamp: '2025-01-01 10:29:45', status: 'success', latency: '28ms', method: 'GET' },
    { endpoint: '/fundamentals', symbol: 'MSFT', timestamp: '2025-01-01 10:28:20', status: 'success', latency: '41ms', method: 'GET' },
    { endpoint: '/fx/quote', symbol: 'EUR/USD', timestamp: '2025-01-01 10:27:30', status: 'error', latency: '—', method: 'GET' },
    { endpoint: '/crypto/ohlcv', symbol: 'BTC/USD', timestamp: '2025-01-01 10:26:15', status: 'success', latency: '32ms', method: 'GET' },
    { endpoint: '/news', symbol: 'MARKET', timestamp: '2025-01-01 10:25:30', status: 'success', latency: '45ms', method: 'GET' },
    { endpoint: '/screener', symbol: 'STOCKS', timestamp: '2025-01-01 10:24:15', status: 'success', latency: '52ms', method: 'POST' },
  ];

  const endpointStats = [
    { name: '/quote', requests: 1247, avgLatency: 34, successRate: 99.8 },
    { name: '/intraday', requests: 892, avgLatency: 28, successRate: 99.9 },
    { name: '/fundamentals', requests: 456, avgLatency: 41, successRate: 99.5 },
    { name: '/fx/quote', requests: 234, avgLatency: 32, successRate: 98.7 },
    { name: '/crypto/ohlcv', requests: 567, avgLatency: 29, successRate: 99.6 },
  ];

  const marketData = [
    { symbol: 'AAPL', price: 193.58, change: 2.34, changePercent: 1.22, volume: '45.2M' },
    { symbol: 'TSLA', price: 248.42, change: -5.67, changePercent: -2.23, volume: '78.9M' },
    { symbol: 'MSFT', price: 378.85, change: 1.23, changePercent: 0.33, volume: '23.1M' },
    { symbol: 'GOOGL', price: 142.56, change: 0.89, changePercent: 0.63, volume: '34.7M' },
    { symbol: 'AMZN', price: 155.23, change: -1.45, changePercent: -0.92, volume: '56.3M' },
  ];

  const pieData = [
    { name: 'Stocks', value: 45, color: '#06b6d4' },
    { name: 'Crypto', value: 25, color: '#8b5cf6' },
    { name: 'Forex', value: 20, color: '#10b981' },
    { name: 'News', value: 10, color: '#f59e0b' },
  ];


  const notificationList = [
    { id: 1, type: 'success', title: 'API Key Generated', message: 'Your new API key has been successfully generated.', time: '2 minutes ago', read: false },
    { id: 2, type: 'warning', title: 'Usage Alert', message: 'You\'ve used 80% of your monthly quota.', time: '1 hour ago', read: false },
    { id: 3, type: 'info', title: 'New Feature', message: 'Real-time market data is now available.', time: '3 hours ago', read: true },
    { id: 4, type: 'success', title: 'Payment Received', message: 'Your payment of $29.00 has been processed.', time: '1 day ago', read: true },
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(user.apiKey);
  };

  const handleRegenerateKey = () => {
    console.log('Regenerating API key...');
  };

  const usagePercentage = (user.usage.requests / user.usage.limit) * 100;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'apikeys', label: 'API Keys', icon: <Key className="h-5 w-5" /> },
    { id: 'market', label: 'Market Data', icon: <Globe className="h-5 w-5" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  const quickStats = [
    {
      label: 'Requests Today',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: <Activity className="h-6 w-6" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Avg Latency',
      value: '38ms',
      change: '-5ms',
      trend: 'up',
      icon: <Zap className="h-6 w-6" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      label: 'Success Rate',
      value: '99.8%',
      change: '+0.2%',
      trend: 'up',
      icon: <CheckCircle className="h-6 w-6" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Errors',
      value: '3',
      change: '-2',
      trend: 'up',
      icon: <AlertTriangle className="h-6 w-6" />,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`mb-8 ${isVisible ? 'slide-up' : ''}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                Welcome back, {user.email.split('@')[0]}
              </h1>
              <p className="text-slate-600 text-lg">Here's what's happening with your API usage today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search endpoints, symbols..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full sm:w-80 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              {/* Plan Badge */}
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
                user.plan === 'free' ? 'bg-slate-100 text-slate-700' :
                user.plan === 'developer' ? 'bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200' :
                user.plan === 'pro' ? 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border border-purple-200' :
                'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200'
              }`}>
                <Crown className="h-4 w-4" />
                <span className="capitalize">{user.plan} Plan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`mb-8 ${isVisible ? 'slide-up stagger-1' : ''}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 border border-cyan-200 transition-all duration-300 hover:scale-105 group">
                <Download className="h-6 w-6 text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-cyan-700">Export Data</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 transition-all duration-300 hover:scale-105 group">
                <Plus className="h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-green-700">New API Key</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 border border-purple-200 transition-all duration-300 hover:scale-105 group">
                <BarChart3 className="h-6 w-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-purple-700">View Reports</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border border-orange-200 transition-all duration-300 hover:scale-105 group">
                <Settings className="h-6 w-6 text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-orange-700">Settings</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 border border-pink-200 transition-all duration-300 hover:scale-105 group">
                <HelpCircle className="h-6 w-6 text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-pink-700">Help Center</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 border border-slate-200 transition-all duration-300 hover:scale-105 group">
                <ExternalLink className="h-6 w-6 text-slate-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-slate-700">Documentation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={`mb-8 ${isVisible ? 'slide-up stagger-1' : ''}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-2 shadow-sm">
            <nav className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 font-medium text-sm flex items-center justify-center space-x-2 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'slide-up stagger-2' : ''}`}>
              {quickStats.map((stat, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Stats Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">Current Plan</p>
                    <p className="text-3xl font-bold text-slate-900 capitalize">{user.plan}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Link
                  to="/pricing"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                >
                  Upgrade Plan
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">Requests This Month</p>
                    <p className="text-3xl font-bold text-slate-900">{user.usage.requests.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <ArrowUpRight className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>of {user.usage.limit.toLocaleString()}</span>
                    <span className="font-semibold">{usagePercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                      style={{ width: `${usagePercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">Reset Date</p>
                    <p className="text-3xl font-bold text-slate-900">{user.usage.resetDate}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Your usage will reset automatically
                </p>
              </div>
            </div>

            {/* Usage Chart */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-4' : ''}`}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">API Usage Analytics</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    <span className="text-sm text-slate-600">Requests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Latency</span>
                  </div>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={usageData}>
                    <defs>
                      <linearGradient id="requestsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="requests" 
                      stroke="#06b6d4" 
                      strokeWidth={3}
                      fill="url(#requestsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent API Calls</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Endpoint</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Symbol</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Timestamp</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Latency</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentActivity.map((activity, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                        <td className="py-4 px-4 text-sm text-slate-900 font-mono font-medium">{activity.endpoint}</td>
                        <td className="py-4 px-4 text-sm text-slate-700 font-semibold">{activity.symbol}</td>
                        <td className="py-4 px-4 text-sm text-slate-600">{activity.timestamp}</td>
                        <td className="py-4 px-4 text-sm text-slate-600 font-mono">{activity.latency}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            activity.status === 'success' 
                              ? 'bg-green-50 text-green-700 border border-green-200' 
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            {activity.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Overview */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'slide-up stagger-2' : ''}`}>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +12.5%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">3,247</div>
                <div className="text-slate-600 font-medium">Total Requests</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    -5ms
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">38ms</div>
                <div className="text-slate-600 font-medium">Avg Response Time</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +0.2%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">99.8%</div>
                <div className="text-slate-600 font-medium">Success Rate</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    -2
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
                <div className="text-slate-600 font-medium">Errors Today</div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              {/* Usage Chart */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Volume</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={usageData}>
                      <defs>
                        <linearGradient id="requestsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="requests" 
                        stroke="#06b6d4" 
                        strokeWidth={3}
                        fill="url(#requestsGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Endpoint Distribution */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Endpoint Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-slate-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Endpoint Performance Table */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Endpoint Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Endpoint</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Requests</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Avg Latency</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Success Rate</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {endpointStats.map((endpoint, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                        <td className="py-4 px-4 text-sm text-slate-900 font-mono font-medium">{endpoint.name}</td>
                        <td className="py-4 px-4 text-sm text-slate-700 font-semibold">{endpoint.requests.toLocaleString()}</td>
                        <td className="py-4 px-4 text-sm text-slate-700 font-mono">{endpoint.avgLatency}ms</td>
                        <td className="py-4 px-4 text-sm text-slate-700 font-semibold">{endpoint.successRate}%</td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            endpoint.successRate >= 99 ? 'bg-green-50 text-green-700 border border-green-200' :
                            endpoint.successRate >= 95 ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                            'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            {endpoint.successRate >= 99 ? 'Excellent' :
                             endpoint.successRate >= 95 ? 'Good' : 'Needs Attention'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'apikeys' && (
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">API Key Management</h3>
              
              <div className="space-y-6">
                <div className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-slate-900 font-bold mb-2 flex items-center">
                        <Key className="h-5 w-5 mr-2 text-slate-600" />
                        Primary API Key
                      </h4>
                      <div className="flex items-center space-x-4">
                        <code className="text-sm text-slate-700 font-mono bg-white px-3 py-2 rounded-lg border">
                          {showApiKey ? user.apiKey : '••••••••••••••••••••••••••••••••'}
                        </code>
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="text-slate-500 hover:text-slate-700 transition-colors duration-200 p-2 hover:bg-white rounded-lg"
                        >
                          {showApiKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                        <button
                          onClick={handleCopyApiKey}
                          className="text-slate-500 hover:text-cyan-600 transition-colors duration-200 p-2 hover:bg-white rounded-lg"
                        >
                          <Copy className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={handleRegenerateKey}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center space-x-2 hover:shadow-lg"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Regenerate</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-2xl">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-amber-800 font-bold mb-2">Security Best Practices</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Keep your API key secure and never expose it in client-side code. 
                        Regenerating your key will immediately invalidate the old one and may require updating your applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Usage Guidelines & Examples</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-slate-900 font-bold mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                    Rate Limits
                  </h4>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                    <p className="text-sm text-slate-700 mb-3">Current plan: <span className="text-blue-600 font-bold capitalize">{user.plan}</span></p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {user.usage.limit.toLocaleString()} requests per month
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Burst capacity available
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Rate limit headers included
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Authentication
                  </h4>
                  <p className="text-sm text-slate-700 mb-3">Include your API key in the request header:</p>
                  <div className="bg-slate-900 p-4 rounded-xl">
                    <code className="block text-cyan-400 text-sm font-mono">
                      Authorization: Bearer {user.apiKey.substring(0, 16)}...
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="space-y-8">
            {/* Market Overview */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'slide-up stagger-2' : ''}`}>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +1.2%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$193.58</div>
                <div className="text-slate-600 font-medium">AAPL</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500">
                    <TrendingDown className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    -2.2%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$248.42</div>
                <div className="text-slate-600 font-medium">TSLA</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +0.3%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$378.85</div>
                <div className="text-slate-600 font-medium">MSFT</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +0.6%
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">$142.56</div>
                <div className="text-slate-600 font-medium">GOOGL</div>
              </div>
            </div>

            {/* Market Data Table */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Live Market Data</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-600">Live</span>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Refresh
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Symbol</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Price</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Change</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Change %</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Volume</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {marketData.map((stock, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                        <td className="py-4 px-4 text-sm text-slate-900 font-bold">{stock.symbol}</td>
                        <td className="py-4 px-4 text-sm text-slate-700 font-semibold">${stock.price}</td>
                        <td className={`py-4 px-4 text-sm font-semibold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change >= 0 ? '+' : ''}{stock.change}
                        </td>
                        <td className={`py-4 px-4 text-sm font-semibold ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-700">{stock.volume}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 p-1">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-700 p-1">
                              <Star className="h-4 w-4" />
                            </button>
                            <button className="text-slate-600 hover:text-slate-700 p-1">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Market Tools */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? 'slide-up stagger-4' : ''}`}>
              {/* Quick Quote */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Quote</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Symbol</label>
                    <input
                      type="text"
                      placeholder="Enter symbol (e.g., AAPL)"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Market News */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Latest News</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Tech Stocks Rally on Strong Earnings</h4>
                    <p className="text-sm text-slate-600 mb-2">Major technology companies report better-than-expected quarterly results...</p>
                    <span className="text-xs text-slate-500">2 hours ago</span>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Federal Reserve Maintains Interest Rates</h4>
                    <p className="text-sm text-slate-600 mb-2">The Fed keeps rates steady, signaling continued economic stability...</p>
                    <span className="text-xs text-slate-500">4 hours ago</span>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Crypto Market Shows Volatility</h4>
                    <p className="text-sm text-slate-600 mb-2">Bitcoin and other cryptocurrencies experience significant price swings...</p>
                    <span className="text-xs text-slate-500">6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Current Subscription</h3>
              
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-3xl font-bold text-slate-900 capitalize mb-2">{user.plan} Plan</h4>
                    <p className="text-slate-600 text-lg mb-1">
                      {user.plan === 'free' ? 'Free forever' : 
                       user.plan === 'developer' ? '$29/month' :
                       user.plan === 'pro' ? '$199/month' : 'Custom pricing'}
                    </p>
                    <p className="text-sm text-slate-500">
                      Next billing: {user.usage.resetDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <Link
                      to="/pricing"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105 inline-flex items-center"
                    >
                      Upgrade Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Billing History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Date</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Description</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Amount</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors duration-200">
                      <td className="py-4 px-4 text-sm text-slate-700 font-medium">Dec 1, 2024</td>
                      <td className="py-4 px-4 text-sm text-slate-900 font-semibold">Developer Plan</td>
                      <td className="py-4 px-4 text-sm text-slate-700 font-bold">$29.00</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex px-3 py-1 text-xs font-bold rounded-full bg-green-50 text-green-700 border border-green-200">
                          Paid
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-8">
            {/* Notification Settings */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Notification Preferences</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Notifications</h4>
                    <p className="text-sm text-slate-600">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Usage Alerts</h4>
                    <p className="text-sm text-slate-600">Get notified when approaching usage limits</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">System Updates</h4>
                    <p className="text-sm text-slate-600">Notifications about new features and updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Security Alerts</h4>
                    <p className="text-sm text-slate-600">Important security-related notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Recent Notifications</h3>
              
              <div className="space-y-4">
                {notificationList.map((notification) => (
                  <div key={notification.id} className={`p-4 rounded-xl border-l-4 ${
                    notification.type === 'success' ? 'bg-green-50 border-green-500' :
                    notification.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    notification.type === 'error' ? 'bg-red-50 border-red-500' :
                    'bg-blue-50 border-blue-500'
                  } ${!notification.read ? 'ring-2 ring-cyan-200' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">{notification.title}</h4>
                        <p className="text-sm text-slate-600 mb-2">{notification.message}</p>
                        <span className="text-xs text-slate-500">{notification.time}</span>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8">
            {/* Account Settings */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Account Settings</h3>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 text-slate-600 rounded-xl font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      User ID
                    </label>
                    <input
                      type="text"
                      value={user.id}
                      disabled
                      className="w-full px-4 py-3 border border-slate-200 bg-slate-50 text-slate-600 rounded-xl font-mono"
                    />
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Danger Zone</h4>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Preferences</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Dark Mode</h4>
                    <p className="text-sm text-slate-600">Switch to dark theme</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Auto Refresh</h4>
                    <p className="text-sm text-slate-600">Automatically refresh data every 30 seconds</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Notifications</h4>
                    <p className="text-sm text-slate-600">Receive email updates and alerts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={emailNotifications} onChange={(e) => setEmailNotifications(e.target.checked)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* API Settings */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">API Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Default Time Range
                  </label>
                  <select
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="1d">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Last 90 Days</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Rate Limit Display
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="rateLimit" value="requests" defaultChecked className="mr-2" />
                      <span className="text-sm text-slate-700">Requests per minute</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="rateLimit" value="burst" className="mr-2" />
                      <span className="text-sm text-slate-700">Burst capacity</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Security Settings</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-800">Two-Factor Authentication</h4>
                      <p className="text-sm text-green-700">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    Enable 2FA
                  </button>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Password</h4>
                      <p className="text-sm text-blue-700">Last changed 30 days ago</p>
                    </div>
                  </div>
                  <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    Change Password
                  </button>
                </div>
                
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-6 w-6 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-orange-800">Login Activity</h4>
                      <p className="text-sm text-orange-700">View recent login attempts and sessions</p>
                    </div>
                  </div>
                  <button className="mt-3 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                    View Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;