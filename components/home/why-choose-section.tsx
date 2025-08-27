"use client";

import React from "react";
import { motion } from "framer-motion";

const points = [
  { title: "Unbiased Guidance", desc: "Compare programs objectively based on your goals.", icon: "🔍" },
  { title: "Expert Mentors", desc: "500+ mentors to help you choose and succeed.", icon: "🎓" },
  { title: "Personalized Match", desc: "Get suggestions in 2 minutes based on your profile.", icon: "✨" },
  { title: "End-to-End Support", desc: "From application to admissions and beyond.", icon: "🤝" },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            className="text-left"
            initial={{ y: 14, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">Why choose Collexa?</h2>
            <p className="mt-2 text-neutral-600">We simplify your decision with transparent comparisons and real guidance.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, idx) => (
              <motion.div
                key={p.title}
                className="group rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-lg">
                    {p.icon}
                  </div>
                  <div className="text-base font-medium text-neutral-900">{p.title}</div>
                </div>
                <div className="text-sm text-neutral-600 mt-1">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


