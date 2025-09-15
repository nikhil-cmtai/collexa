'use client'

import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  Building2,
  Users,
  Briefcase,
  MapPin,
  Star,
  ChevronRight,
  FileText,
  UserCheck,
  Clock,
  UserX,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// Dummy company data with applications
const dummyCompanies = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    industry: "Technology",
    location: "Bangalore, India",
    totalApplications: 45,
    jobApplications: 32,
    internshipApplications: 13,
    hired: 8,
    underReview: 15,
    shortlisted: 12,
    rejected: 10,
    recentApplications: [
  {
    id: 1,
    candidateName: "Rajesh Kumar",
    position: "Senior Software Engineer",
        type: "job",
    status: "under_review",
    appliedDate: "2024-03-15",
        experience: "5 years"
  },
  {
    id: 2,
    candidateName: "Priya Sharma",
    position: "Data Scientist",
        type: "job",
    status: "shortlisted",
    appliedDate: "2024-03-14",
        experience: "3 years"
      }
    ]
  },
  {
    id: 2,
    name: "DataTech Inc",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
    industry: "Data Analytics",
    location: "Mumbai, India",
    totalApplications: 28,
    jobApplications: 18,
    internshipApplications: 10,
    hired: 5,
    underReview: 8,
    shortlisted: 10,
    rejected: 5,
    recentApplications: [
  {
    id: 3,
    candidateName: "Amit Patel",
    position: "Product Manager",
        type: "job",
    status: "interview_scheduled",
    appliedDate: "2024-03-13",
        experience: "6 years"
      }
    ]
  },
  {
    id: 3,
    name: "DesignStudio",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
    industry: "Design",
    location: "Pune, India",
    totalApplications: 22,
    jobApplications: 12,
    internshipApplications: 10,
    hired: 3,
    underReview: 6,
    shortlisted: 8,
    rejected: 5,
    recentApplications: [
  {
    id: 4,
    candidateName: "Sneha Gupta",
    position: "UX Designer",
        type: "job",
    status: "rejected",
    appliedDate: "2024-03-12",
        experience: "2 years"
      }
    ]
  },
  {
    id: 4,
    name: "CloudTech",
    logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop&crop=center",
    industry: "Cloud Services",
    location: "Hyderabad, India",
    totalApplications: 35,
    jobApplications: 25,
    internshipApplications: 10,
    hired: 7,
    underReview: 10,
    shortlisted: 12,
    rejected: 6,
    recentApplications: [
  {
    id: 5,
    candidateName: "Vikram Singh",
    position: "DevOps Engineer",
        type: "job",
    status: "hired",
    appliedDate: "2024-03-10",
        experience: "4 years"
      }
    ]
  },
  {
    id: 5,
    name: "EduTech Solutions",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    industry: "Education Technology",
    location: "Delhi, India",
    totalApplications: 18,
    jobApplications: 8,
    internshipApplications: 10,
    hired: 2,
    underReview: 4,
    shortlisted: 6,
    rejected: 6,
    recentApplications: [
      {
        id: 6,
        candidateName: "Rahul Verma",
        position: "Frontend Developer Intern",
        type: "internship",
        status: "under_review",
        appliedDate: "2024-03-11",
        experience: "Fresher"
      }
    ]
  },
  {
    id: 6,
    name: "FinTech Innovations",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    industry: "Financial Technology",
    location: "Chennai, India",
    totalApplications: 42,
    jobApplications: 30,
    internshipApplications: 12,
    hired: 9,
    underReview: 12,
    shortlisted: 15,
    rejected: 6,
    recentApplications: [
      {
        id: 7,
        candidateName: "Anita Reddy",
        position: "Backend Developer",
        type: "job",
        status: "shortlisted",
        appliedDate: "2024-03-09",
        experience: "4 years"
      }
    ]
  }
]

const ApplicationsPage = () => {
  const router = useRouter()
  const [companies] = useState(dummyCompanies)
  const [searchTerm, setSearchTerm] = useState('')

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.location.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearch
    })
  }, [companies, searchTerm])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under_review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'shortlisted': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'interview_scheduled': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'hired': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
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

  const handleCompanyClick = (companyId: number) => {
    router.push(`/dashboard/applications/${companyId}`)
  }

  // Calculate total stats
  const totalStats = useMemo(() => {
    return companies.reduce((acc, company) => ({
      totalApplications: acc.totalApplications + company.totalApplications,
      totalJobs: acc.totalJobs + company.jobApplications,
      totalInternships: acc.totalInternships + company.internshipApplications,
      totalHired: acc.totalHired + company.hired,
      totalUnderReview: acc.totalUnderReview + company.underReview,
      totalShortlisted: acc.totalShortlisted + company.shortlisted,
      totalRejected: acc.totalRejected + company.rejected
    }), {
      totalApplications: 0,
      totalJobs: 0,
      totalInternships: 0,
      totalHired: 0,
      totalUnderReview: 0,
      totalShortlisted: 0,
      totalRejected: 0
    })
  }, [companies])

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
          <h1 className="text-3xl font-bold text-foreground">Company Applications Overview</h1>
          <p className="text-muted-foreground">Monitor applications across all companies and positions</p>
        </div>
        </div>

      {/* Overall Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalApplications}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                <p className="text-sm text-muted-foreground">Job Applications</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalJobs}</p>
              </div>
              <Briefcase className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                <p className="text-sm text-muted-foreground">Internship Applications</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalInternships}</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                <p className="text-sm text-muted-foreground">Total Hired</p>
                <p className="text-2xl font-bold text-foreground">{totalStats.totalHired}</p>
              </div>
              <UserCheck className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
        </div>

      {/* Search */}
        <Card>
          <CardContent className="p-6">
          <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
              placeholder="Search companies by name, industry, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
            </div>
          </CardContent>
        </Card>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map(company => (
          <Card 
            key={company.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
            onClick={() => handleCompanyClick(company.id)}
          >
            <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      {company.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                      </Avatar>
                      <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {company.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {company.location}
                    </CardDescription>
                  </div>
                    </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">{company.totalApplications}</p>
                  <p className="text-xs text-muted-foreground">Total Applications</p>
                    </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">{company.hired}</p>
                  <p className="text-xs text-muted-foreground">Hired</p>
                      </div>
                    </div>

              {/* Application Types */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">Jobs</span>
                  </div>
                  <span className="text-sm font-medium">{company.jobApplications}</span>
                </div>
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-muted-foreground">Internships</span>
                  </div>
                  <span className="text-sm font-medium">{company.internshipApplications}</span>
                </div>
              </div>

              {/* Status Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Under Review</span>
                        </div>
                  <span className="text-sm font-medium">{company.underReview}</span>
                        </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Shortlisted</span>
                        </div>
                  <span className="text-sm font-medium">{company.shortlisted}</span>
                        </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserX className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-muted-foreground">Rejected</span>
                  </div>
                  <span className="text-sm font-medium">{company.rejected}</span>
                        </div>
                      </div>

              {/* Recent Applications */}
              {company.recentApplications.length > 0 && (
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Recent Applications</p>
                  <div className="space-y-2">
                    {company.recentApplications.slice(0, 2).map(app => (
                      <div key={app.id} className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium">{app.candidateName}</p>
                          <p className="text-muted-foreground">{app.position}</p>
                        </div>
                        <Badge className={`text-xs ${getStatusColor(app.status)}`}>
                          {getStatusText(app.status)}
                          </Badge>
                      </div>
                    ))}
                </div>
              </div>
            )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredCompanies.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No companies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or check back later for new companies.
            </p>
          </CardContent>
        </Card>
      )}

    </div>
  )
}

export default ApplicationsPage