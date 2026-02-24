import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertReviewSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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

  app.patch("/api/bookings/:id/status", async (req, res) => {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: "Status is required" });
    const booking = await storage.updateBookingStatus(Number(req.params.id), status);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  });

  return httpServer;
}
