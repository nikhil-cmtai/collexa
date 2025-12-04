"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase, 
  Building2, 
  Users, 
  Calendar,
  ArrowLeft,
  Star,
  CheckCircle2,
  Send,
  FileText,
  Award,
  Target,
  Loader2
} from "lucide-react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import type { Job } from "@/lib/redux/features/jobsSlice"
import { createJobApplication, fetchJobApplications, JobApplication } from "@/lib/redux/features/job-applicationSlice"

// Extended job interface for detailed view
interface DetailedJob extends Job {
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  experience: string
  salary: string
  companyInfo: {
    name: string
    description: string
    size: string
    industry: string
    founded: string
    website: string
  }
}

// Mock detailed job data - in real app, this would come from API
const getDetailedJobData = (job: Job): DetailedJob => {
  const detailedData: Record<string, Partial<DetailedJob>> = {
    "j-1": {
      description: "We are looking for a passionate Frontend Developer Intern to join our dynamic team. You will work on building modern web applications using React and TypeScript, gaining hands-on experience in a fast-paced startup environment.",
      requirements: [
        "Basic knowledge of React.js and JavaScript",
        "Understanding of HTML5, CSS3, and responsive design",
        "Familiarity with Git version control",
        "Strong problem-solving skills",
        "Good communication and teamwork abilities",
        "Eagerness to learn and adapt to new technologies"
      ],
      responsibilities: [
        "Develop user-facing features using React.js",
        "Collaborate with senior developers on project tasks",
        "Write clean, maintainable code following best practices",
        "Participate in code reviews and team discussions",
        "Learn and implement modern frontend technologies",
        "Assist in debugging and testing applications"
      ],
      benefits: [
        "Hands-on experience with modern tech stack",
        "Mentorship from senior developers",
        "Flexible working hours",
        "Certificate of completion",
        "Potential full-time offer",
        "Learning and development opportunities"
      ],
      experience: "0-1 years",
      salary: "₹15,000/mo",
      companyInfo: {
        name: "Acme Labs",
        description: "Acme Labs is a cutting-edge technology company focused on innovative software solutions and digital transformation.",
        size: "50-100 employees",
        industry: "Information Technology",
        founded: "2018",
        website: "www.acmelabs.com"
      }
    },
    "j-2": {
      description: "Join our backend team as a Junior Backend Engineer and work on scalable server-side applications. You'll be responsible for developing APIs, managing databases, and ensuring system reliability.",
      requirements: [
        "Proficiency in Node.js and Express.js",
        "Experience with MongoDB or similar NoSQL databases",
        "Understanding of RESTful API design",
        "Knowledge of authentication and authorization",
        "Familiarity with cloud platforms (AWS/GCP)",
        "Strong problem-solving and debugging skills"
      ],
      responsibilities: [
        "Develop and maintain backend services and APIs",
        "Design and implement database schemas",
        "Ensure application security and performance",
        "Collaborate with frontend developers",
        "Write comprehensive tests for backend services",
        "Monitor and optimize application performance"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Professional development budget",
        "Flexible work arrangements",
        "Modern development tools and equipment",
        "Career growth opportunities"
      ],
      experience: "1-2 years",
      salary: "₹6-10 LPA",
      companyInfo: {
        name: "Nimbus Tech",
        description: "Nimbus Tech specializes in cloud-based solutions and enterprise software development.",
        size: "100-500 employees",
        industry: "Cloud Computing",
        founded: "2015",
        website: "www.nimbustech.com"
      }
    },
    "j-3": {
      description: "We are seeking a Data Analyst Intern to help us extract insights from large datasets and support data-driven decision making across the organization.",
      requirements: [
        "Basic knowledge of SQL and Excel",
        "Understanding of data analysis concepts",
        "Familiarity with Python for data analysis",
        "Strong analytical and problem-solving skills",
        "Attention to detail and accuracy",
        "Good communication skills for presenting findings"
      ],
      responsibilities: [
        "Analyze large datasets to identify trends and patterns",
        "Create reports and visualizations using Excel and Python",
        "Support business teams with data-driven insights",
        "Clean and validate data for accuracy",
        "Assist in building dashboards and reports",
        "Learn advanced analytics tools and techniques"
      ],
      benefits: [
        "Real-world data analysis experience",
        "Exposure to business intelligence tools",
        "Mentorship from senior data analysts",
        "Certificate of completion",
        "Networking opportunities",
        "Potential full-time conversion"
      ],
      experience: "0-1 years",
      salary: "₹12,000/mo",
      companyInfo: {
        name: "Quantia",
        description: "Quantia is a data-driven company specializing in business intelligence and analytics solutions.",
        size: "100-200 employees",
        industry: "Data Analytics",
        founded: "2017",
        website: "www.quantia.com"
      }
    },
    "j-4": {
      description: "Join our marketing team as a Marketing Associate and help drive brand awareness and customer acquisition through innovative marketing strategies.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Knowledge of SEO and content marketing",
        "Experience with social media platforms",
        "Strong written and verbal communication skills",
        "Creative thinking and problem-solving abilities",
        "Familiarity with marketing analytics tools"
      ],
      responsibilities: [
        "Develop and execute marketing campaigns",
        "Create engaging content for various channels",
        "Manage social media presence and engagement",
        "Analyze marketing metrics and optimize performance",
        "Collaborate with design and sales teams",
        "Stay updated with marketing trends and best practices"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance and wellness programs",
        "Professional development opportunities",
        "Creative and collaborative work environment",
        "Flexible working arrangements",
        "Career advancement opportunities"
      ],
      experience: "1-3 years",
      salary: "₹4-7 LPA",
      companyInfo: {
        name: "BrightWave",
        description: "BrightWave is a leading digital marketing agency helping businesses grow through innovative marketing strategies.",
        size: "50-100 employees",
        industry: "Digital Marketing",
        founded: "2016",
        website: "www.brightwave.com"
      }
    },
    "j-5": {
      description: "We are looking for a creative UX/UI Designer Intern to join our design team and help create beautiful, user-friendly digital experiences.",
      requirements: [
        "Basic knowledge of Figma and design principles",
        "Understanding of user experience design",
        "Familiarity with prototyping tools",
        "Strong visual design skills",
        "Good communication and collaboration abilities",
        "Portfolio demonstrating design work"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Create wireframes, mockups, and prototypes",
        "Conduct user research and usability testing",
        "Collaborate with developers and product managers",
        "Maintain design systems and style guides",
        "Iterate on designs based on feedback"
      ],
      benefits: [
        "Hands-on experience with modern design tools",
        "Mentorship from senior designers",
        "Portfolio building opportunities",
        "Exposure to real client projects",
        "Certificate of completion",
        "Potential full-time offer"
      ],
      experience: "0-1 years",
      salary: "₹10,000/mo",
      companyInfo: {
        name: "Designify",
        description: "Designify is a creative design studio specializing in user experience and interface design for digital products.",
        size: "20-50 employees",
        industry: "Design",
        founded: "2019",
        website: "www.designify.com"
      }
    }
  }

  const defaultData: Partial<DetailedJob> = {
    description: "We are looking for a talented professional to join our team. This role offers excellent growth opportunities and the chance to work with cutting-edge technologies.",
    requirements: [
      "Relevant educational background",
      "Strong analytical and problem-solving skills",
      "Good communication abilities",
      "Team collaboration skills",
      "Adaptability and willingness to learn"
    ],
    responsibilities: [
      "Execute assigned tasks and projects",
      "Collaborate with team members",
      "Maintain high quality standards",
      "Contribute to team goals and objectives",
      "Continuous learning and skill development"
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Professional development opportunities",
      "Flexible work environment",
      "Career advancement prospects"
    ],
    experience: "1-3 years",
    salary: job.stipend || "As per industry standards",
    companyInfo: {
      name: job.company,
      description: `${job.company} is a leading company in the industry, committed to innovation and excellence.`,
      size: "50-200 employees",
      industry: "Technology",
      founded: "2020",
      website: `www.${job.company.toLowerCase().replace(/\s+/g, '')}.com`
    }
  }

  return {
    ...job,
    ...defaultData,
    ...detailedData[job.id]
  } as DetailedJob
}

const JobDetailsPage = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const jobs = useAppSelector((state) => state.jobs.items)
  const status = useAppSelector((state) => state.jobs.status)
  
  // Find job by slug
  const baseJob = jobs.find(job => 
    job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  )
  
  // Get detailed job data
  const job = baseJob ? getDetailedJobData(baseJob) : null
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    coverLetter: "",
    resume: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!job) return

    setIsSubmitting(true)
    setSuccessMessage("")

    // Backend currently expects JSON body (not multipart), so send a plain object
    const payload: Omit<JobApplication, "_id" | "createdAt" | "updatedAt"> = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: `Expected salary: ${formData.expectedSalary || "N/A"}`,
      coverLetter: formData.coverLetter,
      jobId: job.id,
      userId: "",
      // Store at least the file name or empty string to satisfy required `resume` field
      resume: formData.resume?.name || "",
      status: "applied",
      interviewScheduled: false,
      interviewDate: null,
      notes: `Current company: ${formData.currentCompany || "N/A"}`,
    }

    try {
      await dispatch(createJobApplication(payload)).unwrap()
      dispatch(fetchJobApplications({ jobId: job.id }))
      setSuccessMessage("Application submitted successfully! The employer will contact you soon.")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        currentCompany: "",
        expectedSalary: "",
        coverLetter: "",
        resume: null,
      })
    } catch (err) {
      console.error("Failed to submit job application:", err)
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

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-heading mb-4">Loading Job Details...</h1>
        </div>
      </div>
    )
  }

  // Job not found
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-heading mb-4">Job Not Found</h1>
          <p className="text-muted mb-6">The job you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link 
            href="/jobs" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
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
            href="/jobs" 
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2">
                {job.title}
              </h1>
              <div className="flex items-center gap-4 text-muted mb-4">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(job.postedAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
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
            {/* Job Overview & Details Combined */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h2 className="text-3xl font-bold text-heading mb-6">Job Details</h2>
              
              {/* Job Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Job Type</p>
                  <p className="font-semibold text-heading">{job.type}</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                  <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Experience</p>
                  <p className="font-semibold text-heading">{job.experience}</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                  <DollarSign className="w-6 h-6 text- mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Salary</p>
                  <p className="font-semibold text-heading">{job.salary}</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted mb-1">Posted</p>
                  <p className="font-semibold text-heading">{new Date(job.postedAt).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-heading mb-4">About this Role</h3>
                <p className="text-muted leading-relaxed text-base">{job.description}</p>
              </div>

              {/* Requirements & Responsibilities Combined */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-4">Responsibilities</h3>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, index) => (
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
                  {job.benefits.map((benefit, index) => (
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
                  <h4 className="font-semibold text-heading mb-2">{job.companyInfo.name}</h4>
                  <p className="text-sm text-muted leading-relaxed">{job.companyInfo.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted">{job.companyInfo.size}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Building2 className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted">{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted">Founded {job.companyInfo.founded}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  View Company Profile
                </button>
              </div>
            </motion.div>

            {/* Similar Jobs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-heading mb-4">Similar Jobs</h3>
              <div>
                {jobs
                  .filter(j => j.id !== job?.id)
                  .slice(0, 3)
                  .map((similarJob, index) => {
                    const jobSlug = similarJob.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    return (
                      <div key={similarJob.id} className={index > 0 ? "mt-6" : ""}>
                        <Link href={`/jobs/${jobSlug}`}>
                          <div className="p-5 border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer hover:shadow-sm">
                            <h4 className="font-semibold text-heading mb-2 line-clamp-1">{similarJob.title}</h4>
                            <p className="text-sm text-muted mb-3">{similarJob.company}</p>
                            <div className="flex items-center gap-4 text-xs text-muted">
                              <span>{similarJob.location}</span>
                              <span>{similarJob.type}</span>
                              <span>{similarJob.stipend || "Competitive"}</span>
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
            <h2 className="text-2xl font-bold text-heading mb-2">Apply for this Position</h2>
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
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-4">2-4 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="6+">6+ years</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Enter current company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-heading mb-1">
                  Expected Salary
                </label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="e.g., ₹8-12 LPA"
                />
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
                placeholder="Tell us why you're interested in this position..."
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

export default JobDetailsPage




