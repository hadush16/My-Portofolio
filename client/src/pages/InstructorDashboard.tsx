import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCard } from "@/components/StatsCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  DollarSign,
  Star
} from "lucide-react";
import { Link } from "wouter";

//todo: remove mock functionality
const myCourses = [
  {
    id: "1",
    title: "Complete Digital Marketing Masterclass",
    instructor: "You",
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
    instructor: "You",
    price: 79,
    originalPrice: 149,
    discount: 47,
    level: "Intermediate" as const,
    rating: 4.9,
    students: 8234,
    duration: "18h",
    lessons: 98
  }
];

export default function InstructorDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar role="instructor" />
      
      <div className="flex-1 overflow-y-auto">
        <header className="border-b bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Students"
              value="20,777"
              icon={Users}
              trend={{ value: 18.2, isPositive: true }}
            />
            <StatsCard
              title="My Courses"
              value="12"
              icon={BookOpen}
            />
            <StatsCard
              title="Total Earnings"
              value="$32,450"
              icon={DollarSign}
              trend={{ value: 25.3, isPositive: true }}
            />
            <StatsCard
              title="Avg Rating"
              value="4.8"
              icon={Star}
            />
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">My Courses</h2>
              <Link href="/instructor/create-course">
                <Button data-testid="button-create-course">Create New Course</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
