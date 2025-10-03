"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = [
  "Big brands",
  "Work from home", 
  "Part-time",
  "MBA",
  "Engineering",
  "Media",
  "Design",
  "Data Science",
]

interface JobItem {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  salary: string;
  workType: string;
  type: string;
  isHiring: boolean;
}

// Different job data for each category
const jobsData = {
  "Big brands": [
    {
      id: 1,
      title: "Software Development Engineer",
      company: "Amazon",
      companyLogo: "🏢",
      salary: "₹12,00,000 - 18,00,000 /year",
      workType: "Bangalore",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Google",
      companyLogo: "🏢",
      salary: "₹15,00,000 - 25,00,000 /year",
      workType: "Mumbai",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Microsoft",
      companyLogo: "🏢",
      salary: "₹10,00,000 - 16,00,000 /year",
      workType: "Hyderabad",
      type: "Job",
      isHiring: true,
    },
  ],
  "Work from home": [
    {
      id: 1,
      title: "Graphic Designer And Video Editor",
      company: "Glasscard",
      companyLogo: "🎨",
      salary: "₹4,80,000 - 6,60,000 /year",
      workType: "Work From Home",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "B2C Sales Associate",
      company: "AI Certs",
      companyLogo: "🏢",
      salary: "₹2,00,000 - 3,00,000 /year",
      workType: "Work From Home",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Machine Learning & Deep Learning Developer",
      company: "Qriocity Ventures Private Limited",
      companyLogo: "🤖",
      salary: "₹3,00,000 - 3,50,000 /year",
      workType: "Work From Home",
      type: "Job",
      isHiring: true,
    },
  ],
  "Part-time": [
    {
      id: 1,
      title: "Content Writer",
      company: "BlogCorp",
      companyLogo: "✍️",
      salary: "₹15,000 - 25,000 /month",
      workType: "Part-time",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Social Media Manager",
      company: "Digital Agency",
      companyLogo: "📱",
      salary: "₹20,000 - 35,000 /month",
      workType: "Part-time",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Tutor - Mathematics",
      company: "EduTech Solutions",
      companyLogo: "📚",
      salary: "₹500 - 1,000 /hour",
      workType: "Part-time",
      type: "Job",
      isHiring: true,
    },
  ],
  MBA: [
    {
      id: 1,
      title: "Business Analyst",
      company: "Consulting Firm",
      companyLogo: "📊",
      salary: "₹8,00,000 - 12,00,000 /year",
      workType: "Mumbai",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Strategy Consultant",
      company: "McKinsey & Company",
      companyLogo: "🏢",
      salary: "₹20,00,000 - 30,00,000 /year",
      workType: "Delhi",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Investment Banking Associate",
      company: "Goldman Sachs",
      companyLogo: "🏦",
      salary: "₹15,00,000 - 25,00,000 /year",
      workType: "Mumbai",
      type: "Job",
      isHiring: true,
    },
  ],
  Engineering: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechStartup",
      companyLogo: "💻",
      salary: "₹6,00,000 - 10,00,000 /year",
      workType: "Bangalore",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudTech",
      companyLogo: "☁️",
      salary: "₹8,00,000 - 14,00,000 /year",
      workType: "Pune",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company: "AppDev Solutions",
      companyLogo: "📱",
      salary: "₹5,00,000 - 9,00,000 /year",
      workType: "Chennai",
      type: "Job",
      isHiring: true,
    },
  ],
  Media: [
    {
      id: 1,
      title: "Video Editor",
      company: "Media House",
      companyLogo: "🎬",
      salary: "₹3,00,000 - 5,00,000 /year",
      workType: "Mumbai",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Journalist",
      company: "News Channel",
      companyLogo: "📺",
      salary: "₹4,00,000 - 7,00,000 /year",
      workType: "Delhi",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Social Media Coordinator",
      company: "Digital Media",
      companyLogo: "📱",
      salary: "₹2,50,000 - 4,50,000 /year",
      workType: "Bangalore",
      type: "Job",
      isHiring: true,
    },
  ],
  Design: [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Design Studio",
      companyLogo: "🎨",
      salary: "₹4,00,000 - 8,00,000 /year",
      workType: "Bangalore",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Graphic Designer",
      company: "Creative Agency",
      companyLogo: "🖌️",
      salary: "₹3,00,000 - 6,00,000 /year",
      workType: "Mumbai",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Tech Company",
      companyLogo: "💡",
      salary: "₹6,00,000 - 12,00,000 /year",
      workType: "Pune",
      type: "Job",
      isHiring: true,
    },
  ],
  "Data Science": [
    {
      id: 1,
      title: "Data Analyst",
      company: "Analytics Corp",
      companyLogo: "📊",
      salary: "₹4,00,000 - 7,00,000 /year",
      workType: "Bangalore",
      type: "Job",
      isHiring: true,
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "AI Solutions",
      companyLogo: "🤖",
      salary: "₹8,00,000 - 15,00,000 /year",
      workType: "Hyderabad",
      type: "Job",
      isHiring: true,
    },
    {
      id: 3,
      title: "Business Intelligence Developer",
      company: "Data Insights",
      companyLogo: "📈",
      salary: "₹5,00,000 - 9,00,000 /year",
      workType: "Chennai",
      type: "Job",
      isHiring: true,
    },
  ],
}

function JobsSection() {
  const [activeCategory, setActiveCategory] = useState("Work from home")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentCards = jobsData[activeCategory as keyof typeof jobsData] || []
  const cardsPerSlide = 4
  const totalSlides = Math.ceil(currentCards.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentSlide(0)
  }

  return (
    <div className="mb-16">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-heading mb-4">Fresh Job Opportunities</h3>
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
            .map((item: JobItem) => (
              <div
                key={item.id}
                className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow duration-200 h-80 flex flex-col"
              >
                {item.isHiring && (
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-primary font-medium">Actively hiring</span>
                  </div>
                )}

                <h4 className="text-lg font-semibold text-heading mb-2 line-clamp-2">{item.title}</h4>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
                    {item.companyLogo.startsWith("http") ? (
                      <Image
                        src={item.companyLogo || "/placeholder.svg"}
                        alt={item.company}
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
                      className={`text-xs font-bold text-primary ${item.companyLogo.startsWith("http") ? "hidden" : ""}`}
                    >
                      {item.companyLogo}
                    </span>
                  </div>
                  <p className="text-text text-sm font-medium">{item.company}</p>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-text">{item.workType}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <span className="text-sm text-text">{item.salary}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-sm text-muted font-medium">{item.type}</span>
                  <button className="text-primary text-sm font-medium hover:text-primary/80 flex items-center gap-1">
                    View details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

          {currentCards.length < cardsPerSlide && (
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground relative overflow-hidden h-80 flex flex-col">
              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-bold mb-2 text-white">Work with your dream company</h4>
                <p className="text-primary-foreground/80 text-sm mb-6">Explore more than 15,000+ jobs</p>

                <div className="mt-auto">
                  <button className="bg-card text-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    View jobs
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="30" r="8" fill="currentColor" />
                  <rect x="45" y="40" width="10" height="20" fill="currentColor" />
                  <rect x="35" y="45" width="8" height="3" fill="currentColor" />
                  <rect x="57" y="45" width="8" height="3" fill="currentColor" />
                  <rect x="40" y="62" width="6" height="15" fill="currentColor" />
                  <rect x="54" y="62" width="6" height="15" fill="currentColor" />
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

export default function JobOpportunities() {
  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Find Your Next Career Opportunity</h2>
          <p className="text-muted text-lg">Discover jobs from top companies across India</p>
        </div>
        <JobsSection />
      </div>
    </section>
  )
}
