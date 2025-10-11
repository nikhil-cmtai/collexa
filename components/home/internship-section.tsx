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
            {currentCards.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((item: InternshipItem, index: number) => (
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
                  <div className="relative bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-purple-100">

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

                      {/* Internship Title */}
                      <h4 className="text-lg font-bold text-gray-800 mb-1.5 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* Company Name */}
                      <p className="text-sm text-gray-500 mb-3">{item.company}</p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-3"></div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item.workType}</span>
                      </div>

                      {/* Salary */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item.salary}</span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item.duration}</span>
                      </div>

                      {/* Bottom: Internship Type + Apply Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-purple-100">
                        <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-200">
                          {item.type}
                        </span>
                        <button className="text-purple-600 text-sm font-semibold hover:text-purple-700 flex items-center gap-1 transition-colors">
                          Apply Now
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

export default function InternshipOpportunities() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">Launch Your Career With Internships</h2>
          <p className="text-muted text-lg">Gain practical experience with leading companies</p>
        </motion.div>
        <InternshipsSection />
      </div>
    </section>
  )
}
