import { type User, type InsertUser, type Course, type InsertCourse, type Enrollment, type InsertEnrollment } from "@shared/schema";
import { randomUUID } from "crypto";

export interface CourseFilters {
  search?: string;
  category?: string;
  level?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "popular" | "rating" | "newest" | "price-low" | "price-high";
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCourses(filters?: CourseFilters): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getUserEnrollments(userId: string): Promise<Enrollment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private enrollments: Map<string, Enrollment>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.enrollments = new Map();
    
    this.seedData();
  }

  private async seedData() {
    const instructorId = randomUUID();
    const instructor: User = {
      id: instructorId,
      email: "sarah@example.com",
      password: "hashed_password",
      name: "Sarah Johnson",
      role: "instructor",
    };
    this.users.set(instructorId, instructor);

    const sampleCourses: InsertCourse[] = [
      {
        title: "Complete Digital Marketing Masterclass",
        description: "Master digital marketing with this comprehensive course covering SEO, social media marketing, email campaigns, content strategy, and analytics.",
        instructorId,
        instructorName: "Sarah Johnson",
        category: "SEO & Content Marketing",
        level: "Beginner",
        price: "49",
        originalPrice: "199",
        duration: "24h",
        lessons: 156,
        published: true,
      },
      {
        title: "SEO & Content Marketing Strategy",
        description: "Learn advanced SEO techniques and content marketing strategies to drive organic traffic.",
        instructorId,
        instructorName: "Mike Chen",
        category: "SEO & Content Marketing",
        level: "Intermediate",
        price: "79",
        originalPrice: "149",
        duration: "18h",
        lessons: 98,
        published: true,
      },
      {
        title: "Social Media Marketing Pro",
        description: "Master social media marketing across all major platforms with proven strategies.",
        instructorId,
        instructorName: "Emma Davis",
        category: "Social Media Marketing",
        level: "Advanced",
        price: "59",
        originalPrice: "129",
        duration: "20h",
        lessons: 112,
        published: true,
      },
      {
        title: "Email Marketing Fundamentals",
        description: "Build effective email marketing campaigns that convert subscribers to customers.",
        instructorId,
        instructorName: "Alex Brown",
        category: "Email Marketing",
        level: "Beginner",
        price: "39",
        originalPrice: "99",
        duration: "12h",
        lessons: 64,
        published: true,
      },
      {
        title: "Google Ads Mastery",
        description: "Create and optimize profitable Google Ads campaigns with expert techniques.",
        instructorId,
        instructorName: "Jessica Lee",
        category: "Paid Advertising",
        level: "Intermediate",
        price: "89",
        originalPrice: "179",
        duration: "16h",
        lessons: 87,
        published: true,
      },
      {
        title: "Facebook Ads Advanced Strategies",
        description: "Advanced Facebook advertising strategies for scaling your business.",
        instructorId,
        instructorName: "David Wilson",
        category: "Paid Advertising",
        level: "Advanced",
        price: "99",
        originalPrice: "199",
        duration: "22h",
        lessons: 124,
        published: true,
      },
    ];

    for (const courseData of sampleCourses) {
      const id = randomUUID();
      const course: Course = {
        id,
        ...courseData,
        originalPrice: courseData.originalPrice || null,
        published: courseData.published ?? true,
        rating: (Math.random() * 0.5 + 4.5).toFixed(2),
        students: Math.floor(Math.random() * 10000 + 5000),
        createdAt: new Date(),
      };
      this.courses.set(id, course);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      role: insertUser.role || "student",
    };
    this.users.set(id, user);
    return user;
  }

  async getCourses(filters?: CourseFilters): Promise<Course[]> {
    let courses = Array.from(this.courses.values()).filter(c => c.published);

    if (filters?.search) {
      const search = filters.search.toLowerCase();
      courses = courses.filter(c => 
        c.title.toLowerCase().includes(search) ||
        c.description.toLowerCase().includes(search) ||
        c.instructorName.toLowerCase().includes(search)
      );
    }

    if (filters?.category) {
      courses = courses.filter(c => c.category === filters.category);
    }

    if (filters?.level && filters.level !== "all") {
      courses = courses.filter(c => 
        c.level.toLowerCase() === filters.level!.toLowerCase()
      );
    }

    if (filters?.minPrice !== undefined || filters?.maxPrice !== undefined) {
      courses = courses.filter(c => {
        const price = parseFloat(c.price);
        if (filters.minPrice !== undefined && price < filters.minPrice) return false;
        if (filters.maxPrice !== undefined && price > filters.maxPrice) return false;
        return true;
      });
    }

    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case "popular":
          courses.sort((a, b) => b.students - a.students);
          break;
        case "rating":
          courses.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
          break;
        case "newest":
          courses.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          break;
        case "price-low":
          courses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case "price-high":
          courses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          break;
      }
    }

    return courses;
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = {
      id,
      ...insertCourse,
      originalPrice: insertCourse.originalPrice || null,
      published: insertCourse.published ?? true,
      rating: "0",
      students: 0,
      createdAt: new Date(),
    };
    this.courses.set(id, course);
    return course;
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const id = randomUUID();
    const enrollment: Enrollment = {
      id,
      ...insertEnrollment,
      enrolledAt: new Date(),
      progress: 0,
    };
    this.enrollments.set(id, enrollment);
    
    const course = this.courses.get(insertEnrollment.courseId);
    if (course) {
      course.students += 1;
    }
    
    return enrollment;
  }

  async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    return Array.from(this.enrollments.values()).filter(
      (enrollment) => enrollment.userId === userId,
    );
  }
}

export const storage = new MemStorage();
