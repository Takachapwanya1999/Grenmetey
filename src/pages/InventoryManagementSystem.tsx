import { useState } from 'react';
import { 
  Package, 
  Plus, 
  Edit, 
  Search,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Eye,
  Upload,
  Download,
  RefreshCw,
  Tag,
  MapPin,
  Truck,
  Archive
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  description: string;
  currentStock: number;
  minimumStock: number;
  maximumStock: number;
  unitPrice: number;
  costPrice: number;
  supplier: string;
  location: string;
  status: 'active' | 'inactive' | 'discontinued';
  lastRestocked: string;
  totalSold: number;
  revenueGenerated: number;
  images: string[];
  tags: string[];
  expiryDate?: string;
  batchNumber?: string;
  harvestDate?: string;
  qualityGrade: 'A' | 'B' | 'C';
}

interface StockMovement {
  id: string;
  productId: string;
  type: 'in' | 'out' | 'adjustment';
  quantity: number;
  reason: string;
  date: string;
  reference?: string;
  user: string;
  notes?: string;
}

interface LowStockAlert {
  productId: string;
  productName: string;
  currentStock: number;
  minimumStock: number;
  daysUntilOutOfStock: number;
}

export function InventoryManagementSystem() {
  const [activeTab, setActiveTab] = useState('inventory');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const [products, setProducts] = useState<Product[]>([
    {
      id: 'PROD-001',
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      sku: 'TOM-ORG-001',
      description: 'Fresh organic tomatoes from local farms',
      currentStock: 150,
      minimumStock: 50,
      maximumStock: 500,
      unitPrice: 32.99,
      costPrice: 18.50,
      supplier: 'Green Valley Farm',
      location: 'Warehouse A - Section 1',
      status: 'active',
      lastRestocked: '2024-08-05',
      totalSold: 2450,
      revenueGenerated: 80817.50,
      images: ['https://images.unsplash.com/photo-1546470427-e89fe17c7e49?w=300'],
      tags: ['organic', 'local', 'fresh'],
      expiryDate: '2024-08-15',
      harvestDate: '2024-08-01',
      qualityGrade: 'A'
    },
    {
      id: 'PROD-002',
      name: 'Free Range Eggs',
      category: 'Dairy & Eggs',
      sku: 'EGG-FR-001',
      description: 'Farm fresh free range eggs',
      currentStock: 25,
      minimumStock: 30,
      maximumStock: 200,
      unitPrice: 45.00,
      costPrice: 28.00,
      supplier: 'Happy Hens Farm',
      location: 'Cold Storage - Section B',
      status: 'active',
      lastRestocked: '2024-08-03',
      totalSold: 1200,
      revenueGenerated: 54000.00,
      images: ['https://images.unsplash.com/photo-1569288052389-dac9b01c9c0f?w=300'],
      tags: ['free-range', 'protein', 'fresh'],
      expiryDate: '2024-08-12',
      qualityGrade: 'A'
    },
    {
      id: 'PROD-003',
      name: 'Fresh Spinach',
      category: 'Leafy Greens',
      sku: 'SPN-FR-001',
      description: 'Fresh spinach leaves, perfect for salads',
      currentStock: 5,
      minimumStock: 20,
      maximumStock: 100,
      unitPrice: 28.50,
      costPrice: 15.00,
      supplier: 'Leafy Greens Co',
      location: 'Fresh Produce - Section C',
      status: 'active',
      lastRestocked: '2024-08-01',
      totalSold: 890,
      revenueGenerated: 25365.00,
      images: ['https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300'],
      tags: ['leafy', 'vitamin-rich', 'salad'],
      expiryDate: '2024-08-09',
      harvestDate: '2024-07-28',
      qualityGrade: 'B'
    }
  ]);

  const [stockMovements, setStockMovements] = useState<StockMovement[]>([
    {
      id: 'MOV-001',
      productId: 'PROD-001',
      type: 'in',
      quantity: 100,
      reason: 'New stock delivery',
      date: '2024-08-05T10:30:00',
      reference: 'PO-2024-001',
      user: 'Farm Manager',
      notes: 'Fresh batch from Green Valley Farm'
    },
    {
      id: 'MOV-002',
      productId: 'PROD-002',
      type: 'out',
      quantity: 15,
      reason: 'Customer order',
      date: '2024-08-06T14:20:00',
      reference: 'ORD-2024-001',
      user: 'Sales Team'
    },
    {
      id: 'MOV-003',
      productId: 'PROD-003',
      type: 'adjustment',
      quantity: -5,
      reason: 'Spoilage',
      date: '2024-08-06T16:45:00',
      user: 'Quality Control',
      notes: 'Some leaves showed signs of deterioration'
    }
  ]);

  // Calculate statistics
  const inventoryStats = {
    totalProducts: products.length,
    totalValue: products.reduce((sum, p) => sum + (p.currentStock * p.costPrice), 0),
    lowStockItems: products.filter(p => p.currentStock <= p.minimumStock).length,
    outOfStockItems: products.filter(p => p.currentStock === 0).length,
    topSellingValue: products.reduce((sum, p) => sum + p.revenueGenerated, 0),
    averageStockLevel: products.reduce((sum, p) => sum + p.currentStock, 0) / products.length
  };

  // Get low stock alerts
  const lowStockAlerts: LowStockAlert[] = products
    .filter(p => p.currentStock <= p.minimumStock)
    .map(p => ({
      productId: p.id,
      productName: p.name,
      currentStock: p.currentStock,
      minimumStock: p.minimumStock,
      daysUntilOutOfStock: Math.max(0, Math.floor(p.currentStock / 5)) // Assuming 5 units sold per day
    }));

  const addStockMovement = (productId: string, type: 'in' | 'out' | 'adjustment', quantity: number, reason: string, notes?: string) => {
    const newMovement: StockMovement = {
      id: `MOV-${Date.now()}`,
      productId,
      type,
      quantity,
      reason,
      date: new Date().toISOString(),
      user: 'Current User',
      notes
    };

    setStockMovements(prev => [newMovement, ...prev]);
    
    // Update product stock
    setProducts(prev => prev.map(product => {
      if (product.id === productId) {
        const stockChange = type === 'out' ? -quantity : quantity;
        return {
          ...product,
          currentStock: Math.max(0, product.currentStock + stockChange),
          lastRestocked: type === 'in' ? new Date().toISOString().split('T')[0] : product.lastRestocked
        };
      }
      return product;
    }));
  };

  const getStockStatus = (product: Product) => {
    if (product.currentStock === 0) return { color: 'text-red-600', text: 'Out of Stock', icon: AlertTriangle };
    if (product.currentStock <= product.minimumStock) return { color: 'text-orange-600', text: 'Low Stock', icon: AlertTriangle };
    return { color: 'text-green-600', text: 'In Stock', icon: CheckCircle };
  };

  const getStockLevel = (product: Product) => {
    const percentage = (product.currentStock / product.maximumStock) * 100;
    if (percentage <= 25) return 'bg-red-500';
    if (percentage <= 50) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'stock': return b.currentStock - a.currentStock;
      case 'value': return (b.currentStock * b.unitPrice) - (a.currentStock * a.unitPrice);
      case 'lastRestocked': return new Date(b.lastRestocked).getTime() - new Date(a.lastRestocked).getTime();
      default: return 0;
    }
  });

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
              <p className="text-gray-600 mt-1">Track and manage your agricultural products</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                <Upload className="h-5 w-5" />
                <span>Import</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-2 rounded-lg">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
              <button 
                onClick={() => console.log('Add product functionality')}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{inventoryStats.totalProducts}</p>
            <p className="text-sm text-gray-600">Total Products</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">R{inventoryStats.totalValue.toFixed(0)}</p>
            <p className="text-sm text-gray-600">Total Value</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{inventoryStats.lowStockItems}</p>
            <p className="text-sm text-gray-600">Low Stock</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{inventoryStats.outOfStockItems}</p>
            <p className="text-sm text-gray-600">Out of Stock</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">R{inventoryStats.topSellingValue.toFixed(0)}</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{inventoryStats.averageStockLevel.toFixed(0)}</p>
            <p className="text-sm text-gray-600">Avg Stock Level</p>
          </div>
        </div>

        {/* Low Stock Alerts */}
        {lowStockAlerts.length > 0 && (
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-8">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
              <h3 className="text-lg font-medium text-orange-800">Low Stock Alerts</h3>
            </div>
            <div className="mt-2 space-y-1">
              {lowStockAlerts.map(alert => (
                <p key={alert.productId} className="text-sm text-orange-700">
                  <strong>{alert.productName}</strong>: {alert.currentStock} units remaining 
                  (minimum: {alert.minimumStock})
                  {alert.daysUntilOutOfStock <= 3 && (
                    <span className="text-red-600 font-medium"> - Critical!</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'inventory', label: 'Inventory', icon: Package },
              { id: 'movements', label: 'Stock Movements', icon: TrendingUp },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
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

        {/* Inventory Tab */}
        {activeTab === 'inventory' && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products by name, SKU, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="discontinued">Discontinued</option>
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="stock">Sort by Stock</option>
                  <option value="value">Sort by Value</option>
                  <option value="lastRestocked">Sort by Last Restocked</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product);
                const StockIcon = stockStatus.icon;
                
                return (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'active' ? 'bg-green-100 text-green-800' :
                          product.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white text-gray-800`}>
                          Grade {product.qualityGrade}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.sku}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <StockIcon className={`h-4 w-4 ${stockStatus.color}`} />
                          <span className={`text-xs font-medium ${stockStatus.color}`}>
                            {stockStatus.text}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Stock Level</span>
                            <span className="font-medium">{product.currentStock} / {product.maximumStock}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getStockLevel(product)}`}
                              style={{ width: `${Math.min((product.currentStock / product.maximumStock) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Unit Price</p>
                            <p className="font-semibold text-green-600">R{product.unitPrice.toFixed(2)}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Total Value</p>
                            <p className="font-semibold">R{(product.currentStock * product.costPrice).toFixed(2)}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Category</p>
                            <p className="font-medium">{product.category}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Supplier</p>
                            <p className="font-medium">{product.supplier}</p>
                          </div>
                        </div>

                        <div className="text-sm">
                          <p className="text-gray-600">Location</p>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <p className="font-medium">{product.location}</p>
                          </div>
                        </div>

                        {product.expiryDate && (
                          <div className="text-sm">
                            <p className="text-gray-600">Expires</p>
                            <p className="font-medium text-orange-600">{product.expiryDate}</p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {product.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex space-x-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => addStockMovement(product.id, 'in', 10, 'Manual restock')}
                          disabled={product.status !== 'active'}
                          className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                            product.status === 'active'
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                          <span>Restock</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Stock Movements Tab */}
        {activeTab === 'movements' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Stock Movements</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stockMovements.map((movement) => {
                    const product = products.find(p => p.id === movement.productId);
                    return (
                      <tr key={movement.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(movement.date).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {product?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            movement.type === 'in' ? 'bg-green-100 text-green-800' :
                            movement.type === 'out' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {movement.type === 'in' ? 'Stock In' : movement.type === 'out' ? 'Stock Out' : 'Adjustment'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className={movement.type === 'out' || (movement.type === 'adjustment' && movement.quantity < 0) ? 'text-red-600' : 'text-green-600'}>
                            {movement.type === 'out' ? '-' : ''}{Math.abs(movement.quantity)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {movement.reason}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {movement.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {movement.reference || '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
              <div className="space-y-4">
                {products
                  .sort((a, b) => b.totalSold - a.totalSold)
                  .slice(0, 5)
                  .map((product, index) => (
                    <div key={product.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600">{product.totalSold} units sold</p>
                        </div>
                      </div>
                      <p className="font-semibold text-green-600">R{product.revenueGenerated.toFixed(2)}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Status Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Well Stocked</span>
                  </div>
                  <span className="font-semibold">
                    {products.filter(p => p.currentStock > p.minimumStock).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Low Stock</span>
                  </div>
                  <span className="font-semibold">
                    {products.filter(p => p.currentStock <= p.minimumStock && p.currentStock > 0).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span className="text-gray-700">Out of Stock</span>
                  </div>
                  <span className="font-semibold">
                    {products.filter(p => p.currentStock === 0).length}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
              <div className="space-y-3">
                {categories.map(category => {
                  const categoryProducts = products.filter(p => p.category === category);
                  const percentage = (categoryProducts.length / products.length) * 100;
                  
                  return (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{category}</span>
                        <span className="font-medium">{categoryProducts.length} products</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {stockMovements.slice(0, 5).map((movement) => {
                  const product = products.find(p => p.id === movement.productId);
                  return (
                    <div key={movement.id} className="flex items-start space-x-3">
                      <div className={`rounded-full p-1 ${
                        movement.type === 'in' ? 'bg-green-100' :
                        movement.type === 'out' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        {movement.type === 'in' ? (
                          <TrendingUp className="h-3 w-3 text-green-600" />
                        ) : movement.type === 'out' ? (
                          <TrendingDown className="h-3 w-3 text-red-600" />
                        ) : (
                          <RefreshCw className="h-3 w-3 text-yellow-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{product?.name}</span> - {movement.reason}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(movement.date).toLocaleString()} by {movement.user}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                  <p className="text-green-100">{selectedProduct.sku}</p>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <CheckCircle className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Product Image and Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={selectedProduct.images[0]} 
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Product Details</h4>
                      <p className="text-gray-600">{selectedProduct.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Category</p>
                        <p className="font-medium">{selectedProduct.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Quality Grade</p>
                        <p className="font-medium">Grade {selectedProduct.qualityGrade}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Supplier</p>
                        <p className="font-medium">{selectedProduct.supplier}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">{selectedProduct.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stock Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Stock Information</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{selectedProduct.currentStock}</p>
                      <p className="text-sm text-gray-600">Current Stock</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{selectedProduct.minimumStock}</p>
                      <p className="text-sm text-gray-600">Minimum Stock</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{selectedProduct.maximumStock}</p>
                      <p className="text-sm text-gray-600">Maximum Stock</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{selectedProduct.totalSold}</p>
                      <p className="text-sm text-gray-600">Total Sold</p>
                    </div>
                  </div>
                </div>

                {/* Financial Information */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-xl font-bold text-gray-900">R{selectedProduct.unitPrice.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Unit Price</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-xl font-bold text-gray-900">R{selectedProduct.costPrice.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Cost Price</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-xl font-bold text-green-600">R{(selectedProduct.currentStock * selectedProduct.costPrice).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Stock Value</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <p className="text-xl font-bold text-green-600">R{selectedProduct.revenueGenerated.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      onClick={() => addStockMovement(selectedProduct.id, 'in', 50, 'Manual restock - 50 units')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Stock</span>
                    </button>
                    <button
                      onClick={() => addStockMovement(selectedProduct.id, 'adjustment', -5, 'Quality control removal')}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Adjust Stock</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Truck className="h-4 w-4" />
                      <span>Create Order</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      <Archive className="h-4 w-4" />
                      <span>Archive</span>
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
