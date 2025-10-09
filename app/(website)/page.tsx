"use client";

import React from "react";
import HeroSection from "@/components/home/hero-section";
import StatSection from "@/components/home/stat-section";
import TrendingCarousel from "@/components/home/trending-section";
import JobsTabs from "@/components/home/jobs-section";
import CompassCoursesAndCertifications from "@/components/home/campus-course-section";
import SkillsCoursesAndDevelopment from "@/components/home/learn-skills-section";
import InternshipTabs from "@/components/home/internship-section";
import Testimonial from "@/components/home/testimonial-section";
import { CompanyLogoSlider } from "@/components/home/company-slider";
import WhyChooseSection from "@/components/home/why-choose-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection />   
      <StatSection />
      <TrendingCarousel />
      <CompassCoursesAndCertifications />
      <JobsTabs />
      <InternshipTabs />
      <SkillsCoursesAndDevelopment />
      <WhyChooseSection />
      <Testimonial />
      <CompanyLogoSlider />
    </div>
  );
};

export default HomePage;