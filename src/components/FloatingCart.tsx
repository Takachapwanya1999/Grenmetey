import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function FloatingCart() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();
  
  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Don't show if cart is empty
  if (cartItemsCount === 0) return null;

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group cart-pulse cart-glow cart-attention"
        >
          <div className="relative">
            <ShoppingCart className="h-8 w-8" />
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full h-7 w-7 flex items-center justify-center font-bold cart-badge-bounce border-2 border-white">
              {cartItemsCount}
            </span>
          </div>
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </button>
      </div>

      {/* Expanded Cart Panel */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden floating-cart-enter">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Package className="h-6 w-6" />
                <div>
                  <h3 className="text-lg font-bold">Your Cart</h3>
                  <p className="text-green-100 text-sm">{cartItemsCount} items</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 max-h-64 overflow-y-auto">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                    <img 
                      src={item.product.images?.[0] || '/placeholder-product.jpg'} 
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate text-sm">{item.product.name}</p>
                      <p className="text-green-600 font-bold text-sm">R{item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary & Actions */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-green-600">R{cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/cart"
                  onClick={() => setIsExpanded(false)}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors text-center block"
                >
                  View Full Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsExpanded(false)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Checkout Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {cart.subtotal < 500 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 text-center">
                    Add R{(500 - cart.subtotal).toFixed(2)} more for free delivery! 🚚
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
