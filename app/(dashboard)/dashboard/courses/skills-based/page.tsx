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
  Code,
  Users,
  BookOpen,
  DollarSign,
  Star,
  Monitor,
  Database,
  Smartphone,
  Palette,
  BarChart3,
  Globe,
  Shield,
  Zap,
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

// Dummy data for skills-based courses
const dummySkillsCourses = [
  {
    id: 1,
    name: "Full Stack Web Development",
    code: "FSWD001",
    duration: "6 Months",
    fees: 45000,
    category: "Web Development",
    level: "Beginner to Advanced",
    status: "active",
    seats: 30,
    enrolled: 25,
    rating: 4.9,
    description: "Complete web development course covering frontend, backend, and database technologies.",
    prerequisites: "Basic computer knowledge, HTML/CSS basics preferred",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    projects: ["E-commerce Website", "Social Media App", "Task Management System"],
    instructor: "Rajesh Kumar",
    platform: "Online + Hands-on Labs",
    createdAt: "2024-01-15",
    updatedAt: "2024-03-15"
  },
  {
    id: 2,
    name: "Data Analytics with Python",
    code: "DAP001",
    duration: "4 Months",
    fees: 35000,
    category: "Data Science",
    level: "Intermediate",
    status: "active",
    seats: 25,
    enrolled: 20,
    rating: 4.8,
    description: "Learn data analysis, visualization, and machine learning using Python and popular libraries.",
    prerequisites: "Basic programming knowledge, Mathematics background helpful",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter"],
    projects: ["Sales Analysis Dashboard", "Customer Segmentation", "Predictive Model"],
    instructor: "Priya Sharma",
    platform: "Online + Project-based",
    createdAt: "2024-01-10",
    updatedAt: "2024-03-10"
  },
  {
    id: 3,
    name: "Mobile App Development (React Native)",
    code: "MAD001",
    duration: "5 Months",
    fees: 40000,
    category: "Mobile Development",
    level: "Intermediate",
    status: "active",
    seats: 20,
    enrolled: 18,
    rating: 4.7,
    description: "Build cross-platform mobile applications using React Native framework.",
    prerequisites: "JavaScript knowledge, React basics preferred",
    skills: ["React Native", "JavaScript", "Redux", "Firebase", "APIs", "Mobile UI/UX"],
    projects: ["Food Delivery App", "Fitness Tracker", "Chat Application"],
    instructor: "Amit Patel",
    platform: "Online + Live Coding",
    createdAt: "2024-01-12",
    updatedAt: "2024-03-12"
  },
  {
    id: 4,
    name: "UI/UX Design Masterclass",
    code: "UXD001",
    duration: "3 Months",
    fees: 30000,
    category: "Design",
    level: "Beginner to Intermediate",
    status: "active",
    seats: 15,
    enrolled: 12,
    rating: 4.6,
    description: "Master user interface and user experience design principles and tools.",
    prerequisites: "Creative mindset, Basic design sense",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
    projects: ["E-commerce App Design", "SaaS Dashboard", "Mobile App Prototype"],
    instructor: "Sneha Reddy",
    platform: "Online + Design Reviews",
    createdAt: "2024-01-08",
    updatedAt: "2024-03-08"
  },
  {
    id: 5,
    name: "Cloud Computing with AWS",
    code: "CCA001",
    duration: "4 Months",
    fees: 50000,
    category: "Cloud Computing",
    level: "Intermediate to Advanced",
    status: "active",
    seats: 18,
    enrolled: 15,
    rating: 4.8,
    description: "Learn cloud architecture, deployment, and management using Amazon Web Services.",
    prerequisites: "Basic Linux knowledge, Networking fundamentals",
    skills: ["AWS EC2", "S3", "Lambda", "RDS", "CloudFormation", "VPC", "IAM"],
    projects: ["Scalable Web App", "Data Pipeline", "Serverless API"],
    instructor: "Vikram Singh",
    platform: "Online + AWS Labs",
    createdAt: "2024-01-05",
    updatedAt: "2024-03-05"
  },
  {
    id: 6,
    name: "Digital Marketing & SEO",
    code: "DMS001",
    duration: "3 Months",
    fees: 25000,
    category: "Digital Marketing",
    level: "Beginner",
    status: "active",
    seats: 35,
    enrolled: 30,
    rating: 4.5,
    description: "Comprehensive digital marketing course covering SEO, social media, and analytics.",
    prerequisites: "Basic computer skills, Marketing interest",
    skills: ["SEO", "Google Analytics", "Social Media Marketing", "Content Marketing", "PPC"],
    projects: ["SEO Campaign", "Social Media Strategy", "Marketing Analytics Report"],
    instructor: "Anita Desai",
    platform: "Online + Case Studies",
    createdAt: "2024-01-03",
    updatedAt: "2024-03-03"
  },
  {
    id: 7,
    name: "Cybersecurity Fundamentals",
    code: "CSF001",
    duration: "4 Months",
    fees: 40000,
    category: "Cybersecurity",
    level: "Beginner to Intermediate",
    status: "active",
    seats: 22,
    enrolled: 19,
    rating: 4.7,
    description: "Learn cybersecurity principles, ethical hacking, and security best practices.",
    prerequisites: "Basic networking knowledge, Linux familiarity",
    skills: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Tools", "Incident Response"],
    projects: ["Security Assessment", "Vulnerability Report", "Security Policy"],
    instructor: "Rohit Gupta",
    platform: "Online + Virtual Labs",
    createdAt: "2024-01-20",
    updatedAt: "2024-03-20"
  },
  {
    id: 8,
    name: "DevOps & CI/CD Pipeline",
    code: "DCP001",
    duration: "5 Months",
    fees: 45000,
    category: "DevOps",
    level: "Intermediate to Advanced",
    status: "active",
    seats: 16,
    enrolled: 14,
    rating: 4.9,
    description: "Master DevOps practices, automation, and continuous integration/deployment.",
    prerequisites: "Linux knowledge, Basic programming, Git familiarity",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"],
    projects: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring Setup"],
    instructor: "Kavita Joshi",
    platform: "Online + Hands-on Labs",
    createdAt: "2024-01-18",
    updatedAt: "2024-03-18"
  }
]

const courseCategories = ["All", "Web Development", "Data Science", "Mobile Development", "Design", "Cloud Computing", "Digital Marketing", "Cybersecurity", "DevOps"]
const courseLevels = ["All", "Beginner", "Intermediate", "Advanced", "Beginner to Intermediate", "Intermediate to Advanced", "Beginner to Advanced"]
const courseStatuses = ["All", "active", "inactive", "suspended"]
const platforms = ["All", "Online + Hands-on Labs", "Online + Project-based", "Online + Live Coding", "Online + Design Reviews", "Online + AWS Labs", "Online + Case Studies", "Online + Virtual Labs"]

const SkillsBasedPage = () => {
  const [courses, setCourses] = useState(dummySkillsCourses)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<typeof dummySkillsCourses[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
      const matchesStatus = selectedStatus === 'All' || course.status === selectedStatus
      const matchesPlatform = selectedPlatform === 'All' || course.platform === selectedPlatform
      
      return matchesSearch && matchesCategory && matchesLevel && matchesStatus && matchesPlatform
    })
  }, [courses, searchTerm, selectedCategory, selectedLevel, selectedStatus, selectedPlatform])

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex)

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedLevel, selectedStatus, selectedPlatform])

  const handleUpdateCourse = async (courseId: number, updatedCourse: typeof dummySkillsCourses[0]) => {
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

  const handleAddCourse = async (newCourse: typeof dummySkillsCourses[0]) => {
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

  const openViewModal = (course: typeof dummySkillsCourses[0]) => {
    setSelectedCourse(course)
    setShowViewModal(true)
  }

  const openEditModal = (course: typeof dummySkillsCourses[0]) => {
    setSelectedCourse(course)
    setShowEditModal(true)
  }

  const openDeleteModal = (course: typeof dummySkillsCourses[0]) => {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return <Globe className="w-4 h-4" />
      case 'Data Science': return <BarChart3 className="w-4 h-4" />
      case 'Mobile Development': return <Smartphone className="w-4 h-4" />
      case 'Design': return <Palette className="w-4 h-4" />
      case 'Cloud Computing': return <Database className="w-4 h-4" />
      case 'Digital Marketing': return <Monitor className="w-4 h-4" />
      case 'Cybersecurity': return <Shield className="w-4 h-4" />
      case 'DevOps': return <Zap className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return 'default'
      case 'Data Science': return 'warning'
      case 'Mobile Development': return 'secondary'
      case 'Design': return 'destructive'
      case 'Cloud Computing': return 'outline'
      case 'Digital Marketing': return 'default'
      case 'Cybersecurity': return 'destructive'
      case 'DevOps': return 'warning'
      default: return 'secondary'
    }
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Skills-Based Courses</h1>
            <p className="text-muted-foreground">Manage practical skills courses like web development, data analytics, and more</p>
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
                <Code className="w-8 h-8 text-primary" />
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
                  placeholder="Search courses, skills, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {courseCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  {courseLevels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level === 'All' ? 'All Levels' : level}
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

              {/* Platform Filter */}
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map(platform => (
                    <SelectItem key={platform} value={platform}>
                      {platform === 'All' ? 'All Platforms' : platform}
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
                      <Badge variant={getCategoryColor(course.category) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {getCategoryIcon(course.category)}
                        <span className="ml-1">{course.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{course.code} • {course.level}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
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
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Platform:</span>
                      <span className="text-sm font-medium">{course.platform}</span>
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
                  <TableHead>Category</TableHead>
                  <TableHead>Level</TableHead>
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
                        <p className="text-sm text-muted-foreground">{course.code} • {course.instructor}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getCategoryColor(course.category) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                        {getCategoryIcon(course.category)}
                        <span className="ml-1">{course.category}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{course.level}</TableCell>
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
                Complete course information and skills details.
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
                        <span className="text-muted-foreground">Category:</span>
                        <Badge variant={getCategoryColor(selectedCourse.category) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                          {getCategoryIcon(selectedCourse.category)}
                          <span className="ml-1">{selectedCourse.category}</span>
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-medium">{selectedCourse.level}</span>
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
                      <CardTitle>Course Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
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
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{selectedCourse.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Platform:</span>
                        <span className="font-medium">{selectedCourse.platform}</span>
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

                {/* Prerequisites */}
                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedCourse.prerequisites}</p>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills You&apos;ll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedCourse.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <Code className="w-4 h-4 text-primary" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.projects.map((project, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle>Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{selectedCourse.instructor}</span>
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
              <DialogTitle>Add New Skills-Based Course</DialogTitle>
              <DialogDescription>
                Create a new skills-based course with all required information.
              </DialogDescription>
            </DialogHeader>
            <SkillsCourseForm
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
              <DialogTitle>Edit Skills-Based Course</DialogTitle>
              <DialogDescription>
                Update course information and details.
              </DialogDescription>
            </DialogHeader>
            {selectedCourse && (
              <SkillsCourseForm
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

// Skills Course Form Component
const SkillsCourseForm = ({ course, onSubmit, onCancel, isLoading }: {
  course: typeof dummySkillsCourses[0] | null
  onSubmit: (courseData: typeof dummySkillsCourses[0]) => void
  onCancel: () => void
  isLoading: boolean
}) => {
  const [formData, setFormData] = useState({
    name: course?.name || '',
    code: course?.code || '',
    duration: course?.duration || '',
    fees: course?.fees || 0,
    category: course?.category || 'Web Development',
    level: course?.level || 'Beginner',
    status: course?.status || 'active',
    seats: course?.seats || 0,
    description: course?.description || '',
    prerequisites: course?.prerequisites || '',
    skills: course?.skills || [],
    projects: course?.projects || [],
    instructor: course?.instructor || '',
    platform: course?.platform || 'Online + Hands-on Labs'
  })

  const [skillsInput, setSkillsInput] = useState('')
  const [projectsInput, setProjectsInput] = useState('')

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

  const addSkill = () => {
    if (skillsInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillsInput.trim()]
      })
      setSkillsInput('')
    }
  }

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    })
  }

  const addProject = () => {
    if (projectsInput.trim()) {
      setFormData({
        ...formData,
        projects: [...formData.projects, projectsInput.trim()]
      })
      setProjectsInput('')
    }
  }

  const removeProject = (index: number) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter((_, i) => i !== index)
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
            placeholder="e.g., 6 Months"
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
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Mobile Development">Mobile Development</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
              <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="level">Level</Label>
          <Select value={formData.level} onValueChange={(value) => setFormData({...formData, level: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Beginner to Intermediate">Beginner to Intermediate</SelectItem>
              <SelectItem value="Intermediate to Advanced">Intermediate to Advanced</SelectItem>
              <SelectItem value="Beginner to Advanced">Beginner to Advanced</SelectItem>
            </SelectContent>
          </Select>
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
        <div>
          <Label htmlFor="instructor">Instructor</Label>
          <Input
            id="instructor"
            value={formData.instructor}
            onChange={(e) => setFormData({...formData, instructor: e.target.value})}
            required
          />
        </div>
        <div>
          <Label htmlFor="platform">Platform</Label>
          <Select value={formData.platform} onValueChange={(value) => setFormData({...formData, platform: value})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Online + Hands-on Labs">Online + Hands-on Labs</SelectItem>
              <SelectItem value="Online + Project-based">Online + Project-based</SelectItem>
              <SelectItem value="Online + Live Coding">Online + Live Coding</SelectItem>
              <SelectItem value="Online + Design Reviews">Online + Design Reviews</SelectItem>
              <SelectItem value="Online + AWS Labs">Online + AWS Labs</SelectItem>
              <SelectItem value="Online + Case Studies">Online + Case Studies</SelectItem>
              <SelectItem value="Online + Virtual Labs">Online + Virtual Labs</SelectItem>
            </SelectContent>
          </Select>
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
        <Label htmlFor="prerequisites">Prerequisites</Label>
        <Textarea
          id="prerequisites"
          value={formData.prerequisites}
          onChange={(e) => setFormData({...formData, prerequisites: e.target.value})}
          rows={2}
          required
        />
      </div>

      <div>
        <Label>Skills You&apos;ll Learn</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="Add skill"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
            />
            <Button type="button" onClick={addSkill} variant="outline">
              Add
            </Button>
          </div>
          <div className="space-y-1">
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <span className="text-sm">{skill}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSkill(index)}
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
        <Label>Projects</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={projectsInput}
              onChange={(e) => setProjectsInput(e.target.value)}
              placeholder="Add project"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addProject())}
            />
            <Button type="button" onClick={addProject} variant="outline">
              Add
            </Button>
          </div>
          <div className="space-y-1">
            {formData.projects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <span className="text-sm">{project}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(index)}
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

export default SkillsBasedPage