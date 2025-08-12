import { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  CreditCard,
  Wallet,
  Search
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'sale' | 'commission' | 'payout' | 'refund';
  orderId: string;
  customerName: string;
  amount: number;
  commission: number;
  commissionRate: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  date: string;
  payoutDate?: string;
  method: 'bank_transfer' | 'paypal' | 'crypto' | 'escrow';
}

interface PayoutMethod {
  id: string;
  type: 'bank' | 'paypal' | 'crypto';
  name: string;
  details: string;
  isDefault: boolean;
  isVerified: boolean;
}

interface CommissionTier {
  category: string;
  rate: number;
  minAmount: number;
  description: string;
}

export function CommissionPaymentSystem() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'TXN-001',
      type: 'sale',
      orderId: 'ORD-001',
      customerName: 'John Smith',
      amount: 188.97,
      commission: 18.90,
      commissionRate: 10,
      status: 'completed',
      date: '2024-08-07',
      payoutDate: '2024-08-09',
      method: 'bank_transfer'
    },
    {
      id: 'TXN-002',
      type: 'sale',
      orderId: 'ORD-002',
      customerName: 'Mary Johnson',
      amount: 65.98,
      commission: 6.60,
      commissionRate: 10,
      status: 'pending',
      date: '2024-08-06',
      method: 'paypal'
    },
    {
      id: 'TXN-003',
      type: 'payout',
      orderId: 'PAYOUT-001',
      customerName: 'Weekly Payout',
      amount: 450.80,
      commission: 450.80,
      commissionRate: 0,
      status: 'processing',
      date: '2024-08-05',
      payoutDate: '2024-08-07',
      method: 'bank_transfer'
    }
  ]);

  const [payoutMethods] = useState<PayoutMethod[]>([
    {
      id: '1',
      type: 'bank',
      name: 'Standard Bank',
      details: 'Account: ****1234',
      isDefault: true,
      isVerified: true
    },
    {
      id: '2',
      type: 'paypal',
      name: 'PayPal',
      details: 'farmer@example.com',
      isDefault: false,
      isVerified: true
    },
    {
      id: '3',
      type: 'crypto',
      name: 'Bitcoin Wallet',
      details: '1A1zP1...eP2Po',
      isDefault: false,
      isVerified: false
    }
  ]);

  const [commissionTiers] = useState<CommissionTier[]>([
    {
      category: 'Vegetables',
      rate: 8,
      minAmount: 0,
      description: 'Standard rate for fresh vegetables'
    },
    {
      category: 'Fruits',
      rate: 10,
      minAmount: 0,
      description: 'Premium rate for fresh fruits'
    },
    {
      category: 'Organic Products',
      rate: 12,
      minAmount: 100,
      description: 'Higher rate for certified organic products'
    },
    {
      category: 'Bulk Orders',
      rate: 6,
      minAmount: 1000,
      description: 'Volume discount for large orders'
    }
  ]);

  // Calculate statistics
  const totalEarnings = transactions
    .filter(t => t.type === 'sale' && t.status === 'completed')
    .reduce((sum, t) => sum + t.commission, 0);

  const pendingEarnings = transactions
    .filter(t => t.type === 'sale' && t.status === 'pending')
    .reduce((sum, t) => sum + t.commission, 0);

  const totalPayouts = transactions
    .filter(t => t.type === 'payout')
    .reduce((sum, t) => sum + t.amount, 0);

  const availableBalance = totalEarnings - totalPayouts;

  const requestPayout = () => {
    if (availableBalance >= 100) {
      const newPayout: Transaction = {
        id: `TXN-${Date.now()}`,
        type: 'payout',
        orderId: `PAYOUT-${Date.now()}`,
        customerName: 'Manual Payout Request',
        amount: availableBalance,
        commission: availableBalance,
        commissionRate: 0,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
        method: 'bank_transfer'
      };
      
      setTransactions(prev => [newPayout, ...prev]);
      alert('Payout request submitted successfully!');
    } else {
      alert('Minimum payout amount is R100');
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'bank_transfer':
        return <CreditCard className="h-4 w-4" />;
      case 'paypal':
        return <Wallet className="h-4 w-4" />;
      case 'crypto':
        return <DollarSign className="h-4 w-4" />;
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Commission & Payments</h1>
          <p className="text-gray-600 mt-1">Manage your earnings, payouts, and commission structure</p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-green-600">R{availableBalance.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">Ready for payout</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Wallet className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">R{totalEarnings.toFixed(2)}</p>
                <p className="text-sm text-green-600 mt-1">↗ +15.3% this month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Earnings</p>
                <p className="text-2xl font-bold text-yellow-600">R{pendingEarnings.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">Awaiting completion</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Payouts</p>
                <p className="text-2xl font-bold text-gray-900">R{totalPayouts.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">Lifetime payouts</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <p className="text-gray-600">Manage your payments and settings</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={requestPayout}
                disabled={availableBalance < 100}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  availableBalance >= 100
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Request Payout (Min R100)
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Payment Settings
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'transactions', label: 'Transactions' },
              { id: 'payouts', label: 'Payout Methods' },
              { id: 'commission', label: 'Commission Rates' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Earnings Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Earnings Overview</h3>
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
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Earnings chart visualization</p>
                  <p className="text-sm text-gray-400">Integration with Chart.js</p>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Transactions</h3>
              <div className="space-y-4">
                {transactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 p-2 rounded-full">
                        {getMethodIcon(transaction.method)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.orderId}</p>
                        <p className="text-sm text-gray-600">{transaction.customerName}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {transaction.type === 'payout' ? '-' : '+'}R{transaction.commission.toFixed(2)}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
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
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                  <Download className="h-5 w-5" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Transaction</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Type</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Amount</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Commission</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{transaction.orderId}</p>
                            <p className="text-sm text-gray-600">{transaction.customerName}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            {getMethodIcon(transaction.method)}
                            <span className="text-sm text-gray-600 capitalize">{transaction.type}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium">R{transaction.amount.toFixed(2)}</td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">R{transaction.commission.toFixed(2)}</p>
                            {transaction.commissionRate > 0 && (
                              <p className="text-sm text-gray-600">{transaction.commissionRate}% rate</p>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{transaction.date}</td>
                        <td className="py-4 px-6">
                          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payouts' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Payout Methods</h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Add Method
                </button>
              </div>

              <div className="space-y-4">
                {payoutMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 p-2 rounded-full">
                        {method.type === 'bank' && <CreditCard className="h-5 w-5 text-gray-600" />}
                        {method.type === 'paypal' && <Wallet className="h-5 w-5 text-blue-600" />}
                        {method.type === 'crypto' && <DollarSign className="h-5 w-5 text-orange-600" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{method.name}</p>
                        <p className="text-sm text-gray-600">{method.details}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          {method.isDefault && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>
                          )}
                          {method.isVerified ? (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </span>
                          ) : (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commission' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Commission Structure</h3>
              
              <div className="space-y-4">
                {commissionTiers.map((tier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{tier.category}</h4>
                      <p className="text-sm text-gray-600">{tier.description}</p>
                      {tier.minAmount > 0 && (
                        <p className="text-xs text-gray-500">Minimum order: R{tier.minAmount}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{tier.rate}%</p>
                      <p className="text-sm text-gray-600">Commission</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">How Commission Works</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Commission is calculated automatically on each sale</li>
                  <li>• Higher rates apply to premium and organic products</li>
                  <li>• Volume discounts available for bulk orders</li>
                  <li>• Payouts are processed weekly (minimum R100)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
