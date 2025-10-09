"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, Users, Award } from "lucide-react"

// Skills categories
const skillCategories = [
  "Digital Skills",
  "Communication",
  "Leadership",
  "Technical Skills",
  "Creative Skills",
  "Business Skills",
  "Personal Development",
  "Industry Specific",
]

// ======= Skills Courses Data =======
const skillsCoursesData = {
  "Digital Skills": [
    {
      id: 1,
      title: "Digital Marketing Complete Course",
      instructor: "Digital Pro Institute",
      instructorLogo: "💻",
      price: "₹1,999",
      originalPrice: "₹5,999",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 18420,
      type: "Skill Course",
      isPopular: true,
      category: "Digital Marketing"
    },
    {
      id: 2,
      title: "Social Media Marketing Mastery",
      instructor: "Social Experts",
      instructorLogo: "📱",
      price: "₹1,499",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 12350,
      type: "Skill Course",
      isPopular: true,
      category: "Social Media"
    },
    {
      id: 3,
      title: "Google Analytics & SEO Fundamentals",
      instructor: "SEO Academy",
      instructorLogo: "📊",
      price: "₹1,799",
      originalPrice: "₹4,499",
      duration: "7 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 9876,
      type: "Skill Course",
      isPopular: false,
      category: "Analytics"
    },
    {
      id: 4,
      title: "E-commerce & Online Business Setup",
      instructor: "Business Builders",
      instructorLogo: "🛒",
      price: "₹2,299",
      originalPrice: "₹6,999",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.4,
      students: 7654,
      type: "Skill Course",
      isPopular: true,
      category: "E-commerce"
    }
  ],
  "Communication": [
    {
      id: 1,
      title: "Public Speaking & Presentation Skills",
      instructor: "Speak With Confidence",
      instructorLogo: "🎤",
      price: "₹1,299",
      originalPrice: "₹3,999",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 15432,
      type: "Skill Course",
      isPopular: true,
      category: "Public Speaking"
    },
    {
      id: 2,
      title: "Business Writing & Email Etiquette",
      instructor: "Professional Writers",
      instructorLogo: "✍️",
      price: "₹999",
      originalPrice: "₹2,999",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 11234,
      type: "Skill Course",
      isPopular: false,
      category: "Writing"
    },
    {
      id: 3,
      title: "Interpersonal Communication Skills",
      instructor: "Communication Hub",
      instructorLogo: "🗣️",
      price: "₹1,199",
      originalPrice: "₹3,499",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 8765,
      type: "Skill Course",
      isPopular: true,
      category: "Interpersonal"
    },
    {
      id: 4,
      title: "Negotiation & Persuasion Techniques",
      instructor: "Negotiation Masters",
      instructorLogo: "🤝",
      price: "₹1,599",
      originalPrice: "₹4,999",
      duration: "7 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 6543,
      type: "Skill Course",
      isPopular: false,
      category: "Negotiation"
    }
  ],
  "Leadership": [
    {
      id: 1,
      title: "Leadership & Team Management",
      instructor: "Leadership Institute",
      instructorLogo: "👑",
      price: "₹2,499",
      originalPrice: "₹7,999",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 9876,
      type: "Skill Course",
      isPopular: true,
      category: "Leadership"
    },
    {
      id: 2,
      title: "Project Management Fundamentals",
      instructor: "PM Experts",
      instructorLogo: "📋",
      price: "₹2,199",
      originalPrice: "₹6,499",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 12345,
      type: "Skill Course",
      isPopular: true,
      category: "Project Management"
    },
    {
      id: 3,
      title: "Conflict Resolution & Problem Solving",
      instructor: "Resolution Academy",
      instructorLogo: "⚖️",
      price: "₹1,799",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 7890,
      type: "Skill Course",
      isPopular: false,
      category: "Problem Solving"
    },
    {
      id: 4,
      title: "Decision Making & Strategic Thinking",
      instructor: "Strategy Pro",
      instructorLogo: "🧠",
      price: "₹2,799",
      originalPrice: "₹8,999",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 5432,
      type: "Skill Course",
      isPopular: true,
      category: "Strategic Thinking"
    }
  ],
  "Technical Skills": [
    {
      id: 1,
      title: "Excel Mastery for Professionals",
      instructor: "Excel Experts",
      instructorLogo: "📈",
      price: "₹1,299",
      originalPrice: "₹3,999",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 16789,
      type: "Skill Course",
      isPopular: true,
      category: "Excel"
    },
    {
      id: 2,
      title: "Data Analysis with Power BI",
      instructor: "Data Viz Academy",
      instructorLogo: "📊",
      price: "₹2,199",
      originalPrice: "₹6,999",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 11234,
      type: "Skill Course",
      isPopular: false,
      category: "Data Analysis"
    },
    {
      id: 3,
      title: "Basic Coding & Programming Logic",
      instructor: "Code Starters",
      instructorLogo: "💻",
      price: "₹1,999",
      originalPrice: "₹5,999",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 9876,
      type: "Skill Course",
      isPopular: true,
      category: "Programming"
    },
    {
      id: 4,
      title: "Database Management Basics",
      instructor: "DB Academy",
      instructorLogo: "🗄️",
      price: "₹1,799",
      originalPrice: "₹4,999",
      duration: "7 weeks",
      level: "Intermediate",
      rating: 4.4,
      students: 6543,
      type: "Skill Course",
      isPopular: false,
      category: "Database"
    }
  ],
  "Creative Skills": [
    {
      id: 1,
      title: "Graphic Design for Beginners",
      instructor: "Design Studio Pro",
      instructorLogo: "🎨",
      price: "₹1,799",
      originalPrice: "₹5,499",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 13245,
      type: "Skill Course",
      isPopular: true,
      category: "Graphic Design"
    },
    {
      id: 2,
      title: "Content Writing & Copywriting",
      instructor: "Content Masters",
      instructorLogo: "✏️",
      price: "₹1,499",
      originalPrice: "₹4,299",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 10876,
      type: "Skill Course",
      isPopular: true,
      category: "Content Writing"
    },
    {
      id: 3,
      title: "Video Editing & Motion Graphics",
      instructor: "Video Pro Academy",
      instructorLogo: "🎬",
      price: "₹2,499",
      originalPrice: "₹7,999",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 8765,
      type: "Skill Course",
      isPopular: false,
      category: "Video Editing"
    },
    {
      id: 4,
      title: "Photography & Photo Editing",
      instructor: "Photo Masters",
      instructorLogo: "📷",
      price: "₹1,899",
      originalPrice: "₹5,999",
      duration: "7 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 7432,
      type: "Skill Course",
      isPopular: true,
      category: "Photography"
    }
  ],
  "Business Skills": [
    {
      id: 1,
      title: "Financial Planning & Budgeting",
      instructor: "Finance Academy",
      instructorLogo: "💰",
      price: "₹2,299",
      originalPrice: "₹6,999",
      duration: "9 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 9876,
      type: "Skill Course",
      isPopular: true,
      category: "Finance"
    },
    {
      id: 2,
      title: "Sales & Customer Relationship Management",
      instructor: "Sales Pro Institute",
      instructorLogo: "🤵",
      price: "₹1,999",
      originalPrice: "₹5,999",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 11234,
      type: "Skill Course",
      isPopular: false,
      category: "Sales"
    },
    {
      id: 3,
      title: "Business Development & Networking",
      instructor: "Business Growth Hub",
      instructorLogo: "🌐",
      price: "₹2,199",
      originalPrice: "₹6,499",
      duration: "7 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 8765,
      type: "Skill Course",
      isPopular: true,
      category: "Business Development"
    },
    {
      id: 4,
      title: "Market Research & Analysis",
      instructor: "Market Insights",
      instructorLogo: "📊",
      price: "₹1,799",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.4,
      students: 6543,
      type: "Skill Course",
      isPopular: false,
      category: "Market Research"
    }
  ],
  "Personal Development": [
    {
      id: 1,
      title: "Time Management & Productivity",
      instructor: "Productivity Masters",
      instructorLogo: "⏰",
      price: "₹1,199",
      originalPrice: "₹3,499",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 14567,
      type: "Skill Course",
      isPopular: true,
      category: "Time Management"
    },
    {
      id: 2,
      title: "Emotional Intelligence & Self Awareness",
      instructor: "Mindfulness Institute",
      instructorLogo: "🧘",
      price: "₹1,399",
      originalPrice: "₹4,199",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 9876,
      type: "Skill Course",
      isPopular: true,
      category: "Emotional Intelligence"
    },
    {
      id: 3,
      title: "Goal Setting & Achievement",
      instructor: "Success Academy",
      instructorLogo: "🎯",
      price: "₹999",
      originalPrice: "₹2,999",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 8765,
      type: "Skill Course",
      isPopular: false,
      category: "Goal Setting"
    },
    {
      id: 4,
      title: "Stress Management & Work-Life Balance",
      instructor: "Wellness Pro",
      instructorLogo: "☯️",
      price: "₹1,299",
      originalPrice: "₹3,799",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 7432,
      type: "Skill Course",
      isPopular: true,
      category: "Wellness"
    }
  ],
  "Industry Specific": [
    {
      id: 1,
      title: "Healthcare Administration Skills",
      instructor: "Healthcare Academy",
      instructorLogo: "🏥",
      price: "₹2,999",
      originalPrice: "₹8,999",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 6789,
      type: "Skill Course",
      isPopular: true,
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Retail Management & Customer Service",
      instructor: "Retail Pro Institute",
      instructorLogo: "🏪",
      price: "₹1,999",
      originalPrice: "₹5,999",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 9876,
      type: "Skill Course",
      isPopular: false,
      category: "Retail"
    },
    {
      id: 3,
      title: "Banking & Financial Services Skills",
      instructor: "Finance Pro Academy",
      instructorLogo: "🏦",
      price: "₹2,499",
      originalPrice: "₹7,499",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 7654,
      type: "Skill Course",
      isPopular: true,
      category: "Banking"
    },
    {
      id: 4,
      title: "Manufacturing & Quality Control",
      instructor: "Industry Experts",
      instructorLogo: "🏭",
      price: "₹2,199",
      originalPrice: "₹6,299",
      duration: "9 weeks",
      level: "Advanced",
      rating: 4.4,
      students: 5432,
      type: "Skill Course",
      isPopular: false,
      category: "Manufacturing"
    }
  ]
}

interface SkillCourseItem {
  id: number;
  title: string;
  instructor: string;
  instructorLogo: string;
  price: string;
  originalPrice: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  type: string;
  isPopular: boolean;
  category: string;
}

interface SkillsCoursesData {
  [key: string]: SkillCourseItem[];
}

// ======= TabSection Component =======
function TabSection({ title, data }: { title: string; data: SkillsCoursesData; sectionType: "skills" }) {
  const [activeCategory, setActiveCategory] = useState("Digital Skills")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentCards = data[activeCategory] || []
  const cardsPerSlide = 3
  const totalSlides = Math.ceil(currentCards.length / cardsPerSlide)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentSlide(0)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "text-secondary bg-secondary/10"
      case "Intermediate": return "text-primary bg-primary/10"
      case "Advanced": return "text-purple-600 bg-purple-50"
      default: return "text-muted bg-muted/20"
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto justify-center items-center">
        <div className="flex gap-3 min-w-max pb-2 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card text-text border border-border hover:border-secondary/50 hover:text-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div className="overflow-hidden rounded-3xl py-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {currentCards.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((item: SkillCourseItem, index: number) => (
              <div key={`${item.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <div className="cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:scale-[1.02] relative border border-gray-100 hover:border-secondary/20">
                    {/* Popular Badge - Absolute Positioned with Unique Gradient */}
                    {item.isPopular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 z-10 shadow-lg">
                        <Award className="w-4 h-4" />
                        Popular
                      </div>
                    )}
                    
                    {/* Skill Course Content */}
                    <div className="p-4 h-full flex flex-col">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                          <span className="text-xs">{item.instructorLogo}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-700">{item.instructor}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 mb-3 flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium text-gray-700">{item.rating}</span>
                            <span className="text-xs text-gray-500">({item.students.toLocaleString()})</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                            {item.level}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-secondary" />
                          <span className="text-xs text-gray-600">{item.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-primary" />
                          <span className="text-xs text-gray-600">{item.students.toLocaleString()} students</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                        </div>
                        <button className="bg-gradient-to-r from-secondary to-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:from-secondary/90 hover:to-primary/90 transition-all duration-300 flex items-center gap-1">
                          Start Learning
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ======= Main Export Component =======
export default function SkillsCoursesAndDevelopment() {
  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            What skills do you want to develop?
          </h2>
          <p className="text-muted text-lg">
            Master professional skills and boost your career with expert-led courses
          </p>
        </div>
        <TabSection title=" Skills Courses" data={skillsCoursesData} sectionType="skills" />
      </div>
    </section>
  )
}
