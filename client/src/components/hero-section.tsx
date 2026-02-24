import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20" data-testid="section-hero">
      <div className="absolute inset-0 bg-[#0A1A3F]">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3F]/60 via-transparent to-[#0A1A3F]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00FFE0]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FFE0] animate-pulse" />
              <span className="text-[#00C2FF] text-sm font-medium">Fast & Reliable Service</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              <span className="text-white">DEVICES</span>
              <br />
              <span className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] bg-clip-text text-transparent">DOCTOR</span>
            </h1>

            <p className="text-[#EAF7FF]/80 text-base sm:text-xl font-medium mb-2">
              Your Device Health Experts
            </p>
            <p className="text-[#00C2FF] text-lg sm:text-2xl font-bold mb-2">
              30 Minutes Doorstep Repair Service
            </p>
            <p className="text-[#EAF7FF]/60 text-sm sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              We Repair Onsite Within 30 Minutes! All Mobile Brands, Laptops, Tablets & Smart Watches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#booking">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-[#0A1A3F] font-bold text-base px-8 shadow-[0_0_30px_rgba(0,194,255,0.3)] no-default-hover-elevate no-default-active-elevate"
                  data-testid="button-hero-book"
                >
                  Book Repair Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="https://wa.me/918169701980?text=Hi%2C%20I%20need%20a%20device%20repair"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#00FFE0]/40 text-[#00FFE0] font-semibold text-base px-8 bg-[#00FFE0]/5 no-default-hover-elevate no-default-active-elevate"
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Booking
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <img
                      key={i}
                      src={`/images/technician-${i}.png`}
                      alt="Technician"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0A1A3F] object-cover"
                    />
                  ))}
                </div>
                <span className="text-[#EAF7FF]/70 text-xs sm:text-sm">50+ Certified Technicians</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[#EAF7FF]/70 text-sm ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-[#00C2FF]/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-64 h-64 rounded-full border border-[#00FFE0]/10 animate-[spin_15s_linear_infinite_reverse]" />
            </div>
            <img
              src="/images/hero-device.png"
              alt="Device repair"
              className="relative z-10 w-80 h-auto drop-shadow-[0_0_40px_rgba(0,194,255,0.3)]"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1A3F] to-transparent" />
    </section>
  );
}
