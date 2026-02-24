import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { allBrands } from "@/lib/brands-data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function BrandsListingPage() {
  return (
    <div className="min-h-screen bg-[#0A1A3F]">
      <Navbar />

      <section className="relative pt-24 pb-16 overflow-hidden" data-testid="section-brands-hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#071533] to-[#0A1A3F]" />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00C2FF]/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              All <span className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] bg-clip-text text-transparent">Brands</span>
            </h1>
            <p className="text-[#EAF7FF]/70 text-lg max-w-2xl mx-auto">
              We repair all major mobile phone brands. Select your brand for specialized repair services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#071533]" data-testid="section-brands-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {allBrands.map((brand, index) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="group relative rounded-xl border border-[#00C2FF]/15 bg-gradient-to-br from-[#0d2255]/50 to-[#0A1A3F]/70 p-6 text-center hover:border-[#00C2FF]/50 hover:shadow-[0_0_30px_rgba(0,194,255,0.15)] transition-all duration-300 cursor-pointer"
                  data-testid={`card-brand-${brand.slug}`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 transition-colors duration-300 overflow-hidden p-3">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-white font-bold text-2xl">${brand.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{brand.name}</h3>
                    <p className="text-[#EAF7FF]/40 text-xs mb-2">{brand.popularModels.length}+ models</p>
                    <div className="flex items-center justify-center gap-1 text-[#00C2FF]/60 group-hover:text-[#00C2FF] transition-colors">
                      <span className="text-xs font-medium">View Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
