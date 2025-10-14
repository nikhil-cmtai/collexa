"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import careerHero from "@/public/img/image6.png"

export default function JobsHero() {

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-2 md:p-6"
      >
        {/* Grid Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--heading-color)]"
            >
              Discover top{" "}
              <span className="text-secondary">career opportunities</span> that
              match your skills
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-[15px] md:text-base text-[var(--muted-text)] leading-relaxed max-w-md"
            >
              Explore thousands of verified jobs and internships from leading
              companies. Whether you&apos;re a student, fresher, or experienced
              professional — find your next big role effortlessly.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-sm"
            >
              {[
                { color: "bg-secondary", text: "Verified employers" },
                { color: "bg-primary", text: "Smart job matches" },
                { color: "bg-secondary", text: "Real-time alerts" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-white/90 backdrop-blur px-3 py-2 shadow-sm hover:shadow-md transition-all"
                >
                  <span className={`h-2 w-2 rounded-full ${feature.color}`} />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white"
            >
              <Image
                src={careerHero}
                alt="Professionals collaborating in modern office"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 w-[85%]"
            >
              {[
                { label: "Active listings", value: "2,800+ jobs" },
                { label: "Companies hiring", value: "500+ verified" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-xl bg-white/90 backdrop-blur-md border border-[var(--border-color)] p-4 text-center shadow-md hover:shadow-lg transition-all"
                >
                  <p className="text-[11px] text-[var(--muted-text)]">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--heading-color)] mt-0.5">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
