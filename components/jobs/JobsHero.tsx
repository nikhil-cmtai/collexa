"use client"

import React from "react"
import Image from "next/image"
import jobHero from "@/public/images/job-hero.jpg"

export default function JobsHero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-white to-blue-50 p-6 md:p-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)]" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold border border-blue-100">
            Trusted by students and freshers
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--heading-color)]">
            Find your first job faster with curated campus roles
          </h1>
          <p className="mt-3 text-[15px] md:text-base text-[var(--muted-text)] leading-relaxed">
            Explore entry-level jobs and internships tailored for students and recent graduates. Filter by
            location, role type, and more — all in one place.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-green-500" /> Verified listings
            </div>
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> Remote & Onsite
            </div>
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" /> AI-powered filters
            </div>
          </div>
          </div>

          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <Image
                src={jobHero}
                alt="Students exploring campus jobs"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/5 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/90 backdrop-blur border border-[var(--border-color)] p-3 shadow-sm">
                <p className="text-[11px] text-[var(--muted-text)]">Active openings</p>
                <p className="text-sm font-semibold text-[var(--heading-color)]">1,200+ this week</p>
              </div>
              <div className="rounded-xl bg-white/90 backdrop-blur border border-[var(--border-color)] p-3 shadow-sm">
                <p className="text-[11px] text-[var(--muted-text)]">Avg. time to apply</p>
                <p className="text-sm font-semibold text-[var(--heading-color)]">Under 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


