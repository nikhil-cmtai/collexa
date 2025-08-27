"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Color theme harmonized with the rest of the website (primary/secondary using opacity classes)
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
      {/* Only keep subtle top and bottom fade for section */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[270px_1fr] gap-10">
          {/* Sidebar */}
          <motion.aside
            className="sticky md:top-24 h-max rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur-xl p-6 shadow-xl"
            initial={{ x: -18, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-extrabold text-neutral-900 tracking-tight flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
              Explore Courses
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCategory(activeCategory === c.key ? null : c.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-150 shadow-sm",
                    activeCategory === c.key
                      ? "bg-primary/90 text-white border-primary scale-105"
                      : "bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-primary/10 hover:border-primary/30"
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="mt-7">
              <label className="text-xs font-semibold text-neutral-600">Search</label>
              <Input
                placeholder="🔍 Find a course"
                className="mt-2 rounded-lg border-neutral-200 focus:ring-2 focus:ring-primary/40"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="mt-7">
              <label className="text-xs font-semibold text-neutral-600">Duration</label>
              <Select value={duration} onValueChange={(v) => setDuration(v)}>
                <SelectTrigger className="w-full mt-2 rounded-lg border-neutral-200 focus:ring-2 focus:ring-primary/40">
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
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg text-accent"
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Browse Courses
            </motion.h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.length === 0 && (
                <motion.div
                  className="col-span-full flex flex-col items-center justify-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="text-5xl mb-2">😕</span>
                  <div className="text-lg font-semibold text-neutral-700">No courses found</div>
                  <div className="text-sm text-neutral-500 mt-1">Try a different search or filter.</div>
                </motion.div>
              )}
              {filtered.map((c, idx) => (
                <motion.div
                  key={c.title}
                  className="group relative overflow-visible"
                  initial={{ y: 24, opacity: 0, scale: 0.97 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.5, ease: "easeOut" }}
                >
                  <Card
                    className={[
                      "relative p-6 rounded-2xl border-0 shadow-xl bg-white/90 transition-all duration-200 hover:scale-[1.025] hover:shadow-2xl",
                      "before:absolute before:inset-0 before:rounded-2xl before:z-0 before:bg-primary/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300",
                    ].join(" ")}
                    style={{
                      boxShadow:
                        "0 4px 32px 0 rgb(59 130 246 / 10%), 0 1.5px 8px 0 rgb(251 191 36 / 8%)",
                    }}
                  >
                    {/* Tag badge */}
                    {c.tag && (
                      <Badge
                        variant="default"
                        className="absolute right-5 top-5 z-10 bg-primary/90 text-white font-bold shadow-lg animate-bounce"
                      >
                        {c.tag}
                      </Badge>
                    )}
                    <div className="relative z-10">
                      <div className="text-lg font-bold text-neutral-900 mb-1 flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
                        {c.title}
                      </div>
                      <div className="text-xs text-neutral-500 font-medium mb-4">
                        {c.level} <span className="mx-1">•</span> {c.duration}
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <Button
                          size="sm"
                          className="bg-primary/90 text-white font-semibold shadow-md hover:bg-secondary/90 transition-all"
                        >
                          Compare
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-secondary/30 text-primary font-semibold hover:bg-secondary/10 transition-all"
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-primary/40 text-primary font-bold bg-white/80 hover:bg-primary/10 hover:border-primary/60 transition-all shadow-md"
              >
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesExploreSection;
