import { useState } from 'react';
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone,
  Mail,
  User,
  Calendar,
  DollarSign,
  Star,
  MessageSquare,
  Download,
  Printer,
  Search,
  Bell,
  Navigation
} from 'lucide-react';

interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
  notes?: string;
}

interface DeliveryDetails {
  method: 'standard' | 'express' | 'same_day' | 'pickup';
  address: string;
  city: string;
  postalCode: string;
  instructions?: string;
  estimatedDate: string;
  trackingNumber?: string;
  driverName?: string;
  driverPhone?: string;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  orderHistory: number;
  rating: number;
  isVip: boolean;
}

interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'new' | 'confirmed' | 'preparing' | 'ready' | 'dispatched' | 'in_transit' | 'delivered' | 'cancelled' | 'refunded';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  orderDate: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  delivery: DeliveryDetails;
  notes?: string;
  timeline: {
    timestamp: string;
    status: string;
    description: string;
    user?: string;
  }[];
}

export function OrderManagementSystem() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-2024-001',
      customer: {
        id: 'CUST-001',
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+27 82 555 0123',
        address: '123 Main Street, Johannesburg',
        orderHistory: 15,
        rating: 4.8,
        isVip: true
      },
      items: [
        {
          id: 'ITEM-001',
          productName: 'Organic Tomatoes',
          quantity: 3,
          price: 32.99,
          image: 'https://images.unsplash.com/photo-1546470427-e89fe17c7e49?w=100',
          notes: 'Extra ripe preferred'
        },
        {
          id: 'ITEM-002',
          productName: 'Free Range Eggs',
          quantity: 2,
          price: 45.00,
          image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c0f?w=100'
        }
      ],
      subtotal: 188.97,
      tax: 28.35,
      shipping: 15.00,
      total: 232.32,
      status: 'new',
      priority: 'high',
      orderDate: '2024-08-07T10:30:00',
      paymentMethod: 'Credit Card',
      paymentStatus: 'paid',
      delivery: {
        method: 'express',
        address: '123 Main Street',
        city: 'Johannesburg',
        postalCode: '2001',
        instructions: 'Leave at front door if not home',
        estimatedDate: '2024-08-08',
        trackingNumber: 'AGM123456789'
      },
      notes: 'VIP customer - priority handling',
      timeline: [
        {
          timestamp: '2024-08-07T10:30:00',
          status: 'new',
          description: 'Order placed by customer',
          user: 'System'
        }
      ]
    },
    {
      id: 'ORD-2024-002',
      customer: {
        id: 'CUST-002',
        name: 'Mary Johnson',
        email: 'mary.johnson@email.com',
        phone: '+27 83 444 0156',
        address: '456 Oak Avenue, Cape Town',
        orderHistory: 8,
        rating: 4.5,
        isVip: false
      },
      items: [
        {
          id: 'ITEM-003',
          productName: 'Fresh Spinach',
          quantity: 2,
          price: 28.50,
          image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100'
        }
      ],
      subtotal: 57.00,
      tax: 8.55,
      shipping: 12.00,
      total: 77.55,
      status: 'preparing',
      priority: 'normal',
      orderDate: '2024-08-06T14:20:00',
      paymentMethod: 'PayPal',
      paymentStatus: 'paid',
      delivery: {
        method: 'standard',
        address: '456 Oak Avenue',
        city: 'Cape Town',
        postalCode: '8001',
        estimatedDate: '2024-08-09'
      },
      timeline: [
        {
          timestamp: '2024-08-06T14:20:00',
          status: 'new',
          description: 'Order placed by customer',
          user: 'System'
        },
        {
          timestamp: '2024-08-07T09:15:00',
          status: 'confirmed',
          description: 'Order confirmed by farmer',
          user: 'Green Valley Farm'
        },
        {
          timestamp: '2024-08-07T11:30:00',
          status: 'preparing',
          description: 'Started preparing order',
          user: 'Green Valley Farm'
        }
      ]
    }
  ]);

  // Calculate statistics
  const orderStats = {
    total: orders.length,
    new: orders.filter(o => o.status === 'new').length,
    processing: orders.filter(o => ['confirmed', 'preparing', 'ready'].includes(o.status)).length,
    shipped: orders.filter(o => ['dispatched', 'in_transit'].includes(o.status)).length,
    completed: orders.filter(o => o.status === 'delivered').length,
    urgent: orders.filter(o => o.priority === 'urgent').length
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status'], description?: string) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const newTimeline = [...order.timeline, {
          timestamp: new Date().toISOString(),
          status: newStatus,
          description: description || `Order status updated to ${newStatus}`,
          user: 'Green Valley Farm'
        }];
        
        return { ...order, status: newStatus, timeline: newTimeline };
      }
      return order;
    }));
    
    if (selectedOrder?.id === orderId) {
      setSelectedOrder(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      confirmed: 'bg-green-100 text-green-800',
      preparing: 'bg-yellow-100 text-yellow-800',
      ready: 'bg-purple-100 text-purple-800',
      dispatched: 'bg-indigo-100 text-indigo-800',
      in_transit: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'text-gray-600',
      normal: 'text-blue-600',
      high: 'text-orange-600',
      urgent: 'text-red-600'
    };
    return colors[priority as keyof typeof colors] || 'text-gray-600';
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || order.priority === priorityFilter;
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'new' && order.status === 'new') ||
      (activeTab === 'processing' && ['confirmed', 'preparing', 'ready'].includes(order.status)) ||
      (activeTab === 'shipped' && ['dispatched', 'in_transit'].includes(order.status)) ||
      (activeTab === 'completed' && order.status === 'delivered');
    
    return matchesSearch && matchesStatus && matchesPriority && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
              <p className="text-gray-600 mt-1">Process and track all customer orders</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-6 w-6" />
                {orderStats.urgent > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {orderStats.urgent}
                  </span>
                )}
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Order Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{orderStats.total}</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{orderStats.new}</p>
            <p className="text-sm text-gray-600">New Orders</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{orderStats.processing}</p>
            <p className="text-sm text-gray-600">Processing</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{orderStats.shipped}</p>
            <p className="text-sm text-gray-600">Shipped</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{orderStats.completed}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{orderStats.urgent}</p>
            <p className="text-sm text-gray-600">Urgent</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'all', label: 'All Orders', count: orderStats.total },
              { id: 'new', label: 'New', count: orderStats.new },
              { id: 'processing', label: 'Processing', count: orderStats.processing },
              { id: 'shipped', label: 'Shipped', count: orderStats.shipped },
              { id: 'completed', label: 'Completed', count: orderStats.completed }
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
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className="bg-gray-200 text-gray-700 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders by ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="dispatched">Dispatched</option>
              <option value="delivered">Delivered</option>
            </select>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} 
                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                 onClick={() => setSelectedOrder(order)}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                      {order.status.replace('_', ' ')}
                    </span>
                    <span className={`text-xs font-medium ${getPriorityColor(order.priority)}`}>
                      {order.priority.toUpperCase()}
                    </span>
                    {order.customer.isVip && (
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        VIP
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Customer</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{order.customer.name}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{order.customer.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{order.customer.phone}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Order Details</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Package className="h-4 w-4" />
                        <span>{order.items.length} items</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>R{order.total.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Delivery</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Truck className="h-4 w-4" />
                        <span className="capitalize">{order.delivery.method.replace('_', ' ')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{order.delivery.city}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{order.delivery.estimatedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateOrderStatus(order.id, 'confirmed', 'Order confirmed by farmer');
                    }}
                    disabled={order.status !== 'new'}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      order.status === 'new'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedOrder(order);
                    }}
                    className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Order {selectedOrder.id}</h3>
                  <p className="text-green-100">{selectedOrder.customer.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <Printer className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <CheckCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Order Items */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.productName}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          {item.notes && <p className="text-sm text-blue-600">Note: {item.notes}</p>}
                        </div>
                        <p className="font-medium text-gray-900">R{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">R{selectedOrder.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium">R{selectedOrder.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">R{selectedOrder.shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-bold text-green-600">R{selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Customer & Delivery Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Customer Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{selectedOrder.customer.name}</span>
                        {selectedOrder.customer.isVip && (
                          <Star className="h-4 w-4 text-purple-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{selectedOrder.customer.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{selectedOrder.customer.phone}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Order History: {selectedOrder.customer.orderHistory} orders
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Delivery Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-gray-400" />
                        <span className="capitalize">{selectedOrder.delivery.method.replace('_', ' ')}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div>
                          <p>{selectedOrder.delivery.address}</p>
                          <p>{selectedOrder.delivery.city}, {selectedOrder.delivery.postalCode}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>Expected: {selectedOrder.delivery.estimatedDate}</span>
                      </div>
                      {selectedOrder.delivery.instructions && (
                        <div className="flex items-start space-x-2">
                          <Navigation className="h-4 w-4 text-gray-400 mt-0.5" />
                          <p className="text-sm text-gray-600">{selectedOrder.delivery.instructions}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status Timeline */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Timeline</h4>
                  <div className="space-y-3">
                    {selectedOrder.timeline.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-green-600 rounded-full p-1">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{event.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>{new Date(event.timestamp).toLocaleString()}</span>
                            {event.user && <span>• by {event.user}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Update Actions */}
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Update Order Status</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'confirmed', 'Order confirmed by farmer')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Confirm</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'preparing', 'Started preparing order')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      <span>Preparing</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'ready', 'Order ready for pickup/dispatch')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Package className="h-4 w-4" />
                      <span>Ready</span>
                    </button>
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'dispatched', 'Order dispatched for delivery')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Truck className="h-4 w-4" />
                      <span>Dispatch</span>
                    </button>
                  </div>
                </div>

                {/* Communication */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Customer Communication</h4>
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        <span>Message</span>
                      </button>
                    </div>
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
