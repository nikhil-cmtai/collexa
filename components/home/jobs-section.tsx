"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
              <motion.div 
                key={`${item.id}-${index}`} 
                className="w-1/3 flex-shrink-0 px-4"
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
                  <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-blue-100">

                    {/* Card Content */}
                    <div className="p-5">
                      
                      {/* Actively Hiring Badge */}
                      {item.isHiring && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-200 rounded-lg mb-3">
                          <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-xs font-semibold text-green-700">Actively hiring</span>
                        </div>
                      )}

                      {/* Job Title */}
                      <h4 className="text-lg font-bold text-gray-800 mb-1.5 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* Company Name */}
                      <p className="text-sm text-gray-500 mb-3">{item.company}</p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3"></div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item.workType}</span>
                      </div>

                      {/* Salary */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item.salary}</span>
                      </div>

                      {/* Bottom: Job Type + View Details */}
                      <div className="flex items-center justify-between pt-3 border-t border-blue-100">
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-200">
                          {item.type}
                        </span>
                        <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1 transition-colors">
                          View details
                          <ChevronRight className="w-4 h-4" />
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

export default function JobOpportunities() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">Find Your Next Career Opportunity</h2>
          <p className="text-muted text-lg">Discover jobs from top companies across India</p>
        </motion.div>
        <JobsSection />
      </div>
    </section>
  )
}
