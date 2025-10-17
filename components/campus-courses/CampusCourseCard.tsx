"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Clock, MapPin } from "lucide-react"

interface CampusCourseCardProps {
  course: {
    id: string
    title: string
    university: string
    level: string
    mode: string
    duration: string
    tags: string[]
  }
  index: number
}

export default function CampusCourseCard({ course, index }: CampusCourseCardProps) {
  // Create a slug from the course title
  const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
  return (
    <motion.div 
      key={course.id} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: index * 0.05 }} 
      className="group rounded-xl border border-border bg-white hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-muted mt-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3" />
              {course.university}
            </p>
          </div>
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-white whitespace-nowrap">
            {course.level}
          </span>
        </div>
        
        <div className="flex items-center gap-4 mb-3 text-xs text-muted">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {course.mode}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {course.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="rounded-md bg-primary/5 text-primary border border-primary/10 px-2 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="rounded-md bg-muted/50 text-text px-2 py-1 text-xs font-medium">
              +{course.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="bg-primary/5 border-t border-border p-4">
        <Link 
          href={`/campus-courses/${courseSlug}`}
          className="block text-right text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
        >
          View details →
        </Link>
      </div>
    </motion.div>
  )
}
