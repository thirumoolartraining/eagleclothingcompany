import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
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

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => dispatch({ type: 'CLOSE_CART' })} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#1C1C1C]">Shopping Cart</h2>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {state.items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={() => dispatch({ type: 'CLOSE_CART' })}
                  className="inline-block mt-4 text-[#DAA520] hover:text-[#B8941C] font-medium"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
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
                    <div key={item.product.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                         className="w-16 aspect-square object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-[#1C1C1C] truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            MOQ: {item.product.moq} units
                          </p>
                          <p className="text-xs text-[#DAA520] font-medium mt-1">
                            ₹{tier.price} per unit
                          </p>
                          
                          {/* Customizations */}
                          {Object.keys(item.customizations).length > 0 && (
                            <div className="mt-2 text-xs text-gray-600">
                              <p className="font-medium">Customizations:</p>
                              {item.customizations.fabric && (
                                <p>• Fabric: {item.customizations.fabric}</p>
                              )}
                              {item.customizations.logoPlacement && (
                                <p>• Logo: {item.customizations.logoPlacement}</p>
                              )}
                              {item.customizations.sizing && (
                                <p>• Sizing: {item.customizations.sizing}</p>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.product.id })}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 50)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-medium px-2">
                            {item.quantity} units
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 50)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-[#1C1C1C]">
                          ₹{(tier.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-medium">{getTotalItems()} units</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estimated Value:</span>
                  <span className="font-medium text-[#DAA520]">
                    ₹{getEstimatedValue().toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  *Final pricing subject to customization and volume discounts
                </p>
                
                <div className="space-y-2 pt-2">
                  <Link
                    to="/cart"
                    onClick={() => {
                      dispatch({ type: 'CLOSE_CART' });
                      window.scrollTo(0, 0);
                    }}
                    className="w-full bg-gray-100 text-[#1C1C1C] px-4 py-2 rounded-lg text-sm font-medium text-center block hover:bg-gray-200 transition-colors"
                  >
                    View Cart
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => {
                      dispatch({ type: 'CLOSE_CART' });
                      window.scrollTo(0, 0);
                    }}
                    className="w-full bg-[#DAA520] text-white px-4 py-2 rounded-lg text-sm font-medium text-center block hover:bg-[#B8941C] transition-colors"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;