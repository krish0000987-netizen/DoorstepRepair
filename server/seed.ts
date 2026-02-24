import { storage } from "./storage";
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  const existingCities = await storage.getCities();
  if (existingCities.length === 0) {
    await Promise.all([
      storage.createCity({ name: "Andheri", state: "Maharashtra", active: true }),
      storage.createCity({ name: "Bandra", state: "Maharashtra", active: true }),
      storage.createCity({ name: "Borivali", state: "Maharashtra", active: true }),
      storage.createCity({ name: "Thane", state: "Maharashtra", active: true }),
      storage.createCity({ name: "Navi Mumbai", state: "Maharashtra", active: true }),
      storage.createCity({ name: "Powai", state: "Maharashtra", active: true }),
    ]);
  }

  const services = await storage.getServices();
  if (services.length === 0) {
    const servicesData = [
      { name: "Screen Replacement", description: "Professional screen replacement with original quality displays for all devices", icon: "Monitor", category: "repair", priceRange: "" },
      { name: "Battery Replacement", description: "Genuine battery replacement for improved performance and battery life", icon: "Battery", category: "repair", priceRange: "" },
      { name: "Charging Issues", description: "Fix charging port, wireless charging and cable issues", icon: "Zap", category: "repair", priceRange: "" },
      { name: "Software Problems", description: "Complete software repair including OS reinstall, virus removal", icon: "Code", category: "repair", priceRange: "" },
      { name: "Water Damage Treatment", description: "Emergency water damage repair and component cleaning", icon: "Droplets", category: "repair", priceRange: "" },
      { name: "Camera & Speaker Repair", description: "Fix blurry camera, mic issues, and speaker problems", icon: "Camera", category: "repair", priceRange: "" },
    ];

    for (const s of servicesData) {
      await storage.createService(s);
    }
  }

  const existingReviews = await storage.getReviews();
  if (existingReviews.length === 0) {
    const reviewsData = [
      { customerName: "Rahul Sharma", rating: 5, comment: "Amazing service! My phone screen was replaced in just 25 minutes at my doorstep. The technician was very professional and used genuine parts. Highly recommended!", service: "Screen Replacement", city: "Andheri" },
      { customerName: "Priya Patel", rating: 5, comment: "Very professional technician came to my office and fixed my laptop battery within 30 minutes. Great warranty and genuine parts. Will definitely use again!", service: "Battery Replacement", city: "Bandra" },
      { customerName: "Amit Kumar", rating: 4, comment: "Excellent service! The technician was polite and skilled. Fixed my charging issue quickly. Very happy with the quality!", service: "Charging Issues", city: "Thane" },
      { customerName: "Sneha Gupta", rating: 5, comment: "Saved my water damaged phone! I thought it was gone forever but the technician fixed it perfectly. Amazing work and great warranty!", service: "Water Damage Treatment", city: "Powai" },
      { customerName: "Vikram Singh", rating: 5, comment: "Best doorstep repair service I have ever used. Camera was fixed in 20 minutes. No hidden charges and excellent work!", service: "Camera & Speaker Repair", city: "Borivali" },
    ];

    for (const r of reviewsData) {
      await storage.createReview(r);
    }
  }

  const adminCount = await storage.getAdminCount();
  if (adminCount === 0) {
    const passwordHash = await bcrypt.hash("admin123", 10);
    await storage.createAdmin({
      username: "admin",
      passwordHash,
    });
    console.log("Default admin created (username: admin, password: admin123)");
  }

  const existingContent = await storage.getAllContent();
  if (existingContent.length === 0) {
    const defaultContent = [
      { section: "hero", key: "badge", value: "Fast & Reliable Service" },
      { section: "hero", key: "title_line1", value: "DEVICES" },
      { section: "hero", key: "title_line2", value: "DOCTOR" },
      { section: "hero", key: "subtitle", value: "Your Device Health Experts" },
      { section: "hero", key: "highlight", value: "30 Minutes Doorstep Repair Service" },
      { section: "hero", key: "description", value: "We Repair Onsite Within 30 Minutes! All Mobile Brands, Laptops, Tablets & Smart Watches." },
      { section: "hero", key: "button_primary", value: "Book Repair Now" },
      { section: "hero", key: "button_secondary", value: "WhatsApp Booking" },
      { section: "hero", key: "technician_count", value: "50+ Certified Technicians" },
      { section: "hero", key: "rating", value: "4.9/5 Rating" },
      { section: "hero", key: "hero_image", value: "/images/hero-device.png", contentType: "image" },

      { section: "cta", key: "title", value: "Need Help?" },
      { section: "cta", key: "title_highlight", value: "Call Now!" },
      { section: "cta", key: "phone", value: "8169701980" },
      { section: "cta", key: "phone_display", value: "8169-701980" },
      { section: "cta", key: "tagline", value: "Fast • Reliable • Trusted" },
      { section: "cta", key: "whatsapp_number", value: "918169701980" },
      { section: "cta", key: "feature_1", value: "Certified Technicians" },
      { section: "cta", key: "feature_2", value: "Genuine Parts" },
      { section: "cta", key: "feature_3", value: "90-Day Warranty" },

      { section: "about", key: "title", value: "About" },
      { section: "about", key: "title_highlight", value: "Devices Doctor" },
      { section: "about", key: "description", value: "Your trusted partner for doorstep device repair in Mumbai & nearby areas. Fast, reliable, and affordable." },
      { section: "about", key: "stat_1_value", value: "10,000+" },
      { section: "about", key: "stat_1_label", value: "Repairs Done" },
      { section: "about", key: "stat_2_value", value: "50+" },
      { section: "about", key: "stat_2_label", value: "Technicians" },
      { section: "about", key: "stat_3_value", value: "30 Min" },
      { section: "about", key: "stat_3_label", value: "Avg. Repair" },
      { section: "about", key: "stat_4_value", value: "4.9★" },
      { section: "about", key: "stat_4_label", value: "Rating" },
      { section: "about", key: "mission_title", value: "Our Mission" },
      { section: "about", key: "mission_description", value: "To provide fast, reliable, and affordable device repair services at your doorstep. We believe everyone deserves quality repair without the hassle of visiting a service center." },
      { section: "about", key: "value_1_title", value: "Quality First" },
      { section: "about", key: "value_1_description", value: "We use only genuine parts and follow manufacturer guidelines for every repair." },
      { section: "about", key: "value_2_title", value: "Customer Focus" },
      { section: "about", key: "value_2_description", value: "Your convenience is our priority. We come to you, saving your time and effort." },
      { section: "about", key: "value_3_title", value: "Transparency" },
      { section: "about", key: "value_3_description", value: "No hidden charges. We explain the issue and give you a fair estimate before starting." },

      { section: "contact", key: "title", value: "Contact" },
      { section: "contact", key: "title_highlight", value: "Us" },
      { section: "contact", key: "description", value: "Get in touch with us for device repair, service inquiries, or any questions." },
      { section: "contact", key: "phone", value: "8169701980" },
      { section: "contact", key: "email", value: "support@devicesdoctor.com" },
      { section: "contact", key: "whatsapp", value: "918169701980" },
      { section: "contact", key: "address", value: "Mumbai, Maharashtra, India" },
      { section: "contact", key: "hours_weekday", value: "Monday - Saturday: 9:00 AM - 7:00 PM" },
      { section: "contact", key: "hours_weekend", value: "Sunday: 10:00 AM - 5:00 PM" },

      { section: "footer", key: "company_name", value: "Devices Doctor" },
      { section: "footer", key: "company_description", value: "Mumbai's trusted doorstep device repair service. We fix mobiles, laptops, tablets & smart watches at your location." },
      { section: "footer", key: "phone", value: "8169701980" },
      { section: "footer", key: "email", value: "support@devicesdoctor.com" },
      { section: "footer", key: "instagram", value: "https://instagram.com/devicesdoctor" },
      { section: "footer", key: "facebook", value: "https://facebook.com/devicesdoctor" },
      { section: "footer", key: "copyright", value: "© 2025 Devices Doctor. All rights reserved." },

      { section: "specialities", key: "item_1_title", value: "Mobile Phones" },
      { section: "specialities", key: "item_1_description", value: "All brands including iPhone, Samsung, OnePlus, Xiaomi & more" },
      { section: "specialities", key: "item_2_title", value: "Laptops" },
      { section: "specialities", key: "item_2_description", value: "MacBook, HP, Dell, Lenovo, Asus & all other brands" },
      { section: "specialities", key: "item_3_title", value: "Tablets & Smart Watches" },
      { section: "specialities", key: "item_3_description", value: "iPad, Samsung Tab, Apple Watch & all smart devices" },

      { section: "why_choose", key: "reason_1_title", value: "30-Min Doorstep Service" },
      { section: "why_choose", key: "reason_1_description", value: "Our technician arrives at your location and completes the repair in just 30 minutes." },
      { section: "why_choose", key: "reason_2_title", value: "Genuine Parts & Warranty" },
      { section: "why_choose", key: "reason_2_description", value: "We use only genuine quality parts and provide 90-day warranty on all repairs." },
      { section: "why_choose", key: "reason_3_title", value: "Certified Technicians" },
      { section: "why_choose", key: "reason_3_description", value: "Our expert technicians are trained and certified to handle all device repairs." },
      { section: "why_choose", key: "reason_4_title", value: "No Hidden Charges" },
      { section: "why_choose", key: "reason_4_description", value: "Transparent pricing with no surprises. You pay exactly what we quote." },

      { section: "navbar", key: "logo_text_1", value: "DEVICES" },
      { section: "navbar", key: "logo_text_2", value: "DOCTOR" },
      { section: "navbar", key: "phone", value: "8169701980" },
    ];

    for (const c of defaultContent) {
      await storage.upsertContent(c.section, c.key, c.value, (c as any).contentType || "text");
    }
    console.log("Default site content seeded!");
  }

  console.log("Database seeded successfully!");
}
