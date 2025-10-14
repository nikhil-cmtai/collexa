"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    type: string
    tags: string[]
    stipend: string | null
    postedAt: string
  }
  index: number
}

export default function JobCard({ job, index }: JobCardProps) {
  // Create a slug from the job title
  const jobSlug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
  return (
    <motion.div 
      key={job.id} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: index * 0.05 }} 
      className="group rounded-xl border border-border bg-white hover:border-primary/30 transition-all duration-300 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {job.title}
            </h3>
            <p className="text-sm text-muted mt-1">
              {job.company} • {job.location}
            </p>
          </div>
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-white whitespace-nowrap">
            {job.type}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {job.tags.slice(0, 3).map((t: string) => (
            <span key={t} className="rounded-md bg-primary/5 text-primary border border-primary/10 px-2 py-1 text-xs font-medium">
              {t}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="rounded-md bg-muted/50 text-text px-2 py-1 text-xs font-medium">
              +{job.tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-primary">{job.stipend || "Not specified"}</span>
          <span className="text-xs text-muted">{job.postedAt}</span>
        </div>
      </div>
      
      <div className="bg-primary/5 border-t border-border p-4 flex items-center justify-between">
            <Link href={`/jobs/${jobSlug}`} className="text-sm font-medium !text-white bg-primary hover:bg-primary/90 rounded-md px-5 py-2 transition-colors duration-300">
              View details →
            </Link>
      </div>
    </motion.div>
  )
}
