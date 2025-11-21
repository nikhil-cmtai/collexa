"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Clock, Award } from "lucide-react"

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
function TabSection({ data }: { data: SkillsCoursesData; sectionType: "skills" }) {
  const [activeCategory, setActiveCategory] = useState("Digital Skills")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  const currentCards = data[activeCategory] || []
  const totalSlides = Math.ceil(currentCards.length / cardsPerSlide)

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1) // Extra small: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2) // Small & Medium: 2 cards
      } else {
        setCardsPerSlide(3) // Large: 3 cards
      }
    }

    updateCardsPerSlide()
    window.addEventListener('resize', updateCardsPerSlide)
    return () => window.removeEventListener('resize', updateCardsPerSlide)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentSlide(0)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto justify-center items-center">
        <div className="flex gap-3 min-w-max pb-6 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === category
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        <div className="overflow-hidden rounded-2xl md:rounded-3xl py-8 md:py-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {currentCards.map((item: SkillCourseItem, index: number) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 px-2 md:px-4 w-full sm:w-1/2 lg:w-1/3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="cursor-pointer group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-primary/5 via-white to-primary/10 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-primary/20">

                    {/* Card Content */}
                    <div className="p-3 md:p-5">
                      
                      {/* Top Row: Popular Badge + Level */}
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        {item.isPopular && (
                          <div className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 bg-primary/10 border border-primary/30 rounded-md">
                            <Award className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                            <span className="text-[10px] md:text-xs font-semibold text-primary">Popular</span>
                          </div>
                        )}
                        {!item.isPopular && <div></div>}
                        <span className="px-1.5 md:px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] md:text-xs font-medium rounded-md border border-secondary/30">
                          {item.level}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h4 className="text-base md:text-lg font-bold text-heading mb-1 md:mb-1.5 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* Instructor */}
                      <p className="text-xs md:text-sm text-muted mb-2 md:mb-3">{item.instructor}</p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-2 md:mb-3"></div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 md:gap-1.5 mb-2 md:mb-2.5">
                        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-semibold text-heading">{item.rating}</span>
                        <span className="text-xs md:text-sm text-muted line-clamp-1">({item.students >= 1000 ? `${(item.students / 1000).toFixed(1)}k` : item.students} students)</span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-1 md:gap-1.5 mb-2 md:mb-3">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/70 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-text line-clamp-1">{item.duration} • {item.category}</span>
                      </div>

                      {/* Bottom: Price + Enroll Button */}
                      <div className="flex items-center justify-between pt-2 md:pt-3 border-t border-primary/20">
                        <div className="flex flex-col">
                          <span className="text-base md:text-lg font-bold text-primary">{item.price}</span>
                          <span className="text-[10px] md:text-xs text-muted line-through">{item.originalPrice}</span>
                        </div>
                        <button className="text-primary text-xs md:text-sm font-semibold hover:text-primary/80 flex items-center gap-0.5 md:gap-1 transition-colors">
                          Enroll Now
                          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </motion.div>

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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            What skills do you want to develop?
          </h2>
          <p className="text-muted text-lg">
            Master professional skills and boost your career with expert-led courses
          </p>
        </motion.div>
        <TabSection data={skillsCoursesData} sectionType="skills" />
      </div>
    </section>
  )
}
