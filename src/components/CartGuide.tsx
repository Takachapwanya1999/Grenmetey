import { useState, useEffect } from 'react';
import { X, ShoppingCart, ArrowRight } from 'lucide-react';

export function CartGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if the guide has been shown before
    const guideShown = localStorage.getItem('cartGuideShown');
    
    if (!guideShown) {
      // Show the guide after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('cartGuideShown', 'true');
  };

  const handleGotIt = () => {
    handleClose();
  };

  if (!isVisible || hasBeenShown && localStorage.getItem('cartGuideShown')) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-scale">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <ShoppingCart className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Welcome to Your Cart!</h3>
              <p className="text-green-100">Multiple ways to access your cart</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Header Cart Button</h4>
                <p className="text-sm text-gray-600">
                  Click the prominent green cart button in the header to view your full cart
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Floating Cart Widget</h4>
                <p className="text-sm text-gray-600">
                  Use the floating cart button (bottom-right) for quick access anywhere on the site
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Complete Checkout</h4>
                <p className="text-sm text-gray-600">
                  Secure 4-step checkout process with multiple payment options
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center space-x-2 text-blue-800">
              <span className="text-lg">🚚</span>
              <span className="font-medium text-sm">
                Free delivery on orders over R500!
              </span>
            </div>
          </div>

          <button
            onClick={handleGotIt}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Got It!</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
