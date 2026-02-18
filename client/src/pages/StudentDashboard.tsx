import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CourseCard } from "@/components/CourseCard";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const enrolledCourses = [
  {
    id: "1",
    title: "Complete Digital Marketing Masterclass",
    instructor: "Sarah Johnson",
    price: 49,
    level: "Beginner" as const,
    rating: 4.8,
    students: 12543,
    duration: "24h",
    lessons: 156,
    progress: 65
  },
  {
    id: "2",
    title: "SEO & Content Marketing Strategy",
    instructor: "Mike Chen",
    price: 79,
    level: "Intermediate" as const,
    rating: 4.9,
    students: 8234,
    duration: "18h",
    lessons: 98,
    progress: 30
  }
];

const paymentHistory = [
  { id: "1", course: "Digital Marketing Masterclass", date: "2024-09-15", amount: "$49", status: "Completed" },
  { id: "2", course: "SEO Strategy", date: "2024-09-20", amount: "$79", status: "Completed" },
  { id: "3", course: "Social Media Pro", date: "2024-10-01", amount: "$59", status: "Completed" }
];

export default function StudentDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar role="student" />
      
      <div className="flex-1 overflow-y-auto">
        <header className="border-b bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">My Learning</h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="space-y-3">
                    <CourseCard {...course} />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} data-testid={`progress-course-${course.id}`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex-1">
                      <p className="font-medium">{payment.course}</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-semibold">{payment.amount}</span>
                      <Badge variant="default" className="bg-green-600">
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
