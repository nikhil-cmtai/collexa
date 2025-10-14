"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  Building2,
  Rocket,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react"

const highlights = [
  {
    icon: Rocket,
    title: "Fast-Growing Roles",
    desc: "Discover opportunities in cutting-edge industries and fast-scaling startups.",
  },
  {
    icon: Building2,
    title: "Trusted Employers",
    desc: "Partnered with verified organizations across India and abroad.",
  },
  {
    icon: MapPin,
    title: "Work Anywhere",
    desc: "Explore on-site, hybrid, and remote roles that fit your lifestyle.",
  },
  {
    icon: Users,
    title: "Student Friendly",
    desc: "Internships and full-time roles designed specifically for freshers.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    desc: "Upskill and get mentorship to accelerate your professional journey.",
  },
  {
    icon: Sparkles,
    title: "Smart Matching",
    desc: "AI-powered filters connect you with the most relevant openings.",
  },
]

export default function JobsHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Why Choose <span className="text-secondary">CareerLink?</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Designed to help you find verified opportunities faster, smarter, and easier.
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
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />

            <div className="relative flex items-start gap-4">
              <motion.div
                className=" p-3 flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-md group-hover:scale-110 transition-transform duration-200"
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
