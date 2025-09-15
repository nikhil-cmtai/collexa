'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  BookOpen,
  Award,
  TrendingUp,
  Edit,
  Settings
} from 'lucide-react'

export default function ProfilePage() {



  const mockProfileData = {
    name: "Priya Sharma",
    email: "priya.sharma@collexa.edu",
    phone: "+91 98765 43211",
    location: "Delhi, India",
    joinDate: "2021-02-10",
    bio: "Computer Science student passionate about web development and data science. Always eager to learn new technologies and contribute to meaningful projects.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    enrolledCourses: 5,
    completedCourses: 3,
    averageRating: 4.8,
    totalSpent: 25000,
    achievements: [
      { title: "Top Performer", description: "Achieved 95% in Full Stack Development", date: "2024-02-15" },
      { title: "Project Excellence", description: "Best Capstone Project Award", date: "2024-01-20" },
      { title: "Peer Recognition", description: "Most Helpful Student", date: "2023-12-10" }
    ],
    enrolledCoursesList: [
      { name: "Full Stack Web Development", progress: 100, status: "completed", rating: 5 },
      { name: "Data Science Fundamentals", progress: 85, status: "in-progress", rating: 0 },
      { name: "Machine Learning Basics", progress: 60, status: "in-progress", rating: 0 },
      { name: "React Advanced Concepts", progress: 0, status: "enrolled", rating: 0 },
      { name: "Python for Data Analysis", progress: 0, status: "enrolled", rating: 0 }
    ],
    jobApplications: [
      { company: "TechCorp Solutions", position: "Frontend Developer", status: "applied", date: "2024-03-10" },
      { company: "Microsoft India", position: "Software Engineer", status: "interview", date: "2024-03-08" },
      { company: "Google India", position: "Product Manager", status: "rejected", date: "2024-03-05" }
    ]
  }

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      enrolled: 'bg-yellow-100 text-yellow-800',
      applied: 'bg-gray-100 text-gray-800',
      interview: 'bg-blue-100 text-blue-800',
      rejected: 'bg-red-100 text-red-800',
      accepted: 'bg-green-100 text-green-800'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={mockProfileData.avatar} alt="Profile" />
              <AvatarFallback className="text-2xl">
                {mockProfileData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{mockProfileData.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{mockProfileData.bio}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {mockProfileData.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {mockProfileData.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {mockProfileData.location}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockProfileData.enrolledCourses}</p>
                  <p className="text-sm text-gray-600">Enrolled Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockProfileData.completedCourses}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockProfileData.averageRating}</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">₹{mockProfileData.totalSpent.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Spent</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="applications">Job Applications</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Track your learning progress and course completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProfileData.enrolledCoursesList.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{course.name}</h4>
                          <Badge className={getStatusColor(course.status)}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600">{course.progress}% Complete</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.rating > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                        )}
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
                <CardDescription>Track your job application status and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProfileData.jobApplications.map((application, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{application.position}</h4>
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{application.company}</p>
                        <p className="text-xs text-gray-500">Applied on: {application.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Certificates</CardTitle>
                <CardDescription>Your learning milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProfileData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Earned on: {achievement.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Certificate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
