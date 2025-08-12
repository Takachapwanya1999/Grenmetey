import { useState, useEffect } from 'react';
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
  Download,
  Upload,
  Settings,
  Bell,
  Filter,
  Search,
  Users,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  sold: number;
  rating: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  image: string;
  lastUpdated: string;
  harvestDate?: string;
  expiryDate?: string;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  deliveryDate?: string;
  shippingAddress: string;
  paymentMethod: string;
  commission: number;
}

interface SalesData {
  date: string;
  revenue: number;
  orders: number;
}

export function FunctionalPartnerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  // Mock data - in real app, this would come from API
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      price: 32.99,
      stock: 150,
      lowStockThreshold: 20,
      sold: 89,
      rating: 4.8,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1546470427-e89fe17c7e49?w=100',
      lastUpdated: '2024-08-06',
      harvestDate: '2024-08-05',
      expiryDate: '2024-08-12'
    },
    {
      id: '2',
      name: 'Free Range Eggs',
      category: 'Dairy & Eggs',
      price: 45.00,
      stock: 5,
      lowStockThreshold: 10,
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
      lowStockThreshold: 15,
      sold: 78,
      rating: 4.6,
      status: 'out_of_stock',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100',
      lastUpdated: '2024-08-04',
      harvestDate: '2024-08-03',
      expiryDate: '2024-08-10'
    }
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customerName: 'John Smith',
      customerEmail: 'john@example.com',
      items: [
        { productId: '1', productName: 'Organic Tomatoes', quantity: 3, price: 32.99 },
        { productId: '2', productName: 'Free Range Eggs', quantity: 2, price: 45.00 }
      ],
      total: 188.97,
      commission: 18.90,
      status: 'pending',
      date: '2024-08-07',
      deliveryDate: '2024-08-09',
      shippingAddress: '123 Main St, Johannesburg',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-002',
      customerName: 'Mary Johnson',
      customerEmail: 'mary@example.com',
      items: [
        { productId: '1', productName: 'Organic Tomatoes', quantity: 2, price: 32.99 }
      ],
      total: 65.98,
      commission: 6.60,
      status: 'processing',
      date: '2024-08-06',
      deliveryDate: '2024-08-08',
      shippingAddress: '456 Oak Ave, Cape Town',
      paymentMethod: 'PayPal'
    }
  ]);

  const [salesData] = useState<SalesData[]>([
    { date: '2024-08-01', revenue: 1250.00, orders: 8 },
    { date: '2024-08-02', revenue: 980.50, orders: 6 },
    { date: '2024-08-03', revenue: 1560.75, orders: 12 },
    { date: '2024-08-04', revenue: 2100.00, orders: 15 },
    { date: '2024-08-05', revenue: 1890.25, orders: 11 },
    { date: '2024-08-06', revenue: 2250.80, orders: 14 },
    { date: '2024-08-07', revenue: 1750.30, orders: 9 }
  ]);

  // Calculate statistics
  const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  const lowStockItems = inventory.filter(item => item.stock <= item.lowStockThreshold);
  const pendingOrders = orders.filter(order => order.status === 'pending');
  const totalCommission = orders.reduce((sum, order) => sum + order.commission, 0);

  // Check for notifications
  useEffect(() => {
    const newNotifications: string[] = [];
    
    if (lowStockItems.length > 0) {
      newNotifications.push(`${lowStockItems.length} products are running low on stock`);
    }
    
    if (pendingOrders.length > 0) {
      newNotifications.push(`${pendingOrders.length} orders need your attention`);
    }

    // Check for expiring products
    const expiringItems = inventory.filter(item => {
      if (!item.expiryDate) return false;
      const daysUntilExpiry = Math.ceil((new Date(item.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      return daysUntilExpiry <= 3 && daysUntilExpiry > 0;
    });

    if (expiringItems.length > 0) {
      newNotifications.push(`${expiringItems.length} products expiring soon`);
    }

    setNotifications(newNotifications);
  }, [inventory, orders, lowStockItems.length, pendingOrders.length]);

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    setSelectedOrder(null);
  };

  const updateInventoryStock = (productId: string, newStock: number) => {
    setInventory(prev => prev.map(item =>
      item.id === productId ? { 
        ...item, 
        stock: newStock,
        status: newStock === 0 ? 'out_of_stock' : 'active',
        lastUpdated: new Date().toISOString().split('T')[0]
      } : item
    ));
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'text-green-600 bg-green-100',
      inactive: 'text-gray-600 bg-gray-100',
      out_of_stock: 'text-red-600 bg-red-100',
      pending: 'text-yellow-600 bg-yellow-100',
      confirmed: 'text-blue-600 bg-blue-100',
      processing: 'text-purple-600 bg-purple-100',
      shipped: 'text-indigo-600 bg-indigo-100',
      delivered: 'text-green-600 bg-green-100',
      cancelled: 'text-red-600 bg-red-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Notifications */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partner Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Green Valley Farm</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="h-6 w-6" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {notifications.length > 0 && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Notifications</h3>
                      <div className="space-y-2">
                        {notifications.map((notification, index) => (
                          <div key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                            <p className="text-sm text-gray-700">{notification}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => alert('Add Product functionality coming soon!')}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
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
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">R{totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">↗ +12.5% from last week</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
                <p className="text-sm text-green-600 mt-1">↗ +8.3% from last week</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Order</p>
                <p className="text-2xl font-bold text-gray-900">R{avgOrderValue.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">per order</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Commission Earned</p>
                <p className="text-2xl font-bold text-gray-900">R{totalCommission.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">10% avg commission</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {lowStockItems.length > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-orange-800">Low Stock Alert</h3>
                <p className="text-orange-700">
                  {lowStockItems.map(item => item.name).join(', ')} are running low on stock.
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
              { id: 'inventory', label: 'Inventory', icon: Package },
              { id: 'orders', label: 'Orders', icon: ShoppingCart },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'customers', label: 'Customers', icon: Users },
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
                {tab.id === 'orders' && pendingOrders.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {pendingOrders.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Sales Overview</h3>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="week">Last 7 days</option>
                  <option value="month">Last 30 days</option>
                  <option value="quarter">Last 3 months</option>
                </select>
              </div>
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                  {salesData.map((day) => (
                    <div key={day.date} className="flex flex-col items-center">
                      <div 
                        className="bg-green-500 rounded-t-md transition-all duration-500 hover:bg-green-600"
                        style={{ 
                          height: `${(day.revenue / Math.max(...salesData.map(d => d.revenue))) * 200}px`,
                          width: '30px'
                        }}
                        title={`${day.date}: R${day.revenue}`}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2 rotate-45">
                        {new Date(day.date).getDate()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h3>
                <div className="space-y-4">
                  {orders.slice(0, 5).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                         onClick={() => setSelectedOrder(order)}>
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.customerName} • {order.items.length} items</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
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

              {/* Top Products */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Products</h3>
                <div className="space-y-4">
                  {inventory.sort((a, b) => b.sold - a.sold).slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sold} sold • R{product.price}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                        {product.stock <= product.lowStockThreshold && (
                          <span className="text-xs text-red-600 font-medium">Low Stock</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {/* Inventory Header */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Inventory Management</h3>
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

              {/* Inventory Table */}
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
                    {inventory.filter(product => 
                      product.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((product) => (
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
                              {product.expiryDate && (
                                <p className="text-xs text-orange-600">Expires {product.expiryDate}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{product.category}</td>
                        <td className="py-4 px-4 font-medium">R{product.price}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              value={product.stock}
                              onChange={(e) => updateInventoryStock(product.id, parseInt(e.target.value) || 0)}
                              className={`w-16 px-2 py-1 border rounded text-sm ${
                                product.stock <= product.lowStockThreshold ? 'border-red-300 text-red-600' : 'border-gray-300'
                              }`}
                            />
                            {product.stock <= product.lowStockThreshold && (
                              <AlertCircle className="h-4 w-4 text-red-500" />
                            )}
                          </div>
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

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Management</h3>
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                       onClick={() => setSelectedOrder(order)}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-900">{order.id}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{order.customerName} • {order.customerEmail}</p>
                        <p className="text-sm text-gray-600">{order.items.length} items • R{order.total}</p>
                        <p className="text-xs text-gray-500">Order date: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Commission: R{order.commission}</p>
                        {order.deliveryDate && (
                          <p className="text-sm text-gray-600">Delivery: {order.deliveryDate}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Order {selectedOrder.id}</h3>
                  <p className="text-green-100">{selectedOrder.customerName}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Order Items */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{item.productName}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer & Delivery Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Customer Information</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600"><strong>Name:</strong> {selectedOrder.customerName}</p>
                      <p className="text-gray-600"><strong>Email:</strong> {selectedOrder.customerEmail}</p>
                      <p className="text-gray-600"><strong>Payment:</strong> {selectedOrder.paymentMethod}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Delivery Information</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600"><strong>Address:</strong> {selectedOrder.shippingAddress}</p>
                      <p className="text-gray-600"><strong>Delivery Date:</strong> {selectedOrder.deliveryDate}</p>
                      <p className="text-gray-600"><strong>Total:</strong> R{selectedOrder.total}</p>
                      <p className="text-gray-600"><strong>Your Commission:</strong> R{selectedOrder.commission}</p>
                    </div>
                  </div>
                </div>

                {/* Status Update Buttons */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Update Order Status</h4>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'confirmed')}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Confirm</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'processing')}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      <span>Processing</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'shipped')}
                      className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Package className="h-4 w-4" />
                      <span>Shipped</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'delivered')}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Delivered</span>
                    </button>
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
