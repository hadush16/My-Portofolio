import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { CourseFilters } from "@/components/CourseFilters";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

//todo: remove mock functionality
const allCourses = [
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
  },
  {
    id: "4",
    title: "Email Marketing Fundamentals",
    instructor: "Alex Brown",
    price: 39,
    originalPrice: 99,
    discount: 61,
    level: "Beginner" as const,
    rating: 4.6,
    students: 5432,
    duration: "12h",
    lessons: 64
  },
  {
    id: "5",
    title: "Google Ads Mastery",
    instructor: "Jessica Lee",
    price: 89,
    originalPrice: 179,
    discount: 50,
    level: "Intermediate" as const,
    rating: 4.9,
    students: 9876,
    duration: "16h",
    lessons: 87
  },
  {
    id: "6",
    title: "Facebook Ads Advanced Strategies",
    instructor: "David Wilson",
    price: 99,
    originalPrice: 199,
    discount: 50,
    level: "Advanced" as const,
    rating: 4.8,
    students: 6543,
    duration: "22h",
    lessons: 124
  }
];

export default function Courses() {
  const [sortBy, setSortBy] = useState("popular");

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of digital marketing courses
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <CourseFilters />
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <p className="text-muted-foreground">
                Showing {allCourses.length} courses
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40" data-testid="select-sort">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" data-testid="button-prev-page">Previous</Button>
              <Button variant="outline" className="bg-primary text-primary-foreground" data-testid="button-page-1">1</Button>
              <Button variant="outline" data-testid="button-page-2">2</Button>
              <Button variant="outline" data-testid="button-page-3">3</Button>
              <Button variant="outline" data-testid="button-next-page">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
