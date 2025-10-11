"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import careerHero from "@/public/img/image6.png"

export default function JobsHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    })
  }, [])

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
      <div
        className="relative overflow-hidden rounded-3xl  p-2 md:p-5 "
        data-aos="fade-up"
      >
        {/* Decorative Orbs */}
        {/* <div className="absolute -top-24 -right-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.2),transparent_70%)]" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" /> */}

        {/* Grid Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="flex flex-col" data-aos="fade-right">

            <h1 className="mt-5 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-[var(--heading-color)]">
              Discover top{" "}
              <span className="text-blue-600">career opportunities</span> that
              match your skills
            </h1>

            <p className="mt-4 text-[15px] md:text-base text-[var(--muted-text)] leading-relaxed max-w-md">
              Explore thousands of verified jobs and internships from leading
              companies. Whether you're a student, fresher, or experienced
              professional — find your next big role effortlessly.
            </p>

            {/* Highlights */}
            <div
              className="mt-6 flex flex-wrap items-center gap-3 text-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                { color: "bg-emerald-500", text: "Verified employers" },
                { color: "bg-blue-500", text: "Smart job matches" },
                { color: "bg-indigo-500", text: "Real-time alerts" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-white/90 backdrop-blur px-3 py-2 shadow-sm hover:shadow-md transition-all"
                >
                  <span className={`h-2 w-2 rounded-full ${feature.color}`} />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="mt-8 flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 transition-all">
                Explore Jobs
              </button>
              <button className="px-5 py-3 rounded-xl bg-white border border-[var(--border-color)] text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all">
                Post a Job
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative" data-aos="fade-left" data-aos-delay="100">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <Image
                src={careerHero}
                alt="Professionals collaborating in modern office"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 w-[85%]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { label: "Active listings", value: "2,800+ jobs" },
                { label: "Companies hiring", value: "500+ verified" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/90 backdrop-blur-md border border-[var(--border-color)] p-4 text-center shadow-md hover:shadow-lg transition-all"
                >
                  <p className="text-[11px] text-[var(--muted-text)]">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--heading-color)] mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
