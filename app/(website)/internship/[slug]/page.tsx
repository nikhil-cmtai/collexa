"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2, 
  Users, 
  Calendar,
  ArrowLeft,
  Star,
  CheckCircle2,
  Send,
  FileText,
  Target,
  GraduationCap,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { type Internship } from "@/lib/redux/features/internshipsSlice"
import {
  createJobApplication,
  fetchJobApplications,
  type JobApplication,
} from "@/lib/redux/features/job-applicationSlice"

// Extended internship interface for detailed view
interface DetailedInternship {
  id: string
  title: string
  company: string
  location: string
  type: string
  stipend: string
  postedAt: string
  tags: string[]
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  duration: string
  experience: string
  companyInfo: {
    name: string
    description: string
    size: string
    industry: string
    founded: string
    website: string
  }
}

// Map Redux internship to detailed view model
const mapInternshipToDetailed = (internship: Internship): DetailedInternship => ({
  id: internship.id,
  title: internship.title,
  company: internship.company,
  location: internship.location,
  type: internship.type,
  stipend: `₹${Number(internship.stipend || 0).toLocaleString()} / month`,
  postedAt: internship.postedDate,
  tags: internship.skills || [],
  description: internship.description,
  requirements: internship.requirements || [],
  responsibilities: internship.responsibilities || [],
  benefits: internship.benefits || [],
  duration: internship.duration,
    experience: "0-1 years",
    companyInfo: {
      name: internship.company,
    description: `${internship.company} is a ${internship.industry} organization with ${internship.companySize} team size.`,
    size: internship.companySize,
    industry: internship.industry,
    founded: "",
    website: internship.website,
  },
})

const InternshipDetailsPage = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const internships = useAppSelector((state) => state.internships.items)
  const status = useAppSelector((state) => state.internships.status)

  // Find internship by slug from Redux items
  const baseInternship = internships.find((internship) =>
    internship.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") === slug
  )

  const internship = baseInternship ? mapInternshipToDetailed(baseInternship) : null
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    graduationYear: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!internship) return

    setIsSubmitting(true)
    setSuccessMessage("")

    // Backend currently expects JSON body (not multipart), so send a plain object
    const payload: Omit<JobApplication, "_id" | "createdAt" | "updatedAt"> = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: `Course: ${formData.course || "N/A"} | Graduation: ${
        formData.graduationYear || "N/A"
      }`,
      coverLetter: formData.coverLetter,
      jobId: internship.id,
      userId: "",
      // Store file name or empty string to satisfy required `resume` field
      resume: formData.resume?.name || "",
      status: "applied",
      interviewScheduled: false,
      interviewDate: null,
      notes: `University: ${formData.university || "N/A"}`,
    }

    try {
      await dispatch(createJobApplication(payload)).unwrap()
      dispatch(fetchJobApplications({ jobId: internship.id }))
      setSuccessMessage("Application submitted successfully! The company will contact you soon.")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        university: "",
        course: "",
        graduationYear: "",
        coverLetter: "",
        resume: null,
      })
    } catch (err) {
      console.error("Failed to submit internship application:", err)
      setSuccessMessage("Unable to submit right now. Please try again in a few minutes.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("application-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-heading mb-4">
            Loading Internship Details...
          </h1>
        </div>
      </div>
    )
  }

  // Internship not found
  if (!internship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-heading mb-4">Internship Not Found</h1>
          <p className="text-muted mb-6">
            The internship you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link 
            href="/internship" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Internships
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
            href="/internship" 
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Internships
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2">
                {internship.title}
              </h1>
              <div className="flex items-center gap-4 text-muted mb-4">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>{internship.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(internship.postedAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {internship.tags.map((tag, index) => (
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
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Internship Overview & Details Combined */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h2 className="text-3xl font-bold text-heading mb-6">Internship Details</h2>
              
              {/* Internship Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Type</p>
                  <p className="font-semibold text-heading">{internship.type}</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Duration</p>
                  <p className="font-semibold text-heading">{internship.duration}</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Stipend</p>
                  <p className="font-semibold text-heading">{internship.stipend}</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Posted</p>
                  <p className="font-semibold text-heading">
                    {new Date(internship.postedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Internship Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-heading mb-4">
                  About this Internship
                </h3>
                <p className="text-muted leading-relaxed text-base">
                  {internship.description}
                </p>
              </div>

              {/* Requirements & Responsibilities Combined */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {internship.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {internship.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-heading mb-4">Benefits & Perks</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {internship.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg"
                    >
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
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">About Company</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-heading mb-2">
                    {internship.companyInfo.name}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {internship.companyInfo.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted">
                      {internship.companyInfo.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Building2 className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted">
                      {internship.companyInfo.industry}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted">
                      Founded {internship.companyInfo.founded || "—"}
                    </span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  View Company Profile
                </button>
              </div>
            </motion.div>

            {/* Similar Internships */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">Similar Internships</h3>
              <div>
                {internships
                  .filter((i) => i.id !== baseInternship?.id)
                  .slice(0, 3)
                  .map((similarInternship, index) => {
                    const internshipSlug = similarInternship.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")
                    return (
                      <div key={similarInternship.id} className={index > 0 ? "mt-6" : ""}>
                        <Link href={`/internship/${internshipSlug}`}>
                          <div className="p-5 border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer hover:shadow-sm">
                            <h4 className="font-semibold text-heading mb-2 line-clamp-1">
                              {similarInternship.title}
                            </h4>
                            <p className="text-sm text-muted mb-3">
                              {similarInternship.company}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted">
                              <span>{similarInternship.location}</span>
                              <span>{similarInternship.type}</span>
                              <span>
                                ₹
                                {Number(similarInternship.stipend || 0).toLocaleString()}
                              </span>
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
            <h2 className="text-2xl font-bold text-heading mb-2">
              Apply for this Internship
            </h2>
            <p className="text-muted">Fill out the form below to submit your application</p>
          </div>

          {successMessage && (
            <div className="max-w-2xl mx-auto mb-6 p-3 rounded-lg border border-green-200 bg-green-50 text-green-800 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{successMessage}</span>
            </div>
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
                  University/College *
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter your university name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Course/Stream *
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="e.g., Computer Science"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Graduation Year *
                </label>
                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Select graduation year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-1">
                Resume/CV *
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <FileText className="w-6 h-6 text-muted mx-auto mb-2" />
                <p className="text-sm text-muted mb-2">
                  {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="inline-block px-3 py-1.5 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 transition-colors text-sm"
                >
                  Choose File
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-1">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                placeholder="Tell us why you're interested in this internship..."
              />
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

export default InternshipDetailsPage
