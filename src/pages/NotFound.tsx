import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Package } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-[#DAA520] bg-opacity-10 rounded-full mb-6">
            <Package className="w-16 h-16 text-[#DAA520]" />
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-[#1C1C1C] mb-4">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">
            Here are some helpful links:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/products"
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#DAA520] transition-all group"
            >
              <Package className="w-5 h-5 text-gray-400 group-hover:text-[#DAA520] mr-3" />
              <span className="text-gray-700 group-hover:text-[#1C1C1C] font-medium">Browse Products</span>
            </Link>
            
            <Link
              to="/manufacturing"
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#DAA520] transition-all group"
            >
              <Search className="w-5 h-5 text-gray-400 group-hover:text-[#DAA520] mr-3" />
              <span className="text-gray-700 group-hover:text-[#1C1C1C] font-medium">Manufacturing Info</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-gray-100 text-[#1C1C1C] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">
            Need Help Finding Something?
          </h3>
          <p className="text-gray-600 mb-4">
            Our B2B team is here to help you find the right products and information for your manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#DAA520] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8941C] transition-colors"
            >
              Contact Sales Team
            </Link>
            <a
              href="mailto:orders@eagleclothing.com"
              className="inline-flex items-center justify-center border border-[#DAA520] text-[#DAA520] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#DAA520] hover:text-white transition-colors"
            >
              Email Direct
            </a>
          </div>
        </div>

        {/* SEO/Additional Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Error Code: 404 | Page Not Found | Eagle Clothing Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;