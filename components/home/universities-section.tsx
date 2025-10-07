"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type University = {
  name: string;
  stat: string;
  img: string;
  courses: string[];
};

const baseUniversities: University[] = [
  { name: "Amity Online", stat: "A+ NAAC", img: "/logo.png", courses: ["MBA", "BBA", "MCA"] },
  { name: "Jain Online", stat: "A+ NAAC", img: "/globe.svg", courses: ["MBA", "MCA", "BCA"] },
  { name: "LPU Online", stat: "UGC-DEB", img: "/next.svg", courses: ["MBA", "BBA", "BCA"] },
  { name: "Manipal Online", stat: "UGC-DEB", img: "/vercel.svg", courses: ["MBA", "M.Sc DS", "BCA"] },
  { name: "UPES Online", stat: "A NAAC", img: "/window.svg", courses: ["MBA", "M.A.", "BBA"] },
  { name: "Chandigarh Univ.", stat: "A+ NAAC", img: "/globe.svg", courses: ["MBA", "M.Com", "BCA"] },
  { name: "SRM Online", stat: "UGC-DEB", img: "/next.svg", courses: ["MBA", "MCA", "BBA"] },
  { name: "IGNOU", stat: "National Open", img: "/vercel.svg", courses: ["MBA", "MSW", "M.Com"] },
  { name: "Symbiosis Online", stat: "UGC-DEB", img: "/window.svg", courses: ["MBA", "PGDM", "BBA"] },
  { name: "NMIMS Online", stat: "UGC-DEB", img: "/globe.svg", courses: ["MBA", "BBA", "Supply"] },
  { name: "Sikkim Manipal", stat: "UGC-DEB", img: "/next.svg", courses: ["MBA", "BBA", "MCA"] },
  { name: "Amrita Online", stat: "UGC-DEB", img: "/vercel.svg", courses: ["MBA", "MCA", "BCA"] },
];

// Only take first 25 for 5x5 grid
const universities: University[] = [
  ...baseUniversities,
  ...baseUniversities.slice(0, 13)
].slice(0, 25);

const badgeColors = [
  "from-blue-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-400",
  "from-yellow-400 to-orange-500",
  "from-purple-500 to-fuchsia-500",
];

const cardVariants = {
  hidden: { y: 24, opacity: 0, scale: 0.96 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: (i % 5) * 0.07 + Math.floor(i / 5) * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const UniversitiesSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      id="universities"
    >
      {/* Vibrant background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10)_0%,rgba(255,255,255,0)_70%),radial-gradient(40%_40%_at_0%_100%,rgba(244,63,94,0.10)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/20 to-pink-400/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
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
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 backdrop-blur bg-white/80 px-4 py-1 text-sm text-neutral-700 mb-4 shadow"
            initial={{ y: 16, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="font-semibold text-blue-600">🏆 25 Best Online Universities</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>Accredited & Trusted</span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-transparent"
            initial={{ y: 18, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Top Online Universities in India
          </motion.h2>
          <motion.p
            className="mt-3 text-lg text-neutral-600 max-w-2xl"
            initial={{ y: 14, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Explore a handpicked list of India’s most trusted online universities. All are UGC/AICTE/NAAC accredited, offering a wide range of programs for your career growth.
          </motion.p>

          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 w-full"
            initial={{ opacity: 0 }}
            variants={{ show: { opacity: 1 } }}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {universities.map((u, idx) => (
              <motion.div
                key={`${u.name}-${idx}`}
                className="group relative rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ minHeight: 180 }}
              >
                {/* Badge */}
                <div className="absolute -top-4 right-4">
                  <span
                    className={`inline-block rounded-full bg-gradient-to-r ${badgeColors[idx % badgeColors.length]} px-3 py-1 text-xs font-semibold text-white shadow`}
                  >
                    {u.stat}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="h-16 w-16 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
                    <Image src={u.img} alt={u.name} className="h-10 w-10 opacity-90" width={40} height={40} />
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-lg font-bold text-neutral-900 leading-tight">{u.name}</div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {u.courses.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-neutral-200 bg-gradient-to-r from-neutral-50 to-white px-3 py-1 text-xs text-neutral-700 font-medium shadow-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12"
            initial={{ y: 20, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="#suggest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-base font-semibold px-7 py-3 shadow-lg hover:scale-105 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <span className="text-lg">✨</span>
              Get Personalized University Suggestion
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
