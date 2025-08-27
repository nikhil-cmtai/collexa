"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Sparkles, HelpCircle, ChevronDown } from "lucide-react";

// 12 Proper FAQs
const faqs = [
  {
    q: "Are online degrees recognized in India?",
    a: "Yes, <span class='font-semibold text-green-700'>UGC-DEB</span> approved online degrees are fully recognized and valid across India for jobs and higher studies.",
  },
  {
    q: "How do I choose the right program for me?",
    a: "You can use our <span class='font-semibold text-blue-700'>personalized suggestion tool</span> to get a shortlist based on your background and goals.",
  },
  {
    q: "Is the admission process completely online?",
    a: "Absolutely! From application to document submission, the entire process is online. Our team guides you at every step.",
  },
  {
    q: "What documents are required for admission?",
    a: "Typically, you need your <span class='font-semibold'>10th & 12th marksheets</span>, graduation certificate (if applicable), ID proof, and a recent photograph. Requirements may vary by university.",
  },
  {
    q: "Can I pursue a job or internship while studying online?",
    a: "Yes, online degrees offer flexible schedules, so you can work, intern, or prepare for exams alongside your studies.",
  },
  {
    q: "Will I get placement or career support?",
    a: "Many universities offer placement assistance, career counseling, and resume workshops. We also provide guidance to help you make the most of these services.",
  }
];

const FaqsSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
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

      <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 py-14 sm:py-20">
        <motion.div
          className="flex flex-col items-center mb-10"
          initial={{ y: -24, opacity: 0, scale: 0.97 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-pink-100 text-green-700 font-semibold text-base shadow mb-3 border border-green-100/60">
            <Sparkles size={20} className="text-yellow-500" />
            Got Questions?
          </span>
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 tracking-tight drop-shadow"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-2xl text-center"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          >
            <span className="font-semibold text-green-700">Everything you want to know, answered.</span> Still curious? <span className="decoration-pink-400">Ask us anything!</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-3xl border border-neutral-200 bg-white/95 backdrop-blur-lg shadow-2xl p-0 sm:p-3"
          initial={{ y: 32, opacity: 0, scale: 0.98 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`item-${idx}`}
                className={`group border-b last:border-b-0 border-neutral-200 bg-white/90 transition-all duration-200 hover:shadow-lg rounded-2xl ${idx === 0 ? "rounded-t-3xl" : ""} ${idx === faqs.length - 1 ? "rounded-b-3xl" : ""}`}
              >
                <AccordionTrigger className="flex items-center gap-3 px-7 py-5 text-base font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-150 group-data-[state=open]:bg-blue-50/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 group-data-[state=open]:bg-green-50 border border-blue-100 group-data-[state=open]:border-green-200 transition-colors duration-200">
                    <HelpCircle size={20} className="text-blue-400 group-data-[state=open]:text-green-600 transition-colors duration-200" />
                  </span>
                  <span className="flex-1 text-left">{item.q}</span>
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-50 group-data-[state=open]:bg-green-50 border border-pink-100 group-data-[state=open]:border-green-200 transition-colors duration-200">
                    <ChevronDown size={18} className="text-pink-400 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 transition-transform duration-200" />
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="text-base text-neutral-700 leading-relaxed mt-2 px-7 pb-5"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqsSection;
