import { Link } from 'react-router-dom';
import { 
  Leaf, 
  TestTube, 
  Bug, 
  Droplets, 
  BarChart3, 
  Microscope,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Users,
  Star,
  Award,
  Lightbulb,
  Target,
  Shield,
  Zap,
  Globe,
  Clock
} from 'lucide-react';

const agronomyServices = [
  {
    id: 1,
    title: 'Soil Analysis & Management',
    description: 'Comprehensive soil testing and management strategies for optimal crop performance',
    features: ['Soil Testing', 'pH Analysis', 'Nutrient Mapping', 'Amendment Plans'],
    price: 'From R850',
    duration: '1-2 weeks',
    icon: TestTube,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    title: 'Crop Management Plans',
    description: 'Customized crop management strategies tailored to your specific farming conditions',
    features: ['Crop Selection', 'Planting Schedules', 'Growth Monitoring', 'Harvest Planning'],
    price: 'From R1,200',
    duration: '2-3 weeks',
    icon: Leaf,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Pest & Disease Control',
    description: 'Integrated pest management and disease prevention strategies',
    features: ['Pest Identification', 'Treatment Plans', 'Monitoring Systems', 'Prevention Strategies'],
    price: 'From R950',
    duration: '1-2 weeks',
    icon: Bug,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    title: 'Irrigation & Water Management',
    description: 'Efficient irrigation design and water management optimization',
    features: ['System Design', 'Water Efficiency', 'Scheduling', 'Conservation Methods'],
    price: 'From R1,500',
    duration: '2-4 weeks',
    icon: Droplets,
    color: 'from-orange-500 to-red-600'
  }
];

const agronomists = [
  {
    id: 1,
    name: 'Prof. James van der Merwe',
    title: 'Senior Agronomist',
    specialties: ['Soil Science', 'Crop Rotation', 'Sustainable Farming'],
    experience: '20+ years',
    rating: 4.9,
    reviews: 189,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    certifications: ['PhD Soil Science', 'SACPVP Certified', 'Organic Specialist'],
    rate: 'R750/hour'
  },
  {
    id: 2,
    name: 'Dr. Nomsa Mbeki',
    title: 'Crop Management Specialist',
    specialties: ['Crop Physiology', 'Yield Optimization', 'Climate Adaptation'],
    experience: '15+ years',
    rating: 4.8,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    certifications: ['PhD Plant Science', 'CCA Certified', 'Precision Ag Expert'],
    rate: 'R850/hour'
  },
  {
    id: 3,
    name: 'Dr. Mark Thompson',
    title: 'Pest Management Expert',
    specialties: ['IPM Systems', 'Biological Control', 'Pesticide Management'],
    experience: '18+ years',
    rating: 4.7,
    reviews: 142,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    certifications: ['PhD Entomology', 'IPM Specialist', 'Biocontrol Expert'],
    rate: 'R800/hour'
  }
];

const caseStudies = [
  {
    id: 1,
    farm: 'Sunshine Maize Farm',
    location: 'Free State',
    challenge: 'Poor soil quality leading to low yields',
    solution: 'Comprehensive soil management program with targeted amendments',
    results: [
      '45% increase in yield',
      '30% reduction in fertilizer costs',
      'Improved soil health scores'
    ],
    timeframe: '18 months',
    cropType: 'Maize'
  },
  {
    id: 2,
    farm: 'Green Valley Vegetables',
    location: 'Western Cape',
    challenge: 'Recurring pest problems affecting crop quality',
    solution: 'Integrated pest management system with biological controls',
    results: [
      '80% reduction in pest damage',
      '50% less pesticide usage',
      'Premium quality certification'
    ],
    timeframe: '12 months',
    cropType: 'Vegetables'
  },
  {
    id: 3,
    farm: 'Heritage Citrus Estate',
    location: 'Limpopo',
    challenge: 'Water scarcity and inefficient irrigation',
    solution: 'Smart irrigation system with precision water management',
    results: [
      '35% water savings',
      '25% yield improvement',
      'Drought resilience achieved'
    ],
    timeframe: '8 months',
    cropType: 'Citrus'
  }
];

const technologies = [
  {
    name: 'Soil Sensors',
    description: 'Real-time soil monitoring for pH, moisture, and nutrients',
    icon: TestTube
  },
  {
    name: 'Drone Surveys',
    description: 'Aerial crop monitoring and field mapping services',
    icon: Globe
  },
  {
    name: 'Lab Analysis',
    description: 'Advanced laboratory testing for soil and plant tissue',
    icon: Microscope
  },
  {
    name: 'Data Analytics',
    description: 'AI-powered insights from field and weather data',
    icon: BarChart3
  }
];

export function AgronomyServices() {
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
            <span className="text-gray-900">Agronomy Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              Scientific Agronomy Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Agronomy
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Services</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Scientific approach to crop and soil management for optimized agricultural productivity and sustainability. 
              Our certified agronomists use cutting-edge technology and proven methods to maximize your farm's potential.
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
                to="#experts"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Experts
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
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">35%</div>
              <div className="text-sm text-gray-600">Average Yield Increase</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,200+</div>
              <div className="text-sm text-gray-600">Farms Optimized</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5,000+</div>
              <div className="text-sm text-gray-600">Soil Tests Conducted</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4 mr-2" />
              Scientific Solutions • Proven Results
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Agronomy</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agronomy services combining scientific expertise with practical farming solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agronomyServices.map((service) => {
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

                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
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

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge technology to provide precise and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-200"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Agronomy</span> Experts
            </h2>
            <p className="text-xl text-gray-600">
              Work with certified agronomists who combine scientific knowledge with practical experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agronomists.map((expert) => (
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
                  <p className="text-green-600 mb-2">{expert.title}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{expert.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-green-600">{expert.rate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {expert.specialties.map((specialty, index) => (
                        <span key={index} className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Certifications:</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      {expert.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <Shield className="h-3 w-3 mr-1 text-blue-500" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our agronomy interventions across different farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-green-600 text-white px-2 py-1 rounded-full">
                    {study.cropType}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {study.timeframe}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{study.farm}</h3>
                <p className="text-sm text-green-600 mb-3">{study.location}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Results:</h4>
                  <div className="space-y-1">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Zap className="h-5 w-5 mr-2" />
              Transform Your Farm with Science-Based Solutions
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Optimize Your Agricultural Operations?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Connect with our certified agronomists and discover how scientific farming can increase your yields and profitability.
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
