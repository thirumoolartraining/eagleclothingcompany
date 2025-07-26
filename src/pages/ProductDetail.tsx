import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Star, Plus, Minus, ShoppingCart, Truck, Shield, Award } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(500);
  const [showCustomization, setShowCustomization] = useState(false);
  const [customizations, setCustomizations] = useState({
    fabric: '',
    logoPlacement: '',
    sizing: '',
    notes: ''
  });

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1C] mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[#DAA520] hover:text-[#B8941C]">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Find the correct pricing tier - the highest tier that the quantity qualifies for
  const getCurrentTier = () => {
    const qualifyingTiers = product.priceTiers.filter(tier => quantity >= tier.quantity);
    return qualifyingTiers.length > 0 
      ? qualifyingTiers[qualifyingTiers.length - 1] 
      : product.priceTiers[0];
  };
  
  const currentTier = getCurrentTier();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        quantity,
        customizations: showCustomization ? customizations : {}
      }
    });
  };

  const updateQuantity = (newQuantity: number) => {
    const minQuantity = product.moq;
    setQuantity(Math.max(minQuantity, newQuantity));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/products"
            className="inline-flex items-center text-[#DAA520] hover:text-[#B8941C] font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm">
              <img
                src={product.gallery[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.gallery.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                   className={`flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#DAA520]' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-[#DAA520] bg-[#DAA520] bg-opacity-10 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                {product.customizable && (
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Customizable
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-[#1C1C1C] mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Material:</span>
                  <p className="text-[#1C1C1C]">{product.specs.fabric}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Weight:</span>
                  <p className="text-[#1C1C1C]">{product.specs.weight}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Available Colors:</span>
                  <p className="text-[#1C1C1C]">{product.specs.colors.join(', ')}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Size Range:</span>
                  <p className="text-[#1C1C1C]">{product.specs.sizes.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Bulk Pricing Tiers</h3>
              <div className="space-y-3">
                {product.priceTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-lg border-2 transition-colors ${
                      quantity >= tier.quantity ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5' : 'border-gray-200'
                    }`}
                  >
                    <span className="font-medium text-[#1C1C1C]">
                      {tier.quantity.toLocaleString()}+ units
                    </span>
                    <span className="text-lg font-bold text-[#DAA520]">
                      ₹{tier.price} each
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Order Quantity</h3>
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => updateQuantity(quantity - 50)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(parseInt(e.target.value) || product.moq)}
                    min={product.moq}
                    step="50"
                    className="w-full text-center text-lg font-semibold py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => updateQuantity(quantity + 50)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Package className="w-4 h-4 mr-2" />
                Minimum Order Quantity: {product.moq.toLocaleString()} units
              </div>
              
              <div className="bg-[#F3F4F6] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-[#1C1C1C]">
                    Total Estimated Cost:
                  </span>
                  <span className="text-2xl font-bold text-[#DAA520]">
                    ₹{(currentTier.price * quantity).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  At ₹{currentTier.price} per unit
                </p>
              </div>
            </div>

            {/* Customization Options */}
            {product.customizable && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#1C1C1C]">Customization Options</h3>
                  <button
                    onClick={() => setShowCustomization(!showCustomization)}
                    className="text-[#DAA520] hover:text-[#B8941C] font-medium"
                  >
                    {showCustomization ? 'Hide' : 'Add Customization'}
                  </button>
                </div>
                
                {showCustomization && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                        Logo Placement
                      </label>
                      <select
                        value={customizations.logoPlacement}
                        onChange={(e) => setCustomizations(prev => ({...prev, logoPlacement: e.target.value}))}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      >
                        <option value="">Select placement</option>
                        <option value="chest-left">Left Chest</option>
                        <option value="chest-center">Center Chest</option>
                        <option value="back-center">Back Center</option>
                        <option value="sleeve">Sleeve</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                        Special Fabric Request
                      </label>
                      <input
                        type="text"
                        value={customizations.fabric}
                        onChange={(e) => setCustomizations(prev => ({...prev, fabric: e.target.value}))}
                        placeholder="e.g., Fire-resistant, Anti-bacterial"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                        Sizing Specifications
                      </label>
                      <input
                        type="text"
                        value={customizations.sizing}
                        onChange={(e) => setCustomizations(prev => ({...prev, sizing: e.target.value}))}
                        placeholder="e.g., Extended sizes, Custom fit"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={customizations.notes}
                        onChange={(e) => setCustomizations(prev => ({...prev, notes: e.target.value}))}
                        rows={3}
                        placeholder="Any specific requirements or modifications..."
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="w-full bg-[#DAA520] text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-[#B8941C] transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Truck className="w-6 h-6 text-[#DAA520] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#1C1C1C]">Global Shipping</span>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-[#DAA520] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#1C1C1C]">Quality Assured</span>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 text-[#DAA520] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#1C1C1C]">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;