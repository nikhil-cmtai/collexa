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
        href: "/courses",
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
      src: "/images/hero-man.png",
      alt: "Student Success",
      width: 500,
      height: 500
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-white h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Headline */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                  {heroContent.heading}
                </h1>
                <p className="text-base lg:text-lg !text-gray-600 leading-relaxed">
                  {heroContent.subHeading}
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Dynamic Buttons */}
                <div
                  className={`flex ${
                    heroContent.buttons.length === 1
                      ? "justify-start"
                      : "flex-col sm:flex-row gap-4"
                  }`}
                >
                  {heroContent.buttons.map((button, index) => {
                    const Icon = button.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          asChild
                          size="lg"
                          variant={button.variant}
                          className={`h-12 px-6 text-base font-semibold ${button.primary ? '!text-white' : 'text-primary'}`}
                        >
                          <Link href={button.href}>
                            {button.text}
                            {Icon && <Icon className="ml-2 size-4" />}
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
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src={heroContent.image.src}
                  alt={heroContent.image.alt}
                  width={heroContent.image.width}
                  height={heroContent.image.height}
                  className="object-contain mx-auto"
                />
              </motion.div>

              {/* Abstract Graphics */}
              <motion.div 
                className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
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
                className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
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
                className="absolute top-1/2 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
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