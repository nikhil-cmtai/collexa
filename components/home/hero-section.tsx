"use client"

import { Search, MapPin, BookOpen, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"courses" | "jobs">("courses")

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* 
        CHANGE MADE HERE: 
        Reduced horizontal padding from "px-4 sm:px-6 lg:px-8" to just "px-4" 
        to decrease the space on the sides, especially on larger screens.
      */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn Skills, <span className="text-gradient">Land Jobs</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Master in-demand skills with expert courses, then apply for internships and jobs at top companies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <div className="mb-4 inline-flex rounded-lg border border-border bg-card p-1">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                    activeTab === "courses"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  Courses
                </button>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className={`flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                    activeTab === "jobs"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  Jobs & Internships
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-lg transition-shadow hover:shadow-xl sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 transition-colors focus-within:border-primary">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={activeTab === "courses" ? "Search courses..." : "Search jobs & internships..."}
                    className="border-0 bg-transparent p-0 focus-visible:ring-0"
                  />
                </div>
                {activeTab === "jobs" && (
                  <div className="flex flex-1 items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 transition-colors focus-within:border-primary">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="border-0 bg-transparent p-0 focus-visible:ring-0"
                    />
                  </div>
                )}
                <Button className="bg-primary transition-all hover:scale-105 hover:bg-secondary">Search</Button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button size="lg" className="bg-primary transition-all hover:scale-105 hover:bg-secondary">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent transition-all hover:scale-105">
                Explore Opportunities
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { value: "500+", label: "Expert Courses" },
                { value: "10K+", label: "Job Openings" },
                { value: "100K+", label: "Success Stories" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/hero.png"
                alt="Students learning and working"
                width={600}
                height={500}
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
                priority
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-4 rounded-lg border border-border bg-card p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <div className="text-sm font-semibold text-foreground">New Course!</div>
                </div>
                <div className="text-xs text-muted-foreground">Full Stack Development</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-4 left-4 rounded-lg border border-border bg-card p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-secondary" />
                  <div className="text-sm font-semibold text-primary">₹25,000/month</div>
                </div>
                <div className="text-xs text-muted-foreground">Software Engineer Intern</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}