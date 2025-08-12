import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Cloud, 
  TrendingUp, 
  Phone, 
  MessageSquare, 
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  Bell,
  Database,
  FileText,
  Target,
  Award,
  Lightbulb,
  Globe
} from 'lucide-react';

const informationServices = [
  {
    id: 1,
    title: 'Market Information Center',
    description: 'Real-time market prices, trends, and trading opportunities for all agricultural products',
    features: ['Live Price Updates', 'Market Trends', 'Commodity Reports', 'Trading Alerts'],
    icon: TrendingUp,
    available: '24/7',
    type: 'Real-time'
  },
  {
    id: 2,
    title: 'Weather & Climate Services',
    description: 'Comprehensive weather forecasting and climate data for informed farming decisions',
    features: ['7-Day Forecasts', 'Rainfall Predictions', 'Climate Alerts', 'Seasonal Outlook'],
    icon: Cloud,
    available: '24/7',
    type: 'Automated'
  },
  {
    id: 3,
    title: 'Best Practices Library',
    description: 'Extensive database of farming best practices, techniques, and proven methods',
    features: ['Crop Guides', 'Technique Videos', 'Case Studies', 'Expert Tips'],
    icon: BookOpen,
    available: 'Always',
    type: 'Self-service'
  },
  {
    id: 4,
    title: '24/7 Expert Support',
    description: 'Round-the-clock access to agricultural experts for immediate assistance',
    features: ['Phone Support', 'Live Chat', 'Email Support', 'Emergency Line'],
    icon: Phone,
    available: '24/7',
    type: 'Human Support'
  }
];

const supportChannels = [
  {
    id: 1,
    name: 'Phone Support',
    description: 'Speak directly with our agricultural experts',
    contact: '0800-AGRI-HELP',
    hours: '24/7',
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa'],
    icon: Phone,
    response: 'Immediate'
  },
  {
    id: 2,
    name: 'Live Chat',
    description: 'Instant messaging with support specialists',
    contact: 'Available on website',
    hours: '24/7',
    languages: ['English', 'Afrikaans'],
    icon: MessageSquare,
    response: 'Under 2 minutes'
  },
  {
    id: 3,
    name: 'WhatsApp Support',
    description: 'Quick responses via WhatsApp messaging',
    contact: '+27 82 AGRI INFO',
    hours: '6 AM - 10 PM',
    languages: ['English', 'Afrikaans', 'Zulu'],
    icon: MessageSquare,
    response: 'Under 5 minutes'
  }
];

const resources = [
  {
    id: 1,
    title: 'Crop Calendar',
    description: 'Planting and harvesting schedules for all major crops in South Africa',
    downloads: '12,450',
    rating: 4.9,
    category: 'Planning'
  },
  {
    id: 2,
    title: 'Pest & Disease Guide',
    description: 'Comprehensive identification and treatment guide for common agricultural pests',
    downloads: '8,670',
    rating: 4.8,
    category: 'Health'
  },
  {
    id: 3,
    title: 'Soil Management Manual',
    description: 'Complete guide to soil testing, fertilization, and health management',
    downloads: '15,230',
    rating: 4.9,
    category: 'Soil'
  },
  {
    id: 4,
    title: 'Water Management Guide',
    description: 'Irrigation techniques, water conservation, and drought management strategies',
    downloads: '9,850',
    rating: 4.7,
    category: 'Water'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'David Mthembu',
    farm: 'Sunshine Vegetables',
    location: 'KwaZulu-Natal',
    text: 'The 24/7 support has been a lifesaver. When my crops were hit by an unexpected pest outbreak, I got expert advice within minutes.',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Santos',
    farm: 'Golden Fields',
    location: 'Western Cape',
    text: 'The weather alerts have helped me optimize my planting schedule. My yields increased by 20% this season thanks to their guidance.',
    rating: 5
  },
  {
    id: 3,
    name: 'John van der Merwe',
    farm: 'Heritage Dairy',
    location: 'Free State',
    text: 'The market information center gives me the edge I need. I always know the best times to sell and get premium prices.',
    rating: 5
  }
];

export function FarmersInformationDesk() {
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
            <span className="text-gray-900">Farmers Information Desk</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Information & Support Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Farmers Information
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Desk</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your comprehensive information hub providing farmers with essential knowledge, real-time data, 
              and 24/7 support services. Everything you need to make informed farming decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Target className="h-5 w-5 mr-2" />
                Explore Services
              </Link>
              
              <Link
                to="#support"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Support Now
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
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">25,000+</div>
              <div className="text-sm text-gray-600">Farmers Served</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,500+</div>
              <div className="text-sm text-gray-600">Resources Available</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
              <div className="text-sm text-gray-600">Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4 mr-2" />
              Information Services • Always Available
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Information</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive information and support services designed to help farmers make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {informationServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">{service.available}</div>
                      <div className="text-xs text-gray-500">{service.type}</div>
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

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Access Service
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section id="support" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expert</span> Support
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to connect with our agricultural experts when you need help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => {
              const IconComponent = channel.icon;
              return (
                <div
                  key={channel.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
                >
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Contact:</span>
                      <span className="font-medium text-blue-600">{channel.contact}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Hours:</span>
                      <span className="font-medium">{channel.hours}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response:</span>
                      <span className="font-medium text-green-600">{channel.response}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Languages:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {channel.languages.map((language, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                    Contact Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Library */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resource <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Library</span>
            </h2>
            <p className="text-xl text-gray-600">
              Download comprehensive guides and resources to improve your farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    resource.category === 'Planning' ? 'bg-green-100 text-green-600' :
                    resource.category === 'Health' ? 'bg-red-100 text-red-600' :
                    resource.category === 'Soil' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {resource.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-500">{resource.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.downloads} downloads</span>
                  <span>PDF Format</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Farmer <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from farmers who have benefited from our information and support services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="text-center">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.farm}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Bell className="h-5 w-5 mr-2" />
              Join 25,000+ Farmers Getting Expert Support
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Agricultural Information or Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to our comprehensive information services and connect with agricultural experts 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#support"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Support Now
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
