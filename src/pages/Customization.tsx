import React, { useState } from 'react';
import { Upload, Palette, Ruler, Settings, Check } from 'lucide-react';

const Customization: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    fabricType: '',
    logoPlacement: '',
    embroideryType: '',
    colors: [],
    sizingOption: '',
    additionalFeatures: []
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);

  const fabricOptions = [
    { id: 'cotton-100', name: '100% Cotton', description: 'Soft, breathable, ideal for comfort' },
    { id: 'cotton-poly', name: 'Cotton-Polyester Blend', description: 'Durable, wrinkle-resistant' },
    { id: 'performance', name: 'Performance Fabric', description: 'Moisture-wicking, athletic wear' },
    { id: 'canvas', name: 'Canvas Cotton', description: 'Heavy-duty, industrial strength' },
    { id: 'fleece', name: 'Fleece', description: 'Warm, soft interior lining' }
  ];

  const logoOptions = [
    { id: 'chest-left', name: 'Left Chest', description: 'Standard corporate placement' },
    { id: 'chest-center', name: 'Center Chest', description: 'Bold, prominent display' },
    { id: 'back-center', name: 'Back Center', description: 'Large logo area' },
    { id: 'sleeve', name: 'Sleeve', description: 'Subtle side placement' },
    { id: 'multiple', name: 'Multiple Locations', description: 'Combination placement' }
  ];

  const embroideryOptions = [
    { id: 'standard', name: 'Standard Embroidery', description: 'Classic thread embroidery' },
    { id: 'heat-transfer', name: 'Heat Transfer', description: 'Full-color graphics possible' },
    { id: 'screen-print', name: 'Screen Printing', description: 'Cost-effective for large runs' },
    { id: 'sublimation', name: 'Sublimation', description: 'All-over printing capability' }
  ];

  const colorOptions = [
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'navy', name: 'Navy', hex: '#000080' },
    { id: 'royal-blue', name: 'Royal Blue', hex: '#4169E1' },
    { id: 'red', name: 'Red', hex: '#DC143C' },
    { id: 'gray', name: 'Gray', hex: '#808080' },
    { id: 'khaki', name: 'Khaki', hex: '#F0E68C' },
    { id: 'green', name: 'Forest Green', hex: '#228B22' }
  ];

  const sizingOptions = [
    { id: 'standard', name: 'Standard Sizing', description: 'Regular fit sizes XS-XXXL' },
    { id: 'extended', name: 'Extended Sizes', description: 'Includes 4XL, 5XL, 6XL' },
    { id: 'tall', name: 'Tall Sizes', description: 'Extended length options' },
    { id: 'custom-fit', name: 'Custom Fit', description: 'Made-to-measure specifications' }
  ];

  const additionalFeatures = [
    { id: 'pocket', name: 'Chest Pocket', description: 'Functional chest pocket' },
    { id: 'reflective', name: 'Reflective Strips', description: 'Safety visibility enhancement' },
    { id: 'reinforced', name: 'Reinforced Seams', description: 'Extra durability stitching' },
    { id: 'moisture-wicking', name: 'Moisture-Wicking', description: 'Advanced fabric treatment' },
    { id: 'antimicrobial', name: 'Antimicrobial Treatment', description: 'Odor and bacteria resistance' }
  ];

  const handleColorToggle = (colorId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      colors: prev.colors.includes(colorId)
        ? prev.colors.filter(c => c !== colorId)
        : [...prev.colors, colorId]
    }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      additionalFeatures: prev.additionalFeatures.includes(featureId)
        ? prev.additionalFeatures.filter(f => f !== featureId)
        : [...prev.additionalFeatures, featureId]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Customization Options</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Configure your garments with custom fabrics, logos, colors, and specifications. Our manufacturing team will ensure your exact requirements are met.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customization Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Fabric Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Settings className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Fabric Selection</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fabricOptions.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedOptions(prev => ({...prev, fabricType: fabric.id}))}
                    className={`text-left p-4 rounded-lg border-2 transition-colors hover:border-[#DAA520] ${
                      selectedOptions.fabricType === fabric.id
                        ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5'
                        : 'border-gray-200'
                    }`}
                  >
                    <h3 className="font-semibold text-[#1C1C1C] mb-1">{fabric.name}</h3>
                    <p className="text-sm text-gray-600">{fabric.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Upload & Placement */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Upload className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Logo & Branding</h2>
              </div>
              
              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Upload Logo File
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#DAA520] transition-colors">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".png,.jpg,.jpeg,.svg,.ai,.eps"
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {logoFile ? logoFile.name : 'Click to upload logo file'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG, SVG, AI, EPS (Max 10MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Logo Placement */}
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-3">
                    Logo Placement
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {logoOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedOptions(prev => ({...prev, logoPlacement: option.id}))}
                        className={`text-left p-3 rounded-lg border-2 transition-colors hover:border-[#DAA520] ${
                          selectedOptions.logoPlacement === option.id
                            ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5'
                            : 'border-gray-200'
                        }`}
                      >
                        <h4 className="font-medium text-[#1C1C1C]">{option.name}</h4>
                        <p className="text-xs text-gray-600">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Embroidery Type */}
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-3">
                    Application Method
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {embroideryOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedOptions(prev => ({...prev, embroideryType: option.id}))}
                        className={`text-left p-3 rounded-lg border-2 transition-colors hover:border-[#DAA520] ${
                          selectedOptions.embroideryType === option.id
                            ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5'
                            : 'border-gray-200'
                        }`}
                      >
                        <h4 className="font-medium text-[#1C1C1C]">{option.name}</h4>
                        <p className="text-xs text-gray-600">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Palette className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Color Selection</h2>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">Select multiple colors for your order</p>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorToggle(color.id)}
                    className={`relative aspect-square rounded-lg border-3 transition-all hover:scale-105 ${
                      selectedOptions.colors.includes(color.id)
                        ? 'border-[#DAA520] ring-2 ring-[#DAA520] ring-opacity-30'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedOptions.colors.includes(color.id) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white drop-shadow-lg" />
                      </div>
                    )}
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
              
              {selectedOptions.colors.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-[#1C1C1C]">Selected Colors:</p>
                  <p className="text-sm text-gray-600">
                    {selectedOptions.colors.map(colorId => 
                      colorOptions.find(c => c.id === colorId)?.name
                    ).join(', ')}
                  </p>
                </div>
              )}
            </div>

            {/* Sizing Options */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Ruler className="w-6 h-6 text-[#DAA520] mr-3" />
                <h2 className="text-xl font-semibold text-[#1C1C1C]">Sizing Options</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sizingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOptions(prev => ({...prev, sizingOption: option.id}))}
                    className={`text-left p-4 rounded-lg border-2 transition-colors hover:border-[#DAA520] ${
                      selectedOptions.sizingOption === option.id
                        ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5'
                        : 'border-gray-200'
                    }`}
                  >
                    <h3 className="font-semibold text-[#1C1C1C] mb-1">{option.name}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6">Additional Features</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`text-left p-4 rounded-lg border-2 transition-colors hover:border-[#DAA520] ${
                      selectedOptions.additionalFeatures.includes(feature.id)
                        ? 'border-[#DAA520] bg-[#DAA520] bg-opacity-5'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[#1C1C1C] mb-1">{feature.name}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                      {selectedOptions.additionalFeatures.includes(feature.id) && (
                        <Check className="w-5 h-5 text-[#DAA520] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Customization Summary</h3>
              
              <div className="space-y-4 text-sm">
                {selectedOptions.fabricType && (
                  <div>
                    <span className="font-medium text-gray-500">Fabric:</span>
                    <p className="text-[#1C1C1C]">
                      {fabricOptions.find(f => f.id === selectedOptions.fabricType)?.name}
                    </p>
                  </div>
                )}
                
                {selectedOptions.logoPlacement && (
                  <div>
                    <span className="font-medium text-gray-500">Logo Placement:</span>
                    <p className="text-[#1C1C1C]">
                      {logoOptions.find(l => l.id === selectedOptions.logoPlacement)?.name}
                    </p>
                  </div>
                )}
                
                {selectedOptions.embroideryType && (
                  <div>
                    <span className="font-medium text-gray-500">Application:</span>
                    <p className="text-[#1C1C1C]">
                      {embroideryOptions.find(e => e.id === selectedOptions.embroideryType)?.name}
                    </p>
                  </div>
                )}
                
                {selectedOptions.colors.length > 0 && (
                  <div>
                    <span className="font-medium text-gray-500">Colors:</span>
                    <p className="text-[#1C1C1C]">
                      {selectedOptions.colors.length} color{selectedOptions.colors.length > 1 ? 's' : ''} selected
                    </p>
                  </div>
                )}
                
                {selectedOptions.sizingOption && (
                  <div>
                    <span className="font-medium text-gray-500">Sizing:</span>
                    <p className="text-[#1C1C1C]">
                      {sizingOptions.find(s => s.id === selectedOptions.sizingOption)?.name}
                    </p>
                  </div>
                )}
                
                {selectedOptions.additionalFeatures.length > 0 && (
                  <div>
                    <span className="font-medium text-gray-500">Features:</span>
                    <p className="text-[#1C1C1C]">
                      {selectedOptions.additionalFeatures.length} feature{selectedOptions.additionalFeatures.length > 1 ? 's' : ''} added
                    </p>
                  </div>
                )}
                
                {logoFile && (
                  <div>
                    <span className="font-medium text-gray-500">Logo File:</span>
                    <p className="text-[#1C1C1C] truncate">{logoFile.name}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-4">
                  Add these customizations to any product in your cart.
                </p>
                <button className="w-full bg-[#DAA520] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#B8941C] transition-colors">
                  Apply to Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;