import { RefreshCw, AlertTriangle, XCircle, Mail, Phone, Clock } from 'lucide-react';

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-full mb-6">
              <RefreshCw className="w-8 h-8 text-[#DAA520]" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-2">Cancellation & Refund Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fair Policies. Reliable Support. Global Commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-12">
            At Eagle Clothing Company, we are committed to fulfilling every order with precision and professionalism. 
            As a global garment manufacturer catering to B2B clients, our cancellation and refund procedures are designed 
            to be clear, fair, and compliant with international trade standards.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-[#DAA520]" />
                Order Cancellations
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Cancellation Window: Within 24 Hours of Order Confirmation
              </h3>
              <p className="text-gray-700 mb-4">
                Orders can be cancelled within 24 hours of confirmation, provided production has not commenced. 
                Once production begins, raw material procurement and scheduling are locked in, making cancellation non-viable.
              </p>
              <p className="text-gray-700 mb-4">
                To cancel an order:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Email us at <a href="mailto:info@eagleclothingcompany.fashion" className="text-[#DAA520] hover:underline">info@eagleclothingcompany.fashion</a> with your Order ID and reason for cancellation</li>
                <li>Our team will confirm eligibility based on production status</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> Custom or private-label orders are non-cancellable once sampling or bulk production has begun.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Production Adjustments</h2>
              <p className="text-gray-700">
                If you require minor changes post-order confirmation (e.g., sizing, labeling, packaging), please contact us within 48 hours. 
                Adjustments may be possible if production hasn't started. Additional costs may apply.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-[#DAA520]" />
                Damaged or Defective Goods
              </h2>
              <p className="text-gray-700 mb-4">
                All shipments undergo strict quality control. However, if your consignment arrives:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Damaged in transit</li>
                <li>With clear manufacturing defects</li>
                <li>With discrepancies in quantity or specification</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Please notify us within 7 days of delivery. Share:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Your Order ID</li>
                <li>Clear photos of product or packaging issue</li>
                <li>Brief description of the problem</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Based on verification, we may offer:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Replacement of affected goods</li>
                <li>Store credit or adjustment against future orders</li>
                <li>Refund (if mutually agreed and applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Returns</h2>
              <p className="text-gray-700">
                Due to the customized and wholesale nature of our products, we do not accept returns unless there is a verified defect or dispatch error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Refund Eligibility & Processing</h2>
              <p className="text-gray-700 mb-4">
                Refunds are issued only in the following scenarios:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Advance payment received but order cancelled within eligible window</li>
                <li>Verified product faults or fulfillment errors (notified within 7 days)</li>
                <li>Mutual agreement in specific commercial cases</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Refund Method:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Original payment method</strong> (bank transfer, UPI, etc.)</li>
                <li><strong>Processing Time:</strong> 3–7 business days post-approval</li>
                <li><strong>Bank/Gateway Clearance:</strong> 5–10 additional business days</li>
              </ul>
            </section>

            <section className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-red-500" />
                Exceptions & Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                Refunds/replacements are not applicable in cases of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Buyer's remorse or incorrect order details provided by client</li>
                <li>Delays due to customs clearance, natural calamities, or force majeure</li>
                <li>Product damage caused after receipt (due to mishandling or improper storage)</li>
                <li>Custom-labeled or made-to-order garments rejected without valid justification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Bulk & Export Clients</h2>
              <p className="text-gray-700">
                All B2B transactions are governed by mutually signed quotations, invoices, or master agreements. 
                This policy works in tandem with those documents. Please refer to your sales contract for any variations.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Need Help?</h2>
              <p className="text-gray-700 mb-6">
                Our team is here to support you with refund- and order-related queries:
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
                
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-[#DAA520] mr-3 flex-shrink-0" />
                  <span>Business Hours: Mon–Sat, 10 AM – 6 PM IST</span>
                </div>
              </div>
              
              <p className="mt-8 text-center text-gray-700">
                We appreciate your business and remain committed to fairness, efficiency, and trust in every transaction.
              </p>
              
              <p className="mt-8 text-center text-gray-500 text-sm">
                © 2025 Eagle Clothing Company. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
