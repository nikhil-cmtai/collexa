"use client"

import React from "react"
import Image from "next/image"
import campusHero from "@/public/images/campus-courses/hero.jpg"

export default function CampusHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={campusHero}
          alt="Campus hero background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)]/90 via-[var(--background)]/70 to-[var(--background)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[var(--muted-text)] shadow-sm">
            Campus Learning
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[var(--heading-color)]">
            Explore Accredited Campus Courses
          </h1>
          <p className="mt-3 text-[var(--text-color)]/80 text-lg">
            Discover undergraduate, postgraduate and diploma programs from reputed universities. Compare durations, modes and specializations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#courses" className="px-6 py-3 rounded-full text-[var(--primary-foreground)] font-semibold shadow hover:brightness-110">Browse Courses</a>
            <a href="#why" className="px-6 py-3 rounded-full border border-[var(--border-color)] bg-white text-[var(--heading-color)] font-semibold hover:bg-[var(--surface)]">Why Collexa?</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--background)]/50 to-transparent" />
    </section>
  )
}


