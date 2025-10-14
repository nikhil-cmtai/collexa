"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Rocket, BookOpen, Users } from "lucide-react"

const highlights = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Fast Track Your Career",
    description:
      "Gain real-world experience and boost your resume with curated internships.",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-secondary" />,
    title: "Top Companies",
    description:
      "Intern with startups, unicorns, and global corporations handpicked for students.",
    color: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-black" />,
    title: "Skill Development",
    description: "Learn industry-relevant skills with mentorship and guided projects.",
    color: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Networking Opportunities",
    description: "Connect with industry professionals and fellow interns worldwide.",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

const InternshipsHighlights = () => {

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
          Why Choose Our Internship Platform
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Our platform is designed to help students find the best internship
          opportunities and accelerate their career growth.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-start p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.2, type: "spring" }}
              whileHover={{ rotate: 360 }}
              className={`flex items-center justify-center rounded-full w-14 h-14 mb-5 ${highlight.color} border ${highlight.borderColor}`}
            >
              {highlight.icon}
            </motion.div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-heading mb-2">
              {highlight.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-muted leading-relaxed">{highlight.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default InternshipsHighlights
