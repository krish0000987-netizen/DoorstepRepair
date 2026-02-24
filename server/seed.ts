import { storage } from "./storage";

export async function seedDatabase() {
  const existingCities = await storage.getCities();
  if (existingCities.length > 0) return;

  await Promise.all([
    storage.createCity({ name: "Andheri", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Bandra", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Borivali", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Thane", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Navi Mumbai", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Powai", state: "Maharashtra", active: true }),
  ]);

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

  console.log("Database seeded successfully!");
}
