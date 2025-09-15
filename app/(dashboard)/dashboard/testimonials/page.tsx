'use client'

import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Grid3X3, 
  List, 
  Edit, 
  Trash2, 
  Star,
  MessageSquare,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Package,
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
import Image from 'next/image'

// Dummy data
const dummyTestimonials = [
  {
    id: 1,
    customerName: "Rajesh Kumar",
    customerEmail: "rajesh.kumar@email.com",
    courseName: "Full Stack Web Development",
    courseId: 1,
    rating: 5,
    title: "Excellent course! Transformed my career",
    testimonial: "This course completely transformed my career! The instructors are amazing, the curriculum is comprehensive, and the hands-on projects really helped me understand the concepts. I landed a job as a Full Stack Developer within 3 months of completing the course. Highly recommended!",
    status: "approved",
    verified: true,
    helpful: 12,
    notHelpful: 1,
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop"
    ],
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15",
    graduationYear: "2024",
    currentJob: "Full Stack Developer at TechCorp",
    salary: "₹8,00,000"
  },
  {
    id: 2,
    customerName: "Priya Sharma",
    customerEmail: "priya.sharma@email.com",
    courseName: "Data Science & Machine Learning",
    courseId: 2,
    rating: 4,
    title: "Great learning experience",
    testimonial: "The Data Science course was comprehensive and well-structured. The instructors were knowledgeable and the projects were challenging yet achievable. I gained valuable skills in Python, machine learning, and data visualization. The career support team also helped me land my current role.",
    status: "approved",
    verified: true,
    helpful: 8,
    notHelpful: 2,
    images: [],
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    graduationYear: "2023",
    currentJob: "Data Scientist at Analytics Pro",
    salary: "₹12,00,000"
  },
  {
    id: 3,
    customerName: "Amit Patel",
    customerEmail: "amit.patel@email.com",
    courseName: "Cybersecurity Fundamentals",
    courseId: 3,
    rating: 5,
    title: "Outstanding cybersecurity course",
    testimonial: "This cybersecurity course exceeded my expectations! The hands-on labs, real-world scenarios, and expert instructors made complex concepts easy to understand. I now work as a Security Analyst and feel confident in my skills. The course materials and support were exceptional.",
    status: "approved",
    verified: true,
    helpful: 15,
    notHelpful: 0,
    images: [],
    createdAt: "2024-03-13",
    updatedAt: "2024-03-13",
    graduationYear: "2023",
    currentJob: "Security Analyst at SecureTech",
    salary: "₹10,00,000"
  },
  {
    id: 4,
    customerName: "Sneha Reddy",
    customerEmail: "sneha.reddy@email.com",
    courseName: "UI/UX Design Masterclass",
    courseId: 4,
    rating: 3,
    title: "Good course but could be better",
    testimonial: "The UI/UX course was decent but I expected more hands-on projects. The instructors were knowledgeable but the curriculum could be more comprehensive. I learned the basics but felt it could have been more practical.",
    status: "pending",
    verified: false,
    helpful: 3,
    notHelpful: 5,
    images: [],
    createdAt: "2024-03-12",
    updatedAt: "2024-03-12",
    graduationYear: "2024",
    currentJob: "UI Designer at Design Studio",
    salary: "₹6,00,000"
  },
  {
    id: 5,
    customerName: "Vikram Singh",
    customerEmail: "vikram.singh@email.com",
    courseName: "Digital Marketing Bootcamp",
    courseId: 5,
    rating: 4,
    title: "Great marketing course",
    testimonial: "The Digital Marketing course was comprehensive and covered all essential topics. The instructors were industry experts and the projects were practical. I gained valuable skills in SEO, social media marketing, and analytics. The career support helped me transition into marketing.",
    status: "approved",
    verified: true,
    helpful: 9,
    notHelpful: 1,
    images: [],
    createdAt: "2024-03-11",
    updatedAt: "2024-03-11",
    graduationYear: "2023",
    currentJob: "Digital Marketing Manager at Growth Co",
    salary: "₹9,00,000"
  },
  {
    id: 6,
    customerName: "Anita Desai",
    customerEmail: "anita.desai@email.com",
    courseName: "Cloud Computing Fundamentals",
    courseId: 6,
    rating: 2,
    title: "Course didn't meet expectations",
    testimonial: "I enrolled in the Cloud Computing course but found it lacking in depth. The content was too basic and didn't cover advanced topics I was expecting. The instructors seemed inexperienced and the projects were not challenging enough. I didn't feel prepared for cloud roles after completion.",
    status: "rejected",
    verified: true,
    helpful: 2,
    notHelpful: 8,
    images: [],
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
    graduationYear: "2023",
    currentJob: "Software Engineer at TechCorp",
    salary: "₹7,00,000"
  },
  {
    id: 7,
    customerName: "Rohit Gupta",
    customerEmail: "rohit.gupta@email.com",
    courseName: "Full Stack Web Development",
    courseId: 1,
    rating: 5,
    title: "Best course I've taken!",
    testimonial: "This Full Stack course was absolutely amazing! The instructors were top-notch, the curriculum was comprehensive, and the hands-on projects were challenging yet achievable. I landed my dream job as a Senior Full Stack Developer within 2 months of graduation. The career support team was incredible!",
    status: "approved",
    verified: true,
    helpful: 20,
    notHelpful: 0,
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
    ],
    createdAt: "2024-03-09",
    updatedAt: "2024-03-09",
    graduationYear: "2023",
    currentJob: "Senior Full Stack Developer at TechGiant",
    salary: "₹15,00,000"
  },
  {
    id: 8,
    customerName: "Kavita Joshi",
    customerEmail: "kavita.joshi@email.com",
    courseName: "DevOps Engineering",
    courseId: 10,
    rating: 4,
    title: "Great DevOps course",
    testimonial: "The DevOps course was well-structured and covered all essential tools and practices. The hands-on labs with Docker, Kubernetes, and CI/CD pipelines were excellent. I gained practical skills that helped me transition into a DevOps role. The instructors were knowledgeable and supportive.",
    status: "approved",
    verified: true,
    helpful: 7,
    notHelpful: 1,
    images: [],
    createdAt: "2024-03-08",
    updatedAt: "2024-03-08",
    graduationYear: "2023",
    currentJob: "DevOps Engineer at CloudTech",
    salary: "₹11,00,000"
  },
  {
    id: 9,
    customerName: "Deepak Mehta",
    customerEmail: "deepak.mehta@email.com",
    courseName: "Mobile App Development",
    courseId: 16,
    rating: 5,
    title: "Excellent mobile development course",
    testimonial: "This mobile app development course exceeded my expectations! The curriculum covered both React Native and Flutter, giving me flexibility in my career. The projects were real-world applications and the instructors provided excellent mentorship. I now work as a Mobile App Developer and love my job!",
    status: "approved",
    verified: true,
    helpful: 11,
    notHelpful: 0,
    images: [],
    createdAt: "2024-03-07",
    updatedAt: "2024-03-07",
    graduationYear: "2023",
    currentJob: "Mobile App Developer at AppStudio",
    salary: "₹10,00,000"
  },
  {
    id: 10,
    customerName: "Sunita Agarwal",
    customerEmail: "sunita.agarwal@email.com",
    courseName: "Business Analytics",
    courseId: 13,
    rating: 3,
    title: "Decent analytics course",
    testimonial: "The Business Analytics course was okay but could have been more comprehensive. I learned the basics of data analysis and visualization, but the advanced topics were not covered in depth. The instructors were helpful but the course material could be more challenging. It helped me get started in analytics but I had to learn more on my own.",
    status: "pending",
    verified: false,
    helpful: 4,
    notHelpful: 3,
    images: [],
    createdAt: "2024-03-06",
    updatedAt: "2024-03-06",
    graduationYear: "2024",
    currentJob: "Business Analyst at DataCorp",
    salary: "₹8,00,000"
  }
]

const testimonialStatuses = ["All", "pending", "approved", "rejected"]
const ratingFilters = ["All", "5", "4", "3", "2", "1"]

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(dummyTestimonials)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedRating, setSelectedRating] = useState('All')
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof dummyTestimonials[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(testimonial => {
      const matchesSearch = testimonial.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonial.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonial.testimonial.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = selectedStatus === 'All' || testimonial.status === selectedStatus
      const matchesRating = selectedRating === 'All' || testimonial.rating.toString() === selectedRating
      
      return matchesSearch && matchesStatus && matchesRating
    })
  }, [testimonials, searchTerm, selectedStatus, selectedRating])

  // Pagination logic
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedStatus, selectedRating])

  const handleUpdateTestimonialStatus = async (testimonialId: number, newStatus: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === testimonialId 
          ? { ...testimonial, status: newStatus, updatedAt: new Date().toISOString().split('T')[0] }
          : testimonial
      ))
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteTestimonial = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== selectedTestimonial!.id))
      setShowDeleteModal(false)
      setSelectedTestimonial(null)
    } finally {
      setIsLoading(false)
    }
  }

  const openViewModal = (testimonial: typeof dummyTestimonials[0]) => {
    setSelectedTestimonial(testimonial)
    setShowViewModal(true)
  }

  const openEditModal = (testimonial: typeof dummyTestimonials[0]) => {
    setSelectedTestimonial(testimonial)
    setShowEditModal(true)
  }

  const openDeleteModal = (testimonial: typeof dummyTestimonials[0]) => {
    setSelectedTestimonial(testimonial)
    setShowDeleteModal(true)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'approved': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning'
      case 'approved': return 'success'
      case 'rejected': return 'default'
      default: return 'secondary'
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-amber-500 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Testimonials</h1>
            <p className="text-muted-foreground">Manage student testimonials and success stories</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Testimonials</p>
                  <p className="text-2xl font-bold text-foreground">{testimonials.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Testimonials</p>
                  <p className="text-2xl font-bold text-foreground">{testimonials.filter(t => t.status === 'pending').length}</p>
                </div>
                <Clock className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved Testimonials</p>
                  <p className="text-2xl font-bold text-foreground">{testimonials.filter(t => t.status === 'approved').length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                  <p className="text-2xl font-bold text-foreground">{(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
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
                  placeholder="Search testimonials..."
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
                  {testimonialStatuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Rating Filter */}
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  {ratingFilters.map(rating => (
                    <SelectItem key={rating} value={rating}>
                      {rating === 'All' ? 'All Ratings' : `${rating} Star${rating !== '1' ? 's' : ''}`}
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

        {/* Testimonials Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTestimonials.map(testimonial => (
              <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-1">{testimonial.title}</CardTitle>
                    <Badge variant={getStatusColor(testimonial.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                      {getStatusIcon(testimonial.status)}
                      <span className="ml-1">{testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}</span>
                    </Badge>
                  </div>
                  <CardDescription>{testimonial.courseName}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Student:</span>
                      <span className="text-sm font-medium">{testimonial.customerName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                        <span className="text-sm font-medium ml-1">({testimonial.rating})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Verified:</span>
                      <Badge variant={testimonial.verified ? 'success' : 'secondary'}>
                        {testimonial.verified ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Job:</span>
                      <span className="text-sm font-medium">{testimonial.currentJob}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Salary:</span>
                      <span className="text-sm font-medium">{testimonial.salary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Date:</span>
                      <span className="text-sm font-medium">{new Date(testimonial.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{testimonial.testimonial}</p>
                  </div>
                  <div className="flex gap-2 pt-2 mt-auto">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openViewModal(testimonial)}
                          className="flex-1 gap-2"
                          size="sm"
                          variant="outline"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View testimonial details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openEditModal(testimonial)}
                          className="flex-1 gap-2"
                          size="sm"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit testimonial status</p>
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
                  <TableHead>Testimonial</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTestimonials.map(testimonial => (
                  <TableRow key={testimonial.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground line-clamp-1">{testimonial.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{testimonial.testimonial}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{testimonial.courseName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{testimonial.customerName}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.customerEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                        <span className="text-sm font-medium ml-1">({testimonial.rating})</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(testimonial.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {getStatusIcon(testimonial.status)}
                        <span className="ml-1">{testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(testimonial.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openViewModal(testimonial)}
                              variant="ghost"
                              size="icon"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View testimonial</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openEditModal(testimonial)}
                              variant="ghost"
                              size="icon"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit testimonial</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openDeleteModal(testimonial)}
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete testimonial</p>
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
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredTestimonials.length)} of {filteredTestimonials.length} testimonials
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

        {/* View Testimonial Modal */}
        <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Testimonial Details - {selectedTestimonial?.title}</DialogTitle>
              <DialogDescription>
                Complete testimonial information and student details.
              </DialogDescription>
            </DialogHeader>
            {selectedTestimonial && (
              <div className="space-y-6">
                {/* Testimonial Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Testimonial Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Title:</span>
                        <span className="font-medium">{selectedTestimonial.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          {renderStars(selectedTestimonial.rating)}
                          <span className="font-medium ml-1">({selectedTestimonial.rating}/5)</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={getStatusColor(selectedTestimonial.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                          {getStatusIcon(selectedTestimonial.status)}
                          <span className="ml-1">{selectedTestimonial.status.charAt(0).toUpperCase() + selectedTestimonial.status.slice(1)}</span>
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verified:</span>
                        <Badge variant={selectedTestimonial.verified ? 'success' : 'secondary'}>
                          {selectedTestimonial.verified ? 'Yes' : 'No'}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Graduation Year:</span>
                        <span className="font-medium">{selectedTestimonial.graduationYear}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Student Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{selectedTestimonial.customerName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-medium">{selectedTestimonial.customerEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Course:</span>
                        <span className="font-medium">{selectedTestimonial.courseName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Current Job:</span>
                        <span className="font-medium">{selectedTestimonial.currentJob}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Salary:</span>
                        <span className="font-medium">{selectedTestimonial.salary}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Testimonial Content */}
                <Card>
                  <CardHeader>
                    <CardTitle>Testimonial Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{selectedTestimonial.testimonial}</p>
                  </CardContent>
                </Card>

                {/* Testimonial Images */}
                {selectedTestimonial.images && selectedTestimonial.images.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Testimonial Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedTestimonial.images.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`Testimonial image ${index + 1}`}
                              className="w-full h-full object-cover"
                              fill
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span className="font-medium">{new Date(selectedTestimonial.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Updated:</span>
                        <span className="font-medium">{new Date(selectedTestimonial.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowViewModal(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Testimonial Modal */}
        <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Update Testimonial Status</DialogTitle>
              <DialogDescription>
                Change the status of testimonial by {selectedTestimonial?.customerName}
              </DialogDescription>
            </DialogHeader>
            {selectedTestimonial && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="testimonial-status" className="mb-2 block">Testimonial Status</Label>
                  <Select 
                    value={selectedTestimonial.status} 
                    onValueChange={(value) => setSelectedTestimonial({...selectedTestimonial, status: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {testimonialStatuses.slice(1).map(status => (
                        <SelectItem key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="testimonial-verified" className="mb-2 block">Verified Graduate</Label>
                  <Select 
                    value={selectedTestimonial.verified ? 'true' : 'false'} 
                    onValueChange={(value) => setSelectedTestimonial({...selectedTestimonial, verified: value === 'true'})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select verification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Verified</SelectItem>
                      <SelectItem value="false">Not Verified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowEditModal(false)} disabled={isLoading}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  handleUpdateTestimonialStatus(selectedTestimonial!.id, selectedTestimonial!.status)
                  setShowEditModal(false)
                }} 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Update Testimonial'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Modal */}
        <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Delete Testimonial</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete the testimonial by {selectedTestimonial?.customerName}? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDeleteModal(false)} disabled={isLoading}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteTestimonial} 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete Testimonial'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}

export default TestimonialsPage