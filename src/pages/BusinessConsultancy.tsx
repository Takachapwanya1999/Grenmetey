import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  MapPin, 
  Phone, 
  Calendar,
  Award,
  Briefcase,
  BookOpen,
  FileText,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  DollarSign,
  Leaf,
  Microscope,
  MessageSquare,
  UserCheck,
  Zap
} from 'lucide-react';

const consultancyServices = [
  {
    id: 1,
    title: 'Agricultural Investment Consultancy',
    description: 'Expert guidance on agricultural investments, funding opportunities, and financial planning for farming ventures.',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    features: ['Investment Analysis', 'Risk Assessment', 'ROI Projections', 'Funding Strategies'],
    link: '/consultancy/investment',
    badge: 'Premium',
    consultants: 12,
    rating: 4.9
  },
  {
    id: 2,
    title: 'Farmers Information Desk',
    description: 'Comprehensive information hub providing farmers with essential knowledge, resources, and support services.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-600',
    features: ['Market Information', 'Weather Updates', 'Best Practices', '24/7 Support'],
    link: '/consultancy/information-desk',
    badge: 'Essential',
    consultants: 18,
    rating: 4.8
  },
  {
    id: 3,
    title: 'Agronomy Services',
    description: 'Scientific approach to crop and soil management for optimized agricultural productivity and sustainability.',
    icon: Leaf,
    color: 'from-purple-500 to-violet-600',
    features: ['Soil Analysis', 'Crop Management', 'Pest Control', 'Yield Optimization'],
    link: '/consultancy/agronomy',
    badge: 'Scientific',
    consultants: 15,
    rating: 4.9
  },
  {
    id: 4,
    title: 'Agricultural Research & Development',
    description: 'Cutting-edge research solutions for innovative farming techniques and agricultural technology advancement.',
    icon: Microscope,
    color: 'from-orange-500 to-red-600',
    features: ['Innovation Research', 'Technology Development', 'Data Analysis', 'R&D Projects'],
    link: '/consultancy/research-development',
    badge: 'Innovation',
    consultants: 8,
    rating: 4.7
  }
];

const consultants = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Agricultural Investment',
    experience: '15+ years',
    rating: 4.9,
    reviews: 234,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    expertise: ['Investment Strategy', 'Financial Planning', 'Risk Management'],
    languages: ['English', 'Afrikaans'],
    hourlyRate: 'R850/hour'
  },
  {
    id: 2,
    name: 'Prof. James van der Merwe',
    specialty: 'Agronomy & Soil Science',
    experience: '20+ years',
    rating: 4.8,
    reviews: 189,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    expertise: ['Soil Health', 'Crop Rotation', 'Sustainable Farming'],
    languages: ['English', 'Afrikaans', 'Zulu'],
    hourlyRate: 'R750/hour'
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    specialty: 'Agricultural Research',
    experience: '12+ years',
    rating: 4.9,
    reviews: 156,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    expertise: ['Research Methodology', 'Data Analytics', 'Innovation'],
    languages: ['English', 'Hindi', 'Tamil'],
    hourlyRate: 'R900/hour'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Mark Thompson',
    farm: 'Sunrise Citrus Farm',
    location: 'Western Cape',
    text: 'The investment consultancy helped us secure R2.5M in funding for our expansion. Excellent service!',
    rating: 5,
    service: 'Investment Consultancy'
  },
  {
    id: 2,
    name: 'Linda Mthembu',
    farm: 'Golden Grain Co-op',
    location: 'Free State',
    text: 'The agronomy team increased our yield by 35% through better soil management practices.',
    rating: 5,
    service: 'Agronomy Services'
  },
  {
    id: 3,
    name: 'Peter Botha',
    farm: 'Green Valley Vegetables',
    location: 'Gauteng',
    text: 'The information desk is invaluable - always up-to-date market prices and weather alerts.',
    rating: 5,
    service: 'Information Desk'
  }
];

export function BusinessConsultancy() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-5 w-5 mr-2" />
              Professional Agricultural Consultancy
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Business Consultancy
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert agricultural consultancy services to help farmers and agribusinesses thrive. From investment planning to cutting-edge research - we're your trusted agricultural partners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Target className="h-5 w-5 mr-2" />
                Explore Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="#consultants"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <UserCheck className="h-5 w-5 mr-2" />
                Meet Our Experts
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-green-100">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">53</div>
                <div className="text-sm text-green-100">Expert Consultants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">R2.8B</div>
                <div className="text-sm text-green-100">Investments Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.9★</div>
                <div className="text-sm text-green-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4 mr-2" />
              Comprehensive Services • Expert Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Consultancy</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized agricultural consultancy services designed to accelerate your farming success and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultancyServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        service.badge === 'Premium' ? 'bg-purple-100 text-purple-600' :
                        service.badge === 'Essential' ? 'bg-blue-100 text-blue-600' :
                        service.badge === 'Scientific' ? 'bg-green-100 text-green-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{service.consultants} experts</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-green-600" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Consultants */}
      <section id="consultants" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Expert Team • Proven Track Record
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Expert</span> Consultants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with industry-leading agricultural consultants who bring decades of experience and proven results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultants.map((consultant) => (
              <div
                key={consultant.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden"
              >
                {/* Avatar & Header */}
                <div className="relative bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white text-center">
                  <img
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">{consultant.name}</h3>
                  <p className="text-green-100">{consultant.specialty}</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Star className="h-4 w-4 text-yellow-300 fill-current" />
                    <span className="text-sm">{consultant.rating} ({consultant.reviews} reviews)</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Experience</span>
                      <span className="font-semibold text-gray-900">{consultant.experience}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Rate</span>
                      <span className="font-semibold text-green-600">{consultant.hourlyRate}</span>
                    </div>

                    {/* Expertise */}
                    <div>
                      <span className="text-sm text-gray-500 block mb-2">Expertise</span>
                      <div className="flex flex-wrap gap-2">
                        {consultant.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <span className="text-sm text-gray-500 block mb-2">Languages</span>
                      <div className="flex flex-wrap gap-2">
                        {consultant.languages.map((language, langIndex) => (
                          <span key={langIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Success Stories • Real Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from farmers and agribusinesses who achieved remarkable results with our consultancy services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 text-center border border-green-200">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-green-600 font-medium">
                    {testimonials[activeTestimonial].farm}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {testimonials[activeTestimonial].location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {testimonials[activeTestimonial].service}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Zap className="h-5 w-5 mr-2" />
              Start Your Agricultural Success Journey
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Agricultural Business?</span>
            </h2>
            
            <p className="text-xl text-green-100 mb-8">
              Connect with our expert consultants today and take the first step towards maximizing your agricultural potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                <FileText className="h-5 w-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
