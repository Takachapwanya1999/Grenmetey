import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Heart, 
  Leaf, 
  Globe, 
  Truck,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  MessageSquare
} from 'lucide-react';
import { Cobweb } from '../components/Cobweb';

const stats = [
  { label: 'Years in Business', value: '15+', icon: Clock },
  { label: 'Happy Farmers', value: '5,000+', icon: Users },
  { label: 'Products Delivered', value: '50,000+', icon: Truck },
  { label: 'Customer Satisfaction', value: '98%', icon: Star }
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible farming practices and sustainable agriculture for future generations.',
    color: 'from-green-400 to-green-500'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure only the finest agricultural products reach our customers.',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: Heart,
    title: 'Community Focus',
    description: 'Supporting local farmers and communities while building lasting relationships based on trust and mutual growth.',
    color: 'from-red-400 to-red-500'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology and modern farming techniques to revolutionize agriculture.',
    color: 'from-purple-400 to-purple-500'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'Agricultural scientist with 20+ years experience in sustainable farming and business development.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    bio: 'Supply chain expert specializing in agricultural logistics and distribution optimization.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Head of Research',
    bio: 'Leading agricultural researcher focused on crop improvement and sustainable farming innovations.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  },
  {
    name: 'James Wilson',
    role: 'Technology Director',
    bio: 'Technology innovator building digital solutions for modern agriculture and e-commerce.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  }
];

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'Started as a small family farm in Cape Town' },
  { year: '2012', title: 'First Digital Platform', description: 'Launched online marketplace for local farmers' },
  { year: '2015', title: 'Regional Expansion', description: 'Expanded operations to Johannesburg and Durban' },
  { year: '2018', title: 'Consultancy Services', description: 'Added business consultancy for agricultural enterprises' },
  { year: '2021', title: 'Supply Chain Innovation', description: 'Implemented advanced logistics and warehousing' },
  { year: '2024', title: 'AI Integration', description: 'Pioneering AI-driven agricultural solutions' }
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Agricultural cobwebs for ambiance */}
      <Cobweb 
        size="xl" 
        position="top-left" 
        color="#047857" 
        opacity={0.4}
        variant="agricultural"
        className="animate-cobweb-sway"
      />
      <Cobweb 
        size="lg" 
        position="bottom-right" 
        color="#059669" 
        opacity={0.35}
        variant="agricultural"
        className="animate-web-shimmer"
      />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                Established 2009
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cultivating the Future of
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Agriculture</span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                For over 15 years, Grenmetey Investments has been connecting farmers with consumers, 
                revolutionizing agricultural commerce through innovation, sustainability, and community support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get in Touch
                </Link>
                
                <Link
                  to="/consultancy"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Agricultural landscape"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                    <div className="text-lg font-bold text-gray-900">+150% YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To revolutionize agricultural commerce by creating a sustainable, technology-driven marketplace 
                that empowers farmers, ensures food security, and promotes environmentally responsible farming practices 
                across South Africa and beyond.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Empower local farmers and producers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Provide fresh, quality agricultural products</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Build sustainable supply chains</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become Africa's leading agricultural marketplace, pioneering innovative solutions that transform 
                how food is produced, distributed, and consumed while creating lasting positive impact on communities 
                and the environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Lead agricultural innovation in Africa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Create sustainable food systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Drive positive environmental change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-green-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Agricultural Revolution?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Whether you're a farmer looking to reach new markets or a consumer seeking fresh, quality products, 
              we're here to help you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partner-register"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Users className="h-5 w-5 mr-2" />
                Become a Partner
              </Link>
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Shop Products
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
