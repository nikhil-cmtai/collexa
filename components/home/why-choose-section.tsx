"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Handshake, Users, Award, Target } from "lucide-react";

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
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
            Why Choose Collexa?
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for educational guidance and career success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {whyChoosePoints.map((point, index) => {
            const Icon = point.icon;
            const isPrimary = index % 2 === 0;
            
            return (
              <motion.div 
                key={point.id} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Feature Item */}
                <motion.div 
                  className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon Circle with pulse effect */}
                  <div className="relative mb-8">
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 ${isPrimary ? 'bg-primary/5' : 'bg-secondary/5'} rounded-full scale-150 group-hover:scale-[1.7] transition-transform duration-500`}></div>
                    
                    {/* Main icon container */}
                    <motion.div 
                      className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${isPrimary ? 'from-primary/10 to-primary/5' : 'from-secondary/10 to-secondary/5'} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border-2 ${isPrimary ? 'border-primary/20' : 'border-secondary/20'}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-12 h-12 ${isPrimary ? 'text-primary' : 'text-secondary'}`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-heading mb-3">
                    {point.title}
                  </h3>
                  <p className={`text-base font-semibold ${isPrimary ? 'text-primary' : 'text-secondary'} mb-4`}>
                    {point.stats}
                  </p>
                  <p className="text-base text-muted leading-relaxed max-w-sm">
                    {point.description}
                  </p>
                  
                  {/* Decorative bottom element */}
                  <motion.div 
                    className={`mt-6 w-12 h-1 bg-gradient-to-r from-transparent ${isPrimary ? 'via-primary/50' : 'via-secondary/50'} to-transparent rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
