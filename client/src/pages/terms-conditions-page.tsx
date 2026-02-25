import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { useContent } from "@/hooks/use-content";

export default function TermsConditionsPage() {
  const { get, isLoading } = useContent("terms");

  const renderItems = (key: string) => {
    const items = get(key, "").split("\n").filter(Boolean);
    if (items.length === 0) return null;
    return (
      <ul className="list-disc list-inside space-y-1 pl-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };

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
              {get("title", "Terms &")} <span className="text-[#00C2FF]">{get("title_highlight", "Conditions")}</span>
            </h1>
            <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto" data-testid="text-terms-subtitle">
              {get("subtitle", "Please read our terms of service, warranty policy, and service charges carefully.")}
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
            {isLoading ? (
              <div className="text-[#00C2FF] text-center py-10">Loading...</div>
            ) : (
              <>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-charges">
                    {get("warranty_charges_title", "Is there any extra charges to claim the warranty on the parts repaired by you?")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    <p>{get("warranty_charges_content", "")}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-covered">
                    {get("warranty_covered_title", "Warranty Covered on Screen Replacement?")}
                  </h2>
                  <div className="space-y-2 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderItems("warranty_covered_items")}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-warranty-not-covered">
                    {get("not_covered_title", "What is not covered under warranty?")}
                  </h2>
                  <div className="space-y-2 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderItems("not_covered_items")}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-payment">
                    {get("payment_title", "How can I make payment?")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    <p>{get("payment_content", "")}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-faulty-parts">
                    {get("faulty_parts_title", "Replace Faulty Parts")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    <p>{get("faulty_parts_content", "")}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-service-charges">
                    {get("service_charges_title", "Service/Visit Charges")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    <p>{get("service_charges_content", "")}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-terms-general">
                    {get("general_terms_title", "General Terms")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderItems("general_terms_items")}
                  </div>
                </div>

                <div className="border-t border-[#00C2FF]/10 pt-6">
                  <p className="text-[#EAF7FF]/50 text-sm">
                    By using our services, you agree to the terms and conditions outlined above. For any questions or concerns, please contact us at <a href="mailto:support@devicesdoctor.in" className="text-[#00C2FF] hover:underline">support@devicesdoctor.in</a> or call <a href="tel:8169701980" className="text-[#00C2FF] hover:underline">8169-701980</a>.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
