// "use client"

// import { useEffect, useRef, useState } from "react"
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
// import gsap from "gsap"
// import Image from "next/image"
// import Link from "next/link"
// import { cn } from "@/lib/utils"

// interface RuixenCardProps {
//   title?: string
//   subtitle?: string
//   image?: string
//   badge?: {
//     text: string
//     variant: "pink" | "indigo" | "orange"
//   }
//   href?: string
//   id?: string
// }

// const cards: RuixenCardProps[] = [
//   {
//     title: "Internship Opportunities",
//     subtitle: "Gain real-world experience with top companies",
//     image: "/images/internship-opportunities.jpg",
//     badge: { text: "Popular", variant: "orange" },
//     href: "#",
//   },
//   {
//     title: "Job Placements",
//     subtitle: "Find your dream job with leading employers",
//     image: "/images/job-placements.jpg",
//     badge: { text: "New", variant: "indigo" },
//     href: "#",
//   },
//   {
//     title: "Skill Courses",
//     subtitle: "Learn industry-relevant skills from experts",
//     image: "/images/skill-courses.jpg",
//     badge: { text: "Trending", variant: "pink" },
//     href: "#",
//   },
//   {
//     title: "Career Guidance",
//     subtitle: "Get personalized career advice and mentorship",
//     image: "/images/career-guidance.jpg",
//     badge: { text: "Expert", variant: "indigo" },
//     href: "#",
//   },
//   {
//     title: "Certification Programs",
//     subtitle: "Earn certificates from recognized institutions",
//     image: "/images/certification-programs.jpg",
//     badge: { text: "Certified", variant: "orange" },
//     href: "#",
//   },
// ]

// export default function InternshalaCarousel() {
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([])
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const shift = (direction: "next" | "prev") => {
//     const nextIndex =
//       direction === "next" ? (currentIndex + 1) % cards.length : (currentIndex - 1 + cards.length) % cards.length
//     setCurrentIndex(nextIndex)
//   }

//   useEffect(() => {
//     cardRefs.current.forEach((card, i) => {
//       if (!card) return

//       let position = i - currentIndex
//       if (position < -Math.floor(cards.length / 2)) {
//         position += cards.length
//       } else if (position > Math.floor(cards.length / 2)) {
//         position -= cards.length
//       }

//       const x = position * 320
//       const y = position === 0 ? 20 : 0
//       const scale = position === 0 ? 1.03 : 0.95

//       if (Math.abs(position) > 2) {
//         gsap.set(card, { x, y, scale })
//       } else {
//         gsap.to(card, {
//           x,
//           y,
//           scale,
//           duration: 0.6,
//           ease: "power2.out",
//         })
//       }
//     })
//   }, [currentIndex])

//   const badgeColors = {
//     pink: "bg-pink-500 text-white",
//     indigo: "bg-blue-600 text-white",
//     orange: "bg-yellow-500 text-black",
//   }

//   return (
//     <section className="bg-gradient-to-b from-blue-50 to-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Opportunities</h2>
//           <p className="text-lg text-gray-600">
//             Discover internships, jobs, and courses tailored for your career growth
//           </p>
//         </div>

//         <div className="h-full w-full relative px-6 py-12 overflow-hidden">
//           <div className="relative flex items-center justify-center h-[400px]">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 ref={(el) => {
//                   cardRefs.current[index] = el
//                 }}
//                 className="absolute transition-transform"
//               >
//                 <div className="flex flex-col group">
//                   <Link
//                     href={card.href ?? "#"}
//                     className="relative block overflow-hidden rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-tr from-white/90 to-blue-50/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
//                   >
//                     {/* Image */}
//                     <div className="relative h-[300px] w-[260px]">
//                       <Image
//                         src={card.image ?? ""}
//                         alt={card.title ?? ""}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, 33vw"
//                         priority
//                       />
//                     </div>

//                     {/* Badge */}
//                     {card.badge && (
//                       <div className="absolute top-4 -left-10 transform -rotate-45">
//                         <div className={cn("px-3 py-0.5 text-xs font-bold shadow-md", badgeColors[card.badge.variant])}>
//                           {card.badge.text}
//                         </div>
//                       </div>
//                     )}

//                     {/* Text Overlay */}
//                     <div className="absolute bottom-4 left-4 right-4 group-hover:scale-[1.01] group-hover:translate-y-[-4px] transform transition-all duration-300 ease-out bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-md border border-blue-100">
//                       <div className="flex flex-col gap-1">
//                         <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
//                         <p className="text-sm text-gray-600 leading-snug">{card.subtitle}</p>
//                         <div className="flex justify-end mt-2">
//                           <div className="group relative w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-blue-200">
//                             <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 transition-transform duration-300 group-hover:rotate-45" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <div className="absolute bottom-6 right-6 flex gap-2">
//             <button
//               onClick={() => shift("prev")}
//               className="p-2 rounded-full border border-blue-200 bg-white hover:scale-110 transition hover:bg-blue-50"
//             >
//               <ChevronLeft className="w-5 h-5 text-blue-600" />
//             </button>
//             <button
//               onClick={() => shift("next")}
//               className="p-2 rounded-full border border-blue-200 bg-white hover:scale-110 transition hover:bg-blue-50"
//             >
//               <ChevronRight className="w-5 h-5 text-blue-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const trendingItems = [
  {
    id: 1,
    category: "Career Opportunity",
    company: "PEPSICO",
    title: "Pep Supply Chain",
    subtitle: "Inviting aspirants from all fields into Supply Chain",
    features: ["Certification & job opportunity", "Connect with PepsiCo leaders"],
    buttonText: "Register now",
    bgColor: "bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]",
    illustration: "/supply-chain-illustration.jpg",
  },
  {
    id: 2,
    category: "Internships",
    title: "SHORT-TERM INTERNSHIPS",
    subtitle: "Short duration yet bigger rewards!",
    features: ["Work for 2-4 weeks in your favorite profiles", "An assured stipend & internship certificate"],
    buttonText: "Participate now",
    bgColor: "bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)]",
    illustration: "/internship-calendar-illustration.jpg",
  },
  {
    id: 3,
    category: "Real-world problem-solving",
    title: "India Business Case Programme 2025-26",
    subtitle: "Empowering Youth for Career Readiness",
    buttonText: "Apply now",
    bgColor: "bg-gradient-to-br from-[var(--surface)] to-[var(--background)]",
    textColor: "text-[var(--text-color)]",
    illustration: "/business-professionals-team.jpg",
  },
]

export default function TrendingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingItems.length) % trendingItems.length)
  }

  return (
    <section className="py-16 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-[var(--heading-color)]">Trending now</h2>
            <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--primary-foreground)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[var(--background)] shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--text-color)]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[var(--background)] shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-[var(--text-color)]" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {trendingItems.map((item) => (
              <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                <div
                  className={`${item.bgColor} rounded-2xl p-6 h-80 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="inline-block px-3 py-1 bg-black/20 rounded-full text-xs font-medium text-white mb-3">
                      {item.category}
                    </div>

                    {item.company && (
                      <div className="text-right mb-2">
                        <span className="text-xs font-bold text-white bg-black/20 px-2 py-1 rounded">
                          {item.company}
                        </span>
                      </div>
                    )}

                    <h3 className={`text-xl font-bold mb-1 ${item.textColor || "text-white"}`}>{item.title}</h3>

                    <p className={`text-sm mb-3 line-clamp-2 ${item.textColor || "text-white/90"}`}>{item.subtitle}</p>

                    <ul className="space-y-2 mb-4 flex-1">
                      {item.features?.map((feature, index) => (
                        <li
                          key={index}
                          className={`text-sm flex items-start gap-2 ${item.textColor || "text-white/90"}`}
                        >
                          <span className="text-[var(--secondary)] mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <button
                        className="px-6 py-2 rounded-lg font-medium text-sm transition-opacity bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 opacity-30">
                    <Image src={item.illustration || "/placeholder.svg"} alt="" width={128} height={128} className="w-32 h-32 object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {trendingItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[var(--primary)]" : "bg-[var(--border-color)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
