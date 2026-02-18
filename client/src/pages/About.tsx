import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LearnHub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make digital marketing education accessible to everyone,
            empowering learners worldwide to advance their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-muted-foreground">Courses</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, LearnHub was created by digital marketing professionals who saw
              a gap in accessible, high-quality online education for aspiring marketers.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to be one of the leading platforms for digital marketing
              education, with students from over 150 countries learning and growing their careers.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To democratize digital marketing education by providing world-class courses that
              are affordable, practical, and taught by industry experts.
            </p>
            <p className="text-muted-foreground">
              We believe everyone deserves the opportunity to learn and succeed in the digital
              marketing industry, regardless of their background or location.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a student looking to learn or an expert ready to teach,
            LearnHub is the place for you.
          </p>
        </div>
      </div>
    </div>
  );
}
