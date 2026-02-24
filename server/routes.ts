import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertReviewSchema, adminLoginSchema } from "@shared/schema";
import bcrypt from "bcryptjs";
import session from "express-session";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2)}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    cb(null, ext && mime);
  },
});

declare module "express-session" {
  interface SessionData {
    adminId?: number;
    adminUsername?: string;
  }
}

function requireAdmin(req: any, res: any, next: any) {
  if (!req.session?.adminId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "devices-doctor-admin-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
      },
    })
  );

  app.use("/uploads", (req, res, next) => {
    const filePath = path.join(uploadDir, req.path);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
    next();
  });

  app.post("/api/admin/login", async (req, res) => {
    const parsed = adminLoginSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid credentials" });

    const admin = await storage.getAdminByUsername(parsed.data.username);
    if (!admin) return res.status(401).json({ message: "Invalid username or password" });

    const valid = await bcrypt.compare(parsed.data.password, admin.passwordHash);
    if (!valid) return res.status(401).json({ message: "Invalid username or password" });

    req.session.adminId = admin.id;
    req.session.adminUsername = admin.username;
    res.json({ message: "Login successful", username: admin.username });
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });

  app.get("/api/admin/me", (req, res) => {
    if (!req.session?.adminId) return res.status(401).json({ message: "Not authenticated" });
    res.json({ id: req.session.adminId, username: req.session.adminUsername });
  });

  app.get("/api/content", async (_req, res) => {
    const content = await storage.getAllContent();
    res.json(content);
  });

  app.get("/api/content/:section", async (req, res) => {
    const content = await storage.getContentBySection(req.params.section);
    res.json(content);
  });

  app.put("/api/admin/content", requireAdmin, async (req, res) => {
    const { section, key, value, contentType } = req.body;
    if (!section || !key || value === undefined) {
      return res.status(400).json({ message: "section, key, and value are required" });
    }
    const content = await storage.upsertContent(section, key, value, contentType || "text");
    res.json(content);
  });

  app.put("/api/admin/content/bulk", requireAdmin, async (req, res) => {
    const { items } = req.body;
    if (!Array.isArray(items)) return res.status(400).json({ message: "items array required" });
    const results = [];
    for (const item of items) {
      const { section, key, value, contentType } = item;
      if (section && key && value !== undefined) {
        const result = await storage.upsertContent(section, key, value, contentType || "text");
        results.push(result);
      }
    }
    res.json(results);
  });

  app.delete("/api/admin/content/:id", requireAdmin, async (req, res) => {
    await storage.deleteContent(Number(req.params.id));
    res.json({ message: "Deleted" });
  });

  app.post("/api/admin/upload", requireAdmin, upload.single("image"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const url = `/uploads/${req.file.filename}`;
    res.json({ url, filename: req.file.filename });
  });

  app.get("/api/admin/bookings", requireAdmin, async (_req, res) => {
    const bookings = await storage.getBookings();
    res.json(bookings);
  });

  app.delete("/api/admin/bookings/:id", requireAdmin, async (req, res) => {
    await storage.deleteBooking(Number(req.params.id));
    res.json({ message: "Deleted" });
  });

  app.get("/api/admin/reviews", requireAdmin, async (_req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.put("/api/admin/reviews/:id", requireAdmin, async (req, res) => {
    const review = await storage.updateReview(Number(req.params.id), req.body);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  });

  app.delete("/api/admin/reviews/:id", requireAdmin, async (req, res) => {
    await storage.deleteReview(Number(req.params.id));
    res.json({ message: "Deleted" });
  });

  app.post("/api/admin/reviews", requireAdmin, async (req, res) => {
    const parsed = insertReviewSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid review data" });
    const review = await storage.createReview(parsed.data);
    res.status(201).json(review);
  });

  app.get("/api/admin/services", requireAdmin, async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.put("/api/admin/services/:id", requireAdmin, async (req, res) => {
    const service = await storage.updateService(Number(req.params.id), req.body);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  });

  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get("/api/services/:id", async (req, res) => {
    const service = await storage.getServiceById(Number(req.params.id));
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  });

  app.get("/api/services/:id/problems", async (req, res) => {
    const problems = await storage.getServiceProblems(Number(req.params.id));
    res.json(problems);
  });

  app.get("/api/reviews", async (_req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post("/api/reviews", async (req, res) => {
    const parsed = insertReviewSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid review data", errors: parsed.error.errors });
    const review = await storage.createReview(parsed.data);
    res.status(201).json(review);
  });

  app.get("/api/cities", async (_req, res) => {
    const cities = await storage.getCities();
    res.json(cities);
  });

  app.post("/api/bookings", async (req, res) => {
    const parsed = insertBookingSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid booking data", errors: parsed.error.errors });
    const booking = await storage.createBooking(parsed.data);
    res.status(201).json(booking);
  });

  app.get("/api/bookings", async (_req, res) => {
    const bookings = await storage.getBookings();
    res.json(bookings);
  });

  app.get("/api/bookings/:id", async (req, res) => {
    const booking = await storage.getBookingById(Number(req.params.id));
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  });

  app.patch("/api/bookings/:id/status", requireAdmin, async (req, res) => {
    const { status } = req.body;
    const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({ message: "Valid status is required (pending, confirmed, completed, cancelled)" });
    }
    const booking = await storage.updateBookingStatus(Number(req.params.id), status);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  });

  return httpServer;
}
