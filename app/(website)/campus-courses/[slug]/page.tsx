"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  ArrowLeft, 
  GraduationCap, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Award, 
  Building2,
  Calendar,
} from "lucide-react"
import { useAppSelector } from "@/lib/redux/hooks"
import { Course } from "@/lib/redux/features/coursesSlice"
import ApplicationForm from "@/components/campus-courses/ApplicationForm"

interface DetailedCourse extends Course {
  description: string
  overview: string
  curriculum: string[]
  requirements: string[]
  benefits: string[]
  faculty: string
  accreditation: string
  fees: string
  applicationDeadline: string
  startDate: string
  universityInfo: {
    name: string
    location: string
    established: string
    ranking: string
    website: string
  }
}

// Mock function to get detailed course data
const getDetailedCourseData = (course: Course): DetailedCourse => {
  const baseData = {
    ...course,
    description: `This comprehensive ${course.title} program at ${course.university} is designed to provide students with in-depth knowledge and practical skills in their chosen field. The program combines theoretical foundations with hands-on experience to prepare graduates for successful careers.`,
    overview: `The ${course.title} program offers a rigorous curriculum that covers all essential aspects of the field. Students will gain both theoretical knowledge and practical experience through various learning methods including lectures, workshops, projects, and internships.`,
    curriculum: [
      "Foundation courses in core subjects",
      "Specialized modules in advanced topics",
      "Practical workshops and lab sessions",
      "Industry projects and case studies",
      "Research methodology and thesis work",
      "Professional development workshops"
    ],
    requirements: [
      "Minimum 50% aggregate in qualifying examination",
      "Valid entrance exam score (if applicable)",
      "English proficiency certificate",
      "Academic transcripts and certificates",
      "Statement of purpose",
      "Letters of recommendation"
    ],
    benefits: [
      "Industry-recognized certification",
      "Placement assistance and career guidance",
      "Access to modern facilities and resources",
      "Expert faculty with industry experience",
      "Networking opportunities with professionals",
      "Flexible learning options"
    ],
    faculty: "Our faculty consists of experienced professors and industry experts who bring real-world knowledge to the classroom.",
    accreditation: "Accredited by relevant educational bodies and recognized by industry associations.",
    fees: "₹50,000 - ₹2,00,000 per year (varies by program and university)",
    applicationDeadline: "March 31, 2024",
    startDate: "July 2024",
    universityInfo: {
      name: course.university,
      location: "Multiple locations across India",
      established: "Established in 1990",
      ranking: "Ranked among top 100 universities in India",
      website: "www.university.edu"
    }
  }

  return baseData
}

export default function CourseDetailsPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const { items: courses } = useAppSelector((state) => state.courses)
  const [detailedCourse, setDetailedCourse] = useState<DetailedCourse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find course by slug
    const baseCourse = courses.find(course => {
      const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      return courseSlug === slug
    })

    if (baseCourse) {
      const detailed = getDetailedCourseData(baseCourse)
      setDetailedCourse(detailed)
    }
    setLoading(false)
  }, [slug, courses])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (!detailedCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-heading mb-4">Course Not Found</h1>
          <p className="text-muted mb-6">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/campus-courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/campus-courses"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          
          <div className="bg-white rounded-2xl p-8 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-heading mb-3">
                  {detailedCourse.title}
                </h1>
                <div className="flex items-center gap-2 text-lg text-muted mb-4">
                  <GraduationCap className="w-5 h-5" />
                  {detailedCourse.university}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    {detailedCourse.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="w-4 h-4" />
                    {detailedCourse.mode}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Award className="w-4 h-4" />
                    {detailedCourse.level}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {detailedCourse.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <ApplicationForm 
                  courseTitle={detailedCourse.title}
                  university={detailedCourse.university}
                >
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </ApplicationForm>
                <button className="w-full border border-border text-text px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors">
                  Save Course
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-heading mb-6">Course Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-3">Description</h3>
                  <p className="text-muted leading-relaxed">{detailedCourse.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-3">Program Overview</h3>
                  <p className="text-muted leading-relaxed">{detailedCourse.overview}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-3">Curriculum</h3>
                    <ul className="space-y-2">
                      {detailedCourse.curriculum.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {detailedCourse.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-heading mb-3">Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {detailedCourse.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-heading mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-heading">Start Date</p>
                    <p className="text-sm text-muted">{detailedCourse.startDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-heading">Application Deadline</p>
                    <p className="text-sm text-muted">{detailedCourse.applicationDeadline}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-heading">Fees</p>
                    <p className="text-sm text-muted">{detailedCourse.fees}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-heading mb-4">About University</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted" />
                  <span className="text-sm text-muted">{detailedCourse.universityInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted" />
                  <span className="text-sm text-muted">{detailedCourse.universityInfo.established}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-muted" />
                  <span className="text-sm text-muted">{detailedCourse.universityInfo.ranking}</span>
                </div>
              </div>
            </motion.div>

            {/* Similar Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-semibold text-heading mb-4">Similar Courses</h3>
              <div className="space-y-4">
                {courses
                  .filter(course => course.level === detailedCourse.level && course.id !== detailedCourse.id)
                  .slice(0, 3)
                  .map((course, index) => {
                    const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    return (
                      <Link
                        key={course.id}
                        href={`/campus-courses/${courseSlug}`}
                        className={`block p-4 rounded-lg border border-border hover:border-primary/30 transition-colors ${index > 0 ? 'mt-6' : ''}`}
                      >
                        <h4 className="font-medium text-heading mb-1 line-clamp-2">{course.title}</h4>
                        <p className="text-sm text-muted mb-2">{course.university}</p>
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.mode}</span>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-heading mb-6">Apply for this Course</h2>
            <ApplicationForm 
              courseTitle={detailedCourse.title}
              university={detailedCourse.university}
            >
              <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Application
              </button>
            </ApplicationForm>
          </div>
        </motion.div>
      </div>
    </div>
  )
}