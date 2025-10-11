"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import AOS from "aos";
import "aos/dist/aos.css"

import company1 from "@/public/img/image1.png"
import company2 from "@/public/img/image2.png"
import company3 from "@/public/img/image3.png"
import company4 from "@/public/img/image4.png"
import company5 from "@/public/img/image5.png"

const logos = [company1, company2, company3, company4, company5]

const InternshipsLogos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed
      easing: "ease-out", 
      once: true,       // animate only once per scroll
    })
  }, [])

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10"
          data-aos="fade-up"
        >
          Trusted by Leading Companies
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // slight stagger animation
              className="p-4 bg-white rounded-xl shadow-sm border border-gray-100
                        hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out
                        flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="object-contain w-24 h-12 sm:w-28 sm:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternshipsLogos
