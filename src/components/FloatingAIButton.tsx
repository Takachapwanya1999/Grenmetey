import { useState } from 'react';
import { Bot, MessageCircle, X, Sparkles } from 'lucide-react';
import { AgriAssistant } from './AgriAssistant';

export function FloatingAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          {/* Expansion Panel */}
          {isExpanded && !isOpen && (
            <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-80 mb-2">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Need farming advice?</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Ask me about crops, pests, soil health, products, and more!
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setIsExpanded(false);
                      }}
                      className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-green-700 transition-colors"
                    >
                      Start Chat
                    </button>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-500 hover:text-gray-700 px-2 py-1.5 text-xs"
                    >
                      Later
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => {
              if (isExpanded) {
                setIsExpanded(false);
                setIsOpen(true);
              } else {
                setIsExpanded(true);
              }
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="relative">
              {isExpanded ? (
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              ) : (
                <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
              )}
              {/* Pulsing indicator */}
              {!isExpanded && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              )}
            </div>
          </button>

          {/* Tooltip */}
          {!isExpanded && !isOpen && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Ask Grenmetey Investments AI
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          )}
        </div>
      </div>

      {/* AI Assistant Modal */}
      <AgriAssistant 
        isOpen={isOpen} 
        onClose={() => {
          setIsOpen(false);
          setIsExpanded(false);
        }}
      />
    </>
  );
}
