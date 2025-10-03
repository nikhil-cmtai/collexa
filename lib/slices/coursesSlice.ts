"use client";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Course = {
  id: string;
  title: string;
  level: "UG" | "PG" | "Executive";
  mode: "Online" | "Distance" | "Hybrid";
  duration: string; // e.g., "3 Years", "2 Years"
  university: string;
  tags: string[]; // specializations or keywords
};

type CoursesState = {
  items: Course[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  query: string;
  level: string;
  mode: string;
};

const dummyCourses: Course[] = [
  { id: "c-bca-1", title: "BCA - Bachelor of Computer Applications", level: "UG", mode: "Online", duration: "3 Years", university: "Online University A", tags: ["Programming", "IT", "Software"] },
  { id: "c-bba-1", title: "BBA - Bachelor of Business Administration", level: "UG", mode: "Online", duration: "3 Years", university: "Online University B", tags: ["Management", "Marketing", "Finance"] },
  { id: "c-bcom-1", title: "B.Com - Bachelor of Commerce", level: "UG", mode: "Distance", duration: "3 Years", university: "Open University", tags: ["Accounting", "Finance"] },
  { id: "c-mca-1", title: "MCA - Master of Computer Applications", level: "PG", mode: "Online", duration: "2 Years", university: "Tech University", tags: ["Software", "AI", "Data Science"] },
  { id: "c-mba-1", title: "MBA - Master of Business Administration (General)", level: "PG", mode: "Online", duration: "2 Years", university: "Business School X", tags: ["HR", "Marketing", "Finance"] },
  { id: "c-mba-2", title: "MBA - Business Analytics", level: "PG", mode: "Online", duration: "2 Years", university: "Business School X", tags: ["Analytics", "Data", "BI"] },
  { id: "c-ex-mba-1", title: "Executive MBA for Working Professionals", level: "Executive", mode: "Hybrid", duration: "12-18 Months", university: "Institute Y", tags: ["Leadership", "Strategy"] },
  { id: "c-pgdm-1", title: "Online PGDM", level: "PG", mode: "Online", duration: "2 Years", university: "Institute Z", tags: ["PGDM", "Management"] },
];

const initialState: CoursesState = {
  items: dummyCourses,
  status: "idle",
  error: undefined,
  query: "",
  level: "",
  mode: "",
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (params: { q?: string; level?: string; mode?: string } | undefined) => {
    try {
      const sp = new URLSearchParams();
      if (params?.q) sp.set("q", params.q);
      if (params?.level) sp.set("level", params.level);
      if (params?.mode) sp.set("mode", params.mode);
      const url = sp.toString() ? `/api/courses?${sp.toString()}` : "/api/courses";
      const res = await axios.get<{ courses: Course[] }>(url);
      return res.data?.courses?.length ? res.data.courses : dummyCourses;
    } catch {
      return dummyCourses;
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourseQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setCourseLevel(state, action: PayloadAction<string>) {
      state.level = action.payload;
    },
    setCourseMode(state, action: PayloadAction<string>) {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCourseQuery, setCourseLevel, setCourseMode } = coursesSlice.actions;
export default coursesSlice.reducer;


