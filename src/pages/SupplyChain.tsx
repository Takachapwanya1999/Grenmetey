import { Link } from 'react-router-dom';
import { 
  Truck, 
  Warehouse, 
  Package, 
  Users, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Target,
  Globe,
  Zap,
  Award,
  TrendingUp,
  ShoppingCart,
  Shield,
  Network,
  Settings
} from 'lucide-react';

const supplyChainServices = [
  {
    id: 1,
    title: 'Selling & Distribution',
    description: 'Comprehensive sales and distribution solutions to get your agricultural products to market efficiently',
    features: ['Market Access', 'Sales Channels', 'Distribution Networks', 'Retail Partnerships'],
    icon: ShoppingCart,
    color: 'from-blue-500 to-indigo-600',
    link: '/supply-chain/selling-distribution',
    stats: { clients: '2,500+', coverage: '9 provinces', efficiency: '95%' }
  },
  {
    id: 2,
    title: 'Warehousing Solutions',
    description: 'State-of-the-art storage and inventory management for optimal product preservation and logistics',
    features: ['Cold Storage', 'Inventory Management', 'Quality Control', 'Logistics Coordination'],
    icon: Warehouse,
    color: 'from-green-500 to-emerald-600',
    link: '/supply-chain/warehousing',
    stats: { capacity: '50,000m²', locations: '15 cities', uptime: '99.8%' }
  }
];

const processSteps = [
  {
    id: 1,
    title: 'Production Planning',
    description: 'Strategic planning and forecasting for optimal production cycles',
    icon: Target,
    color: 'from-purple-400 to-purple-500'
  },
  {
    id: 2,
    title: 'Quality Control',
    description: 'Rigorous quality standards and testing protocols',
    icon: Shield,
    color: 'from-blue-400 to-blue-500'
  },
  {
    id: 3,
    title: 'Storage & Handling',
    description: 'Proper storage conditions and careful handling procedures',
    icon: Package,
    color: 'from-green-400 to-green-500'
  },
  {
    id: 4,
    title: 'Distribution Network',
    description: 'Efficient distribution through our extensive network',
    icon: Network,
    color: 'from-orange-400 to-orange-500'
  },
  {
    id: 5,
    title: 'Market Delivery',
    description: 'Timely delivery to retailers and end consumers',
    icon: Truck,
    color: 'from-red-400 to-red-500'
  }
];

const keyBenefits = [
  {
    title: 'Reduced Costs',
    description: 'Optimize your supply chain costs by up to 30% through our efficient processes',
    icon: TrendingUp,
    percentage: '30%',
    color: 'text-green-600'
  },
  {
    title: 'Faster Delivery',
    description: 'Accelerate time-to-market with our streamlined distribution network',
    icon: Zap,
    percentage: '50%',
    color: 'text-blue-600'
  },
  {
    title: 'Quality Assurance',
    description: 'Maintain product quality with our advanced storage and handling systems',
    icon: Award,
    percentage: '99%',
    color: 'text-purple-600'
  },
  {
    title: 'Market Reach',
    description: 'Expand your market presence across South Africa and beyond',
    icon: Globe,
    percentage: '200%',
    color: 'text-orange-600'
  }
];

const partnerTestimonials = [
  {
    id: 1,
    name: 'Farm Fresh Co-op',
    location: 'Western Cape',
    rating: 5,
    text: 'Grenmetey Investments Supply Chain transformed our distribution. We now reach 5x more customers with better margins.',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop',
    results: '500% increase in reach'
  },
  {
    id: 2,
    name: 'Golden Harvest Ltd',
    location: 'Free State',
    rating: 5,
    text: 'Their warehousing solutions reduced our spoilage by 80% and improved our cash flow significantly.',
    logo: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=60&h=60&fit=crop',
    results: '80% reduction in waste'
  },
  {
    id: 3,
    name: 'Valley Organics',
    location: 'Gauteng',
    rating: 5,
    text: 'Professional service and technology integration that helped us scale from local to national distribution.',
    logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=60&h=60&fit=crop',
    results: 'National expansion'
  }
];

export function SupplyChain() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Supply Chain</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Truck className="h-4 w-4 mr-2" />
              Supply Chain Solutions
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Supply Chain
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Management</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              End-to-end supply chain solutions for agricultural businesses. From farm to market, 
              we optimize every step of your product journey for maximum efficiency and profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Package className="h-5 w-5 mr-2" />
                View Services
              </Link>
              
              <Link
                to="#process"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Settings className="h-5 w-5 mr-2" />
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,500+</div>
              <div className="text-sm text-gray-600">Active Partners</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Warehouse className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50,000m²</div>
              <div className="text-sm text-gray-600">Storage Capacity</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-sm text-gray-600">Distribution Centers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
              <div className="text-sm text-gray-600">Delivery Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Package className="h-4 w-4 mr-2" />
              Complete Solutions • End-to-End Service
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Supply Chain</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive supply chain management solutions designed for agricultural businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supplyChainServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Success Rate</div>
                      <div className="text-lg font-bold text-gray-900">{service.stats.efficiency}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{service.stats.clients}</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{service.stats.coverage}</div>
                      <div className="text-xs text-gray-500">Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{service.stats.uptime || service.stats.efficiency}</div>
                      <div className="text-xs text-gray-500">Reliability</div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supply Chain Process */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Supply Chain <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined 5-step process to optimize your agricultural supply chain
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-orange-400 to-red-400 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="text-center relative">
                    <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                      <div className="text-sm font-bold text-blue-600 mb-2">Step {index + 1}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements to your agricultural business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                    {benefit.percentage}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partner <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from agricultural businesses using our supply chain solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">Key Result:</div>
                  <div className="text-lg font-bold text-blue-700">{testimonial.results}</div>
                </div>
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
              <Truck className="h-5 w-5 mr-2" />
              Transform Your Supply Chain Today
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Optimize Your Agricultural Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 2,500+ agricultural businesses that have transformed their operations with our supply chain solutions.
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
                to="/supply-chain/selling-distribution"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
