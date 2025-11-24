"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, GraduationCap, Briefcase, Target, Rocket, HeartHandshake, Award, Flag, Sparkles } from "lucide-react"
import CompanySection from "@/components/home/company-section"
import Link from "next/link"

const stats = [
  { icon: Users, label: "Learners empowered", value: "50,000+" },
  { icon: GraduationCap, label: "Campus partners", value: "120+" },
  { icon: Briefcase, label: "Hiring partners", value: "350+" },
  { icon: Target, label: "Career matches", value: "25,000+" },
]

const values = [
  {
    icon: Rocket,
    title: "Ambitious Vision",
    description: "We design every experience to help students unlock world-class opportunities without boundaries.",
  },
  {
    icon: HeartHandshake,
    title: "Learner-First",
    description: "Product decisions always begin with empathy for students, mentors, and hiring teams.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "We obsess over curriculum, tooling, and guidance so every interaction feels premium.",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Collexa is born",
    text: "Our founders left their corporate roles to fix the broken campus-to-career journey.",
  },
  {
    year: "2022",
    title: "First 10 universities",
    text: "We partnered with pioneering colleges and launched mentorship pods for their students.",
  },
  {
    year: "2023",
    title: "Marketplace expansion",
    text: "Jobs, internships, and upskilling programs came under one roof for the first time.",
  },
  {
    year: "Today",
    title: "National community",
    text: "Collexa now supports learners across India with programs that scale with their ambition.",
  },
]

const team = [
  {
    name: "Rhea Kapoor",
    role: "Co-founder & CEO",
    bio: "Product strategist with a decade scaling edtech companies across APAC.",
  },
  {
    name: "Arjun Mehta",
    role: "Co-founder & CTO",
    bio: "Built talent platforms for Fortune 500 firms; now focused on equitable hiring tech.",
  },
  {
    name: "Neha Sharma",
    role: "Head of University Success",
    bio: "Former dean of student success, championing career readiness at scale.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden py-20">
        <div className="absolute inset-y-0 right-10 w-72 bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute inset-y-0 left-0 w-64 bg-secondary/10 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading mb-4 leading-tight">
              Reimagining the journey from campus curiosity to career confidence
            </h1>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Collexa is a career acceleration platform built for the next generation of talent.
              We combine curated learning paths, verified opportunities, and human mentorship so students can thrive with clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl bg-white border border-border p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold text-heading">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Mission & values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold text-heading">Our mission</h2>
            <p className="text-muted text-base leading-relaxed">
              Every student deserves a clear career plan, a support system, and pathways to meaningful work.
              We collaborate with universities and employers to build that ecosystem—personalized, measurable, and deeply human.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Flag className="w-10 h-10 text-primary mb-4" />
              <p className="text-heading font-semibold mb-2">Where we focus</p>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Skill programs co-created with industry mentors</li>
                <li>• Career studios for resumes, mock interviews, and branding</li>
                <li>• Curated hiring pipelines aligned with students’ strengths</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border p-5 flex gap-4 bg-white shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading">{value.title}</p>
                    <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-3xl font-bold text-heading mb-3">How we got here</h2>
          <p className="text-muted text-base">
            From a small cohort of students to a nationwide ecosystem—here are the moments that shaped Collexa.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />
          <div className="space-y-8">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative sm:pl-12"
              >
                <div className="hidden sm:block absolute left-0 top-2 w-8 h-8 rounded-full bg-white border-4 border-primary/20" />
                <div className="rounded-2xl bg-white border border-border p-5 shadow-sm">
                  <p className="text-sm text-primary font-semibold mb-1">{entry.year}</p>
                  <h3 className="text-lg font-semibold text-heading mb-1">{entry.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{entry.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-3">People behind Collexa</h2>
          <p className="text-muted text-base">
            We’re a crew of educators, technologists, and talent leaders obsessed with student success.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 text-left shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-semibold mb-4">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="text-lg font-semibold text-heading">{member.name}</p>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s design your campus-to-career journey</h2>
          <p className="text-base text-primary-foreground/80 mb-8">
            Whether you’re a university, a hiring partner, or a learner, Collexa offers programs tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-primary/10 transition-colors duration-300"
            >
              Talk to our team
            </Link>
            <Link
              href="/campus-courses"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>

      {/* Logos */}
      <CompanySection />
    </main>
  )
}


