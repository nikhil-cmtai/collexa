"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { fetchJobs, setLocation, setQuery, setType } from "@/lib/slices/jobsSlice"
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store"
import JobsHero from "./JobsHero"
import JobsHighlights from "./JobsHighlights"
import JobsHowItWorks from "./JobsHowItWorks"
import JobsLogos from "./JobsLogos"
import JobApplyDialog from "./JobApplyDialog"

export default function JobsView({ presetLocation, presetType, presetQuery }: { presetLocation?: string; presetType?: string; presetQuery?: string }) {
  const dispatch = useAppDispatch()
  const { items, status, query, location, type } = useAppSelector((s: RootState) => s.jobs)

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
    const haystack = (job.title + " " + job.company + " " + job.tags.join(" ")).toLowerCase()
    const byQuery = query ? haystack.includes(query.toLowerCase()) : true
    const byLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true
    const byType = type ? job.type.toLowerCase().includes(type.toLowerCase()) : true
    return byQuery && byLocation && byType
  })

  return (
    <div className="min-h-[70vh] bg-[var(--surface)]">
      <JobsHero />
      <JobsHighlights />
      <JobsHowItWorks />
      <JobsLogos />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-4 md:p-6 bg-white border border-[var(--border-color)] shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--heading-color)]">Discover Campus Jobs</h2>
          <p className="mt-1 text-sm md:text-base text-[var(--muted-text)]">Search fresher roles and internships curated for students.</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input value={query} onChange={(e) => dispatch(setQuery(e.target.value))} placeholder="Search by role or company" className="rounded-lg px-4 py-3 text-[15px] bg-white text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]" />
            <input value={location} onChange={(e) => dispatch(setLocation(e.target.value))} placeholder="Location (e.g., Bengaluru, Remote)" className="rounded-lg px-4 py-3 text-[15px] bg-white text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]" />
            <input value={type} onChange={(e) => dispatch(setType(e.target.value))} placeholder="Type (Internship / Full-time)" className="rounded-lg px-4 py-3 text-[15px] bg-white text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]" />
            <button onClick={() => dispatch(fetchJobs({ q: query, location, type }))} className="rounded-lg px-6 py-3 text-sm font-semibold bg-[var(--primary)] text-white shadow hover:shadow-md transition">Refresh</button>
          </div>
        </motion.div>

        <div className="mt-8">
          {status === "loading" && <div className="text-center text-[var(--muted-text)]">Loading jobs…</div>}
          {status === "failed" && <div className="text-center text-red-600">Failed to load jobs</div>}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((job, index) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-xl border border-[var(--border-color)] bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--heading-color)]">{job.title}</h3>
                      <p className="text-sm text-[var(--muted-text)] mt-0.5">{job.company} • {job.location}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-white">{job.type}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t: string) => (
                      <span key={t} className="rounded-full bg-[var(--surface)] text-[var(--text-color)] border border-[var(--border-color)] px-2.5 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--heading-color)]">{job.stipend}</span>
                    <span className="text-xs text-[var(--muted-text)]">{job.postedAt}</span>
                  </div>
                </div>
                <div className="bg-[var(--surface)] border-t border-[var(--border-color)] p-4 flex items-center justify-between">
                  <JobApplyDialog
                    jobTitle={job.title}
                    trigger={<button className="text-sm font-semibold text-white bg-[var(--primary)] hover:brightness-110 rounded-md px-4 py-2">Apply</button>}
                  />
                  <button className="text-sm font-medium text-[var(--primary)] hover:underline">View details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}



