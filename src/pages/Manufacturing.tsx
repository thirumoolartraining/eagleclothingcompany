import React from 'react';
import { Factory, Users, Award, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

const Manufacturing: React.FC = () => {
  const capabilities = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Advanced Machinery',
      description: 'State-of-the-art cutting, sewing, and finishing equipment from leading manufacturers.',
      details: ['Automated cutting systems', 'Computer-controlled sewing', 'Quality finishing stations']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Skilled Workforce',
      description: 'Over 100 trained professionals with decades of combined experience.',
      details: ['Certified technicians', 'Quality control specialists', 'Production managers']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Capacity',
      description: 'Production capacity of 100,000+ garments per month across all categories.',
      details: ['Multiple production lines', 'Flexible scheduling', 'Rush order capability']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Multi-stage quality control process ensuring consistent excellence.',
      details: ['Incoming material inspection', 'In-process monitoring', 'Final quality audit']
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      icon: <Award className="w-6 h-6" />
    },
    {
      name: 'BSCI Compliance',
      description: 'Business Social Compliance',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Global Organic Textile Standard',
      description: 'Organic Fiber Certification',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const productionStats = [
    { metric: '2M+', label: 'Garments Annually' },
    { metric: '15-30', label: 'Days Lead Time' },
    { metric: '99.5%', label: 'Quality Pass Rate' },
    { metric: '24/7', label: 'Production Monitoring' }
  ];

  const processes = [
    {
      step: '01',
      title: 'Design & Sampling',
      description: 'Pattern development, material selection, and prototype creation.',
      image: '/images/production-process/1.png'
    },
    {
      step: '02',
      title: 'Material Sourcing',
      description: 'Premium fabric procurement from certified sustainable suppliers.',
      image: '/images/production-process/2.png'
    },
    {
      step: '03',
      title: 'Production Planning',
      description: 'Optimized scheduling and resource allocation for efficiency.',
      image: '/images/production-process/3.png'
    },
    {
      step: '04',
      title: 'Manufacturing',
      description: 'Precision cutting, expert sewing, and quality finishing.',
      image: '/images/production-process/4.png'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Comprehensive inspection and testing at multiple checkpoints.',
      image: '/images/production-process/5.png'
    },
    {
      step: '06',
      title: 'Packaging & Shipping',
      description: 'Professional packaging and global logistics coordination.',
      image: '/images/production-process/6.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1C1C1C] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/hero.png)'
          }}
        >
          <div className="absolute inset-0 bg-[#1C1C1C] bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              World-Class Manufacturing Capabilities
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Advanced production facilities, skilled workforce, and proven processes delivering exceptional quality garments for B2B clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors">
                Schedule Factory Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors">
                Download Capabilities Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Production Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {productionStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#DAA520] mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg text-[#1C1C1C] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive manufacturing capabilities ensure consistent quality, efficient production, and reliable delivery for all your B2B apparel needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-xl text-[#DAA520] mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#DAA520] mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Our Production Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to final delivery, our streamlined process ensures quality, efficiency, and transparency at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, safety, and sustainability is validated by international certifications and compliance standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#DAA520] hover:bg-opacity-5 transition-colors group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#DAA520] bg-opacity-10 rounded-lg text-[#DAA520] mb-4 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                State-of-the-Art Facility
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Our 150,000 square foot manufacturing facility features the latest technology, sustainable practices, and optimal working conditions for our skilled workforce.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[#DAA520] mb-2">150K</div>
                  <div className="text-gray-300">Square Feet</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DAA520] mb-2">500+</div>
                  <div className="text-gray-300">Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DAA520] mb-2">25+</div>
                  <div className="text-gray-300">Production Lines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DAA520] mb-2">24/7</div>
                  <div className="text-gray-300">Operations</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors">
                  Schedule Visit
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors">
                  Virtual Tour
                </button>
              </div>
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

      {/* Contact CTA */}
      <section className="py-20 bg-[#DAA520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how our manufacturing capabilities can support your business goals. Get in touch for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#DAA520] transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;