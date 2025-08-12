import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  MapPin, 
  ShoppingCart, 
  Heart, 
  Grid,
  List,
  Search,
  ChevronDown,
  Award,
  Truck,
  Shield
} from 'lucide-react';

// Livestock products data
const livestockProducts = [
  {
    id: 1,
    name: 'Grade A Fresh Milk',
    category: 'Dairy',
    price: 25.99,
    originalPrice: 32.99,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    farmer: 'Dairy Valley Co-op',
    location: 'Free State',
    rating: 4.9,
    reviews: 245,
    badges: ['Farm Fresh', 'Hormone Free'],
    inStock: true,
    description: 'Fresh, creamy milk from grass-fed cows',
    organic: false,
    weight: '1L'
  },
  {
    id: 2,
    name: 'Free-Range Chicken Eggs',
    category: 'Poultry',
    price: 65.99,
    originalPrice: 79.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    farmer: 'Happy Hens Farm',
    location: 'Western Cape',
    rating: 4.8,
    reviews: 187,
    badges: ['Free Range', 'Omega-3 Rich'],
    inStock: true,
    description: 'Fresh organic eggs from pasture-raised hens',
    organic: true,
    weight: '12 eggs'
  },
  {
    id: 3,
    name: 'Grass-Fed Beef Mince',
    category: 'Meat',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop',
    farmer: 'Highland Cattle Ranch',
    location: 'Eastern Cape',
    rating: 4.7,
    reviews: 156,
    badges: ['Grass Fed', 'Premium Cut'],
    inStock: true,
    description: 'Premium grass-fed beef mince, lean and flavorful',
    organic: false,
    weight: '500g'
  },
  {
    id: 4,
    name: 'Artisan Goat Cheese',
    category: 'Dairy',
    price: 125.99,
    originalPrice: 149.99,
    discount: 16,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop',
    farmer: 'Mountain View Dairy',
    location: 'Western Cape',
    rating: 4.9,
    reviews: 134,
    badges: ['Artisan Made', 'Award Winning'],
    inStock: true,
    description: 'Creamy artisan goat cheese with herbs',
    organic: true,
    weight: '200g'
  },
  {
    id: 5,
    name: 'Free-Range Chicken',
    category: 'Poultry',
    price: 165.99,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop',
    farmer: 'Countryside Poultry',
    location: 'KwaZulu-Natal',
    rating: 4.6,
    reviews: 98,
    badges: ['Free Range', 'Antibiotic Free'],
    inStock: true,
    description: 'Whole free-range chicken, tender and flavorful',
    organic: false,
    weight: '1.5kg'
  },
  {
    id: 6,
    name: 'Raw Honey',
    category: 'Bee Products',
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    farmer: 'Golden Hive Apiaries',
    location: 'Mpumalanga',
    rating: 4.8,
    reviews: 178,
    badges: ['Raw & Unfiltered', 'Single Origin'],
    inStock: true,
    description: 'Pure raw honey from wildflower meadows',
    organic: true,
    weight: '500g'
  },
  {
    id: 7,
    name: 'Lamb Shoulder',
    category: 'Meat',
    price: 285.99,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=400&fit=crop',
    farmer: 'Karoo Lamb Co.',
    location: 'Northern Cape',
    rating: 4.7,
    reviews: 89,
    badges: ['Karoo Lamb', 'Premium Quality'],
    inStock: true,
    description: 'Tender Karoo lamb shoulder, perfect for roasting',
    organic: false,
    weight: '1kg'
  },
  {
    id: 8,
    name: 'Duck Eggs',
    category: 'Poultry',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
    farmer: 'Waterfowl Farm',
    location: 'Gauteng',
    rating: 4.5,
    reviews: 67,
    badges: ['Free Range', 'Rich Flavor'],
    inStock: true,
    description: 'Rich, flavorful duck eggs perfect for baking',
    organic: false,
    weight: '6 eggs'
  }
];

const categories = [
  'All Categories',
  'Dairy',
  'Poultry', 
  'Meat',
  'Bee Products',
  'Fish & Seafood'
];

const sortOptions = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];

export function LivestockProduction() {
  const [products] = useState(livestockProducts);
  const [filteredProducts, setFilteredProducts] = useState(livestockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query: string, category: string) => {
    let filtered = [...products];

    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.farmer.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== 'All Categories') {
      filtered = filtered.filter(product => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Livestock Production
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Premium livestock products from trusted South African farms - dairy, meat, poultry, and more
            </p>
            <div className="flex items-center justify-center space-x-8 text-amber-100">
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-6 w-6 mr-2" />
                <span>Fresh Delivery</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2" />
                <span>Farm Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search livestock products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'text-gray-500'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'text-gray-500'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredProducts.length} Products Found
            {selectedCategory !== 'All Categories' && (
              <span className="text-lg font-normal text-gray-600 ml-2">
                in {selectedCategory}
              </span>
            )}
          </h2>
        </div>

        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badges[0]}
                  </span>
                </div>
                {product.discount && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      -{product.discount}%
                    </span>
                  </div>
                )}
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="p-4 flex-1">
                <div className="text-sm text-amber-600 font-medium mb-1">{product.category}</div>
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{product.farmer} • {product.location}</span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      R{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        R{product.originalPrice}
                      </span>
                    )}
                    <span className="text-sm text-gray-500">/ {product.weight}</span>
                  </div>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Back to Agricultural Products */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Link
              to="/agricultural-products"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              ← Back to Agricultural Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
