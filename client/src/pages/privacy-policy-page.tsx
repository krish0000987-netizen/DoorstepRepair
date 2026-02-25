import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { useContent } from "@/hooks/use-content";

export default function PrivacyPolicyPage() {
  const { get, isLoading } = useContent("privacy");

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

  const renderParagraphs = (text: string) => {
    return text.split("\n\n").filter(Boolean).map((p, i) => (
      <p key={i}>{p}</p>
    ));
  };

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
              {get("title", "Privacy")} <span className="text-[#00C2FF]">{get("title_highlight", "Policy")}</span>
            </h1>
            <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto" data-testid="text-privacy-subtitle">
              {get("subtitle", "Your privacy is important to us. This policy explains how we handle your personal data.")}
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
            {isLoading ? (
              <div className="text-[#00C2FF] text-center py-10">Loading...</div>
            ) : (
              <>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-1">
                    {get("section_1_title", "What is this privacy notice for?")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderParagraphs(get("section_1_content", ""))}
                    {renderItems("section_1_items")}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-2">
                    {get("section_2_title", "How do we use your information?")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderParagraphs(get("section_2_content", ""))}
                    {renderItems("section_2_items")}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-3">
                    {get("section_3_title", "Data Protection")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderParagraphs(get("section_3_content", ""))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-4">
                    {get("section_4_title", "Your Rights")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderParagraphs(get("section_4_content", ""))}
                    {renderItems("section_4_items")}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4" data-testid="text-privacy-section-5">
                    {get("section_5_title", "Contact Us")}
                  </h2>
                  <div className="space-y-4 text-[#EAF7FF]/70 text-sm sm:text-base leading-relaxed">
                    {renderParagraphs(get("section_5_content", ""))}
                    <ul className="list-none space-y-1 pl-2">
                      <li><strong className="text-white">Email:</strong> {get("contact_email", "support@devicesdoctor.in")}</li>
                      <li><strong className="text-white">Phone:</strong> {get("contact_phone", "8169-701980")}</li>
                      <li><strong className="text-white">Address:</strong> {get("contact_address", "Mumbai, Maharashtra, India")}</li>
                    </ul>
                  </div>
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
