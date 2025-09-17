import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Leaf, AlertCircle, Sparkles } from 'lucide-react';
import { useJSONPrompt } from '../hooks/useJSONPrompt';
import type { JSONPromptResponse, AdviceRecommendation } from '../types/jsonPrompt';

interface AgriAssistantProps {
  isOpen: boolean;
  onClose: () => void; 
  initialQuery?: string; 
}

export function AgriAssistant({ isOpen, onClose, initialQuery = '' }: AgriAssistantProps) {
  const [query, setQuery] = useState(initialQuery);
  const [conversation, setConversation] = useState<Array<{
    id: string;
    type: 'user' | 'assistant';
    content: string;
    response?: JSONPromptResponse;
    timestamp: Date;
  }>>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const {
    searchProducts,
    getPestControlAdvice,
    getSoilAdvice,
    getCropPlanningAdvice,
    getWeatherImpactAdvice,
    getLivestockAdvice,
    getSustainabilityAdvice,
    getEquipmentAdvice,
    getMarketAdvice,
    getGeneralFarmingAdvice,
    isLoading,
    error
  } = useJSONPrompt();
  
  // Recording and upload helpers were removed because they are not used in the current UI.
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: query.trim(),
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    const currentQuery = query.trim();
    setQuery('');

    try {
      let response: JSONPromptResponse | null = null;
      const lowerQuery = currentQuery.toLowerCase();

      // Enhanced natural conversation detection
      const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'howdy'];
      const farewells = ['goodbye', 'bye', 'see you', 'thank you', 'thanks', 'have a good day', 'take care'];
      const generalQuestions = [
        'how are you', 'what can you do', 'who are you', 'what is this', 'help me',
        'what is grenmetey investments', 'tell me about', 'explain', 'how does this work', 'what do you know'
      ];

      // Handle greetings with warm, personal response
      if (greetings.some(greeting => lowerQuery.includes(greeting))) {
        response = {
          success: true,
          data: {
            recommendations: [{
              title: "Welcome to Grenmetey Investments! 🌱",
              category: 'planting' as const,
              priority: 'high' as const,
              urgency: 'immediate' as const,
              description: "Hi there! I'm your friendly AI agricultural assistant. I'm here to help you with all things farming and agriculture. Whether you're a seasoned farmer or just starting out, I can assist with crop planning, livestock care, weather advice, soil health, product recommendations, market insights, and sustainable farming practices.",
              steps: [
                "Ask me anything in your own words - I understand natural language!",
                "Try questions like 'How do I grow tomatoes?' or 'What's good for pest control?'",
                "I can help you find products, give farming advice, and answer agricultural questions"
              ],
              expectedOutcome: "Get personalized agricultural advice and recommendations",
              timeframe: "Available 24/7",
              expertTip: "Start with your specific farming challenge or question - I'm here to help!"
            }],
            insights: [
              "🌾 Crop planning and growing tips",
              "🐄 Livestock care and management", 
              "🌤️ Weather and seasonal advice",
              "🌱 Soil health and fertilization",
              "🛒 Product recommendations",
              "💰 Market insights and pricing",
              "🌍 Sustainable farming practices"
            ]
          },
          metadata: {
            confidence: 1.0,
            sources: ['Grenmetey Investments AI Assistant'],
            lastUpdated: new Date().toISOString(),
            expertVerified: true
          }
        };
      }
      // Handle farewells with appreciation
      else if (farewells.some(farewell => lowerQuery.includes(farewell))) {
        response = {
          success: true,
          data: {
            recommendations: [{
              title: "Thank you for using Grenmetey Investments! 🌾",
              category: 'marketing' as const,
              priority: 'medium' as const,
              urgency: 'immediate' as const,
              description: "You're very welcome! I'm glad I could help you today. Remember, I'm always here whenever you need agricultural advice, product recommendations, or farming guidance. Have a wonderful day and happy farming! 🚜✨",
              steps: [
                "Come back anytime for agricultural advice",
                "I can help with product recommendations and farming guidance",
                "Feel free to ask about any farming challenges you face"
              ],
              expectedOutcome: "Continued agricultural support whenever needed",
              timeframe: "Always available",
              expertTip: "Don't hesitate to return with any farming questions - I'm always learning and improving!"
            }],
            insights: [
              "Growing crops and plants",
              "Caring for livestock", 
              "Finding the right farming products",
              "Weather and seasonal planning",
              "Sustainable farming practices"
            ]
          },
          metadata: {
            confidence: 1.0,
            sources: ['Grenmetey Investments AI Assistant'],
            lastUpdated: new Date().toISOString(),
            expertVerified: true
          }
        };
      }
      // Handle questions about the assistant or platform
      else if (generalQuestions.some(q => lowerQuery.includes(q)) || 
               lowerQuery.includes('grenmetey investments') || 
               lowerQuery.includes('what can you')) {
        response = {
          success: true,
          data: {
            recommendations: [{
              title: "About Your Grenmetey Investments AI Assistant 🤖🌱",
              category: 'equipment' as const,
              priority: 'high' as const,
              urgency: 'immediate' as const,
              description: "I'm Grenmetey Investments' AI-powered agricultural assistant, and I love talking about farming! I'm smart & conversational - I understand natural language, so talk to me like you would a friend! I have extensive knowledge about crop management, livestock health, soil science, pest management, weather planning, sustainable practices, equipment, and market trends.",
              steps: [
                "Ask: 'My tomatoes have yellow spots, what should I do?'",
                "Try: 'I need help choosing the right fertilizer'",
                "Say: 'What's the best time to plant corn in my area?'",
                "Request: 'How do I improve my soil quality?'"
              ],
              expectedOutcome: "Get expert agricultural advice tailored to your needs",
              timeframe: "Instant responses, 24/7 availability",
              expertTip: "The more specific your question, the more targeted and helpful my advice will be!"
            }],
            insights: [
              "🧠 Smart & Conversational - understand natural language",
              "🌾 Agricultural Expert - extensive farming knowledge",
              "🛒 Product Helper - recommend perfect supplies",
              "💬 Always Learning - better with each conversation",
              "🕐 Available 24/7 for farming questions",
              "🎯 Specific problem-solving for your farm"
            ]
          },
          metadata: {
            confidence: 1.0,
            sources: ['Grenmetey Investments AI Assistant'],
            lastUpdated: new Date().toISOString(),
            expertVerified: true
          }
        };
      }
      // Enhanced agricultural topic detection with natural language understanding
      else if (lowerQuery.includes('search') || lowerQuery.includes('find') || lowerQuery.includes('buy') || 
               lowerQuery.includes('product') || lowerQuery.includes('need') || lowerQuery.includes('looking for') ||
               lowerQuery.includes('recommend') || lowerQuery.includes('suggest') || lowerQuery.includes('where can i get')) {
        response = await searchProducts(currentQuery);
      } 
      else if (lowerQuery.includes('pest') || lowerQuery.includes('bug') || lowerQuery.includes('insect') || 
               lowerQuery.includes('disease') || lowerQuery.includes('fungus') || lowerQuery.includes('infection') ||
               lowerQuery.includes('spots on') || lowerQuery.includes('eating my') || lowerQuery.includes('damaged')) {
        response = await getPestControlAdvice(currentQuery);
      } 
      else if (lowerQuery.includes('soil') || lowerQuery.includes('fertilizer') || lowerQuery.includes('compost') || 
               lowerQuery.includes('nutrient') || lowerQuery.includes('ph') || lowerQuery.includes('ground') ||
               lowerQuery.includes('improve') && lowerQuery.includes('dirt')) {
        response = await getSoilAdvice(currentQuery);
      } 
      else if (lowerQuery.includes('plant') || lowerQuery.includes('crop') || lowerQuery.includes('grow') || 
               lowerQuery.includes('harvest') || lowerQuery.includes('seed') || lowerQuery.includes('when to') ||
               lowerQuery.includes('how to grow') || lowerQuery.includes('farming season')) {
        response = await getCropPlanningAdvice(currentQuery);
      } 
      else if (lowerQuery.includes('weather') || lowerQuery.includes('rain') || lowerQuery.includes('drought') || 
               lowerQuery.includes('temperature') || lowerQuery.includes('climate') || lowerQuery.includes('season') ||
               lowerQuery.includes('irrigation') || lowerQuery.includes('water') || lowerQuery.includes('frost')) {
        response = await getWeatherImpactAdvice(currentQuery);
      }
      else if (lowerQuery.includes('livestock') || lowerQuery.includes('cattle') || lowerQuery.includes('cow') || 
               lowerQuery.includes('pig') || lowerQuery.includes('chicken') || lowerQuery.includes('goat') || 
               lowerQuery.includes('sheep') || lowerQuery.includes('animal') || lowerQuery.includes('feed')) {
        response = await getLivestockAdvice(currentQuery);
      }
      else if (lowerQuery.includes('organic') || lowerQuery.includes('sustainable') || lowerQuery.includes('eco') || 
               lowerQuery.includes('natural') || lowerQuery.includes('environment') || lowerQuery.includes('green')) {
        response = await getSustainabilityAdvice(currentQuery);
      }
      else if (lowerQuery.includes('equipment') || lowerQuery.includes('machinery') || lowerQuery.includes('tractor') || 
               lowerQuery.includes('tool') || lowerQuery.includes('implement')) {
        response = await getEquipmentAdvice(currentQuery);
      }
      else if (lowerQuery.includes('market') || lowerQuery.includes('price') || lowerQuery.includes('sell') || 
               lowerQuery.includes('profit') || lowerQuery.includes('business') || lowerQuery.includes('cost')) {
        response = await getMarketAdvice(currentQuery);
      }
      // Handle personal/conversational farming questions
      else if (lowerQuery.includes('my farm') || lowerQuery.includes('i have') || lowerQuery.includes('i am') ||
               lowerQuery.includes('help me') || lowerQuery.includes('please') || lowerQuery.includes('advice')) {
        response = await getGeneralFarmingAdvice(currentQuery);
      }
      // Default: treat as general farming question with conversational approach
      else {
        response = await getGeneralFarmingAdvice(`I'd like to know about: ${currentQuery}`);
      }

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant' as const,
        content: generateResponseText(response),
        response: response || undefined,
        timestamp: new Date()
      };

      setConversation(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Conversation error:', err);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant' as const,
        content: "I apologize, but I'm having a bit of trouble right now. But don't worry - I'm still here to help! 😊\n\nTry asking me about:\n• Specific crops you want to grow\n• Problems with pests or diseases\n• Finding agricultural products\n• Soil and fertilizer questions\n• Livestock care advice\n\nWhat would you like to chat about?",
        timestamp: new Date()
      };
      setConversation(prev => [...prev, errorMessage]);
    }
  };

  const generateResponseText = (response: JSONPromptResponse | null): string => {
    if (!response || !response.success) {
      return "I'm sorry, I couldn't generate a helpful response for your query. Please try rephrasing your question or contact our agricultural experts.";
    }

    let text = '';
    
    if (response.data.insights && response.data.insights.length > 0) {
      text += '🌟 **Key Insights:**\n';
      response.data.insights.forEach(insight => {
        text += `• ${insight}\n`;
      });
      text += '\n';
    }

    if (response.data.recommendations && response.data.recommendations.length > 0) {
      text += '📋 **Recommendations:**\n';
      response.data.recommendations.slice(0, 3).forEach((rec, index) => {
        if ('name' in rec) {
          // Product recommendation
          text += `${index + 1}. **${rec.name}** - R${rec.price}\n`;
          text += `   ${rec.description}\n`;
          if ((rec as any).matchReasons && (rec as any).matchReasons.length > 0) {
            text += `   ✓ ${(rec as any).matchReasons.join(', ')}\n`;
          }
        } else {
          // Advice recommendation - narrow to AdviceRecommendation for TS
          const advice = rec as AdviceRecommendation;
          text += `${index + 1}. **${advice.title}**\n`;
          text += `   ${advice.description}\n`;
          text += `   💡 Expert Tip: ${advice.expertTip}\n`;
        }
        text += '\n';
      });
    }

    if (response.data.actionItems && response.data.actionItems.length > 0) {
      text += '✅ **Next Steps:**\n';
      response.data.actionItems.forEach(item => {
        text += `• ${item}\n`;
      });
      text += '\n';
    }

    if (response.data.seasonalTips && response.data.seasonalTips.length > 0) {
      text += '🌱 **Seasonal Tips:**\n';
      response.data.seasonalTips.forEach(tip => {
        text += `• ${tip}\n`;
      });
      text += '\n';
    }

    if (response.data.weatherAlerts && response.data.weatherAlerts.length > 0) {
      text += '⚠️ **Weather Alerts:**\n';
      response.data.weatherAlerts.forEach(alert => {
        text += `• ${alert}\n`;
      });
    }

    return text || "I've processed your request. Would you like more specific information about any aspect?";
  };

  const quickPrompts = [
    "Find organic tomato seeds for small farm",
    "How to control aphids naturally?",
    "Best crops for drought conditions",
    "Soil preparation for vegetables",
    "Weather impact on maize farming",
    "Livestock feeding strategies",
    "Sustainable farming practices",
    "Crop rotation benefits"
  ];
  
  // Removed unused handlers: image/file upload, feedback, clipboard, and regenerate helpers
  
  // formatAIResponse removed — previously used for file-upload simulated responses.

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-3 rounded-xl">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Grenmetey Investments AI Assistant</h2>
              <p className="text-sm text-gray-600">Your personal agricultural expert</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white rounded-lg"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {conversation.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to Grenmetey Investments AI!</h3>
              <p className="text-gray-600 mb-6">I'm your comprehensive agricultural expert! Ask me anything about farming, crops, livestock, soil, pests, equipment, sustainability, marketing, or any agricultural topic.</p>
              
              <div className="text-left max-w-md mx-auto">
                <p className="text-sm font-medium text-gray-700 mb-3">Try asking about:</p>
                <div className="space-y-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(prompt)}
                      className="block w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-700 transition-colors border border-transparent hover:border-green-200"
                    >
                      💡 {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {conversation.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.type === 'assistant' ? (
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.content.split('\n').map((line, index) => {
                        if (line.startsWith('**') && line.endsWith('**')) {
                          return (
                            <div key={index} className="font-semibold text-green-700 mt-3 mb-1">
                              {line.replace(/\*\*/g, '')}
                            </div>
                          );
                        }
                        if (line.startsWith('•')) {
                          return (
                            <div key={index} className="ml-4 mb-1">
                              {line}
                            </div>
                          );
                        }
                        if (line.startsWith('✓')) {
                          return (
                            <div key={index} className="ml-6 text-green-600 text-xs">
                              {line}
                            </div>
                          );
                        }
                        return line ? <div key={index} className="mb-1">{line}</div> : <br key={index} />;
                      })}
                    </div>
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'order-1 mr-3 bg-gray-300' : 'order-2 ml-3 bg-green-100'
              }`}>
                {message.type === 'user' ? (
                  <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                ) : (
                  <Leaf className="w-4 h-4 text-green-600" />
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-4 rounded-2xl max-w-xs">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-green-600" />
                  <span className="text-sm text-gray-600">Analyzing your request...</span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center space-x-2 text-red-700">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{error}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about farming, products, or agricultural advice..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-xl transition-colors flex items-center space-x-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI-powered agricultural assistance for South African farmers
          </p>
        </div>
      </div>
    </div>
  );
}
