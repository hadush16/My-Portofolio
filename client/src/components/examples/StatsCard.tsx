import { StatsCard } from "../StatsCard";
import { ThemeProvider } from "../ThemeProvider";
import { Users } from "lucide-react";

export default function StatsCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-sm">
        <StatsCard
          title="Total Students"
          value="12,543"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
      </div>
    </ThemeProvider>
  );
}
