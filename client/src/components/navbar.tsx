import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A3F]/95 backdrop-blur-md border-b border-[#00C2FF]/20" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-14 sm:h-16 md:h-20">
          <Link href="/">
            <span className="flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer" data-testid="link-logo">
              <img
                src="/images/logo-devices-doctor.png"
                alt="Devices Doctor"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-lg font-bold text-white tracking-wide leading-tight">DEVICES</span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#00C2FF] tracking-[0.2em] leading-tight">DOCTOR</span>
              </div>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer ${
                    location === link.href
                      ? "text-[#00C2FF] bg-[#00C2FF]/10"
                      : "text-[#EAF7FF]/80 hover:text-[#00C2FF]"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:8169701980" className="flex items-center gap-2 text-[#00FFE0] text-sm font-semibold" data-testid="link-call">
              <Phone className="w-4 h-4" />
              8169-701980
            </a>
            <a href="https://wa.me/918169701980?text=Hi%2C%20I%20need%20a%20device%20repair" target="_blank" rel="noopener noreferrer">
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
                <Link key={link.label} href={link.href}>
                  <span
                    className={`block px-4 py-3 font-medium rounded-lg transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-[#00C2FF] bg-[#00C2FF]/10"
                        : "text-[#EAF7FF] hover:bg-[#00C2FF]/10"
                    }`}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a href="tel:8169701980" className="flex items-center justify-center gap-2 text-[#00FFE0] font-semibold py-3">
                  <Phone className="w-4 h-4" /> Call Now: 8169-701980
                </a>
                <a href="https://wa.me/918169701980?text=Hi%2C%20I%20need%20a%20device%20repair" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
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
