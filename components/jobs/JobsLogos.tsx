"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css"

const logos = [
  "/img/image1.png",
  "/img/image2.png",
  "/img/image3.png",
  "/img/image4.png",
  "/img/image5.png",
]

export default function JobsLogos() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-10 shadow-sm">
        {/* Decorative Background Circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />

        {/* Heading */}
        <div className="relative text-center" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-sm md:text-base font-semibold text-gray-600 tracking-wide uppercase">
            Trusted by hiring teams at
          </h3>
        </div>

        {/* Logo Grid */}
        <div
          className="relative mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ duration: 0.15, ease: "easeOut" }} // instant hover
              className="relative h-20 w-36 flex items-center justify-center bg-white rounded-xl border border-gray-100 hover:border-blue-300 transition-all duration-150 ease-out"
            >
              <Image
                src={src}
                alt={`Company logo ${i + 1}`}
                fill
                sizes="180px"
                className="object-contain rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 h-1 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
        />
      </div>
    </section>
  )
}
