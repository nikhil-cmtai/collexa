"use client"

import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"
import { Briefcase, Rocket, BookOpen, Users } from "lucide-react"

const highlights = [
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Fast Track Your Career",
    description:
      "Gain real-world experience and boost your resume with curated internships.",
    color: "bg-blue-600",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "Top Companies",
    description:
      "Intern with startups, unicorns, and global corporations handpicked for students.",
    color: "bg-purple-600",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Skill Development",
    description: "Learn industry-relevant skills with mentorship and guided projects.",
    color: "bg-green-600",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Networking Opportunities",
    description: "Connect with industry professionals and fellow interns worldwide.",
    color: "bg-indigo-600",
  },
]

const InternshipsHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Choose Our Internship Platform
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our platform is designed to help students find the best internship
          opportunities and accelerate their career growth.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center rounded-full w-14 h-14 mb-5 ${highlight.color}`}
            >
              {highlight.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {highlight.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InternshipsHighlights
