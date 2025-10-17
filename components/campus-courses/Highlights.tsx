"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  BadgeCheck,
  Users,
  Star,
  Gem,
} from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    desc: "Learn from top campus faculty and industry leaders who bring real-world experience.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Curriculum",
    desc: "Courses thoroughly vetted and approved by participating institutions.",
  },
  {
    icon: BookOpen,
    title: "Diverse Subjects",
    desc: "Choose from a wide range of academic disciplines and skill-based offerings.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    desc: "Engage and connect with peers through group projects and discussions.",
  },
  {
    icon: Star,
    title: "Certification",
    desc: "Earn credible certificates on successful completion to boost your CV.",
  },
  {
    icon: Gem,
    title: "Campus Recognition",
    desc: "Courses recognized and supported by top universities and colleges.",
  },
]

export default function CampusCoursesHighlights() {
  return (
    <section className="relative py-16 px-6 lg:px-12 bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Why Explore <span className="text-secondary">Campus Courses?</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Curated courses from leading campuses, designed to accelerate your learning and support your academic journey.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:scale-[1.02] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-violet-100 to-sky-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />

            <div className="relative flex items-start gap-4">
              <motion.div
                className="p-3 flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-md group-hover:scale-110 transition-transform duration-200"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                whileHover={{ rotate: 360 }}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
