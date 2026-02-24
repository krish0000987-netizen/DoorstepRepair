import { motion } from "framer-motion";
import { Smartphone, Watch, Laptop, Tablet } from "lucide-react";

const specialities = [
  { icon: Smartphone, label: "All Mobile Brands", desc: "iPhone, Samsung, OnePlus, Xiaomi & more" },
  { icon: Watch, label: "Smart Watches", desc: "Apple Watch, Samsung Galaxy & more" },
  { icon: Laptop, label: "Laptops", desc: "HP, Dell, Lenovo, MacBook & more" },
  { icon: Tablet, label: "Tablets & iPads", desc: "iPad, Samsung Tab, Surface & more" },
];

export default function SpecialitiesSection() {
  return (
    <section className="relative py-20 bg-[#0A1A3F]" data-testid="section-specialities">
      <div className="absolute inset-0 bg-neon-glow opacity-30" />
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
            <span className="text-[#00C2FF] text-sm font-semibold tracking-widest uppercase">Our Specialities</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00C2FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Devices We Repair</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {specialities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-xl border border-[#00C2FF]/20 bg-gradient-to-br from-[#0d2255]/80 to-[#0A1A3F]/90 p-6 sm:p-8 text-center transition-all duration-300 hover:border-[#00C2FF]/50 hover:shadow-[0_0_30px_rgba(0,194,255,0.15)]"
              data-testid={`card-speciality-${index}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center group-hover:bg-[#00C2FF]/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#00C2FF] group-hover:text-[#00FFE0] transition-colors duration-300" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-1">{item.label}</h3>
                <p className="text-[#EAF7FF]/50 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
