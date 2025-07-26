import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, Truck } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'B2B Manufacturing',
      description: 'Specialized in bulk orders for retailers, distributors, and corporate clients worldwide.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Export',
      description: 'Export-ready operations with international shipping and customs documentation.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Certified',
      description: 'Premium quality garments with rigorous testing and international compliance standards.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Streamlined production with typical lead times of 15-30 days.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Manufacturing' },
    { number: '50M+', label: 'Garments Produced' },
    { number: '60+', label: 'Countries Served' },
    { number: '500+', label: 'Active B2B Clients' }
  ];

  const testimonials = [
    {
      company: 'Global Trade Corp',
      quote: 'Eagle Clothing has been our go-to manufacturer for corporate uniforms. Their quality and reliability are unmatched.',
      author: 'Sarah Chen, Procurement Director'
    },
    {
      company: 'European Retail Group',
      quote: 'Outstanding production capabilities and flexible customization options. They handle our private label requirements perfectly.',
      author: 'Marcus Weber, Supply Chain Manager'
    },
    {
      company: 'Industrial Safety Solutions',
      quote: 'Professional service from inquiry to delivery. Their work uniforms meet all our safety and durability standards.',
      author: 'James Rodriguez, Operations Manager'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1C1C1C] to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7055639/pexels-photo-7055639.jpeg)'
          }}
        >
          <div className="absolute inset-0 bg-[#1C1C1C] bg-opacity-70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Global Clothing Manufacturing.{' '}
                <span className="text-[#DAA520]">Customized.</span>{' '}
                Delivered.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                From bulk uniforms to private-label collections – get factory-direct quotes for ready-made garments and custom apparel manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors group"
                >
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/manufacturing"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors"
                >
                  View Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#DAA520] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-[#1C1C1C] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Choose Eagle Clothing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading manufacturing capabilities designed specifically for B2B clients and international trade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-xl text-[#DAA520] mb-6 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Showcase */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our modern facility features advanced machinery, quality control systems, and sustainable practices. From fabric sourcing to final packaging, we ensure every garment meets international standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Advanced cutting and sewing technology
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Multi-stage quality inspection process
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Sustainable and ethical production practices
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Flexible MOQ and customization options
                </li>
              </ul>
              <Link
                to="/manufacturing"
                className="inline-flex items-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
              >
                View Manufacturing Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7055639/pexels-photo-7055639.jpeg"
                alt="Manufacturing facility"
               className="rounded-2xl shadow-2xl aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Trusted by Global Buyers
            </h2>
            <p className="text-xl text-gray-600">
              What our B2B clients say about our manufacturing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="text-[#DAA520] text-4xl font-serif">"</div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-[#1C1C1C]">
                    {testimonial.author}
                  </div>
                  <div className="text-[#DAA520] font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Manufacturing Order?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get custom quotes for bulk orders, private label production, and specialized garment manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors"
            >
              Browse Product Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-[#DAA520] text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#DAA520] hover:text-white transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;