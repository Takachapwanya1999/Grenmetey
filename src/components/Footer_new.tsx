import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/products' },
      { name: 'Fresh Vegetables', href: '/products?category=vegetables' },
      { name: 'Organic Fruits', href: '/products?category=fruits' },
      { name: 'Grains & Cereals', href: '/products?category=grains' },
      { name: 'Dairy Products', href: '/products?category=dairy' },
      { name: 'Fresh Herbs', href: '/products?category=herbs' }
    ],
    account: [
      { name: 'My Account', href: '/profile' },
      { name: 'Order History', href: '/profile?tab=orders' },
      { name: 'Wishlist', href: '/profile?tab=wishlist' },
      { name: 'Track Order', href: '/profile?tab=tracking' },
      { name: 'Returns', href: '/profile?tab=returns' },
      { name: 'Gift Cards', href: '/gift-cards' }
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'About Us', href: '/about' },
      { name: 'FAQs', href: '/support?tab=faq' },
      { name: 'Shipping Info', href: '/support?tab=shipping' },
      { name: 'Returns Policy', href: '/support?tab=returns' }
    ],
    partners: [
      { name: 'Become a Partner', href: '/partner-register' },
      { name: 'Partner Login', href: '/partner-dashboard' },
      { name: 'Partner Resources', href: '/partner-resources' },
      { name: 'Sell on Grenmetey Investments', href: '/partner-register' },
      { name: 'Farmer Programs', href: '/farmer-programs' },
      { name: 'Partner Support', href: '/partner-support' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Fresh with Grenmetey Investments
              </h3>
              <p className="text-gray-300">
                Get the latest updates on fresh arrivals, seasonal produce, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-agricultural-600 focus:border-agricultural-600 transition-colors"
                  />
                  <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="bg-agricultural-600 hover:bg-agricultural-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Grenmetey Investments</span>
                <div className="text-sm text-gray-400 -mt-1">Fresh • Local • Trusted</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Africa's premier agricultural marketplace connecting farmers directly with consumers. 
              We're committed to bringing you the freshest, highest-quality produce while supporting local farming communities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-agricultural-600" />
                <span>0800 AGRI-MARKET (247-462)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-agricultural-600" />
                <span>hello@grenmeteyinvestments.co.za</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-agricultural-600" />
                <span>Cape Town, Johannesburg, Durban</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-agricultural-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">My Account</h4>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-agricultural-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-agricultural-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Partners</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-agricultural-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Only */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex justify-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-agricultural-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-agricultural-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-agricultural-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-agricultural-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Grenmetey Investments. All rights reserved. Built with 💚 for African farmers.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-agricultural-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-agricultural-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-agricultural-600 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-agricultural-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
