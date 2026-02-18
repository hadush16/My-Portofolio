import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  courseCount: number;
}

export function CategoryCard({ title, icon: Icon, courseCount }: CategoryCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="p-4 rounded-lg bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{courseCount} courses</p>
        </div>
      </CardContent>
    </Card>
  );
}
