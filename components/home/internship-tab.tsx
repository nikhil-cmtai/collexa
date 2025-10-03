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

interface InternshipItem {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  salary: string;
  workType: string;
  duration: string;
  type: string;
  isHiring: boolean;
}

const internshipsData = {
  "Big brands": [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      companyLogo: "https://logo.clearbit.com/google.com",
      salary: "₹50,000 - 80,000 /month",
      workType: "Bangalore",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Product Management Intern",
      company: "Amazon",
      companyLogo: "https://logo.clearbit.com/amazon.com",
      salary: "₹40,000 - 60,000 /month",
      workType: "Mumbai",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Microsoft",
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      salary: "₹45,000 - 70,000 /month",
      workType: "Hyderabad",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  "Work from home": [
    {
      id: 1,
      title: "Digital Marketing Intern",
      company: "Growth Hackers",
      companyLogo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=GH",
      salary: "₹10,000 - 20,000 /month",
      workType: "Work From Home",
      duration: "3 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Content Writing Intern",
      company: "BlogCorp",
      companyLogo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=BC",
      salary: "₹8,000 - 15,000 /month",
      workType: "Work From Home",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "TechStartup",
      companyLogo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=TS",
      salary: "₹15,000 - 25,000 /month",
      workType: "Work From Home",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  "Part-time": [
    {
      id: 1,
      title: "Research Assistant",
      company: "University Lab",
      companyLogo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=UL",
      salary: "₹5,000 - 10,000 /month",
      workType: "Part-time",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Teaching Assistant",
      company: "EduTech",
      companyLogo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=ET",
      salary: "₹8,000 - 12,000 /month",
      workType: "Part-time",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Event Management Intern",
      company: "Event Co",
      companyLogo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=EC",
      salary: "₹6,000 - 10,000 /month",
      workType: "Part-time",
      duration: "3 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  MBA: [
    {
      id: 1,
      title: "Marketing",
      company: "Surge Media",
      companyLogo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=SM",
      salary: "₹7,000 - 10,000 /month",
      workType: "Mumbai",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Social Media Marketing",
      company: "CRETIKPANDA",
      companyLogo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=CP",
      salary: "₹5,000 - 10,000 /month",
      workType: "Delhi",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Telesales",
      company: "LJ Webtech",
      companyLogo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=LJ",
      salary: "₹5,000 - 6,000 /month",
      workType: "Work From Home",
      duration: "3 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 4,
      title: "Business Development (Sales)",
      company: "LJ Webtech",
      companyLogo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=LJ",
      salary: "₹4,003 - 5,004 /month",
      workType: "Work From Home",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  Engineering: [
    {
      id: 1,
      title: "Web Development",
      company: "DigiCoders",
      companyLogo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=DC",
      salary: "₹8,000 - 15,000 /month",
      workType: "Work From Home",
      duration: "5 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Data Science",
      company: "Quantifiers",
      companyLogo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=QU",
      salary: "₹10,000 - 15,000 /month",
      workType: "Work From Home",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Mobile App Development",
      company: "Applify",
      companyLogo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=AP",
      salary: "₹5,000 - 8,000 /month",
      workType: "Work From Home",
      duration: "5 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 4,
      title: "Full Stack Development",
      company: "WebEpoch",
      companyLogo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=WE",
      salary: "₹5,000 - 10,000 /month",
      workType: "Work From Home",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  Media: [
    {
      id: 1,
      title: "Social Media Marketing",
      company: "CRETIKPANDA",
      companyLogo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=CP",
      salary: "₹5,000 - 10,000 /month",
      workType: "Delhi",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Video Production Intern",
      company: "Media House",
      companyLogo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=MH",
      salary: "₹8,000 - 15,000 /month",
      workType: "Mumbai",
      duration: "3 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Journalism Intern",
      company: "News Channel",
      companyLogo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=NC",
      salary: "₹6,000 - 12,000 /month",
      workType: "Delhi",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  Design: [
    {
      id: 1,
      title: "Graphic Design Intern",
      company: "Creative Studio",
      companyLogo: "https://via.placeholder.com/40x40/EF4444/FFFFFF?text=CS",
      salary: "₹8,000 - 15,000 /month",
      workType: "Mumbai",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "Design Agency",
      companyLogo: "https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=DA",
      salary: "₹12,000 - 20,000 /month",
      workType: "Bangalore",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Fashion Design Intern",
      company: "Fashion House",
      companyLogo: "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=FH",
      salary: "₹6,000 - 12,000 /month",
      workType: "Delhi",
      duration: "3 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
  "Data Science": [
    {
      id: 1,
      title: "Data Analytics Intern",
      company: "Analytics Corp",
      companyLogo: "https://via.placeholder.com/40x40/10B981/FFFFFF?text=AC",
      salary: "₹15,000 - 25,000 /month",
      workType: "Bangalore",
      duration: "6 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      company: "AI Solutions",
      companyLogo: "https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=AI",
      salary: "₹18,000 - 30,000 /month",
      workType: "Hyderabad",
      duration: "5 Months",
      type: "Internship",
      isHiring: true,
    },
    {
      id: 3,
      title: "Business Intelligence Intern",
      company: "Data Insights",
      companyLogo: "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=DI",
      salary: "₹12,000 - 20,000 /month",
      workType: "Chennai",
      duration: "4 Months",
      type: "Internship",
      isHiring: true,
    },
  ],
}

function InternshipsSection() {
  const [activeCategory, setActiveCategory] = useState("MBA")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentCards = internshipsData[activeCategory as keyof typeof internshipsData] || []
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
        <h3 className="text-2xl font-semibold text-heading mb-4">Internship Programs</h3>
      </div>

      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-3 min-w-max pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-card text-text border border-border hover:border-secondary/50 hover:text-secondary"
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
            .map((item: InternshipItem) => (
              <div
                key={item.id}
                className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow duration-200 h-80 flex flex-col"
              >
                {item.isHiring && (
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-secondary font-medium">Actively hiring</span>
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
                      className={`text-xs font-bold text-secondary ${item.companyLogo.startsWith("http") ? "hidden" : ""}`}
                    >
                      {item.company.substring(0, 2).toUpperCase()}
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

                  {item.duration && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-text">{item.duration}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-sm text-muted font-medium">{item.type}</span>
                  <button className="text-secondary text-sm font-medium hover:text-secondary/80 flex items-center gap-1">
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

          {currentCards.length < cardsPerSlide && (
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-6 text-secondary-foreground relative overflow-hidden h-80 flex flex-col">
              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-bold mb-2">Kickstart Your Career</h4>
                <p className="text-secondary-foreground/80 text-sm mb-6">Explore 5,000+ internship opportunities</p>

                <div className="mt-auto">
                  <button className="bg-card text-secondary px-4 py-2 rounded-lg font-medium text-sm hover:bg-surface transition-colors flex items-center gap-2">
                    Browse Internships
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
                  currentSlide === index ? "bg-secondary" : "bg-border hover:bg-muted"
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

export default function InternshipOpportunities() {
  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Launch Your Career With Internships</h2>
          <p className="text-muted text-lg">Gain practical experience with leading companies</p>
        </div>
        <InternshipsSection />
      </div>
    </section>
  )
}
