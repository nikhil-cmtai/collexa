"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Briefcase, DollarSign, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchInternships, setInternshipQuery, setInternshipLocation, setInternshipType } from "@/lib/redux/features/internshipsSlice";
import InternshipCard from "./internshipCard";
import InternshipsHero from "./InternshipsHero";
import InternshipsHighlights from "./InternshipsHighlights";
import InternshipsHowItWorks from "./InternshipsHowItWorks";
import CompanySection from "../home/company-section";

export default function InternshipsView() {
  const dispatch = useAppDispatch();
  const { items: internships, status, query, location, type } = useAppSelector((state) => state.internships);

  // Local state for additional filters
  const [showFilters, setShowFilters] = useState(false);
  const [salaryRange, setSalaryRange] = useState("");
  const [experience, setExperience] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Fetch internships on component mount
  useEffect(() => {
    dispatch(fetchInternships({ q: query, location, type }));
  }, [dispatch, query, location, type]);

  // Filter internships based on search criteria
  const filtered = (internships || []).filter((internship) => {
    const matchesQuery = 
      internship.title.toLowerCase().includes(query.toLowerCase()) ||
      internship.company.toLowerCase().includes(query.toLowerCase()) ||
      internship.skills.some((skill: string) => skill.toLowerCase().includes(query.toLowerCase()));
    
    const matchesLocation = 
      !location || internship.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesType = 
      !type || internship.type.toLowerCase().includes(type.toLowerCase());
    
    const matchesSalary = 
      !salaryRange || internship.stipend.toString().includes(salaryRange);
    
    const matchesExperience = 
      !experience || internship.skills.some((skill: string) => skill.toLowerCase().includes(experience.toLowerCase()));

    return matchesQuery && matchesLocation && matchesType && matchesSalary && matchesExperience;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInternships = filtered.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Prevent scroll to top
    window.scrollTo({ top: window.scrollY, behavior: 'smooth' });
  };

  // Clear all filters
  const clearFilters = () => {
    dispatch(setInternshipQuery(""));
    dispatch(setInternshipLocation(""));
    dispatch(setInternshipType(""));
    setSalaryRange("");
    setExperience("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-[70vh]">
      <InternshipsHero />
      <InternshipsHowItWorks />

      {/* Internship Listings */}
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
              Discover <span className="text-primary">Campus Internships</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find the perfect internships and opportunities curated specifically for students like you
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
              <input 
                value={query} 
                onChange={(e) => dispatch(setInternshipQuery(e.target.value))} 
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
                {filtered.length} internships found
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
                  onChange={(e) => dispatch(setInternshipLocation(e.target.value))} 
                  placeholder="Location" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={type} 
                  onChange={(e) => dispatch(setInternshipType(e.target.value))} 
                  placeholder="Internship Type" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={salaryRange} 
                  onChange={(e) => setSalaryRange(e.target.value)} 
                  placeholder="Stipend Range" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
                <input 
                  value={experience} 
                  onChange={(e) => setExperience(e.target.value)} 
                  placeholder="Skills Required" 
                  className="w-full rounded-lg pl-10 pr-4 py-2.5 bg-white text-text border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300" 
                />
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => dispatch(fetchInternships({ q: query, location, type }))} 
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Search Internships
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Internships Grid */}
        <div className="mt-12">
          {status === "loading" && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted">Loading internships…</p>
            </div>
          )}
          {status === "failed" && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">Failed to load internships</p>
              <button 
                onClick={() => dispatch(fetchInternships({ q: query, location, type }))}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {status === "succeeded" && currentInternships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No internships found matching your criteria</p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentInternships.map((internship, index) => {
              // Map Internship type to InternshipCard expected format
              const mappedInternship = {
                id: parseInt(internship._id || internship.id || String(index), 10) || index,
                title: internship.title,
                company: internship.company,
                location: internship.location,
                type: internship.type,
                tags: internship.skills || [],
                stipend: typeof internship.stipend === 'number' 
                  ? `₹${internship.stipend.toLocaleString()}/month` 
                  : String(internship.stipend || 'Not specified'),
                postedAt: internship.postedDate || new Date().toLocaleDateString(),
              };
              return (
                <InternshipCard key={internship._id || internship.id || index} internship={mappedInternship} index={index} />
              );
            })}
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
                Showing {startIndex + 1}-{Math.min(endIndex, filtered.length)} of {filtered.length} internships
              </p>
            </div>
          )}
        </div>
      </section>
      <InternshipsHighlights />
      <CompanySection />
    </div>
  );
}
