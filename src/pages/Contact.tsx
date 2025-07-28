import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: ''
  });

  const inquiryTypes = [
    'New Business Inquiry',
    'Custom Manufacturing Quote',
    'Bulk Order Pricing',
    'Private Label Services',
    'Technical Support',
    'Partnership Opportunities',
    'Other'
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Japan', 'South Korea', 'Singapore', 'Netherlands', 'Belgium', 'Sweden', 
    'Norway', 'Denmark', 'Switzerland', 'Italy', 'Spain', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will respond within 24 hours.');
    
    // Reset form
    setFormData({
      inquiryType: '',
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      country: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      primary: 'info@eagleclothingcompany.fashion',
      description: 'Get detailed quotes and product information'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Direct',
      primary: '+91 99942 89193',
      secondary: 'WhatsApp Available',
      description: 'Speak with our B2B sales specialists'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Facility',
      primary: 'No: 28, Alangari Amman Kovil Street',
      secondary: 'Naduvirpatti, Ettayapuram, Thoothukudi, Tamil Nadu-628902',
      description: 'Schedule a factory tour and meeting',
      isBold: true
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      primary: 'Monday - Friday: 8:00 AM - 6:00 PM',
      secondary: 'Saturday: 9:00 AM - 2:00 PM',
      description: 'GMT-5 (Eastern Standard Time)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch with Our B2B Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to discuss your apparel manufacturing needs? Our experienced team is here to provide custom quotes, answer questions, and help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@eagleclothingcompany.fashion"
                className="inline-flex items-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us Now
              </a>
              <a
                href="tel:+919994289193"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">
                Send Us Your Inquiry
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and our B2B specialists will respond within 24 hours with detailed information tailored to your needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      placeholder="your@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                    placeholder="Please provide details about your requirements, quantities, timeline, and any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DAA520] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#B8941C] transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information and Response Time */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#DAA520] bg-opacity-10 rounded-lg flex items-center justify-center text-[#DAA520]">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1C1C1C] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[#1C1C1C] font-medium">
                        {info.primary}
                      </p>
                      {info.secondary && (
                        <p className={`${info.isBold ? 'font-semibold' : 'text-gray-600'} text-sm mb-2`}>
                          {info.secondary}
                        </p>
                      )}
                      <p className="text-gray-500 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#DAA520] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Response Guarantee</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Standard inquiries: 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Urgent matters: Same day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Quotes: 2-3 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Visit Our Facility</h2>
            <p className="text-lg text-gray-600">
              Schedule a factory tour to see our manufacturing capabilities firsthand
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map</p>
                <p className="text-gray-500">No: 28, Alangari Amman Kovil Street, Naduvirpatti, Ettayapuram</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-[#1C1C1C] mb-2">Factory Tours</h3>
                  <p className="text-sm text-gray-600">Monday - Friday, 10 AM - 4 PM</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#1C1C1C] mb-2">Meeting Rooms</h3>
                  <p className="text-sm text-gray-600">Private spaces for B2B discussions</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#1C1C1C] mb-2">Sample Display</h3>
                  <p className="text-sm text-gray-600">View quality and customization options</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors">
                  Schedule Factory Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;