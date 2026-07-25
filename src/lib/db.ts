import fs from 'fs/promises';
import path from 'path';
import {
  defaultSettings,
  defaultServices,
  defaultPortfolio,
  defaultTestimonials,
  defaultFAQs,
  defaultBlogs,
  Settings,
  Service,
  PortfolioItem,
  Testimonial,
  FAQ,
  Blog
} from './data';

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'archived';
}

export interface DatabaseSchema {
  settings: Settings;
  services: Service[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  blogs: Blog[];
  enquiries: Enquiry[];
}

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// Ensure database file and folder exist and are seeded
async function getDbPath(): Promise<string> {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (err) {
    // Ignore folder creation error if already exists
  }
  
  try {
    await fs.access(DB_FILE);
  } catch (err) {
    // File doesn't exist, create it with seed data
    const initialDb: DatabaseSchema = {
      settings: defaultSettings,
      services: defaultServices,
      portfolio: defaultPortfolio,
      testimonials: defaultTestimonials,
      faqs: defaultFAQs,
      blogs: defaultBlogs,
      enquiries: []
    };
    await fs.writeFile(DB_FILE, JSON.stringify(initialDb, null, 2), 'utf-8');
  }
  
  return DB_FILE;
}

export async function readDb(): Promise<DatabaseSchema> {
  const filePath = await getDbPath();
  const rawData = await fs.readFile(filePath, 'utf-8');
  try {
    return JSON.parse(rawData) as DatabaseSchema;
  } catch (e) {
    // If corruption happens, return defaults
    return {
      settings: defaultSettings,
      services: defaultServices,
      portfolio: defaultPortfolio,
      testimonials: defaultTestimonials,
      faqs: defaultFAQs,
      blogs: defaultBlogs,
      enquiries: []
    };
  }
}

export async function writeDb(data: DatabaseSchema): Promise<void> {
  const filePath = await getDbPath();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Helper methods for admin and user access
export async function getSettings(): Promise<Settings> {
  const db = await readDb();
  return db.settings;
}

export async function updateSettings(settings: Settings): Promise<Settings> {
  const db = await readDb();
  db.settings = settings;
  await writeDb(db);
  return db.settings;
}

export async function getServices(): Promise<Service[]> {
  const db = await readDb();
  return db.services;
}

export async function saveService(service: Service): Promise<Service[]> {
  const db = await readDb();
  const index = db.services.findIndex(s => s.id === service.id);
  if (index >= 0) {
    db.services[index] = service;
  } else {
    db.services.push(service);
  }
  await writeDb(db);
  return db.services;
}

export async function deleteService(id: string): Promise<Service[]> {
  const db = await readDb();
  db.services = db.services.filter(s => s.id !== id);
  await writeDb(db);
  return db.services;
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  const db = await readDb();
  return db.portfolio;
}

export async function savePortfolioItem(item: PortfolioItem): Promise<PortfolioItem[]> {
  const db = await readDb();
  const index = db.portfolio.findIndex(p => p.id === item.id);
  if (index >= 0) {
    db.portfolio[index] = item;
  } else {
    db.portfolio.push(item);
  }
  await writeDb(db);
  return db.portfolio;
}

export async function deletePortfolioItem(id: string): Promise<PortfolioItem[]> {
  const db = await readDb();
  db.portfolio = db.portfolio.filter(p => p.id !== id);
  await writeDb(db);
  return db.portfolio;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const db = await readDb();
  return db.testimonials;
}

export async function saveTestimonial(testimonial: Testimonial): Promise<Testimonial[]> {
  const db = await readDb();
  const index = db.testimonials.findIndex(t => t.id === testimonial.id);
  if (index >= 0) {
    db.testimonials[index] = testimonial;
  } else {
    db.testimonials.push(testimonial);
  }
  await writeDb(db);
  return db.testimonials;
}

export async function deleteTestimonial(id: string): Promise<Testimonial[]> {
  const db = await readDb();
  db.testimonials = db.testimonials.filter(t => t.id !== id);
  await writeDb(db);
  return db.testimonials;
}

export async function getFAQs(): Promise<FAQ[]> {
  const db = await readDb();
  return db.faqs;
}

export async function saveFAQ(faq: FAQ): Promise<FAQ[]> {
  const db = await readDb();
  const index = db.faqs.findIndex(f => f.id === faq.id);
  if (index >= 0) {
    db.faqs[index] = faq;
  } else {
    db.faqs.push(faq);
  }
  await writeDb(db);
  return db.faqs;
}

export async function deleteFAQ(id: string): Promise<FAQ[]> {
  const db = await readDb();
  db.faqs = db.faqs.filter(f => f.id !== id);
  await writeDb(db);
  return db.faqs;
}

export async function getBlogs(): Promise<Blog[]> {
  const db = await readDb();
  return db.blogs;
}

export async function saveBlog(blog: Blog): Promise<Blog[]> {
  const db = await readDb();
  const index = db.blogs.findIndex(b => b.id === blog.id);
  if (index >= 0) {
    db.blogs[index] = blog;
  } else {
    db.blogs.push(blog);
  }
  await writeDb(db);
  return db.blogs;
}

export async function deleteBlog(id: string): Promise<Blog[]> {
  const db = await readDb();
  db.blogs = db.blogs.filter(b => b.id !== id);
  await writeDb(db);
  return db.blogs;
}

export async function getEnquiries(): Promise<Enquiry[]> {
  const db = await readDb();
  return db.enquiries;
}

export async function addEnquiry(enquiry: Omit<Enquiry, 'id' | 'date' | 'status'>): Promise<Enquiry> {
  const db = await readDb();
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: 'enq-' + Math.random().toString(36).substr(2, 9),
    date: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    status: 'new'
  };
  db.enquiries.unshift(newEnquiry); // Add to beginning
  await writeDb(db);
  return newEnquiry;
}

export async function updateEnquiryStatus(id: string, status: Enquiry['status']): Promise<Enquiry[]> {
  const db = await readDb();
  const index = db.enquiries.findIndex(e => e.id === id);
  if (index >= 0) {
    db.enquiries[index].status = status;
    await writeDb(db);
  }
  return db.enquiries;
}

export async function deleteEnquiry(id: string): Promise<Enquiry[]> {
  const db = await readDb();
  db.enquiries = db.enquiries.filter(e => e.id !== id);
  await writeDb(db);
  return db.enquiries;
}
