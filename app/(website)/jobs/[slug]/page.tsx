import React from "react"
import JobsView from "@/components/home/JobsView"

const slugToPreset: Record<string, { location?: string; type?: string; query?: string }> = {
  delhi: { location: "Delhi" },
  mumbai: { location: "Mumbai" },
  bangalore: { location: "Bengaluru" },
  hyderabad: { location: "Hyderabad" },
  kolkata: { location: "Kolkata" },
  chennai: { location: "Chennai" },
  pune: { location: "Pune" },
  "work-from-home": { location: "Remote" },
  // job types
  "full-time": { type: "Full-time" },
  // popular categories (query based)
  developer: { query: "developer react node js" },
  design: { query: "design figma ui ux" },
  marketing: { query: "marketing seo ads analytics" },
  finance: { query: "finance accounting tally" },
  hr: { query: "hr recruitment" },
  profile: {},
  "top-locations": {},
  "top-categories": {},
  "explore-more": {},
  "placement-courses": {},
  all: {},
}

export default async function JobsBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const preset = slugToPreset[slug] || {}
  return <JobsView presetLocation={preset.location} presetType={preset.type} presetQuery={preset.query} />
}



