"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  // Hero content configuration object
  const heroContent = {
    heading: "Launch your career with Collexa",
    subHeading: "Connect with top companies, find internships, and land your dream job through our comprehensive career platform.",
    buttons: [
      {
        text: "Explore Courses",
        href: "/campus-courses",
        variant: "default" as const,
        icon: ArrowRight,
        primary: true
      },
      {
        text: "Find Jobs",
        href: "/jobs",
        variant: "outline" as const,
        primary: false
      }
    ],
    image: {
      src: "/Home1.png",
      alt: "Student Success",
      width: 500,
      height: 500
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-white min-h-[70vh] md:min-h-[60vh] flex items-center py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-4 md:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Headline */}
              <motion.div 
                className="space-y-3 md:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  {heroContent.heading}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg !text-gray-600 leading-relaxed">
                  {heroContent.subHeading}
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="space-y-3 md:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Dynamic Buttons */}
                <div
                  className={`flex ${
                    heroContent.buttons.length === 1
                      ? "justify-start"
                      : "flex-col sm:flex-row gap-3 md:gap-4"
                  }`}
                >
                  {heroContent.buttons.map((button, index) => {
                    const Icon = button.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                      >
                        <Button
                          asChild
                          size="lg"
                          variant={button.variant}
                          className={`h-10 md:h-12 px-4 md:px-6 text-sm md:text-base font-semibold w-full sm:w-auto ${button.primary ? '!text-white' : 'text-primary'}`}
                        >
                          <Link href={button.href}>
                            {button.text}
                            {Icon && <Icon className="ml-2 size-3 md:size-4" />}
                          </Link>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="relative z-10 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src={heroContent.image.src}
                  alt={heroContent.image.alt}
                  width={heroContent.image.width}
                  height={heroContent.image.height}
                  className="object-contain mx-auto w-full h-auto"
                />
              </motion.div>

              {/* Abstract Graphics */}
              <motion.div 
                className="absolute top-5 md:top-10 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-primary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 right-0 w-24 h-24 md:w-40 md:h-40 bg-primary/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;