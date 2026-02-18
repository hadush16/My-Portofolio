import { CourseFilters } from "../CourseFilters";
import { ThemeProvider } from "../ThemeProvider";

export default function CourseFiltersExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-sm">
        <CourseFilters />
      </div>
    </ThemeProvider>
  );
}
