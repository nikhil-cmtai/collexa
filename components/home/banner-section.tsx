"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Rocket, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const BannerSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/3 via-background to-secondary/3 py-16 sm:py-20">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" /> 
              New in 2025 🔥
            </motion.span>
            
            {/* Heading */}
            <motion.h1 
              className="text-4xl sm:text-4xl lg:text-5xl font-bold text-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Upskill{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smarter
              </span>
              <br />
              Land Hot Jobs
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hottest tech & business courses with{" "}
              <span className="font-semibold text-primary">100% placement support</span>.
              Build an irresistible career portfolio.
            </motion.p>

            {/* Feature Points */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-text">AI, Web3, Data Science & 50+ Top Skills</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-base text-text">Learn from IITians, FAANG & Unicorn Experts</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-base text-text">Real projects + Guaranteed internships</span>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                href="/courses"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary !text-white font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Courses 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/internship"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Win Internships
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-xs text-muted">Placement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">10K+</div>
                <div className="text-xs text-muted">Students</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="relative lg:block hidden">
            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 */}
              <motion.div 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/3 rounded-xl">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-base mb-1">Top Skills 2025</h3>
                    <p className="text-sm text-muted">AI, Web3, Data Science, Product, Finance & more</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300 ml-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/5 to-secondary/3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-base mb-1">Elite Mentors</h3>
                    <p className="text-sm text-muted">IITians, ISB Grads, FAANG, Ex-Goldman Experts</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/5 to-accent/3 rounded-xl">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-base mb-1">Guaranteed Outcomes</h3>
                    <p className="text-sm text-muted">Real projects, internships & 95% placement rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;