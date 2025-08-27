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

const UniversitiesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_0%,rgba(14,165,233,0.12)_0%,rgba(255,255,255,0)_60%),radial-gradient(40%_40%_at_90%_100%,rgba(99,102,241,0.12)_0%,rgba(255,255,255,0)_60%)]" />
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
            Top Online Universities
          </motion.h2>
          <motion.p
            className="mt-2 text-neutral-600 max-w-2xl"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
          >
            Curated list of trusted universities with recognized accreditation.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full"
            initial={{ opacity: 0 }}
            variants={{ show: { opacity: 1 } }}
            style={{marginLeft: "auto", marginRight: "auto" }}
          >
            {universities.map((u, idx) => (
              <motion.div
                key={`${u.name}-${idx}`}
                className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-6 text-left shadow-sm hover:shadow-md transition-shadow"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 5) * 0.05, duration: 0.4, ease: "easeOut" }}
                style={{ minHeight: 160 }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center overflow-hidden">
                    <Image src={u.img} alt="" className="h-8 w-8 opacity-80" width={32} height={32} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-neutral-900 leading-none">{u.name}</div>
                    <div className="text-xs text-neutral-500 mt-1">{u.stat}</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.courses.map((c) => (
                    <span key={c} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
