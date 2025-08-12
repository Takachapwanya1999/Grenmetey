import { Link } from 'react-router-dom';
import { 
  Wheat, 
  Users, 
  Sprout, 
  Tractor, 
  Leaf, 
  ArrowRight,
  Star,
  MapPin
} from 'lucide-react';
import { GrenmeteyInvestmentsCobweb } from '../components/GrenmeteyInvestmentsCobweb';

const categories = [
  {
    id: 'livestock',
    title: 'Livestock Production',
    description: 'Premium livestock, dairy products, and animal-based agricultural products',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop',
    productCount: '150+ products',
    href: '/agricultural-products/livestock',
    highlights: ['Free-range cattle', 'Organic dairy', 'Poultry products', 'Sheep & goats'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'crops',
    title: 'Crops and Grains',
    description: 'Traditional and modern crop varieties, grains, and field produce',
    icon: Wheat,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
    productCount: '300+ products',
    href: '/agricultural-products/crops',
    highlights: ['Maize varieties', 'Wheat & barley', 'Rice products', 'Ancient grains'],
    color: 'from-yellow-500 to-amber-600'
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Grade A Fresh Milk',
    category: 'Livestock',
    price: 25.99,
    originalPrice: 32.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    farmer: 'Dairy Valley Co-op',
    location: 'Free State',
    rating: 4.9,
    reviews: 245,
    badge: 'Farm Fresh',
    organic: false,
    inStock: true
  },
  {
    id: 2,
    name: 'Organic White Maize',
    category: 'Crops',
    price: 85.99,
    originalPrice: 105.99,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Golden Fields Co-op',
    location: 'Free State',
    rating: 4.7,
    reviews: 189,
    badge: 'Certified Organic',
    organic: true,
    inStock: true
  },
  {
    id: 3,
    name: 'Free-Range Eggs',
    category: 'Livestock',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    farmer: 'Happy Hens Farm',
    location: 'Western Cape',
    rating: 4.8,
    reviews: 156,
    badge: 'Free Range',
    organic: true,
    inStock: true
  },
  {
    id: 4,
    name: 'Premium Brown Rice',
    category: 'Crops',
    price: 125.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    farmer: 'Rice Valley Farms',
    location: 'KwaZulu-Natal',
    rating: 4.6,
    reviews: 134,
    badge: 'Whole Grain',
    organic: false,
    inStock: true
  }
];

const stats = [
  { label: 'Partner Farms', value: '2,500+', icon: Tractor },
  { label: 'Products Available', value: '450+', icon: Sprout },
  { label: 'Provinces Covered', value: '9', icon: MapPin },
  { label: 'Customer Rating', value: '4.8★', icon: Star }
];

export function AgriculturalProducts() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Premium Grenmetey Investments cobwebs for agricultural theme */}
      <GrenmeteyInvestmentsCobweb section="hero" intensity="moderate" theme="organic" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-agricultural-800 to-agricultural-600 text-white relative">
        <GrenmeteyInvestmentsCobweb section="sidebar" intensity="subtle" theme="premium" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Agricultural Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-agricultural-100 max-w-3xl mx-auto">
              Discover premium livestock products and quality crops directly from African farms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/agricultural-products/livestock"
                className="bg-white text-agricultural-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Livestock
              </Link>
              <Link 
                to="/agricultural-products/crops"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-agricultural-600 transition-colors"
              >
                Browse Crops & Grains
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-agricultural-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-agricultural-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of agricultural products from trusted African farmers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`bg-gradient-to-br ${category.color} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-90 p-2 rounded-lg">
                      <category.icon className="h-6 w-6 text-gray-800" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount}
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Featured Items:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-agricultural-100 text-agricultural-700 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={category.href}
                    className="inline-flex items-center bg-agricultural-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-agricultural-700 transition-colors group"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked premium products from our partner farms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-agricultural-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                  {product.organic && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Leaf className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="text-sm text-agricultural-600 font-medium mb-1">{product.category}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{product.farmer} • {product.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">R{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                      )}
                    </div>
                    <Link 
                      to={`/products/${product.id}`}
                      className="bg-agricultural-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-agricultural-700 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-agricultural-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Support Local Agriculture?
            </h2>
            <p className="text-xl text-agricultural-100 mb-8 max-w-2xl mx-auto">
              Join thousands of customers supporting African farmers and enjoying the freshest agricultural products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register"
                className="bg-white text-agricultural-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Shopping
              </Link>
              <Link 
                to="/partner-register"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-agricultural-600 transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
