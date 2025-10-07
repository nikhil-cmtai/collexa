"use client"

import React from "react"

export default function CTA() {
  return (
    <section className="py-14 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-foreground)]">Ready to apply to your dream course?</h2>
        <p className="mt-2 text-[var(--primary-foreground)]/90">Get guidance from our counsellors—free and fast.</p>
        <a href="#courses" className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-[var(--primary)] font-semibold shadow hover:shadow-md">Start Application</a>
      </div>
    </section>
  )
}


