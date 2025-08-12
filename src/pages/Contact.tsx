import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
  Shield,
  Star,
  Award,
  Zap
} from 'lucide-react';
import { Cobweb } from '../components/Cobweb';

const contactMethods = [
  {
    icon: Phone,
    title: '24/7 Support Hotline',
    description: 'Speak with our agricultural experts anytime',
    contact: '+27 11 123 4567',
    hours: '24/7 Available',
    color: 'from-green-400 to-green-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed inquiries and feedback',
    contact: 'support@grenmeteyinvestments.co.za',
    hours: 'Response within 2 hours',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Instant messaging with our support team',
    contact: 'Available on website',
    hours: 'Mon-Sun 6AM-10PM',
    color: 'from-purple-400 to-purple-500'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    description: 'Meet our team at our headquarters',
    contact: '123 Farming Street, Cape Town',
    hours: 'Mon-Fri 8AM-5PM',
    color: 'from-orange-400 to-orange-500'
  }
];

const officeLocations = [
  {
    city: 'Cape Town',
    address: '123 Farming Street, Gardens, Cape Town 8001',
    phone: '+27 21 123 4567',
    email: 'capetown@grenmeteyinvestments.co.za',
    manager: 'Sarah Johnson',
    coordinates: '33.9249° S, 18.4241° E'
  },
  {
    city: 'Johannesburg', 
    address: '456 Agricultural Ave, Sandton, Johannesburg 2196',
    phone: '+27 11 123 4567',
    email: 'johannesburg@grenmeteyinvestments.co.za',
    manager: 'Michael Chen',
    coordinates: '26.2041° S, 28.0473° E'
  },
  {
    city: 'Durban',
    address: '789 Harvest Road, Umhlanga, Durban 4319',
    phone: '+27 31 123 4567',
    email: 'durban@grenmeteyinvestments.co.za',
    manager: 'Priya Patel',
    coordinates: '29.8587° S, 31.0218° E'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting Grenmetey Investments. We'll get back to you within 2 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Prominent agricultural cobwebs */}
      <Cobweb 
        size="xl" 
        position="top-right" 
        color="#15803d" 
        opacity={0.45}
        variant="agricultural"
        className="animate-cobweb-sway"
      />
      <Cobweb 
        size="lg" 
        position="top-left" 
        color="#166534" 
        opacity={0.35}
        variant="agricultural"
        className="animate-web-shimmer"
      />
      <Cobweb 
        size="md" 
        position="bottom-left" 
        color="#22c55e" 
        opacity={0.3}
        variant="agricultural"
        className="animate-spider-crawl"
      />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Headphones className="h-4 w-4 mr-2" />
            24/7 Support Available
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch with
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Grenmetey Investments</span>
          </h1>
          
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our agricultural products or services? Our expert team is here to help you succeed. 
            Reach out today and experience our award-winning customer support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </a>
            
            <a
              href="tel:+27111234567"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${method.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <div className="space-y-1">
                    <div className="font-semibold text-gray-900">{method.contact}</div>
                    <div className="text-sm text-gray-500">{method.hours}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="+27 11 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="consultancy">Consultancy Services</option>
                      <option value="supply-chain">Supply Chain</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    placeholder="Please provide detailed information about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Locations</h2>
                <p className="text-gray-600">Visit us at any of our offices across South Africa.</p>
              </div>

              {officeLocations.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                      Regional Office
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <div>
                        <div className="text-gray-900">{office.address}</div>
                        <div className="text-sm text-gray-500">{office.coordinates}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="text-green-600 hover:text-green-700">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="text-green-600 hover:text-green-700">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">Manager: {office.manager}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Why Choose Grenmetey Investments Support?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-300" />
                    <span>4.9★ Customer satisfaction rating</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-yellow-300" />
                    <span>2-hour average response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow-300" />
                    <span>Award-winning customer service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300" />
                    <span>Dedicated agricultural experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600">Emergency Support:</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  Need immediate assistance? Our 24/7 emergency support line is always available for urgent agricultural matters.
                </p>
                <a
                  href="tel:+27111234567"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
