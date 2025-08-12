import { Link } from 'react-router-dom';
import { 
  Microscope, 
  Database, 
  Zap, 
  BarChart3, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Users,
  Star,
  Award,
  Target,
  Cpu,
  Beaker,
  Globe,
  Rocket,
  Brain
} from 'lucide-react';

const researchServices = [
  {
    id: 1,
    title: 'Innovation Research',
    description: 'Cutting-edge research into new farming techniques, crop varieties, and sustainable practices',
    features: ['New Crop Development', 'Farming Techniques', 'Sustainability Research', 'Innovation Testing'],
    price: 'From R5,000',
    duration: '3-6 months',
    icon: Lightbulb,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 2,
    title: 'Technology Development',
    description: 'Development and testing of agricultural technology solutions and smart farming systems',
    features: ['IoT Solutions', 'Automation Systems', 'AI Applications', 'Sensor Networks'],
    price: 'From R8,000',
    duration: '4-8 months',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Data Analysis & Insights',
    description: 'Advanced data analytics to uncover patterns and optimize agricultural operations',
    features: ['Big Data Analysis', 'Predictive Modeling', 'Performance Metrics', 'Trend Analysis'],
    price: 'From R3,500',
    duration: '2-4 weeks',
    icon: Database,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    title: 'Custom R&D Projects',
    description: 'Tailored research and development projects to solve specific agricultural challenges',
    features: ['Problem Solving', 'Custom Solutions', 'Pilot Programs', 'Implementation Support'],
    price: 'Quote on Request',
    duration: '6-12 months',
    icon: Beaker,
    color: 'from-orange-500 to-red-600'
  }
];

const researchers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    title: 'Chief Research Scientist',
    specialties: ['Data Science', 'Machine Learning', 'Agricultural Innovation'],
    experience: '12+ years',
    rating: 4.9,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    publications: 45,
    patents: 8,
    rate: 'R900/hour'
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    title: 'Agricultural Technology Director',
    specialties: ['IoT Systems', 'Automation', 'Precision Agriculture'],
    experience: '18+ years',
    rating: 4.8,
    reviews: 189,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    publications: 62,
    patents: 12,
    rate: 'R850/hour'
  },
  {
    id: 3,
    name: 'Dr. Sarah Mitchell',
    title: 'Innovation Research Lead',
    specialties: ['Sustainable Farming', 'Biotechnology', 'Climate Solutions'],
    experience: '15+ years',
    rating: 4.7,
    reviews: 134,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    publications: 38,
    patents: 6,
    rate: 'R800/hour'
  }
];

const researchProjects = [
  {
    id: 1,
    title: 'Smart Irrigation AI System',
    description: 'AI-powered irrigation system that optimizes water usage based on soil conditions and weather forecasts',
    status: 'Completed',
    impact: '40% water savings',
    technology: 'Machine Learning, IoT Sensors',
    duration: '18 months',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Drought-Resistant Crop Varieties',
    description: 'Development of genetically improved crop varieties that can withstand prolonged drought conditions',
    status: 'In Progress',
    impact: '60% yield retention in drought',
    technology: 'Biotechnology, Genetic Analysis',
    duration: '24 months',
    category: 'Biotechnology'
  },
  {
    id: 3,
    title: 'Predictive Pest Management',
    description: 'Machine learning model to predict pest outbreaks and optimize preventive treatments',
    status: 'Pilot Testing',
    impact: '75% reduction in pest damage',
    technology: 'AI, Data Analytics',
    duration: '12 months',
    category: 'Data Science'
  },
  {
    id: 4,
    title: 'Carbon Sequestration Study',
    description: 'Research on farming practices that maximize carbon capture and reduce environmental impact',
    status: 'Completed',
    impact: '30% carbon footprint reduction',
    technology: 'Environmental Science',
    duration: '36 months',
    category: 'Sustainability'
  }
];

const technologies = [
  {
    name: 'Artificial Intelligence',
    description: 'Machine learning algorithms for predictive agriculture',
    icon: Brain,
    applications: ['Crop Monitoring', 'Yield Prediction', 'Disease Detection']
  },
  {
    name: 'IoT & Sensors',
    description: 'Connected devices for real-time field monitoring',
    icon: Zap,
    applications: ['Soil Monitoring', 'Weather Stations', 'Equipment Tracking']
  },
  {
    name: 'Biotechnology',
    description: 'Genetic and biological solutions for agriculture',
    icon: Microscope,
    applications: ['Crop Improvement', 'Disease Resistance', 'Nutrient Enhancement']
  },
  {
    name: 'Data Analytics',
    description: 'Big data processing for agricultural insights',
    icon: BarChart3,
    applications: ['Market Analysis', 'Performance Optimization', 'Risk Assessment']
  }
];

export function AgriculturalResearchDevelopment() {
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
            <span className="text-gray-900">Agricultural Research & Development</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Microscope className="h-4 w-4 mr-2" />
              Research & Development Services
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Agricultural Research &
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Development</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Cutting-edge research solutions for innovative farming techniques and agricultural technology advancement. 
              We partner with farms to develop tomorrow's agricultural solutions today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Target className="h-5 w-5 mr-2" />
                View Services
              </Link>
              
              <Link
                to="#research"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Current Research
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
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-600">Research Projects</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">25</div>
              <div className="text-sm text-gray-600">Research Scientists</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">45</div>
              <div className="text-sm text-gray-600">Patents Filed</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Countries Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4 mr-2" />
              Research Services • Future Solutions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">R&D</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced research and development services pushing the boundaries of agricultural innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchServices.map((service) => {
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

                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Discuss Project
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Research <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies driving agricultural innovation and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{tech.description}</p>
                  
                  <div className="space-y-1">
                    {tech.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Research</span> Team
            </h2>
            <p className="text-xl text-gray-600">
              World-class researchers pioneering the future of agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchers.map((researcher) => (
              <div
                key={researcher.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <img
                    src={researcher.avatar}
                    alt={researcher.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{researcher.name}</h3>
                  <p className="text-purple-600 mb-2">{researcher.title}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{researcher.rating}</span>
                    <span className="text-sm text-gray-500">({researcher.reviews} reviews)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-purple-600">{researcher.publications}</div>
                      <div className="text-xs text-gray-500">Publications</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-indigo-600">{researcher.patents}</div>
                      <div className="text-xs text-gray-500">Patents</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{researcher.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-purple-600">{researcher.rate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {researcher.specialties.map((specialty, index) => (
                        <span key={index} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Collaborate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section id="research" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Research</span> Projects
            </h2>
            <p className="text-xl text-gray-600">
              Breakthrough research projects currently in development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-600' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Impact</div>
                    <div className="font-semibold text-green-600">{project.impact}</div>
                  </div>
                </div>

                <div className="border-t border-purple-200 pt-4">
                  <div className="text-sm text-gray-500 mb-1">Technology Used:</div>
                  <div className="text-sm font-medium text-purple-600">{project.technology}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Rocket className="h-5 w-5 mr-2" />
              Pioneer the Future of Agriculture
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Innovate Agricultural Solutions?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Partner with our research team to develop cutting-edge solutions for your agricultural challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Start Research Project
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
