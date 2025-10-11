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
  const cardsPerSlide = 3
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
    <div className="max-w-7xl mx-auto mb-16">
      <div className="overflow-x-auto justify-center items-center">
        <div className="flex gap-3 min-w-max pb-2 justify-center">
          {categories.map((category) => (
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
            {currentCards.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((item: JobItem, index: number) => (
              <div key={`${item.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <div className="cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden relative transition-all duration-500 hover:scale-[1.02] hover:border-primary/20">

                    {/* Hiring Badge */}
                    {item.isHiring && (
                      <div className="absolute top-4 right-4  bg-cyan-800 text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 z-10 shadow-md shadow-teal-900/20">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Hiring
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-5 flex flex-col h-full">                  

                      {/* Job Title */}
                      <h4 className="text-base mt-8 font-semibold text-gray-900 mb-0 line-clamp-2">
                        {item.title}
                      </h4>

                      {/* Company Info */}
                      <div className="flex items-center gap-3  mb-2 ">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                          <span className="text-xs font-semibold text-gray-700">{item.companyLogo}</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium text-gray-800 mb-0" style={{marginBottom:"0px"}}>{item.company}</p>
                          <p className="text-xs text-gray-500 mb-0">{item.workType}</p>
                        </div>
                      </div>

                      {/* Salary */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                          💲
                          <span className="text-xs text-gray-600 font-medium">{item.salary}</span>
                        </div>
                      </div>

                      {/* Footer: Job Type & Button */}
                      <div className="flex items-center justify-between mt-05 mb-5 ">
                        <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                        <button className="text-primary text-xs font-medium hover:text-primary/80 flex items-center gap-1">
                          View details
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

export default function JobOpportunities() {
  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">Find Your Next Career Opportunity</h2>
          <p className="text-muted text-lg">Discover jobs from top companies across India</p>
        </div>
        <JobsSection />
      </div>
    </section>
  )
}
