import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  Leaf,
  Award,
  MapPin,
  Clock,
  Share2,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Info,
  Camera,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  farmer: string;
  farmerImage: string;
  farmerBio: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  badges: string[];
  inStock: boolean;
  stockCount: number;
  organic: boolean;
  locallyGrown: boolean;
  weight: string;
  unit: string;
  nutritionFacts: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    vitamins: string[];
  };
  harvestDate: string;
  shelfLife: string;
  storageInstructions: string;
  certifications: string[];
  shipping: {
    freeShipping: boolean;
    estimatedDays: string;
    methods: string[];
  };
  sustainability: {
    carbonFootprint: string;
    waterUsage: string;
    packaging: string;
  };
}

const mockProduct: ProductDetail = {
  id: 1,
  name: 'Organic Roma Tomatoes',
  description: 'Fresh, juicy organic Roma tomatoes perfect for cooking and salads.',
  longDescription: 'Our organic Roma tomatoes are grown using sustainable farming practices in the fertile soils of Western Cape. These vine-ripened beauties are packed with flavor and nutrients, making them perfect for everything from fresh salads to hearty pasta sauces. Each tomato is hand-picked at peak ripeness to ensure maximum flavor and nutritional value.',
  price: 45.99,
  originalPrice: 59.99,
  images: [
    'https://images.unsplash.com/photo-1546470427-e9e6e1e8d5e6?w=800',
    'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800',
    'https://images.unsplash.com/photo-1574131574158-8d60fa10aa0d?w=800',
    'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800'
  ],
  farmer: 'Green Valley Farm',
  farmerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  farmerBio: 'Founded in 1995, Green Valley Farm has been committed to sustainable, organic farming practices for over 25 years. We believe in nurturing the land while providing the freshest, most nutritious produce to our community.',
  location: 'Western Cape, South Africa',
  rating: 4.8,
  reviews: 124,
  category: 'Fresh Vegetables',
  badges: ['Certified Organic', 'Farm Fresh', 'Locally Grown'],
  inStock: true,
  stockCount: 47,
  organic: true,
  locallyGrown: true,
  weight: '1',
  unit: 'kg',
  nutritionFacts: {
    calories: 18,
    protein: '0.9g',
    carbs: '3.9g',
    fat: '0.2g',
    fiber: '1.2g',
    vitamins: ['Vitamin C', 'Vitamin K', 'Folate', 'Potassium']
  },
  harvestDate: '2025-08-02',
  shelfLife: '7-10 days',
  storageInstructions: 'Store at room temperature until ripe, then refrigerate for extended freshness.',
  certifications: ['USDA Organic', 'Fair Trade', 'Non-GMO'],
  shipping: {
    freeShipping: true,
    estimatedDays: '1-2 business days',
    methods: ['Standard Delivery', 'Express Delivery', 'Same-Day Delivery']
  },
  sustainability: {
    carbonFootprint: '0.3 kg CO2 per kg',
    waterUsage: '25% less than conventional farming',
    packaging: '100% recyclable materials'
  }
};

const reviews = [
  {
    id: 1,
    user: 'Sarah M.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b48ee76b?w=50',
    rating: 5,
    date: '2025-07-28',
    comment: 'Absolutely amazing tomatoes! So fresh and flavorful. You can really taste the difference with organic produce.',
    verified: true,
    helpful: 12
  },
  {
    id: 2,
    user: 'Michael C.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
    rating: 5,
    date: '2025-07-25',
    comment: 'Perfect for my homemade pasta sauce. Great quality and fast delivery!',
    verified: true,
    helpful: 8
  },
  {
    id: 3,
    user: 'Emma L.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
    rating: 4,
    date: '2025-07-22',
    comment: 'Very good quality tomatoes. Packaging was excellent and they arrived in perfect condition.',
    verified: true,
    helpful: 5
  }
];

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // In a real app, this would fetch the product from an API
    setProduct(mockProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Convert our product to the format expected by cart
      const cartProduct = {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        images: product.images,
        category: { id: '1', name: product.category, slug: 'vegetables', description: '', icon: '', subcategories: [] },
        subcategory: '',
        currency: 'ZAR',
        stock: product.stockCount,
        partnerId: 'partner1',
        partnerName: product.farmer,
        specifications: [],
        certifications: product.certifications,
        origin: product.location,
        organicCertified: product.organic,
        ratings: [],
        averageRating: product.rating,
        totalReviews: product.reviews,
        tags: product.badges,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: product.description
      };
      
      addToCart(cartProduct, quantity);
      
      // Show success message or redirect to cart
      alert(`Added ${quantity} ${product.name} to cart!`);
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product?.stockCount || 1, quantity + change)));
  };

  const shareProduct = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        alert('Product URL copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product URL copied to clipboard!');
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      const wishlistItem = {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
        farmer: product.farmer,
        location: product.location
      };
      
      toggleWishlist(wishlistItem);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-green-600">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-green-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                    disabled={selectedImageIndex === 0}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex(Math.min(product.images.length - 1, selectedImageIndex + 1))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
                    disabled={selectedImageIndex === product.images.length - 1}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </>
              )}

              {/* AR View Button */}
              <button
                onClick={() => alert('AR View coming soon!')}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all duration-200"
              >
                <Camera className="h-5 w-5 text-gray-600" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges.slice(0, 2).map((badge, index) => (
                  <span key={index} className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Discount Badge */}
              {product.originalPrice && (
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-2 rounded-full">
                    Save R{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index ? 'border-green-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-green-600 font-medium">{product.category}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleWishlist}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${
                      product && isInWishlist(product.id.toString()) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400'
                    }`} />
                  </button>
                  <button
                    onClick={shareProduct}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Share2 className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium text-gray-900">{product.rating}</span>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  ({product.reviews} reviews)
                </button>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">R{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">R{product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-medium">Per {product.weight} {product.unit}</span> • 
              <span className="ml-1">From {product.farmer}</span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock ({product.stockCount} available)</span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Locally Grown</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                <Truck className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Quality Guaranteed</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-3 text-lg font-medium">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span>Add to Cart - R{(product.price * quantity).toFixed(2)}</span>
                  </button>
                  <button className="bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            )}

            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free delivery on orders over R500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Estimated delivery: {product.shipping.estimatedDays}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Fresh guarantee or money back</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Farmer Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src={product.farmerImage}
              alt={product.farmer}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{product.farmer}</h3>
              <p className="text-green-600 font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </p>
            </div>
            <div className="ml-auto">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Contact Farmer</span>
              </button>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{product.farmerBio}</p>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'nutrition', label: 'Nutrition Facts' },
                { id: 'sustainability', label: 'Sustainability' },
                { id: 'reviews', label: `Reviews (${product.reviews})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
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

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{product.longDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Product Information</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Harvest Date:</span> {product.harvestDate}</p>
                      <p><span className="font-medium">Shelf Life:</span> {product.shelfLife}</p>
                      <p><span className="font-medium">Weight:</span> {product.weight} {product.unit}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Storage Instructions</h4>
                    <p className="text-gray-700">{product.storageInstructions}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.certifications.map((cert, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition Facts</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Per 100g serving</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Calories</span>
                            <span className="font-medium">{product.nutritionFacts.calories}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Protein</span>
                            <span className="font-medium">{product.nutritionFacts.protein}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Carbohydrates</span>
                            <span className="font-medium">{product.nutritionFacts.carbs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Fat</span>
                            <span className="font-medium">{product.nutritionFacts.fat}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Fiber</span>
                            <span className="font-medium">{product.nutritionFacts.fiber}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Rich in Vitamins & Minerals</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.nutritionFacts.vitamins.map((vitamin, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {vitamin}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sustainability' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">Carbon Footprint</h4>
                      <p className="text-gray-700">{product.sustainability.carbonFootprint}</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <Info className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">Water Usage</h4>
                      <p className="text-gray-700">{product.sustainability.waterUsage}</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <RotateCcw className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">Packaging</h4>
                      <p className="text-gray-700">{product.sustainability.packaging}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-gray-900">{review.user}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <button className="text-sm text-green-600 hover:text-green-700">
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would show related products */}
            <div className="text-center text-gray-500 col-span-full py-8">
              Related products would appear here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
