"use client"

import React from "react"
import { Shield, Briefcase, Sparkles, MapPin, Clock, Trophy } from "lucide-react"

const items = [
  { icon: Shield, title: "Verified roles", desc: "Curated and screened for students" },
  { icon: Briefcase, title: "Top companies", desc: "From startups to unicorns" },
  { icon: MapPin, title: "Pan-India + Remote", desc: "Choose your preferred location" },
  { icon: Clock, title: "Quick apply", desc: "Simple process, no hassle" },
  { icon: Trophy, title: "Placement support", desc: "Guidance and interview prep" },
  { icon: Sparkles, title: "AI matching", desc: "Smart filters for better fits" },
]

export default function JobsHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-[var(--border-color)] bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <it.icon className="size-5 text-[var(--primary)]" />
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--heading-color)]">{it.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted-text)]">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


