import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface CourseFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export function CourseFilters({ onFilterChange }: CourseFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "SEO & Content Marketing",
    "Social Media Marketing",
    "Email Marketing",
    "Analytics & Data",
    "Paid Advertising",
    "Branding & Strategy"
  ];

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    console.log("Category filter:", updated);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                console.log("Search:", e.target.value);
              }}
              className="pl-9"
              data-testid="input-search"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Skill Level</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedLevel} onValueChange={(value) => {
            setSelectedLevel(value);
            console.log("Level filter:", value);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" data-testid="radio-level-all" />
              <Label htmlFor="all">All Levels</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="beginner" data-testid="radio-level-beginner" />
              <Label htmlFor="beginner">Beginner</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="intermediate" data-testid="radio-level-intermediate" />
              <Label htmlFor="intermediate">Intermediate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="advanced" data-testid="radio-level-advanced" />
              <Label htmlFor="advanced">Advanced</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value);
              console.log("Price range:", value);
            }}
            max={200}
            step={10}
            data-testid="slider-price"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="font-mono">${priceRange[0]}</span>
            <span className="font-mono">${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
                data-testid={`checkbox-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
