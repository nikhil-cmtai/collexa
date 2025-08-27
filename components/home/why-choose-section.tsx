"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, GraduationCap, UserCheck, Handshake } from "lucide-react";

// Classic, clean, minimal theme
const points = [
  {
    title: "Unbiased Guidance",
    desc: "No bias, no bakwaas. Get the real deal for YOUR goals.",
    icon: (
      <Search
        size={28}
        className="text-blue-600 group-hover:text-blue-700 transition-all duration-200"
      />
    ),
    border: "border-blue-200",
  },
  {
    title: "Expert Mentors",
    desc: "500+ industry pros. IIT, ISB, Meta, Goldman – sab yahan!",
    icon: (
      <GraduationCap
        size={28}
        className="text-indigo-600 group-hover:text-indigo-700 transition-all duration-200"
      />
    ),
    border: "border-indigo-200",
  },
  {
    title: "Personalized Match",
    desc: "2 min mein apna perfect course. AI-powered, full filmy style.",
    icon: (
      <Sparkles
        size={28}
        className="text-yellow-500 group-hover:text-yellow-600 transition-all duration-200"
      />
    ),
    border: "border-yellow-200",
  },
  {
    title: "End-to-End Support",
    desc: "Application se admission tak, Collexa always with you 💪",
    icon: (
      <Handshake
        size={28}
        className="text-emerald-600 group-hover:text-emerald-700 transition-all duration-200"
      />
    ),
    border: "border-emerald-200",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            className="text-left"
            initial={{ y: 32, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Why <span className="text-primary">Collexa?</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-700 max-w-xl font-medium">
              <span className="font-bold text-primary">No confusion, only clarity!</span> <br />
              <span className="text-indigo-600 font-semibold">Compare, match, and win</span> with <span className="text-yellow-600 font-semibold">India’s trusted education platform</span>.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                href="#suggest"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-primary bg-primary/10 transition-colors duration-150 shadow"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
              >
                Get My Match
                <Sparkles size={20} className="ml-1" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-base font-semibold text-primary border border-primary/20 bg-white shadow hover:bg-secondary/10 transition-all duration-150"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
              >
                Talk to an Expert
                <UserCheck size={18} className="ml-1" />
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((p, idx) => (
              <motion.div
                key={p.title}
                className={`group relative rounded-2xl border ${p.border} bg-white p-7 shadow hover:shadow-md transition-all duration-200`}
                initial={{ y: 32, opacity: 0, scale: 0.97 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.09, duration: 0.45, ease: "easeOut" }}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-neutral-50 border flex items-center justify-center text-xl shadow group-hover:shadow-md transition-all duration-200">
                    {p.icon}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900">{p.title}</div>
                </div>
                <div className="text-base text-neutral-700 mt-3 pl-1">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
