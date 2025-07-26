import { Truck, Clock, Globe, MapPin, Phone, Mail } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-full mb-6">
              <Truck className="w-8 h-8 text-[#DAA520]" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-2">Shipping Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable, Global Fulfillment – On Time, Professionally Managed
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-12">
            At Eagle Clothing Company, we pride ourselves on delivering high-quality garments to clients across the globe. 
            Whether you are a retailer, wholesaler, or corporate buyer, our logistics and export process is designed to 
            ensure professional, timely, and secure delivery.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#DAA520]" />
                Order Processing & Production
              </h2>
              <p className="text-gray-700 mb-4">
                Upon confirmation of your order and receipt of advance payment (as per contract terms), we initiate processing and production. 
                Processing times vary based on order type and complexity:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Standard Bulk Orders:</strong> 7–15 business days (post-payment)</li>
                <li><strong>Custom/OEM Manufacturing:</strong> 3–6 weeks (based on sampling, approvals, and order size)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We will communicate clear production and shipping schedules as part of your order documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Shipping Destinations & Timelines</h2>
              <p className="text-gray-700 mb-4">
                We ship worldwide using trusted freight forwarders and logistics partners.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-[#DAA520] mr-2" />
                    Domestic Shipping (India):
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Metro Cities:</strong> 3–6 business days after dispatch</li>
                    <li><strong>Tier 2/3 Locations:</strong> 5–10 business days</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4 flex items-center">
                    <Globe className="w-5 h-5 text-[#DAA520] mr-2" />
                    International Shipping:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Asia-Pacific & Middle East:</strong> 7–15 business days</li>
                    <li><strong>Europe, North America:</strong> 15–25 business days</li>
                    <li><strong>Africa & Latin America:</strong> 20–30 business days (dependent on freight and customs clearance)</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm italic mt-4">
                Please note: Delivery estimates may vary due to port congestion, customs holds, or international regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Shipping Terms (Incoterms)</h2>
              <p className="text-gray-700 mb-4">
                We offer flexible international shipping under multiple Incoterms based on your contract:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>FOB (Free On Board)</strong></li>
                <li><strong>CIF (Cost, Insurance, and Freight)</strong></li>
                <li><strong>EXW (Ex Works)</strong> for buyers managing their own logistics</li>
                <li><strong>DDP</strong> available for select regions (subject to agreement)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All terms, including container capacity and logistics responsibilities, will be outlined in the invoice or trade agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Shipping Charges</h2>
              <p className="text-gray-700 mb-4">
                Shipping charges depend on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Destination country and port</li>
                <li>Shipping method (air freight / sea freight)</li>
                <li>Order volume, dimensions, and Incoterm chosen</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These charges will be clearly quoted and agreed upon before order finalization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Tracking & Dispatch</h2>
              <p className="text-gray-700 mb-4">
                Upon shipment, we provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Shipping Bill & Invoice</li>
                <li>Tracking details and container number (if applicable)</li>
                <li>Estimated Time of Arrival (ETA)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Updates are sent via email or WhatsApp and coordinated by our logistics team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Delays & Logistics Exceptions</h2>
              <p className="text-gray-700 mb-4">
                While we strive for on-time delivery, certain conditions may cause unavoidable delays:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Weather disruptions or strikes</li>
                <li>Port congestion or customs clearance issues</li>
                <li>Geopolitical disruptions affecting cargo movement</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our team will proactively update you on any such delays and support resolution efforts.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Need Help With Your Shipment?</h2>
              <p className="text-gray-700 mb-6">
                For shipping inquiries, container planning, or trade documentation assistance, please reach out to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#DAA520] mr-3" />
                  <a href="mailto:info@eagleclothingcompany.fashion" className="hover:underline">
                    info@eagleclothingcompany.fashion
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#DAA520] mr-3" />
                  <a href="tel:+919994289193" className="hover:underline">
                    +91 99942 89193 (WhatsApp)
                  </a>
                </div>
                
                <div className="text-sm text-gray-500 mt-2">
                  Business Hours: Monday–Saturday, 10 AM – 6 PM IST
                </div>
              </div>
              
              <p className="mt-8 text-center text-gray-700">
                Thank you for choosing Eagle Clothing Company. We are committed to delivering your products safely, efficiently, and globally aligned.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
