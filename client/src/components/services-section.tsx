import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  { image: "/images/svc-screen.jpg", name: "Screen Replacement", slug: "screen-replacement", desc: "Cracked or broken screen? We replace with original quality displays." },
  { image: "/images/svc-battery.jpg", name: "Battery Replacement", slug: "battery-replacement", desc: "Battery draining fast? Get genuine battery replacement." },
  { image: "/images/svc-charging.jpg", name: "Charging Issues", slug: "charging-issues", desc: "Not charging? We fix charging ports and connectors." },
  { image: "/images/svc-software.jpg", name: "Software Problems", slug: "software-problems", desc: "Hang, slow, or virus? Complete software repair." },
  { image: "/images/svc-water.jpg", name: "Water Damage Treatment", slug: "water-damage", desc: "Phone fell in water? Emergency water damage repair." },
  { image: "/images/svc-camera.jpg", name: "Camera & Speaker Repair", slug: "camera-speaker-repair", desc: "Blurry camera or no sound? We fix it all." },
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
            <Link key={service.name} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative rounded-xl border border-[#00C2FF]/15 bg-gradient-to-br from-[#0d2255]/60 to-[#0A1A3F]/80 overflow-hidden transition-all duration-300 hover:border-[#00C2FF]/40 hover:shadow-[0_0_25px_rgba(0,194,255,0.1)] cursor-pointer h-full"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F] via-[#0A1A3F]/70 to-[#0A1A3F]/20" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-1">
                    {service.name}
                    <ChevronRight className="w-4 h-4 text-[#00C2FF]/50 group-hover:text-[#00C2FF] group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-[#EAF7FF]/50 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
