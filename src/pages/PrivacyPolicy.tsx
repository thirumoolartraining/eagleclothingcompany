import { Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-[#DAA520]" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Privacy is Our Priority
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            At Eagle Clothing Company, we are committed to safeguarding your personal and business information. 
            As a global B2B garment manufacturer, we respect your privacy and ensure your data is handled with 
            integrity, transparency, and in compliance with the Indian Information Technology Act and international 
            data protection regulations such as the GDPR.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            This Privacy Policy outlines what information we collect, why we collect it, how we protect it, 
            and your rights while interacting with our website, export services, or product platforms.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-[#DAA520]" />
              Information We Collect
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When you browse our website, submit an inquiry, place an order, or subscribe to business updates, 
              we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Company Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Business/Shipping Address</li>
              <li>Tax Identification Numbers (GST/VAT/TIN where applicable)</li>
              <li>Payment Details (processed via secure third-party platforms)</li>
              <li>Order and Communication History</li>
              <li>Business Requirements or Custom Order Details</li>
              <li>Device and Browser Information</li>
              <li>Cookies and Analytics Data (for website functionality and performance)</li>
            </ul>
            <p className="text-gray-600 italic">
              We only collect data relevant to fulfilling orders and managing your business relationship with us.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Why We Collect Your Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              We collect and use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process orders and custom garment production requests</li>
              <li>Communicate order status and shipping details</li>
              <li>Manage wholesale or export client relationships</li>
              <li>Generate invoices and trade documentation</li>
              <li>Offer personalized service and support</li>
              <li>Send promotional or production-related communications (if you opt in)</li>
              <li>Improve our operations, website, and B2B experience through analytics</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">How Your Information is Protected</h2>
            <p className="text-lg text-gray-700 mb-4">
              We implement robust data protection practices to ensure the confidentiality and security of your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>SSL Encryption:</strong> All web traffic and data exchanges are secured with SSL technology</li>
              <li><strong>Secure Payment Gateways:</strong> Transactions are processed via PCI-compliant third-party gateways; we do not store payment data</li>
              <li><strong>Server Security:</strong> Our servers are protected with firewalls, restricted access, and routine audits</li>
              <li><strong>Limited Data Access:</strong> Only authorized personnel can access sensitive data for business use</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Your Rights & Choices</h2>
            <p className="text-lg text-gray-700 mb-4">
              As a user and business client, you have full control over your data. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Request access to your stored information</li>
              <li>Correct or update your details</li>
              <li>Request deletion of data (subject to compliance requirements)</li>
              <li>Revoke consent for marketing or outreach</li>
              <li>Report any data misuse or privacy concerns</li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, please email us at{' '}
              <a href="mailto:info@eagleclothingcompany.fashion" className="text-[#DAA520] hover:underline">
                info@eagleclothingcompany.fashion
              </a>
              . We aim to respond to such requests within 30 days.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              For questions or concerns related to this Privacy Policy or how your information is handled, 
              contact our Data Protection Officer at:
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#DAA520] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Eagle Clothing Company</p>
                  <p>Attn: Data Protection Officer</p>
                  <p>No: 28, Alangari Amman Kovil Street</p>
                  <p>Naduvirpatti, Ettayapuram,</p>
                  <p>Thoothukudi, Tamil Nadu-628902</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#DAA520] mr-3" />
                <a href="mailto:info@eagleclothingcompany.fashion" className="hover:underline">
                  info@eagleclothingcompany.fashion
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#DAA520] mr-3" />
                <a href="tel:+919994289193" className="hover:underline">
                  +91 99942 89193
                </a>
              </div>
            </div>
            
            <p className="mt-6 text-gray-600">
              We take every privacy inquiry seriously and are committed to transparency and trust.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy as our operations or legal requirements evolve. 
              Revisions will be posted on this page with the most recent revision date.
            </p>
            <p className="text-gray-700 font-medium">
              Last Revised: July 2025
            </p>
            <p className="mt-8 text-gray-700">
              Thank you for trusting Eagle Clothing Company. We value your business and are committed to protecting your privacy.
            </p>
            <p className="mt-4 text-gray-500">
              © 2025 Eagle Clothing Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
