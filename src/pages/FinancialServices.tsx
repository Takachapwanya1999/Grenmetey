import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  Calculator, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Banknote,
  PiggyBank,
  Users,
  Star,
  Zap,
  Smartphone,
  Wallet,
  Receipt,
  BarChart3
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedComponents';

export function FinancialServices() {
  const [selectedService, setSelectedService] = useState('loans');
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);

  const services = [
    {
      id: 'loans',
      name: 'Micro-Loans',
      icon: Banknote,
      description: 'Quick funding for seeds, equipment, and operations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'insurance',
      name: 'Crop Insurance',
      icon: Shield,
      description: 'Protect your crops against weather and pest damage',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'payment-plans',
      name: 'Payment Plans',
      icon: Calendar,
      description: 'Buy now, pay after harvest flexible terms',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Secure payments and money management for agriculture',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const loanProducts = [
    {
      name: 'Seed Capital Loan',
      minAmount: 5000,
      maxAmount: 50000,
      term: '3-6 months',
      rate: '2.5%',
      purpose: 'Seeds, fertilizers, basic farming inputs',
      approval: '24 hours',
      requirements: ['Valid ID', 'Farm proof', 'Bank account'],
      popular: false
    },
    {
      name: 'Equipment Finance',
      minAmount: 25000,
      maxAmount: 500000,
      term: '6-24 months',
      rate: '3.5%',
      purpose: 'Tractors, irrigation, farming equipment',
      approval: '48-72 hours',
      requirements: ['Business registration', 'Farm ownership', 'Credit check'],
      popular: true
    },
    {
      name: 'Seasonal Working Capital',
      minAmount: 10000,
      maxAmount: 200000,
      term: '6-12 months',
      rate: '2.8%',
      purpose: 'Operational expenses, labor, maintenance',
      approval: '24-48 hours',
      requirements: ['Farming experience', 'Income proof', 'Reference'],
      popular: false
    }
  ];

  const insuranceProducts = [
    {
      name: 'Multi-Peril Crop Insurance',
      coverage: 'Up to 85% of production value',
      perils: ['Drought', 'Flooding', 'Hail', 'Fire', 'Pest damage'],
      premium: '3-6% of sum insured',
      claims: '14-day processing',
      eligible: 'All major crops',
      popular: true
    },
    {
      name: 'Weather Index Insurance',
      coverage: 'Automatic payouts based on weather data',
      perils: ['Rainfall deficit', 'Temperature extremes', 'Wind damage'],
      premium: '2-4% of sum insured',
      claims: 'Automatic within 30 days',
      eligible: 'Maize, wheat, soybeans',
      popular: false
    },
    {
      name: 'Livestock Insurance',
      coverage: 'Up to market value per animal',
      perils: ['Disease', 'Accident', 'Theft', 'Natural disasters'],
      premium: '4-8% of animal value',
      claims: '7-day processing',
      eligible: 'Cattle, sheep, goats, poultry',
      popular: false
    }
  ];

  const walletFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile Payments',
      description: 'Pay for supplies, receive payments instantly via mobile money integration'
    },
    {
      icon: Receipt,
      title: 'Transaction History',
      description: 'Track all agricultural payments, loans, and insurance in one place'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Insights on spending patterns, seasonal budgets, and cash flow'
    },
    {
      icon: Users,
      title: 'Group Savings',
      description: 'Join or create savings groups with other farmers for bulk purchasing'
    }
  ];

  const calculateLoanPayment = () => {
    const monthlyRate = 0.025 / 12; // 2.5% annual rate
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment.toFixed(0);
  };

  const successStories = [
    {
      name: 'John Mthembu',
      location: 'KwaZulu-Natal',
      story: 'Used R35,000 equipment loan to buy irrigation system. Increased yield by 40% and paid back loan 2 months early.',
      loan: 'Equipment Finance',
      impact: '40% yield increase'
    },
    {
      name: 'Grace Mokwena',
      location: 'Limpopo',
      story: 'Crop insurance saved my farm when drought hit. Received R45,000 payout within 2 weeks.',
      product: 'Crop Insurance',
      impact: 'Farm saved from drought'
    },
    {
      name: 'Peter Zulu',
      location: 'Free State',
      story: 'Digital wallet helped me track expenses and save 15% on input costs through group purchasing.',
      product: 'Digital Wallet',
      impact: '15% cost savings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <CreditCard className="h-4 w-4 mr-2" />
              Financial Services for Farmers
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Agricultural
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Financial Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Access micro-loans, crop insurance, flexible payment plans, and digital banking 
              designed specifically for African farmers and agricultural businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Loan
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                <Shield className="h-5 w-5 mr-2" />
                Get Insurance Quote
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Selection */}
      <AnimatedSection className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-gradient-to-br ' + service.color + ' text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <service.icon className={`h-8 w-8 mx-auto mb-3 ${
                  selectedService === service.id ? 'text-white' : 'text-gray-600'
                }`} />
                <h3 className={`font-semibold mb-2 ${
                  selectedService === service.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.name}
                </h3>
                <p className={`text-sm ${
                  selectedService === service.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content Based on Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Micro-Loans Section */}
        {selectedService === 'loans' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro-Loans for Farmers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fast, affordable loans designed for agricultural needs. No collateral required for smaller amounts.
              </p>
            </div>

            {/* Loan Calculator */}
            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Loan Calculator</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount: R{loanAmount.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min="5000"
                        max="500000"
                        step="5000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>R5,000</span>
                        <span>R500,000</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Term: {loanTerm} months
                      </label>
                      <input
                        type="range"
                        min="3"
                        max="24"
                        step="1"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>3 months</span>
                        <span>24 months</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Amount:</span>
                        <span className="font-semibold">R{loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-semibold">2.5% per month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Term:</span>
                        <span className="font-semibold">{loanTerm} months</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between text-lg">
                        <span className="text-gray-900 font-semibold">Monthly Payment:</span>
                        <span className="text-green-600 font-bold">R{calculateLoanPayment()}</span>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Loan Products */}
            <div className="grid md:grid-cols-3 gap-8">
              {loanProducts.map((loan, index) => (
                <AnimatedCard key={loan.name} delay={index * 0.1}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 ${
                    loan.popular ? 'ring-2 ring-green-500' : ''
                  }`}>
                    {loan.popular && (
                      <div className="bg-green-500 text-white text-center py-1 text-sm font-semibold rounded-t-xl -mx-6 -mt-6 mb-6">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{loan.name}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">R{loan.minAmount.toLocaleString()} - R{loan.maxAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Term:</span>
                        <span className="font-medium">{loan.term}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Rate:</span>
                        <span className="font-medium text-green-600">{loan.rate} per month</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Approval:</span>
                        <span className="font-medium">{loan.approval}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{loan.purpose}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {loan.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                      Apply for {loan.name}
                    </button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* Insurance Section */}
        {selectedService === 'insurance' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Crop Insurance Protection</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your investment against weather, pests, and unforeseen circumstances. 
                Fast claims processing with satellite monitoring.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {insuranceProducts.map((insurance, index) => (
                <AnimatedCard key={insurance.name} delay={index * 0.1}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 ${
                    insurance.popular ? 'ring-2 ring-blue-500' : ''
                  }`}>
                    {insurance.popular && (
                      <div className="bg-blue-500 text-white text-center py-1 text-sm font-semibold rounded-t-xl -mx-6 -mt-6 mb-6">
                        Recommended
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{insurance.name}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Coverage: </span>
                        <span className="text-sm text-gray-600">{insurance.coverage}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Premium: </span>
                        <span className="text-sm text-blue-600 font-semibold">{insurance.premium}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Claims: </span>
                        <span className="text-sm text-gray-600">{insurance.claims}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Eligible: </span>
                        <span className="text-sm text-gray-600">{insurance.eligible}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Protected Against:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {insurance.perils.map((peril, idx) => (
                          <li key={idx} className="flex items-center">
                            <Shield className="h-3 w-3 text-blue-500 mr-2" />
                            {peril}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* Digital Wallet Section */}
        {selectedService === 'wallet' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AgriWallet Digital Banking</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete financial management designed for farmers. Mobile payments, savings, 
                and agricultural transaction tracking in one secure app.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {walletFeatures.map((feature, index) => (
                <AnimatedCard key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Wallet Benefits */}
            <AnimatedCard>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AgriWallet?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Zap className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Instant Payments</h4>
                          <p className="text-gray-600 text-sm">Pay suppliers and receive payments instantly with QR codes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <PiggyBank className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Savings Goals</h4>
                          <p className="text-gray-600 text-sm">Set and track savings for seeds, equipment, and expansion</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Financial Insights</h4>
                          <p className="text-gray-600 text-sm">Track income, expenses, and profitability by crop and season</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Account Features</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center justify-between">
                        <span className="text-gray-600">Monthly Fee:</span>
                        <span className="font-semibold text-green-600">Free</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-gray-600">Transaction Limit:</span>
                        <span className="font-semibold">R50,000/day</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-gray-600">Savings Interest:</span>
                        <span className="font-semibold text-green-600">5.5% annually</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-gray-600">Mobile Money:</span>
                        <span className="font-semibold">Integrated</span>
                      </li>
                    </ul>
                    <button className="w-full mt-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                      Open Account
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        )}
      </div>

      {/* Success Stories */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our financial services have helped farmers grow their businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedCard key={story.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">"{story.story}"</blockquote>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-sm text-gray-500">{story.location}</div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {story.loan || story.product}
                      </span>
                      <span className="text-green-600 font-semibold">{story.impact}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Grow Your Agricultural Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of farmers who have accessed over R500 million in agricultural financing
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">R500M+</div>
              <div className="text-blue-100">Loans Disbursed</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Farmers Served</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">24 Hours</div>
              <div className="text-blue-100">Average Approval</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/financial-application"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Apply for Financing
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Payments
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
