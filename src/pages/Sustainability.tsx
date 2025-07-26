import React from 'react';
import { Leaf, Recycle, Droplets, Wind, Factory, Users, Globe, Target } from 'lucide-react';

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Materials',
      description: 'Sourcing organic, recycled, and eco-friendly fabrics from certified suppliers.',
      impact: '75% of materials from sustainable sources'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water Conservation',
      description: 'Advanced water treatment and recycling systems reducing consumption by 40%.',
      impact: '2M gallons saved annually'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Clean Energy',
      description: 'Solar and wind power integration reducing carbon footprint significantly.',
      impact: '60% renewable energy usage'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Waste Reduction',
      description: 'Zero-waste-to-landfill program with comprehensive recycling initiatives.',
      impact: '95% waste diverted from landfills'
    }
  ];

  const certifications = [
    {
      name: 'Global Organic Textile Standard (GOTS)',
      description: 'Ensures organic fiber content and environmental criteria',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg'
    },
    {
      name: 'OEKO-TEX® ECO PASSPORT',
      description: 'Component verification for sustainable textile production',
      image: 'https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg'
    },
    {
      name: 'Cradle to Cradle Certified™',
      description: 'Material health and renewable energy assessment',
      image: 'https://images.pexels.com/photos/1656685/pexels-photo-1656685.jpeg'
    },
    {
      name: 'Better Cotton Initiative (BCI)',
      description: 'Sustainable cotton farming and supply chain practices',
      image: 'https://images.pexels.com/photos/7055639/pexels-photo-7055639.jpeg'
    }
  ];

  const impacts = [
    { metric: '40%', label: 'Reduction in Water Usage', icon: <Droplets className="w-6 h-6" /> },
    { metric: '35%', label: 'Lower Carbon Emissions', icon: <Wind className="w-6 h-6" /> },
    { metric: '95%', label: 'Waste Recycled', icon: <Recycle className="w-6 h-6" /> },
    { metric: '75%', label: 'Sustainable Materials', icon: <Leaf className="w-6 h-6" /> }
  ];

  const goals = [
    {
      year: '2025',
      target: 'Carbon Neutral Operations',
      description: 'Achieve net-zero carbon emissions across all manufacturing processes',
      progress: 65
    },
    {
      year: '2026',
      target: '100% Renewable Energy',
      description: 'Complete transition to solar and wind power for all facility operations',
      progress: 60
    },
    {
      year: '2027',
      target: 'Zero Waste to Landfill',
      description: 'Eliminate all non-recyclable waste through innovative circular processes',
      progress: 95
    },
    {
      year: '2028',
      target: '90% Sustainable Materials',
      description: 'Source predominantly from organic, recycled, and eco-friendly suppliers',
      progress: 75
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Sustainable Manufacturing for a Better Future
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Leading the industry in environmentally responsible production practices, ethical sourcing, and circular economy principles for sustainable B2B apparel manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors">
                Sustainability Report
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-green-800 transition-colors">
                Eco-Friendly Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Our Environmental Impact</h2>
            <p className="text-lg text-gray-600">Measurable results from our sustainability initiatives</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {impact.icon}
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {impact.metric}
                </div>
                <div className="text-lg text-[#1C1C1C] font-medium">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Our Sustainability Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to minimize environmental impact while maintaining the highest quality standards for our B2B clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl text-green-600 mb-6">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">{initiative.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Sustainability Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Third-party verified certifications demonstrating our commitment to environmental responsibility and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Our 2025-2028 Sustainability Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambitious targets driving continuous improvement in environmental performance and sustainable manufacturing practices.
            </p>
          </div>
          
          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {goal.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#1C1C1C]">
                        {goal.target}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      {goal.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 w-full lg:w-64">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress</span>
                      <span className="text-sm font-semibold text-[#DAA520]">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-[#DAA520] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Sustainability */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sustainable Supply Chain
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                From raw material sourcing to final delivery, we ensure every step of our supply chain meets the highest environmental and ethical standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ethical Sourcing</h3>
                    <p className="text-green-200">Fair trade practices and responsible supplier partnerships worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Worker Welfare</h3>
                    <p className="text-green-200">Safe working conditions and fair compensation throughout our network.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Factory className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Clean Production</h3>
                    <p className="text-green-200">Environmental standards enforced across all manufacturing partners.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors">
                  Supply Chain Report
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg"
                alt="Sustainable supply chain"
                className="rounded-2xl shadow-2xl aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-transparent opacity-30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us CTA */}
      <section className="py-20 bg-[#DAA520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with a Sustainable Leader
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in creating a more sustainable future for the apparel industry. Choose eco-friendly manufacturing for your B2B needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              View Eco Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#DAA520] transition-colors">
              Sustainability Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;