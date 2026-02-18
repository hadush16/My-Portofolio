import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CourseDetail from "@/pages/CourseDetail";
import InstructorSignup from "@/pages/InstructorSignup";
import AdminDashboard from "@/pages/AdminDashboard";
import InstructorDashboard from "@/pages/InstructorDashboard";
import StudentDashboard from "@/pages/StudentDashboard";
import CreateCourse from "@/pages/CreateCourse";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/course/:id" component={CourseDetail} />
      <Route path="/instructor" component={InstructorSignup} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/instructor/dashboard" component={InstructorDashboard} />
      <Route path="/instructor/create-course" component={CreateCourse} />
      <Route path="/student/dashboard" component={StudentDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
