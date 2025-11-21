"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, GraduationCap, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { fetchCourses, setCourseLevel, setCourseMode, setCourseQuery } from "@/lib/redux/features/coursesSlice"
import CampusCourseCard from "./CampusCourseCard"
import CampusHero from "./Hero"
import Highlights from "./Highlights"
import FAQs from "./FAQs"
import CTA from "./CTA"

export default function CoursesView({ presetQuery, presetLevel, presetMode }: { presetQuery?: string; presetLevel?: string; presetMode?: string }) {
  const dispatch = useAppDispatch()
  const { items: courses, status, query, level, mode } = useAppSelector((state) => state.courses)

  // Local state for additional filters
  const [showFilters, setShowFilters] = useState(false)
  const [duration, setDuration] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Fetch courses on component mount
  useEffect(() => {
    dispatch(fetchCourses({ q: presetQuery, level: presetLevel, mode: presetMode }))
  }, [dispatch, presetQuery, presetLevel, presetMode])

  // Set preset values
  useEffect(() => {
    if (presetQuery) dispatch(setCourseQuery(presetQuery))
    if (presetLevel) dispatch(setCourseLevel(presetLevel))
    if (presetMode) dispatch(setCourseMode(presetMode))
  }, [dispatch, presetQuery, presetLevel, presetMode])

  // Filter courses based on search criteria
  const filtered = (courses || []).filter((course) => {
    const matchesQuery = 
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.university.toLowerCase().includes(query.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesLevel = 
      !level || course.level.toLowerCase().includes(level.toLowerCase());
    
    const matchesMode = 
      !mode || course.mode.toLowerCase().includes(mode.toLowerCase());
    
    const matchesDuration = 
      !duration || course.duration.toLowerCase().includes(duration.toLowerCase());

    return matchesQuery && matchesLevel && matchesMode && matchesDuration;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = filtered.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Prevent scroll to top
    window.scrollTo({ top: window.scrollY, behavior: 'smooth' });
  };

  // Clear all filters
  const clearFilters = () => {
    dispatch(setCourseQuery(""));
    dispatch(setCourseLevel(""));
    dispatch(setCourseMode(""));
    setDuration("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-[70vh]">
      <CampusHero />
      <Highlights />

      {/* Campus Courses Listings */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 md:p-8 bg-white"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-heading mb-3">
              Discover <span className="text-primary">Campus Courses</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find the perfect courses and programs from top universities and institutions
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              <input 
                value={query} 
                onChange={(e) => dispatch(setCourseQuery(e.target.value))} 
                placeholder="Search by course, university, or specialization..." 
                className="w-full rounded-xl pl-12 pr-4 py-3 text-base bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                Advanced Filters
              </button>
              <span className="text-sm text-muted">
                {filtered.length} courses found
              </span>
            </div>
            <button
              onClick={clearFilters}
              className="text-sm text-muted hover:text-primary transition-colors duration-300"
            >
              Clear all filters
            </button>
          </div>

          {/* Advanced Filters */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={level} 
                  onChange={(e) => dispatch(setCourseLevel(e.target.value))} 
                  placeholder="Level (UG/PG/Executive)" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={mode} 
                  onChange={(e) => dispatch(setCourseMode(e.target.value))} 
                  placeholder="Mode (Online/Distance/Hybrid)" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)} 
                  placeholder="Duration" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  placeholder="Specialization" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => dispatch(fetchCourses({ q: query, level, mode }))} 
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Search Courses
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="mt-12">
          {status === "loading" && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted">Loading courses…</p>
            </div>
          )}
          {status === "failed" && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">Failed to load courses</p>
              <button 
                onClick={() => dispatch(fetchCourses({ q: query, level, mode }))}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {status === "succeeded" && currentCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No courses found matching your criteria</p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentCourses.map((course, index) => (
              <CampusCourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 border border-border shadow-sm">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] h-[40px] flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-300 ${
                        currentPage === page
                          ? "bg-primary text-white shadow-md"
                          : "text-muted hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Results Summary */}
          {filtered.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-muted">
                Showing {startIndex + 1}-{Math.min(endIndex, filtered.length)} of {filtered.length} courses
              </p>
            </div>
          )}
        </div>
      </section>
      <FAQs />
      <CTA />
    </div>
  )
}


