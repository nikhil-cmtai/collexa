"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, TrendingUp, Award, Users } from "lucide-react"

export default function SkillsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Skill-Based Learning
              </span>
              
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-heading mb-6">
                Master In-Demand Skills for{" "}
                <span className="text-primary">Your Career</span>
              </h1>
              
              <p className="text-[15px] md:text-base text-muted leading-relaxed max-w-md mb-8">
                Learn practical, industry-relevant skills from expert instructors. Get certified and boost your career with our hands-on training programs designed for real-world success.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#courses"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary !text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Skills
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-border bg-white text-heading rounded-lg font-semibold hover:bg-muted/50 transition-all duration-300"
                >
                  Get Guidance
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted">Skill Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted">Success Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Industry-Relevant</h3>
              <p className="text-sm text-muted">Skills aligned with market demands</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300 mt-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Certified Programs</h3>
              <p className="text-sm text-muted">Get recognized certifications</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Hands-On Learning</h3>
              <p className="text-sm text-muted">Practical projects and exercises</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300 mt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Expert Mentors</h3>
              <p className="text-sm text-muted">Learn from industry professionals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

