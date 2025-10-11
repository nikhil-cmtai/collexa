"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import InternshipsHero from "./InternshipsHero";
import InternshipsHighlights from "./InternshipsHighlights";
import InternshipsHowItWorks from "./InternshipsHowItWorks";
import InternshipsLogos from "./InternshipsLogos";

export default function InternshipsView() {
  // Sample data
const internships = [
  { id: 1, title: "Frontend Developer Intern", company: "Aviraj Infotech", location: "Remote", type: "Internship", stipend: "₹10,000 / month", postedAt: "2 days ago", tags: ["React", "JavaScript", "CSS"] },
  { id: 2, title: "Data Analyst Intern", company: "TechNova Analytics", location: "Bengaluru", type: "Internship", stipend: "₹12,000 / month", postedAt: "5 days ago", tags: ["Python", "Excel", "SQL"] },
  { id: 3, title: "UI/UX Design Intern", company: "DesignStudio", location: "Pune", type: "Internship", stipend: "₹8,000 / month", postedAt: "1 week ago", tags: ["Figma", "Prototyping", "User Research"] },
  { id: 4, title: "Backend Developer Intern", company: "CodeCrafters", location: "Mumbai", type: "Internship", stipend: "₹15,000 / month", postedAt: "3 days ago", tags: ["Node.js", "Express", "MongoDB"] },
  { id: 5, title: "Machine Learning Intern", company: "AI Labs", location: "Remote", type: "Internship", stipend: "₹20,000 / month", postedAt: "6 days ago", tags: ["Python", "TensorFlow", "ML"] },
  { id: 6, title: "Marketing Intern", company: "BrandHive", location: "Delhi", type: "Internship", stipend: "₹7,000 / month", postedAt: "2 weeks ago", tags: ["SEO", "Content Marketing", "Social Media"] },
  { id: 7, title: "Full Stack Developer Intern", company: "TechWave", location: "Bengaluru", type: "Internship", stipend: "₹18,000 / month", postedAt: "1 day ago", tags: ["React", "Node.js", "MongoDB"] },
  { id: 8, title: "Graphic Design Intern", company: "Creative Minds", location: "Chennai", type: "Internship", stipend: "₹6,000 / month", postedAt: "4 days ago", tags: ["Photoshop", "Illustrator", "Figma"] },
  { id: 9, title: "Business Analyst Intern", company: "BizSolutions", location: "Hyderabad", type: "Internship", stipend: "₹9,000 / month", postedAt: "5 days ago", tags: ["Excel", "SQL", "PowerBI"] },
  { id: 10, title: "Content Writing Intern", company: "WriteRight", location: "Remote", type: "Internship", stipend: "₹5,000 / month", postedAt: "1 week ago", tags: ["Copywriting", "Blogging", "SEO"] },
  { id: 11, title: "Data Science Intern", company: "DataQuest", location: "Pune", type: "Internship", stipend: "₹15,000 / month", postedAt: "3 days ago", tags: ["Python", "Pandas", "Machine Learning"] },
  { id: 12, title: "Cybersecurity Intern", company: "SecureNet", location: "Mumbai", type: "Internship", stipend: "₹12,000 / month", postedAt: "2 days ago", tags: ["Network Security", "Ethical Hacking", "Python"] },
  { id: 13, title: "Product Management Intern", company: "ProdMasters", location: "Delhi", type: "Internship", stipend: "₹14,000 / month", postedAt: "6 days ago", tags: ["Agile", "Roadmap", "User Research"] },
  { id: 14, title: "DevOps Intern", company: "CloudOps", location: "Bengaluru", type: "Internship", stipend: "₹16,000 / month", postedAt: "4 days ago", tags: ["AWS", "Docker", "CI/CD"] },
  { id: 15, title: "Mobile App Development Intern", company: "AppWorks", location: "Remote", type: "Internship", stipend: "₹13,000 / month", postedAt: "1 week ago", tags: ["Flutter", "React Native", "Dart"] },
  { id: 16, title: "Digital Marketing Intern", company: "Marketify", location: "Chennai", type: "Internship", stipend: "₹8,000 / month", postedAt: "2 days ago", tags: ["Google Ads", "SEO", "Social Media"] },
  { id: 17, title: "QA Testing Intern", company: "TestLab", location: "Hyderabad", type: "Internship", stipend: "₹9,000 / month", postedAt: "5 days ago", tags: ["Selenium", "Manual Testing", "Automation"] },
  { id: 18, title: "Frontend React Intern", company: "WebCraft", location: "Remote", type: "Internship", stipend: "₹11,000 / month", postedAt: "3 days ago", tags: ["React", "CSS", "HTML"] },
  { id: 19, title: "Business Development Intern", company: "GrowthHub", location: "Bengaluru", type: "Internship", stipend: "₹7,000 / month", postedAt: "6 days ago", tags: ["Sales", "CRM", "Lead Generation"] },
  { id: 20, title: "AI Research Intern", company: "NextGen AI", location: "Pune", type: "Internship", stipend: "₹22,000 / month", postedAt: "2 days ago", tags: ["Python", "Deep Learning", "TensorFlow"] },
];

  // --- State for search ---
  const [searchRole, setSearchRole] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredInternships, setFilteredInternships] = useState(internships);

  // --- Handle search ---
  const handleSearch = () => {
    const filtered = internships.filter((internship) => {
      const matchesRole =
        internship.title.toLowerCase().includes(searchRole.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchRole.toLowerCase());
      const matchesLocation =
        internship.location.toLowerCase().includes(searchLocation.toLowerCase());
      return matchesRole && matchesLocation;
    });
    setFilteredInternships(filtered);
  };

  return (
    <div className="min-h-[70vh]">
      <InternshipsHero />
      <InternshipsHighlights />
      <InternshipsHowItWorks />
      <InternshipsLogos />

      {/* Internship Listings */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-4 md:p-6 bg-white border border-[var(--border-color)] shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--heading-color)]">
            Explore Internships
          </h2>
          <p className="mt-1 text-sm md:text-base text-[var(--muted-text)]">
            Handpicked internships designed to help students gain real-world experience.
          </p>

          {/* Search Inputs */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              placeholder="Search by role or company"
              value={searchRole}
              onChange={(e) => setSearchRole(e.target.value)}
      
              className="rounded-lg px-4 py-3 text-[15px] bg-white text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
            <input
              placeholder="Location (e.g., Bengaluru, Remote)"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="rounded-lg px-4 py-3 text-[15px] bg-white text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg px-6 py-3 text-sm font-semibold bg-[var(--primary)] text-white shadow hover:shadow-md transition"
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Internship Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl border border-[var(--border-color)] bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--heading-color)]">
                        {internship.title}
                      </h3>
                      <p className="text-sm text-[var(--muted-text)] mt-0.5">
                        {internship.company} • {internship.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-white">
                      {internship.type}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {internship.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--surface)] text-[var(--text-color)] border border-[var(--border-color)] px-2.5 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--heading-color)]">
                      {internship.stipend}
                    </span>
                    <span className="text-xs text-[var(--muted-text)]">
                      {internship.postedAt}
                    </span>
                  </div>
                </div>

                <div className="bg-[var(--surface)] border-t border-[var(--border-color)] p-4 flex items-center justify-between">
                  <button className="text-sm font-semibold text-white bg-[var(--primary)] hover:brightness-110 rounded-md px-4 py-2">
                    Apply
                  </button>
                  <button className="text-sm font-medium text-[var(--primary)] hover:underline">
                    View details
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-6">
              No internships found for your search.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
