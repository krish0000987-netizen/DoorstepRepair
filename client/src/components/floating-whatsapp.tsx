import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918169701980?text=Hi%2C%20I%20need%20a%20device%20repair"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      data-testid="button-floating-whatsapp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#0A1A3F] animate-pulse" />
    </motion.a>
  );
}
