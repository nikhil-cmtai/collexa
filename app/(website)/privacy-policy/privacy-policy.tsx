"use client"

import React from "react"

const privacySections = [
  {
    title: "1. Information we collect",
    items: [
      "Profile data such as name, email, phone number, education details, resume links, and preferences when you sign up or submit forms.",
      "Usage data including pages viewed, actions taken inside dashboards, device/browser metadata, referral URLs, and cookies for session management.",
      "Transaction data whenever you purchase programs or pay application fees (processed securely by our payment partners).",
      "Communications such as emails, chat transcripts, and survey feedback that help us support learners and recruiters.",
    ],
  },
  {
    title: "2. How we use your information",
    items: [
      "Operate and improve Collexa products, personalized recommendations, and dashboards.",
      "Match you with relevant courses, internships, and jobs based on the inputs you share.",
      "Send notices about applications, program updates, policy changes, and promotional content (you can opt out anytime).",
      "Protect our community by monitoring fraud, abuse, and security threats.",
    ],
  },
  {
    title: "3. Sharing & disclosure",
    items: [
      "University partners and employers receive only the data required to evaluate your candidature.",
      "Service vendors such as cloud hosting, analytics, and communication platforms operate strictly under confidentiality agreements.",
      "We may disclose information if required by law, legal process, or to protect Collexa’s rights and safety of users.",
      "In the event of a merger or acquisition, we will notify users before transferring personal information.",
    ],
  },
  {
    title: "4. Data retention & security",
    items: [
      "Accounts remain active until you request deletion or your program association ends; some records may be retained to meet legal obligations.",
      "We encrypt sensitive data, enforce role-based access, and audit systems regularly; however, no method is 100% secure so please use strong passwords.",
      "If we learn of a breach, we will notify affected users and regulators as required.",
    ],
  },
  {
    title: "5. Your choices & rights",
    items: [
      "Access, correct, or delete profile data inside your dashboard or by emailing privacy@collexa.com.",
      "Opt out of marketing emails using the unsubscribe link; transactional notices will still be delivered.",
      "Disable cookies in your browser (some features may stop working).",
      "Students in regulated geographies (e.g., GDPR) can exercise statutory rights like data portability or restriction by contacting us.",
    ],
  },
]

const contactDetails = [
  { label: "Email", value: "privacy@collexa.com" },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "Address", value: "Collexa HQ, 21 Innovation Park, Bengaluru, India" },
]

const PrivacyPolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Last updated: 24 November 2025
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base text-muted leading-relaxed">
            This Privacy Policy explains how Collexa (“we”, “us”, or “our”) collects, uses, shares, and
            protects information when you use our websites, mobile applications, or other services
            (collectively, the “Services”). By accessing the Services you consent to the practices
            described here.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {privacySections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-heading mb-4">{section.title}</h2>
              <ul className="space-y-3 text-sm text-muted leading-relaxed list-disc list-inside">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="rounded-2xl border border-border bg-primary/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading mb-3">6. Children’s privacy</h2>
            <p className="text-sm text-muted leading-relaxed">
              Collexa is designed for learners aged 16 and above. If you are under 16, please use the
              Services only under the supervision of a parent or guardian. We do not knowingly collect
              personal information from children. Parents who believe their child has provided data can
              contact us for deletion.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading mb-3">7. International transfers</h2>
            <p className="text-sm text-muted leading-relaxed">
              We operate globally with infrastructure in India and overseas jurisdictions. When data moves
              outside your country, we ensure safeguards such as standard contractual clauses or equivalent
              protections mandated by regulators.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading mb-3">8. Updates to this policy</h2>
            <p className="text-sm text-muted leading-relaxed">
              We may update this Privacy Policy to reflect new features, legal requirements, or best
              practices. Changes will be posted on this page with a revised “Last updated” date. If the
              changes are significant, we will notify you via email or in-app alerts.
            </p>
          </article>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Questions or requests?</h2>
          <p className="text-sm text-white/80">
            Reach out to our privacy team and we’ll respond within 48 business hours.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-xl bg-white/10 p-4">
                <p className="text-white/80 uppercase tracking-wider text-xs">{detail.label}</p>
                <p className="font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy