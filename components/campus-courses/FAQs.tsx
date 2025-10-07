"use client"

import React from "react"

const faqs = [
  { q: "Are online degrees recognized?", a: "Yes, courses listed are from accredited universities and recognized bodies." },
  { q: "How do I apply?", a: "Click Apply on a course card and fill the short form; our team will reach out." },
  { q: "Can I switch specializations?", a: "Universities allow changes within a window; details vary by program." },
]

export default function FAQs() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--heading-color)] mb-4">Frequently Asked Questions</h2>
        <div className="divide-y divide-[var(--border-color)] rounded-2xl border border-[var(--border-color)] bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-[var(--surface)]">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[var(--heading-color)]">
                {f.q}
              </summary>
              <div className="px-5 pb-4 text-[var(--text-color)]/80">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}


