import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "wouter";
import { mumbaiAreas, regions } from "@/lib/areas-data";

export default function CitiesSection() {
  const popularAreas = mumbaiAreas.filter((a) => a.popular);

  return (
    <section id="areas" className="relative py-12 sm:py-20 bg-[#0A1A3F]" data-testid="section-areas">
      <div className="absolute inset-0 bg-neon-glow opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00C2FF]" />
            <span className="text-[#00C2FF] text-sm font-semibold tracking-widest uppercase">Service Areas</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00C2FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Mumbai & Nearby Areas</h2>
          <p className="text-[#EAF7FF]/60">Doorstep repair service across Mumbai, Thane, Navi Mumbai & surrounding regions</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {popularAreas.slice(0, 18).map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="group rounded-xl border border-[#00C2FF]/15 bg-gradient-to-br from-[#0d2255]/50 to-[#0A1A3F]/70 p-4 text-center hover:border-[#00C2FF]/40 hover:shadow-[0_0_20px_rgba(0,194,255,0.1)] transition-all duration-300"
              data-testid={`card-area-${index}`}
            >
              <MapPin className="w-5 h-5 text-[#00C2FF] mx-auto mb-2 group-hover:text-[#00FFE0] transition-colors duration-300" />
              <h3 className="text-white font-bold text-sm">{area.name}</h3>
              <p className="text-[#EAF7FF]/40 text-xs mt-0.5">{area.region}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/areas">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] font-semibold text-sm hover:bg-[#00C2FF]/20 transition-all cursor-pointer" data-testid="link-view-all-areas">
              View All {mumbaiAreas.length}+ Areas We Serve →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
