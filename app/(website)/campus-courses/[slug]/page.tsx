import React from "react"
import CoursesView from "@/components/campus-courses/CoursesView"

const SLUG_TO_QUERY: Record<string, { q?: string; level?: string }> = {
  ba: { q: "BA", level: "UG" },
  bsc: { q: "B.Sc", level: "UG" },
  bcom: { q: "B.Com", level: "UG" },
  bba: { q: "BBA", level: "UG" },
  bbm: { q: "BBM", level: "UG" },
  bca: { q: "BCA", level: "UG" },
  btech: { q: "B.Tech", level: "UG" },
  llb: { q: "LLB", level: "UG" },
  mbbs: { q: "MBBS", level: "UG" },
  bpharm: { q: "B.Pharm", level: "UG" },
  barch: { q: "B.Arch", level: "UG" },
  bdes: { q: "B.Des", level: "UG" },
  bed: { q: "B.Ed", level: "UG" },
  bhm: { q: "BHM", level: "UG" },
  ma: { q: "MA", level: "PG" },
  msc: { q: "M.Sc", level: "PG" },
  mcom: { q: "M.Com", level: "PG" },
  mba: { q: "MBA", level: "PG" },
  mca: { q: "MCA", level: "PG" },
  mtech: { q: "M.Tech", level: "PG" },
  llm: { q: "LLM", level: "PG" },
  md: { q: "MD", level: "PG" },
  ms: { q: "MS", level: "PG" },
  mds: { q: "MDS", level: "PG" },
  mpt: { q: "MPT", level: "PG" },
  mph: { q: "MPH", level: "PG" },
  mhm: { q: "MHM", level: "PG" },
  pgdm: { q: "PGDM", level: "PG" },
  polytechnic: { q: "Polytechnic", level: "UG" },
  dca: { q: "DCA" },
  paramedical: { q: "Paramedical" },
  certificates: { q: "Certificate" },
  "hotel-management": { q: "Hotel Management" },
  all: { q: "" },
}

export default function CampusCourseSlugPage({ params }: { params: { slug: string } }) {
  const preset = SLUG_TO_QUERY[params.slug?.toLowerCase?.() || "all"] || SLUG_TO_QUERY["all"]
  return <CoursesView presetQuery={preset.q} presetLevel={preset.level} />
}


