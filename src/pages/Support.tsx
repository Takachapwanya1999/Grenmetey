import { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Send, 
  Heart, 
  Shield, 
  Truck, 
  CreditCard,
  Users,
  Leaf,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export function Support() {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const faqData = [
    {
      id: 1,
      category: 'Orders & Delivery',
      question: 'How long does delivery take?',
      answer: 'Most orders are delivered within 24-48 hours for fresh produce. We work directly with local farmers to ensure the fastest possible delivery while maintaining freshness. You\'ll receive tracking information once your order is dispatched.'
    },
    {
      id: 2,
      category: 'Orders & Delivery',
      question: 'What are your delivery areas?',
      answer: 'We currently deliver across all major cities in South Africa including Cape Town, Johannesburg, Durban, and Pretoria. Rural delivery is available with extended delivery times. Check our delivery map for specific areas.'
    },
    {
      id: 3,
      category: 'Quality & Freshness',
      question: 'How do you ensure produce freshness?',
      answer: 'All our produce is harvested within 24-48 hours of delivery. We have cold storage facilities and temperature-controlled transport. Each farmer partner is verified for organic certification and quality standards.'
    },
    {
      id: 4,
      category: 'Payment & Pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, EFT, and mobile payments including SnapScan and Zapper. We also offer cash on delivery for certain areas.'
    },
    {
      id: 5,
      category: 'Account & Registration',
      question: 'How do I become a farmer partner?',
      answer: 'You can apply through our Partner Registration page. We require organic certification or willingness to obtain it, consistent supply capability, and quality standards compliance. Our team will contact you within 3-5 business days.'
    },
    {
      id: 6,
      category: 'Returns & Refunds',
      question: 'What is your return policy?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with your produce quality, contact us within 24 hours of delivery for a full refund or replacement. Quality issues are resolved immediately.'
    }
  ];

  const filteredFaq = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqCategories = [...new Set(faqData.map(item => item.category))];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 text-white p-4 rounded-2xl">
              <HelpCircle className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with any questions about fresh produce, orders, or our platform
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600 text-sm">Mon-Fri 8AM-6PM</p>
                <p className="text-green-600 font-medium">+27 21 123 4567</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600 text-sm">24/7 Support</p>
                <p className="text-blue-600 font-medium">help@grenmeteyinvestments.co.za</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Live Chat</h3>
                <p className="text-gray-600 text-sm">Instant help</p>
                <p className="text-purple-600 font-medium">Start chat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'contact', label: 'Contact Us', icon: Send },
                { id: 'faq', label: 'FAQ', icon: FileText },
                { id: 'guides', label: 'User Guides', icon: Heart }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`py-6 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200 ${
                    activeTab === id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Contact Form Tab */}
            {activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={contactForm.category}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a category</option>
                        <option value="order">Order Issue</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="quality">Product Quality</option>
                        <option value="payment">Payment Issue</option>
                        <option value="account">Account Support</option>
                        <option value="farmer">Farmer Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={contactForm.priority}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
                  <p className="text-gray-600">Find quick answers to common questions</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-lg mx-auto mb-8">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* FAQ Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {faqCategories.map((category) => (
                    <div key={category} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                      <div className="text-sm font-medium text-gray-700">{category}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {faqData.filter(item => item.category === category).length} questions
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {filteredFaq.length === 0 ? (
                    <div className="text-center py-8">
                      <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No FAQs found matching your search.</p>
                    </div>
                  ) : (
                    filteredFaq.map((faq) => (
                      <div key={faq.id} className="bg-gray-50 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div>
                            <div className="text-sm text-green-600 font-medium mb-1">{faq.category}</div>
                            <div className="font-medium text-gray-900">{faq.question}</div>
                          </div>
                          {expandedFaq === faq.id ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* User Guides Tab */}
            {activeTab === 'guides' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">User Guides</h2>
                  <p className="text-gray-600">Step-by-step guides to help you get the most out of Grenmetey Investments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Getting Started',
                      description: 'Learn how to create an account and place your first order',
                      icon: Users,
                      color: 'green',
                      steps: ['Create account', 'Browse products', 'Add to cart', 'Checkout']
                    },
                    {
                      title: 'Quality Guarantee',
                      description: 'Understanding our freshness promise and return policy',
                      icon: Shield,
                      color: 'blue',
                      steps: ['Quality standards', 'Delivery process', 'Issue reporting', 'Refund process']
                    },
                    {
                      title: 'Farmer Partnership',
                      description: 'How to join as a farmer and start selling your produce',
                      icon: Leaf,
                      color: 'orange',
                      steps: ['Application', 'Certification', 'Product listing', 'Order management']
                    },
                    {
                      title: 'Delivery Guide',
                      description: 'Everything about our delivery service and tracking',
                      icon: Truck,
                      color: 'purple',
                      steps: ['Delivery areas', 'Time slots', 'Tracking orders', 'Special instructions']
                    },
                    {
                      title: 'Payment Methods',
                      description: 'All available payment options and security measures',
                      icon: CreditCard,
                      color: 'indigo',
                      steps: ['Accepted cards', 'Mobile payments', 'Security', 'Billing issues']
                    },
                    {
                      title: 'Organic Certification',
                      description: 'Learn about our organic standards and certifications',
                      icon: CheckCircle,
                      color: 'emerald',
                      steps: ['Certification process', 'Farmer verification', 'Product labeling', 'Quality control']
                    }
                  ].map((guide) => (
                    <div key={guide.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`inline-flex p-3 rounded-xl mb-4 bg-${guide.color}-100`}>
                        <guide.icon className={`h-6 w-6 text-${guide.color}-600`} />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                      <div className="space-y-2">
                        {guide.steps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className={`w-4 h-4 rounded-full bg-${guide.color}-100 flex items-center justify-center`}>
                              <div className={`w-2 h-2 rounded-full bg-${guide.color}-600`}></div>
                            </div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our customer support team is here to help you 24/7. Don't hesitate to reach out if you can't find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Start Live Chat</span>
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-400 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
