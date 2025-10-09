import React from "react";
import Image from "next/image";
import Link from "next/link";
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
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                  {heroContent.heading}
                </h1>
                <p className="text-base lg:text-lg !text-gray-600 leading-relaxed">
                  {heroContent.subHeading}
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-4">
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
                       <Button
                         key={index}
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
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={heroContent.image.src}
                  alt={heroContent.image.alt}
                  width={heroContent.image.width}
                  height={heroContent.image.height}
                  className="object-contain mx-auto"
                />
              </div>

              {/* Abstract Graphics */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;