'use client'

import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Grid3X3, 
  List, 
  Edit, 
  Trash2, 
  Plus,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Eye,
  GraduationCap,
  Users,
  BookOpen,
  DollarSign,
  Building,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Label } from '@/components/ui/label'

// Dummy data for campus courses
const dummyCourses = [
  {
    id: 1,
    name: "Master of Business Administration (MBA)",
    code: "MBA001",
    duration: "2 Years",
    fees: 500000,
    university: "Delhi University",
    location: "New Delhi",
    type: "Post Graduate",
    specialization: "General Management",
    status: "active",
    seats: 60,
    enrolled: 45,
    rating: 4.8,
    description: "Comprehensive MBA program covering all aspects of business management with industry exposure.",
    eligibility: "Bachelor's degree with 50% marks, CAT/MAT/GMAT score",
    curriculum: ["Business Strategy", "Financial Management", "Marketing Management", "Operations Management", "Human Resource Management"],
    faculty: ["Dr. Rajesh Kumar", "Prof. Priya Sharma", "Dr. Amit Patel"],
    createdAt: "2024-01-15",
    updatedAt: "2024-03-15"
  },
  {
    id: 2,
    name: "Bachelor of Arts (BA)",
    code: "BA001",
    duration: "3 Years",
    fees: 120000,
    university: "Mumbai University",
    location: "Mumbai",
    type: "Undergraduate",
    specialization: "Liberal Arts",
    status: "active",
    seats: 120,
    enrolled: 98,
    rating: 4.5,
    description: "Comprehensive liberal arts program with multiple subject combinations.",
    eligibility: "10+2 with 45% marks in any stream",
    curriculum: ["English Literature", "History", "Political Science", "Economics", "Psychology"],
    faculty: ["Dr. Sneha Reddy", "Prof. Vikram Singh", "Dr. Anita Desai"],
    createdAt: "2024-01-10",
    updatedAt: "2024-03-10"
  },
  {
    id: 3,
    name: "Bachelor of Computer Applications (BCA)",
    code: "BCA001",
    duration: "3 Years",
    fees: 180000,
    university: "Bangalore University",
    location: "Bangalore",
    type: "Undergraduate",
    specialization: "Computer Applications",
    status: "active",
    seats: 80,
    enrolled: 72,
    rating: 4.7,
    description: "Comprehensive computer applications program with modern programming languages and technologies.",
    eligibility: "10+2 with Mathematics and 50% marks",
    curriculum: ["Programming in C", "Data Structures", "Database Management", "Web Development", "Software Engineering"],
    faculty: ["Dr. Rohit Gupta", "Prof. Kavita Joshi", "Dr. Deepak Mehta"],
    createdAt: "2024-01-12",
    updatedAt: "2024-03-12"
  },
  {
    id: 4,
    name: "Master of Science (MSc)",
    code: "MSC001",
    duration: "2 Years",
    fees: 200000,
    university: "Pune University",
    location: "Pune",
    type: "Post Graduate",
    specialization: "Computer Science",
    status: "active",
    seats: 40,
    enrolled: 35,
    rating: 4.9,
    description: "Advanced computer science program with research focus and industry collaboration.",
    eligibility: "BSc Computer Science or BCA with 55% marks",
    curriculum: ["Advanced Algorithms", "Machine Learning", "Data Science", "Cloud Computing", "Research Methodology"],
    faculty: ["Dr. Sunita Agarwal", "Prof. Arjun Sharma", "Dr. Priya Patel"],
    createdAt: "2024-01-08",
    updatedAt: "2024-03-08"
  },
  {
    id: 5,
    name: "Bachelor of Commerce (BCom)",
    code: "BCOM001",
    duration: "3 Years",
    fees: 100000,
    university: "Chennai University",
    location: "Chennai",
    type: "Undergraduate",
    specialization: "Commerce",
    status: "active",
    seats: 100,
    enrolled: 85,
    rating: 4.4,
    description: "Comprehensive commerce program covering accounting, finance, and business studies.",
    eligibility: "10+2 with Commerce stream and 45% marks",
    curriculum: ["Financial Accounting", "Business Law", "Economics", "Taxation", "Auditing"],
    faculty: ["Dr. Rahul Kumar", "Prof. Sneha Reddy", "Dr. Vikram Singh"],
    createdAt: "2024-01-05",
    updatedAt: "2024-03-05"
  },
  {
    id: 6,
    name: "Bachelor of Technology (B.Tech)",
    code: "BTECH001",
    duration: "4 Years",
    fees: 400000,
    university: "Hyderabad University",
    location: "Hyderabad",
    type: "Undergraduate",
    specialization: "Information Technology",
    status: "active",
    seats: 60,
    enrolled: 58,
    rating: 4.6,
    description: "Engineering program focused on information technology and software development.",
    eligibility: "10+2 with PCM and 60% marks, JEE Main score",
    curriculum: ["Programming Fundamentals", "Data Structures", "Computer Networks", "Software Engineering", "Database Systems"],
    faculty: ["Dr. Anita Desai", "Prof. Rohit Gupta", "Dr. Kavita Joshi"],
    createdAt: "2024-01-03",
    updatedAt: "2024-03-03"
  },
  {
    id: 7,
    name: "Master of Arts (MA)",
    code: "MA001",
    duration: "2 Years",
    fees: 150000,
    university: "Kolkata University",
    location: "Kolkata",
    type: "Post Graduate",
    specialization: "English Literature",
    status: "active",
    seats: 30,
    enrolled: 25,
    rating: 4.3,
    description: "Advanced English literature program with focus on critical analysis and research.",
    eligibility: "BA English or equivalent with 50% marks",
    curriculum: ["British Literature", "American Literature", "Literary Theory", "Research Methods", "Comparative Literature"],
    faculty: ["Dr. Deepak Mehta", "Prof. Sunita Agarwal", "Dr. Arjun Sharma"],
    createdAt: "2024-01-20",
    updatedAt: "2024-03-20"
  },
  {
    id: 8,
    name: "Bachelor of Science (BSc)",
    code: "BSC001",
    duration: "3 Years",
    fees: 140000,
    university: "Ahmedabad University",
    location: "Ahmedabad",
    type: "Undergraduate",
    specialization: "Mathematics",
    status: "active",
    seats: 50,
    enrolled: 42,
    rating: 4.5,
    description: "Comprehensive mathematics program with applications in various fields.",
    eligibility: "10+2 with Mathematics and 50% marks",
    curriculum: ["Calculus", "Linear Algebra", "Statistics", "Discrete Mathematics", "Applied Mathematics"],
    faculty: ["Dr. Priya Patel", "Prof. Rahul Kumar", "Dr. Sneha Reddy"],
    createdAt: "2024-01-18",
    updatedAt: "2024-03-18"
  }
]

const courseTypes = ["All", "Undergraduate", "Post Graduate", "Doctorate", "Diploma"]
const courseStatuses = ["All", "active", "inactive", "suspended"]
const universities = ["All", "Delhi University", "Mumbai University", "Bangalore University", "Pune University", "Chennai University", "Hyderabad University", "Kolkata University", "Ahmedabad University"]

const CampusCoursePage = () => {
  const [courses, setCourses] = useState(dummyCourses)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedUniversity, setSelectedUniversity] = useState('All')
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<typeof dummyCourses[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.university.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'All' || course.type === selectedType
      const matchesStatus = selectedStatus === 'All' || course.status === selectedStatus
      const matchesUniversity = selectedUniversity === 'All' || course.university === selectedUniversity
      
      return matchesSearch && matchesType && matchesStatus && matchesUniversity
    })
  }, [courses, searchTerm, selectedType, selectedStatus, selectedUniversity])

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedType, selectedStatus, selectedUniversity])

  const handleUpdateCourse = async (courseId: number, updatedCourse: typeof dummyCourses[0]) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setCourses(courses.map(course => 
        course.id === courseId 
          ? { ...course, ...updatedCourse, updatedAt: new Date().toISOString().split('T')[0] }
          : course
      ))
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddCourse = async (newCourse: typeof dummyCourses[0]) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const course = {
        ...newCourse,
        id: Math.max(...courses.map(c => c.id)) + 1,
        enrolled: 0,
        rating: 0,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      setCourses([...courses, course])
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteCourse = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setCourses(courses.filter(course => course.id !== selectedCourse!.id))
      setShowDeleteModal(false)
      setSelectedCourse(null)
    } finally {
      setIsLoading(false)
    }
  }

  const openViewModal = (course: typeof dummyCourses[0]) => {
    setSelectedCourse(course)
    setShowViewModal(true)
  }

  const openEditModal = (course: typeof dummyCourses[0]) => {
    setSelectedCourse(course)
    setShowEditModal(true)
  }

  const openDeleteModal = (course: typeof dummyCourses[0]) => {
    setSelectedCourse(course)
    setShowDeleteModal(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success'
      case 'inactive': return 'secondary'
      case 'suspended': return 'destructive'
      default: return 'secondary'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Undergraduate': return 'default'
      case 'Post Graduate': return 'warning'
      case 'Doctorate': return 'destructive'
      case 'Diploma': return 'secondary'
      default: return 'secondary'
    }
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Campus Courses</h1>
            <p className="text-muted-foreground">Manage university campus courses and programs</p>
          </div>
          <Button onClick={() => setShowAddModal(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                  <p className="text-2xl font-bold text-foreground">{courses.length}</p>
                </div>
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Courses</p>
                  <p className="text-2xl font-bold text-foreground">{courses.filter(c => c.status === 'active').length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{courses.reduce((sum, c) => sum + c.enrolled, 0)}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">₹{(courses.reduce((sum, c) => sum + (c.fees * c.enrolled), 0) / 100000).toFixed(1)}L</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
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
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {courseTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === 'All' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {courseStatuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* University Filter */}
              <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map(university => (
                    <SelectItem key={university} value={university}>
                      {university === 'All' ? 'All Universities' : university}
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

        {/* Courses Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCourses.map(course => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-2">{course.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={getStatusColor(course.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                      </Badge>
                      <Badge variant={getTypeColor(course.type) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {course.type}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{course.code} • {course.specialization}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">University:</span>
                      <span className="text-sm font-medium">{course.university}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Fees:</span>
                      <span className="text-lg font-bold text-foreground">₹{course.fees.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Students:</span>
                      <span className="text-sm font-medium">{course.enrolled}/{course.seats}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2 mt-auto">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openViewModal(course)}
                          className="flex-1 gap-2"
                          size="sm"
                          variant="outline"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View course details</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => openEditModal(course)}
                          className="flex-1 gap-2"
                          size="sm"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit course</p>
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
                  <TableHead>Course</TableHead>
                  <TableHead>University</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Fees</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCourses.map(course => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.code} • {course.specialization}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-muted-foreground" />
                        <span>{course.university}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getTypeColor(course.type) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {course.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell className="font-medium">₹{course.fees.toLocaleString()}</TableCell>
                    <TableCell>{course.enrolled}/{course.seats}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(course.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openViewModal(course)}
                              variant="ghost"
                              size="icon"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View course</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openEditModal(course)}
                              variant="ghost"
                              size="icon"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit course</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => openDeleteModal(course)}
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete course</p>
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
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
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

        {/* View Course Modal */}
        <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Course Details - {selectedCourse?.name}</DialogTitle>
              <DialogDescription>
                Complete course information and curriculum details.
              </DialogDescription>
            </DialogHeader>
            {selectedCourse && (
              <div className="space-y-6">
                {/* Course Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Course Code:</span>
                        <span className="font-medium">{selectedCourse.code}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{selectedCourse.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <Badge variant={getTypeColor(selectedCourse.type) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                          {selectedCourse.type}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Specialization:</span>
                        <span className="font-medium">{selectedCourse.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={getStatusColor(selectedCourse.status) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                          {selectedCourse.status.charAt(0).toUpperCase() + selectedCourse.status.slice(1)}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>University & Location</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">University:</span>
                        <span className="font-medium">{selectedCourse.university}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{selectedCourse.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fees:</span>
                        <span className="font-bold text-lg">₹{selectedCourse.fees.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Seats:</span>
                        <span className="font-medium">{selectedCourse.seats}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Enrolled:</span>
                        <span className="font-medium">{selectedCourse.enrolled}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>Course Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedCourse.description}</p>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedCourse.eligibility}</p>
                  </CardContent>
                </Card>

                {/* Curriculum */}
                <Card>
                  <CardHeader>
                    <CardTitle>Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedCourse.curriculum.map((subject, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Faculty */}
                <Card>
                  <CardHeader>
                    <CardTitle>Faculty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.faculty.map((faculty, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">{faculty}</span>
                        </div>
                      ))}
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

        {/* Add Course Modal */}
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>
                Create a new campus course with all required information.
              </DialogDescription>
            </DialogHeader>
            <CourseForm
              course={null}
              onSubmit={handleAddCourse}
              onCancel={() => setShowAddModal(false)}
              isLoading={isLoading}
            />
          </DialogContent>
        </Dialog>

        {/* Edit Course Modal */}
        <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Course</DialogTitle>
              <DialogDescription>
                Update course information and details.
              </DialogDescription>
            </DialogHeader>
            {selectedCourse && (
              <CourseForm
                course={selectedCourse}
                onSubmit={(updatedCourse) => {
                  handleUpdateCourse(selectedCourse.id, updatedCourse)
                  setShowEditModal(false)
                }}
                onCancel={() => setShowEditModal(false)}
                isLoading={isLoading}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Modal */}
        <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Delete Course</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete the course &quot;{selectedCourse?.name}&quot;? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDeleteModal(false)} disabled={isLoading}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteCourse} 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete Course'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}

// Course Form Component
const CourseForm = ({ course, onSubmit, onCancel, isLoading }: {
  course: typeof dummyCourses[0] | null
  onSubmit: (courseData: typeof dummyCourses[0]) => void
  onCancel: () => void
  isLoading: boolean
}) => {
  const [formData, setFormData] = useState({
    name: course?.name || '',
    code: course?.code || '',
    duration: course?.duration || '',
    fees: course?.fees || 0,
    university: course?.university || '',
    location: course?.location || '',
    type: course?.type || 'Undergraduate',
    specialization: course?.specialization || '',
    status: course?.status || 'active',
    seats: course?.seats || 0,
    description: course?.description || '',
    eligibility: course?.eligibility || '',
    curriculum: course?.curriculum || [],
    faculty: course?.faculty || []
  })

  const [curriculumInput, setCurriculumInput] = useState('')
  const [facultyInput, setFacultyInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const completeData = {
      ...formData,
      id: course?.id || Date.now(),
      enrolled: course?.enrolled || 0,
      rating: course?.rating || 0,
      createdAt: course?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    onSubmit(completeData)
  }

  const addCurriculumItem = () => {
    if (curriculumInput.trim()) {
      setFormData({
        ...formData,
        curriculum: [...formData.curriculum, curriculumInput.trim()]
      })
      setCurriculumInput('')
    }
  }

  const removeCurriculumItem = (index: number) => {
    setFormData({
      ...formData,
      curriculum: formData.curriculum.filter((_, i) => i !== index)
    })
  }

  const addFacultyItem = () => {
    if (facultyInput.trim()) {
      setFormData({
        ...formData,
        faculty: [...formData.faculty, facultyInput.trim()]
      })
      setFacultyInput('')
    }
  }

  const removeFacultyItem = (index: number) => {
    setFormData({
      ...formData,
      faculty: formData.faculty.filter((_, i) => i !== index)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Course Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="code">Course Code</Label>
          <Input
            id="code"
            value={formData.code}
            onChange={(e) => setFormData({...formData, code: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            placeholder="e.g., 3 Years"
            required
          />
        </div>
        <div>
          <Label htmlFor="fees">Fees (₹)</Label>
          <Input
            id="fees"
            type="number"
            value={formData.fees}
            onChange={(e) => setFormData({...formData, fees: parseInt(e.target.value)})}
            required
          />
        </div>
        <div>
          <Label htmlFor="university">University</Label>
          <Input
            id="university"
            value={formData.university}
            onChange={(e) => setFormData({...formData, university: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Course Type</Label>
          <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Undergraduate">Undergraduate</SelectItem>
              <SelectItem value="Post Graduate">Post Graduate</SelectItem>
              <SelectItem value="Doctorate">Doctorate</SelectItem>
              <SelectItem value="Diploma">Diploma</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="specialization">Specialization</Label>
          <Input
            id="specialization"
            value={formData.specialization}
            onChange={(e) => setFormData({...formData, specialization: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="seats">Total Seats</Label>
          <Input
            id="seats"
            type="number"
            value={formData.seats}
            onChange={(e) => setFormData({...formData, seats: parseInt(e.target.value)})}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={3}
          required
        />
      </div>

      <div>
        <Label htmlFor="eligibility">Eligibility Criteria</Label>
        <Textarea
          id="eligibility"
          value={formData.eligibility}
          onChange={(e) => setFormData({...formData, eligibility: e.target.value})}
          rows={2}
          required
        />
      </div>

      <div>
        <Label>Curriculum</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={curriculumInput}
              onChange={(e) => setCurriculumInput(e.target.value)}
              placeholder="Add curriculum item"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCurriculumItem())}
            />
            <Button type="button" onClick={addCurriculumItem} variant="outline">
              Add
            </Button>
          </div>
          <div className="space-y-1">
            {formData.curriculum.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <span className="text-sm">{item}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCurriculumItem(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Label>Faculty</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={facultyInput}
              onChange={(e) => setFacultyInput(e.target.value)}
              placeholder="Add faculty member"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFacultyItem())}
            />
            <Button type="button" onClick={addFacultyItem} variant="outline">
              Add
            </Button>
          </div>
          <div className="space-y-1">
            {formData.faculty.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <span className="text-sm">{item}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFacultyItem(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {course ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            course ? 'Update Course' : 'Create Course'
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}

export default CampusCoursePage