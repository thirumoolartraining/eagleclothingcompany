import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ArrowRight, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    }
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getEstimatedValue = () => {
    return state.items.reduce((total, item) => {
      // Find the correct pricing tier - the highest tier that the quantity qualifies for
      const qualifyingTiers = item.product.priceTiers.filter(tier => item.quantity >= tier.quantity);
      const tier = qualifyingTiers.length > 0 
        ? qualifyingTiers[qualifyingTiers.length - 1] 
        : item.product.priceTiers[0];
      return total + (tier.price * item.quantity);
    }, 0);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-[#1C1C1C]">Inquiry Cart</h1>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add products to start shopping.</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
            >
              Browse Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Shopping Cart</h1>
          <p className="text-lg text-gray-600">
            Review your selected products and customizations before checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => {
              // Find the correct pricing tier - the highest tier that the quantity qualifies for
              const getCurrentTier = () => {
                const qualifyingTiers = item.product.priceTiers.filter(tier => item.quantity >= tier.quantity);
                return qualifyingTiers.length > 0 
                  ? qualifyingTiers[qualifyingTiers.length - 1] 
                  : item.product.priceTiers[0];
              };
              const tier = getCurrentTier();
              
              return (
                <div key={item.product.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                       className="w-full sm:w-32 aspect-square object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.product.category} • {item.product.material}
                          </p>
                          <p className="text-sm text-gray-500">
                            MOQ: {item.product.moq.toLocaleString()} units
                          </p>
                        </div>
                        
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.product.id })}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Customizations */}
                      {Object.keys(item.customizations).length > 0 && (
                        <div className="mb-4 p-3 bg-[#F3F4F6] rounded-lg">
                          <h4 className="text-sm font-medium text-[#1C1C1C] mb-2">Customizations:</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            {item.customizations.fabric && (
                              <p>• Fabric: {item.customizations.fabric}</p>
                            )}
                            {item.customizations.logoPlacement && (
                              <p>• Logo Placement: {item.customizations.logoPlacement}</p>
                            )}
                            {item.customizations.sizing && (
                              <p>• Sizing: {item.customizations.sizing}</p>
                            )}
                            {item.customizations.notes && (
                              <p>• Notes: {item.customizations.notes}</p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Quantity and Price */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-[#1C1C1C]">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 50)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || item.product.moq)}
                              min={item.product.moq}
                              step="50"
                              className="w-20 text-center text-sm font-medium py-1 px-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                            />
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 50)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-sm text-gray-500">units</span>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            ₹{tier.price} per unit
                          </div>
                          <div className="text-lg font-bold text-[#DAA520]">
                            ₹{(tier.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-medium">{getTotalItems().toLocaleString()} units</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Product Categories:</span>
                  <span className="font-medium">{state.items.length}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-[#1C1C1C]">Estimated Value:</span>
                    <span className="text-xl font-bold text-[#DAA520]">
                      ₹{getEstimatedValue().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3F4F6] rounded-lg p-4 mb-6">
                <p className="text-xs text-gray-600 leading-relaxed">
                  * Prices shown are estimates. Final pricing may vary based on customizations and volume discounts.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  to="/products"
                  className="w-full bg-gray-100 text-[#1C1C1C] py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors block"
                >
                  Continue Shopping
                </Link>
                
                <Link
                  to="/checkout"
                  className="w-full bg-[#DAA520] text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-[#B8941C] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-[#1C1C1C] mb-2">Questions?</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Our team is ready to help with your order.
                </p>
                <Link
                  to="/contact"
                  className="text-[#DAA520] hover:text-[#B8941C] text-sm font-medium"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;