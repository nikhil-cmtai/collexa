"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import AOS from "aos";
import "aos/dist/aos.css"
import heroIllustration from "@/public/img/image.png"

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            let start = 0
            const duration = 1000 // 1 second
            const increment = value / (duration / 16)

            const counter = setInterval(() => {
              start += increment
              if (start >= value) {
                start = value
                clearInterval(counter)
              }
              setCount(Math.floor(start))
            }, 16)

            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 } // trigger when 50% visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [value, hasAnimated])

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold text-gray-900">{count}+</p>
    </div>
  )
}

const InternshipsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="relative rounded-4xl  overflow-hidden">

      <div style={{ paddingTop: "5em", marginBottom: "3em" }} className="relative rounded-4xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Kickstart Your <span className="text-blue-600">Career</span> with Top Internships
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
            Discover curated internships across startups and global companies. Gain real-world experience, build your skills, and grow your career—all from one platform.
          </p>
         
        </div>

        {/* Illustration/Image Section */}
        <div className="w-full md:w-1/2 relative h-72 md:h-96 lg:h-[28rem]" data-aos="fade-left" data-aos-delay="400">
          <Image
            src={heroIllustration}
            alt="Students working on internships"
            className="object-contain border-1 rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Bottom floating stats */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="600">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-md p-6 flex justify-around items-center gap-6 flex-wrap">
          <div className="text-center">
            <AnimatedNumber value={500} />
            <p className="text-sm text-gray-600">Internships This Month</p>
          </div>
          <div className="text-center">
            <AnimatedNumber value={300} />
            <p className="text-sm text-gray-600">Companies</p>
          </div>
          <div className="text-center">
            <AnimatedNumber value={10000} />
            <p className="text-sm text-gray-600">Students Placed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipsHero
