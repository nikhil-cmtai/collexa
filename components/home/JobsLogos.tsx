"use client"

import React from "react"
import Image from "next/image"

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
]

export default function JobsLogos() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl border border-[var(--border-color)] bg-white p-6">
        <p className="text-center text-sm text-[var(--muted-text)]">Trusted by hiring teams at</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((src) => (
            <div key={src} className="relative h-10 grayscale opacity-80 hover:opacity-100 transition">
              <Image src={src} alt="Company logo" fill sizes="160px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


