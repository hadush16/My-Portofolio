import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCard } from "@/components/StatsCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//todo: remove mock functionality
const recentEnrollments = [
  { id: "1", student: "John Doe", course: "Digital Marketing Masterclass", date: "2024-10-05", amount: "$49" },
  { id: "2", student: "Jane Smith", course: "SEO Strategy", date: "2024-10-05", amount: "$79" },
  { id: "3", student: "Bob Johnson", course: "Social Media Pro", date: "2024-10-04", amount: "$59" },
  { id: "4", student: "Alice Brown", course: "Email Marketing", date: "2024-10-04", amount: "$39" },
  { id: "5", student: "Charlie Wilson", course: "Google Ads", date: "2024-10-03", amount: "$89" }
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar role="admin" />
      
      <div className="flex-1 overflow-y-auto">
        <header className="border-b bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Students"
              value="12,543"
              icon={Users}
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatsCard
              title="Total Courses"
              value="187"
              icon={BookOpen}
              trend={{ value: 8.2, isPositive: true }}
            />
            <StatsCard
              title="Revenue"
              value="$54,320"
              icon={DollarSign}
              trend={{ value: 23.1, isPositive: true }}
            />
            <StatsCard
              title="Enrollments"
              value="1,234"
              icon={TrendingUp}
              trend={{ value: 15.3, isPositive: true }}
            />
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Enrollments</h2>
              <Button variant="outline" size="sm" data-testid="button-view-all">
                View All
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEnrollments.map((enrollment) => (
                  <TableRow key={enrollment.id}>
                    <TableCell className="font-medium">{enrollment.student}</TableCell>
                    <TableCell>{enrollment.course}</TableCell>
                    <TableCell>{enrollment.date}</TableCell>
                    <TableCell className="font-mono">{enrollment.amount}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-600">Completed</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
