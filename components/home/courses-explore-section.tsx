"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Course = {
  title: string;
  category: string;
  duration: string;
  tag?: string;
  level?: string;
};

const categories = [
  { key: "pg", label: "PG Courses" },
  { key: "exec", label: "Executive Education" },
  { key: "phd", label: "Doctorate / Ph.D." },
  { key: "ug", label: "UG Courses" },
  { key: "job", label: "Job Guarantee" },
  { key: "abroad", label: "Study Abroad" },
  { key: "diploma", label: "Advanced Diploma" },
  { key: "cert", label: "Skilling & Certificate" },
];

const allCourses: Course[] = [
  { title: "Online MBA", category: "pg", duration: "24 months", tag: "ROI 100%", level: "PG" },
  { title: "1 Year MBA Online", category: "exec", duration: "12 months", tag: "Fast-track", level: "Executive" },
  { title: "M.Sc. Data Science", category: "pg", duration: "24 months", tag: "Trending", level: "PG" },
  { title: "BBA (Online)", category: "ug", duration: "36 months", level: "UG" },
  { title: "Digital Marketing", category: "cert", duration: "3-6 months", tag: "Popular", level: "Certificate" },
  { title: "Cloud Computing", category: "cert", duration: "6 months", level: "Certificate" },
  { title: "Executive MBA for Working Professionals", category: "exec", duration: "18 months", level: "Executive" },
  { title: "Doctor of Philosophy", category: "phd", duration: "4-5 years", level: "Doctorate" },
];

const CoursesExploreSection = () => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("Any");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allCourses.filter((c) => {
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
      const matchesDuration =
        duration === "Any" ||
        (duration === "3-6 months" && /3|6/.test(c.duration)) ||
        (duration === "12 months" && /12/.test(c.duration)) ||
        (duration === "24+ months" && /(24|36|48)/.test(c.duration));
      const matchesCategory = !activeCategory || c.category === activeCategory;
      return matchesQuery && matchesDuration && matchesCategory;
    });
  }, [query, duration, activeCategory]);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,132,199,0.10)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar */}
          <motion.aside
            className="sticky md:top-20 h-max rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-4 shadow-sm"
            initial={{ x: -12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-neutral-900">Explore</div>
            <div className="mt-3 space-y-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCategory(activeCategory === c.key ? null : c.key)}
                  className={["w-full rounded-md px-3 py-2 text-left text-sm border", activeCategory === c.key ? "bg-black text-white border-black" : "hover:bg-neutral-50 border-transparent hover:border-neutral-200"].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label className="text-xs text-neutral-600">Search</label>
              <Input placeholder="Find a course" className="mt-1" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="mt-4">
              <label className="text-xs text-neutral-600">Duration</label>
              <Select value={duration} onValueChange={(v) => setDuration(v)}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                  <SelectItem value="12 months">12 months</SelectItem>
                  <SelectItem value="24+ months">24+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.aside>

          {/* Content */}
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Browse Courses
            </motion.h2>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((c, idx) => (
                <motion.div
                  key={c.title}
                  className="group relative overflow-hidden"
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.45, ease: "easeOut" }}
                >
                  <Card className="p-5">
                  {c.tag && (
                    <Badge variant="default" className="absolute right-3 top-3">{c.tag}</Badge>
                  )}
                  <div className="text-base font-medium text-neutral-900">{c.title}</div>
                  <div className="mt-1 text-xs text-neutral-500">{c.level} • {c.duration}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <Button size="sm">Compare</Button>
                    <Button size="sm" variant="outline">Details</Button>
                  </div>
                  <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-200/60 to-transparent blur-2xl transition-transform group-hover:scale-110" />
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline">View all</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesExploreSection;


