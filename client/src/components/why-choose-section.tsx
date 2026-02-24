import { motion } from "framer-motion";
import { Clock, Home, UserCheck, Shield, IndianRupee, Award } from "lucide-react";

const reasons = [
  { icon: Clock, title: "30 Minutes Fast Service", desc: "We reach your doorstep within 30 minutes of booking" },
  { icon: Home, title: "Doorstep Repair", desc: "Repair at your home or office, no need to visit shops" },
  { icon: UserCheck, title: "Professional Technicians", desc: "Certified and experienced technicians" },
  { icon: Shield, title: "Genuine Quality Parts", desc: "We use only genuine OEM quality parts" },
  { icon: IndianRupee, title: "Affordable Price", desc: "Transparent pricing with no hidden charges" },
  { icon: Award, title: "Service Warranty", desc: "90-day warranty on all repairs" },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="relative py-20 bg-[#0A1A3F]" data-testid="section-why-choose">
      <div className="absolute inset-0 bg-neon-glow opacity-20" />
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
            <span className="text-[#00C2FF] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00C2FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Why Trust Devices Doctor?</h2>
          <p className="text-[#EAF7FF]/60 max-w-2xl mx-auto">Fast, Reliable, Trusted - Your device deserves the best care</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group flex items-start gap-4 p-5 rounded-xl border border-[#00C2FF]/10 bg-[#0d2255]/40 hover:border-[#00C2FF]/30 transition-all duration-300"
              data-testid={`card-reason-${index}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C2FF]/20 to-[#00FFE0]/10 border border-[#00C2FF]/30 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#00C2FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                <p className="text-[#EAF7FF]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
