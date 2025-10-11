"use client"

import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

const steps = [
  {
    icon: "👨🏻‍💻",
    title: "Create Your Profile",
    description:
      "Fill in your details, education, skills, and interests to get personalized internship suggestions.",
    color: "bg-blue-600",
  },
  {
    icon: "📑",
    title: "Browse Internships",
    description:
      "Explore verified internships from startups, unicorns, and global companies.",
    color: "bg-purple-600",
  },
  {
    icon: "✅",
    title: "Apply Easily",
    description:
      "Submit your application in just a few clicks directly from our platform.",
    color: "bg-green-600",
  },
  {
    icon: "📈",
    title: "Grow Your Career",
    description:
      "Get selected, gain real-world experience, and accelerate your career journey.",
    color: "bg-indigo-600",
  },
]

const InternshipsHowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            How Our Internship Platform Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to find, apply, and get selected for internships that boost your career.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full mb-5 text-3xl ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternshipsHowItWorks
