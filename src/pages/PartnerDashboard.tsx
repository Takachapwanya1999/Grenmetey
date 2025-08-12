import { useState } from 'react';
import { 
  Package, 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Plus,
  BarChart3,
  MapPin,
  Star,
  AlertCircle,
  Leaf,
  Settings,
  Download
} from 'lucide-react';

// Mock data for partner dashboard
const dashboardStats = {
  totalRevenue: 125680.50,
  monthlyRevenue: 18940.20,
  totalProducts: 47,
  activeProducts: 43,
  totalOrders: 289,
  pendingOrders: 8,
  avgRating: 4.7,
  totalReviews: 156
};

const recentOrders = [
  {
    id: 'ORD-2024-001',
    customer: 'Sarah Johnson',
    products: ['Organic Tomatoes', 'Baby Spinach'],
    total: 74.98,
    status: 'pending',
    date: '2024-08-04',
    location: 'Cape Town'
  },
  {
    id: 'ORD-2024-002',
    customer: 'Michael Chen',
    products: ['Fresh Avocados', 'Organic Carrots'],
    total: 122.98,
    status: 'processing',
    date: '2024-08-04',
    location: 'Johannesburg'
  },
  {
    id: 'ORD-2024-003',
    customer: 'Priya Patel',
    products: ['Premium Spinach'],
    total: 28.99,
    status: 'shipped',
    date: '2024-08-03',
    location: 'Durban'
  }
];

const productPerformance = [
  {
    id: 1,
    name: 'Organic Cherry Tomatoes',
    sales: 124,
    revenue: 5703.76,
    rating: 4.8,
    stock: 45,
    trend: '+12%'
  },
  {
    id: 2,
    name: 'Baby Spinach Leaves',
    sales: 89,
    revenue: 2589.11,
    rating: 4.7,
    stock: 23,
    trend: '+8%'
  },
  {
    id: 3,
    name: 'Heritage Carrots',
    sales: 67,
    revenue: 2411.33,
    rating: 4.6,
    stock: 12,
    trend: '-3%'
  }
];

export function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-green-100 text-green-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return statusMap[status as keyof typeof statusMap] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Dashboard</h1>
              <p className="text-gray-600">Welcome back, Green Valley Farm</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Western Cape, South Africa</span>
                <div className="ml-4 flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  <span>{dashboardStats.avgRating} rating</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="bg-agricultural-600 text-white px-4 py-2 rounded-lg hover:bg-agricultural-700 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: BarChart3 },
                { id: 'products', name: 'Products', icon: Package },
                { id: 'orders', name: 'Orders', icon: ShoppingCart },
                { id: 'analytics', name: 'Analytics', icon: TrendingUp },
                { id: 'settings', name: 'Settings', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                    activeTab === tab.id
                      ? 'border-agricultural-500 text-agricultural-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">R{dashboardStats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12.5%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Products</p>
                    <p className="text-2xl font-bold text-gray-900">{dashboardStats.activeProducts}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-500">{dashboardStats.totalProducts} total products</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalOrders}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <ShoppingCart className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <AlertCircle className="h-4 w-4 text-orange-500 mr-1" />
                  <span className="text-orange-600">{dashboardStats.pendingOrders} pending</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Customer Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{dashboardStats.avgRating}</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-500">{dashboardStats.totalReviews} reviews</span>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                <button className="text-agricultural-600 hover:text-agricultural-700 text-sm font-medium">
                  View all orders
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                            <div className="text-sm text-gray-500">{order.location}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {order.products.join(', ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          R{order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Performance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
                <button className="text-agricultural-600 hover:text-agricultural-700 text-sm font-medium">
                  View all products
                </button>
              </div>
              <div className="space-y-4">
                {productPerformance.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Leaf className="h-8 w-8 text-agricultural-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{product.sales} sales</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            <span>{product.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{product.stock} in stock</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">R{product.revenue.toFixed(2)}</div>
                      <div className={`text-sm ${product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {product.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other tab content placeholders */}
        {activeTab !== 'overview' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <div className="p-6">
                <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
                  <Package className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 capitalize">{activeTab} Section</h3>
                <p className="mt-2 text-gray-500">
                  {activeTab === 'products' && 'Manage your agricultural products, inventory, and pricing.'}
                  {activeTab === 'orders' && 'View and process customer orders, manage fulfillment.'}
                  {activeTab === 'analytics' && 'Detailed analytics and insights about your farm business.'}
                  {activeTab === 'settings' && 'Manage your farm profile, payment settings, and preferences.'}
                </p>
                <div className="mt-6">
                  <button className="bg-agricultural-600 text-white px-4 py-2 rounded-lg hover:bg-agricultural-700">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
