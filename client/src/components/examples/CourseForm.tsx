import { CourseForm } from "../CourseForm";
import { ThemeProvider } from "../ThemeProvider";

export default function CourseFormExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-2xl">
        <CourseForm />
      </div>
    </ThemeProvider>
  );
}
