import { Stethoscope, Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#060f28] border-t border-[#00C2FF]/10 pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C2FF] to-[#00FFE0] flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-[#0A1A3F]" />
              </div>
              <div>
                <span className="text-white font-bold text-lg block leading-tight">DEVICES DOCTOR</span>
                <span className="text-[#00C2FF] text-xs tracking-widest">Your Device Health Experts</span>
              </div>
            </div>
            <p className="text-[#EAF7FF]/50 text-sm leading-relaxed">
              Fast & Trusted 30 Minutes Doorstep Repair Service for all your devices. Genuine parts with 90-day warranty.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2">
              {["Screen Replacement", "Battery Replacement", "Charging Issues", "Software Problems", "Water Damage", "Camera Repair"].map((s) => (
                <li key={s}><a href="#services" className="text-[#EAF7FF]/50 text-sm hover:text-[#00C2FF] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[{ label: "Home", href: "#home" }, { label: "Services", href: "#services" }, { label: "Book Repair", href: "#booking" }, { label: "Reviews", href: "#reviews" }, { label: "Cities", href: "#cities" }].map((link) => (
                <li key={link.label}><a href={link.href} className="text-[#EAF7FF]/50 text-sm hover:text-[#00C2FF] transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <a href="tel:8169701980" className="text-[#EAF7FF]/70 text-sm hover:text-[#00C2FF] transition-colors">8169-701980</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <a href="mailto:info@devicesdoctor.com" className="text-[#EAF7FF]/70 text-sm hover:text-[#00C2FF] transition-colors">info@devicesdoctor.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <span className="text-[#EAF7FF]/50 text-sm">Surat, Mumbai, Delhi, Gorakhpur & more</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com/devicedoctor1990" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF]/20 transition-colors" data-testid="link-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/share/17wypKXAtc/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF]/20 transition-colors" data-testid="link-facebook">
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00C2FF]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#EAF7FF]/30 text-xs">&copy; {new Date().getFullYear()} Devices Doctor. All rights reserved.</p>
          <p className="text-[#EAF7FF]/30 text-xs">Powered by Growth Nations</p>
        </div>
      </div>
    </footer>
  );
}
