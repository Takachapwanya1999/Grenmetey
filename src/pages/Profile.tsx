import { Link, useSearchParams } from 'react-router-dom';
import { 
  User, 
  Heart, 
  Package, 
  MapPin, 
  CreditCard, 
  Settings, 
  ShoppingCart,
  Trash2,
  Edit,
  Eye,
  Clock,
  Star,
  ArrowRight,
  X
} from 'lucide-react';
import { useWishlist, type WishlistItem } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export function Profile() {
  // Auth context available for future use
  const { items: wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'profile';

  const userProfile = {
    name: 'John Farmer',
    email: 'john.farmer@email.com',
    phone: '+27 11 123 4567',
    address: '123 Farm Road, Cape Town, 8001',
    joinDate: 'January 2023',
    totalOrders: 47,
    totalSpent: 15450
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, count: wishlistItems.length },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '2024-08-01',
      status: 'Delivered',
      total: 245.50,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-07-28',
      status: 'Shipped',
      total: 189.30,
      items: 2
    },
    {
      id: 'ORD-003',
      date: '2024-07-25',
      status: 'Processing',
      total: 156.80,
      items: 4
    }
  ];

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  const handleAddToCart = (item: WishlistItem) => {
    const product = {
      id: item.id,
      name: item.name,
      description: item.name,
      category: { id: item.category, name: item.category, slug: item.category, description: '', icon: '', subcategories: [] },
      subcategory: item.category,
      price: item.price,
      currency: 'ZAR',
      stock: 100,
      images: [item.image],
      partnerId: '1',
      partnerName: item.farmer,
      specifications: [],
      certifications: [],
      origin: item.location || 'South Africa',
      organicCertified: false,
      ratings: [],
      averageRating: 0,
      totalReviews: 0,
      tags: [],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    addToCart(product, 1);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">My Account</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              {/* User Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{userProfile.name}</h3>
                <p className="text-gray-600">{userProfile.email}</p>
                <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  <Star className="h-4 w-4 mr-1" />
                  Premium Member
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-100 text-green-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5" />
                        <span>{tab.label}</span>
                      </div>
                      {tab.count !== undefined && tab.count > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Edit className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="p-3 bg-gray-50 rounded-lg text-gray-900">{userProfile.name}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="p-3 bg-gray-50 rounded-lg text-gray-900">{userProfile.email}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="p-3 bg-gray-50 rounded-lg text-gray-900">{userProfile.phone}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <div className="p-3 bg-gray-50 rounded-lg text-gray-900">{userProfile.joinDate}</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-900">{userProfile.address}</div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{userProfile.totalOrders}</div>
                    <div className="text-gray-600">Total Orders</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{wishlistItems.length}</div>
                    <div className="text-gray-600">Wishlist Items</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">R{userProfile.totalSpent.toLocaleString()}</div>
                    <div className="text-gray-600">Total Spent</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    My Wishlist ({wishlistItems.length} items)
                  </h2>
                  {wishlistItems.length > 0 && (
                    <button
                      onClick={clearWishlist}
                      className="flex items-center space-x-2 px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {wishlistItems.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600 mb-6">Save items you love to your wishlist and shop them later.</p>
                    <Link
                      to="/products"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Browse Products
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="relative mb-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                          >
                            <X className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {item.farmer}</p>
                        <p className="text-sm text-gray-500 mb-3 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {item.location}
                        </p>
                        <p className="text-sm text-gray-500 mb-3 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Added {formatDate(item.addedAt)}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-600">R{item.price}</span>
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
                
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">R{order.total}</div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex items-center space-x-1 px-3 py-2 text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                          <Eye className="h-4 w-4" />
                          <span>View Details</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <Package className="h-4 w-4" />
                          <span>Track Order</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'addresses' || activeTab === 'payment' || activeTab === 'settings') && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeTab === 'addresses' && 'Delivery Addresses'}
                  {activeTab === 'payment' && 'Payment Methods'}
                  {activeTab === 'settings' && 'Account Settings'}
                </h2>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
