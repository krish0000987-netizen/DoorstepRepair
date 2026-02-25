import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#0A1A3F]">
      <Navbar />

      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden" data-testid="section-terms-hero">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-terms-title">
              Terms & <span className="text-[#00C2FF]">Conditions</span>
            </h1>
            <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto" data-testid="text-terms-subtitle">
              Please read our terms of service, warranty policy, and service charges carefully.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24" data-testid="section-terms-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0D2247]/60 border border-[#00C2FF]/10 rounded-2xl p-6 sm:p-10 space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-charges">
                Is there any extra charges to claim the warranty on the parts repaired by you?
              </h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  If the Problem in the replaced part is informed within 24 hours after replacement then no extra charges will applicable. If the problem is reported after that we will arrange revisit and Rs.499 will be applicable as technician visit charge in the case of onsite servicing.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-covered">
                Warranty Covered on Screen Replacement?
              </h2>
              <div className="space-y-2 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Touch not working</li>
                  <li>Touch slow working</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-not-covered">
                What is not covered under warranty?
              </h2>
              <div className="space-y-2 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Water damage / Physical damage</li>
                  <li>Blank Screen / Reflector Issue</li>
                  <li>Any internal hardware damage</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-payment">
                How can I make payment?
              </h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  You can make payment via cash, Paytm, Google Pay, Phone Pe or Online Payment after the repair is completed.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-faulty-parts">
                Replace Faulty Parts
              </h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  Replace faulty parts must be submitted to our technician after repair/services of your device otherwise warranty will not be covered.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-service-charges">
                Service/Visit Charges
              </h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <p>
                  A minimum service/visit charges of Rs.499/- has to be paid in case of deny to repair or job will not completed or estimate cost will not approved.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-general">
                General Terms
              </h2>
              <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>All prices mentioned are subject to change without prior notice.</li>
                  <li>Devices Doctor reserves the right to refuse service if the device condition is beyond repair.</li>
                  <li>The warranty is void if the device is opened or tampered with by any unauthorized person after our repair.</li>
                  <li>We are not liable for any data loss during the repair process. Customers are advised to backup their data before repair.</li>
                  <li>Estimated repair time may vary depending on the complexity of the issue and parts availability.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#00C2FF]/10 pt-6">
              <p className="text-[#EAF7FF]/50 text-sm">
                By using our services, you agree to the terms and conditions outlined above. For any questions or concerns, please contact us at <a href="mailto:support@devicesdoctor.in" className="text-[#00C2FF] hover:underline">support@devicesdoctor.in</a> or call <a href="tel:8169701980" className="text-[#00C2FF] hover:underline">8169-701980</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
