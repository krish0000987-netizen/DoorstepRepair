import { useState } from "react";
import { Phone, Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Cities", href: "#cities" },
  { label: "Book Now", href: "#booking" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A3F]/95 backdrop-blur-md border-b border-[#00C2FF]/20" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#00FFE0] flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-[#0A1A3F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide leading-tight">DEVICES</span>
              <span className="text-xs font-semibold text-[#00C2FF] tracking-[0.2em] leading-tight">DOCTOR</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#EAF7FF]/80 transition-colors duration-200 rounded-md hover:text-[#00C2FF]"
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:8169701980" className="flex items-center gap-2 text-[#00FFE0] text-sm font-semibold" data-testid="link-call">
              <Phone className="w-4 h-4" />
              8169-701980
            </a>
            <a href="#booking">
              <Button className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-[#0A1A3F] font-semibold text-sm no-default-hover-elevate no-default-active-elevate" data-testid="button-book-now-nav">
                Book Repair
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A1A3F]/98 border-t border-[#00C2FF]/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-[#EAF7FF] font-medium rounded-lg hover:bg-[#00C2FF]/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a href="tel:8169701980" className="flex items-center justify-center gap-2 text-[#00FFE0] font-semibold py-3">
                  <Phone className="w-4 h-4" /> Call Now: 8169-701980
                </a>
                <a href="#booking" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-[#0A1A3F] font-semibold no-default-hover-elevate no-default-active-elevate">
                    Book Repair Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
