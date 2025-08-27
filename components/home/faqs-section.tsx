"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are online degrees recognized?",
    a: "Yes, UGC-DEB approved online degrees are recognized and valid across India.",
  },
  {
    q: "Which program is best for me?",
    a: "Use our 2-minute suggestion flow to get a personalized shortlist based on your profile.",
  },
  {
    q: "Do you help with admissions?",
    a: "We support you from shortlisting to application, documentation, and post-admission queries.",
  },
];

const FaqsSection = () => {

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,197,94,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 text-center"
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          FAQs
        </motion.h2>

        <div className="mt-6 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur shadow-sm p-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;


