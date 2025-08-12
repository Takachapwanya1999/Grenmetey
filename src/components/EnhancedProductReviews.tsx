import { useState, useEffect } from 'react';
import { Star, ThumbsUp, ThumbsDown, MapPin, Calendar, Verified, Filter, MessageCircle } from 'lucide-react';

interface Review {
  id: string;
  userId: string;
  userName: string;
  userType: 'farmer' | 'customer' | 'verified_buyer';
  userLocation: string;
  rating: number;
  title: string;
  content: string;
  farmingContext?: {
    farmSize: string;
    cropType: string;
    experience: string;
  };
  mediaAttachments?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
  helpfulVotes: number;
  notHelpfulVotes: number;
  verifiedPurchase: boolean;
  seasonUsed: string;
  timestamp: Date;
  replies?: ReviewReply[];
}

interface ReviewReply {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
  isVendor?: boolean;
}

interface ProductReviewsProps {
  productId: string;
  productName: string;
}

export function EnhancedProductReviews({ productId }: Omit<ProductReviewsProps, 'productName'>) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'recent' | 'helpful' | 'verified'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('newest');
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Mock reviews data
  useEffect(() => {
    const mockReviews: Review[] = [
      {
        id: '1',
        userId: 'farmer1',
        userName: 'James Mthembu',
        userType: 'farmer',
        userLocation: 'KwaZulu-Natal',
        rating: 5,
        title: 'Excellent quality tomatoes - exceeded expectations!',
        content: 'Been farming for 15 years and these are some of the best tomato seedlings I\'ve purchased. Great germination rate (95%) and strong, healthy plants. The harvest was exceptional - large, firm tomatoes with excellent flavor. Will definitely order again next season.',
        farmingContext: {
          farmSize: '5 hectares',
          cropType: 'Mixed vegetables',
          experience: '15 years'
        },
        mediaAttachments: [
          {
            type: 'image',
            url: '/api/placeholder/400/300',
            caption: 'Healthy tomato plants after 6 weeks'
          },
          {
            type: 'image',
            url: '/api/placeholder/400/300',
            caption: 'First harvest - beautiful red tomatoes'
          }
        ],
        helpfulVotes: 24,
        notHelpfulVotes: 1,
        verifiedPurchase: true,
        seasonUsed: 'Summer 2024',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        replies: [
          {
            id: 'reply1',
            userId: 'vendor1',
            userName: 'AgriSeeds Co.',
            content: 'Thank you James! We\'re thrilled to hear about your excellent harvest. Your experience and feedback help us maintain our quality standards.',
            timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
            isVendor: true
          }
        ]
      },
      {
        id: '2',
        userId: 'customer1',
        userName: 'Sarah Johnson',
        userType: 'customer',
        userLocation: 'Gauteng',
        rating: 4,
        title: 'Good for home garden, some challenges',
        content: 'Ordered these for my backyard garden. Most seedlings grew well, though I did lose about 10% in the first few weeks. The surviving plants produced good tomatoes, though smaller than expected. Great for home use and the kids loved growing them.',
        farmingContext: {
          farmSize: 'Home garden (50m²)',
          cropType: 'Home vegetables',
          experience: '2 years'
        },
        helpfulVotes: 8,
        notHelpfulVotes: 3,
        verifiedPurchase: true,
        seasonUsed: 'Spring 2024',
        timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
      },
      {
        id: '3',
        userId: 'farmer2',
        userName: 'Thabo Radebe',
        userType: 'verified_buyer',
        userLocation: 'Free State',
        rating: 5,
        title: 'Commercial farming success - highly recommend',
        content: 'Purchased 500 seedlings for commercial production. Excellent quality control, uniform growth, and great customer support. The yield per plant was above average and we had minimal losses. Grenmetey Investments\' delivery was timely and packaging kept the seedlings in perfect condition.',
        farmingContext: {
          farmSize: '20 hectares',
          cropType: 'Commercial tomatoes',
          experience: '8 years'
        },
        mediaAttachments: [
          {
            type: 'image',
            url: '/api/placeholder/400/300',
            caption: 'Commercial greenhouse setup'
          }
        ],
        helpfulVotes: 31,
        notHelpfulVotes: 0,
        verifiedPurchase: true,
        seasonUsed: 'Winter 2024',
        timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
      }
    ];

    setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, [productId]);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(r => r.rating === rating).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { rating, count, percentage };
  });

  const getUserIcon = (userType: string) => {
    switch (userType) {
      case 'farmer': return '🚜';
      case 'verified_buyer': return '✅';
      default: return '👤';
    }
  };

  const renderStars = (rating: number, size = 'sm') => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index}
        className={`${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleVote = (reviewId: string, type: 'helpful' | 'not-helpful') => {
    setReviews(prev => prev.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          helpfulVotes: type === 'helpful' ? review.helpfulVotes + 1 : review.helpfulVotes,
          notHelpfulVotes: type === 'not-helpful' ? review.notHelpfulVotes + 1 : review.notHelpfulVotes
        };
      }
      return review;
    }));
  };

  const filteredAndSortedReviews = reviews
    .filter(review => {
      switch (filter) {
        case 'recent': return Date.now() - review.timestamp.getTime() < 30 * 24 * 60 * 60 * 1000;
        case 'helpful': return review.helpfulVotes > 5;
        case 'verified': return review.verifiedPurchase;
        default: return true;
      }
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest': return a.timestamp.getTime() - b.timestamp.getTime();
        case 'highest': return b.rating - a.rating;
        case 'lowest': return a.rating - b.rating;
        case 'helpful': return b.helpfulVotes - a.helpfulVotes;
        default: return b.timestamp.getTime() - a.timestamp.getTime();
      }
    });

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-4 border border-gray-200 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <p className="text-gray-600">Real feedback from farmers and customers</p>
          </div>
          <button
            onClick={() => setShowReviewForm(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Write Review
          </button>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating), 'lg')}
            </div>
            <p className="text-gray-600">{reviews.length} reviews</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-medium w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            {(['all', 'recent', 'helpful', 'verified'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filter === filterType
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {filterType === 'all' ? 'All' : 
                 filterType === 'recent' ? 'Recent' :
                 filterType === 'helpful' ? 'Helpful' : 'Verified'}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful')}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-gray-100">
        {filteredAndSortedReviews.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium mb-2">No reviews yet</p>
            <p>Be the first to share your experience with this product!</p>
          </div>
        ) : (
          filteredAndSortedReviews.map((review) => (
            <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {getUserIcon(review.userType)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                      {review.verifiedPurchase && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          <Verified className="h-3 w-3 mr-1" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{review.userLocation}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{review.timestamp.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
                <p className="text-gray-700 leading-relaxed">{review.content}</p>
              </div>

              {/* Farming Context */}
              {review.farmingContext && (
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h6 className="font-medium text-green-900 mb-2">Farming Context</h6>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-green-700 font-medium">Farm Size:</span>
                      <span className="text-green-600 ml-2">{review.farmingContext.farmSize}</span>
                    </div>
                    <div>
                      <span className="text-green-700 font-medium">Crop Type:</span>
                      <span className="text-green-600 ml-2">{review.farmingContext.cropType}</span>
                    </div>
                    <div>
                      <span className="text-green-700 font-medium">Experience:</span>
                      <span className="text-green-600 ml-2">{review.farmingContext.experience}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-green-700 font-medium text-sm">Season Used:</span>
                    <span className="text-green-600 ml-2 text-sm">{review.seasonUsed}</span>
                  </div>
                </div>
              )}

              {/* Media Attachments */}
              {review.mediaAttachments && review.mediaAttachments.length > 0 && (
                <div className="mb-4">
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {review.mediaAttachments.map((media, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          src={media.url}
                          alt={media.caption || `Review image ${index + 1}`}
                          className="w-24 h-24 object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform cursor-pointer"
                        />
                        {media.caption && (
                          <p className="text-xs text-gray-500 mt-1 w-24 truncate">{media.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleVote(review.id, 'helpful')}
                    className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">Helpful ({review.helpfulVotes})</span>
                  </button>
                  <button
                    onClick={() => handleVote(review.id, 'not-helpful')}
                    className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span className="text-sm">Not helpful ({review.notHelpfulVotes})</span>
                  </button>
                </div>
                {review.replies && review.replies.length > 0 && (
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View {review.replies.length} replies
                  </button>
                )}
              </div>

              {/* Replies */}
              {review.replies && review.replies.length > 0 && (
                <div className="mt-4 ml-8 space-y-3">
                  {review.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <h6 className="font-medium text-gray-900">{reply.userName}</h6>
                        {reply.isVendor && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                            Vendor
                          </span>
                        )}
                        <span className="text-xs text-gray-500">{reply.timestamp.toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-gray-700">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
            <p className="text-gray-600 mb-4">Review functionality coming soon!</p>
            <button
              onClick={() => setShowReviewForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
