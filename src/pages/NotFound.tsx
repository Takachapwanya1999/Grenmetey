import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone, MessageCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-green-600 mb-4">404</div>
          <div className="relative">
            <div className="bg-green-100 w-32 h-32 rounded-full mx-auto flex items-center justify-center">
              <Search className="h-16 w-16 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">!</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We couldn't find the agricultural page you're looking for. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Or try these popular pages:</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link
              to="/products"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Products
            </Link>
            <Link
              to="/consultancy"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Consultancy
            </Link>
            <Link
              to="/supply-chain"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Supply Chain
            </Link>
            <Link
              to="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
          <div className="space-y-3">
            <a
              href="tel:+27111234567"
              className="flex items-center justify-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Support: +27 11 123 4567
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
