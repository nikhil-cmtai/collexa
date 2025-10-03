"use client"

import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector, RootState } from "@/lib/store"
import { fetchCourses, setCourseLevel, setCourseMode, setCourseQuery } from "@/lib/slices/coursesSlice"

export default function CoursesView({ presetQuery, presetLevel, presetMode }: { presetQuery?: string; presetLevel?: string; presetMode?: string }) {
  const dispatch = useAppDispatch()
  const { items, status, query, level, mode } = useAppSelector((s: RootState) => s.courses)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses({ q: presetQuery, level: presetLevel, mode: presetMode }))
    }
  }, [dispatch, status, presetQuery, presetLevel, presetMode])

  useEffect(() => {
    dispatch(setCourseQuery(presetQuery || ""))
    dispatch(setCourseLevel(presetLevel || ""))
    dispatch(setCourseMode(presetMode || ""))
  }, [dispatch, presetQuery, presetLevel, presetMode])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl p-6 bg-white border border-[var(--border-color)]">
        <h1 className="text-2xl font-bold">Campus Courses</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
          <input value={query} onChange={(e) => dispatch(setCourseQuery(e.target.value))} placeholder="Search by title or university" className="rounded-lg px-4 py-3 text-[15px] bg-white border border-[var(--border-color)]" />
          <input value={level} onChange={(e) => dispatch(setCourseLevel(e.target.value))} placeholder="Level (UG/PG/Executive)" className="rounded-lg px-4 py-3 text-[15px] bg-white border border-[var(--border-color)]" />
          <input value={mode} onChange={(e) => dispatch(setCourseMode(e.target.value))} placeholder="Mode (Online/Distance/Hybrid)" className="rounded-lg px-4 py-3 text-[15px] bg-white border border-[var(--border-color)]" />
          <button onClick={() => dispatch(fetchCourses({ q: query, level, mode }))} className="rounded-lg px-6 py-3 text-sm font-semibold bg-[var(--primary)] text-white">Search</button>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <div key={c.id} className="rounded-xl border border-[var(--border-color)] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-[var(--muted-text)] mt-1">{c.university} • {c.level} • {c.mode}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-[var(--secondary)] text-white">{c.duration}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full bg-[var(--surface)] border border-[var(--border-color)] px-2.5 py-1 text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <button className="text-sm font-semibold text-white bg-[var(--primary)] rounded-md px-4 py-2">Apply</button>
              <button className="text-sm font-medium text-[var(--primary)] hover:underline">View details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


