import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function AccessDenied() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access denied</h1>
        <p className="text-gray-600 mb-6">
          You need administrator privileges to view this page.
        </p>
        <div className="flex items-center justify-center space-x-3">
          <Link
            to="/"
            className="px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            to="/login"
            className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
