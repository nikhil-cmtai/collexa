"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative py-16 px-6 lg:px-12 bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Explore courses from top universities and take the next step in your career
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/campus-courses"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary !text-white rounded-lg font-semibold shadow-lg hover:shadow-md transition-all duration-300"
            >
              Browse Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary !text-primary rounded-lg font-semibold hover:bg-primary hover:!text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Talk to Counselor
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@collexa.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 12345 67890</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


