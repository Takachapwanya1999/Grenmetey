import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  TrendingUp, 
  MapPin, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Target,
  Globe,
  Award,
  Truck,
  Store,
  Smartphone,
  Package,
  Database,
  Network,
  Crown,
  PieChart
} from 'lucide-react';

const distributionServices = [
  {
    id: 1,
    title: 'Market Access Programs',
    description: 'Connect directly with retailers, wholesalers, and end consumers through our extensive network',
    features: ['Retail Partnerships', 'Wholesale Networks', 'Direct-to-Consumer', 'Export Opportunities'],
    price: 'From R2,500',
    duration: 'Ongoing',
    icon: Store,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Digital Sales Platforms',
    description: 'Leverage our e-commerce platforms and digital marketplaces to reach online customers',
    features: ['E-commerce Integration', 'Mobile Apps', 'Digital Marketing', 'Online Analytics'],
    price: 'From R1,800',
    duration: 'Monthly',
    icon: Smartphone,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Distribution Network',
    description: 'Utilize our nationwide distribution infrastructure for efficient product delivery',
    features: ['Logistics Management', 'Route Optimization', 'Fleet Management', 'Tracking Systems'],
    price: 'From R3,000',
    duration: 'Per shipment',
    icon: Truck,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'Sales Analytics & Insights',
    description: 'Data-driven insights to optimize your sales performance and market strategy',
    features: ['Sales Reporting', 'Market Analysis', 'Customer Insights', 'Performance Metrics'],
    price: 'From R1,200',
    duration: 'Monthly',
    icon: BarChart3,
    color: 'from-orange-500 to-orange-600'
  }
];

const salesChannels = [
  {
    name: 'Retail Partnerships',
    description: 'Direct partnerships with major retail chains',
    reach: '2,500+ stores',
    conversion: '15-25%',
    icon: Store,
    benefits: ['Wide reach', 'Brand visibility', 'Stable demand']
  },
  {
    name: 'Wholesale Networks',
    description: 'B2B sales through wholesale distributors',
    reach: '800+ wholesalers',
    conversion: '35-45%',
    icon: Package,
    benefits: ['Bulk orders', 'Consistent sales', 'Lower costs']
  },
  {
    name: 'E-commerce Platforms',
    description: 'Online sales through digital marketplaces',
    reach: '50,000+ customers',
    conversion: '8-12%',
    icon: Globe,
    benefits: ['24/7 sales', 'Direct customer contact', 'Higher margins']
  },
  {
    name: 'Export Markets',
    description: 'International sales and export opportunities',
    reach: '15+ countries',
    conversion: '20-30%',
    icon: Target,
    benefits: ['Premium pricing', 'Market diversification', 'Growth potential']
  }
];

const distributionExperts = [
  {
    id: 1,
    name: 'Michael Thompson',
    title: 'Distribution Strategy Director',
    specialties: ['Retail Partnerships', 'Market Expansion', 'Channel Strategy'],
    experience: '15+ years',
    rating: 4.9,
    reviews: 187,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    clients: 450,
    successRate: '94%',
    rate: 'R1,200/hour'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    title: 'Digital Sales Manager',
    specialties: ['E-commerce', 'Digital Marketing', 'Online Analytics'],
    experience: '12+ years',
    rating: 4.8,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    clients: 320,
    successRate: '92%',
    rate: 'R1,000/hour'
  },
  {
    id: 3,
    name: 'David Chen',
    title: 'Logistics Coordinator',
    specialties: ['Supply Chain', 'Route Optimization', 'Fleet Management'],
    experience: '18+ years',
    rating: 4.7,
    reviews: 134,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    clients: 280,
    successRate: '96%',
    rate: 'R950/hour'
  }
];

const successStories = [
  {
    id: 1,
    company: 'Valley Fresh Produce',
    challenge: 'Limited market reach and low profit margins',
    solution: 'Retail partnership program and digital sales integration',
    results: {
      salesIncrease: '300%',
      marketReach: '5x expansion',
      profitMargin: '+40%',
      timeframe: '8 months'
    },
    testimonial: 'Grenmetey Investments transformed our business. We went from local sales to national distribution.',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop'
  },
  {
    id: 2,
    company: 'Organic Harvest Co-op',
    challenge: 'Seasonal demand fluctuations and storage costs',
    solution: 'Multi-channel distribution strategy and export market access',
    results: {
      salesIncrease: '250%',
      marketReach: '12 countries',
      profitMargin: '+55%',
      timeframe: '12 months'
    },
    testimonial: 'The export opportunities opened up entirely new revenue streams for our cooperative.',
    logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=60&h=60&fit=crop'
  }
];

const distributionTech = [
  {
    name: 'Smart Routing',
    description: 'AI-powered route optimization for efficient delivery',
    icon: Network,
    benefits: ['30% cost reduction', 'Faster delivery', 'Reduced emissions']
  },
  {
    name: 'Real-time Tracking',
    description: 'GPS tracking and delivery monitoring systems',
    icon: MapPin,
    benefits: ['Full visibility', 'Customer updates', 'Proof of delivery']
  },
  {
    name: 'Inventory Management',
    description: 'Automated inventory tracking and demand forecasting',
    icon: Database,
    benefits: ['Optimal stock levels', 'Reduced waste', 'Better planning']
  },
  {
    name: 'Sales Analytics',
    description: 'Advanced analytics for sales performance optimization',
    icon: PieChart,
    benefits: ['Data insights', 'Trend analysis', 'Performance metrics']
  }
];

export function SellingDistribution() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/supply-chain" className="hover:text-blue-600">Supply Chain</Link>
            <span>/</span>
            <span className="text-gray-900">Selling & Distribution</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Selling & Distribution Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Selling &
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Distribution</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive sales and distribution solutions to maximize your market reach and revenue. 
              From local retail to international export markets, we help you sell more efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Store className="h-5 w-5 mr-2" />
                View Services
              </Link>
              
              <Link
                to="#channels"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Network className="h-5 w-5 mr-2" />
                Sales Channels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,500+</div>
              <div className="text-sm text-gray-600">Retail Partners</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-sm text-gray-600">Export Countries</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">280%</div>
              <div className="text-sm text-gray-600">Average Sales Growth</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Package className="h-4 w-4 mr-2" />
              Distribution Services • Market Access
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Distribution</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive selling and distribution solutions designed to maximize your market reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {distributionServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sales Channels */}
      <section id="channels" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sales <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Channels</span>
            </h2>
            <p className="text-xl text-gray-600">
              Multiple channels to maximize your product's market reach and sales potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{channel.reach}</div>
                      <div className="text-xs text-gray-500">Market Reach</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{channel.conversion}</div>
                      <div className="text-xs text-gray-500">Conversion Rate</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {channel.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technology <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology powering efficient distribution and sales optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionTech.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{tech.description}</p>
                  
                  <div className="space-y-1">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distribution Experts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Distribution</span> Experts
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to optimizing your sales and distribution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {distributionExperts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <p className="text-blue-600 mb-2">{expert.title}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{expert.clients}</div>
                      <div className="text-xs text-gray-500">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{expert.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{expert.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-blue-600">{expert.rate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {expert.specialties.map((specialty, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Consult Expert
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results from agricultural businesses using our distribution services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <div className="text-sm text-gray-500">Success Story</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Challenge:</div>
                  <p className="text-gray-700 mb-4">{story.challenge}</p>
                  
                  <div className="text-sm text-gray-500 mb-2">Solution:</div>
                  <p className="text-gray-700 mb-4">{story.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{story.results.salesIncrease}</div>
                    <div className="text-xs text-gray-500">Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{story.results.marketReach}</div>
                    <div className="text-xs text-gray-500">Market Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{story.results.profitMargin}</div>
                    <div className="text-xs text-gray-500">Profit Margin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{story.results.timeframe}</div>
                    <div className="text-xs text-gray-500">Timeframe</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                  "{story.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Crown className="h-5 w-5 mr-2" />
              Expand Your Market Reach Today
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Boost Your Sales & Distribution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of agricultural businesses that have increased their sales by 280% on average.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Started Today
              </Link>
              
              <Link
                to="/supply-chain"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
