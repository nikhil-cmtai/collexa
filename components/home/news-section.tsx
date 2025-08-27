"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const news = [
  { title: "UGC expands eligibility for online degrees", date: "Sep 2024", img: "/window.svg" },
  { title: "AI-driven counseling improves program matches", date: "Aug 2024", img: "/globe.svg" },
  { title: "Top universities announce new DS programs", date: "Jul 2024", img: "/next.svg" },
];

const NewsSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(234,179,8,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(40%_40%_at_100%_100%,rgba(56,189,248,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Latest News
          </motion.h2>
          <motion.p
            className="mt-2 text-neutral-600 max-w-2xl"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Updates from the online education ecosystem.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            {news.map((n, idx) => (
              <motion.article
                key={n.title}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <div className="h-36 w-full bg-neutral-50 border-b border-neutral-200 flex items-center justify-center">
                  <Image src={n.img} alt="" className="h-10 w-10 opacity-70" width={40} height={40} />
                </div>
                <div className="p-5">
                  <div className="text-[11px] text-neutral-500">{n.date}</div>
                  <div className="text-base font-medium text-neutral-900 mt-1">{n.title}</div>
                  <div className="mt-3 text-sm text-neutral-600">Read more →</div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;


