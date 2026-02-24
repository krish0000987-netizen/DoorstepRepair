import { storage } from "./storage";

export async function seedDatabase() {
  const existingCities = await storage.getCities();
  if (existingCities.length > 0) return;

  await Promise.all([
    storage.createCity({ name: "Surat", state: "Gujarat", active: true }),
    storage.createCity({ name: "Mumbai", state: "Maharashtra", active: true }),
    storage.createCity({ name: "Delhi", state: "Delhi", active: true }),
    storage.createCity({ name: "Gorakhpur", state: "Uttar Pradesh", active: true }),
    storage.createCity({ name: "Bangalore", state: "Karnataka", active: true }),
    storage.createCity({ name: "Pune", state: "Maharashtra", active: true }),
  ]);

  const servicesData = [
    { name: "Screen Replacement", description: "Professional screen replacement with original quality displays for all devices", icon: "Monitor", category: "repair", priceRange: "₹999 - ₹4999" },
    { name: "Battery Replacement", description: "Genuine battery replacement for improved performance and battery life", icon: "Battery", category: "repair", priceRange: "₹499 - ₹2999" },
    { name: "Charging Issues", description: "Fix charging port, wireless charging and cable issues", icon: "Zap", category: "repair", priceRange: "₹399 - ₹1499" },
    { name: "Software Problems", description: "Complete software repair including OS reinstall, virus removal", icon: "Code", category: "repair", priceRange: "₹299 - ₹999" },
    { name: "Water Damage Treatment", description: "Emergency water damage repair and component cleaning", icon: "Droplets", category: "repair", priceRange: "₹799 - ₹3999" },
    { name: "Camera & Speaker Repair", description: "Fix blurry camera, mic issues, and speaker problems", icon: "Camera", category: "repair", priceRange: "₹599 - ₹2499" },
  ];

  for (const s of servicesData) {
    await storage.createService(s);
  }

  const reviewsData = [
    { customerName: "Rahul Sharma", rating: 5, comment: "Amazing service! My phone screen was replaced in just 25 minutes at my doorstep. The technician was very professional and used genuine parts. Highly recommended!", service: "Screen Replacement", city: "Surat" },
    { customerName: "Priya Patel", rating: 5, comment: "Very professional technician came to my office and fixed my laptop battery within 30 minutes. Great warranty and genuine parts. Will definitely use again!", service: "Battery Replacement", city: "Mumbai" },
    { customerName: "Amit Kumar", rating: 4, comment: "Good service at very affordable price. The technician was polite and skilled. Fixed my charging issue quickly. Happy with the service!", service: "Charging Issues", city: "Delhi" },
    { customerName: "Sneha Gupta", rating: 5, comment: "Saved my water damaged phone! I thought it was gone forever but the technician fixed it perfectly. Amazing work and great warranty!", service: "Water Damage Treatment", city: "Gorakhpur" },
    { customerName: "Vikram Singh", rating: 5, comment: "Best doorstep repair service I have ever used. Camera was fixed in 20 minutes. Transparent pricing with no hidden charges!", service: "Camera & Speaker Repair", city: "Bangalore" },
  ];

  for (const r of reviewsData) {
    await storage.createReview(r);
  }

  console.log("Database seeded successfully!");
}
