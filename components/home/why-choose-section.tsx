"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Search, GraduationCap, Sparkles, Handshake, Users, Award, Zap, Target, Shield, TrendingUp } from "lucide-react";

// Why Choose Collexa Points with enhanced visuals
const whyChoosePoints = [
  {
    id: 1,
    title: "Unbiased Guidance",
    description: "No bias, no bakwaas. Get the real deal for YOUR goals.",
    icon: Target,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stats: "100% Transparent",
    badge: "Trusted",
    emoji: "🎯",
    highlight: "Zero Bias"
  },
  {
    id: 2,
    title: "Expert Mentors",
    description: "500+ industry pros. IIT, ISB, Meta, Goldman – sab yahan!",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
    stats: "500+ Mentors",
    badge: "Premium",
    emoji: "👨‍🏫",
    highlight: "Top Tier"
  },
  {
    id: 3,
    title: "AI-Powered Match",
    description: "2 min mein apna perfect course. AI-powered, full filmy style.",
    icon: Sparkles,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-100",
    stats: "95% Accuracy",
    badge: "Smart",
    emoji: "🤖",
    highlight: "AI Magic"
  },
  {
    id: 4,
    title: "End-to-End Support",
    description: "Application se admission tak, Collexa always with you 💪",
    icon: Handshake,
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    stats: "24/7 Support",
    badge: "Always There",
    emoji: "🤝",
    highlight: "Always There"
  },
  {
    id: 5,
    title: "Industry Connections",
    description: "Direct access to top companies and hiring managers.",
    icon: Users,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    stats: "1000+ Companies",
    badge: "Connected",
    emoji: "🏢",
    highlight: "Direct Access"
  },
  {
    id: 6,
    title: "Success Guarantee",
    description: "Placement assistance with 95% success rate.",
    icon: Award,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-100",
    stats: "95% Success Rate",
    badge: "Guaranteed",
    emoji: "🏆",
    highlight: "Guaranteed"
  }
];

const WhyChooseSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(whyChoosePoints.length / cardsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="bg-gradient-to-b from-background to-primary/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Why Choose Collexa?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-heading mb-6 leading-tight">
            The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Smart Choice</span> for Your Career
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            No confusion, only clarity! Compare, match, and win with India&apos;s most trusted education platform that has transformed <span className="font-bold text-primary">50,000+ careers</span>.
          </p>
        </div>

        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div className="overflow-hidden rounded-3xl py-12">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {whyChoosePoints.slice(currentSlide * cardsPerSlide, currentSlide * cardsPerSlide + cardsPerSlide).map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={`${point.id}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                    <div className="cursor-pointer group">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl relative border border-gray-100/50 hover:border-primary/30">
                        {/* Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className={`bg-gradient-to-r ${point.gradient} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                            <span className="text-sm">{point.emoji}</span>
                            {point.badge}
                          </span>
                        </div>

                        {/* Header with Gradient Background */}
                        <div className={`bg-gradient-to-br ${point.bgGradient} p-8 relative overflow-hidden`}>
                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                          
                          <div className="relative z-10 flex flex-col items-center text-center">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {point.title}
                            </h4>
                            <div className={`text-sm font-semibold bg-gradient-to-r ${point.gradient} bg-clip-text text-transparent`}>
                              {point.stats}
                            </div>
                            <div className="text-xs text-gray-600 mt-1 font-medium">
                              {point.highlight}
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed mb-6 text-center">
                            {point.description}
                          </p>
                          
                          <div className="flex items-center justify-center">
                            <button className={`bg-gradient-to-r ${point.gradient} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}>
                              Explore More
                              <TrendingUp className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
