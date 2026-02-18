import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  GraduationCap,
  BarChart3,
  LogOut
} from "lucide-react";

interface DashboardSidebarProps {
  role: "admin" | "instructor" | "student";
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const [location] = useLocation();

  const adminLinks = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/courses", label: "Courses", icon: BookOpen },
    { path: "/admin/users", label: "Users", icon: Users },
    { path: "/admin/payments", label: "Payments", icon: CreditCard },
    { path: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const instructorLinks = [
    { path: "/instructor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/instructor/courses", label: "My Courses", icon: BookOpen },
    { path: "/instructor/students", label: "Students", icon: Users },
    { path: "/instructor/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/instructor/settings", label: "Settings", icon: Settings },
  ];

  const studentLinks = [
    { path: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/student/courses", label: "My Courses", icon: BookOpen },
    { path: "/student/enrolled", label: "Enrolled", icon: GraduationCap },
    { path: "/student/history", label: "Payment History", icon: CreditCard },
    { path: "/student/settings", label: "Settings", icon: Settings },
  ];

  const links = role === "admin" ? adminLinks : role === "instructor" ? instructorLinks : studentLinks;

  return (
    <div className="w-64 border-r bg-card h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <Link href="/">
          <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">LearnHub</span>
          </div>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 capitalize">{role} Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.path;
          return (
            <Link key={link.path} href={link.path}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${isActive ? "bg-secondary" : ""}`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 text-destructive" data-testid="button-logout">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}
