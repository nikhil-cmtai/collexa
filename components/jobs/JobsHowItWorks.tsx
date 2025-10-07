"use client"

import React from "react"
import { Search, Filter, Send } from "lucide-react"

const steps = [
  { icon: Search, title: "Browse openings", desc: "Explore freshers roles and internships" },
  { icon: Filter, title: "Refine with filters", desc: "Use smart filters to narrow results" },
  { icon: Send, title: "Apply in minutes", desc: "Short and simple application flow" },
]

export default function JobsHowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-[var(--border-color)] p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--heading-color)]">How it works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-xl bg-white border border-[var(--border-color)] p-5 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-3 text-[15px] font-semibold text-[var(--heading-color)]">{idx + 1}. {s.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted-text)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


