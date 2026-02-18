import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  Play
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CourseDetail() {
  const [, params] = useRoute("/course/:id");
  const courseId = params?.id || "1";

  //todo: remove mock functionality
  const course = {
    id: courseId,
    title: "Complete Digital Marketing Masterclass",
    instructor: "Sarah Johnson",
    price: 49,
    originalPrice: 199,
    discount: 75,
    level: "Beginner",
    rating: 4.8,
    students: 12543,
    duration: "24h",
    lessons: 156,
    description: "Master digital marketing with this comprehensive course covering SEO, social media marketing, email campaigns, content strategy, and analytics. Perfect for beginners and professionals looking to advance their careers.",
    whatYouLearn: [
      "Master SEO fundamentals and advanced techniques",
      "Create effective social media marketing campaigns",
      "Build and execute email marketing strategies",
      "Understand Google Analytics and data-driven decisions",
      "Develop content marketing strategies",
      "Run successful paid advertising campaigns"
    ],
    curriculum: [
      {
        title: "Introduction to Digital Marketing",
        lessons: 8,
        duration: "2h"
      },
      {
        title: "SEO Fundamentals",
        lessons: 15,
        duration: "4h"
      },
      {
        title: "Social Media Marketing",
        lessons: 20,
        duration: "5h"
      },
      {
        title: "Email Marketing",
        lessons: 12,
        duration: "3h"
      },
      {
        title: "Content Marketing",
        lessons: 18,
        duration: "4h"
      },
      {
        title: "Analytics & Reporting",
        lessons: 14,
        duration: "3h"
      }
    ]
  };

  const handleEnroll = () => {
    console.log("Enrolling in course:", courseId);
    alert("In the full app, you would be redirected to payment. For now, this is a prototype!");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{course.level}</Badge>
                {course.discount && (
                  <Badge className="bg-accent text-accent-foreground">
                    {course.discount}% OFF
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-4">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration} total</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>

              <p className="mt-4 text-muted-foreground">
                Created by <span className="font-medium text-foreground">{course.instructor}</span>
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.curriculum.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full pr-4">
                          <span className="font-medium">{section.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {section.lessons} lessons • {section.duration}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {Array.from({ length: section.lessons }, (_, i) => (
                            <div key={i} className="flex items-center gap-2 py-2 px-3 rounded hover-elevate">
                              <Play className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Lesson {i + 1}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary" />
                </div>

                <div>
                  {course.originalPrice && course.originalPrice > course.price ? (
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold">${course.price}</span>
                      <span className="text-xl text-muted-foreground line-through">${course.originalPrice}</span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">${course.price}</span>
                  )}
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent text-lg py-6" 
                  size="lg"
                  onClick={handleEnroll}
                  data-testid="button-enroll-course"
                >
                  Enroll Now
                </Button>

                <div className="space-y-2 pt-4 border-t">
                  <h3 className="font-semibold">This course includes:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{course.duration} on-demand video</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Lifetime access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Access on mobile and desktop</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
