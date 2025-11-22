"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Filter, Clock, Users, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { fetchSkillBasedCourses } from "@/lib/redux/features/skill-based-courseSlice"

// Category mapping from slug to display name
const categoryMap: Record<string, { title: string; description: string }> = {
  "programming-development": {
    title: "Programming & Development",
    description: "Web, Mobile, Software Development",
  },
  "design-creative": {
    title: "Design & Creative",
    description: "UI/UX, Graphic Design, Video Editing",
  },
  "data-analytics": {
    title: "Data & Analytics",
    description: "Data Science, Analytics, Visualization",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "SEO, Social Media, Content Marketing",
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    description: "ML, Deep Learning, NLP",
  },
  "photography-media": {
    title: "Photography & Media",
    description: "Photo, Video, Content Creation",
  },
  "business-management": {
    title: "Business & Management",
    description: "Leadership, Project Management",
  },
  "languages-communication": {
    title: "Languages & Communication",
    description: "English, Public Speaking",
  },
}

// Map category titles to slugs (for filtering)
const categoryTitleToSlug: Record<string, string> = {
  "Programming & Development": "programming-development",
  "Design & Creative": "design-creative",
  "Data & Analytics": "data-analytics",
  "Digital Marketing": "digital-marketing",
  "AI & Machine Learning": "ai-machine-learning",
  "Photography & Media": "photography-media",
  "Business & Management": "business-management",
  "Languages & Communication": "languages-communication",
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.id as string
  const dispatch = useAppDispatch()
  const { items: skillBasedCourses, status } = useAppSelector(
    (state) => state.skillBasedCourses
  )

  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Get category info from slug
  const categoryInfo = categoryMap[categorySlug] || {
    title: "Category",
    description: "Explore courses in this category",
  }

  // Fetch courses on mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSkillBasedCourses({ status: "active" }))
    }
  }, [dispatch, status])

  // Filter courses by category and other filters
  const filteredCourses = useMemo(() => {
    // Find the category title that matches this slug
    const categoryTitle = Object.entries(categoryTitleToSlug).find(
      ([, slug]) => slug === categorySlug
    )?.[0]

    return skillBasedCourses
      .filter((course) => {
        // Filter by category (case-insensitive partial match)
        const matchesCategory =
          !categoryTitle ||
          course.category
            .toLowerCase()
            .includes(categoryTitle.toLowerCase()) ||
          categoryTitle.toLowerCase().includes(course.category.toLowerCase())

        // Filter by search query
        const matchesQuery =
          !searchQuery ||
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )

        // Filter by level
        const matchesLevel =
          !levelFilter || course.level.toLowerCase() === levelFilter.toLowerCase()

        // Only show active courses
        return (
          course.status === "active" &&
          matchesCategory &&
          matchesQuery &&
          matchesLevel
        )
      })
      .sort((a, b) => b.rating - a.rating) // Sort by rating
  }, [skillBasedCourses, categorySlug, searchQuery, levelFilter])

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/learn-skills"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Learn Skills</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-heading mb-4">
              {categoryInfo.title}
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
            <p className="text-sm text-muted mt-2">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <select
                  value={levelFilter}
                  onChange={(e) => {
                    setLevelFilter(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none bg-white"
                >
                  <option value="">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
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

          {/* Courses Grid */}
          {status === "succeeded" && (
            <>
              {paginatedCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedCourses.map((course, index) => (
                    <motion.div
                      key={course._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <span className="absolute top-3 right-3 z-20 px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full">
                          {course.level}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold text-heading">
                              {course.rating.toFixed(1)}
                            </span>
                          </div>
                          <span className="text-sm text-muted">•</span>
                          <div className="flex items-center gap-1 text-sm text-muted">
                            <Users className="w-4 h-4" />
                            {course.enrolled.toLocaleString()}+
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-heading mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {course.name}
                        </h3>

                        <p className="text-sm text-muted mb-3 line-clamp-2">
                          {course.description}
                        </p>

                        {course.skills && course.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {course.skills.slice(0, 3).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded-md text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-1 text-sm text-muted">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="text-lg font-bold text-primary">
                            ₹{course.fees.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 pb-6">
                        <Link
                          href={`/learn-skills/${course._id}`}
                          className="block w-full text-center px-4 py-2 bg-primary !text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted text-lg mb-4">
                    No courses found in this category.
                  </p>
                  <Link
                    href="/learn-skills"
                    className="text-primary hover:underline"
                  >
                    Browse all courses
                  </Link>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/5 transition-colors"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 border rounded-lg transition-colors ${
                            currentPage === page
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:bg-primary/5"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return <span key={page}>...</span>
                    }
                    return null
                  })}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/5 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
