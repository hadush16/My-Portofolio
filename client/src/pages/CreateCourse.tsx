import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CourseForm } from "@/components/CourseForm";

export default function CreateCourse() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar role="instructor" />
      
      <div className="flex-1 overflow-y-auto">
        <header className="border-b bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Create Course</h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-3xl">
            <CourseForm />
          </div>
        </main>
      </div>
    </div>
  );
}
