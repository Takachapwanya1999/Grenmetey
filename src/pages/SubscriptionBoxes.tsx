import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Calendar, 
  Truck, 
  Star, 
  CheckCircle,
  Gift,
  Heart,
  MapPin,
  ArrowRight,
  Leaf,
  Shield,
  Zap
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedComponents';

export function SubscriptionBoxes() {
  const [selectedPlan, setSelectedPlan] = useState('family');
  const [selectedFrequency, setSelectedFrequency] = useState('weekly');

  const subscriptionPlans = [
    {
      id: 'individual',
      name: 'Solo Fresh',
      price: 199,
      description: 'Perfect for individuals and couples',
      items: '8-12 items',
      serves: '1-2 people',
      image: '/api/placeholder/300/200',
      features: [
        '8-12 seasonal items',
        'Mix of fruits & vegetables',
        'Recipe cards included',
        'Flexible delivery schedule',
        'Cancel anytime'
      ],
      popular: false,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'family',
      name: 'Family Harvest',
      price: 349,
      description: 'Great for families of 3-5 people',
      items: '15-20 items',
      serves: '3-5 people',
      image: '/api/placeholder/300/200',
      features: [
        '15-20 seasonal items',
        'Variety of fresh produce',
        'Family-friendly recipes',
        'Priority delivery slots',
        'Nutritional guides',
        'Kids recipe cards'
      ],
      popular: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'premium',
      name: 'Gourmet Garden',
      price: 549,
      description: 'Premium organic and exotic produce',
      items: '20-25 items',
      serves: '4-6 people',
      image: '/api/placeholder/300/200',
      features: [
        '20-25 premium items',
        'Organic & exotic varieties',
        'Chef-curated selections',
        'Gourmet recipe collections',
        'Same-day delivery option',
        'Nutritionist consultations',
        'Seasonal specialties'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'office',
      name: 'Office Fresh',
      price: 799,
      description: 'Healthy snacks for the workplace',
      items: '30+ items',
      serves: '10-15 people',
      image: '/api/placeholder/300/200',
      features: [
        '30+ healthy snacks',
        'Fresh fruit selections',
        'Office-friendly packaging',
        'Bulk delivery discounts',
        'Corporate wellness reports',
        'Custom dietary options'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const frequencyOptions = [
    { id: 'weekly', label: 'Weekly', discount: 0, description: 'Fresh delivery every week' },
    { id: 'biweekly', label: 'Bi-weekly', discount: 5, description: 'Every 2 weeks, 5% off' },
    { id: 'monthly', label: 'Monthly', discount: 10, description: 'Monthly delivery, 10% off' }
  ];

  const calculatePrice = (basePrice: number) => {
    const frequency = frequencyOptions.find(f => f.id === selectedFrequency);
    const discount = frequency?.discount || 0;
    return Math.round(basePrice * (1 - discount / 100));
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Cape Town',
      rating: 5,
      text: 'The Family Harvest box has been a game-changer for our household. Fresh, quality produce delivered right to our door!',
      avatar: 'SJ'
    },
    {
      name: 'Mike Ndlovu',
      location: 'Johannesburg',
      rating: 5,
      text: 'Love the variety and freshness. The recipe cards have introduced us to so many new dishes!',
      avatar: 'MN'
    },
    {
      name: 'Lisa Chen',
      location: 'Durban',
      rating: 5,
      text: 'The Gourmet Garden subscription has elevated our cooking. The organic quality is outstanding.',
      avatar: 'LC'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Gift className="h-4 w-4 mr-2" />
              Subscription Boxes
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Fresh Produce
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Delivered Weekly
              </span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Experience the convenience of farm-fresh African produce delivered to your doorstep. 
              Curated seasonal selections, flexible schedules, and unbeatable freshness guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Package className="h-5 w-5 mr-2" />
                Start Your Subscription
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                <Gift className="h-5 w-5 mr-2" />
                Gift a Box
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, flexible, and designed around your lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center p-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Choose Your Box</h3>
                <p className="text-gray-600">Select the perfect size and frequency for your household needs</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center p-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. We Curate</h3>
                <p className="text-gray-600">Our experts select the freshest seasonal produce from local farms</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center p-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Fresh Delivery</h3>
                <p className="text-gray-600">Receive your box at your preferred time with our cold-chain delivery</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Frequency Selection */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Delivery Frequency
            </h2>
            <p className="text-lg text-gray-600">
              More frequent deliveries mean fresher produce. Less frequent saves you money.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {frequencyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedFrequency(option.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedFrequency === option.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <Calendar className={`h-8 w-8 mx-auto mb-3 ${
                    selectedFrequency === option.id ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{option.label}</h3>
                  <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                  {option.discount > 0 && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Save {option.discount}%
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Subscription Plans */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect box size for your household or workplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <AnimatedCard key={plan.id} delay={index * 0.1}>
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className={`bg-gradient-to-br ${plan.color} h-32 rounded-xl mb-4 flex items-center justify-center`}>
                      <Package className="h-12 w-12 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        R{calculatePrice(plan.price)}
                        <span className="text-lg text-gray-600">/{selectedFrequency}</span>
                      </div>
                      {(frequencyOptions.find(f => f.id === selectedFrequency)?.discount || 0) > 0 && (
                        <div className="text-sm text-gray-500 line-through">
                          R{plan.price}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Items:</span>
                        <span className="font-medium">{plan.items}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Serves:</span>
                        <span className="font-medium">{plan.serves}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Subscription Boxes?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Freshness Guaranteed</h3>
                <p className="text-gray-600">Cold-chain delivery ensures maximum freshness from farm to your door</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible & Convenient</h3>
                <p className="text-gray-600">Pause, skip, or cancel anytime. Change delivery dates to fit your schedule</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support Local Farmers</h3>
                <p className="text-gray-600">Every box supports African farmers and promotes sustainable agriculture</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Subscribers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={testimonial.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Fresh Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers enjoying farm-fresh produce delivered weekly
          </p>
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <div className="text-green-100">Happy Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-green-100">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-green-100">Partner Farms</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscription-signup"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Package className="h-5 w-5 mr-2" />
              Start Your Subscription
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
              <Gift className="h-5 w-5 mr-2" />
              Give as Gift
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
