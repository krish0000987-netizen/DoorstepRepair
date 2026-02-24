import { motion } from "framer-motion";
import { Monitor, Battery, Zap, Code, Droplets, Camera, ChevronRight } from "lucide-react";

const services = [
  { icon: Monitor, name: "Screen Replacement", desc: "Cracked or broken screen? We replace with original quality displays.", price: "Starting ₹999" },
  { icon: Battery, name: "Battery Replacement", desc: "Battery draining fast? Get genuine battery replacement.", price: "Starting ₹499" },
  { icon: Zap, name: "Charging Issues", desc: "Not charging? We fix charging ports and connectors.", price: "Starting ₹399" },
  { icon: Code, name: "Software Problems", desc: "Hang, slow, or virus? Complete software repair.", price: "Starting ₹299" },
  { icon: Droplets, name: "Water Damage Treatment", desc: "Phone fell in water? Emergency water damage repair.", price: "Starting ₹799" },
  { icon: Camera, name: "Camera & Speaker Repair", desc: "Blurry camera or no sound? We fix it all.", price: "Starting ₹599" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-[#071533]" data-testid="section-services">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Expert Repair Services</h2>
          <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto">Professional repair services for all your devices with genuine parts and warranty</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-xl border border-[#00C2FF]/15 bg-gradient-to-br from-[#0d2255]/60 to-[#0A1A3F]/80 p-6 transition-all duration-300 hover:border-[#00C2FF]/40 hover:shadow-[0_0_25px_rgba(0,194,255,0.1)] cursor-pointer"
              data-testid={`card-service-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/25 flex items-center justify-center group-hover:bg-[#00C2FF]/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#00C2FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-1">
                    {service.name}
                    <ChevronRight className="w-4 h-4 text-[#00C2FF]/50 group-hover:text-[#00C2FF] group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-[#EAF7FF]/50 text-sm mb-3 leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00FFE0]/10 border border-[#00FFE0]/20 text-[#00FFE0] text-xs font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
