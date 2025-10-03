"use client"
import React from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// --- CONFIGURATION ---
const CONFIG = {
  stats: {
    courses: "45+",
    mentors: "29+", 
    learners: "50K+",
    rating: "4.9"
  }
} as const

// --- TYPES ---
// interface StatCardProps {
//   value: string
//   label: string
//   className?: string
// }

// --- STAT CARD COMPONENT ---
// const StatCard: React.FC<StatCardProps> = ({ value, label, className = "" }) => {
//   return (
//     <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${className}`}>
//       <div className="text-4xl font-bold text-[var(--heading-color)] mb-2">
//         {value}
//       </div>
//       <div className="text-sm text-[var(--muted-text)] font-medium">
//         {label}
//       </div>
//     </div>
//   )
// }

// --- RATING COMPONENT ---
const RatingCard: React.FC = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b8c4?w=60&h=60&fit=crop&crop=face", 
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  ]

  return (
    <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
      <div className="flex items-center space-x-3">
        <div className="flex -space-x-2">
          {avatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="User avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[var(--heading-color)]">4.9</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
            ))}
          </div>
          <span className="text-sm text-[var(--muted-text)] font-medium">Rating</span>
        </div>
      </div>
    </div>
  )
}

// --- MAIN HERO SECTION COMPONENT ---
const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-[var(--text-color)]">Learning Today</span>
                <br />
                <span className="text-[var(--text-color)]">Unlimited </span>
                <span className="text-[var(--primary)]">Growth</span>
                <br />
                <span className="text-[var(--text-color)]">with Vintar</span>
              </h1>

              {/* Subheading */}
              <div className="space-y-4 max-w-xl">
                <p className="text-lg text-[var(--text-color)] leading-relaxed font-medium">
                  Learn from industry experts through engaging, self-paced video courses.
                </p>
                <p className="text-lg text-[var(--text-color)] leading-relaxed font-medium">
                  Master new skills and unlock your potential anytime, anywhere.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Courses
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--heading-color)] mb-2">
                  {CONFIG.stats.courses}
                </div>
                <div className="text-sm text-[var(--muted-text)] font-medium">
                  Courses
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--heading-color)] mb-2">
                  {CONFIG.stats.mentors}
                </div>
                <div className="text-sm text-[var(--muted-text)] font-medium">
                  Mentors
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--heading-color)] mb-2">
                  {CONFIG.stats.learners}
                </div>
                <div className="text-sm text-[var(--muted-text)] font-medium">
                  Learners
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 h-[600px]">
              {/* Large main image */}
              <div className="col-span-1 row-span-2 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face"
                    alt="Student with tablet"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <RatingCard />
                </div>
              </div>

              {/* Top right image */}
              <div className="col-span-1 row-span-1">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop"
                    alt="Business meeting"
                    width={400}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom right image */}
              <div className="col-span-1 row-span-1">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-50 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=280&fit=crop&crop=face"
                    alt="Professional woman"
                    width={400}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--accent)]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-[var(--secondary)]/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
