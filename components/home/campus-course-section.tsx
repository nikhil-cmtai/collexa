"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

// Campus Course categories
const categories = [
  "Engineering",
  "Management", 
  "Technology",
  "Business",
  "Design",
  "Healthcare",
  "Arts",
  "Science",
]

// ======= Campus Courses Data =======
const coursesData = {
  Engineering: [
    {
      id: 1,
      title: "B.Tech Computer Science",
      instructor: "IIT Delhi",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.9,
      students: 1200,
      type: "B.Tech",
      isPopular: true,
      category: "Computer Science"
    },
    {
      id: 2,
      title: "B.Tech Mechanical",
      instructor: "IIT Bombay",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 950,
      type: "B.Tech",
      isPopular: true,
      category: "Mechanical"
    },
    {
      id: 3,
      title: "B.Tech Civil",
      instructor: "IIT Madras",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 800,
      type: "B.Tech",
      isPopular: false,
      category: "Civil"
    },
    {
      id: 4,
      title: "B.Tech Electrical",
      instructor: "IIT Kanpur",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 1100,
      type: "B.Tech",
      isPopular: true,
      category: "Electrical"
    },
    {
      id: 5,
      title: "M.Tech Computer Science",
      instructor: "IIT Delhi",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 300,
      type: "M.Tech",
      isPopular: true,
      category: "Computer Science"
    },
    {
      id: 6,
      title: "M.Tech Mechanical",
      instructor: "IIT Bombay",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 250,
      type: "M.Tech",
      isPopular: false,
      category: "Mechanical"
    },
    {
      id: 7,
      title: "B.Tech Chemical",
      instructor: "IIT Kharagpur",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 700,
      type: "B.Tech",
      isPopular: false,
      category: "Chemical"
    },
    {
      id: 8,
      title: "B.Tech Aerospace",
      instructor: "IIT Bombay",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 400,
      type: "B.Tech",
      isPopular: true,
      category: "Aerospace"
    },
  ],
  Management: [
    {
      id: 1,
      title: "BBA General",
      instructor: "IIM Ahmedabad",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 500,
      type: "BBA",
      isPopular: true,
      category: "General Management"
    },
    {
      id: 2,
      title: "BBA Finance",
      instructor: "IIM Bangalore",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 400,
      type: "BBA",
      isPopular: true,
      category: "Finance"
    },
    {
      id: 3,
      title: "BBA Marketing",
      instructor: "IIM Calcutta",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 350,
      type: "BBA",
      isPopular: false,
      category: "Marketing"
    },
    {
      id: 4,
      title: "MBA in Finance",
      instructor: "IIM Ahmedabad",
      instructorLogo: "🏛️",
      price: "₹25,00,000",
      originalPrice: "₹35,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 300,
      type: "MBA",
      isPopular: true,
      category: "Finance"
    },
    {
      id: 5,
      title: "MBA in Marketing",
      instructor: "IIM Bangalore",
      instructorLogo: "🏛️",
      price: "₹25,00,000",
      originalPrice: "₹35,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 280,
      type: "MBA",
      isPopular: true,
      category: "Marketing"
    },
    {
      id: 6,
      title: "MBA in Operations",
      instructor: "IIM Calcutta",
      instructorLogo: "🏛️",
      price: "₹25,00,000",
      originalPrice: "₹35,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 250,
      type: "MBA",
      isPopular: false,
      category: "Operations"
    },
    {
      id: 7,
      title: "MBA in HR",
      instructor: "IIM Lucknow",
      instructorLogo: "🏛️",
      price: "₹25,00,000",
      originalPrice: "₹35,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.6,
      students: 200,
      type: "MBA",
      isPopular: false,
      category: "Human Resources"
    },
    {
      id: 8,
      title: "Executive MBA",
      instructor: "IIM Indore",
      instructorLogo: "🏛️",
      price: "₹15,00,000",
      originalPrice: "₹25,00,000",
      duration: "1 Year",
      level: "Executive",
      rating: 4.8,
      students: 150,
      type: "Executive MBA",
      isPopular: true,
      category: "Executive"
    }
  ],
  Technology: [
    {
      id: 1,
      title: "BCA General",
      instructor: "DU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 800,
      type: "BCA",
      isPopular: true,
      category: "Computer Applications"
    },
    {
      id: 2,
      title: "BCA Data Science",
      instructor: "DU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 600,
      type: "BCA",
      isPopular: true,
      category: "Data Science"
    },
    {
      id: 3,
      title: "MCA General",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 400,
      type: "MCA",
      isPopular: true,
      category: "Computer Applications"
    },
    {
      id: 4,
      title: "MCA Data Science",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 350,
      type: "MCA",
      isPopular: true,
      category: "Data Science"
    },
    {
      id: 5,
      title: "M.Tech Data Science",
      instructor: "IIT Delhi",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 500,
      type: "M.Tech",
      isPopular: true,
      category: "Data Science"
    },
    {
      id: 6,
      title: "M.Tech AI/ML",
      instructor: "IIT Bombay",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 400,
      type: "M.Tech",
      isPopular: true,
      category: "AI/ML"
    },
    {
      id: 7,
      title: "M.Tech Cybersecurity",
      instructor: "IIT Madras",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 350,
      type: "M.Tech",
      isPopular: false,
      category: "Security"
    },
    {
      id: 8,
      title: "M.Tech Cloud Computing",
      instructor: "IIT Kanpur",
      instructorLogo: "🏛️",
      price: "₹3,00,000",
      originalPrice: "₹5,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.6,
      students: 300,
      type: "M.Tech",
      isPopular: true,
      category: "Cloud"
    }
  ],
  Business: [
    {
      id: 1,
      title: "B.Com General",
      instructor: "DU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,00,000",
      originalPrice: "₹2,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 2000,
      type: "B.Com",
      isPopular: true,
      category: "Commerce"
    },
    {
      id: 2,
      title: "B.Com Hons",
      instructor: "DU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,20,000",
      originalPrice: "₹2,50,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 1500,
      type: "B.Com Hons",
      isPopular: true,
      category: "Commerce"
    },
    {
      id: 3,
      title: "M.Com General",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 800,
      type: "M.Com",
      isPopular: true,
      category: "Commerce"
    },
    {
      id: 4,
      title: "M.Com Finance",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 600,
      type: "M.Com",
      isPopular: true,
      category: "Finance"
    },
    {
      id: 5,
      title: "Executive MBA",
      instructor: "IIM Ahmedabad",
      instructorLogo: "🏛️",
      price: "₹15,00,000",
      originalPrice: "₹25,00,000",
      duration: "1 Year",
      level: "Executive",
      rating: 4.8,
      students: 200,
      type: "Executive MBA",
      isPopular: true,
      category: "Analytics"
    },
    {
      id: 6,
      title: "Digital Marketing",
      instructor: "IIM Bangalore",
      instructorLogo: "🏛️",
      price: "₹8,00,000",
      originalPrice: "₹12,00,000",
      duration: "1 Year",
      level: "Executive",
      rating: 4.7,
      students: 300,
      type: "Certificate",
      isPopular: true,
      category: "Marketing"
    },
    {
      id: 7,
      title: "Project Management",
      instructor: "IIM Calcutta",
      instructorLogo: "🏛️",
      price: "₹6,00,000",
      originalPrice: "₹10,00,000",
      duration: "1 Year",
      level: "Executive",
      rating: 4.6,
      students: 250,
      type: "Certificate",
      isPopular: false,
      category: "Management"
    },
    {
      id: 8,
      title: "Supply Chain Management",
      instructor: "IIM Lucknow",
      instructorLogo: "🏛️",
      price: "₹7,00,000",
      originalPrice: "₹11,00,000",
      duration: "1 Year",
      level: "Executive",
      rating: 4.5,
      students: 180,
      type: "Certificate",
      isPopular: false,
      category: "Operations"
    }
  ],
  Design: [
    {
      id: 1,
      title: "B.Des Graphic Design",
      instructor: "NID Ahmedabad",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹3,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 150,
      type: "B.Des",
      isPopular: true,
      category: "Visual Design"
    },
    {
      id: 2,
      title: "B.Des UI/UX Design",
      instructor: "NID Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹3,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.9,
      students: 200,
      type: "B.Des",
      isPopular: true,
      category: "Digital Design"
    },
    {
      id: 3,
      title: "M.Des Product Design",
      instructor: "NID Delhi",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,50,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 80,
      type: "M.Des",
      isPopular: false,
      category: "Industrial Design"
    },
    {
      id: 4,
      title: "B.Des Fashion Design",
      instructor: "NIFT Delhi",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹3,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 300,
      type: "B.Des",
      isPopular: true,
      category: "Fashion"
    },
    {
      id: 5,
      title: "M.Des Fashion Design",
      instructor: "NIFT Delhi",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,50,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 120,
      type: "M.Des",
      isPopular: true,
      category: "Fashion"
    },
    {
      id: 6,
      title: "B.Des Interior Design",
      instructor: "NID Ahmedabad",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹3,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 180,
      type: "B.Des",
      isPopular: false,
      category: "Interior Design"
    },
    {
      id: 7,
      title: "B.Des Animation",
      instructor: "NID Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹3,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 160,
      type: "B.Des",
      isPopular: true,
      category: "Animation"
    },
    {
      id: 8,
      title: "M.Des Communication Design",
      instructor: "NID Delhi",
      instructorLogo: "🏛️",
      price: "₹2,50,000",
      originalPrice: "₹4,50,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 100,
      type: "M.Des",
      isPopular: true,
      category: "Communication"
    }
  ],
  Healthcare: [
    {
      id: 1,
      title: "MBBS",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹1,00,000",
      originalPrice: "₹2,00,000",
      duration: "5 Years",
      level: "Undergraduate",
      rating: 4.9,
      students: 200,
      type: "MBBS",
      isPopular: true,
      category: "Medicine"
    },
    {
      id: 2,
      title: "MD General Medicine",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "3 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 100,
      type: "MD",
      isPopular: true,
      category: "Medicine"
    },
    {
      id: 3,
      title: "B.Sc Nursing",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹50,000",
      originalPrice: "₹1,00,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 300,
      type: "B.Sc Nursing",
      isPopular: true,
      category: "Nursing"
    },
    {
      id: 4,
      title: "M.Sc Nursing",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹1,00,000",
      originalPrice: "₹2,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 150,
      type: "M.Sc Nursing",
      isPopular: false,
      category: "Nursing"
    },
    {
      id: 5,
      title: "B.Pharm",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹75,000",
      originalPrice: "₹1,50,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 250,
      type: "B.Pharm",
      isPopular: false,
      category: "Pharmacy"
    },
    {
      id: 6,
      title: "M.Pharm",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 120,
      type: "M.Pharm",
      isPopular: false,
      category: "Pharmacy"
    },
    {
      id: 7,
      title: "BPT",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹60,000",
      originalPrice: "₹1,20,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 180,
      type: "BPT",
      isPopular: false,
      category: "Physiotherapy"
    },
    {
      id: 8,
      title: "MPT",
      instructor: "AIIMS Delhi",
      instructorLogo: "🏛️",
      price: "₹1,20,000",
      originalPrice: "₹2,40,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.6,
      students: 100,
      type: "MPT",
      isPopular: false,
      category: "Physiotherapy"
    }
  ],
  Arts: [
    {
      id: 1,
      title: "BA English Literature",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹25,000",
      originalPrice: "₹50,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 150,
      type: "BA",
      isPopular: true,
      category: "English Literature"
    },
    {
      id: 2,
      title: "MA English Literature",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹50,000",
      originalPrice: "₹1,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 80,
      type: "MA",
      isPopular: true,
      category: "English Literature"
    },
    {
      id: 3,
      title: "BFA Fine Arts",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹30,000",
      originalPrice: "₹60,000",
      duration: "4 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 100,
      type: "BFA",
      isPopular: true,
      category: "Visual Arts"
    },
    {
      id: 4,
      title: "MFA Fine Arts",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹60,000",
      originalPrice: "₹1,20,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 50,
      type: "MFA",
      isPopular: false,
      category: "Visual Arts"
    },
    {
      id: 5,
      title: "BA Music",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹25,000",
      originalPrice: "₹50,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 80,
      type: "BA",
      isPopular: false,
      category: "Classical Music"
    },
    {
      id: 6,
      title: "MA Music",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹50,000",
      originalPrice: "₹1,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 40,
      type: "MA",
      isPopular: false,
      category: "Classical Music"
    },
    {
      id: 7,
      title: "BA Drama",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹25,000",
      originalPrice: "₹50,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.5,
      students: 60,
      type: "BA",
      isPopular: false,
      category: "Theatre"
    },
    {
      id: 8,
      title: "MA Drama",
      instructor: "JNU Delhi",
      instructorLogo: "🏛️",
      price: "₹50,000",
      originalPrice: "₹1,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.6,
      students: 30,
      type: "MA",
      isPopular: false,
      category: "Theatre"
    }
  ],
  Science: [
    {
      id: 1,
      title: "B.Sc Physics",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.8,
      students: 200,
      type: "B.Sc",
      isPopular: true,
      category: "Physics"
    },
    {
      id: 2,
      title: "M.Sc Physics",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 100,
      type: "M.Sc",
      isPopular: true,
      category: "Physics"
    },
    {
      id: 3,
      title: "B.Sc Chemistry",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.7,
      students: 180,
      type: "B.Sc",
      isPopular: true,
      category: "Chemistry"
    },
    {
      id: 4,
      title: "M.Sc Chemistry",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.8,
      students: 90,
      type: "M.Sc",
      isPopular: false,
      category: "Chemistry"
    },
    {
      id: 5,
      title: "B.Sc Mathematics",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.9,
      students: 150,
      type: "B.Sc",
      isPopular: false,
      category: "Mathematics"
    },
    {
      id: 6,
      title: "M.Sc Mathematics",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.9,
      students: 80,
      type: "M.Sc",
      isPopular: true,
      category: "Mathematics"
    },
    {
      id: 7,
      title: "B.Sc Biology",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹1,50,000",
      originalPrice: "₹3,00,000",
      duration: "3 Years",
      level: "Undergraduate",
      rating: 4.6,
      students: 220,
      type: "B.Sc",
      isPopular: true,
      category: "Biology"
    },
    {
      id: 8,
      title: "M.Sc Biology",
      instructor: "IISc Bangalore",
      instructorLogo: "🏛️",
      price: "₹2,00,000",
      originalPrice: "₹4,00,000",
      duration: "2 Years",
      level: "Postgraduate",
      rating: 4.7,
      students: 120,
      type: "M.Sc",
      isPopular: false,
      category: "Biology"
    }
  ]
}

// ======= TabSection Component =======
interface CourseItem {
  id: number;
  title: string;
  instructor: string;
  instructorLogo: string;
  price: string;
  originalPrice: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  type: string;
  isPopular: boolean;
  category: string;
}

interface CoursesData {
  [key: string]: CourseItem[];
}

function TabSection({ title, data, sectionType }: { title: string; data: CoursesData; sectionType: "courses" | "certifications" }) {
  const [activeCategory, setActiveCategory] = useState(sectionType === "courses" ? "Engineering" : "Management")
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentCards = data[activeCategory] || []
  const cardsPerSlide = 3
  const totalSlides = Math.ceil(currentCards.length / cardsPerSlide)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentSlide(0)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "text-secondary bg-secondary/10"
      case "Intermediate": return "text-primary bg-primary/10"
      case "Advanced": return "text-purple-600 bg-purple-50"
      default: return "text-muted bg-muted/20"
    }
  }

    return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-heading mb-4">{title}</h3>
      </div>
      <div className="overflow-x-auto justify-center items-center">
        <div className="flex gap-3 min-w-max pb-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card text-text border border-border hover:border-secondary/50 hover:text-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div className="overflow-hidden rounded-3xl py-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {currentCards.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((item: CourseItem, index: number) => (
              <div key={`${item.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                <div className="cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:scale-[1.02] relative border border-gray-100 hover:border-primary/20">
                    {/* Popular Badge - Absolute Positioned */}
                    {item.isPopular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 z-10 shadow-lg">
                        <Award className="w-4 h-4" />
                        Popular
                      </div>
                    )}
                    
                    {/* Course Content */}
                    <div className="p-4 h-full flex flex-col">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-xs">{item.instructorLogo}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-700">{item.instructor}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 mb-3 flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium text-gray-700">{item.rating}</span>
                            <span className="text-xs text-gray-500">({item.students.toLocaleString()})</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                            {item.level}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{item.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{item.students.toLocaleString()} students</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
        <div>
                          <span className="text-base font-bold text-primary">{item.price}</span>
                          {item.originalPrice !== item.price && (
                            <span className="text-xs text-gray-500 line-through ml-2">{item.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ======= Main Export Component =======
export default function CompassCoursesAndCertifications() {
  return (
    <section className="relative overflow-hidden group bg-gradient-to-b from-surface to-background py-16 px-4">
      {/* Background Pattern instead of image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-32 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            Campus Courses
          </h2>
          <p className="text-muted text-lg">
            Discover courses and certifications from industry experts for your campus 
          </p>
        </div>
        <TabSection title="" data={coursesData} sectionType="courses" />
        {/* <TabSection title="Professional Certifications" data={certificationsData} sectionType="certifications" /> */}
      </div>
    </section>
    )
}
