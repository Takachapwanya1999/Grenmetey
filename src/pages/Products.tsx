import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart,
  MapPin,
  Truck,
  Leaf,
  SlidersHorizontal,
  X,
  ChevronDown
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Cobweb } from '../components/Cobweb';

// Local simplified product interface for the Products page
interface SimpleProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  farmer: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  badges: string[];
  inStock: boolean;
  description: string;
  organic: boolean;
  locallyGrown: boolean;
  weight: string;
  unit: string;
}

const mockProducts: SimpleProduct[] = [
  // Fresh Vegetables
  {
    id: 1,
    name: 'Organic Cherry Tomatoes',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1546470427-e9e6e1e8d5e6?w=400',
    farmer: 'Green Valley Farm',
    location: 'Western Cape',
    rating: 4.8,
    reviews: 124,
    category: 'Fresh Vegetables',
    badges: ['Certified Organic', 'Farm Fresh'],
    inStock: true,
    description: 'Juicy, vine-ripened organic cherry tomatoes perfect for salads and snacking.',
    organic: true,
    locallyGrown: true,
    weight: '500',
    unit: 'g'
  },
  {
    id: 2,
    name: 'Organic Carrots',
    price: 32.99,
    originalPrice: 42.99,
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400',
    farmer: 'Mountain View Farm',
    location: 'KwaZulu-Natal',
    rating: 4.7,
    reviews: 156,
    category: 'Fresh Vegetables',
    badges: ['Pesticide Free', 'Organic'],
    inStock: true,
    description: 'Sweet, crunchy organic carrots packed with beta-carotene.',
    organic: true,
    locallyGrown: true,
    weight: '1',
    unit: 'kg'
  },
  {
    id: 3,
    name: 'Baby Spinach',
    price: 28.99,
    originalPrice: 35.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
    farmer: 'Eco Gardens',
    location: 'Gauteng',
    rating: 4.6,
    reviews: 203,
    category: 'Fresh Vegetables',
    badges: ['Locally Grown', 'Iron Rich'],
    inStock: true,
    description: 'Fresh, tender baby spinach leaves perfect for salads and smoothies.',
    organic: false,
    locallyGrown: true,
    weight: '250',
    unit: 'g'
  },
  {
    id: 4,
    name: 'Sweet Corn',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400',
    farmer: 'Sunshine Farms',
    location: 'Mpumalanga',
    rating: 4.5,
    reviews: 89,
    category: 'Fresh Vegetables',
    badges: ['Sweet & Tender', 'Non-GMO'],
    inStock: true,
    description: 'Sweet, juicy corn kernels perfect for grilling or boiling.',
    organic: false,
    locallyGrown: true,
    weight: '4',
    unit: 'ears'
  },
  {
    id: 5,
    name: 'Green Bell Peppers',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=400',
    farmer: 'Fresh Fields Co.',
    location: 'Eastern Cape',
    rating: 4.4,
    reviews: 67,
    category: 'Fresh Vegetables',
    badges: ['Crisp & Fresh', 'Vitamin C Rich'],
    inStock: true,
    description: 'Crisp, fresh green bell peppers ideal for cooking and salads.',
    organic: false,
    locallyGrown: true,
    weight: '500',
    unit: 'g'
  },
  {
    id: 6,
    name: 'Organic Butternut Squash',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400',
    farmer: 'Heritage Growers',
    location: 'Northern Cape',
    rating: 4.6,
    reviews: 112,
    category: 'Fresh Vegetables',
    badges: ['Organic', 'Long Storage'],
    inStock: true,
    description: 'Sweet, creamy butternut squash perfect for soups and roasting.',
    organic: true,
    locallyGrown: true,
    weight: '1.5',
    unit: 'kg'
  },

  // Fresh Fruits
  {
    id: 7,
    name: 'Premium Hass Avocados',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
    farmer: 'Sunshine Orchards',
    location: 'Limpopo',
    rating: 4.9,
    reviews: 189,
    category: 'Fresh Fruits',
    badges: ['Premium Quality', 'Export Grade'],
    inStock: true,
    description: 'Creamy, perfectly ripe Hass avocados rich in healthy fats.',
    organic: false,
    locallyGrown: true,
    weight: '4',
    unit: 'pieces'
  },
  {
    id: 8,
    name: 'Organic Red Apples',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    farmer: 'Highland Orchards',
    location: 'Western Cape',
    rating: 4.8,
    reviews: 92,
    category: 'Fresh Fruits',
    badges: ['Certified Organic', 'Crisp & Sweet'],
    inStock: true,
    description: 'Crisp, sweet organic red apples grown in mountain orchards.',
    organic: true,
    locallyGrown: true,
    weight: '1',
    unit: 'kg'
  },
  {
    id: 9,
    name: 'Sweet Oranges',
    price: 48.99,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400',
    farmer: 'Citrus Grove Farms',
    location: 'Western Cape',
    rating: 4.7,
    reviews: 134,
    category: 'Fresh Fruits',
    badges: ['Vitamin C Rich', 'Juicy'],
    inStock: true,
    description: 'Sweet, juicy oranges bursting with natural vitamin C.',
    organic: false,
    locallyGrown: true,
    weight: '2',
    unit: 'kg'
  },
  {
    id: 10,
    name: 'Fresh Strawberries',
    price: 75.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    farmer: 'Berry Delicious Farm',
    location: 'Western Cape',
    rating: 4.9,
    reviews: 245,
    category: 'Fresh Fruits',
    badges: ['Premium', 'Sweet & Fragrant'],
    inStock: true,
    description: 'Sweet, fragrant strawberries perfect for desserts and snacking.',
    organic: false,
    locallyGrown: true,
    weight: '500',
    unit: 'g'
  },

  // Grains & Cereals
  {
    id: 11,
    name: 'Organic White Maize',
    price: 85.99,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
    farmer: 'Golden Fields Co-op',
    location: 'Free State',
    rating: 4.5,
    reviews: 78,
    category: 'Grains & Cereals',
    badges: ['Organic', 'Non-GMO'],
    inStock: true,
    description: 'Premium organic white maize, perfect for traditional meals.',
    organic: true,
    locallyGrown: true,
    weight: '5',
    unit: 'kg'
  },
  {
    id: 12,
    name: 'Brown Rice',
    price: 125.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    farmer: 'Rice Valley Farms',
    location: 'KwaZulu-Natal',
    rating: 4.6,
    reviews: 95,
    category: 'Grains & Cereals',
    badges: ['Whole Grain', 'High Fiber'],
    inStock: true,
    description: 'Nutritious brown rice with natural bran and germ intact.',
    organic: false,
    locallyGrown: true,
    weight: '2',
    unit: 'kg'
  },
  {
    id: 13,
    name: 'Organic Sorghum',
    price: 95.99,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
    farmer: 'Ancient Grains Farm',
    location: 'Limpopo',
    rating: 4.4,
    reviews: 56,
    category: 'Grains & Cereals',
    badges: ['Gluten Free', 'Traditional'],
    inStock: true,
    description: 'Traditional organic sorghum, gluten-free and nutrient-rich.',
    organic: true,
    locallyGrown: true,
    weight: '2',
    unit: 'kg'
  },

  // Dairy Products
  {
    id: 14,
    name: 'Farm Fresh Milk',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
    farmer: 'Dairy Valley Co-op',
    location: 'Free State',
    rating: 4.9,
    reviews: 178,
    category: 'Organic Dairy',
    badges: ['Fresh Daily', 'Hormone Free'],
    inStock: true,
    description: 'Fresh, creamy milk from grass-fed cows.',
    organic: false,
    locallyGrown: true,
    weight: '1',
    unit: 'L'
  },
  {
    id: 15,
    name: 'Organic Free-Range Eggs',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
    farmer: 'Happy Hens Farm',
    location: 'Western Cape',
    rating: 4.8,
    reviews: 156,
    category: 'Organic Dairy',
    badges: ['Free Range', 'Omega-3 Rich'],
    inStock: true,
    description: 'Fresh organic eggs from free-range, pasture-raised hens.',
    organic: true,
    locallyGrown: true,
    weight: '12',
    unit: 'eggs'
  },

  // Herbs & Spices
  {
    id: 16,
    name: 'Fresh Basil',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400',
    farmer: 'Herb Haven',
    location: 'Gauteng',
    rating: 4.7,
    reviews: 89,
    category: 'Herbs & Spices',
    badges: ['Aromatic', 'Culinary Grade'],
    inStock: true,
    description: 'Fresh, aromatic basil perfect for cooking and garnishing.',
    organic: false,
    locallyGrown: true,
    weight: '50',
    unit: 'g'
  },
  {
    id: 17,
    name: 'Organic Rosemary',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400',
    farmer: 'Mountain Herbs',
    location: 'Western Cape',
    rating: 4.6,
    reviews: 67,
    category: 'Herbs & Spices',
    badges: ['Organic', 'Medicinal'],
    inStock: true,
    description: 'Fresh organic rosemary with intense flavor and aroma.',
    organic: true,
    locallyGrown: true,
    weight: '30',
    unit: 'g'
  },

  // Legumes & Pulses
  {
    id: 18,
    name: 'Organic Black Beans',
    price: 78.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    farmer: 'Pulse Perfect Co.',
    location: 'Eastern Cape',
    rating: 4.5,
    reviews: 112,
    category: 'Legumes & Pulses',
    badges: ['High Protein', 'Organic'],
    inStock: true,
    description: 'Organic black beans rich in protein and fiber.',
    organic: true,
    locallyGrown: true,
    weight: '1',
    unit: 'kg'
  },
  {
    id: 19,
    name: 'Sugar Beans',
    price: 68.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    farmer: 'Bean Valley Farm',
    location: 'Free State',
    rating: 4.4,
    reviews: 89,
    category: 'Legumes & Pulses',
    badges: ['Traditional', 'High Fiber'],
    inStock: true,
    description: 'Traditional South African sugar beans, perfect for stews.',
    organic: false,
    locallyGrown: true,
    weight: '1',
    unit: 'kg'
  },

  // Nuts & Seeds
  {
    id: 20,
    name: 'Raw Macadamia Nuts',
    price: 185.99,
    originalPrice: 220.99,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400',
    farmer: 'Nut Grove Orchards',
    location: 'Mpumalanga',
    rating: 4.9,
    reviews: 134,
    category: 'Nuts & Seeds',
    badges: ['Premium', 'Raw & Natural'],
    inStock: true,
    description: 'Premium raw macadamia nuts, buttery and rich in healthy fats.',
    organic: false,
    locallyGrown: true,
    weight: '250',
    unit: 'g'
  }
];

const categories = [
  'All Categories',
  'Fresh Vegetables',
  'Fresh Fruits',
  'Grains & Cereals',
  'Organic Dairy',
  'Herbs & Spices',
  'Legumes & Pulses',
  'Nuts & Seeds',
  'Root Vegetables',
  'Leafy Greens',
  'Organic Produce',
  'Seeds & Seedlings',
  'Farm Equipment',
  'Fertilizers & Soil'
];

const sortOptions = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products] = useState<SimpleProduct[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<SimpleProduct[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All Categories');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filters, setFilters] = useState({
    organic: false,
    locallyGrown: false,
    inStock: true,
    freeDelivery: false
  });

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.farmer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Additional filters
    if (filters.organic) {
      filtered = filtered.filter(product => product.organic);
    }
    if (filters.locallyGrown) {
      filtered = filtered.filter(product => product.locallyGrown);
    }
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy, priceRange, filters, products]);

  const handleAddToCart = (product: SimpleProduct) => {
    // Convert SimpleProduct to full Product interface for cart
    const fullProduct = {
      id: product.id.toString(),
      name: product.name,
      description: product.description,
      category: { id: '1', name: product.category, slug: '', description: '', icon: '', subcategories: [] },
      subcategory: '',
      price: product.price,
      originalPrice: product.originalPrice,
      currency: 'ZAR',
      stock: product.inStock ? 10 : 0,
      images: [product.image],
      partnerId: '1',
      partnerName: product.farmer,
      specifications: [
        { name: 'Weight', value: product.weight, unit: product.unit }
      ],
      certifications: product.badges,
      origin: product.location,
      organicCertified: product.organic,
      ratings: [],
      averageRating: product.rating,
      totalReviews: product.reviews,
      tags: product.badges,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    addToCart(fullProduct, 1);
  };

  const handleToggleWishlist = (product: SimpleProduct) => {
    const wishlistItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      farmer: product.farmer,
      location: product.location
    };
    
    toggleWishlist(wishlistItem);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSortBy('relevance');
    setPriceRange([0, 200]);
    setFilters({
      organic: false,
      locallyGrown: false,
      inStock: true,
      freeDelivery: false
    });
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Agricultural cobwebs for ambiance */}
      <Cobweb 
        size="xl" 
        position="top-left" 
        color="#059669" 
        opacity={0.25}
        variant="agricultural"
        className="animate-web-shimmer"
      />
      <Cobweb 
        size="lg" 
        position="top-right" 
        color="#16a34a" 
        opacity={0.3}
        variant="agricultural"
        className="animate-cobweb-sway"
      />
      <Cobweb 
        size="md" 
        position="bottom-right" 
        color="#22c55e" 
        opacity={0.2}
        variant="agricultural"
        className="animate-web-shimmer"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fresh Agricultural Products
          </h1>
          <p className="text-gray-600">
            Discover fresh, locally-sourced products from trusted farmers
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, farmers, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range (R{priceRange[0]} - R{priceRange[1]})
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Filter Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.organic}
                        onChange={(e) => setFilters({...filters, organic: e.target.checked})}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Organic Certified</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.locallyGrown}
                        onChange={(e) => setFilters({...filters, locallyGrown: e.target.checked})}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Locally Grown</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.freeDelivery}
                        onChange={(e) => setFilters({...filters, freeDelivery: e.target.checked})}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Free Delivery</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          {(searchQuery || selectedCategory !== 'All Categories') && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'All Categories' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All Categories')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {product.badges.slice(0, 2).map((badge, index) => (
                      <span key={index} className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                  <button 
                    onClick={() => handleToggleWishlist(product)}
                    className={`absolute bottom-3 right-3 p-2 rounded-full shadow-md transition-all duration-200 ${
                      isInWishlist(product.id.toString()) 
                        ? 'bg-red-100 hover:bg-red-200' 
                        : 'bg-white/90 hover:bg-white'
                    }`}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${
                      isInWishlist(product.id.toString()) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600 hover:text-red-500'
                    }`} />
                  </button>
                </div>

                <div className="p-4">
                  <Link to={`/products/${product.id}`} className="block">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-2 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {product.farmer} • {product.location}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="ml-auto flex items-center text-xs text-gray-500">
                      <Truck className="h-3 w-3 mr-1" />
                      Fast delivery
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        R{product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          R{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-2 text-xs text-gray-500">
                    {product.weight} {product.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.badges.slice(0, 1).map((badge, index) => (
                        <span key={index} className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mt-1 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {product.farmer} • {product.location}
                        </p>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        
                        <div className="flex items-center mt-3 space-x-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Truck className="h-4 w-4 mr-1" />
                            Fast delivery available
                          </div>
                          {product.organic && (
                            <div className="flex items-center text-sm text-green-600">
                              <Leaf className="h-4 w-4 mr-1" />
                              Organic
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl font-bold text-gray-900">
                            R{product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              R{product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          {product.weight} {product.unit}
                        </p>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleToggleWishlist(product)}
                            className={`p-2 border rounded-lg transition-colors ${
                              isInWishlist(product.id.toString()) 
                                ? 'border-red-300 bg-red-50 hover:bg-red-100' 
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <Heart className={`h-5 w-5 transition-colors ${
                              isInWishlist(product.id.toString()) 
                                ? 'text-red-500 fill-current' 
                                : 'text-gray-600'
                            }`} />
                          </button>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

