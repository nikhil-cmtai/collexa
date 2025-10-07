"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

// Course & Certification categories
const categories = [
  "Technology",
  "Business",
  "Design",
  "Data Science",
  "Marketing",
  "Development",
  "Finance",
  "Personal Development",
]

// ======= Courses Data =======
const coursesData = {
  Technology: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Tech Academy",
      instructorLogo: "🖥️",
      price: "₹2,999",
      originalPrice: "₹9,999",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 15420,
      type: "Course",
      isPopular: true,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Advanced JavaScript & React",
      instructor: "Code Masters",
      instructorLogo: "⚛️",
      price: "₹3,499",
      originalPrice: "₹7,999",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 8932,
      type: "Course",
      isPopular: true,
      category: "Frontend"
    },
    {
      id: 3,
      title: "Python for Data Science",
      instructor: "DataTech Institute",
      instructorLogo: "🐍",
      price: "₹2,499",
      originalPrice: "₹6,999",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 12875,
      type: "Course",
      isPopular: false,
      category: "Programming"
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      instructor: "Cloud Experts",
      instructorLogo: "☁️",
      price: "₹4,999",
      originalPrice: "₹12,999",
      duration: "14 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 6543,
      type: "Course",
      isPopular: true,
      category: "Cloud"
    },
  ],
  Business: [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      instructor: "Marketing Pro",
      instructorLogo: "📈",
      price: "₹1,999",
      originalPrice: "₹5,999",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 9876,
      type: "Course",
      isPopular: true,
      category: "Marketing"
    },
    {
      id: 2,
      title: "Business Strategy & Analytics",
      instructor: "Business School",
      instructorLogo: "💼",
      price: "₹3,999",
      originalPrice: "₹8,999",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 5432,
      type: "Course",
      isPopular: false,
      category: "Strategy"
    },
    {
      id: 3,
      title: "Entrepreneurship Fundamentals",
      instructor: "Startup Hub",
      instructorLogo: "🚀",
      price: "₹2,299",
      originalPrice: "₹6,499",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.4,
      students: 7891,
      type: "Course",
      isPopular: true,
      category: "Startup"
    },
    {
      id: 4,
      title: "Financial Accounting Basics",
      instructor: "FinancePro",
      instructorLogo: "🏦",
      price: "₹1,799",
      originalPrice: "₹5,000",
      duration: "7 weeks",
      level: "Beginner",
      rating: 4.2,
      students: 4233,
      type: "Course",
      isPopular: false,
      category: "Finance"
    }
  ],
  Design: [
    {
      id: 1,
      title: "UI/UX Design Complete Course",
      instructor: "Design Studio",
      instructorLogo: "🎨",
      price: "₹2,799",
      originalPrice: "₹7,999",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 11234,
      type: "Course",
      isPopular: true,
      category: "UI/UX"
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      instructor: "Creative Academy",
      instructorLogo: "🖌️",
      price: "₹1,899",
      originalPrice: "₹4,999",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 8765,
      type: "Course",
      isPopular: false,
      category: "Graphics"
    },
    {
      id: 3,
      title: "Motion Graphics & Animation",
      instructor: "Motion Pro",
      instructorLogo: "🎬",
      price: "₹3,299",
      originalPrice: "₹8,999",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 4321,
      type: "Course",
      isPopular: true,
      category: "Animation"
    },
    {
      id: 4,
      title: "Prototyping in Figma",
      instructor: "Figma Expert",
      instructorLogo: "🏅",
      price: "₹2,200",
      originalPrice: "₹6,000",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.3,
      students: 3201,
      type: "Course",
      isPopular: false,
      category: "Prototyping"
    }
  ],
  "Data Science": [
    {
      id: 1,
      title: "Machine Learning A to Z",
      instructor: "AI Institute",
      instructorLogo: "🤖",
      price: "₹4,499",
      originalPrice: "₹12,999",
      duration: "16 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 13456,
      type: "Course",
      isPopular: true,
      category: "ML"
    },
    {
      id: 2,
      title: "Data Analytics with Python",
      instructor: "Data Academy",
      instructorLogo: "📊",
      price: "₹2,999",
      originalPrice: "₹8,499",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 9876,
      type: "Course",
      isPopular: false,
      category: "Analytics"
    },
    {
      id: 3,
      title: "Deep Learning & Neural Networks",
      instructor: "Deep Learn Pro",
      instructorLogo: "🧠",
      price: "₹5,999",
      originalPrice: "₹15,999",
      duration: "20 weeks",
      level: "Advanced",
      rating: 4.8,
      students: 5678,
      type: "Course",
      isPopular: true,
      category: "Deep Learning"
    },
    {
      id: 4,
      title: "Tableau Data Visualization",
      instructor: "Viz Lab",
      instructorLogo: "📈",
      price: "₹2,500",
      originalPrice: "₹6,000",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.3,
      students: 2532,
      type: "Course",
      isPopular: false,
      category: "Visualization"
    }
  ],
  Marketing: [
    {
      id: 1,
      title: "Social Media Marketing 2024",
      instructor: "Social Pro",
      instructorLogo: "📱",
      price: "₹1,599",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 14567,
      type: "Course",
      isPopular: true,
      category: "Social Media"
    },
    {
      id: 2,
      title: "Content Marketing Strategy",
      instructor: "Content Masters",
      instructorLogo: "📝",
      price: "₹2,199",
      originalPrice: "₹5,999",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.4,
      students: 7890,
      type: "Course",
      isPopular: false,
      category: "Content"
    },
    {
      id: 3,
      title: "Email Marketing Automation",
      instructor: "Email Experts",
      instructorLogo: "📧",
      price: "₹1,899",
      originalPrice: "₹4,499",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.3,
      students: 6543,
      type: "Course",
      isPopular: true,
      category: "Email"
    },
    {
      id: 4,
      title: "SEO Optimization Bootcamp",
      instructor: "SEO Guru",
      instructorLogo: "🌐",
      price: "₹2,500",
      originalPrice: "₹7,000",
      duration: "9 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 3092,
      type: "Course",
      isPopular: false,
      category: "SEO"
    }
  ],
  Development: [
    {
      id: 1,
      title: "Full Stack MERN Development",
      instructor: "Dev Academy",
      instructorLogo: "💻",
      price: "₹3,999",
      originalPrice: "₹11,999",
      duration: "16 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 12345,
      type: "Course",
      isPopular: true,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Mobile App Development",
      instructor: "Mobile Pro",
      instructorLogo: "📱",
      price: "₹3,499",
      originalPrice: "₹9,999",
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 8765,
      type: "Course",
      isPopular: false,
      category: "Mobile"
    },
    {
      id: 3,
      title: "Backend Development with Node.js",
      instructor: "Backend Masters",
      instructorLogo: "🔧",
      price: "₹2,799",
      originalPrice: "₹7,499",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.6,
      students: 6789,
      type: "Course",
      isPopular: true,
      category: "Backend"
    },
    {
      id: 4,
      title: "DevOps Essentials",
      instructor: "CloudOps Lab",
      instructorLogo: "☁️",
      price: "₹3,250",
      originalPrice: "₹8,500",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 2543,
      type: "Course",
      isPopular: false,
      category: "DevOps"
    }
  ],
  Finance: [
    {
      id: 1,
      title: "Investment Banking Fundamentals",
      instructor: "Finance Institute",
      instructorLogo: "🏦",
      price: "₹4,999",
      originalPrice: "₹13,999",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 4567,
      type: "Course",
      isPopular: true,
      category: "Banking"
    },
    {
      id: 2,
      title: "Personal Finance Management",
      instructor: "Money Matters",
      instructorLogo: "💰",
      price: "₹1,499",
      originalPrice: "₹3,999",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 11234,
      type: "Course",
      isPopular: false,
      category: "Personal Finance"
    },
    {
      id: 3,
      title: "Stock Market Trading",
      instructor: "Trading Pro",
      instructorLogo: "📈",
      price: "₹3,299",
      originalPrice: "₹8,999",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.4,
      students: 7890,
      type: "Course",
      isPopular: true,
      category: "Trading"
    },
    {
      id: 4,
      title: "Taxation Made Easy",
      instructor: "TaxPro",
      instructorLogo: "🧮",
      price: "₹1,799",
      originalPrice: "₹5,000",
      duration: "7 weeks",
      level: "Beginner",
      rating: 4.2,
      students: 4233,
      type: "Course",
      isPopular: false,
      category: "Taxation"
    }
  ],
  "Personal Development": [
    {
      id: 1,
      title: "Leadership & Communication Skills",
      instructor: "Skill Builder",
      instructorLogo: "🎯",
      price: "₹1,999",
      originalPrice: "₹5,499",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 9876,
      type: "Course",
      isPopular: true,
      category: "Leadership"
    },
    {
      id: 2,
      title: "Time Management Mastery",
      instructor: "Productivity Pro",
      instructorLogo: "⏰",
      price: "₹1,299",
      originalPrice: "₹3,499",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.4,
      students: 8765,
      type: "Course",
      isPopular: false,
      category: "Productivity"
    },
    {
      id: 3,
      title: "Public Speaking & Presentation",
      instructor: "Speak Masters",
      instructorLogo: "🎤",
      price: "₹1,799",
      originalPrice: "₹4,999",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 6543,
      type: "Course",
      isPopular: true,
      category: "Communication"
    },
    {
      id: 4,
      title: "Mindfulness for Beginners",
      instructor: "Calm Minds",
      instructorLogo: "🧘",
      price: "₹1,200",
      originalPrice: "₹3,200",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 3209,
      type: "Course",
      isPopular: false,
      category: "Mindfulness"
    }
  ]
}

// ======= TabSection Component =======
interface CourseItem {
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

interface CoursesData {
  [key: string]: CourseItem[];
}

function TabSection({ title, data, sectionType }: { title: string; data: CoursesData; sectionType: "courses" | "certifications" }) {
  const [activeCategory, setActiveCategory] = useState(sectionType === "courses" ? "Technology" : "Business")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentCards = data[activeCategory] || []
  const cardsPerSlide = 4
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
    <div className="mb-16">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-heading mb-4">{title}</h3>
      </div>
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 min-w-max pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-text border border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCards
            .slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide)
            .map((item: CourseItem) => (
              <div
                key={item.id}
                className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-lg transition-all duration-200 h-96 flex flex-col group"
              >
                {item.isPopular && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded-full">
                      <Award className="w-3 h-3 text-accent-foreground" />
                      <span className="text-xs text-accent-foreground font-medium">Popular</span>
                    </div>
                  </div>
                )}
                <h4 className="text-lg font-semibold text-heading mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
                    {item.instructorLogo.startsWith("http") ? (
                      <Image
                        src={item.instructorLogo || "/placeholder.svg"}
                        alt={item.instructor}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          target.nextElementSibling!.classList.remove("hidden")
                        }}
                      />
                    ) : null}
                    <span
                      className={`text-xs font-bold ${item.instructorLogo.startsWith("http") ? "hidden" : ""}`}
                    >
                      {item.instructorLogo}
                    </span>
                  </div>
                  <div>
                    <p className="text-text text-sm font-medium">{item.instructor}</p>
                    <p className="text-muted text-xs">{item.category}</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium text-heading">{item.rating}</span>
                      <span className="text-sm text-muted">({item.students.toLocaleString()})</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                      {item.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted" />
                    <span className="text-sm text-text">{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted" />
                    <span className="text-sm text-text">{item.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-heading">{item.price}</span>
                    {item.originalPrice !== item.price && (
                      <span className="text-sm text-muted line-through">{item.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-sm text-muted font-medium">{item.type}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-1">
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

          {sectionType === "courses" && currentCards.length < cardsPerSlide && (
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-6 text-secondary-foreground relative overflow-hidden h-96 flex flex-col">
              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-bold mb-2">Learn from Industry Experts</h4>
                <p className="text-secondary-foreground/80 text-sm mb-6">Explore 10,000+ courses across all categories</p>
                <div className="mt-auto">
                  <button className="bg-card text-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    Browse All Courses
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="20" y="30" width="60" height="40" rx="4" fill="currentColor" />
                  <rect x="30" y="40" width="40" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="30" y="48" width="30" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="30" y="56" width="35" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="20" r="8" fill="currentColor" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="bg-card rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 border border-border disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index ? "bg-primary" : "bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-card rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 border border-border disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-5 h-5 text-text" />
          </button>
        </div>
      )}
    </div>
  )
}

// ======= Main Export Component =======
export default function CompassCoursesAndCertifications() {
  return (
    <section className="relative overflow-hidden group bg-gradient-to-b from-surface to-background py-16 px-4">
      {/* Background image with hover zoom */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop"
          alt="Students learning in a modern campus"
          fill
          priority
          className="object-cover opacity-15 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/60 to-[var(--background)]/80" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            What do you want to learn today?
          </h2>
          <p className="text-muted text-lg">
            Discover courses and certifications from industry experts
          </p>
        </div>
        <TabSection title="Campus Courses" data={coursesData} sectionType="courses" />
        {/* <TabSection title="Professional Certifications" data={certificationsData} sectionType="certifications" /> */}
      </div>
    </section>
  )
}
