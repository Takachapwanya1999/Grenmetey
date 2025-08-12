import { Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Package, 
  DollarSign,
  CheckCircle,
  Star,
  Truck,
  CreditCard,
  BarChart3,
  Phone
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedComponents';

export function B2BWholesale() {

  const wholesalePlans = [
    {
      id: 'starter',
      name: 'Business Starter',
      price: 'R2,500',
      period: '/month',
      description: 'Perfect for small restaurants and cafes',
      features: [
        'Up to R50,000 monthly orders',
        '5% volume discount',
        'Weekly deliveries',
        'Basic account management',
        '30-day payment terms',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Business Standard',
      price: 'R5,000',
      period: '/month',
      description: 'Ideal for medium restaurants and grocery stores',
      features: [
        'Up to R200,000 monthly orders',
        '12% volume discount',
        'Daily deliveries',
        'Dedicated account manager',
        '45-day payment terms',
        'Priority phone support',
        'Custom packaging options',
        'Inventory management tools'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large chains and food processors',
      features: [
        'Unlimited order volume',
        '20%+ volume discounts',
        'Same-day deliveries',
        'Senior account executive',
        '60-day payment terms',
        '24/7 dedicated support',
        'Custom contracts',
        'API integrations',
        'Advanced analytics',
        'Quality guarantees'
      ],
      popular: false
    }
  ];

  const businessTypes = [
    {
      icon: Building2,
      title: 'Restaurants & Hotels',
      description: 'Daily fresh produce deliveries with consistent quality',
      savings: 'Save 15-25%',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Package,
      title: 'Grocery Chains',
      description: 'Reliable wholesale supply with competitive pricing',
      savings: 'Save 20-30%',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Truck,
      title: 'Food Processors',
      description: 'Bulk ingredients with quality certifications',
      savings: 'Save 25-35%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Export Companies',
      description: 'Consistent supply for international markets',
      savings: 'Save 30%+',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              B2B Wholesale Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Wholesale Fresh Produce
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Direct from African Farms
              </span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Power your business with Grenmetey Investments' wholesale platform. Get consistent supply, 
              volume discounts, and dedicated support for restaurants, hotels, grocery chains, and food processors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/b2b-signup"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Start Wholesale Account
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Business Types */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your business size, we have solutions that save you money and ensure consistent quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <AnimatedCard key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`bg-gradient-to-br ${type.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="text-green-600 font-semibold">{type.savings}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Plans */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wholesale Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business size and unlock significant savings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wholesalePlans.map((plan, index) => (
              <AnimatedCard key={plan.id} delay={index * 0.1}>
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative ${
                  plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Grenmetey Investments Wholesale?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Volume Discounts</h3>
                    <p className="text-gray-600">Save 15-35% with our tiered pricing structure based on order volume</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Delivery</h3>
                    <p className="text-gray-600">Guaranteed delivery windows with cold chain logistics for freshness</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Payment Terms</h3>
                    <p className="text-gray-600">30-60 day payment terms with credit facilities for established businesses</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Intelligence</h3>
                    <p className="text-gray-600">Advanced analytics and reporting to optimize your purchasing decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Story</h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Since switching to Grenmetey Investments wholesale, we've reduced our produce costs by 28% 
                  while improving quality consistency across all our restaurant locations."
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-400 to-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Chikwamba</div>
                    <div className="text-gray-600">Operations Manager, Taste of Africa Restaurants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of businesses already saving money and improving operations with Grenmetey Investments wholesale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/b2b-signup"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Building2 className="h-5 w-5 mr-2" />
              Start Your Wholesale Account
            </Link>
            <a
              href="tel:+27123456789"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Sales: +27 12 345 6789
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
