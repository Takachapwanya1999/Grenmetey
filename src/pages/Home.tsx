import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Truck, 
  Shield, 
  Leaf, 
  Star, 
  ChevronRight,
  ArrowRight,
  Users,
  Heart,
  Play,
  TrendingUp,
  Clock,
  MapPin,
  Gift,
  Zap,
  CheckCircle,
  Crown,
  Sparkles,
  ThumbsUp,
  Award,
  Target,
  Flame
} from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { Cobweb } from '../components/Cobweb';

// Enhanced product data with Grenmetey Investments-style features
const featuredProducts = [
  {
    id: 1,
    name: 'Organic Cherry Tomatoes',
    price: 45.99,
    originalPrice: 65.99,
    discount: 30,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=400&h=400&fit=crop',
    farmer: 'Green Valley Farm',
    location: 'Western Cape',
    badge: 'Bestseller',
    deliveryTime: 'Today',
    tags: ['Organic', 'Local', 'Fresh Today']
  },
  {
    id: 2,
    name: 'Premium Hass Avocados',
    price: 89.99,
    originalPrice: 110.99,
    discount: 19,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    farmer: 'Mountain View Orchards',
    location: 'Mpumalanga',
    badge: 'Premium',
    deliveryTime: 'Tomorrow',
    tags: ['Premium', 'Export Quality', 'Hass']
  },
  {
    id: 3,
    name: 'Baby Spinach Leaves',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    farmer: 'Fresh Greens Co.',
    location: 'Gauteng',
    badge: 'New',
    deliveryTime: 'Today',
    tags: ['Baby Leaf', 'Vitamin Rich', 'Tender']
  },
  {
    id: 4,
    name: 'Organic White Maize',
    price: 85.99,
    originalPrice: 105.99,
    discount: 19,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Golden Fields Co-op',
    location: 'Free State',
    badge: 'Traditional',
    deliveryTime: '2 Days',
    tags: ['Organic', 'Non-GMO', 'Staple Food']
  },
  {
    id: 5,
    name: 'Fresh Free-Range Eggs',
    price: 65.99,
    originalPrice: 79.99,
    discount: 18,
    rating: 4.8,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    farmer: 'Happy Hens Farm',
    location: 'Western Cape',
    badge: 'Farm Fresh',
    deliveryTime: 'Today',
    tags: ['Free Range', 'Omega-3', 'Fresh Daily']
  },
  {
    id: 6,
    name: 'Raw Macadamia Nuts',
    price: 185.99,
    originalPrice: 220.99,
    discount: 16,
    rating: 4.9,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
    farmer: 'Nut Grove Orchards',
    location: 'Mpumalanga',
    badge: 'Premium',
    deliveryTime: 'Tomorrow',
    tags: ['Raw', 'Healthy Fats', 'Export Grade']
  }
];

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetables',
    items: '2,500+ items',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
    deal: 'Up to 40% off',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 2,
    name: 'Fresh Fruits',
    items: '1,800+ items',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=200&fit=crop',
    deal: 'Seasonal specials',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 3,
    name: 'Grains & Cereals',
    items: '850+ items',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
    deal: 'Bulk discounts',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 4,
    name: 'Organic Dairy',
    items: '650+ items',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop',
    deal: 'Fresh daily',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 5,
    name: 'Herbs & Spices',
    items: '420+ items',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
    deal: 'Premium quality',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 6,
    name: 'Legumes & Pulses',
    items: '380+ items',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
    deal: 'Protein packed',
    color: 'from-amber-400 to-yellow-500'
  },
  {
    id: 7,
    name: 'Nuts & Seeds',
    items: '290+ items',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=200&fit=crop',
    deal: 'Healthy snacks',
    color: 'from-teal-400 to-green-500'
  },
  {
    id: 8,
    name: 'Farm Equipment',
    items: '180+ items',
    image: 'https://images.unsplash.com/photo-1594736797933-d0a14e7d6b3c?w=300&h=200&fit=crop',
    deal: 'Pro tools',
    color: 'from-gray-500 to-gray-600'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Cape Town',
    rating: 5,
    text: 'Grenmetey Investments has completely changed how I shop for groceries. The quality is outstanding and delivery is always on time!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
    verified: true,
    orderCount: 47
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Johannesburg',
    rating: 5,
    text: 'Supporting local farmers while getting the freshest produce delivered to my door - absolutely love this platform!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
    verified: true,
    orderCount: 89
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Durban',
    rating: 5,
    text: 'The organic selection is incredible and prices are very competitive. Customer service is top-notch too!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
    verified: true,
    orderCount: 156
  }
];







export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [liveVisitors, setLiveVisitors] = useState(847);
  const [currentPromo, setCurrentPromo] = useState(0);
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const visitorTimer = setInterval(() => {
      setLiveVisitors(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(visitorTimer);
  }, []);

  const promotions = [
    {
      title: "🚚 FREE DELIVERY",
      subtitle: "On orders over R150",
      bg: "from-blue-500 to-blue-600"
    },
    {
      title: "🔥 FLASH SALE",
      subtitle: "Up to 50% off organic",
      bg: "from-red-500 to-red-600"
    },
    {
      title: "🌱 NEW ARRIVALS",
      subtitle: "Fresh from the farm",
      bg: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const promoTimer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 3000);
    return () => clearInterval(promoTimer);
  }, [promotions.length]);

  return (
    <div className="min-h-screen">
      {/* Promotional Banner */}
      <div className={`bg-gradient-to-r ${promotions[currentPromo].bg} text-white py-3 animate-slide-down`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Sparkles className="h-5 w-5 animate-float-delayed" />
            <span className="font-bold text-lg">{promotions[currentPromo].title}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-sm opacity-90">{promotions[currentPromo].subtitle}</span>
            <Sparkles className="h-5 w-5 animate-float-delayed" />
          </div>
        </div>
      </div>

      {/* Live Activity Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <span>{liveVisitors} people shopping now</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span>247 orders today</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Next delivery in 2 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with animations */}
      <section 
        className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden"
      >
        {/* Enhanced agricultural cobwebs - More visible */}
        <Cobweb 
          size="xl" 
          position="top-left" 
          color="#16a34a" 
          opacity={0.35}
          variant="agricultural"
          className="animate-cobweb-sway"
        />
        <Cobweb 
          size="lg" 
          position="top-right" 
          color="#22c55e" 
          opacity={0.3}
          variant="agricultural"
          className="animate-cobweb-sway"
        />
        <Cobweb 
          size="md" 
          position="bottom-left" 
          color="#15803d" 
          opacity={0.25}
          variant="agricultural"
          className="animate-web-shimmer"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-8 animate-fadeInLeft"
            >
              <div className="space-y-4">
                <div 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium animate-scaleIn animate-delay-200"
                >
                  <div className="animate-harvest-sway">
                    <Crown className="h-4 w-4 mr-2 text-yellow-600" />
                  </div>
                  Premium Quality • Verified Farms
                </div>
                <h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fadeInUp animate-delay-400"
                >
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Africa's
                  </span>
                  <br />
                  <span className="text-gray-900">Leading</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Grenmetey Investments</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join over <span className="font-bold text-green-600">50,000+</span> satisfied customers. Premium agricultural products from verified farms, delivered with Grenmetey Investments excellence.
                </p>
              </div>

              <div 
                className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animate-delay-600"
              >
                <div className="hover-scale">
                  <Link
                    to="/products"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2 group-hover:animate-shake" />
                    Shop Premium Products
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <button 
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover:border-green-700 hover-scale"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 animate-fadeInUp animate-delay-800">
                <div className="text-center animate-float">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Verified Farmers</div>
                </div>
                <div className="text-center animate-float-delayed">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Premium Products</div>
                </div>
                <div className="text-center animate-float">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">2hrs</div>
                  <div className="text-sm text-gray-600 font-medium">Express Delivery</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4 animate-fadeInUp animate-delay-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 animate-gentle-bounce" />
                  <span className="text-sm text-gray-600 font-medium">Organic Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600 animate-gentle-bounce animate-delay-100" />
                  <span className="text-sm text-gray-600 font-medium">Quality Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-600 font-medium">Award Winning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-slide-down">
                <img
                  src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600"
                  alt="Fresh vegetables from local farms"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-bounce-in">
                  <div className="flex items-center space-x-2">
                    <Flame className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="text-xs text-gray-500">Today's Deals</div>
                      <div className="text-sm font-bold text-red-500">Up to 50% Off</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce-in" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-xs text-gray-500">Free Delivery</div>
                      <div className="text-sm font-bold text-green-500">Orders R150+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 animate-scaleIn">
              <Crown className="h-4 w-4 mr-2 animate-harvest-sway" />
              Grenmetey Investments Excellence
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">
              Why <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Grenmetey Investments</span> Leads?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-300">
              Premium service standards that match Africa's most trusted e-commerce platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover-scale hover-lift animate-scaleIn animate-delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300 shadow-lg">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Delivery</h3>
                <p className="text-gray-600 mb-4">Express delivery in 2 hours. Premium logistics network.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-green-600 font-medium">
                  <Zap className="h-4 w-4" />
                  <span>Same-day available</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover-scale hover-lift animate-scaleIn animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600 mb-4">100% quality guarantee with AI-powered inspection.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover-scale hover-lift animate-scaleIn animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Farm Partnership</h3>
                <p className="text-gray-600 mb-4">Direct trade ensuring fair prices and sustainability.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-orange-600 font-medium">
                  <Heart className="h-4 w-4" />
                  <span>Supporting 500+ farms</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover-scale hover-lift animate-scaleIn animate-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300 shadow-lg">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carbon Neutral</h3>
                <p className="text-gray-600 mb-4">Eco-friendly packaging and sustainable practices.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>100% sustainable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust metrics */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">4.9★</div>
                <div className="text-sm text-gray-300">Customer Rating</div>
                <div className="text-xs text-gray-400">50,000+ reviews</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">99.8%</div>
                <div className="text-sm text-gray-300">Delivery Success</div>
                <div className="text-xs text-gray-400">Industry leading</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-300">Premium Support</div>
                <div className="text-xs text-gray-400">Always available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">2hrs</div>
                <div className="text-sm text-gray-300">Express Delivery</div>
                <div className="text-xs text-gray-400">Major metros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle agricultural cobwebs for farm atmosphere */}
        <Cobweb 
          size="sm" 
          position="bottom-left" 
          color="#22c55e" 
          opacity={0.08}
          variant="agricultural"
          className="animate-web-shimmer"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              <Gift className="h-4 w-4 mr-2" />
              Exclusive Categories • Premium Selection
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-600">
              Curated collections of premium agricultural products with exclusive deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Deal badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                  {category.deal}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">Premium</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.items}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-xs">4.8+ rating</span>
                    </div>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Special category highlights */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Crown className="h-8 w-8 text-yellow-300 mr-3" />
                  <span className="text-2xl font-bold">Premium Collection</span>
                </div>
                <p className="text-lg mb-4 opacity-90">Handpicked organic produce from certified farms</p>
                <Link to="/products?premium=true" className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Shop Premium
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20">
                <Leaf className="h-32 w-32" />
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Flame className="h-8 w-8 text-yellow-300 mr-3" />
                  <span className="text-2xl font-bold">Flash Deals</span>
                </div>
                <p className="text-lg mb-4 opacity-90">Limited time offers on fresh seasonal produce</p>
                <Link to="/products?deals=true" className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Shop Deals
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20">
                <Zap className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 HIGH-IMPACT REVENUE SERVICES - PROMINENTLY FEATURED */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse shadow-lg">
              <Flame className="h-5 w-5 mr-2" />
              🔥 GAME-CHANGING BUSINESS SERVICES
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Agricultural Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unlock massive revenue opportunities with our premium business services. 
              From B2B wholesale to AI-powered insights, scale your operations to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* B2B Wholesale - PRIORITY #1 */}
            <Link
              to="/b2b-wholesale"
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-2 border-transparent hover:border-yellow-400 transform hover:scale-105 animate-slideInUp"
            >
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                🔥 HUGE REVENUE
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Wholesale Platform</h3>
              <p className="text-gray-600 mb-6">Supply restaurants, hotels, and grocery chains. Save 15-35% with volume pricing and dedicated account management.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Volume discounts up to 35%</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>60-day payment terms</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">Start Saving Today</span>
                <ArrowRight className="h-6 w-6 text-orange-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Subscription Boxes */}
            <Link
              to="/subscription-boxes"
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-2 border-transparent hover:border-green-400 transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW
              </div>
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscription Boxes</h3>
              <p className="text-gray-600 mb-6">Fresh produce delivered weekly. Predictable revenue stream with premium pricing for convenience.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Weekly fresh delivery</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Seasonal variety boxes</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>From R199/month</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">Subscribe Now</span>
                <ArrowRight className="h-6 w-6 text-green-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* AI Assistant */}
            <Link
              to="/ai-assistant"
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-2 border-transparent hover:border-blue-400 transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                AI
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="relative">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-sm">AI</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Agricultural Assistant</h3>
              <p className="text-gray-600 mb-6">Get expert farming advice 24/7. Premium insights for crop planning, pest management, and market analysis.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>24/7 expert advice</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Crop & pest identification</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Premium from R99/month</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">Try AI Free</span>
                <ArrowRight className="h-6 w-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Financial Services */}
            <Link
              to="/financial-services"
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-2 border-transparent hover:border-purple-400 transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                LOANS
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white font-bold text-lg">R</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-6">Access micro-loans, crop insurance, and "buy now, pay after harvest" payment plans designed for farmers.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Micro-loans from R5,000</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Crop insurance protection</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Pay after harvest plans</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-purple-600">Apply Now</span>
                <ArrowRight className="h-6 w-6 text-purple-600 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Agricultural Business?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of farmers and businesses already scaling with our premium services. 
                  Start with B2B wholesale for immediate revenue impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/b2b-wholesale"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Users className="h-6 w-6 mr-2" />
                    Start B2B Wholesale
                    <ArrowRight className="h-6 w-6 ml-2" />
                  </Link>
                  <Link
                    to="/subscription-boxes"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Gift className="h-6 w-6 mr-2" />
                    Try Subscription Boxes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-16 bg-white">
        {/* Premium agricultural cobweb for product showcase */}
        <Cobweb 
          size="xl" 
          position="top-right" 
          color="#16a34a" 
          opacity={0.06}
          variant="agricultural"
          className="animate-spider-crawl"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Bestsellers • Premium Quality
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Today's <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Fresh Picks</span>
              </h2>
              <p className="text-xl text-gray-600">
                Hand-selected premium products from our verified farm partners
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 animate-bounce-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Premium badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ${
                      product.badge === 'Bestseller' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      product.badge === 'Premium' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      product.badge === 'New' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      'bg-gradient-to-r from-orange-500 to-orange-600'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Discount badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                      -{product.discount}%
                    </span>
                  </div>

                  {/* Delivery time */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-green-600" />
                      <span className="text-xs font-medium text-gray-700">{product.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Wishlist button */}
                  <button 
                    onClick={() => toggleWishlist({
                      id: product.id.toString(),
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: 'vegetables', // Default category
                      farmer: product.farmer,
                      location: product.location
                    })}
                    className={`absolute bottom-3 right-3 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 group/heart ${
                      isInWishlist(product.id.toString()) 
                        ? 'bg-red-50 text-red-500' 
                        : 'bg-white/95 text-gray-600'
                    }`}
                  >
                    <Heart className={`h-4 w-4 group-hover/heart:scale-110 transition-all ${
                      isInWishlist(product.id.toString()) 
                        ? 'fill-current text-red-500' 
                        : 'group-hover/heart:text-red-500'
                    }`} />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {product.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors text-lg">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                    <p className="text-sm text-gray-600">
                      {product.farmer} • {product.location}
                    </p>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        R{product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        R{product.originalPrice}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-2 rounded-xl transition-all duration-300 group/cart shadow-lg hover:shadow-xl">
                      <ShoppingCart className="h-4 w-4 group-hover/cart:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Express delivery indicator */}
                  <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-green-600 bg-green-50 py-2 rounded-lg">
                    <Truck className="h-3 w-3" />
                    <span className="font-medium">Express delivery available</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Verified Reviews • Real Customers
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Join <span className="font-bold text-blue-600">50,000+</span> satisfied customers who trust Grenmetey Investments
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
              
              {/* Customer avatar */}
              <div className="relative inline-block mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto shadow-lg"
                />
                {testimonials[currentTestimonial].verified && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-float" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer info */}
              <div className="space-y-2">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {testimonials[currentTestimonial].orderCount} orders
                  </div>
                  {testimonials[currentTestimonial].verified && (
                    <div className="flex items-center text-blue-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verified Buyer
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Review stats */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="text-xs text-gray-500">Based on 12,000+ reviews</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Recommend Us</div>
                <div className="text-xs text-gray-500">Would shop again</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
                <div className="text-xs text-gray-500">And growing daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Platform Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Latest Platform Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Farming Made
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Simple</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our cutting-edge agricultural technology designed to help farmers succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weather Dashboard Feature */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Smart Weather Dashboard</h3>
                <p className="text-blue-100">Real-time weather alerts and farming recommendations</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    5-day detailed weather forecast
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Farming alerts and recommendations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Optimal planting time notifications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Irrigation schedule optimization
                  </li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Try Weather Dashboard
                </button>
              </div>
            </div>

            {/* Smart Notifications Feature */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Smart Notifications</h3>
                <p className="text-purple-100">Stay informed with intelligent agricultural alerts</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Market price updates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Seasonal farming reminders
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Priority-based alert system
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Customizable notification filters
                  </li>
                </ul>
                <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Enable Notifications
                </button>
              </div>
            </div>

            {/* Enhanced Reviews Feature */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enhanced Reviews</h3>
                <p className="text-green-100">Detailed farmer feedback with agricultural context</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Farming context in reviews
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Photo and video attachments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Verified purchase badges
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Helpful voting system
                  </li>
                </ul>
                <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Read Reviews
                </button>
              </div>
            </div>
          </div>

          {/* Feature Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
              <div className="text-gray-600">Weather Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Daily Notifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Review Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Farmer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-5 w-5 mr-2" />
              Join Africa's Leading Grenmetey Investments
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Experience
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Farm-Fresh Excellence?
              </span>
            </h2>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join over <span className="font-bold text-yellow-300">50,000</span> customers who are already enjoying premium agricultural products with Grenmetey Investments service excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center px-10 py-5 bg-white text-green-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                <ShoppingCart className="h-6 w-6 mr-3 group-hover:animate-shake" />
                Start Shopping Now
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/partner-register"
                className="group inline-flex items-center justify-center px-10 py-5 border-3 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Users className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                Become a Farm Partner
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 mt-12 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-medium">Express Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">4.9★ Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
