import React from "react";
import { HeroSection } from "@/components/home/hero-section";
import TrendingCarousel from "@/components/home/trending-carousel";
import JobsTabs from "@/components/home/jobs-tab";
import CompassCoursesAndCertifications from "@/components/home/CompassCoursesAndCertifications";
import SkillsCoursesAndDevelopment from "@/components/home/skill-courses";
import InternshipTabs from "@/components/home/internship-tab";
import Testimonial from "@/components/home/testimonial";
import { CompanyLogoSlider } from "@/components/home/company-slider";
import { NewsletterSection } from "@/components/home/newsletter-section";
import NewsSection from "@/components/home/news-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection />   
      <TrendingCarousel />
      <CompassCoursesAndCertifications />
      <JobsTabs />
      <InternshipTabs />
      <SkillsCoursesAndDevelopment />
      <Testimonial />
      <CompanyLogoSlider />
      <NewsSection />
      <NewsletterSection />

      {/* <UniversitiesSection />
      <CoursesExploreSection />
      <FacultySection />
      <WhyChooseSection />
      <NewsSection />
      <FaqsSection />
      <CtaSection />
      <ContactSection /> */}
    </div>
  );
};

export default HomePage;