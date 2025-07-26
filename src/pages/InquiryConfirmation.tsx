import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Calendar, Mail, Phone, ArrowRight } from 'lucide-react';

const InquiryConfirmation: React.FC = () => {
  const location = useLocation();
  const { inquiryData, items, inquiryId } = location.state || {};

  if (!inquiryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1C] mb-4">Confirmation Not Found</h1>
          <Link to="/" className="text-[#DAA520] hover:text-[#B8941C]">Return Home</Link>
        </div>
      </div>
    );
  }

  const estimatedResponse = new Date();
  estimatedResponse.setHours(estimatedResponse.getHours() + 24);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">
            Inquiry Submitted Successfully!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for your manufacturing inquiry. Our B2B team will review your requirements and respond with a detailed quote.
          </p>
        </div>

        {/* Inquiry Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Inquiry Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Inquiry Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-[#DAA520] bg-opacity-10 rounded-lg">
                <div className="w-2 h-2 bg-[#DAA520] rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Inquiry ID:</span>
                  <p className="font-mono font-semibold text-[#DAA520]">{inquiryId}</p>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Company:</span>
                <p className="text-[#1C1C1C] font-medium">{inquiryData.companyName}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Contact:</span>
                <p className="text-[#1C1C1C]">{inquiryData.contactName}</p>
                <p className="text-sm text-gray-600">{inquiryData.email}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Country:</span>
                <p className="text-[#1C1C1C]">{inquiryData.country}</p>
              </div>
              
              {inquiryData.taxId && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Tax ID:</span>
                  <p className="text-[#1C1C1C]">{inquiryData.taxId}</p>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Review & Analysis</h3>
                  <p className="text-sm text-gray-600">Our team reviews your requirements and customization needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Quote Preparation</h3>
                  <p className="text-sm text-gray-600">Detailed pricing, timeline, and production specifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Response Delivery</h3>
                  <p className="text-sm text-gray-600">Complete quote sent to your email within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-[#DAA520]" />
                <span className="text-sm font-medium text-[#1C1C1C]">Expected Response:</span>
              </div>
              <p className="text-[#DAA520] font-semibold">
                {estimatedResponse.toLocaleDateString()} by {estimatedResponse.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
          </div>
        </div>

        {/* Products Summary */}
        {items && items.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Products in Your Inquiry</h2>
            
            <div className="space-y-4">
              {items.map((item: any) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                   className="w-16 aspect-square object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1C1C1C]">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">{item.product.category}</p>
                    <p className="text-sm text-[#DAA520] font-medium">
                      Quantity: {item.quantity.toLocaleString()} units
                    </p>
                  </div>
                  {Object.keys(item.customizations).length > 0 && (
                    <div className="text-xs text-gray-500">
                      <span className="bg-[#DAA520] bg-opacity-10 text-[#DAA520] px-2 py-1 rounded-full">
                        Customized
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-[#1C1C1C] text-white rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">Need Immediate Assistance?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#DAA520]" />
              <div>
                <p className="font-medium">Email our B2B Team</p>
                <p className="text-gray-300">info@eagleclothingcompany.fashion</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-[#DAA520]" />
              <div>
                <p className="font-medium">Call Direct</p>
                <p className="text-gray-300">+91 99942 89193</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mt-4">
            Reference your inquiry ID: <span className="font-mono text-[#DAA520]">{inquiryId}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center bg-gray-100 text-[#1C1C1C] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Save Confirmation
          </button>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            Browse More Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InquiryConfirmation;