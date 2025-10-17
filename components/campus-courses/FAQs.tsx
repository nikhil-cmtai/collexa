"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  { 
    q: "Are online and distance learning degrees recognized?", 
    a: "Yes, absolutely! All courses listed on our platform are from accredited universities and recognized by UGC-DEB (University Grants Commission - Distance Education Bureau), AICTE, and other relevant regulatory bodies. These degrees hold the same value as regular degrees and are accepted by employers and educational institutions worldwide." 
  },
  { 
    q: "How do I apply for a course?", 
    a: "Applying is simple! Browse through our course catalog, click on any course that interests you, and click the 'Apply Now' button. Fill in the application form with your details, upload required documents (mark sheets, ID proof, etc.), and submit. Our admission team will review your application and contact you within 24-48 hours with further instructions." 
  },
  { 
    q: "What is the eligibility criteria for different courses?", 
    a: "Eligibility varies by course level. For undergraduate programs (UG), you typically need 10+2 completion with minimum 50% marks. For postgraduate programs (PG), you need a bachelor's degree in a relevant field. For executive programs, work experience may be required. Specific requirements are mentioned on each course detail page." 
  },
  { 
    q: "Can I switch specializations or courses after enrollment?", 
    a: "Most universities allow course or specialization changes within the first semester, subject to eligibility and seat availability. The process and fees vary by institution. Contact your university's academic counselor or our support team for guidance. Some universities may charge a nominal processing fee for such changes." 
  },
  { 
    q: "What is the fee structure and payment options?", 
    a: "Course fees vary depending on the university, program, and duration. Most universities offer flexible payment options including semester-wise payments, EMI facilities through partner banks, and education loans. Fee details are clearly mentioned on each course page. We also have scholarship opportunities for meritorious students." 
  },
  { 
    q: "How are classes conducted in online/distance learning?", 
    a: "Classes are conducted through a combination of live online sessions, recorded video lectures, interactive study materials, and self-paced learning modules. Most programs provide a Learning Management System (LMS) where you can access course content 24/7. Some programs also include weekend workshops or periodic campus visits for practical sessions." 
  },
  { 
    q: "What support services are available for students?", 
    a: "Students get comprehensive support including dedicated academic counselors, doubt clearing sessions, peer discussion forums, library access (physical and digital), placement assistance, career counseling, and technical support for LMS issues. Our team is available via phone, email, and chat during business hours." 
  },
  { 
    q: "How are exams conducted and what is the evaluation process?", 
    a: "Exams are typically conducted online through proctored systems or at designated examination centers. Evaluation includes assignments, projects, mid-term exams, and final examinations. Some programs also have practical/viva voce components. Most universities follow a semester-based credit system with continuous internal assessment." 
  },
  { 
    q: "Will I receive placement assistance after course completion?", 
    a: "Yes, most universities offer placement assistance through their career services cell. This includes resume building workshops, interview preparation, industry connections, job postings, and campus recruitment drives. However, placement success depends on individual performance, market conditions, and chosen specialization." 
  },
  { 
    q: "Can I pursue these courses while working full-time?", 
    a: "Absolutely! Online and distance learning programs are specifically designed for working professionals. The flexible schedule allows you to balance work and studies. Classes are typically conducted during evenings or weekends, and recorded sessions can be accessed anytime. Many of our students successfully manage both careers and education." 
  },
  { 
    q: "What documents are required for admission?", 
    a: "Generally, you'll need: Educational certificates (10th, 12th, graduation mark sheets), Identity proof (Aadhar/PAN/Passport), Passport-size photographs, Category certificate (if applicable), Work experience letters (for executive programs), and Migration/Transfer certificate. Specific requirements are communicated during the application process." 
  },
  { 
    q: "How long does it take to complete a course?", 
    a: "Duration varies by program type. Undergraduate (UG) courses typically take 3 years, postgraduate (PG) programs take 2 years, diploma courses range from 6 months to 1 year, and certificate programs can be completed in 3-6 months. Some universities also offer accelerated or extended completion options based on your pace." 
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-t from-white via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Find answers to common questions about our campus courses, admission process, and more
          </p>
        </motion.div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-heading pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary !text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Contact Our Support Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}


