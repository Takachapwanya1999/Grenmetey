import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wheat, 
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
  Shield,
  Leaf
} from 'lucide-react';

// Crops and grains products data
const cropsProducts = [
  {
    id: 1,
    name: 'Organic White Maize',
    category: 'Maize',
    price: 85.99,
    originalPrice: 105.99,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Golden Fields Co-op',
    location: 'Free State',
    rating: 4.7,
    reviews: 189,
    badges: ['Certified Organic', 'Non-GMO'],
    inStock: true,
    description: 'Premium organic white maize, perfect for traditional meals',
    organic: true,
    weight: '5kg'
  },
  {
    id: 2,
    name: 'Brown Rice',
    category: 'Rice',
    price: 125.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    farmer: 'Rice Valley Farms',
    location: 'KwaZulu-Natal',
    rating: 4.6,
    reviews: 134,
    badges: ['Whole Grain', 'High Fiber'],
    inStock: true,
    description: 'Nutritious brown rice with natural bran and germ intact',
    organic: false,
    weight: '2kg'
  },
  {
    id: 3,
    name: 'Organic Sorghum',
    category: 'Ancient Grains',
    price: 95.99,
    originalPrice: 115.99,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Ancient Grains Farm',
    location: 'Limpopo',
    rating: 4.4,
    reviews: 87,
    badges: ['Gluten Free', 'Traditional'],
    inStock: true,
    description: 'Traditional organic sorghum, gluten-free and nutrient-rich',
    organic: true,
    weight: '2kg'
  },
  {
    id: 4,
    name: 'Sunflower Seeds',
    category: 'Seeds',
    price: 68.99,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
    farmer: 'Sunshine Seed Co.',
    location: 'Northern Cape',
    rating: 4.8,
    reviews: 156,
    badges: ['Raw & Natural', 'High Protein'],
    inStock: true,
    description: 'Raw sunflower seeds, perfect for snacking or cooking',
    organic: false,
    weight: '500g'
  },
  {
    id: 5,
    name: 'Wheat Flour',
    category: 'Wheat',
    price: 45.99,
    originalPrice: 55.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Mills & Fields',
    location: 'Western Cape',
    rating: 4.5,
    reviews: 198,
    badges: ['Stone Ground', 'Unbleached'],
    inStock: true,
    description: 'Stone-ground wheat flour, perfect for baking',
    organic: false,
    weight: '2.5kg'
  },
  {
    id: 6,
    name: 'Quinoa',
    category: 'Supergrains',
    price: 185.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    farmer: 'Highland Quinoa Farm',
    location: 'Western Cape',
    rating: 4.9,
    reviews: 89,
    badges: ['Superfood', 'Complete Protein'],
    inStock: true,
    description: 'Premium quinoa, complete protein and gluten-free',
    organic: true,
    weight: '500g'
  },
  {
    id: 7,
    name: 'Barley',
    category: 'Barley',
    price: 75.99,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Grain Masters',
    location: 'Free State',
    rating: 4.3,
    reviews: 67,
    badges: ['Hulled Barley', 'High Fiber'],
    inStock: true,
    description: 'Hulled barley, perfect for soups and stews',
    organic: false,
    weight: '1kg'
  },
  {
    id: 8,
    name: 'Millet',
    category: 'Ancient Grains',
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Heritage Grains Co.',
    location: 'Mpumalanga',
    rating: 4.6,
    reviews: 123,
    badges: ['Ancient Grain', 'Gluten Free'],
    inStock: true,
    description: 'Nutrient-dense millet, traditional African grain',
    organic: true,
    weight: '1kg'
  },
  {
    id: 9,
    name: 'Oats',
    category: 'Oats',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
    farmer: 'Morning Oats Farm',
    location: 'Eastern Cape',
    rating: 4.7,
    reviews: 234,
    badges: ['Steel Cut', 'Heart Healthy'],
    inStock: true,
    description: 'Steel-cut oats for the perfect breakfast',
    organic: false,
    weight: '1kg'
  },
  {
    id: 10,
    name: 'Buckwheat',
    category: 'Pseudocereals',
    price: 145.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    farmer: 'Mountain Grains',
    location: 'KwaZulu-Natal',
    rating: 4.4,
    reviews: 78,
    badges: ['Gluten Free', 'High Protein'],
    inStock: true,
    description: 'Nutty buckwheat groats, gluten-free and nutritious',
    organic: true,
    weight: '500g'
  }
];

const categories = [
  'All Categories',
  'Maize',
  'Rice',
  'Wheat',
  'Ancient Grains',
  'Seeds',
  'Supergrains',
  'Barley',
  'Oats',
  'Pseudocereals'
];

const sortOptions = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];

export function CropsAndGrains() {
  const [products] = useState(cropsProducts);
  const [filteredProducts, setFilteredProducts] = useState(cropsProducts);
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
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crops & Grains
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto">
              Premium grains, cereals, and crop varieties from South African farms - traditional and modern varieties
            </p>
            <div className="flex items-center justify-center space-x-8 text-yellow-100">
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                <span>Quality Tested</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-6 w-6 mr-2" />
                <span>Bulk Orders</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2" />
                <span>Heritage Varieties</span>
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
                placeholder="Search crops and grains..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
                  className={`p-2 ${viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'text-gray-500'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-yellow-500 text-white' : 'text-gray-500'}`}
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
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
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
                {product.organic && (
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                )}
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="p-4 flex-1">
                <div className="text-sm text-yellow-600 font-medium mb-1">{product.category}</div>
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
                      className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs"
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
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors flex items-center">
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
            <Wheat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
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
              className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
            >
              ← Back to Agricultural Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
