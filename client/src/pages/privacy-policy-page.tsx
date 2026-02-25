import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A1A3F]">
      <Navbar />

      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden" data-testid="section-privacy-hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C2FF]/5 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 text-[#00C2FF] text-xs font-semibold tracking-wider mb-4">
              LEGAL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-privacy-title">
              Privacy <span className="text-[#00C2FF]">Policy</span>
            </h1>
            <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto" data-testid="text-privacy-subtitle">
              Your privacy is important to us. This policy explains how we handle your personal data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24" data-testid="section-privacy-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0D2247]/60 border border-[#00C2FF]/10 rounded-2xl p-6 sm:p-10 space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-1">What is this privacy notice for?</h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  We may handle your personal data in connection with your use of the Platform. This privacy notice set out, for the Platform, our collection and sharing practices, the uses to which personal data is put, the ways in which we protect it in accordance with the data protection and your privacy rights. Please read it carefully. This Statement applies to Personal Data processed by Devices Doctor when you:
                </p>
                <p>
                  Visit our website (www.devicesdoctor.in) and/or any other website(s) which reference or link to this statement (collectively).
                </p>
                <p>
                  Use, download, access, as applicable, any of our various internet-based offerings, including mobile platforms, software, or applications.
                </p>
                <p>
                  Receive communications from us, including emails, phone calls, or other electronic messages or Data we collect. We collect some information directly from you (for example, via forms you complete in our website or otherwise obtain). Such information is generally limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Name, Contact details, Email ID, IMEI, Device Details</li>
                  <li>Your communications with Devices Doctor personally</li>
                  <li>Information you provide on the Website, such as online questionnaires, or feedback forms</li>
                  <li>Information you provide when you subscribe to SMS services</li>
                  <li>Information you provide when you create your account, log-in credentials and information about your use of and preferences for the services</li>
                </ul>
                <p>
                  Other information is received indirectly from you via use of the services (for example, from observing your actions on the Website or any account access).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-2">How do we use your information?</h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>To process and complete your repair bookings</li>
                  <li>To communicate with you about your service requests</li>
                  <li>To send you service-related notifications and updates</li>
                  <li>To improve our services and customer experience</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-3">Data Protection</h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.
                </p>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only with technicians assigned to your repair service and as required by law.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-4">Your Rights</h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Access and review your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at support@devicesdoctor.in or call us at 8169-701980.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-5">Contact Us</h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  If you have any questions or concerns about this Privacy Policy or how your data is handled, please reach out to us:
                </p>
                <ul className="list-none space-y-1 pl-2">
                  <li><strong className="text-white">Email:</strong> support@devicesdoctor.in</li>
                  <li><strong className="text-white">Phone:</strong> 8169-701980</li>
                  <li><strong className="text-white">Address:</strong> Mumbai, Maharashtra, India</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
