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
              <div key={`${item.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <div className="cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden relative transition-all duration-500 hover:scale-[1.02] hover:border-primary/20">

                    {/* Hiring Badge - Absolute Positioned */}
                    {item.isHiring && (
                      <div className="absolute top-4 right-4 bg-indigo-400 text-white px-3.5 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 z-10 shadow-md shadow-teal-900/20">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Hiring
                      </div>
                    )}

                    {/* Internship Content */}
                    <div className="p-5 h-full flex flex-col">

                      {/* Title */}
                      <h4 className="text-lg font-semibold text-gray-900  line-clamp-2">
                        {item.title}
                      </h4>

                      {/* Company Info */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                          {item.companyLogo.startsWith("http") ? (
                            <Image
                              src={item.companyLogo || "/placeholder.svg"}
                              alt={item.company}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                target.nextElementSibling!.classList.remove("hidden");
                              }}
                            />
                          ) : null}
                          <span
                            className={`text-xs font-bold text-primary absolute inset-0 flex items-center justify-center ${item.companyLogo.startsWith("http") ? "hidden" : ""}`}
                          >
                            {item.company.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs text-gray-700 mb-0" style={{ marginBottom: "0px" }}>{item.company}</p>
                          <p className="text-xs text-gray-500">{item.workType}</p>
                        </div>
                      </div>

                      {/* Salary & Duration */}
                      <div className="flex flex-col gap-2 flex-1 mb-2">

                        {/* Salary */}
                        <div className="flex items-center gap-2 text-gray-700 text-sm bg-gray-50 px-2 py-1 rounded-md w-max">
                         💲
                          <span className="font-medium">{item.salary}</span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-gray-700 text-sm bg-gray-50 px-2 py-1 rounded-md w-max">
                          🕗
                          <span className="font-medium">{item.duration}</span>
                        </div>

                      </div>


                      {/* Bottom Section */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                        <button className="text-primary text-xs font-medium hover:text-primary/80 flex items-center gap-1">
                          Apply Now
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

export default function InternshipOpportunities() {
  return (
    <section className="bg-gradient-to-b from-surface to-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">Launch Your Career With Internships</h2>
          <p className="text-muted text-lg">Gain practical experience with leading companies</p>
        </div>
        <InternshipsSection />
      </div>
    </section>
  )
}
