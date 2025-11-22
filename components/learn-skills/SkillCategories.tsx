"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Palette, BarChart3, Megaphone, Camera, Wrench, Brain, Globe } from "lucide-react"

const categories = [
  {
    icon: Code,
    title: "Programming & Development",
    description: "Web, Mobile, Software Development",
    count: "15+ courses",
    color: "primary",
    slug: "programming-development"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "UI/UX, Graphic Design, Video Editing",
    count: "10+ courses",
    color: "secondary",
    slug: "design-creative"
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Data Science, Analytics, Visualization",
    count: "8+ courses",
    color: "accent",
    slug: "data-analytics"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, Social Media, Content Marketing",
    count: "12+ courses",
    color: "primary",
    slug: "digital-marketing"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "ML, Deep Learning, NLP",
    count: "6+ courses",
    color: "secondary",
    slug: "ai-machine-learning"
  },
  {
    icon: Camera,
    title: "Photography & Media",
    description: "Photo, Video, Content Creation",
    count: "7+ courses",
    color: "accent",
    slug: "photography-media"
  },
  {
    icon: Wrench,
    title: "Business & Management",
    description: "Leadership, Project Management",
    count: "9+ courses",
    color: "primary",
    slug: "business-management"
  },
  {
    icon: Globe,
    title: "Languages & Communication",
    description: "English, Public Speaking",
    count: "5+ courses",
    color: "secondary",
    slug: "languages-communication"
  },
]

export default function SkillCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Explore by <span className="text-primary">Category</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose from a wide range of skill categories tailored to your career goals
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={`/learn-skills/category/${category.slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {category.count}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

