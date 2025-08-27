"use client";

import React from "react";
import { motion } from "framer-motion";

const courses = [
  { title: "Amity Online", desc: "A+ NAAC", list: ["MBA", "MCA", "BBA"] },
  { title: "Jain Online", desc: "A+ NAAC", list: ["MBA", "BCA", "MCA"] },
  { title: "LPU Online", desc: "UGC-DEB", list: ["MBA", "BBA", "BCA"] },
  { title: "Manipal Online", desc: "UGC-DEB", list: ["MBA", "M.Sc DS", "BCA"] },
  { title: "UPES Online", desc: "A NAAC", list: ["MBA", "MA", "BBA"] },
  { title: "Chandigarh Univ.", desc: "A+ NAAC", list: ["MBA", "M.Com", "BCA"] },
];

const CoursesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_0%,rgba(244,63,94,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(40%_40%_at_0%_100%,rgba(34,197,94,0.10)_0%,rgba(255,255,255,0)_60%)]" />
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
            Explore by University
          </motion.h2>
          <motion.p
            className="mt-2 text-neutral-600 max-w-2xl"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Popular universities with multiple online programs.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {courses.map((c, idx) => (
              <motion.div
                key={c.title}
                className="rounded-lg border border-neutral-200 bg-white/80 backdrop-blur p-5 text-left shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <div className="text-base font-medium text-neutral-900">{c.title}</div>
                <div className="text-sm text-neutral-600 mt-1">{c.desc}</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {c.list.map((item) => (
                    <span key={item} className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] text-neutral-700">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="rounded-md bg-black text-white px-3 py-1.5 text-xs hover:bg-neutral-800">Compare</button>
                  <button className="rounded-md border border-neutral-300 bg-white text-neutral-900 px-3 py-1.5 text-xs hover:bg-neutral-50">View details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;


