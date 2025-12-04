"use client"

import React, { useState, useEffect } from "react"
import SkillsHero from "@/components/learn-skills/SkillsHero"
import SkillCategories from "@/components/learn-skills/SkillCategories"
import PopularSkills from "@/components/learn-skills/PopularSkills"
import WhyLearnWithUs from "@/components/learn-skills/WhyLearnWithUs"
import CompanySection from "@/components/home/company-section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, DollarSign, Send, CheckCircle2, Loader2 } from "lucide-react"
import { useAppDispatch } from "@/lib/redux/hooks"
import { createAdmissionRequest, fetchAdmissionRequests, type AdmissionRequest } from "@/lib/redux/features/admission-requestSlice"

function LearnSkillsAdmissionSection() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skillInterest: "",
    location: "",
    budget: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")

    const now = new Date().toISOString()
    const payload: Omit<AdmissionRequest, "_id" | "createdAt" | "updatedAt"> = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.skillInterest || "Skill-based Program",
      university: "Skill-based Programs",
      location: formData.location,
      status: "pending",
      priority: "medium",
      applicationDate: now,
      lastContact: now,
      assignedTo: "",
      notes: `Budget: ${formData.budget || "N/A"} | Notes: ${formData.notes || "N/A"}`,
      documents: [],
      expectedStartDate: "",
    }

    try {
      await dispatch(createAdmissionRequest(payload)).unwrap()
      dispatch(fetchAdmissionRequests(undefined))
      setSuccessMessage("Request submitted successfully! Our counsellor will contact you soon.")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        skillInterest: "",
        location: "",
        budget: "",
        notes: "",
      })
    } catch (err) {
      console.error("Failed to submit admission request:", err)
      setSuccessMessage("Unable to submit right now. Please try again shortly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-heading mb-3">Need help choosing the right skill program?</h2>
            <p className="text-muted mb-6">
              Share a few details and our academic counsellors will help you shortlist the best skill-based
              courses based on your goals, timeline, and budget.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>• Get a tailored roadmap for your profile</li>
              <li>• Compare multiple programs across platforms</li>
              <li>• Understand fees, timelines, and outcomes clearly</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
            {successMessage && (
              <div className="mb-4 p-3 rounded-lg border border-green-200 bg-green-50 text-green-800 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="mb-1 block">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="mb-1 block">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="skillInterest" className="mb-1 block">
                    Skill / Course Interest *
                  </Label>
                  <Input
                    id="skillInterest"
                    name="skillInterest"
                    value={formData.skillInterest}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Data Analytics, UI/UX, Full Stack"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location" className="mb-1 block">
                    Location *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="pl-9"
                      placeholder="City or region"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="budget" className="mb-1 block">
                    Approx. Budget *
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="pl-9"
                      placeholder="e.g., ₹20,000 – ₹50,000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="mb-1 block">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your background or specific questions..."
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request Guidance
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SkillBasedCoursePage() {
  return (
    <main className="min-h-screen">
      <SkillsHero />
      <SkillCategories />
      <PopularSkills />
      <WhyLearnWithUs />
      <LearnSkillsAdmissionSection />
      <CompanySection />
    </main>
  )
}

