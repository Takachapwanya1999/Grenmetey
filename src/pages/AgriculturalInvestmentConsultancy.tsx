import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Award,
  Lightbulb,
  Shield
} from 'lucide-react';

const investmentServices = [
  {
    id: 1,
    title: 'Investment Strategy Development',
    description: 'Comprehensive analysis and strategy development for agricultural investments',
    features: ['Market Analysis', 'Risk Assessment', 'ROI Projections', 'Investment Roadmap'],
    price: 'From R2,500',
    duration: '2-3 weeks',
    icon: Target
  },
  {
    id: 2,
    title: 'Funding & Finance Solutions',
    description: 'Access to funding opportunities and financial structuring for farm projects',
    features: ['Grant Applications', 'Loan Structuring', 'Investor Matching', 'Financial Planning'],
    price: 'From R3,500',
    duration: '3-4 weeks',
    icon: DollarSign
  },
  {
    id: 3,
    title: 'Business Valuation',
    description: 'Professional valuation services for agricultural businesses and assets',
    features: ['Asset Valuation', 'Business Worth Assessment', 'Market Comparisons', 'Growth Projections'],
    price: 'From R4,000',
    duration: '1-2 weeks',
    icon: BarChart3
  },
  {
    id: 4,
    title: 'Risk Management',
    description: 'Comprehensive risk analysis and mitigation strategies for investments',
    features: ['Risk Identification', 'Mitigation Plans', 'Insurance Guidance', 'Contingency Planning'],
    price: 'From R2,000',
    duration: '1-2 weeks',
    icon: Shield
  }
];

const consultants = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    title: 'Senior Investment Consultant',
    experience: '15+ years',
    specialties: ['Agricultural Finance', 'Investment Strategy', 'Risk Management'],
    rating: 4.9,
    reviews: 234,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rate: 'R850/hour',
    available: true
  },
  {
    id: 2,
    name: 'Marcus van Zyl',
    title: 'Agricultural Finance Specialist',
    experience: '12+ years',
    specialties: ['Funding Solutions', 'Grant Applications', 'Business Valuation'],
    rating: 4.8,
    reviews: 189,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rate: 'R750/hour',
    available: true
  },
  {
    id: 3,
    name: 'Lisa Chen',
    title: 'Investment Risk Analyst',
    experience: '10+ years',
    specialties: ['Risk Assessment', 'Market Analysis', 'Financial Modeling'],
    rating: 4.7,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rate: 'R700/hour',
    available: false
  }
];

const successStories = [
  {
    id: 1,
    client: 'Sunrise Citrus Farm',
    investment: 'R2.5M',
    roi: '35%',
    timeline: '18 months',
    description: 'Secured funding for expansion and modernization of citrus processing facility'
  },
  {
    id: 2,
    client: 'Green Valley Dairy',
    investment: 'R1.8M',
    roi: '28%',
    timeline: '12 months',
    description: 'Investment in automated milking systems and cold storage infrastructure'
  },
  {
    id: 3,
    client: 'Golden Grain Co-op',
    investment: 'R3.2M',
    roi: '42%',
    timeline: '24 months',
    description: 'Grain storage and processing facility development with government grant support'
  }
];

export function AgriculturalInvestmentConsultancy() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link to="/consultancy" className="hover:text-green-600">Business Consultancy</Link>
            <span>/</span>
            <span className="text-gray-900">Agricultural Investment Consultancy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Investment Consultancy Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Agricultural Investment
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Consultancy</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Expert guidance on agricultural investments, funding opportunities, and financial planning. 
              We help farmers and agribusinesses secure the capital they need to grow and thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Target className="h-5 w-5 mr-2" />
                View Services
              </Link>
              
              <Link
                to="#consultants"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">R2.8B+</div>
              <div className="text-sm text-gray-600">Investments Facilitated</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">32%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Clients Served</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4 mr-2" />
              Investment Services • Expert Solutions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Investment</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment consultancy services tailored for agricultural businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
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

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section id="consultants" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Investment</span> Experts
            </h2>
            <p className="text-xl text-gray-600">
              Work with experienced consultants who understand agricultural investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <img
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{consultant.name}</h3>
                  <p className="text-green-600 mb-2">{consultant.title}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{consultant.rating}</span>
                    <span className="text-sm text-gray-500">({consultant.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{consultant.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-green-600">{consultant.rate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {consultant.specialties.map((specialty, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className={`w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      consultant.available 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!consultant.available}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {consultant.available ? 'Book Session' : 'Unavailable'}
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
              Investment <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our agricultural investment consultancy services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">{story.investment}</div>
                  <div className="text-sm text-gray-500">Investment Secured</div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.client}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">{story.roi}</div>
                    <div className="text-xs text-gray-500">ROI Achieved</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">{story.timeline}</div>
                    <div className="text-xs text-gray-500">Timeline</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Secure Your Agricultural Investment?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Schedule a consultation with our investment experts and take the first step towards funding your agricultural dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Link>
              
              <Link
                to="/consultancy"
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
