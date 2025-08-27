"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  { name: "Dr. Neha Sharma", role: "Data Science", uni: "Ex-IIT, 12+ yrs", img: "/window.svg" },
  { name: "Prof. Arjun Mehta", role: "Marketing", uni: "Ex-ISB, 10+ yrs", img: "/globe.svg" },
  { name: "Ananya Rao", role: "Product", uni: "Ex-Meta, 8+ yrs", img: "/next.svg" },
  { name: "Kunal Verma", role: "Finance", uni: "Ex-Goldman, 9+ yrs", img: "/vercel.svg" },
];

const FacultySection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 text-center"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Meet our Faculty & Mentors
          </motion.h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mentors.map((m, idx) => (
              <motion.div
                key={m.name}
                className="rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6 text-center shadow-sm overflow-hidden"
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <div className="mx-auto h-36 w-36 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center overflow-hidden">
                  <Image src={m.img} alt="" className="h-20 w-20 opacity-80" width={80} height={80} />
                </div>
                <div className="mt-3 text-sm font-medium text-neutral-900">{m.name}</div>
                <div className="text-xs text-neutral-600">{m.role}</div>
                <div className="mt-1 text-[11px] text-neutral-500">{m.uni}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-5 text-center">
              <div className="text-2xl font-semibold text-neutral-900">500+</div>
              <div className="text-xs text-neutral-600">Expert mentors</div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-5 text-center">
              <div className="text-2xl font-semibold text-neutral-900">100K+</div>
              <div className="text-xs text-neutral-600">Students guided</div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-5 text-center">
              <div className="text-2xl font-semibold text-neutral-900">4.8/5</div>
              <div className="text-xs text-neutral-600">Average rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
