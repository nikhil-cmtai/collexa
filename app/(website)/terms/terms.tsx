"use client"

import React from "react"

const termSections = [
  {
    title: "1. Acceptance of terms",
    content:
      "By accessing or using Collexa’s websites, dashboards, mobile apps, or services (“Services”), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the Services.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 16 years old and legally capable of entering into a contract. Educational institutions and employers represent that they have the authority to bind their organizations.",
  },
  {
    title: "3. Accounts & security",
    bullets: [
      "Provide accurate registration data and update it as changes occur.",
      "You are responsible for safeguarding login credentials and for all activity under your account.",
      "Notify Collexa immediately if you suspect unauthorized access.",
    ],
  },
  {
    title: "4. Permitted use",
    bullets: [
      "Use the Services for personal learning, employability, or recruitment purposes as intended.",
      "Do not misuse features to send spam, scrape data, reverse engineer, or interfere with platform stability.",
      "Content such as curriculum, templates, or assessments may not be resold without written permission.",
    ],
  },
  {
    title: "5. Programs, payments & refunds",
    bullets: [
      "Program fees are disclosed at checkout along with applicable taxes.",
      "Refunds follow the policy communicated for each program; some fees may be non-refundable after cohort start.",
      "Collexa may change pricing or discontinue offerings with prior notice to enrolled learners.",
    ],
  },
  {
    title: "6. Jobs & internships",
    bullets: [
      "Collexa does not guarantee employment. We facilitate introductions based on your profile and hiring partner needs.",
      "Any offer letters, compensation, or contracts are strictly between you and the employer.",
      "Sharing false information or breaching offer commitments may lead to suspension.",
    ],
  },
  {
    title: "7. Intellectual property",
    content:
      "All content, logos, trademarks, code, and design elements are owned by Collexa or its licensors. You receive a limited, non-transferable license to use the Services. Unauthorized reproduction, distribution, or modification is prohibited.",
  },
  {
    title: "8. Third-party services",
    content:
      "The Services may integrate tools from video platforms, payment gateways, CRMs, or analytics vendors. Collexa is not responsible for issues caused by third-party services but will assist in resolving critical disruptions.",
  },
  {
    title: "9. Suspension or termination",
    bullets: [
      "We may suspend or terminate accounts that violate policies, create risk, or fail to pay fees.",
      "You may discontinue use at any time. Certain data may be retained to meet legal requirements.",
    ],
  },
  {
    title: "10. Disclaimers & liability",
    bullets: [
      "Services are provided “as is” without warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "Collexa is not liable for indirect, incidental, or consequential damages, even if notified of the possibility.",
      "Our total liability shall not exceed the amount paid to Collexa in the 6 months preceding the claim.",
    ],
  },
  {
    title: "11. Governing law",
    content:
      "These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka, unless required otherwise by applicable law.",
  },
  {
    title: "12. Changes to terms",
    content:
      "We may revise these Terms from time to time. Material updates will be communicated via email or prominent notices. Continued use after changes constitutes acceptance.",
  },
]

const getSupportCards = [
  {
    title: "Legal & compliance",
    details: ["legal@collexa.com", "+91 98765 43210"],
  },
  {
    title: "Campus partnerships",
    details: ["campus@collexa.com", "Mon–Fri, 10 AM – 6 PM IST"],
  },
  {
    title: "Recruiter support",
    details: ["partners@collexa.com", "We respond within 24 business hours"],
  },
]

const Terms = () => {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-secondary/5 via-white to-primary/5 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Last updated: 24 November 2025
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight">Terms of Service</h1>
          <p className="text-base text-muted leading-relaxed">
            These Terms govern access to Collexa’s learning, placement, and employer solutions. Please read
            them carefully before using our Services.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {termSections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-heading mb-4">{section.title}</h2>
              {section.content && <p className="text-sm text-muted leading-relaxed">{section.content}</p>}
              {section.bullets && (
                <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-heading mb-3">Need help?</h2>
          <p className="text-sm text-muted">
            Reach out to the right team or raise a ticket through your dashboard.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {getSupportCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-white p-6 text-left shadow-sm">
              <p className="font-semibold text-heading mb-3">{card.title}</p>
              <ul className="space-y-1 text-sm text-muted">
                {card.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Terms