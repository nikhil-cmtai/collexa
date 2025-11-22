"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GraduationCap,
  Mail,
  Send,
  CheckCircle2,
  BookOpen,
  Briefcase,
} from "lucide-react";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    courseInterest: "",
    qualification: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "enquiry@collexa.com",
          subject: `New Enquiry: ${formData.enquiryType}`,
          html: `
            <h2>New Enquiry Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Enquiry Type:</strong> ${formData.enquiryType}</p>
            <p><strong>Course Interest:</strong> ${formData.courseInterest || "N/A"}</p>
            <p><strong>Qualification:</strong> ${formData.qualification || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
          text: `
            New Enquiry Form Submission
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Enquiry Type: ${formData.enquiryType}
            Course Interest: ${formData.courseInterest || "N/A"}
            Qualification: ${formData.qualification || "N/A"}
            Message: ${formData.message}
          `,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiryType: "",
          courseInterest: "",
          qualification: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const enquiryTypes = [
    { value: "course", label: "Course Information", icon: BookOpen },
    { value: "admission", label: "Admission Process", icon: GraduationCap },
    { value: "career", label: "Career Guidance", icon: Briefcase },
    { value: "other", label: "Other", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 md:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-heading mb-4">
              Make an <span className="text-primary">Enquiry</span>
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
              Interested in our courses, programs, or services? Fill out the
              form below and our team will reach out to you with all the
              information you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm"
          >
            <h2 className="text-2xl font-bold text-heading mb-2">
              Enquiry Form
            </h2>
            <p className="text-muted mb-8">
              Please provide your details and we&apos;ll get back to you as soon
              as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Enquiry Type */}
              <div>
                <Label htmlFor="enquiryType" className="mb-2 block">
                  Enquiry Type *
                </Label>
                <Select
                  value={formData.enquiryType}
                  onValueChange={(value) =>
                    handleSelectChange("enquiryType", value)
                  }
                  required
                >
                  <SelectTrigger id="enquiryType" className="w-full">
                    <SelectValue placeholder="Select enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {enquiryTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="phone" className="mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="qualification" className="mb-2 block">
                    Highest Qualification
                  </Label>
                  <Select
                    value={formData.qualification}
                    onValueChange={(value) =>
                      handleSelectChange("qualification", value)
                    }
                  >
                    <SelectTrigger id="qualification" className="w-full">
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10th">10th Standard</SelectItem>
                      <SelectItem value="12th">12th Standard</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="bachelor">Bachelor&apos;s Degree</SelectItem>
                      <SelectItem value="master">Master&apos;s Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <Label htmlFor="courseInterest" className="mb-2 block">
                  Course/Program Interest
                </Label>
                <Input
                  id="courseInterest"
                  name="courseInterest"
                  type="text"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  placeholder="Which course or program are you interested in?"
                  className="w-full"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="mb-2 block">
                  Additional Details *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your enquiry or any specific questions you have..."
                  rows={6}
                  required
                  className="w-full resize-none"
                />
              </div>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" && (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
