"use client"

import React from "react"
import { motion } from "framer-motion"
import { User, Search, Send, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Create Your Profile",
    description:
      "Fill in your details, education, skills, and interests to get personalized internship suggestions.",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: <Search className="w-6 h-6 text-secondary" />,
    title: "Browse Internships",
    description:
      "Explore verified internships from startups, unicorns, and global companies.",
    color: "bg-secondary/10",
    borderColor: "border-secondary/20",
  },
  {
    icon: <Send className="w-6 h-6 text-black" />,
    title: "Apply Easily",
    description:
      "Submit your application in just a few clicks directly from our platform.",
    color: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Grow Your Career",
    description:
      "Get selected, gain real-world experience, and accelerate your career journey.",
    color: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

const InternshipsHowItWorks = () => {

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            How Our Internship Platform Works
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Follow these simple steps to find, apply, and get selected for internships that boost your career.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                whileHover={{ rotate: 360 }}
                className={`flex items-center justify-center w-16 h-16 rounded-full mb-5 border ${step.color} ${step.borderColor}`}
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-heading text-center mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted text-center leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternshipsHowItWorks
