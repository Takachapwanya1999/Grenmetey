import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign,
  Calendar,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Gift,
  Award,
  Search,
  Download,
  Eye,
  MessageSquare,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  };
  registrationDate: string;
  lastPurchase: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  status: 'active' | 'inactive' | 'vip' | 'new';
  loyaltyPoints: number;
  preferredCategories: string[];
  communicationPreference: 'email' | 'sms' | 'phone' | 'none';
  birthdate?: string;
  avatar?: string;
  notes?: string;
}

interface CustomerSegment {
  name: string;
  count: number;
  percentage: number;
  revenue: number;
  color: string;
}

interface PurchasePattern {
  month: string;
  customers: number;
  revenue: number;
}

export function CustomerAnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('totalSpent');

  const [customers] = useState<Customer[]>([
    {
      id: 'CUST-001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+27 82 555 0123',
      address: {
        street: '123 Main Street',
        city: 'Johannesburg',
        province: 'Gauteng',
        postalCode: '2001'
      },
      registrationDate: '2023-06-15',
      lastPurchase: '2024-08-06',
      totalOrders: 24,
      totalSpent: 2850.75,
      averageOrderValue: 118.78,
      status: 'vip',
      loyaltyPoints: 1425,
      preferredCategories: ['Vegetables', 'Fruits'],
      communicationPreference: 'email',
      birthdate: '1985-03-20',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      notes: 'Prefers organic products. Bulk buyer.'
    },
    {
      id: 'CUST-002',
      name: 'Mary Johnson',
      email: 'mary.johnson@email.com',
      phone: '+27 83 444 0156',
      address: {
        street: '456 Oak Avenue',
        city: 'Cape Town',
        province: 'Western Cape',
        postalCode: '8001'
      },
      registrationDate: '2023-11-22',
      lastPurchase: '2024-08-05',
      totalOrders: 12,
      totalSpent: 1265.50,
      averageOrderValue: 105.46,
      status: 'active',
      loyaltyPoints: 632,
      preferredCategories: ['Dairy & Eggs', 'Vegetables'],
      communicationPreference: 'sms',
      birthdate: '1992-07-14'
    },
    {
      id: 'CUST-003',
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+27 71 333 0789',
      address: {
        street: '789 Elm Street',
        city: 'Durban',
        province: 'KwaZulu-Natal',
        postalCode: '4001'
      },
      registrationDate: '2024-07-10',
      lastPurchase: '2024-08-03',
      totalOrders: 3,
      totalSpent: 185.25,
      averageOrderValue: 61.75,
      status: 'new',
      loyaltyPoints: 92,
      preferredCategories: ['Fruits'],
      communicationPreference: 'email'
    },
    {
      id: 'CUST-004',
      name: 'Sarah Brown',
      email: 'sarah.brown@email.com',
      phone: '+27 84 222 0456',
      address: {
        street: '321 Pine Road',
        city: 'Pretoria',
        province: 'Gauteng',
        postalCode: '0001'
      },
      registrationDate: '2023-01-08',
      lastPurchase: '2024-06-15',
      totalOrders: 18,
      totalSpent: 1950.00,
      averageOrderValue: 108.33,
      status: 'inactive',
      loyaltyPoints: 975,
      preferredCategories: ['Vegetables', 'Herbs', 'Dairy & Eggs'],
      communicationPreference: 'phone',
      notes: 'Prefers weekend deliveries'
    }
  ]);

  // Calculate analytics data
  const customerAnalytics = {
    totalCustomers: customers.length,
    totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
    averageOrderValue: customers.reduce((sum, c) => sum + c.averageOrderValue, 0) / customers.length,
    totalOrders: customers.reduce((sum, c) => sum + c.totalOrders, 0),
    vipCustomers: customers.filter(c => c.status === 'vip').length,
    newCustomers: customers.filter(c => c.status === 'new').length,
    averageCustomerValue: customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length,
    retentionRate: ((customers.filter(c => c.status !== 'inactive').length / customers.length) * 100)
  };

  // Customer segments
  const customerSegments: CustomerSegment[] = [
    {
      name: 'VIP Customers',
      count: customers.filter(c => c.status === 'vip').length,
      percentage: (customers.filter(c => c.status === 'vip').length / customers.length) * 100,
      revenue: customers.filter(c => c.status === 'vip').reduce((sum, c) => sum + c.totalSpent, 0),
      color: 'bg-purple-500'
    },
    {
      name: 'Active Customers',
      count: customers.filter(c => c.status === 'active').length,
      percentage: (customers.filter(c => c.status === 'active').length / customers.length) * 100,
      revenue: customers.filter(c => c.status === 'active').reduce((sum, c) => sum + c.totalSpent, 0),
      color: 'bg-green-500'
    },
    {
      name: 'New Customers',
      count: customers.filter(c => c.status === 'new').length,
      percentage: (customers.filter(c => c.status === 'new').length / customers.length) * 100,
      revenue: customers.filter(c => c.status === 'new').reduce((sum, c) => sum + c.totalSpent, 0),
      color: 'bg-blue-500'
    },
    {
      name: 'Inactive Customers',
      count: customers.filter(c => c.status === 'inactive').length,
      percentage: (customers.filter(c => c.status === 'inactive').length / customers.length) * 100,
      revenue: customers.filter(c => c.status === 'inactive').reduce((sum, c) => sum + c.totalSpent, 0),
      color: 'bg-gray-500'
    }
  ];

  // Purchase patterns (mock data for demonstration)
  const purchasePatterns: PurchasePattern[] = [
    { month: 'Jan', customers: 45, revenue: 12500 },
    { month: 'Feb', customers: 52, revenue: 14200 },
    { month: 'Mar', customers: 48, revenue: 13800 },
    { month: 'Apr', customers: 61, revenue: 16500 },
    { month: 'May', customers: 58, revenue: 15900 },
    { month: 'Jun', customers: 65, revenue: 18200 },
    { month: 'Jul', customers: 70, revenue: 19800 },
    { month: 'Aug', customers: 74, revenue: 21000 }
  ];

  // Location distribution
  const locationStats = customers.reduce((acc, customer) => {
    const province = customer.address.province;
    if (!acc[province]) {
      acc[province] = { count: 0, revenue: 0 };
    }
    acc[province].count++;
    acc[province].revenue += customer.totalSpent;
    return acc;
  }, {} as Record<string, { count: number; revenue: number }>);

  const getStatusColor = (status: string) => {
    const colors = {
      vip: 'bg-purple-100 text-purple-800',
      active: 'bg-green-100 text-green-800',
      new: 'bg-blue-100 text-blue-800',
      inactive: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      vip: Star,
      active: Activity,
      new: Gift,
      inactive: Clock
    };
    return icons[status as keyof typeof icons] || Clock;
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    const matchesLocation = locationFilter === 'all' || customer.address.province === locationFilter;
    
    return matchesSearch && matchesStatus && matchesLocation;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'totalSpent': return b.totalSpent - a.totalSpent;
      case 'totalOrders': return b.totalOrders - a.totalOrders;
      case 'lastPurchase': return new Date(b.lastPurchase).getTime() - new Date(a.lastPurchase).getTime();
      case 'registrationDate': return new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime();
      default: return 0;
    }
  });

  const provinces = [...new Set(customers.map(c => c.address.province))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customer Analytics</h1>
              <p className="text-gray-600 mt-1">Understand your customers and improve retention</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                <Download className="h-5 w-5" />
                <span>Export Report</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span>Send Campaign</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{customerAnalytics.totalCustomers}</p>
            <p className="text-sm text-gray-600">Total Customers</p>
          </div>
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">R{customerAnalytics.totalRevenue.toFixed(0)}</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 text-center">
            <ShoppingCart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">R{customerAnalytics.averageOrderValue.toFixed(0)}</p>
            <p className="text-sm text-gray-600">Avg Order Value</p>
          </div>
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{customerAnalytics.retentionRate.toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Retention Rate</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'customers', label: 'Customer List', icon: Users },
              { id: 'segments', label: 'Segments', icon: PieChart },
              { id: 'geography', label: 'Geography', icon: MapPin }
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
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Purchase Trends */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Purchase Trends</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-4">Monthly Customer Growth</h4>
                  <div className="space-y-3">
                    {purchasePatterns.slice(-6).map((pattern) => (
                      <div key={pattern.month} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{pattern.month}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${(pattern.customers / 80) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-12">{pattern.customers}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-4">Monthly Revenue Growth</h4>
                  <div className="space-y-3">
                    {purchasePatterns.slice(-6).map((pattern) => (
                      <div key={pattern.month} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{pattern.month}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(pattern.revenue / 25000) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-16">R{(pattern.revenue / 1000).toFixed(0)}k</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Customers by Spending</h3>
                <div className="space-y-3">
                  {customers
                    .sort((a, b) => b.totalSpent - a.totalSpent)
                    .slice(0, 5)
                    .map((customer, index) => (
                      <div key={customer.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-bold text-gray-400">#{index + 1}</span>
                          <div className="flex items-center space-x-2">
                            {customer.avatar ? (
                              <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                            ) : (
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <Users className="h-4 w-4 text-gray-600" />
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                              <p className="text-xs text-gray-600">{customer.totalOrders} orders</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-green-600">R{customer.totalSpent.toFixed(2)}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Lifetime Value</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">R{customerAnalytics.averageCustomerValue.toFixed(0)}</p>
                    <p className="text-sm text-gray-600">Average Customer Value</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">VIP Customers (Avg)</span>
                      <span className="font-medium">R{customers.filter(c => c.status === 'vip').reduce((sum, c) => sum + c.totalSpent, 0) / Math.max(customers.filter(c => c.status === 'vip').length, 1) || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Customers (Avg)</span>
                      <span className="font-medium">R{customers.filter(c => c.status === 'active').reduce((sum, c) => sum + c.totalSpent, 0) / Math.max(customers.filter(c => c.status === 'active').length, 1) || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">New Customers (Avg)</span>
                      <span className="font-medium">R{customers.filter(c => c.status === 'new').reduce((sum, c) => sum + c.totalSpent, 0) / Math.max(customers.filter(c => c.status === 'new').length, 1) || 0}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h3>
                <div className="space-y-3">
                  {(() => {
                    const categoryCount = customers.reduce((acc, customer) => {
                      customer.preferredCategories.forEach(category => {
                        acc[category] = (acc[category] || 0) + 1;
                      });
                      return acc;
                    }, {} as Record<string, number>);
                    
                    return Object.entries(categoryCount)
                      .sort(([,a], [,b]) => b - a)
                      .slice(0, 5)
                      .map(([category, count]) => (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{category}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${(count / customers.length) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-8">{count}</span>
                          </div>
                        </div>
                      ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customer List Tab */}
        {activeTab === 'customers' && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search customers by name, email, or phone..."
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
                  <option value="vip">VIP</option>
                  <option value="active">Active</option>
                  <option value="new">New</option>
                  <option value="inactive">Inactive</option>
                </select>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">All Locations</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="totalSpent">Sort by Spending</option>
                  <option value="name">Sort by Name</option>
                  <option value="totalOrders">Sort by Orders</option>
                  <option value="lastPurchase">Sort by Last Purchase</option>
                  <option value="registrationDate">Sort by Registration</option>
                </select>
              </div>
            </div>

            {/* Customer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCustomers.map((customer) => {
                const StatusIcon = getStatusIcon(customer.status);
                
                return (
                  <div key={customer.id} 
                       className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                       onClick={() => setSelectedCustomer(customer)}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {customer.avatar ? (
                          <img src={customer.avatar} alt={customer.name} className="w-12 h-12 rounded-full" />
                        ) : (
                          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                          <p className="text-sm text-gray-600">{customer.email}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {customer.status.toUpperCase()}
                        </span>
                        {customer.loyaltyPoints > 0 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" />
                            {customer.loyaltyPoints} pts
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Total Orders</p>
                          <p className="font-semibold text-gray-900">{customer.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total Spent</p>
                          <p className="font-semibold text-green-600">R{customer.totalSpent.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Avg Order Value</p>
                          <p className="font-semibold text-gray-900">R{customer.averageOrderValue.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Last Purchase</p>
                          <p className="font-semibold text-gray-900">{new Date(customer.lastPurchase).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{customer.address.city}, {customer.address.province}</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-600 mb-1">Preferred Categories</p>
                        <div className="flex flex-wrap gap-1">
                          {customer.preferredCategories.slice(0, 2).map(category => (
                            <span key={category} className="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                              {category}
                            </span>
                          ))}
                          {customer.preferredCategories.length > 2 && (
                            <span className="text-xs text-gray-500">+{customer.preferredCategories.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Eye className="h-4 w-4" />
                        <span>View Profile</span>
                      </button>
                      <button className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Segments Tab */}
        {activeTab === 'segments' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Segments</h3>
              <div className="space-y-4">
                {customerSegments.map((segment) => (
                  <div key={segment.name} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{segment.name}</h4>
                      <span className="text-sm text-gray-600">{segment.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div 
                        className={`h-3 rounded-full ${segment.color}`}
                        style={{ width: `${segment.percentage}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Customers</p>
                        <p className="font-semibold text-gray-900">{segment.count}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-semibold text-green-600">R{segment.revenue.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Segment Performance</h3>
              <div className="space-y-6">
                {customerSegments.map((segment) => (
                  <div key={segment.name} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{segment.name}</h4>
                      <span className="text-sm font-medium text-green-600">
                        R{(segment.revenue / segment.count || 0).toFixed(0)} avg
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{segment.count}</p>
                        <p className="text-gray-600">Customers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">R{(segment.revenue / 1000).toFixed(0)}k</p>
                        <p className="text-gray-600">Revenue</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{segment.percentage.toFixed(0)}%</p>
                        <p className="text-gray-600">Share</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Geography Tab */}
        {activeTab === 'geography' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Customers by Province</h3>
              <div className="space-y-4">
                {Object.entries(locationStats)
                  .sort(([,a], [,b]) => b.count - a.count)
                  .map(([province, stats]) => (
                    <div key={province} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{province}</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(stats.count / customers.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-semibold text-gray-900">{stats.count}</p>
                        <p className="text-sm text-gray-600">{((stats.count / customers.length) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue by Province</h3>
              <div className="space-y-4">
                {Object.entries(locationStats)
                  .sort(([,a], [,b]) => b.revenue - a.revenue)
                  .map(([province, stats]) => (
                    <div key={province} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{province}</h4>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(stats.revenue / customerAnalytics.totalRevenue) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-semibold text-green-600">R{stats.revenue.toFixed(0)}</p>
                        <p className="text-sm text-gray-600">{((stats.revenue / customerAnalytics.totalRevenue) * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Customer Detail Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {selectedCustomer.avatar ? (
                    <img src={selectedCustomer.avatar} alt={selectedCustomer.name} className="w-16 h-16 rounded-full border-4 border-white" />
                  ) : (
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{selectedCustomer.name}</h3>
                    <p className="text-green-100">{selectedCustomer.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Customer Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">{selectedCustomer.totalOrders}</p>
                    <p className="text-sm text-gray-600">Total Orders</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-green-600">R{selectedCustomer.totalSpent.toFixed(0)}</p>
                    <p className="text-sm text-gray-600">Total Spent</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-purple-600">R{selectedCustomer.averageOrderValue.toFixed(0)}</p>
                    <p className="text-sm text-gray-600">Avg Order Value</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-yellow-600">{selectedCustomer.loyaltyPoints}</p>
                    <p className="text-sm text-gray-600">Loyalty Points</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span>{selectedCustomer.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span>{selectedCustomer.phone}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <p>{selectedCustomer.address.street}</p>
                          <p>{selectedCustomer.address.city}, {selectedCustomer.address.province}</p>
                          <p>{selectedCustomer.address.postalCode}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCustomer.status)}`}>
                          {selectedCustomer.status.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Member Since</p>
                        <p className="font-medium">{new Date(selectedCustomer.registrationDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Purchase</p>
                        <p className="font-medium">{new Date(selectedCustomer.lastPurchase).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Communication Preference</p>
                        <p className="font-medium capitalize">{selectedCustomer.communicationPreference}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Shopping Preferences</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCustomer.preferredCategories.map(category => (
                      <span key={category} className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                {selectedCustomer.notes && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Notes</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">{selectedCustomer.notes}</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="border-t pt-6">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Send Message</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>Call Customer</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>View Orders</span>
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
