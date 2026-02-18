import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, Users, Star, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Master Digital Marketing Skills
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn from industry experts and advance your career with our comprehensive digital marketing courses for all skill levels.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <Button size="lg" className="text-lg px-8 py-4" data-testid="button-browse-courses">
                  Browse Courses
                </Button>
              </Link>
              <Link href="/instructor">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4" data-testid="button-become-instructor">
                  Become Instructor
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 p-8 flex items-center justify-center">
                <GraduationCap className="w-64 h-64 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
