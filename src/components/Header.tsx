import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Leaf, Truck, Heart, Bot, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SmartNotificationCenter } from './SmartNotificationCenter';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const promoMessages = [
    { icon: "🌱", text: "Fresh from Farm to Table | FREE delivery on orders over R500 | Support Local Farmers" },
    { icon: "🚚", text: "Express Delivery Available | Same Day Delivery in Major Cities | Track Your Order Live" },
    { icon: "💰", text: "New Customer Special: R50 off your first order over R300 | Use code: WELCOME50" },
    { icon: "🏆", text: "Award Winning Quality | 100% Organic Certified | 50,000+ Happy Customers" }
  ];

  // Rotate promotional messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promoMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promoMessages.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Premium announcement bar with rotating messages and animations */}
      <motion.div 
        className="bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Truck className="h-4 w-4" />
            </motion.div>
            <span>{promoMessages[currentPromoIndex].icon}</span>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentPromoIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="transition-all duration-500"
              >
                {promoMessages[currentPromoIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* Progress indicators with animation */}
          <div className="flex justify-center space-x-1 mt-2">
            {promoMessages.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-300 ${
                  index === currentPromoIndex ? 'bg-white' : 'bg-white/30'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: index === currentPromoIndex ? 1.1 : 0.8 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced main header */}
      <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
  <div className="w-full">
          {/* Top utility bar - Enhanced */}
          <div className="hidden lg:block border-b border-gray-100 bg-gray-50/50">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-end py-2.5 text-sm">
                <div className="flex items-center space-x-8">
                  <Link 
                    to="/support" 
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium hover:underline"
                  >
                    Help
                  </Link>
                  {user ? (
                    <div className="flex items-center space-x-6">
                      {user.role === 'admin' && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                          Admin
                        </span>
                      )}
                      <SmartNotificationCenter />
                      <div className="h-4 w-px bg-gray-300"></div>
                      <Link 
                        to="/profile" 
                        className="text-gray-600 hover:text-green-600 transition-colors font-medium hover:underline"
                      >
                        My Account
                      </Link>
                      <button 
                        onClick={logout}
                        className="text-gray-600 hover:text-red-600 transition-colors font-medium hover:underline"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-6">
                      <Link 
                        to="/login" 
                        className="text-gray-600 hover:text-green-600 transition-colors font-medium hover:underline"
                      >
                        Sign In
                      </Link>
                      <Link 
                        to="/register" 
                        className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main navigation - Enhanced */}
          <div className="pl-0 pr-4 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8">
            <div className="flex items-center justify-between h-24 lg:h-28 xl:h-32">
              {/* Enhanced Logo */}
              <Link to="/" aria-label="Grenmetey Investments home" className="flex items-center space-x-2 ml-0">
                <div className="relative flex items-center shrink-0">
                  {logoError ? (
                    <div className="bg-green-600 p-2 rounded-lg">
                      <Leaf className="h-7 w-7 text-white" />
                    </div>
                  ) : (
          <div className="bg-white rounded-xl p-2 ring-1 ring-green-200 shadow">
                      <img
                        src="/images/grenmetey-logo.png"
                        alt="Grenmetey Investments Logo"
                        title="Grenmetey Investments"
            className="h-24 sm:h-28 md:h-32 lg:h-32 xl:h-36 w-auto object-contain select-none max-w-[420px] sm:max-w-[520px] md:max-w-[660px] lg:max-w-[720px] xl:max-w-[820px]"
                        onError={() => setLogoError(true)}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    Grenmetey Investments
                  </div>
                  <div className="hidden md:block text-xs md:text-sm text-gray-500 font-medium tracking-wide -mt-1">
                    Fresh • Local • Trusted
                  </div>
                </div>
              </Link>

              {/* Enhanced Navigation Menu - Desktop */}
              <nav className="hidden xl:flex items-center space-x-1">
                <Link 
                  to="/agricultural-products"
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                >
                  Agricultural Products
                </Link>
                
                <div className="relative group">
                  <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                    <span>🔥 Premium Services</span>
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                        🔥 High-Impact Business Services
                      </div>
                      <Link to="/b2b-wholesale" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium bg-yellow-50 border border-yellow-200">
                        🏢 B2B Wholesale Platform
                        <span className="ml-auto text-xs bg-red-500 text-white px-2 py-1 rounded-full">HOT</span>
                      </Link>
                      <Link to="/subscription-boxes" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        📦 Subscription Boxes
                        <span className="ml-auto text-xs bg-green-500 text-white px-2 py-1 rounded-full">NEW</span>
                      </Link>
                      <Link to="/ai-assistant" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        🤖 AI Agricultural Assistant
                        <span className="ml-auto text-xs bg-blue-500 text-white px-2 py-1 rounded-full">AI</span>
                      </Link>
                      <Link to="/financial-services" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        💰 Financial Services
                        <span className="ml-auto text-xs bg-purple-500 text-white px-2 py-1 rounded-full">LOANS</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                    <span>Business Consultancy</span>
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                        Business Services
                      </div>
                      <Link to="/consultancy" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium">
                        🏢 Consultancy Overview
                      </Link>
                      <Link to="/consultancy/investment" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        💰 Investment Consultancy
                      </Link>
                      <Link to="/consultancy/information-desk" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        ℹ️ Farmers Information Desk
                      </Link>
                      <Link to="/consultancy/agronomy" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        🔬 Agronomy Services
                      </Link>
                      <Link to="/consultancy/research-development" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        🧪 Research & Development
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                    <span>Supply Chain</span>
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                        Supply Chain Solutions
                      </div>
                      <Link to="/supply-chain" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-medium">
                        🚚 Supply Chain Overview
                      </Link>
                      <Link to="/supply-chain/selling-distribution" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        📈 Selling & Distribution
                      </Link>
                      <Link to="/supply-chain/warehousing" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                        🏭 Warehousing Solutions
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                    <Menu className="h-4 w-4" />
                    <span>Shop by Category</span>
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                        Product Categories
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <Link to="/agricultural-products/livestock" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🐄 Livestock
                        </Link>
                        <Link to="/agricultural-products/crops" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🌾 Crops & Grains
                        </Link>
                        <Link to="/products?category=vegetables" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🥬 Vegetables
                        </Link>
                        <Link to="/products?category=fruits" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          � Fruits
                        </Link>
                        <Link to="/products?category=dairy" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🥛 Dairy
                        </Link>
                        <Link to="/products?category=herbs" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🌿 Herbs
                        </Link>
                        <Link to="/products?category=nuts" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🥜 Nuts & Seeds
                        </Link>
                        <Link to="/products?category=equipment" className="flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
                          🚜 Equipment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                >
                  Contact
                </Link>
                
                <Link 
                  to="/about"
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                >
                  About
                </Link>
                
                {user?.role === 'admin' && (
                  <Link 
                    to="/dashboard"
                    className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    Dashboard
                  </Link>
                )}
              </nav>

              {/* Enhanced Search Bar */}
              <div className="hidden lg:block flex-1 max-w-2xl mx-8">
                <form onSubmit={handleSearch} className="relative group">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for fresh vegetables, fruits, organic products..."
                      className="w-full pl-12 pr-28 py-3.5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm bg-gray-50 focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                    />
                    <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              {/* Enhanced Right Actions */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                {/* AI Assistant Button - NEW */}
                <Link
                  to="/ai-assistant"
                  className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 hidden lg:block group"
                  title="AI Agricultural Assistant"
                >
                  <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </Link>

                {/* Wishlist - Enhanced */}
                <Link 
                  to="/profile?tab=wishlist" 
                  className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 hidden lg:block group"
                >
                  <Heart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {/* Account - Mobile */}
                <Link 
                  to={user ? "/profile" : "/login"} 
                  className="relative p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 xl:hidden group"
                >
                  <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {user?.role === 'admin' && (
                    <span className="absolute -top-1 -left-1 text-[10px] leading-none px-1.5 py-0.5 bg-purple-600 text-white rounded-full shadow">
                      Admin
                    </span>
                  )}
                </Link>

                {/* Enhanced Cart - More Prominent */}
                <Link to="/cart" className="relative group">
                  <div className="flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transition-all duration-300 rounded-2xl px-4 lg:px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 cart-pulse cart-glow">
                    <div className="relative">
                      <ShoppingCart className="h-6 w-6 lg:h-7 lg:w-7 drop-shadow-sm" />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full h-6 w-6 lg:h-7 lg:w-7 flex items-center justify-center font-bold cart-badge-bounce shadow-lg border-2 border-white">
                          {cartItemsCount}
                        </span>
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs text-white/80 font-medium">Cart</div>
                      <div className="text-sm lg:text-base font-bold">
                        R{cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
                      </div>
                    </div>
                    {cartItemsCount > 0 && (
                      <div className="hidden lg:block">
                        <ArrowRight className="h-5 w-5 animate-pulse" />
                      </div>
                    )}
                  </div>
                  {cartItemsCount > 0 && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  )}
                </Link>

                {/* Mobile menu toggle - Enhanced */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 xl:hidden group"
                >
                  {isMenuOpen ? 
                    <X className="h-6 w-6 group-hover:scale-110 transition-transform" /> : 
                    <Menu className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  }
                </button>
              </div>
            </div>

            {/* Mobile search bar - Enhanced */}
            <div className="lg:hidden pb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-11 pr-20 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-all duration-200"
                />
                <Search className="absolute left-3.5 top-4 h-5 w-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
              {/* Quick Actions for Mobile */}
              {!user && (
                <div className="flex space-x-3 pb-4 border-b border-gray-100">
                  <Link 
                    to="/login" 
                    className="flex-1 text-center py-3 text-gray-700 hover:text-green-600 border border-gray-200 rounded-xl font-medium transition-all hover:border-green-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="flex-1 text-center py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Navigation Links */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      to="/agricultural-products" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🌾 Agricultural Products
                    </Link>
                    <Link 
                      to="/products?category=vegetables" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🥬 Fresh Vegetables
                    </Link>
                    <Link 
                      to="/products?category=fruits" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🍎 Organic Fruits
                    </Link>
                    <Link 
                      to="/products?category=dairy" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🥛 Dairy Products
                    </Link>
                    <Link 
                      to="/products?category=grains" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🌾 Grains & Cereals
                    </Link>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Services
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      to="/consultancy" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🏢 Business Consultancy
                    </Link>
                    <Link 
                      to="/supply-chain" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🚚 Supply Chain
                    </Link>
                  </div>
                </div>

                {user && (
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Account
                    </h3>
                    <div className="space-y-2">
                      <Link 
                        to="/profile" 
                        className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        👤 My Account
                      </Link>
                      <Link 
                        to="/profile?tab=wishlist" 
                        className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ❤️ Wishlist
                      </Link>
                      <button 
                        onClick={() => { logout(); setIsMenuOpen(false); }}
                        className="block w-full text-left py-3 px-4 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all"
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Support
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      to="/partner-register" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🤝 Become a Partner
                    </Link>
                    <Link 
                      to="/support" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      💬 Help & Support
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      📞 Contact Us
                    </Link>
                    <Link
                      to="/about"
                      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ℹ️ About Grenmetey Investments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
