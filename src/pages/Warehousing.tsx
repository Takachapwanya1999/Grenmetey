import { Link } from 'react-router-dom';
import { 
  Warehouse, 
  Package, 
  Thermometer, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Clock,
  Truck,
  Database,
  Zap,
  Monitor,
  TrendingUp,
  Target,
  Cpu,
  Camera,
  Lock
} from 'lucide-react';

const warehousingServices = [
  {
    id: 1,
    title: 'Cold Storage Solutions',
    description: 'Temperature-controlled storage facilities to maintain product freshness and extend shelf life',
    features: ['Multi-zone Temperature Control', 'Humidity Management', 'Air Quality Control', '24/7 Monitoring'],
    price: 'From R50/m³',
    duration: 'Monthly',
    icon: Thermometer,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 2,
    title: 'Inventory Management',
    description: 'Advanced inventory tracking and management systems for optimal stock control',
    features: ['Real-time Tracking', 'Automated Alerts', 'Stock Optimization', 'Reporting Dashboard'],
    price: 'From R800',
    duration: 'Monthly',
    icon: Database,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    title: 'Quality Control Systems',
    description: 'Comprehensive quality assurance and product inspection services',
    features: ['Product Inspection', 'Quality Testing', 'Compliance Monitoring', 'Certification Support'],
    price: 'From R25/unit',
    duration: 'Per inspection',
    icon: Shield,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 4,
    title: 'Logistics Coordination',
    description: 'Seamless coordination between storage, handling, and distribution operations',
    features: ['Order Management', 'Route Planning', 'Fleet Coordination', 'Delivery Tracking'],
    price: 'From R1,200',
    duration: 'Monthly',
    icon: Truck,
    color: 'from-orange-500 to-red-600'
  }
];

const storageTypes = [
  {
    name: 'Ambient Storage',
    description: 'Standard temperature storage for non-perishable goods',
    temperature: '15-25°C',
    capacity: '15,000m³',
    icon: Package,
    features: ['Dry goods', 'Grains & cereals', 'Packaged products', 'Long-term storage']
  },
  {
    name: 'Refrigerated Storage',
    description: 'Chilled storage for fresh produce and dairy products',
    temperature: '0-4°C',
    capacity: '8,000m³',
    icon: Thermometer,
    features: ['Fresh produce', 'Dairy products', 'Meat & poultry', 'Beverages']
  },
  {
    name: 'Frozen Storage',
    description: 'Frozen storage for long-term preservation',
    temperature: '-18°C to -25°C',
    capacity: '5,000m³',
    icon: Zap,
    features: ['Frozen fruits', 'Vegetables', 'Processed foods', 'Extended shelf life']
  },
  {
    name: 'Controlled Atmosphere',
    description: 'Specialized storage with controlled gas composition',
    temperature: '0-2°C + Gas Control',
    capacity: '3,000m³',
    icon: Monitor,
    features: ['Fruits & vegetables', 'Extended freshness', 'Reduced spoilage', 'Premium products']
  }
];

const warehouseExperts = [
  {
    id: 1,
    name: 'Dr. Jennifer Walsh',
    title: 'Warehouse Operations Director',
    specialties: ['Cold Chain Management', 'Inventory Optimization', 'Quality Systems'],
    experience: '16+ years',
    rating: 4.9,
    reviews: 234,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    facilities: 12,
    efficiency: '99.2%',
    rate: 'R1,400/hour'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Cold Storage Specialist',
    specialties: ['Temperature Control', 'Energy Efficiency', 'System Design'],
    experience: '14+ years',
    rating: 4.8,
    reviews: 187,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    facilities: 8,
    efficiency: '98.8%',
    rate: 'R1,200/hour'
  },
  {
    id: 3,
    name: 'Sarah Chen',
    title: 'Inventory Systems Manager',
    specialties: ['Inventory Technology', 'Process Automation', 'Data Analytics'],
    experience: '11+ years',
    rating: 4.7,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    facilities: 15,
    efficiency: '97.5%',
    rate: 'R1,000/hour'
  }
];

const warehouseTech = [
  {
    name: 'IoT Sensors',
    description: 'Smart sensors for real-time monitoring of storage conditions',
    icon: Cpu,
    capabilities: ['Temperature monitoring', 'Humidity tracking', 'Air quality sensors', 'Automated alerts']
  },
  {
    name: 'RFID Tracking',
    description: 'Radio frequency identification for precise inventory tracking',
    icon: Target,
    capabilities: ['Product identification', 'Location tracking', 'Automated counting', 'Loss prevention']
  },
  {
    name: 'Security Systems',
    description: 'Advanced security and surveillance systems',
    icon: Camera,
    capabilities: ['24/7 surveillance', 'Access control', 'Intrusion detection', 'Fire safety systems']
  },
  {
    name: 'Management Software',
    description: 'Comprehensive warehouse management system',
    icon: Monitor,
    capabilities: ['Inventory tracking', 'Order processing', 'Analytics dashboard', 'Integration APIs']
  }
];

const performanceMetrics = [
  {
    metric: 'Storage Capacity',
    value: '50,000m³',
    description: 'Total warehouse storage capacity across all facilities',
    icon: Warehouse,
    color: 'text-blue-600'
  },
  {
    metric: 'Uptime Rate',
    value: '99.8%',
    description: 'System reliability and operational uptime',
    icon: TrendingUp,
    color: 'text-green-600'
  },
  {
    metric: 'Product Loss Rate',
    value: '<0.5%',
    description: 'Industry-leading low spoilage and loss rates',
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    metric: 'Response Time',
    value: '<2 hours',
    description: 'Average response time for order processing',
    icon: Clock,
    color: 'text-orange-600'
  }
];

const warehouseCaseStudies = [
  {
    id: 1,
    client: 'Premium Produce Co.',
    challenge: 'High spoilage rates and inconsistent temperature control',
    solution: 'Implemented multi-zone cold storage with IoT monitoring systems',
    results: {
      spoilageReduction: '85%',
      energySavings: '30%',
      qualityImprovement: '95%',
      roi: '18 months'
    },
    testimonial: 'Our spoilage rates dropped dramatically, and product quality has never been better.',
    industry: 'Fresh Produce'
  },
  {
    id: 2,
    client: 'Dairy Excellence Ltd',
    challenge: 'Complex inventory management and traceability requirements',
    solution: 'Deployed RFID tracking and automated inventory management system',
    results: {
      accuracyImprovement: '99.5%',
      timeReduction: '60%',
      complianceRate: '100%',
      roi: '12 months'
    },
    testimonial: 'The system transformed our operations. We now have complete visibility and control.',
    industry: 'Dairy Products'
  }
];

export function Warehousing() {
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
            <span className="text-gray-900">Warehousing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Warehouse className="h-4 w-4 mr-2" />
              Warehousing Solutions
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Advanced
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Warehousing</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              State-of-the-art storage and inventory management solutions designed for agricultural products. 
              Maintain quality, reduce spoilage, and optimize your supply chain with our advanced warehousing facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Package className="h-5 w-5 mr-2" />
                View Services
              </Link>
              
              <Link
                to="#storage"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Thermometer className="h-5 w-5 mr-2" />
                Storage Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${metric.color}`}>{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.metric}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Warehouse className="h-4 w-4 mr-2" />
              Storage Solutions • Quality Preservation
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Warehousing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive warehousing solutions designed to preserve quality and optimize storage efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {warehousingServices.map((service) => {
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
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section id="storage" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Storage <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized storage solutions for different agricultural product requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageTypes.map((storage, index) => {
              const IconComponent = storage.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{storage.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{storage.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <div className="text-lg font-bold text-green-600">{storage.temperature}</div>
                      <div className="text-xs text-gray-500">Temperature</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{storage.capacity}</div>
                      <div className="text-xs text-gray-500">Capacity</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {storage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
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
              Technology <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Integration</span>
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology solutions powering our warehouse operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warehouseTech.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{tech.description}</p>
                  
                  <div className="space-y-1">
                    {tech.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warehouse Experts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Warehouse</span> Experts
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals managing our state-of-the-art storage facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {warehouseExperts.map((expert) => (
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

                  <div className="grid grid-cols-2 gap-4 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-green-600">{expert.facilities}</div>
                      <div className="text-xs text-gray-500">Facilities Managed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{expert.efficiency}</div>
                      <div className="text-xs text-gray-500">Efficiency Rate</div>
                    </div>
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

                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Consult Expert
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Studies</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real-world success stories from our warehousing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {warehouseCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                    <div className="text-sm text-green-600 font-medium">{study.industry}</div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Success Story
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Challenge:</div>
                  <p className="text-gray-700 mb-4">{study.challenge}</p>
                  
                  <div className="text-sm text-gray-500 mb-2">Solution:</div>
                  <p className="text-gray-700 mb-4">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{study.results.spoilageReduction || study.results.accuracyImprovement}</div>
                    <div className="text-xs text-gray-500">Primary Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{study.results.energySavings || study.results.timeReduction}</div>
                    <div className="text-xs text-gray-500">Secondary Benefit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{study.results.qualityImprovement || study.results.complianceRate}</div>
                    <div className="text-xs text-gray-500">Quality Metric</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{study.results.roi}</div>
                    <div className="text-xs text-gray-500">ROI Timeline</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic border-l-4 border-green-500 pl-4">
                  "{study.testimonial}"
                </blockquote>
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
              <Lock className="h-5 w-5 mr-2" />
              Secure Your Products Today
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Optimize Your Storage Solutions?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join hundreds of agricultural businesses that have reduced spoilage by up to 85% with our warehousing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Quote Today
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
