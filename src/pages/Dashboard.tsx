import { useState } from 'react';
import { WeatherDashboard } from '../components/WeatherDashboard';
import { SmartNotificationCenter } from '../components/SmartNotificationCenter';
import { EnhancedProductReviews } from '../components/EnhancedProductReviews';
import { BarChart3, Calendar, TrendingUp, Users, Package, MapPin, Leaf, Target } from 'lucide-react';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'weather' | 'reviews' | 'analytics'>('overview');

  const stats = [
    { label: 'Total Orders', value: '1,247', change: '+12%', icon: Package, color: 'green' },
    { label: 'Active Farmers', value: '356', change: '+8%', icon: Users, color: 'blue' },
    { label: 'Avg Rating', value: '4.9', change: '+0.2', icon: Target, color: 'yellow' },
    { label: 'Revenue', value: 'R89,432', change: '+15%', icon: TrendingUp, color: 'purple' },
  ];

  const recentActivity = [
    { id: 1, action: 'New order placed', farmer: 'Green Valley Farm', time: '2 minutes ago', status: 'success' },
    { id: 2, action: 'Weather alert sent', location: 'Western Cape', time: '15 minutes ago', status: 'warning' },
    { id: 3, action: 'Product review added', product: 'Organic Tomatoes', time: '1 hour ago', status: 'info' },
    { id: 4, action: 'New farmer registered', farmer: 'Sunshine Orchards', time: '2 hours ago', status: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Grenmetey Investments Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening on your farm marketplace.</p>
            </div>
            <div className="flex items-center space-x-4">
              <SmartNotificationCenter />
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'weather', label: 'Weather Center', icon: Calendar },
              { id: 'reviews', label: 'Product Reviews', icon: Target },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'weather' | 'reviews' | 'analytics')}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                        <p className={`text-sm mt-1 ${
                          stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        stat.color === 'green' ? 'bg-green-100' :
                        stat.color === 'blue' ? 'bg-blue-100' :
                        stat.color === 'yellow' ? 'bg-yellow-100' : 'bg-purple-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          stat.color === 'green' ? 'text-green-600' :
                          stat.color === 'blue' ? 'text-blue-600' :
                          stat.color === 'yellow' ? 'text-yellow-600' : 'text-purple-600'
                        }`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-500' :
                          activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">
                            {activity.farmer || activity.location || activity.product} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Weather */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Weather</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">22°C</div>
                    <p className="text-gray-600 mb-4">Partly Cloudy</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Humidity</p>
                        <p className="font-medium">65%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Wind</p>
                        <p className="font-medium">12 km/h</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveTab('weather')}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Full Weather
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'weather' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Weather Center</h2>
              <p className="text-gray-600">Comprehensive weather information and farming recommendations for your region.</p>
            </div>
            <WeatherDashboard />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Reviews</h2>
              <p className="text-gray-600">Enhanced review system with farming context and detailed feedback.</p>
            </div>
            <EnhancedProductReviews productId="tomato-seeds" />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Insights</h2>
              <p className="text-gray-600">Detailed analytics and performance metrics for your agricultural marketplace.</p>
            </div>
            
            {/* Analytics placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance</h3>
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                    <p>Sales chart would be displayed here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Distribution</h3>
                <div className="h-64 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Regional map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
