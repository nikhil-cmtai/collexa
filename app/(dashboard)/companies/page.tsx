'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { 
  Calendar,
  Users,
  FileText,
  Briefcase,
  Activity,
  TrendingUp,
  TrendingDown,
  Plus,
  Star,
  Building,
  GraduationCap,
  UserCheck,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const CompanyDashboard = () => {
  const router = useRouter()

  // Company-specific stats
  const stats = [
    { 
      name: 'Active Job Postings', 
      value: '24', 
      icon: Briefcase, 
      change: '+5', 
      changeType: 'positive',
      color: 'blue',
      route: '/companies/jobs'
    },
    { 
      name: 'Total Applications', 
      value: '1,245', 
      icon: FileText, 
      change: '+89', 
      changeType: 'positive',
      color: 'emerald',
      route: '/companies/applications'
    },
    { 
      name: 'Internship Programs', 
      value: '12', 
      icon: GraduationCap, 
      change: '+3', 
      changeType: 'positive',
      color: 'purple',
      route: '/companies/internships'
    },
    { 
      name: 'Placements This Year', 
      value: '156', 
      icon: UserCheck, 
      change: '+23', 
      changeType: 'positive',
      color: 'green',
      route: '/companies/placements'
    },
    { 
      name: 'Company Rating', 
      value: '4.7', 
      icon: Star, 
      change: '+0.3', 
      changeType: 'positive',
      color: 'yellow',
      route: '/companies/reviews'
    },
    { 
      name: 'Upcoming Events', 
      value: '8', 
      icon: Calendar, 
      change: '+2', 
      changeType: 'positive',
      color: 'indigo',
      route: '/companies/events'
    },
  ]


  // Recent job applications
  const recentApplications = [
    { 
      time: '09:00 AM', 
      candidate: 'Rajesh Kumar', 
      position: 'Software Engineer', 
      status: 'Shortlisted',
      experience: '3 years'
    },
    { 
      time: '10:30 AM', 
      candidate: 'Priya Sharma', 
      position: 'Data Scientist', 
      status: 'Under Review',
      experience: '2 years'
    },
    { 
      time: '12:00 PM', 
      candidate: 'Amit Patel', 
      position: 'Product Manager', 
      status: 'Interview Scheduled',
      experience: '5 years'
    },
    { 
      time: '02:00 PM', 
      candidate: 'Sneha Gupta', 
      position: 'UX Designer', 
      status: 'Rejected',
      experience: '1 year'
    },
    { 
      time: '03:30 PM', 
      candidate: 'Vikram Singh', 
      position: 'DevOps Engineer', 
      status: 'Hired',
      experience: '4 years'
    }
  ]

  // Recent placements
  const recentPlacements = [
    { 
      candidate: 'Rajesh Kumar', 
      position: 'Senior Software Engineer', 
      salary: '₹12,00,000', 
      date: 'Today',
      status: 'Placed'
    },
    { 
      candidate: 'Priya Sharma', 
      position: 'Data Scientist', 
      salary: '₹8,50,000', 
      date: 'Yesterday',
      status: 'Placed'
    },
    { 
      candidate: 'Amit Patel', 
      position: 'Product Manager', 
      salary: '₹15,00,000', 
      date: '2 days ago',
      status: 'Placed'
    },
    { 
      candidate: 'Sneha Gupta', 
      position: 'UX Designer', 
      salary: '₹6,50,000', 
      date: '3 days ago',
      status: 'Placed'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
      emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
      green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
      orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400',
      indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400',
      yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400',
      red: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'Shortlisted': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Under Review': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Interview Scheduled': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Hired': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      'Rejected': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Placed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    }
    return colors[status as keyof typeof colors] || colors['Under Review']
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back, TechCorp Solutions! Here&apos;s your recruitment and placement overview.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push(stat.route)}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.changeType === 'positive' ? (
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                      ) : stat.changeType === 'negative' ? (
                        <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                      ) : (
                        <Activity className="w-4 h-4 text-gray-600 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 
                        stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {stat.changeType === 'neutral' ? '' : 'from last month'}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Job Applications */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Job Applications
            </CardTitle>
            <CardDescription>Latest applications received for your job postings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{application.candidate}</p>
                      <p className="text-sm text-muted-foreground">{application.position}</p>
                      <p className="text-xs text-muted-foreground">{application.experience} • Applied at {application.time}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common recruitment tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950"
                onClick={() => router.push('/companies/jobs')}
              >
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Post Job</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-green-50 dark:hover:bg-green-950"
                onClick={() => router.push('/companies/internships')}
              >
                <GraduationCap className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Internship</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-950"
                onClick={() => router.push('/companies/applications')}
              >
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Applications</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-orange-50 dark:hover:bg-orange-950"
                onClick={() => router.push('/companies/events')}
              >
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">Events</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                onClick={() => router.push('/companies/placements')}
              >
                <UserCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium">Placements</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                onClick={() => router.push('/companies/settings')}
              >
                <Building className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium">Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Placements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Recent Placements
            </CardTitle>
            <CardDescription>Latest successful placements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPlacements.map((placement, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{placement.candidate}</p>
                      <p className="text-xs text-muted-foreground">{placement.position}</p>
                      <p className="text-xs text-muted-foreground">{placement.salary}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{placement.date}</p>
                    <Badge className={getStatusColor(placement.status)}>
                      {placement.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Company Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Company Status
            </CardTitle>
            <CardDescription>Your recruitment and placement overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Recruitment Active</p>
                    <p className="text-xs text-muted-foreground">All systems operational</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Online
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Active Job Postings</p>
                    <p className="text-xs text-muted-foreground">24 positions open</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Updated
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Pending Applications</p>
                    <p className="text-xs text-muted-foreground">89 applications to review</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Review
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Company Partnership</p>
                    <p className="text-xs text-muted-foreground">Valid until Dec 2025</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CompanyDashboard