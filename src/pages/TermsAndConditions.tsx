import { FileText, Shield, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-full mb-6">
              <FileText className="w-8 h-8 text-[#DAA520]" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-2">Terms & Conditions</h1>
            <p className="text-gray-500">Last updated: July 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Welcome to Eagle Clothing Company. By accessing or using our website [www.eagleclothingcompany.fashion] and 
            engaging with our B2B manufacturing services, you agree to comply with and be bound by the following 
            Terms and Conditions. These terms apply to all orders, inquiries, communications, and transactions 
            facilitated through our platform or export channels.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            Please read the terms carefully before placing an order or entering into any business relationship. 
            Continued use of our site and services indicates your acceptance.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-[#DAA520]" />
                1. General Use of the Website
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                By using this website, you confirm that you are:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>An authorized representative of a company or entity</li>
                <li>At least 18 years of age or legally able to enter into binding contracts</li>
              </ul>
              <p className="text-gray-700 mb-6">
                You agree to use our platform for legitimate business purposes and refrain from any activity that could 
                disrupt, damage, or interfere with the performance of the site or compromise data security.
              </p>
              <p className="text-gray-700">
                Eagle Clothing Company reserves the right to limit or suspend access at its discretion without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">2. Product Information & Availability</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All garments and bulk production offerings listed are subject to availability, manufacturing timelines, and minimum order quantities (MOQs).</li>
                <li>While we aim for accuracy, occasional typographical or pricing errors may occur. We reserve the right to correct such discrepancies and notify you before processing your order.</li>
                <li>Specifications, colors, and fabric textures may vary slightly depending on production batches and custom requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">3. Orders, Pricing & Custom Manufacturing</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Orders must meet the minimum quantity thresholds defined by the product category.</li>
                <li>Custom and private-label manufacturing orders are confirmed only after design approval and advance payment.</li>
                <li>Pricing is subject to change based on fabric costs, labor, and global market fluctuations. Confirmed orders will honor the agreed pricing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">4. Payments</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full or partial advance payment is required depending on the contract terms or pro forma invoice.</li>
                <li>We accept payments via bank transfer, international SWIFT wire, UPI (domestic), and other approved channels.</li>
                <li>All payments must be made in the agreed currency. Any transaction or banking fees are to be borne by the buyer.</li>
                <li>Eagle Clothing Company does not store card or payment data. All transactions are handled securely through certified payment providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">5. Shipping & Delivery</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We provide worldwide shipping via recognized freight and logistics companies.</li>
                <li>FOB, CIF, and other Incoterm options are available based on agreement.</li>
                <li>Delivery timelines are estimates and depend on order size, production lead times, and destination logistics.</li>
                <li>Delays caused by customs, port holds, or force majeure events are not within our control. We will keep clients informed throughout.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">6. User Responsibilities</h2>
              <p className="text-lg text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Misrepresent your identity or business details</li>
                <li>Attempt unauthorized access to our systems or data</li>
                <li>Resell, redistribute, or reproduce our designs without written approval</li>
                <li>Post or transmit false, abusive, or unlawful content via our communication channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">7. Intellectual Property</h2>
              <p className="text-gray-700">
                All designs, brand materials, and content presented on this website are the intellectual property of Eagle Clothing Company. 
                You may not copy, reuse, or distribute any part of our website, branding, or products without explicit written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">8. Amendments to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms & Conditions at any time. Any changes will be posted on this page with the updated date. 
                Continued use of the website implies agreement with the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Eagle Clothing Company shall not be held liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Indirect, incidental, or consequential damages resulting from use of the website</li>
                <li>Delays or disruptions due to third-party carriers, customs, or unforeseen circumstances</li>
                <li>Variations in fabric or sizing that fall within acceptable commercial tolerances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">10. Governing Law</h2>
              <p className="text-gray-700">
                These Terms & Conditions are governed by the laws of India. Any disputes shall fall under the jurisdiction of courts in Tirupur, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">11. Contact Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                For support, questions, or clarification, please contact:
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#DAA520] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Eagle Clothing Company</p>
                      <p>No: 28, Alangari Amman Kovil Street</p>
                      <p>Naduvirpatti, Ettayapuram,</p>
                      <p>Thoothukudi, Tamil Nadu-628902</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#DAA520] mr-3 flex-shrink-0" />
                    <a href="mailto:info@eagleclothingcompany.fashion" className="hover:underline">
                      info@eagleclothingcompany.fashion
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#DAA520] mr-3 flex-shrink-0" />
                    <a href="tel:+919994289193" className="hover:underline">
                      +91 99942 89193
                    </a>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-center text-gray-500">
                © 2025 Eagle Clothing Company. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
