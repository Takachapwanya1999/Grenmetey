import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, AlertCircle, CheckCircle, Leaf, User, Shield, Truck, Clock, Star, ArrowRight, Gift } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [recentVisitors, setRecentVisitors] = useState(0);

  const { login } = useAuth();
  const navigate = useNavigate();

  // Simulate live visitor count (Grenmetey Investments-style)
  useEffect(() => {
    const interval = setInterval(() => {
      setRecentVisitors(Math.floor(Math.random() * 50) + 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/');
      }, 1500);
      
    } catch {
      setErrors({ general: 'Invalid email or password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login would be implemented here');
  };

  const handleFacebookLogin = () => {
    alert('Facebook login would be implemented here');
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-lg transform animate-bounce-in">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome back to Grenmetey Investments!</h2>
          <p className="text-gray-600 mb-6 text-lg">You're all set to discover fresh, local produce.</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
            <span className="text-green-600 font-medium">Taking you to your dashboard...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Grenmetey Investments-style top notification bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium flex items-center justify-center space-x-2">
            <Gift className="h-4 w-4" />
            <span>New customers get R50 off their first order over R300!</span>
            <ArrowRight className="h-4 w-4 animate-pulse" />
          </p>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left side - Enhanced Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Enhanced Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-4 rounded-3xl shadow-xl transform hover:scale-105 transition-transform">
                <Leaf className="h-10 w-10" />
              </div>
            </div>

            <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              Welcome back!
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Sign in to continue your fresh produce journey
            </p>
            
            {/* Live visitor count */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{recentVisitors} farmers online now</span>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-10 px-8 shadow-2xl rounded-3xl border border-gray-100 backdrop-blur-lg">
              {/* Enhanced Social Login Buttons */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center px-6 py-4 border-2 border-gray-200 rounded-2xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-105 group"
                >
                  <svg className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Continue with Google</span>
                </button>
                
                <button
                  onClick={handleFacebookLogin}
                  className="w-full flex items-center justify-center px-6 py-4 border-2 border-blue-200 rounded-2xl shadow-sm bg-blue-50 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 transform hover:scale-105 group"
                >
                  <svg className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Continue with Facebook</span>
                </button>
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gradient-to-r from-gray-200 to-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or sign in with email</span>
                </div>
              </div>

              {/* Enhanced Error Message */}
              {errors.general && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 rounded-xl flex items-center space-x-3 animate-shake">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                  <span className="text-red-700 font-medium">{errors.general}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enhanced Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-12 pr-4 py-4 border-2 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center animate-slide-down">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Enhanced Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`block w-full pl-12 pr-12 py-4 border-2 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg ${
                        errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-300'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-50 rounded-r-2xl transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 flex items-center animate-slide-down">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Enhanced Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-green-600 focus:ring-green-500 border-2 border-gray-300 rounded-lg"
                    />
                    <label htmlFor="rememberMe" className="ml-3 block text-sm font-medium text-gray-700">
                      Keep me signed in
                    </label>
                  </div>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-green-600 hover:text-green-500 font-semibold hover:underline transition-all"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      <span>Signing you in...</span>
                    </>
                  ) : (
                    <>
                      <User className="h-5 w-5 mr-3" />
                      <span>Sign in to Grenmetey Investments</span>
                    </>
                  )}
                </button>
              </form>

              {/* Enhanced Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  New to Grenmetey Investments?{' '}
                  <Link 
                    to="/register" 
                    className="font-bold text-green-600 hover:text-green-500 hover:underline transition-all transform hover:scale-105 inline-block"
                  >
                    Create your free account
                  </Link>
                </p>
              </div>
            </div>

            {/* Enhanced Partner Login */}
            <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700 font-medium">
                🌾 Are you a farmer looking to sell your produce?{' '}
                <Link 
                  to="/partner-register" 
                  className="font-bold text-orange-600 hover:text-orange-500 hover:underline transition-all"
                >
                  Join as a partner
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Right side - Grenmetey Investments-style features showcase */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>

          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              South Africa's
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                #1 Fresh Produce
              </span>
              Marketplace
            </h1>
            
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join over <strong>50,000+ happy customers</strong> who trust us for fresh, 
              organic produce delivered directly from local farms to their doorstep.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 transform hover:scale-105 transition-transform">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Truck className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xl font-bold">Free Delivery</div>
                  <div className="text-lg opacity-90">On orders over R300</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 transform hover:scale-105 transition-transform">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xl font-bold">Quality Guarantee</div>
                  <div className="text-lg opacity-90">100% fresh or money back</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 transform hover:scale-105 transition-transform">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xl font-bold">Same Day Delivery</div>
                  <div className="text-lg opacity-90">Order before 2PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 transform hover:scale-105 transition-transform">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Star className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xl font-bold">4.9/5 Star Rating</div>
                  <div className="text-lg opacity-90">From 12,000+ reviews</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-3">🎉 Special Welcome Offer</h3>
              <p className="text-lg opacity-90 mb-4">
                Get R50 off your first order + free delivery when you spend R300 or more!
              </p>
              <div className="flex items-center text-yellow-300">
                <Gift className="h-5 w-5 mr-2" />
                <span className="font-semibold">Use code: WELCOME50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
