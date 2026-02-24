import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { City } from "@shared/schema";

const cityImages: Record<string, string> = {
  Surat: "/images/city-surat.jpg",
  Mumbai: "/images/city-mumbai.jpg",
  Delhi: "/images/city-delhi.jpg",
  Gorakhpur: "/images/city-gorakhpur.jpg",
  Bangalore: "/images/city-bangalore.jpg",
  Pune: "/images/city-pune.jpg",
};

export default function CitiesSection() {
  const { data: cities = [] } = useQuery<City[]>({
    queryKey: ["/api/cities"],
  });

  const displayCities = cities.length > 0 ? cities : [
    { id: 1, name: "Surat", state: "Gujarat", active: true },
    { id: 2, name: "Mumbai", state: "Maharashtra", active: true },
    { id: 3, name: "Delhi", state: "Delhi", active: true },
    { id: 4, name: "Gorakhpur", state: "Uttar Pradesh", active: true },
    { id: 5, name: "Bangalore", state: "Karnataka", active: true },
    { id: 6, name: "Pune", state: "Maharashtra", active: true },
  ];

  return (
    <section id="cities" className="relative py-20 bg-[#0A1A3F]" data-testid="section-cities">
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
            <span className="text-[#00C2FF] text-sm font-semibold tracking-widest uppercase">Coverage</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00C2FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Cities We Serve</h2>
          <p className="text-[#EAF7FF]/60">Expanding across India with our doorstep repair network</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative rounded-xl border border-[#00C2FF]/15 overflow-hidden hover:border-[#00C2FF]/40 hover:shadow-[0_0_20px_rgba(0,194,255,0.1)] transition-all duration-300 cursor-pointer"
              data-testid={`card-city-${index}`}
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={cityImages[city.name] || "/images/city-surat.jpg"}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F] via-[#0A1A3F]/60 to-transparent" />
              </div>
              <div className="relative -mt-4 p-3 text-center">
                <MapPin className="w-5 h-5 text-[#00C2FF] mx-auto mb-1 group-hover:text-[#00FFE0] transition-colors duration-300" />
                <h3 className="text-white font-bold text-sm">{city.name}</h3>
                <p className="text-[#EAF7FF]/40 text-xs">{city.state}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
