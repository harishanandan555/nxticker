import React, { useState, useEffect } from 'react';
import { Code, Copy, Play, Book, Zap, CheckCircle, ExternalLink, Search } from 'lucide-react';
import Navigation from '../components/Navigation';

const DocumentationPage: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('quote');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const endpoints = [
    {
      id: 'quote',
      name: 'Real-time Quote',
      method: 'GET',
      path: '/quote',
      description: 'Get real-time or latest quote for a symbol with comprehensive market data',
      parameters: [
        { name: 'symbol', type: 'string', required: true, description: 'Stock symbol (e.g., AAPL, TSLA)' },
        { name: 'exchange', type: 'string', required: false, description: 'Exchange code (default: NASDAQ)' },
        { name: 'extended', type: 'boolean', required: false, description: 'Include extended hours data' }
      ],
      example: {
        request: `curl -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.betatickers.com/v1/quote?symbol=AAPL&extended=true"`,
        response: `{
  "symbol": "AAPL",
  "price": 185.64,
  "change": 2.34,
  "changePercent": 1.28,
  "volume": 45123000,
  "avgVolume": 52000000,
  "marketCap": 2890000000000,
  "timestamp": "2025-01-01T15:30:00Z",
  "exchange": "NASDAQ",
  "currency": "USD",
  "extendedHours": {
    "price": 186.20,
    "change": 0.56,
    "volume": 1250000
  }
}`
      }
    }
  ];

  const handleCopyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const selectedEndpoint = endpoints.find(ep => ep.id === activeEndpoint) || endpoints[0];

  const sdkExamples = [
    {
      language: 'Python',
      code: `pip install betatickers

from betatickers import Client

client = Client("YOUR_API_KEY")
quote = client.get_quote("AAPL", extended=True)
print(f"Price: ${quote.price}, Change: {quote.change_percent}%")`
    },
    {
      language: 'JavaScript',
      code: `npm install betatickers

import { BetaTickers } from 'betatickers';

const client = new BetaTickers('YOUR_API_KEY');
const quote = await client.quote('AAPL', { extended: true });
console.log(\`Price: $\${quote.price}, Change: \${quote.changePercent}%\`);`
    },
    {
      language: 'cURL',
      code: `curl -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  "https://api.betatickers.com/v1/quote?symbol=AAPL&extended=true"`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'slide-up' : ''}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full px-4 py-2 mb-8">
            <Book className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">API Documentation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Developer
            </span>
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides, API references, and code examples to get you started quickly
          </p>
        </div>

        {/* Search Bar */}
        <div className={`mb-8 ${isVisible ? 'slide-up stagger-1' : ''}`}>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation, endpoints, guides..."
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${isVisible ? 'slide-up stagger-3' : ''}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 sticky top-28 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Code className="h-5 w-5 mr-2 text-blue-600" />
                API Reference
              </h3>
              <nav className="space-y-2">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 group ${
                      activeEndpoint === endpoint.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{endpoint.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        endpoint.method === 'GET' 
                          ? activeEndpoint === endpoint.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-green-50 text-green-600 border border-green-200'
                          : 'bg-blue-50 text-blue-600 border border-blue-200'
                      }`}>
                        {endpoint.method}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Endpoint Header */}
              <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    selectedEndpoint.method === 'GET' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {selectedEndpoint.method}
                  </span>
                  <code className="text-cyan-600 font-mono text-xl font-bold">{selectedEndpoint.path}</code>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3">{selectedEndpoint.name}</h1>
                <p className="text-slate-600 text-lg leading-relaxed">{selectedEndpoint.description}</p>
              </div>

              {/* Parameters */}
              <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-3' : ''}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Name</th>
                        <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Type</th>
                        <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Required</th>
                        <th className="text-left py-4 px-4 text-sm font-bold text-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedEndpoint.parameters.map((param, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-200">
                          <td className="py-4 px-4">
                            <code className="text-cyan-600 text-sm font-bold bg-cyan-50 px-2 py-1 rounded border border-cyan-200">{param.name}</code>
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-700 font-medium">{param.type}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                              param.required 
                                ? 'bg-red-50 text-red-700 border border-red-200' 
                                : 'bg-slate-50 text-slate-600 border border-slate-200'
                            }`}>
                              {param.required ? 'Required' : 'Optional'}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-600 leading-relaxed">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example Request */}
              <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-4' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Play className="h-6 w-6 mr-2 text-green-600" />
                    Example Request
                  </h3>
                  <button
                    onClick={() => handleCopyCode(selectedEndpoint.example.request, 'request')}
                    className="text-slate-500 hover:text-cyan-600 transition-colors duration-200 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-50"
                  >
                    {copiedCode === 'request' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    <span className="text-sm font-medium">
                      {copiedCode === 'request' ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{selectedEndpoint.example.request}</code>
                  </pre>
                </div>
              </div>

              {/* Example Response */}
              <div className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-8 hover:bg-white hover:border-blue-300/50 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 ${isVisible ? 'slide-up stagger-5' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Code className="h-6 w-6 mr-2 text-blue-600" />
                    Example Response
                  </h3>
                  <button
                    onClick={() => handleCopyCode(selectedEndpoint.example.response, 'response')}
                    className="text-slate-500 hover:text-cyan-600 transition-colors duration-200 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-50"
                  >
                    {copiedCode === 'response' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    <span className="text-sm font-medium">
                      {copiedCode === 'response' ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{selectedEndpoint.example.response}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDK Section */}
        <div className={`mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden ${isVisible ? 'slide-up stagger-6' : ''}`}>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start with SDKs
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Get up and running in minutes with our official SDKs and comprehensive examples
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sdkExamples.map((example, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <Code className="h-5 w-5 mr-2 text-cyan-400" />
                      {example.language}
                    </h3>
                    <button
                      onClick={() => handleCopyCode(example.code, example.language)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    >
                      {copiedCode === example.language ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-xl group"
              >
                View Full Documentation
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;