"use client";

import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobsSlice";
import coursesReducer from "./features/coursesSlice";
import internshipsReducer from "./features/internshipsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    courses: coursesReducer,
    internships: internshipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



