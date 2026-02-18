import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  TrendingUp,
  Mail,
  Share2,
  BarChart3,
  Target,
  Megaphone,
  Star
} from "lucide-react";

//todo: remove mock functionality
const featuredCourses = [
  {
    id: "1",
    title: "Complete Digital Marketing Masterclass",
    instructor: "Sarah Johnson",
    price: 49,
    originalPrice: 199,
    discount: 75,
    level: "Beginner" as const,
    rating: 4.8,
    students: 12543,
    duration: "24h",
    lessons: 156
  },
  {
    id: "2",
    title: "SEO & Content Marketing Strategy",
    instructor: "Mike Chen",
    price: 79,
    originalPrice: 149,
    discount: 47,
    level: "Intermediate" as const,
    rating: 4.9,
    students: 8234,
    duration: "18h",
    lessons: 98
  },
  {
    id: "3",
    title: "Social Media Marketing Pro",
    instructor: "Emma Davis",
    price: 59,
    originalPrice: 129,
    discount: 54,
    level: "Advanced" as const,
    rating: 4.7,
    students: 15678,
    duration: "20h",
    lessons: 112
  }
];

const categories = [
  { title: "SEO Marketing", icon: TrendingUp, courseCount: 45 },
  { title: "Email Marketing", icon: Mail, courseCount: 32 },
  { title: "Social Media", icon: Share2, courseCount: 58 },
  { title: "Analytics", icon: BarChart3, courseCount: 28 },
  { title: "Branding", icon: Target, courseCount: 36 },
  { title: "Advertising", icon: Megaphone, courseCount: 41 }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground">
              Start learning with our most popular courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" variant="outline" data-testid="button-view-all-courses">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">
              Explore courses by your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Teaching?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share your knowledge and earn money by creating courses on our platform
          </p>
          <Link href="/instructor">
            <Button size="lg" className="text-lg px-8 py-4" data-testid="button-join-instructor">
              Join as Instructor
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LearnHub</h3>
              <p className="text-sm text-muted-foreground">
                Your gateway to digital marketing excellence
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Courses</a></li>
                <li><a href="#" className="hover:text-foreground">Instructors</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
