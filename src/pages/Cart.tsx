import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  ArrowLeft,
  ArrowRight,
  Truck,
  Shield,
  Leaf,
  Clock,
  Gift,
  Tag,
  CreditCard,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const recommendedProducts = [
  {
    id: 7,
    name: 'Organic Spinach',
    price: 28.99,
    originalPrice: 35.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
    farmer: 'Green Fields Farm'
  },
  {
    id: 8,
    name: 'Fresh Basil',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1545121089-8eb9e30de67c?w=300',
    farmer: 'Herb Garden Co.'
  },
  {
    id: 9,
    name: 'Organic Cucumbers',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1589217157232-464b505b197f?w=300',
    farmer: 'Valley Fresh'
  }
];

export function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'fresh10') {
      setAppliedCoupon('FRESH10');
      setCouponCode('');
      alert('Coupon applied! 10% off your order.');
    } else {
      alert('Invalid coupon code. Try "FRESH10" for 10% off!');
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/checkout');
    }, 1500);
  };

  const discount = appliedCoupon === 'FRESH10' ? cart.subtotal * 0.1 : 0;
  const finalTotal = cart.subtotal - discount + cart.tax + cart.shipping;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>

            {/* Featured Products */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Start with these fresh picks</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">by {product.farmer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">R{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                          )}
                        </div>
                        <Link
                          to={`/products/${product.id}`}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-1">{cart.items.length} {cart.items.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Banner */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">
                    {cart.subtotal >= 500 ? '🎉 Free delivery unlocked!' : `Add R${(500 - cart.subtotal).toFixed(2)} more for free delivery`}
                  </p>
                  <p className="text-sm text-green-700">
                    {cart.subtotal >= 500 ? 'Your order qualifies for free standard delivery' : 'Free delivery on orders over R500'}
                  </p>
                </div>
              </div>
              {cart.subtotal < 500 && (
                <div className="mt-3 bg-green-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((cart.subtotal / 500) * 100, 100)}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.items.map((item) => (
                  <div key={item.productId} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              <Link to={`/products/${item.productId}`} className="hover:text-green-600">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-600">by {item.product.partnerName}</p>
                            
                            {/* Product badges */}
                            <div className="flex items-center space-x-2 mt-2">
                              {item.product.organicCertified && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <Leaf className="h-3 w-3 mr-1" />
                                  Organic
                                </span>
                              )}
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Shield className="h-3 w-3 mr-1" />
                                Fresh Guarantee
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              R{(item.product.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-600">
                              R{item.product.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-700">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                className="p-2 hover:bg-gray-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="p-2 hover:bg-gray-50 transition-colors"
                                disabled={item.quantity >= item.product.stock}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-3">
                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                              <Heart className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.productId)}
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>

                        {/* Stock warning */}
                        {item.product.stock < 10 && (
                          <p className="text-orange-600 text-sm mt-2">
                            <Clock className="h-4 w-4 inline mr-1" />
                            Only {item.product.stock} left in stock
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <Gift className="h-5 w-5 inline mr-2" />
                Promo Code
              </h3>
              {!appliedCoupon ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Apply Coupon
                  </button>
                  <p className="text-xs text-gray-500">Try "FRESH10" for 10% off!</p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-medium">
                    <Tag className="h-4 w-4 inline mr-1" />
                    {appliedCoupon} Applied
                  </span>
                  <button
                    onClick={() => setAppliedCoupon(null)}
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">R{cart.subtotal.toFixed(2)}</span>
                </div>
                
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-R{discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {cart.subtotal >= 500 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `R${cart.shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">R{cart.tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>R{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Secure Checkout</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Secure SSL encrypted payment
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <CreditCard className="h-5 w-5 inline mr-2" />
                We Accept
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">Visa</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">Mastercard</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-700">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {cart.items.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">by {product.farmer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">R{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                        )}
                      </div>
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
