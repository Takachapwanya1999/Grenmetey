import { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Mic, 
  Camera, 
  Image, 
  Cloud, 
  TrendingUp,
  Thermometer,
  Droplets,
  Sun,
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Users,
  BarChart3,
  DollarSign
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedComponents';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  metadata?: {
    location?: string;
    crop?: string;
    confidence?: number;
    actions?: string[];
  };
}

export function AIAgriculturalAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI Agricultural Assistant. I can help you with crop planning, pest identification, weather insights, market prices, and farming best practices. What would you like to know today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "When should I plant tomatoes in Johannesburg?",
    "What's the current market price for maize?",
    "How do I identify pest damage on my crops?",
    "What's the weather forecast for my farm?",
    "Show me profitable crops for this season"
  ];

  const features = [
    {
      id: 'chat',
      name: 'AI Chat Assistant',
      icon: Bot,
      description: 'Ask any farming question and get expert advice',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'plant-id',
      name: 'Plant Disease Detection',
      icon: Camera,
      description: 'Upload plant photos for instant disease identification',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'weather',
      name: 'Weather Intelligence',
      icon: Cloud,
      description: 'Hyperlocal weather forecasts and farming recommendations',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'market',
      name: 'Market Insights',
      icon: TrendingUp,
      description: 'Real-time crop prices and market trends',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        metadata: {
          confidence: 95,
          actions: ['Save to notes', 'Set reminder', 'Share with team']
        }
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (question: string): string => {
    const responses = {
      tomato: "🍅 **Tomato Planting in Johannesburg:**\n\n• **Best Time:** September-October (spring planting)\n• **Soil Temp:** Wait for soil to reach 16°C+\n• **Varieties:** Roma, Cherry, or Beefsteak work well\n• **Spacing:** 60cm apart in rows\n• **Water:** 2-3cm per week consistently\n• **Harvest:** 75-85 days from transplant\n\n💡 **Pro Tip:** Start seeds indoors 6-8 weeks before last frost date!",
      
      maize: "🌽 **Current Maize Prices (Johannesburg):**\n\n• **White Maize:** R4,850/ton (↑2.3% this week)\n• **Yellow Maize:** R4,750/ton (↑1.8% this week)\n• **Futures (Mar 2025):** R4,950/ton\n\n📈 **Market Outlook:**\n• Strong export demand driving prices up\n• Weather concerns in key growing regions\n• Recommend selling 30% of harvest now\n\n🎯 **Action:** Consider forward contracts for remaining stock",
      
      pest: "🐛 **Pest Identification Guide:**\n\nTo help identify pests accurately:\n\n1. **Take clear photos** of affected plants\n2. **Note symptoms:** holes, discoloration, wilting\n3. **Check timing:** when did damage start?\n4. **Look for insects:** on leaves, soil, stems\n\n📸 **Use our Plant Disease Detection** feature for instant AI identification!\n\n🔍 **Common pests this season:**\n• Aphids, Thrips, Bollworm, Cutworm",
      
      weather: "🌤️ **Johannesburg Farm Weather (Next 7 Days):**\n\n**Today:** 26°C/15°C, Partly cloudy\n**Tomorrow:** 28°C/16°C, Sunny ☀️\n**Thu:** 24°C/14°C, Light rain 🌦️ (15mm)\n**Fri:** 22°C/12°C, Cloudy\n**Weekend:** Sunny, 25°C highs\n\n⚠️ **Farming Alerts:**\n• Thursday rain perfect for recently planted crops\n• UV levels high - protect workers\n• Good drying conditions Friday-Sunday",
      
      default: "I understand you're asking about farming. Let me help you with that! Could you be more specific about:\n\n🌱 **Crop type** you're working with\n📍 **Your location** for localized advice\n🎯 **Specific challenge** you're facing\n\nI can provide detailed guidance on planting, pest management, market prices, weather, and best practices for South African farming conditions."
    };

    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('tomato')) return responses.tomato;
    if (lowerQuestion.includes('maize') || lowerQuestion.includes('corn') || lowerQuestion.includes('price')) return responses.maize;
    if (lowerQuestion.includes('pest') || lowerQuestion.includes('disease') || lowerQuestion.includes('bug')) return responses.pest;
    if (lowerQuestion.includes('weather') || lowerQuestion.includes('rain') || lowerQuestion.includes('forecast')) return responses.weather;
    
    return responses.default;
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedSection className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              AI Agricultural Assistant
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Personal
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Farming AI Expert
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get instant expert advice on crop planning, pest identification, weather insights, and market prices. 
              Powered by advanced AI trained on African agricultural data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setSelectedFeature('chat')}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Bot className="h-5 w-5 mr-2" />
                Start Chatting
              </button>
              <button 
                onClick={() => setSelectedFeature('plant-id')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                <Camera className="h-5 w-5 mr-2" />
                Identify Plant Disease
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Selection */}
      <AnimatedSection className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedFeature === feature.id
                    ? 'bg-gradient-to-br ' + feature.color + ' text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <feature.icon className={`h-8 w-8 mx-auto mb-3 ${
                  selectedFeature === feature.id ? 'text-white' : 'text-gray-600'
                }`} />
                <h3 className={`font-semibold mb-2 ${
                  selectedFeature === feature.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.name}
                </h3>
                <p className={`text-sm ${
                  selectedFeature === feature.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Main Interface */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-lg h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-green-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">AgriBot Assistant</h3>
                        <p className="text-sm text-green-600">● Online - Ready to help</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Mic className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Camera className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        {message.metadata?.confidence && (
                          <div className="mt-2 flex items-center text-xs opacity-75">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {message.metadata.confidence}% confidence
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask anything about farming..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Image className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
                <div className="space-y-3">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left p-3 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* Live Data */}
            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Farm Data</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Temperature</span>
                    </div>
                    <span className="text-blue-600 font-bold">26°C</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium">Humidity</span>
                    </div>
                    <span className="text-green-600 font-bold">65%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-sm font-medium">UV Index</span>
                    </div>
                    <span className="text-yellow-600 font-bold">8 High</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">Maize Price</span>
                    </div>
                    <span className="text-purple-600 font-bold">R4,850/ton</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Alerts */}
            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Alerts</h3>
                <div className="space-y-3">
                  <div className="flex items-start p-3 bg-orange-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-900">Pest Risk High</p>
                      <p className="text-xs text-orange-700">Bollworm activity detected in area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                    <Cloud className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Rain Expected</p>
                      <p className="text-xs text-blue-700">15mm Thursday - good for irrigation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Market Opportunity</p>
                      <p className="text-xs text-green-700">Tomato prices up 12% this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upgrade to Premium AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock advanced features and get even more personalized farming insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Premium</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Offline AI assistance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Voice commands</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />GPS field mapping</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Camera plant ID</li>
                </ul>
                <div className="text-3xl font-bold text-green-600 mb-2">R99/month</div>
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-green-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Analytics</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced crop modeling</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Yield predictions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Financial planning tools</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom reports</li>
                </ul>
                <div className="text-3xl font-bold text-green-600 mb-2">R199/month</div>
                <button className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Team</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Multi-farm management</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Team collaboration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />API access</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 expert support</li>
                </ul>
                <div className="text-3xl font-bold text-green-600 mb-2">Custom</div>
                <button className="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
