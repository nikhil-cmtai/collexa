"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, MapPin, User, GraduationCap, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import axios from "axios";

const contactDetails = [
  {
    icon: <Mail size={18} className="text-blue-500" />,
    label: "Email",
    value: "info@collexa.app",
    link: "mailto:info@collexa.app",
  },
  {
    icon: <Phone size={18} className="text-green-600" />,
    label: "Toll Free",
    value: "1800-000-000",
    link: "tel:1800000000",
  },
  {
    icon: <Clock size={18} className="text-yellow-500" />,
    label: "Hours",
    value: "Mon–Sat: 9am – 7pm",
  },
  {
    icon: <MapPin size={18} className="text-pink-500" />,
    label: "Address",
    value: "Pan India (Online Support)",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function validate(formData: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email)) {
    errors.email = "Invalid email address.";
  }
  if (!formData.phone.trim()) {
    errors.phone = "Phone is required.";
  } else if (!/^\+?\d{7,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
    errors.phone = "Invalid phone number.";
  }
  if (!formData.subject.trim()) {
    errors.subject = "Please select a program.";
  }
  if (!formData.message.trim()) {
    errors.message = "Message is required.";
  }
  return errors;
}

// Define a type for the error object expected from axios error
type AxiosErrorResponse = {
  response?: {
    data?: {
      error?: string;
    };
  };
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // For showing success message for a few seconds
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
        setStatus("");
      }, 4000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setStatus("");
    setSubmitSuccess(false);
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value });
    setErrors({ ...errors, subject: undefined });
    setStatus("");
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setSubmitSuccess(false);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.phone
    ) {
      setStatus("Please fill all fields.");
      return;
    }
    if (
      validationErrors.name ||
      validationErrors.email ||
      validationErrors.phone ||
      validationErrors.subject ||
      validationErrors.message
    ) {
      setStatus(
        validationErrors.name ||
          validationErrors.email ||
          validationErrors.phone ||
          validationErrors.subject ||
          validationErrors.message ||
          "Please fix the errors."
      );
      return;
    }
    setIsSubmitting(true);
    try {
      // Send mail to admin and user using axios
      const adminMail = axios.post("/api/contact", {
        to: "admin@empireblue.in",
        subject: formData.subject,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
        html: `<b>Name:</b> ${formData.name}<br/><b>Email:</b> ${formData.email}<br/><b>Phone:</b> ${formData.phone}<br/><b>Subject:</b> ${formData.subject}<br/><b>Message:</b><br/>${formData.message}`,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      const userMail = axios.post("/api/contact", {
        to: formData.email,
        subject: "Thank you for contacting us!",
        text: `Dear ${formData.name},\nThank you for reaching out to Empire Blue. We have received your message and will get back to you soon.`,
        html: `<b>Dear ${formData.name},</b><br/>Thank you for reaching out to Empire Blue. We have received your message and will get back to you soon.`,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      const [adminRes, userRes] = await Promise.all([adminMail, userMail]);
      const adminData = adminRes.data;
      const userData = userRes.data;
      if (adminRes.status === 200 && userRes.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setSubmitSuccess(true);
      } else {
        setStatus(adminData.error || userData.error || "Failed to send message.");
        setSubmitSuccess(false);
      }
    } catch (err) {
      // Use type assertion to AxiosErrorResponse
      const error = err as AxiosErrorResponse;
      console.error("Error sending message:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setStatus(error.response.data.error);
      } else {
        setStatus("Failed to send message.");
      }
      setSubmitSuccess(false);
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-[70vh] flex items-center justify-center"
    >
      {/* Animated, glowing blobs background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green-200/20 to-pink-200/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-tr from-yellow-100/30 to-blue-200/20 blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-stretch"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            className="flex flex-col justify-center h-full"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow">
              Contact Us
            </h3>
            <p className="mt-3 text-lg text-neutral-700 max-w-xl">
              <span className="font-semibold text-green-700">Confused about your options?</span> Our expert counselors are just a message away. Reach out for <span className="text-blue-700 font-semibold">personalized guidance</span> and <span className="text-pink-600 font-semibold">quick support</span>.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-base text-neutral-800">
                  <span className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}:</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="ml-1 text-primary underline underline-offset-2 hover:text-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="ml-1">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            className="relative rounded-3xl border border-primary/20 bg-white/90 backdrop-blur-lg shadow-2xl p-8 sm:p-10 mb-4"
            initial={{ y: 18, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="absolute -top-8 right-8 pointer-events-none opacity-70">
              <User size={32} className="text-pink-300 drop-shadow" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
              <div>
                <label className="text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2" htmlFor="contact-name">
                  <User size={16} className="text-blue-400" />
                  Full Name
                </label>
                <Input
                  className="mt-1 text-base"
                  placeholder="Your name"
                  required
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <div className="text-xs text-red-600 mt-1" id="contact-name-error">
                    {errors.name}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2" htmlFor="contact-email">
                  <Mail size={16} className="text-green-500" />
                  Email
                </label>
                <Input
                  type="email"
                  className="mt-1 text-base"
                  placeholder="name@example.com"
                  required
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <div className="text-xs text-red-600 mt-1" id="contact-email-error">
                    {errors.email}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2" htmlFor="contact-phone">
                  <Phone size={16} className="text-yellow-500" />
                  Phone
                </label>
                <Input
                  className="mt-1 text-base"
                  placeholder="+91"
                  required
                  name="phone"
                  id="contact-phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
                {errors.phone && (
                  <div className="text-xs text-red-600 mt-1" id="contact-phone-error">
                    {errors.phone}
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2" htmlFor="contact-subject">
                  <GraduationCap size={16} className="text-pink-500" />
                  Interested Program
                </label>
                <div className="mt-1">
                  <Select
                    required
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                    name="subject"
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full text-base" id="contact-subject" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "contact-subject-error" : undefined}>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Online MBA">Online MBA</SelectItem>
                      <SelectItem value="Online MCA">Online MCA</SelectItem>
                      <SelectItem value="Online BCA">Online BCA</SelectItem>
                      <SelectItem value="Online BBA">Online BBA</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <div className="text-xs text-red-600 mt-1" id="contact-subject-error">
                      {errors.subject}
                    </div>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-600 font-semibold flex items-center gap-1 mb-2" htmlFor="contact-message">
                  <MessageCircle size={16} className="text-blue-400" />
                  Message
                </label>
                <Textarea
                  rows={4}
                  className="mt-1 text-base"
                  placeholder="Tell us about your goals, background, or any questions you have"
                  required
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <div className="text-xs text-red-600 mt-1" id="contact-message-error">
                    {errors.message}
                  </div>
                )}
              </div>
            </div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.03 }}
              className="mt-7 mb-2"
            >
              <Button
                type="submit"
                className="w-full rounded-full bg-primary/90 text-white font-semibold text-lg py-3 shadow-lg hover:bg-primary transition-all duration-150 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </motion.div>
            {/* Success and error message */}
            {status && (
              <div
                className={`mt-2 mb-1 text-sm text-center flex items-center justify-center gap-2 ${
                  submitSuccess
                    ? "text-green-700 font-semibold"
                    : "text-red-600 font-semibold"
                }`}
                role={submitSuccess ? "status" : "alert"}
              >
                {submitSuccess && <CheckCircle2 size={18} className="text-green-600" />}
                {status}
              </div>
            )}
            <div className="mt-2 mb-1 text-sm text-neutral-500 text-center">
              We respect your privacy. Your details are <span className="font-semibold text-green-700">never shared</span>.
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
