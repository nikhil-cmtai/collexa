"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface InternshipCardProps {
  internship: {
    id: number
    title: string
    company: string
    location: string
    type: string
    tags: string[]
    stipend: string
    postedAt: string
  }
  index: number
}

export default function InternshipCard({ internship, index }: InternshipCardProps) {
  // Create a slug from the internship title
  const internshipSlug = internship.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
  return (
    <motion.div 
      key={internship.id} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: index * 0.05 }} 
      className="group rounded-xl border border-border bg-white hover:border-primary/30 transition-all duration-300 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {internship.title}
            </h3>
            <p className="text-sm text-muted mt-1">
              {internship.company} • {internship.location}
            </p>
          </div>
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-white whitespace-nowrap">
            {internship.type}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {internship.tags.slice(0, 3).map((t: string) => (
            <span key={t} className="rounded-md bg-primary/5 text-primary border border-primary/10 px-2 py-1 text-xs font-medium">
              {t}
            </span>
          ))}
          {internship.tags.length > 3 && (
            <span className="rounded-md bg-muted/50 text-text px-2 py-1 text-xs font-medium">
              +{internship.tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-primary">{internship.stipend}</span>
          <span className="text-xs text-muted">{internship.postedAt}</span>
        </div>
      </div>
      
      <div className="bg-primary/5 border-t border-border p-4 flex items-center justify-between">
        <Link 
          href={`/internship/${internshipSlug}`}
          className="text-sm font-medium !text-white bg-primary hover:bg-primary/90 rounded-md px-5 py-2 transition-colors duration-300"
        >
          Apply Now
        </Link>
        <Link 
          href={`/internship/${internshipSlug}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
        >
          View details →
        </Link>
      </div>
    </motion.div>
  )
}
