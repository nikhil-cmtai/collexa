"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Rich animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(255,255,255,0)_60%),
                                      radial-gradient(40%_40%_at_0%_70%,rgba(16,185,129,0.25)_0%,rgba(255,255,255,0)_60%),
                                      radial-gradient(40%_40%_at_100%_80%,rgba(244,63,94,0.25)_0%,rgba(255,255,255,0)_60%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/15 to-transparent blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Floating orbs */}
        <motion.div
          aria-hidden
          className="absolute top-24 left-12 h-24 w-24 rounded-full bg-emerald-400/20 blur-xl"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-12 right-16 h-28 w-28 rounded-full bg-rose-400/20 blur-xl"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 backdrop-blur bg-white/70 px-3 py-1 text-xs text-neutral-700 mb-4 shadow-sm"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span>Trusted by 1 Lakh+ students</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>500+ expert mentors</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 max-w-4xl leading-[1.1]"
            initial={{ y: 16, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700">
              Chuno Apna Sahi: Compare Online Universities & Programs
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-neutral-600 max-w-2xl"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Explore 100+ online universities with unbiased guidance. Get a personalized suggestion in 2 minutes.
          </motion.p>

          <motion.div
            className="mt-8 w-full max-w-xl"
            initial={{ y: 16, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex gap-2 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 rounded-md p-1 shadow-sm">
              <input
                type="text"
                placeholder="Search programs e.g. Online MBA"
                className="flex-1 rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
              />
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-md bg-black text-white px-5 text-sm hover:bg-neutral-800"
              >
                Search
              </motion.button>
            </div>
            <div className="mt-3 text-xs text-neutral-500">
              Popular: Online MBA, Online MCA, Data Science
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-4 text-xs text-neutral-700"
            initial={{ opacity: 0 }}
            variants={{ show: { opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 items-center rounded-full bg-green-50 px-2 text-green-700 border border-green-200">4.8/5 Google</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-neutral-200" />
            <Link href="#suggest" className="text-neutral-800 hover:text-black underline underline-offset-4">
              Suggest in 2 mins
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;