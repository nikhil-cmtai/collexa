"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Users, Award, BookOpen, DollarSign, CheckCircle, Info } from "lucide-react"

interface CourseDetailsProps {
  course: {
    id: string
    title: string
    university: string
    level: string
    mode: string
    duration: string
    tags: string[]
  }
  children: React.ReactNode
}

export default function CourseDetails({ course, children }: CourseDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Mock detailed course data - in real app, this would come from API
  const courseDetails = {
    ...course,
    description: "This comprehensive course provides students with in-depth knowledge and practical skills in their chosen field. The curriculum is designed by industry experts and academic professionals to ensure students are well-prepared for their future careers.",
    overview: "Our campus courses offer a perfect blend of theoretical knowledge and practical application. Students will have access to state-of-the-art facilities, experienced faculty, and industry partnerships that provide real-world exposure.",
    curriculum: [
      "Foundation Modules (First Semester)",
      "Core Specialization Courses",
      "Elective Subjects",
      "Industry Projects",
      "Internship Program",
      "Capstone Project",
      "Research Methodology",
      "Professional Development"
    ],
    eligibility: [
      "Minimum 50% marks in qualifying examination",
      "Valid entrance exam score (if applicable)",
      "English proficiency certificate",
      "Medical fitness certificate",
      "Character certificate from previous institution"
    ],
    admissionProcess: [
      "Online Application Submission",
      "Document Verification",
      "Entrance Examination",
      "Personal Interview",
      "Merit List Publication",
      "Admission Confirmation",
      "Fee Payment",
      "Documentation Completion"
    ],
    fees: {
      tuition: "₹2,50,000",
      registration: "₹5,000",
      library: "₹3,000",
      laboratory: "₹8,000",
      total: "₹2,66,000"
    },
    facilities: [
      "Modern Classrooms with Smart Boards",
      "Well-equipped Laboratories",
      "Digital Library Access",
      "Computer Labs with Latest Software",
      "Sports and Recreation Facilities",
      "Hostel Accommodation",
      "Cafeteria and Food Court",
      "Medical Center",
      "Career Guidance Cell",
      "Placement Assistance"
    ],
    faculty: [
      "Dr. Sarah Johnson - Professor & Head",
      "Prof. Michael Chen - Associate Professor",
      "Dr. Emily Rodriguez - Assistant Professor",
      "Prof. David Kumar - Industry Expert",
      "Dr. Lisa Wang - Research Coordinator"
    ],
    placement: {
      averagePackage: "₹8.5 LPA",
      highestPackage: "₹15.2 LPA",
      placementRate: "95%",
      topRecruiters: [
        "Google", "Microsoft", "Amazon", "TCS", "Infosys",
        "Wipro", "Accenture", "IBM", "Deloitte", "EY"
      ]
    },
    importantDates: [
      { event: "Application Start Date", date: "January 15, 2024" },
      { event: "Last Date to Apply", date: "March 31, 2024" },
      { event: "Entrance Exam", date: "April 15, 2024" },
      { event: "Results Declaration", date: "May 1, 2024" },
      { event: "Admission Process", date: "May 15-30, 2024" },
      { event: "Course Commencement", date: "July 1, 2024" }
    ]
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[var(--heading-color)]">
            {courseDetails.title}
          </DialogTitle>
          <p className="text-lg text-[var(--muted-text)]">
            {courseDetails.university}
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Course Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--primary)]" />
                Course Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-color)] leading-relaxed">
                {courseDetails.description}
              </p>
              <Separator className="my-4" />
              <p className="text-[var(--text-color)] leading-relaxed">
                {courseDetails.overview}
              </p>
            </CardContent>
          </Card>

          {/* Course Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--primary)]" />
                Course Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <p className="font-medium">Level</p>
                    <p className="text-sm text-[var(--muted-text)]">{courseDetails.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-[var(--muted-text)]">{courseDetails.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <p className="font-medium">Mode</p>
                    <p className="text-sm text-[var(--muted-text)]">{courseDetails.mode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-[var(--primary)]" />
                  <div>
                    <p className="font-medium">Intake</p>
                    <p className="text-sm text-[var(--muted-text)]">60 Students</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <p className="font-medium mb-2">Course Tags</p>
                <div className="flex flex-wrap gap-2">
                  {courseDetails.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-[var(--surface)]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Curriculum */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--primary)]" />
                Curriculum Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {courseDetails.curriculum.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Eligibility & Admission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--primary)]" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseDetails.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[var(--primary)]" />
                  Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {courseDetails.admissionProcess.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="bg-[var(--primary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Fees Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--primary)]" />
                Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuition Fee</span>
                    <span className="font-medium">{courseDetails.fees.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration Fee</span>
                    <span className="font-medium">{courseDetails.fees.registration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Fee</span>
                    <span className="font-medium">{courseDetails.fees.library}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laboratory Fee</span>
                    <span className="font-medium">{courseDetails.fees.laboratory}</span>
                  </div>
                </div>
                <div className="border-l pl-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Fee</span>
                    <span className="text-[var(--primary)]">{courseDetails.fees.total}</span>
                  </div>
                  <p className="text-xs text-[var(--muted-text)] mt-2">
                    * Fees are subject to change. Please check with the university for the latest fee structure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facilities & Faculty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  Campus Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {courseDetails.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[var(--primary)]" />
                  Faculty Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {courseDetails.faculty.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                      <span className="text-sm">{member}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Placement Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--primary)]" />
                Placement Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--primary)]">{courseDetails.placement.averagePackage}</p>
                  <p className="text-sm text-[var(--muted-text)]">Average Package</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--primary)]">{courseDetails.placement.highestPackage}</p>
                  <p className="text-sm text-[var(--muted-text)]">Highest Package</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--primary)]">{courseDetails.placement.placementRate}</p>
                  <p className="text-sm text-[var(--muted-text)]">Placement Rate</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <p className="font-medium mb-2">Top Recruiters</p>
                <div className="flex flex-wrap gap-2">
                  {courseDetails.placement.topRecruiters.map((recruiter, index) => (
                    <Badge key={index} variant="outline" className="border-[var(--primary)] text-[var(--primary)]">
                      {recruiter}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--primary)]" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courseDetails.importantDates.map((date, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--border-color)] last:border-b-0">
                    <span className="font-medium">{date.event}</span>
                    <span className="text-sm text-[var(--muted-text)]">{date.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button className="bg-[var(--primary)] hover:bg-[var(--primary)]/90">
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
