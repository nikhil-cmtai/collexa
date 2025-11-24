"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fetchJobs, setLocation, setQuery, setType } from "@/lib/redux/features/jobsSlice"
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux/store"
import JobsHero from "./JobsHero"
import JobsHighlights from "./JobsHighlights"
import JobsHowItWorks from "./JobsHowItWorks"
import JobCard from "./JobCard"
import { ChevronLeft, ChevronRight, Search, MapPin, Briefcase, DollarSign, Clock, Filter, ArrowRight } from "lucide-react"
import CompanySection from "../home/company-section"

export default function JobsView({ presetLocation, presetType, presetQuery }: { presetLocation?: string; presetType?: string; presetQuery?: string }) {
  const dispatch = useAppDispatch()
  const { items, status, query, location, type } = useAppSelector((s: RootState) => s.jobs)
  const [currentPage, setCurrentPage] = useState(1)
  const [salaryRange, setSalaryRange] = useState("")
  const [experience, setExperience] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const jobsPerPage = 9

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJobs({ q: presetQuery, location: presetLocation, type: presetType }))
    }
  }, [dispatch, status, presetQuery, presetLocation, presetType])

  useEffect(() => {
    dispatch(setQuery(presetQuery || ""))
    dispatch(setLocation(presetLocation || ""))
    dispatch(setType(presetType || ""))
  }, [presetLocation, presetType, presetQuery, dispatch])

  const filtered = items.filter((job) => {
    const title = job.title ?? ""
    const company = job.company ?? ""
    const tagsArray = Array.isArray(job.tags) ? job.tags : []
    const tagsText = tagsArray.join(" ")
    const haystack = `${title} ${company} ${tagsText}`.toLowerCase()

    const byQuery = query ? haystack.includes(query.toLowerCase()) : true

    const jobLocation = job.location ?? ""
    const byLocation = location ? jobLocation.toLowerCase().includes(location.toLowerCase()) : true

    const jobType = job.type ?? ""
    const byType = type ? jobType.toLowerCase().includes(type.toLowerCase()) : true

    const stipendText = (job.stipend ?? "").toLowerCase()
    const bySalary = salaryRange ? stipendText.includes(salaryRange.toLowerCase()) : true

    const byExperience = experience
      ? tagsArray.some((tag) => tag?.toLowerCase().includes(experience.toLowerCase()))
      : true

    return byQuery && byLocation && byType && bySalary && byExperience
  })

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / jobsPerPage)
  const startIndex = (currentPage - 1) * jobsPerPage
  const endIndex = startIndex + jobsPerPage
  const currentJobs = filtered.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Don't scroll to top on pagination change
  }

  const clearFilters = () => {
    dispatch(setQuery(""))
    dispatch(setLocation(""))
    dispatch(setType(""))
    setSalaryRange("")
    setExperience("")
    setCurrentPage(1)
  }

  return (
    <div className="min-h-[70vh] ">
      <JobsHero />
      <JobsHowItWorks />
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
              Discover <span className="text-primary">Campus Jobs</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find the perfect fresher roles and internships curated specifically for students like you
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              <input 
                value={query} 
                onChange={(e) => dispatch(setQuery(e.target.value))} 
                placeholder="Search by role, company, or skills..." 
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
                {filtered.length} jobs found
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
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={location} 
                  onChange={(e) => dispatch(setLocation(e.target.value))} 
                  placeholder="Location" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={type} 
                  onChange={(e) => dispatch(setType(e.target.value))} 
                  placeholder="Job Type" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={salaryRange} 
                  onChange={(e) => setSalaryRange(e.target.value)} 
                  placeholder="Salary Range" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={experience} 
                  onChange={(e) => setExperience(e.target.value)} 
                  placeholder="Experience Level" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => dispatch(fetchJobs({ q: query, location, type }))} 
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Search Jobs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <div className="mt-12">
          {status === "loading" && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted">Loading jobs…</p>
            </div>
          )}
          {status === "failed" && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">Failed to load jobs</p>
              <button 
                onClick={() => dispatch(fetchJobs({ q: query, location, type }))}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {status === "succeeded" && currentJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No jobs found matching your criteria</p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-1 bg-white rounded-lg p-1 border border-border">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 rounded-md hover:bg-primary/5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                        currentPage === page
                          ? "bg-primary text-white"
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
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 rounded-md hover:bg-primary/5"
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
                Showing {startIndex + 1}-{Math.min(endIndex, filtered.length)} of {filtered.length} jobs
              </p>
            </div>
          )}
        </div>
      </section>
      <JobsHighlights />
      <CompanySection />
    </div>
  )
}



