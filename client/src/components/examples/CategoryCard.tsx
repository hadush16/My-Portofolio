import { CategoryCard } from "../CategoryCard";
import { ThemeProvider } from "../ThemeProvider";
import { TrendingUp } from "lucide-react";

export default function CategoryCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-xs">
        <CategoryCard
          title="SEO Marketing"
          icon={TrendingUp}
          courseCount={45}
        />
      </div>
    </ThemeProvider>
  );
}
