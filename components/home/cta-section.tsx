"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.12)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur p-8 text-center shadow-sm"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">Get your personalized program match</h3>
          <p className="mt-2 text-neutral-600">Answer a few questions and receive expert-backed suggestions in minutes.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <motion.div whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }}>
              <Link href="#suggest" className="inline-flex items-center rounded-md bg-black px-5 py-2 text-sm text-white hover:bg-neutral-800">
                Start Suggestion →
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }}>
              <Link href="#contact" className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-5 py-2 text-sm text-neutral-900 hover:bg-neutral-50">
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;


