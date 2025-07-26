import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Calendar, Mail, Phone, ArrowRight, Package, Truck } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const { orderData, items, orderId, total } = location.state || {};

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1C] mb-4">Order Not Found</h1>
          <Link to="/" className="text-[#DAA520] hover:text-[#B8941C]">Return Home</Link>
        </div>
      </div>
    );
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for ordering. Our team will get back to you shortly with payment instructions and order confirmation.
          </p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Order Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-[#DAA520] bg-opacity-10 rounded-lg">
                <div className="w-2 h-2 bg-[#DAA520] rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Order ID:</span>
                  <p className="font-mono font-semibold text-[#DAA520]">{orderId}</p>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Customer:</span>
                <p className="text-[#1C1C1C] font-medium">{orderData.firstName} {orderData.lastName}</p>
                <p className="text-sm text-gray-600">{orderData.email}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Shipping Address:</span>
                <p className="text-[#1C1C1C]">{orderData.address}</p>
                <p className="text-[#1C1C1C]">{orderData.city}, {orderData.state} {orderData.zipCode}</p>
                <p className="text-[#1C1C1C]">{orderData.country}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-500">Order Total:</span>
                <p className="text-2xl font-bold text-[#DAA520]">₹{total?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Delivery Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Order Review</h3>
                  <p className="text-sm text-gray-600">Our team will review your order and requirements</p>
                  <p className="text-xs text-green-600 font-medium">In Progress</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Quote & Payment</h3>
                  <p className="text-sm text-gray-600">We'll send final pricing and payment instructions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-[#1C1C1C]">Production & Delivery</h3>
                  <p className="text-sm text-gray-600">Manufacturing and shipping to your address</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-[#DAA520]" />
                <span className="text-sm font-medium text-[#1C1C1C]">Expected Response:</span>
              </div>
              <p className="text-[#DAA520] font-semibold">
                Within 24-48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        {items && items.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Order Items</h2>
            
            <div className="space-y-4">
              {items.map((item: any) => {
                const qualifyingTiers = item.product.priceTiers.filter((tier: any) => item.quantity >= tier.quantity);
                const tier = qualifyingTiers.length > 0 
                  ? qualifyingTiers[qualifyingTiers.length - 1] 
                  : item.product.priceTiers[0];
                
                return (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 aspect-square object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-[#1C1C1C]">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">{item.product.category}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity.toLocaleString()} × ₹{tier.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#DAA520]">
                        ₹{(tier.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-[#1C1C1C] text-white rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">Questions About Your Order?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#DAA520]" />
              <div>
                <p className="font-medium">Email Our Team</p>
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
            Reference your order ID: <span className="font-mono text-[#DAA520]">{orderId}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center bg-gray-100 text-[#1C1C1C] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Print Order Details
          </button>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;