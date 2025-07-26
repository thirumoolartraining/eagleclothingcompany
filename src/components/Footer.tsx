import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/images/logos/logo.png" 
                alt="Eagle Clothing Company"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Global clothing manufacturer specializing in ready-made garments, custom workwear, and private-label apparel for international buyers.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe className="w-4 h-4" />
              <span>Exporting Worldwide Since 1995</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-[#DAA520] text-sm transition-colors">Product Catalog</Link></li>
              <li><Link to="/customization" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-[#DAA520] text-sm transition-colors">Custom Options</Link></li>
              <li><Link to="/manufacturing" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-[#DAA520] text-sm transition-colors">Manufacturing</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-300 hover:text-[#DAA520] text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Bulk Manufacturing</li>
              <li>• Private Label Production</li>
              <li>• Custom Embroidery & Printing</li>
              <li>• Quality Control & Testing</li>
              <li>• Global Shipping & Logistics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@eagleclothingcompany.fashion</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 99942 89193</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>No: 28, Alangari Amman Kovil Street, Naduvirpatti</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex bg-[#DAA520] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8941C] transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Eagle Clothing Company. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0 justify-center">
            <Link 
              to="/privacy-policy" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <Link 
              to="/terms-conditions" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <Link 
              to="/shipping-policy" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              Shipping Policy
            </Link>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <Link 
              to="/cancellation-refund-policy" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 text-sm hover:text-white transition-colors whitespace-nowrap"
            >
              Cancellation & Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;