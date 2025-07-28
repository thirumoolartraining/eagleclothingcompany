import React from 'react';
import { Calendar, Globe, Users, Award, Factory, Target } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2024', event: 'Eagle Clothing Company founded with a vision for modern, sustainable manufacturing' },
    { year: '2024', event: 'Secured initial facility and advanced manufacturing equipment installation' },
    { year: '2024', event: 'Achieved first international export contracts to North American markets' },
    { year: '2024', event: 'ISO 9001:2015 certification process initiated, quality standards established' },
    { year: '2024', event: 'Launched comprehensive B2B digital platform and e-commerce integration' },
    { year: '2025', event: 'Expanded production capacity, serving 15+ countries across 3 continents' },
    { year: '2025', event: 'Leading next-generation B2B manufacturer with sustainable practices' }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to superior craftsmanship and materials in every garment we produce.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership Focus',
      description: 'Building long-term relationships with B2B clients through trust, reliability, and exceptional service.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'International expertise with local understanding, serving diverse markets across six continents.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation Drive',
      description: 'Continuous improvement in processes, technology, and sustainable manufacturing practices.'
    }
  ];

  const stats = [
    { number: '1+', label: 'Years in Business', icon: <Calendar className="w-6 h-6" /> },
    { number: '15+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '500+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '500K+', label: 'Garments Annually', icon: <Factory className="w-6 h-6" /> }
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
              Next-Generation Manufacturing Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Built from the ground up with cutting-edge technology and sustainable practices, Eagle Clothing Company is the modern manufacturing partner for B2B clients worldwide, delivering quality, innovation, and reliability since 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors">
                Our Story Video
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors">
                Company Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-xl text-[#DAA520] mb-4 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#DAA520] mb-2">
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

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2024 with a clear vision: to revolutionize B2B apparel manufacturing through advanced technology, sustainable practices, and exceptional quality. Built from day one as a modern, globally-minded manufacturing operation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In our first year, we've rapidly established ourselves as a trusted partner for B2B clients across 15+ countries, from emerging brands to established retailers. Our commitment to next-generation manufacturing, sustainability, and innovation drives everything we do.
              </p>
              
              <div className="bg-[#F3F4F6] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To redefine B2B apparel manufacturing through cutting-edge technology, sustainable practices, and exceptional quality, helping our clients succeed in an evolving global marketplace.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/about/our-journey.png"
                alt="Eagle Clothing Company facility"
                className="rounded-2xl shadow-2xl aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Our Rapid Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to global manufacturing partner - our journey of rapid expansion and innovation in B2B apparel manufacturing.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#DAA520] opacity-30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {milestone.year}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#DAA520] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our relationships with clients, partners, and team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-[#DAA520] hover:bg-opacity-5 transition-colors group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-xl text-[#DAA520] mb-6 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Company Culture */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our People & Culture
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Behind every quality garment is a dedicated team member. We foster a culture of continuous learning, innovation, and mutual respect that empowers our people to deliver exceptional results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Diverse & Inclusive</h3>
                    <p className="text-gray-300">Team members from 15+ countries bringing diverse perspectives and expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-300">Regular training programs and skill development opportunities for all employees.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Excellence Driven</h3>
                    <p className="text-gray-300">Recognition and reward systems that celebrate innovation and quality achievements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/about/our-people-culture.png"
                alt="Eagle Clothing team"
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
            Ready to Partner with Eagle Clothing?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied B2B clients who trust us with their apparel manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              Start a Partnership
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#DAA520] transition-colors">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;