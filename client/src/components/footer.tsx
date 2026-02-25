import { Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { Link } from "wouter";
import { useContent } from "@/hooks/use-content";

export default function Footer() {
  const { get } = useContent("footer");
  const { get: getCta } = useContent("cta");

  return (
    <footer className="bg-[#060f28] border-t border-[#00C2FF]/10 pt-10 sm:pt-16 pb-6 sm:pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo-devices-doctor.png"
                alt="Devices Doctor"
                className="w-10 h-10 rounded-full object-contain"
              />
              <div>
                <span className="text-white font-bold text-lg block leading-tight">{get("company_name", "DEVICES DOCTOR")}</span>
                <span className="text-[#00C2FF] text-xs tracking-widest">Your Device Health Experts</span>
              </div>
            </div>
            <p className="text-[#EAF7FF]/50 text-sm leading-relaxed">
              {get("company_description", "Fast & Trusted 30 Minutes Doorstep Repair Service for all your devices. Genuine parts with 90-day warranty.")}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Screen Replacement", slug: "screen-replacement" },
                { label: "Battery Replacement", slug: "battery-replacement" },
                { label: "Charging Issues", slug: "charging-issues" },
                { label: "Software Problems", slug: "software-problems" },
                { label: "Water Damage", slug: "water-damage" },
                { label: "Camera Repair", slug: "camera-speaker-repair" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <span className="text-[#EAF7FF]/50 text-sm hover:text-[#00C2FF] transition-colors cursor-pointer">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "All Brands", href: "/brands" },
                { label: "Service Areas", href: "/areas" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[#EAF7FF]/50 text-sm hover:text-[#00C2FF] transition-colors cursor-pointer">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <a href={`tel:${get("phone", "8169701980")}`} className="text-[#EAF7FF]/70 text-sm hover:text-[#00C2FF] transition-colors">
                  {getCta("phone_display", "8169-701980")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <a href={`mailto:${get("email", "support@devicesdoctor.in")}`} className="text-[#EAF7FF]/70 text-sm hover:text-[#00C2FF] transition-colors">
                  {get("email", "support@devicesdoctor.in")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00C2FF] mt-0.5 shrink-0" />
                <span className="text-[#EAF7FF]/50 text-sm">Mumbai, Thane, Navi Mumbai & more</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href={get("instagram", "https://instagram.com/devicedoctor1990")} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF]/20 transition-colors" data-testid="link-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href={get("facebook", "https://facebook.com/share/17wypKXAtc/")} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF]/20 transition-colors" data-testid="link-facebook">
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00C2FF]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#EAF7FF]/30 text-xs">&copy; {new Date().getFullYear()} {get("copyright", "Devices Doctor. All rights reserved.")}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy">
              <span className="text-[#EAF7FF]/30 text-xs hover:text-[#00C2FF] transition-colors cursor-pointer" data-testid="link-privacy-policy">Privacy Policy</span>
            </Link>
            <Link href="/terms-conditions">
              <span className="text-[#EAF7FF]/30 text-xs hover:text-[#00C2FF] transition-colors cursor-pointer" data-testid="link-terms-conditions">Terms & Conditions</span>
            </Link>
            <p className="text-[#EAF7FF]/30 text-xs">Powered by Growth Nations</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
