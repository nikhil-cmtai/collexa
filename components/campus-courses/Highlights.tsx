"use client"

import React from "react"

const items = [
  {
    title: "Accredited Programs",
    desc: "UG, PG and Diploma programs from trusted universities",
  },
  {
    title: "Flexible Modes",
    desc: "Online, Distance and Hybrid options to fit your schedule",
  },
  {
    title: "Mentor Support",
    desc: "Guidance from experts to help you choose the right course",
  },
]

export default function Highlights() {
  return (
    <section className="py-12" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[var(--border-color)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--heading-color)]">{it.title}</h3>
              <p className="mt-1 text-[var(--muted-text)]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


