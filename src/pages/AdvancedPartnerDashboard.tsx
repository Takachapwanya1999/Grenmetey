import { useState } from 'react';
import { 
  TrendingUp, 
  Package, 
  DollarSign, 
  ShoppingCart,
  AlertCircle,
  Plus,
  Edit,
  Eye,
  BarChart3,
  Star,
  MessageSquare,
  Download,
  Upload,
  Settings,
  Bell,
  Filter,
  Search
} from 'lucide-react';

interface PartnerStats {
  totalRevenue: number;
  monthlyRevenue: number;
  totalOrders: number;
  monthlyOrders: number;
  totalProducts: number;
  activeProducts: number;
  averageRating: number;
  totalReviews: number;
  lowStockItems: number;
  pendingOrders: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  rating: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  image: string;
  lastUpdated: string;
}

interface Order {
  id: string;
  customerName: string;
  items: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  deliveryDate?: string;
}

export function AdvancedPartnerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - in real app, this would come from API
  const [stats] = useState<PartnerStats>({
    totalRevenue: 45280.50,
    monthlyRevenue: 8920.30,
    totalOrders: 342,
    monthlyOrders: 67,
    totalProducts: 45,
    activeProducts: 42,
    averageRating: 4.7,
    totalReviews: 189,
    lowStockItems: 5,
    pendingOrders: 8
  });

  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      price: 32.99,
      stock: 150,
      sold: 89,
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1546470427-e89fe17c7e49?w=100',
      lastUpdated: '2024-08-06'
    },
    {
      id: '2',
      name: 'Free Range Eggs',
      category: 'Dairy & Eggs',
      price: 45.00,
      stock: 5,
      sold: 156,
      rating: 4.9,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c0f?w=100',
      lastUpdated: '2024-08-05'
    },
    {
      id: '3',
      name: 'Fresh Spinach',
      category: 'Vegetables',
      price: 28.50,
      stock: 0,
      sold: 78,
      rating: 4.6,
      status: 'out_of_stock',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100',
      lastUpdated: '2024-08-04'
    }
  ]);

  const [orders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customerName: 'John Smith',
      items: 3,
      total: 156.50,
      status: 'pending',
      date: '2024-08-07',
      deliveryDate: '2024-08-09'
    },
    {
      id: 'ORD-002',
      customerName: 'Mary Johnson',
      items: 2,
      total: 89.30,
      status: 'processing',
      date: '2024-08-06',
      deliveryDate: '2024-08-08'
    },
    {
      id: 'ORD-003',
      customerName: 'David Wilson',
      items: 1,
      total: 45.00,
      status: 'shipped',
      date: '2024-08-05',
      deliveryDate: '2024-08-07'
    }
  ]);

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'text-green-600 bg-green-100',
      inactive: 'text-gray-600 bg-gray-100',
      out_of_stock: 'text-red-600 bg-red-100',
      pending: 'text-yellow-600 bg-yellow-100',
      processing: 'text-blue-600 bg-blue-100',
      shipped: 'text-purple-600 bg-purple-100',
      delivered: 'text-green-600 bg-green-100',
      cancelled: 'text-red-600 bg-red-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partner Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Green Valley Farm</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">R{stats.monthlyRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">↗ +12.5% from last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.monthlyOrders}</p>
                <p className="text-sm text-green-600 mt-1">↗ +8.3% from last month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Products</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeProducts}</p>
                <p className="text-sm text-gray-600 mt-1">of {stats.totalProducts} total</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
                <p className="text-sm text-gray-600 mt-1">{stats.totalReviews} reviews</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {stats.lowStockItems > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-orange-800">Low Stock Alert</h3>
                <p className="text-orange-700">
                  You have {stats.lowStockItems} products running low on stock. 
                  <button className="text-orange-600 hover:text-orange-800 font-medium ml-1 underline">
                    View details
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'products', label: 'Products', icon: Package },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
                {tab.id === 'orders' && stats.pendingOrders > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {stats.pendingOrders}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Revenue Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Revenue Overview</h3>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="week">Last 7 days</option>
                  <option value="month">Last 30 days</option>
                  <option value="quarter">Last 3 months</option>
                  <option value="year">Last year</option>
                </select>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Revenue chart would be displayed here</p>
                  <p className="text-sm text-gray-400">Integration with Chart.js or similar</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {orders.slice(0, 5).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.customerName} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">R{order.total}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Products</h3>
                <div className="space-y-4">
                  {products.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sold} sold • R{product.price}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Products Header */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Product Management</h3>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                    <Upload className="h-5 w-5" />
                    <span>Bulk Upload</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                    <Download className="h-5 w-5" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Product</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Category</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Price</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Stock</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded-lg"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{product.name}</p>
                              <p className="text-sm text-gray-600">Updated {product.lastUpdated}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{product.category}</td>
                        <td className="py-4 px-4 font-medium">R{product.price}</td>
                        <td className="py-4 px-4">
                          <span className={product.stock < 10 ? 'text-red-600 font-medium' : 'text-gray-900'}>
                            {product.stock}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(product.status)}`}>
                            {product.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tab contents would go here */}
      </div>
    </div>
  );
}
