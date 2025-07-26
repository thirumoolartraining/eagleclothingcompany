import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Corporate Polo Shirts',
    slug: 'corporate-polo-shirts',
    category: 'Polos',
    image: '/images/products/corporate-polo-shirts/1.webp',
    gallery: [
      '/images/products/corporate-polo-shirts/1.webp',
      '/images/products/corporate-polo-shirts/2.webp',
      '/images/products/corporate-polo-shirts/3.webp'
    ],
    material: '100% Cotton Pique',
    moq: 100,
    customizable: true,
    description: 'Premium corporate polo shirts with custom logo placement. Perfect for corporate uniforms, promotional events, and team apparel.',
    specs: {
      fabric: '180gsm Cotton Pique',
      weight: '180g/m²',
      colors: ['White', 'Black', 'Navy', 'Royal Blue', 'Red', 'Gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    priceTiers: [
      { quantity: 100, price: 180 },
      { quantity: 1000, price: 150 },
      { quantity: 2500, price: 135 },
      { quantity: 5000, price: 120 }
    ]
  },
  {
    id: '2',
    name: 'Industrial Work T-Shirts',
    slug: 'industrial-work-t-shirts',
    category: 'T-Shirts',
    image: '/images/products/industrial-work-t-shirts/1.webp',
    gallery: [
      '/images/products/industrial-work-t-shirts/1.webp',
      '/images/products/industrial-work-t-shirts/2.webp',
      '/images/products/industrial-work-t-shirts/3.webp'
    ],
    material: 'Cotton-Polyester Blend',
    moq: 100,
    customizable: true,
    description: 'Durable work t-shirts designed for industrial environments. Moisture-wicking and comfortable for all-day wear.',
    specs: {
      fabric: '65% Cotton, 35% Polyester',
      weight: '160g/m²',
      colors: ['Safety Orange', 'Hi-Vis Yellow', 'Navy', 'Black', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    priceTiers: [
      { quantity: 100, price: 120 },
      { quantity: 2500, price: 110 },
      { quantity: 5000, price: 100 },
      { quantity: 10000, price: 90 }
    ]
  },
  {
    id: '3',
    name: 'Executive Button-Down Shirts',
    slug: 'executive-button-down-shirts',
    category: 'Shirts',
    image: '/images/products/executive-button-down-shirts/1.webp',
    gallery: [
      '/images/products/executive-button-down-shirts/1.webp',
      '/images/products/executive-button-down-shirts/2.webp',
      '/images/products/executive-button-down-shirts/3.webp'
    ],
    material: 'Premium Cotton Poplin',
    moq: 100,
    customizable: true,
    description: 'Professional button-down shirts for executive teams and corporate environments. Wrinkle-resistant and tailored fit.',
    specs: {
      fabric: '100% Cotton Poplin',
      weight: '120g/m²',
      colors: ['White', 'Light Blue', 'Navy', 'Gray', 'Black'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    priceTiers: [
      { quantity: 100, price: 250 },
      { quantity: 750, price: 220 },
      { quantity: 1500, price: 200 },
      { quantity: 3000, price: 180 }
    ]
  },
  {
    id: '4',
    name: 'Security Uniforms',
    slug: 'security-uniforms',
    category: 'Uniforms',
    image: '/images/products/security-uniforms/1.webp',
    gallery: [
      '/images/products/security-uniforms/1.webp',
      '/images/products/security-uniforms/2.webp',
      '/images/products/security-uniforms/3.webp'
    ],
    material: 'Poly-Cotton Blend',
    moq: 100,
    customizable: true,
    description: 'Professional security uniforms with reinforced stitching and multiple pockets. Available in standard security colors.',
    specs: {
      fabric: '65% Polyester, 35% Cotton',
      weight: '200g/m²',
      colors: ['Black', 'Navy', 'Gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    },
    priceTiers: [
      { quantity: 100, price: 350 },
      { quantity: 500, price: 320 },
      { quantity: 1000, price: 290 },
      { quantity: 2000, price: 260 }
    ]
  },
  {
    id: '5',
    name: 'Custom Hoodies',
    slug: 'custom-hoodies',
    category: 'Hoodies',
    image: '/images/products/custom-hoodies/1.webp',
    gallery: [
      '/images/products/custom-hoodies/1.webp',
      '/images/products/custom-hoodies/2.webp',
      '/images/products/custom-hoodies/3.webp'
    ],
    material: 'Cotton-Polyester Fleece',
    moq: 100,
    customizable: true,
    description: 'Premium hoodies perfect for corporate gifts, team apparel, and promotional merchandise. Soft fleece interior.',
    specs: {
      fabric: '80% Cotton, 20% Polyester Fleece',
      weight: '280g/m²',
      colors: ['Black', 'Gray', 'Navy', 'White', 'Red', 'Royal Blue'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    priceTiers: [
      { quantity: 100, price: 300 },
      { quantity: 500, price: 280 },
      { quantity: 1000, price: 260 },
      { quantity: 2500, price: 240 }
    ]
  },
  {
    id: '6',
    name: 'Work Jackets',
    slug: 'work-jackets',
    category: 'Jackets',
    image: '/images/products/work-jackets/1.webp',
    gallery: [
      '/images/products/work-jackets/1.webp',
      '/images/products/work-jackets/2.webp',
      '/images/products/work-jackets/3.webp'
    ],
    material: 'Canvas Cotton',
    moq: 100,
    customizable: true,
    description: 'Heavy-duty work jackets designed for construction and industrial use. Weather-resistant and durable.',
    specs: {
      fabric: '100% Canvas Cotton',
      weight: '350g/m²',
      colors: ['Khaki', 'Navy', 'Black', 'Brown'],
      sizes: ['M', 'L', 'XL', 'XXL', 'XXXL']
    },
    priceTiers: [
      { quantity: 100, price: 550 },
      { quantity: 300, price: 520 },
      { quantity: 750, price: 490 },
      { quantity: 1500, price: 450 }
    ]
  }
];