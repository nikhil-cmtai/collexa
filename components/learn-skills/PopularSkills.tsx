"use client"

import React, { useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Users, Star, Award } from "lucide-react"
import { fetchSkillBasedCourses } from "@/lib/redux/features/skill-based-courseSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

export default function PopularSkills() {
  const dispatch = useAppDispatch()
  const { items: skillBasedCourses, status } = useAppSelector((state) => state.skillBasedCourses)

  // Fetch courses on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSkillBasedCourses({ status: "active" }))
    }
  }, [dispatch, status])

  // Filter and sort popular skills (top rated active courses, limit to 6)
  const popularSkills = useMemo(() => {
    return skillBasedCourses
      .filter((course) => course.status === "active")
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6)
      .map((course) => ({
        id: course._id || "",
        title: course.name,
        instructor: course.instructor || "Expert Instructor",
        duration: course.duration,
        students: `${course.enrolled.toLocaleString()}+`,
        rating: course.rating || 0,
        level: course.level,
        price: `₹${course.fees.toLocaleString()}`,
        tags: course.skills || [],
      }))
  }, [skillBasedCourses])

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

        {/* Loading State */}
        {status === "loading" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-border animate-pulse"
              >
                <div className="h-48 bg-muted"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Grid */}
        {status === "succeeded" && popularSkills.length > 0 && (
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
                      <span className="text-sm font-semibold text-heading">
                        {skill.rating.toFixed(1)}
                      </span>
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

                  {skill.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

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
                    href={`/learn-skills/${skill.id}`}
                    className="block w-full text-center px-4 py-2 bg-primary !text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {status === "succeeded" && popularSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No popular courses available at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        {status === "succeeded" && popularSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/learn-skills"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:!text-white transition-all duration-300"
            >
              View All Courses
              <Award className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
