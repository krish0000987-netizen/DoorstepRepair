import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  services, type Service, type InsertService,
  serviceProblems, type ServiceProblem, type InsertServiceProblem,
  bookings, type Booking, type InsertBooking,
  reviews, type Review, type InsertReview,
  cities, type City, type InsertCity,
} from "@shared/schema";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export interface IStorage {
  getServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  getServiceProblems(serviceId: number): Promise<ServiceProblem[]>;
  createServiceProblem(problem: InsertServiceProblem): Promise<ServiceProblem>;

  getBookings(): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  getCities(): Promise<City[]>;
  createCity(city: InsertCity): Promise<City>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return db.select().from(services);
  }

  async getServiceById(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  async createService(service: InsertService): Promise<Service> {
    const [created] = await db.insert(services).values(service).returning();
    return created;
  }

  async getServiceProblems(serviceId: number): Promise<ServiceProblem[]> {
    return db.select().from(serviceProblems).where(eq(serviceProblems.serviceId, serviceId));
  }

  async createServiceProblem(problem: InsertServiceProblem): Promise<ServiceProblem> {
    const [created] = await db.insert(serviceProblems).values(problem).returning();
    return created;
  }

  async getBookings(): Promise<Booking[]> {
    return db.select().from(bookings);
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [created] = await db.insert(bookings).values(booking).returning();
    return created;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const [updated] = await db.update(bookings).set({ status }).where(eq(bookings.id, id)).returning();
    return updated;
  }

  async getReviews(): Promise<Review[]> {
    return db.select().from(reviews);
  }

  async createReview(review: InsertReview): Promise<Review> {
    const [created] = await db.insert(reviews).values(review).returning();
    return created;
  }

  async getCities(): Promise<City[]> {
    return db.select().from(cities);
  }

  async createCity(city: InsertCity): Promise<City> {
    const [created] = await db.insert(cities).values(city).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
