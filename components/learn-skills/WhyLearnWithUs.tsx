"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Award, Users, TrendingUp, Clock, BookOpen } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Industry-Recognized Certificates",
    description: "Get certificates that employers value and recognize across industries"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience"
  },
  {
    icon: Clock,
    title: "Learn at Your Own Pace",
    description: "Flexible schedule that fits your lifestyle and commitments"
  },
  {
    icon: TrendingUp,
    title: "Career Growth Support",
    description: "Access career counseling and placement assistance after completion"
  },
  {
    icon: BookOpen,
    title: "Hands-On Projects",
    description: "Build a portfolio with real-world projects and practical assignments"
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Access",
    description: "Get unlimited access to course materials and future updates"
  },
]

export default function WhyLearnWithUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
              Why Learn <span className="text-primary">With Collexa?</span>
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              We provide comprehensive skill-based training programs designed to help you succeed in today&apos;s competitive job market. Our courses combine theory with practical application to ensure you are job-ready.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">100% Practical Learning</h4>
                  <p className="text-sm text-muted">Work on live projects and build real-world skills</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">Personalized Mentorship</h4>
                  <p className="text-sm text-muted">Get one-on-one guidance from industry experts</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">Job-Ready Skills</h4>
                  <p className="text-sm text-muted">Master skills that employers are actively seeking</p>
                </div>
              </div>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-3 bg-primary !text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Journey
            </motion.a>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-heading mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

