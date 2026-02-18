import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  thumbnail?: string;
}

export function CourseCard({
  id,
  title,
  instructor,
  price,
  originalPrice,
  discount,
  level,
  rating,
  students,
  duration,
  lessons,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all group" data-testid={`card-course-${id}`}>
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-primary/30" />
        </div>
        
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="font-medium" data-testid={`badge-level-${id}`}>
            {level}
          </Badge>
        </div>
        
        {discount && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-accent text-accent-foreground font-bold" data-testid={`badge-discount-${id}`}>
              {discount}% OFF
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg line-clamp-2 leading-tight" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground" data-testid={`text-instructor-${id}`}>
          {instructor}
        </p>

        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium" data-testid={`text-rating-${id}`}>{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({students.toLocaleString()} students)</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>
        
        <div className="w-full flex items-center justify-between gap-2 mt-2">
          <div>
            {originalPrice && originalPrice > price ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
                <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>${price}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>${price}</span>
            )}
          </div>
          <Link href={`/course/${id}`}>
            <Button className="bg-accent hover:bg-accent" data-testid={`button-enroll-${id}`}>
              Enroll Now
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
