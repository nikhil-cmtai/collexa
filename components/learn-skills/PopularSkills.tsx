"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Users, Star, Award } from "lucide-react"

const popularSkills = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "John Doe",
    duration: "12 weeks",
    students: "2,500+",
    rating: 4.8,
    level: "Intermediate",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    instructor: "Sarah Smith",
    duration: "8 weeks",
    students: "3,200+",
    rating: 4.9,
    level: "Beginner",
    price: "₹7,999",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    tags: ["SEO", "Social Media", "Analytics"]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Johnson",
    duration: "10 weeks",
    students: "1,800+",
    rating: 4.7,
    level: "Beginner",
    price: "₹8,499",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
    tags: ["Figma", "Prototyping", "Research"]
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Emily Chen",
    duration: "14 weeks",
    students: "2,100+",
    rating: 4.8,
    level: "Advanced",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    tags: ["Python", "ML", "Pandas"]
  },
  {
    id: 5,
    title: "Graphic Design Masterclass",
    instructor: "Alex Turner",
    duration: "6 weeks",
    students: "1,500+",
    rating: 4.6,
    level: "Beginner",
    price: "₹6,999",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    tags: ["Photoshop", "Illustrator", "Branding"]
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    instructor: "David Lee",
    duration: "10 weeks",
    students: "1,900+",
    rating: 4.9,
    level: "Intermediate",
    price: "₹11,999",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    tags: ["AWS", "DevOps", "Docker"]
  },
]

export default function PopularSkills() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted/20">
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
            Most Popular <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Join thousands of learners mastering these in-demand skills
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <span className="absolute top-3 right-3 z-20 px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full">
                  {skill.level}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-heading">{skill.rating}</span>
                  </div>
                  <span className="text-sm text-muted">•</span>
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Users className="w-4 h-4" />
                    {skill.students}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-heading mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>

                <p className="text-sm text-muted mb-3">by {skill.instructor}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    {skill.duration}
                  </div>
                  <div className="text-lg font-bold text-primary">{skill.price}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <Link 
                  href={`/skill-based-course/${skill.id}`}
                  className="block w-full text-center px-4 py-2 bg-primary !text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/skill-based-course"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:!text-white transition-all duration-300"
          >
            View All Courses
            <Award className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

