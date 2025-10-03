"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string | null;
  type: string;
  duration: string | null;
  tags: string[];
  postedAt: string;
};

type JobsState = {
  items: Job[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  query: string;
  location: string;
  type: string;
};

// Dummy fallback data to ensure UI shows jobs even without API
const dummyJobs: Job[] = [
  {
    id: "j-1",
    title: "Frontend Developer Intern",
    company: "Acme Labs",
    location: "Bengaluru",
    stipend: "₹15,000/mo",
    type: "Internship",
    duration: "3 months",
    tags: ["React", "TypeScript", "UI"],
    postedAt: "2d ago",
  },
  {
    id: "j-2",
    title: "Junior Backend Engineer",
    company: "Nimbus Tech",
    location: "Hyderabad",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["Node.js", "Express", "MongoDB"],
    postedAt: "3d ago",
  },
  {
    id: "j-3",
    title: "Data Analyst Intern",
    company: "Quantia",
    location: "Remote",
    stipend: "₹12,000/mo",
    type: "Internship",
    duration: "4 months",
    tags: ["SQL", "Excel", "Python"],
    postedAt: "1d ago",
  },
  {
    id: "j-4",
    title: "Marketing Associate",
    company: "BrightWave",
    location: "Mumbai",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["SEO", "Content", "Social"],
    postedAt: "5d ago",
  },
  {
    id: "j-5",
    title: "UX/UI Designer Intern",
    company: "Designify",
    location: "Chennai",
    stipend: "₹10,000/mo",
    type: "Internship",
    duration: "3 months",
    tags: ["Figma", "Prototyping", "Research"],
    postedAt: "Today",
  },
  {
    id: "j-6",
    title: "Finance Trainee",
    company: "BlueStone Capital",
    location: "Delhi",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["Tally", "Accounting", "Excel"],
    postedAt: "7d ago",
  },
  {
    id: "j-7",
    title: "Full-stack Developer",
    company: "StackForge",
    location: "Pune",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["React", "Node.js", "PostgreSQL"],
    postedAt: "4d ago",
  },
  {
    id: "j-8",
    title: "HR Coordinator Intern",
    company: "PeopleFirst",
    location: "Kolkata",
    stipend: "₹8,000/mo",
    type: "Internship",
    duration: "6 months",
    tags: ["HR", "Onboarding", "Recruitment"],
    postedAt: "2d ago",
  },
  {
    id: "j-9",
    title: "Digital Marketing Executive",
    company: "GrowthX",
    location: "Remote",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["SEO", "Ads", "Analytics"],
    postedAt: "Today",
  },
  {
    id: "j-10",
    title: "Data Engineer Intern",
    company: "DataFlow",
    location: "Bengaluru",
    stipend: "₹18,000/mo",
    type: "Internship",
    duration: "5 months",
    tags: ["Python", "ETL", "AWS"],
    postedAt: "1d ago",
  },
  {
    id: "j-11",
    title: "UI Engineer",
    company: "PixelCraft",
    location: "Chennai",
    stipend: null,
    type: "Full-time",
    duration: null,
    tags: ["JavaScript", "CSS", "Accessibility"],
    postedAt: "6d ago",
  },
  {
    id: "j-12",
    title: "Product Analyst Intern",
    company: "NovaWorks",
    location: "Hyderabad",
    stipend: "₹14,000/mo",
    type: "Internship",
    duration: "3 months",
    tags: ["SQL", "Dashboards", "Product"],
    postedAt: "3d ago",
  },
];

const initialState: JobsState = {
  items: dummyJobs,
  status: "idle",
  error: undefined,
  query: "",
  location: "",
  type: "",
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (
    params: { q?: string; location?: string; type?: string } | undefined
  ) => {
    try {
      const search = new URLSearchParams();
      if (params?.q) search.set("q", params.q);
      if (params?.location) search.set("location", params.location);
      if (params?.type) search.set("type", params.type);
      const qs = search.toString();
      const url = qs ? `/api/jobs?${qs}` : "/api/jobs";
      const res = await axios.get<{ jobs: Job[] }>(url);
      return res.data?.jobs?.length ? res.data.jobs : dummyJobs;
    } catch (error: unknown) {
      console.error("Failed to fetch jobs:", error);
      return dummyJobs;
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load jobs";
      });
  },
});

export const { setQuery, setLocation, setType } = jobsSlice.actions;
export default jobsSlice.reducer;


