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
  Calendar,
  Target,
  BookOpen,
  Send,
  TrendingUp,
  Loader2,
  DollarSign
} from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { Course } from "@/lib/redux/features/coursesSlice"
import { createAdmissionRequest, fetchAdmissionRequests, AdmissionRequest } from "@/lib/redux/features/admission-requestSlice"

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
  const dispatch = useAppDispatch()

  const { items: courses } = useAppSelector((state) => state.courses)
  const [detailedCourse, setDetailedCourse] = useState<DetailedCourse | null>(null)
  const [loading, setLoading] = useState(true)

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    location: "",
    budget: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!detailedCourse) return

    setIsSubmitting(true)
    setSuccessMessage("")

    const now = new Date().toISOString()

    const payload: Omit<AdmissionRequest, "_id" | "createdAt" | "updatedAt"> = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: detailedCourse.id,
      university: detailedCourse.university,
      location: formData.location,
      status: "pending",
      priority: "medium",
      applicationDate: now,
      lastContact: now,
      assignedTo: "",
      notes: `Qualification: ${formData.qualification || "N/A"} | Budget: ${formData.budget || "N/A"}`,
      documents: [],
      expectedStartDate: detailedCourse.startDate || "",
    }

    try {
      await dispatch(createAdmissionRequest(payload)).unwrap()
      // Refresh list for dashboards
      dispatch(fetchAdmissionRequests(undefined))

      setSuccessMessage("Application submitted successfully! We'll get back to you soon.")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        qualification: "",
        location: "",
        budget: "",
      })
    } catch (err) {
      console.error("Failed to submit admission request:", err)
      setSuccessMessage("Unable to submit right now. Please try again in a few minutes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const scrollToForm = () => {
    const formElement = document.getElementById("application-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
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
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            href="/campus-courses" 
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2">
                {detailedCourse.title}
              </h1>
              <div className="flex items-center gap-4 text-muted mb-4">
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{detailedCourse.university}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{detailedCourse.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{detailedCourse.mode}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {detailedCourse.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={scrollToForm}
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Applying...
                  </>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview & Details Combined */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h2 className="text-3xl font-bold text-heading mb-6">Course Details</h2>
              
              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Level</p>
                  <p className="font-semibold text-heading">{detailedCourse.level}</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Duration</p>
                  <p className="font-semibold text-heading">{detailedCourse.duration}</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Mode</p>
                  <p className="font-semibold text-heading">{detailedCourse.mode}</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Rating</p>
                  <p className="font-semibold text-heading">4.5/5</p>
                </div>
              </div>

              {/* Course Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-heading mb-4">About this Course</h3>
                <p className="text-muted leading-relaxed text-base">{detailedCourse.description}</p>
              </div>

              {/* Curriculum & Requirements Combined */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">Curriculum</h3>
                  <ul className="space-y-3">
                    {detailedCourse.curriculum.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {detailedCourse.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-heading mb-4">Benefits & Advantages</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {detailedCourse.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">Course Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Start Date</p>
                    <p className="text-sm font-medium text-heading">{detailedCourse.startDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <Clock className="w-4 h-4 text-secondary" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Application Deadline</p>
                    <p className="text-sm font-medium text-heading">{detailedCourse.applicationDeadline}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                  <Award className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-xs text-muted mb-0.5">Fees</p>
                    <p className="text-sm font-medium text-heading">{detailedCourse.fees}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About University */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">About University</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-heading mb-2">{detailedCourse.universityInfo.name}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted">{detailedCourse.universityInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted">{detailedCourse.universityInfo.established}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted">{detailedCourse.universityInfo.ranking}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  View University Profile
                </button>
              </div>
            </motion.div>

            {/* Similar Courses */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">Similar Courses</h3>
              <div>
                {courses
                  .filter(course => course.level === detailedCourse.level && course.id !== detailedCourse.id)
                  .slice(0, 3)
                  .map((course, index) => {
                    const courseSlug = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    return (
                      <div key={course.id} className={index > 0 ? "mt-6" : ""}>
                        <Link href={`/campus-courses/${courseSlug}`}>
                          <div className="p-5 border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer hover:shadow-sm">
                            <h4 className="font-semibold text-heading mb-2 line-clamp-1">{course.title}</h4>
                            <p className="text-sm text-muted mb-3">{course.university}</p>
                            <div className="flex items-center gap-4 text-xs text-muted">
                              <span>{course.duration}</span>
                              <span>{course.mode}</span>
                              <span>{course.level}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Application Form */}
        <motion.div 
          id="application-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 rounded-xl p-8 border border-border"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-heading mb-2">Apply for this Course</h2>
            <p className="text-muted">Fill out the form below to submit your application</p>
          </div>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl mx-auto mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{successMessage}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Highest Qualification *
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Select qualification</option>
                  <option value="12th">12th Pass</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor&apos;s Degree</option>
                  <option value="masters">Master&apos;s Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Enter your location"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Budget *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Enter your budget (e.g., ₹50,000)"
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
