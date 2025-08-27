import React from "react";
import HeroSection from "@/components/home/hero-section";
import UniversitiesSection from "@/components/home/universities-section";
import CoursesSection from "@/components/home/courses-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import NewsSection from "@/components/home/news-section";
import FaqsSection from "@/components/home/faqs-section";
import CtaSection from "@/components/home/cta-section";
import ContactSection from "@/components/home/contact-section";
import CoursesExploreSection from "@/components/home/courses-explore-section";
import FacultySection from "@/components/home/faculty-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <UniversitiesSection />
      <CoursesSection />
      <CoursesExploreSection />
      <FacultySection />
      <WhyChooseSection />
      <NewsSection />
      <FaqsSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;