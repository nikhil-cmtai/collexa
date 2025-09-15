'use client'

import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Grid3X3, 
  List, 
  Eye,
  Download,
  MessageSquare,
  Star,
  UserCheck,
  UserX,
  Clock,
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Dummy application data
const dummyApplications = [
  {
    id: 1,
    candidateName: "Rajesh Kumar",
    candidateEmail: "rajesh.kumar@email.com",
    candidatePhone: "+91 98765 43210",
    position: "Senior Software Engineer",
    jobId: "JOB-001",
    status: "under_review",
    appliedDate: "2024-03-15",
    experience: "5 years",
    currentCompany: "TechCorp Solutions",
    expectedSalary: "₹12,00,000",
    location: "Bangalore, India",
    skills: ["React", "Node.js", "Python", "AWS", "Docker"],
    education: "B.Tech Computer Science - IIT Delhi",
    cvUrl: "https://example.com/cv/rajesh-kumar.pdf",
    coverLetter: "I am excited to apply for the Senior Software Engineer position at your company. With 5 years of experience in full-stack development, I believe I can contribute significantly to your team.",
    rating: 4.5,
    notes: "Strong technical background, good communication skills",
    interviewScheduled: false,
    interviewDate: null,
    feedback: "",
    tags: ["Senior", "Full-stack", "Experienced"]
  },
  {
    id: 2,
    candidateName: "Priya Sharma",
    candidateEmail: "priya.sharma@email.com",
    candidatePhone: "+91 98765 43211",
    position: "Data Scientist",
    jobId: "JOB-002",
    status: "shortlisted",
    appliedDate: "2024-03-14",
    experience: "3 years",
    currentCompany: "DataTech Inc",
    expectedSalary: "₹8,50,000",
    location: "Mumbai, India",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas"],
    education: "M.Tech Data Science - IIT Bombay",
    cvUrl: "https://example.com/cv/priya-sharma.pdf",
    coverLetter: "As a passionate data scientist with expertise in machine learning and statistical analysis, I am eager to join your innovative team.",
    rating: 4.8,
    notes: "Excellent ML skills, strong analytical thinking",
    interviewScheduled: true,
    interviewDate: "2024-03-20",
    feedback: "Very promising candidate",
    tags: ["ML Expert", "Analytics", "Python"]
  },
  {
    id: 3,
    candidateName: "Amit Patel",
    candidateEmail: "amit.patel@email.com",
    candidatePhone: "+91 98765 43212",
    position: "Product Manager",
    jobId: "JOB-003",
    status: "interview_scheduled",
    appliedDate: "2024-03-13",
    experience: "6 years",
    currentCompany: "ProductCorp",
    expectedSalary: "₹15,00,000",
    location: "Delhi, India",
    skills: ["Product Strategy", "Agile", "User Research", "Analytics", "Leadership"],
    education: "MBA - IIM Ahmedabad",
    cvUrl: "https://example.com/cv/amit-patel.pdf",
    coverLetter: "With extensive experience in product management and a track record of successful product launches, I am confident in my ability to drive growth.",
    rating: 4.6,
    notes: "Strong leadership skills, good product sense",
    interviewScheduled: true,
    interviewDate: "2024-03-18",
    feedback: "Scheduled for final round",
    tags: ["Leadership", "Strategy", "Experienced"]
  },
  {
    id: 4,
    candidateName: "Sneha Gupta",
    candidateEmail: "sneha.gupta@email.com",
    candidatePhone: "+91 98765 43213",
    position: "UX Designer",
    jobId: "JOB-004",
    status: "rejected",
    appliedDate: "2024-03-12",
    experience: "2 years",
    currentCompany: "DesignStudio",
    expectedSalary: "₹6,50,000",
    location: "Pune, India",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI/UX"],
    education: "B.Des - NID Ahmedabad",
    cvUrl: "https://example.com/cv/sneha-gupta.pdf",
    coverLetter: "As a creative UX designer with a passion for user-centered design, I am excited about the opportunity to contribute to your design team.",
    rating: 3.8,
    notes: "Good design skills but lacks experience",
    interviewScheduled: false,
    interviewDate: null,
    feedback: "Not selected - insufficient experience for senior role",
    tags: ["Design", "Junior", "Creative"]
  },
  {
    id: 5,
    candidateName: "Vikram Singh",
    candidateEmail: "vikram.singh@email.com",
    candidatePhone: "+91 98765 43214",
    position: "DevOps Engineer",
    jobId: "JOB-005",
    status: "hired",
    appliedDate: "2024-03-10",
    experience: "4 years",
    currentCompany: "CloudTech",
    expectedSalary: "₹10,00,000",
    location: "Hyderabad, India",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    education: "B.Tech - VIT Vellore",
    cvUrl: "https://example.com/cv/vikram-singh.pdf",
    coverLetter: "With expertise in cloud infrastructure and automation, I am ready to help scale your engineering operations.",
    rating: 4.7,
    notes: "Excellent technical skills, great cultural fit",
    interviewScheduled: true,
    interviewDate: "2024-03-16",
    feedback: "Hired - starts on April 1st",
    tags: ["DevOps", "Cloud", "Automation"]
  }
]

const applicationStatuses = ["All", "under_review", "shortlisted", "interview_scheduled", "hired", "rejected"]
const positions = ["All", "Senior Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "DevOps Engineer"]

const ApplicationsPage = () => {
  const [applications, setApplications] = useState(dummyApplications)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedPosition, setSelectedPosition] = useState('All')
  const [showViewModal, setShowViewModal] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState<typeof dummyApplications[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [reviewNotes, setReviewNotes] = useState('')
  const [reviewRating, setReviewRating] = useState(0)
  const itemsPerPage = 12

  // Filter applications
  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.candidateEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           app.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesStatus = selectedStatus === 'All' || app.status === selectedStatus
      const matchesPosition = selectedPosition === 'All' || app.position === selectedPosition
      
      return matchesSearch && matchesStatus && matchesPosition
    })
  }, [applications, searchTerm, selectedStatus, selectedPosition])

  // Pagination logic
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedApplications = filteredApplications.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedStatus, selectedPosition])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'under_review': return <Clock className="w-4 h-4" />
      case 'shortlisted': return <Star className="w-4 h-4" />
      case 'interview_scheduled': return <Calendar className="w-4 h-4" />
      case 'hired': return <UserCheck className="w-4 h-4" />
      case 'rejected': return <UserX className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under_review': return 'warning'
      case 'shortlisted': return 'default'
      case 'interview_scheduled': return 'secondary'
      case 'hired': return 'success'
      case 'rejected': return 'destructive'
      default: return 'secondary'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'under_review': return 'Under Review'
      case 'shortlisted': return 'Shortlisted'
      case 'interview_scheduled': return 'Interview Scheduled'
      case 'hired': return 'Hired'
      case 'rejected': return 'Rejected'
      default: return status
    }
  }

  const handleStatusUpdate = async (applicationId: number, newStatus: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setApplications(applications.map(app => 
        app.id === applicationId ? { ...app, status: newStatus } : app
      ))
    } finally {
      setIsLoading(false)
    }
  }

  const handleReviewSubmit = async () => {
    if (!selectedApplication) return
    
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setApplications(applications.map(app => 
        app.id === selectedApplication.id ? { 
          ...app, 
          notes: reviewNotes,
          rating: reviewRating,
          feedback: reviewNotes
        } : app
      ))
      setShowReviewModal(false)
      setReviewNotes('')
      setReviewRating(0)
    } finally {
      setIsLoading(false)
    }
  }

  const openViewModal = (application: typeof dummyApplications[0]) => {
    setSelectedApplication(application)
    setShowViewModal(true)
  }

  const openReviewModal = (application: typeof dummyApplications[0]) => {
    setSelectedApplication(application)
    setReviewNotes(application.notes || '')
    setReviewRating(application.rating || 0)
    setShowReviewModal(true)
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Job Applications</h1>
            <p className="text-muted-foreground">Review and manage candidate applications</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold text-foreground">{applications.length}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Under Review</p>
                  <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === 'under_review').length}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Shortlisted</p>
                  <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === 'shortlisted').length}</p>
                </div>
                <Star className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hired</p>
                  <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === 'hired').length}</p>
                </div>
                <UserCheck className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <p className="text-2xl font-bold text-foreground">{applications.filter(a => a.status === 'rejected').length}</p>
                </div>
                <UserX className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {applicationStatuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === 'All' ? 'All Statuses' : getStatusText(status)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Position Filter */}
              <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  {positions.map(position => (
                    <SelectItem key={position} value={position}>
                      {position === 'All' ? 'All Positions' : position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex border border-input rounded-lg overflow-hidden">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="rounded-none"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Grid view</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="rounded-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>List view</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {paginatedApplications.map(application => (
              <Card key={application.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{application.candidateName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{application.candidateName}</CardTitle>
                        <CardDescription className="text-sm">{application.position}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(application.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                      {getStatusIcon(application.status)}
                      <span className="ml-1">{getStatusText(application.status)}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Experience:</span>
                      <span className="text-sm font-medium">{application.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Expected Salary:</span>
                      <span className="text-sm font-medium">{application.expectedSalary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Applied:</span>
                      <span className="text-sm font-medium">{new Date(application.appliedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500 fill-current" />
                        <span className="text-sm font-medium">{application.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2 mt-auto">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openViewModal(application)}
                          className="flex-1 gap-2"
                          size="sm"
                          variant="outline"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View application details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openReviewModal(application)}
                          className="flex-1 gap-2"
                          size="sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Review
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Review application</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Expected Salary</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedApplications.map(application => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>{application.candidateName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{application.candidateName}</p>
                          <p className="text-sm text-muted-foreground">{application.candidateEmail}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{application.position}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(application.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1">{getStatusText(application.status)}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{application.experience}</TableCell>
                    <TableCell>{application.expectedSalary}</TableCell>
                    <TableCell>{new Date(application.appliedDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500 fill-current" />
                        <span className="text-sm font-medium">{application.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openViewModal(application)}
                              variant="ghost"
                              size="icon"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View application</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openReviewModal(application)}
                              variant="ghost"
                              size="icon"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Review application</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} applications
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* View Application Modal */}
        <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Application Details - {selectedApplication?.candidateName}</DialogTitle>
              <DialogDescription>
                Complete application information and candidate profile.
              </DialogDescription>
            </DialogHeader>
            {selectedApplication && (
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="cv">CV & Documents</TabsTrigger>
                  <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
                  <TabsTrigger value="notes">Notes & Feedback</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{selectedApplication.candidateName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium">{selectedApplication.candidateEmail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium">{selectedApplication.candidatePhone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span className="font-medium">{selectedApplication.location}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Application Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Position:</span>
                          <span className="font-medium">{selectedApplication.position}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Job ID:</span>
                          <span className="font-medium">{selectedApplication.jobId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge variant={getStatusColor(selectedApplication.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                            {getStatusIcon(selectedApplication.status)}
                            <span className="ml-1">{getStatusText(selectedApplication.status)}</span>
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Applied Date:</span>
                          <span className="font-medium">{new Date(selectedApplication.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cover Letter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{selectedApplication.coverLetter}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cv" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>CV & Documents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-blue-600" />
                          <div>
                            <p className="font-medium">Resume - {selectedApplication.candidateName}</p>
                            <p className="text-sm text-muted-foreground">PDF Document</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Professional Experience</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="font-medium">{selectedApplication.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Company:</span>
                          <span className="font-medium">{selectedApplication.currentCompany}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Expected Salary:</span>
                          <span className="font-medium">{selectedApplication.expectedSalary}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{selectedApplication.education}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {selectedApplication.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Review Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{selectedApplication.notes || 'No notes added yet.'}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{selectedApplication.feedback || 'No feedback provided yet.'}</p>
                    </CardContent>
                  </Card>

                  {selectedApplication.interviewScheduled && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Interview Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Interview Date:</span>
                          <span className="font-medium">{selectedApplication.interviewDate ? new Date(selectedApplication.interviewDate).toLocaleDateString() : 'Not scheduled'}</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowViewModal(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Review Application Modal */}
        <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Review Application - {selectedApplication?.candidateName}</DialogTitle>
              <DialogDescription>
                Add your review notes and rating for this candidate.
              </DialogDescription>
            </DialogHeader>
            {selectedApplication && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="sm"
                        onClick={() => setReviewRating(star)}
                        className="p-0 h-auto"
                      >
                        <Star className={`w-6 h-6 ${star <= reviewRating ? 'text-amber-500 fill-current' : 'text-gray-300'}`} />
                      </Button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">({reviewRating}/5)</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Review Notes</Label>
                  <Textarea
                    id="notes"
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    rows={4}
                    placeholder="Add your review notes about this candidate..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => handleStatusUpdate(selectedApplication.id, 'shortlisted')}
                    disabled={isLoading}
                    className="gap-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Shortlist
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusUpdate(selectedApplication.id, 'rejected')}
                    disabled={isLoading}
                    className="gap-2"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    Reject
                  </Button>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowReviewModal(false)} disabled={isLoading}>
                Cancel
              </Button>
              <Button onClick={handleReviewSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Review'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}

export default ApplicationsPage