"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type Props = {
  jobTitle: string
  trigger: React.ReactNode
}

export default function JobApplyDialog({ jobTitle, trigger }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [resumeUrl, setResumeUrl] = useState("")
  const [note, setNote] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function submit() {
    setSubmitting(true)
    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, name, email, phone, resumeUrl, note }),
      })
      setSubmitted(true)
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="p-4 text-sm rounded-md bg-green-50 text-green-700 border border-green-200">
            Your application has been submitted. We will get back to you soon.
          </div>
        ) : (
          <div className="grid gap-3">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border border-[var(--border-color)] px-3 py-2 text-sm" placeholder="Your name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border border-[var(--border-color)] px-3 py-2 text-sm" placeholder="name@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded-md border border-[var(--border-color)] px-3 py-2 text-sm" placeholder="99999 99999" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Resume link</label>
              <input value={resumeUrl} onChange={(e) => setResumeUrl(e.target.value)} className="mt-1 w-full rounded-md border border-[var(--border-color)] px-3 py-2 text-sm" placeholder="Drive/Dropbox link" />
            </div>
            <div>
              <label className="text-sm font-medium">Short note</label>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="mt-1 w-full rounded-md border border-[var(--border-color)] px-3 py-2 text-sm" placeholder="Why are you a good fit?" />
            </div>

            <div className="pt-2 flex justify-end">
              <Button disabled={submitting} onClick={submit}>{submitting ? "Submitting..." : "Submit application"}</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}


