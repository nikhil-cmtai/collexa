"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Sparkles } from "lucide-react";

const mentors = [
  {
    name: "Dr. Neha Sharma",
    role: "Data Science",
    uni: "Ex-IIT, 12+ yrs",
    img: "/window.svg",
    quote: "Empowering students to solve real-world problems with data.",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Prof. Arjun Mehta",
    role: "Marketing",
    uni: "Ex-ISB, 10+ yrs",
    img: "/globe.svg",
    quote: "Marketing is not a battle of products, it's a battle of perceptions.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Ananya Rao",
    role: "Product",
    uni: "Ex-Meta, 8+ yrs",
    img: "/next.svg",
    quote: "Build for users, and success will follow.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Kunal Verma",
    role: "Finance",
    uni: "Ex-Goldman, 9+ yrs",
    img: "/vercel.svg",
    quote: "Numbers tell a story. Learn to read between the lines.",
    color: "from-yellow-400 to-orange-500",
  },
];

const statCards = [
  {
    value: "500+",
    label: "Expert mentors",
    icon: <Sparkles className="text-yellow-400" size={28} />,
    color: "from-yellow-400 to-orange-400",
  },
  {
    value: "100K+",
    label: "Students guided",
    icon: <Star className="text-pink-500" size={28} />,
    color: "from-pink-500 to-rose-400",
  },
  {
    value: "4.8/5",
    label: "Average rating",
    icon: (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={i < 4 ? "text-yellow-400" : "text-neutral-300"} fill={i < 4 ? "#facc15" : "none"} />
        ))}
      </div>
    ),
    color: "from-blue-500 to-indigo-500",
  },
];

const FacultySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Sexy animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-b from-pink-400/20 to-transparent blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-24 left-12 h-24 w-24 rounded-full bg-blue-400/20 blur-xl"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-12 right-16 h-28 w-28 rounded-full bg-emerald-400/20 blur-xl"
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2
            className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 text-center tracking-tight bg-gradient-to-b from-pink-600 via-indigo-700 to-neutral-900 bg-clip-text text-transparent"
            initial={{ y: 24, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Meet Our Rockstar Faculty & Mentors
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-neutral-600 text-center max-w-2xl mx-auto"
            initial={{ y: 12, opacity: 0 }}
            variants={{ show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Learn from the best minds in the industry. Our mentors are leaders from IIT, ISB, Meta, Goldman Sachs & more.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((m, idx) => (
              <motion.div
                key={m.name}
                className={`relative rounded-3xl border border-neutral-200 bg-white/90 backdrop-blur p-8 text-center shadow-xl overflow-hidden group hover:scale-[1.03] transition-transform duration-200`}
                initial={{ y: 24, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.09, duration: 0.5, ease: "easeOut" }}
              >
                {/* Glowing ring */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full blur-2xl opacity-40 z-0 bg-gradient-to-br ${m.color}`}
                />
                <div className="relative z-10 mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-white to-neutral-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-shadow duration-200">
                  <Image src={m.img} alt={m.name} className="h-20 w-20 opacity-90" width={80} height={80} />
                </div>
                <div className="mt-4 text-lg font-semibold text-neutral-900">{m.name}</div>
                <div className="text-sm text-neutral-600">{m.role}</div>
                <div className="mt-1 text-xs text-neutral-500">{m.uni}</div>
                <div className="mt-4 italic text-[13px] text-neutral-700 px-2 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                  “{m.quote}”
                </div>
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Sparkles size={22} className="text-pink-400 drop-shadow" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className={`relative rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur p-7 text-center shadow-md overflow-hidden`}
              >
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full blur-2xl opacity-30 z-0 bg-gradient-to-br ${stat.color}`}
                />
                <div className="relative z-10 flex items-center justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-150"
            >
              Connect with a Mentor
              <Sparkles size={22} className="ml-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
