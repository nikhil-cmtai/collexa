"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Newspaper } from "lucide-react";
import Link from "next/link";

const news = [
  {
    title: "UGC expands eligibility for online degrees",
    date: "Sep 2024",
    img: "/window.svg",
    highlight: "🔥 Trending",
    color: "from-yellow-400 via-orange-300 to-pink-400",
    link: "#", // Placeholder link
  },
  {
    title: "AI-driven counseling improves program matches",
    date: "Aug 2024",
    img: "/globe.svg",
    highlight: "✨ AI Revolution",
    color: "from-blue-400 via-cyan-300 to-emerald-300",
    link: "#",
  },
  {
    title: "Top universities announce new DS programs",
    date: "Jul 2024",
    img: "/next.svg",
    highlight: "🚀 New Launch",
    color: "from-indigo-400 via-purple-300 to-pink-300",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Sexy animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(234,179,8,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(40%_40%_at_100%_100%,rgba(56,189,248,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-gradient-to-br from-yellow-300/20 to-pink-400/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-16 left-10 h-20 w-20 rounded-full bg-blue-400/20 blur-xl"
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-10 right-16 h-24 w-24 rounded-full bg-emerald-400/20 blur-xl"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-100 text-sm font-semibold text-yellow-700 shadow"
            initial={{ y: 12, opacity: 0, scale: 0.95 }}
            variants={{ show: { y: 0, opacity: 1, scale: 1 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Sparkles size={18} className="text-yellow-500" />
            Hot & Fresh
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ y: 16, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Latest News & Buzz
          </motion.h2>
          <motion.p
            className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Stay ahead with the freshest updates from the online education world. <span className="font-semibold text-yellow-600">No FOMO!</span>
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {news.map((n, idx) => (
              <motion.article
                key={n.title}
                className={`relative group overflow-hidden rounded-3xl border border-neutral-200 bg-white/90 backdrop-blur shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-200`}
                initial={{ y: 24, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.09, duration: 0.5, ease: "easeOut" }}
              >
                {/* Glowing ring */}
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full blur-2xl opacity-30 z-0 bg-gradient-to-br ${n.color}`}
                />
                <div className="relative z-10 h-50 w-full flex items-center justify-center bg-gradient-to-br from-white to-neutral-100 border-b border-neutral-200">
                  <Image src={n.img} alt={n.title} className="h-10 w-10 opacity-90 drop-shadow" width={56} height={56} />
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] text-neutral-500">{n.date}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold text-yellow-700 shadow-sm">
                      <Newspaper size={14} className="text-yellow-500" />
                      {n.highlight}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mt-1">{n.title}</div>
                  {/* Read more button */}
                  <Link
                    href={n.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium transition-all duration-150 cursor-pointer"
                    aria-label={`Read more about ${n.title}`}
                  >
                    Read more
                    <span className="ml-1">→</span>
                  </Link>
                </div>
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Sparkles size={20} className="text-pink-400 drop-shadow" />
                </motion.div>
              </motion.article>
            ))}
          </div>
          {/* Read more button for all news */}
          <div className="mt-10 flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-7 py-3 text-base font-semibold text-primary border border-primary/20 bg-white shadow hover:bg-secondary/10 hover:scale-105 transition-transform duration-150"
              aria-label="Read more news"
            >
              Read more news
              <Newspaper size={20} className="ml-1 text-yellow-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
