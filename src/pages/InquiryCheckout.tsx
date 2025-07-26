import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, User, Building, Mail, Phone, MapPin, FileText, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const InquiryCheckout: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    taxId: '',
    message: ''
  });
  const [specFiles, setSpecFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Japan', 'South Korea', 'Singapore', 'Netherlands', 'Belgium', 'Sweden', 
    'Norway', 'Denmark', 'Switzerland', 'Italy', 'Spain', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSpecFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSpecFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getTotalValue = () => {
    return state.items.reduce((total, item) => {
      // Find the correct pricing tier - the highest tier that the quantity qualifies for
      const qualifyingTiers = item.product.priceTiers.filter(tier => item.quantity >= tier.quantity);
      const tier = qualifyingTiers.length > 0 
        ? qualifyingTiers[qualifyingTiers.length - 1] 
        : item.product.priceTiers[0];
      return total + (tier.price * item.quantity);
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and redirect
    dispatch({ type: 'CLEAR_CART' });
    navigate('/inquiry-confirmation', {
      state: {
        inquiryData: formData,
        items: state.items,
        inquiryId: 'INQ-' + Date.now()
      }
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1C] mb-4">No items in cart</h1>
          <p className="text-gray-600 mb-4">Add products to your cart before proceeding to checkout.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Manufacturing Inquiry</h1>
          <p className="text-lg text-gray-600">
            Complete your inquiry details. Our team will review and respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Company Information</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="taxId" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Tax ID / VAT Number
                  </label>
                  <input
                    type="text"
                    id="taxId"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="Optional"
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  >
                    <option value="">Select country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Contact Information</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="your@company.com"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Specification Files */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Specification Files</h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                Upload any technical specifications, design files, or requirements documents.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#DAA520] transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.svg,.ai,.eps"
                  className="hidden"
                  id="spec-upload"
                />
                <label htmlFor="spec-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload specification files</p>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, DOC, Images, Design Files (Max 10MB each)
                  </p>
                </label>
              </div>
              
              {specFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-[#1C1C1C]">Uploaded Files:</h4>
                  {specFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700 truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Message */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#1C1C1C] mb-4">Additional Requirements</h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                placeholder="Please describe any specific requirements, timeline constraints, quality standards, or other details that would help us prepare an accurate quote..."
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-6">Inquiry Summary</h3>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => {
                  // Find the correct pricing tier - the highest tier that the quantity qualifies for
                  const qualifyingTiers = item.product.priceTiers.filter(tier => item.quantity >= tier.quantity);
                  const tier = qualifyingTiers.length > 0 
                    ? qualifyingTiers[qualifyingTiers.length - 1] 
                    : item.product.priceTiers[0];
                  
                  return (
                    <div key={item.product.id} className="border-b border-gray-200 pb-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-[#1C1C1C] truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.quantity.toLocaleString()} units × ₹{tier.price}
                          </p>
                          <p className="text-sm font-semibold text-[#DAA520]">
                            ₹{(tier.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-[#1C1C1C]">Total Estimated Value:</span>
                  <span className="text-xl font-bold text-[#DAA520]">
                    ₹{getTotalValue().toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-[#F3F4F6] rounded-lg p-4 mb-6">
                <p className="text-xs text-gray-600 leading-relaxed">
                  This is an inquiry, not a purchase. Our team will review your requirements and 
                  provide a detailed quote with final pricing, production timeline, and terms.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#DAA520] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#B8941C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Submit Manufacturing Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this inquiry, you agree to our terms and conditions for B2B manufacturing services.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryCheckout;