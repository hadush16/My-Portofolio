import { CourseCard } from "../CourseCard";
import { ThemeProvider } from "../ThemeProvider";

export default function CourseCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-sm">
        <CourseCard
          id="1"
          title="Complete Digital Marketing Masterclass - 12 Courses in 1"
          instructor="Sarah Johnson"
          price={49}
          originalPrice={199}
          discount={75}
          level="Beginner"
          rating={4.8}
          students={12543}
          duration="24h"
          lessons={156}
        />
      </div>
    </ThemeProvider>
  );
}
