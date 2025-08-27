"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, User } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Animated, glowing blobs background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/30 to-pink-200/20 blur-3xl"
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

      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="relative rounded-3xl border border-primary/20 bg-white/90 backdrop-blur-lg shadow-2xl p-10 sm:p-14 text-center overflow-hidden"
          initial={{ y: 32, opacity: 0, scale: 0.97 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Sparkles badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-pink-100 text-green-700 font-semibold text-base shadow mb-5 border border-green-100/60"
            initial={{ y: -16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles size={20} className="text-yellow-500" />
            Find Your Best Fit
          </motion.span>
          <motion.h3
            className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Get Your Personalized Program Match
          </motion.h3>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          >
            <span className="font-semibold text-green-700">Answer a few quick questions</span> and receive <span className="text-blue-700 font-semibold">expert-backed suggestions</span> in minutes. <span className="text-pink-600 font-semibold">No spam, just clarity!</span>
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.04 }}>
              <Link
                href="#suggest"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-7 py-3 text-base font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-150"
              >
                <Sparkles size={20} className="text-yellow-300" />
                Start Suggestion
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.04 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3 text-base font-semibold text-primary shadow hover:bg-blue-50 hover:scale-105 transition-all duration-150"
              >
                <User size={18} className="text-green-600" />
                Talk to an Expert
              </Link>
            </motion.div>
          </div>
          {/* Decorative floating sparkles */}
          <motion.div
            className="pointer-events-none absolute -top-8 left-8"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Sparkles size={32} className="text-pink-300 drop-shadow" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute bottom-6 right-8"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Sparkles size={28} className="text-blue-300 drop-shadow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
