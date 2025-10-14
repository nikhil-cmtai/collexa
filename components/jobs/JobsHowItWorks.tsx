"use client"

import React from "react"
import { Search, Filter, Send } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Browse Openings",
    desc: "Explore the latest fresher jobs and internships tailored to your interests.",
  },
  {
    icon: Filter,
    title: "Refine with Filters",
    desc: "Use smart filters to find the roles that best match your skills and goals.",
  },
  {
    icon: Send,
    title: "Apply Effortlessly",
    desc: "Submit applications quickly with a simple and guided process.",
  },
]

export default function JobsHowItWorks() {
  return (
    <section className="relative py-16 px-6 lg:px-12 bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900"
        >
          How It <span className="text-secondary">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
        >
          A quick and simple process to land your next opportunity.
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="p-3 h-12 w-12 mx-auto rounded-xl bg-primary text-white flex items-center justify-center">
                <s.icon className="size-6" />
              </div>

              {/* Text */}
              <h3 className="mt-5 text-lg sm:text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Flow line connector (optional aesthetic touch) */}
        <div className="hidden md:block mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-secondary via-primary to-secondary rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  )
}
