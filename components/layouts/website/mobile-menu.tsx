"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  X, 
  GraduationCap, 
  Briefcase, 
  Zap,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? [] // Close all sections
        : [section] // Open only this section
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Navigation data
  const navigationData = {
    "Campus Courses": {
      icon: GraduationCap,
      items: [
        { title: "Engineering Courses", items: [
          { title: "B.Tech Computer Science", href: "/campus-courses/btech-cs" },
          { title: "B.Tech Electronics", href: "/campus-courses/btech-electronics" },
          { title: "B.Tech Mechanical", href: "/campus-courses/btech-mechanical" },
          { title: "M.Tech Programs", href: "/campus-courses/mtech" },
          { title: "Diploma Engineering", href: "/campus-courses/diploma" }
        ]},
        { title: "Management Courses", items: [
          { title: "MBA Programs", href: "/campus-courses/mba" },
          { title: "BBA Programs", href: "/campus-courses/bba" },
          { title: "PGDM", href: "/campus-courses/pgdm" },
          { title: "Executive MBA", href: "/campus-courses/executive-mba" }
        ]},
        { title: "Computer Science", items: [
          { title: "B.Sc Computer Science", href: "/campus-courses/bsc-cs" },
          { title: "M.Sc Computer Science", href: "/campus-courses/msc-cs" },
          { title: "BCA", href: "/campus-courses/bca" },
          { title: "MCA", href: "/campus-courses/mca" }
        ]},
        { title: "Data Science", items: [
          { title: "B.Sc Data Science", href: "/campus-courses/bsc-data-science" },
          { title: "M.Sc Data Science", href: "/campus-courses/msc-data-science" },
          { title: "AI/ML Programs", href: "/campus-courses/ai-ml" },
          { title: "Business Analytics", href: "/campus-courses/business-analytics" }
        ]},
        { title: "Design Courses", items: [
          { title: "B.Des Programs", href: "/campus-courses/bdes" },
          { title: "M.Des Programs", href: "/campus-courses/mdes" },
          { title: "Fashion Design", href: "/campus-courses/fashion-design" },
          { title: "Interior Design", href: "/campus-courses/interior-design" }
        ]}
      ]
    },
    "Internships": {
      icon: Briefcase,
      items: [
        { title: "Tech Internships", items: [
          { title: "Software Development", href: "/internship/software-dev" },
          { title: "Web Development", href: "/internship/web-dev" },
          { title: "Mobile App Development", href: "/internship/mobile-dev" },
          { title: "Data Science", href: "/internship/data-science" },
          { title: "AI/ML", href: "/internship/ai-ml" },
          { title: "Cybersecurity", href: "/internship/cybersecurity" }
        ]},
        { title: "Marketing Internships", items: [
          { title: "Digital Marketing", href: "/internship/digital-marketing" },
          { title: "Content Creation", href: "/internship/content-creation" },
          { title: "Social Media Marketing", href: "/internship/social-media" },
          { title: "SEO/SEM", href: "/internship/seo-sem" },
          { title: "Brand Management", href: "/internship/brand-management" }
        ]},
        { title: "Finance Internships", items: [
          { title: "Investment Banking", href: "/internship/investment-banking" },
          { title: "Financial Analysis", href: "/internship/financial-analysis" },
          { title: "Risk Management", href: "/internship/risk-management" },
          { title: "Corporate Finance", href: "/internship/corporate-finance" }
        ]},
        { title: "Design Internships", items: [
          { title: "UI/UX Design", href: "/internship/ui-ux" },
          { title: "Graphic Design", href: "/internship/graphic-design" },
          { title: "Product Design", href: "/internship/product-design" },
          { title: "Web Design", href: "/internship/web-design" }
        ]},
        { title: "Business Internships", items: [
          { title: "Business Development", href: "/internship/business-dev" },
          { title: "Operations", href: "/internship/operations" },
          { title: "Strategy", href: "/internship/strategy" },
          { title: "Consulting", href: "/internship/consulting" }
        ]}
      ]
    },
    "Jobs": {
      icon: Briefcase,
      items: [
        { title: "Top Locations", items: [
          { title: "Work from Home", href: "/jobs/work-from-home" },
          { title: "Jobs in Delhi", href: "/jobs/delhi" },
          { title: "Jobs in Mumbai", href: "/jobs/mumbai" },
          { title: "Jobs in Bangalore", href: "/jobs/bangalore" },
          { title: "Jobs in Hyderabad", href: "/jobs/hyderabad" },
          { title: "Jobs in Kolkata", href: "/jobs/kolkata" },
          { title: "Jobs in Chennai", href: "/jobs/chennai" },
          { title: "Jobs in Pune", href: "/jobs/pune" },
          { title: "Jobs in Jaipur", href: "/jobs/jaipur" }
        ]},
        { title: "Top Categories", items: [
          { title: "Software Engineer", href: "/jobs/software-engineer" },
          { title: "Data Analyst", href: "/jobs/data-analyst" },
          { title: "Product Manager", href: "/jobs/product-manager" },
          { title: "Marketing Specialist", href: "/jobs/marketing-specialist" },
          { title: "UI/UX Designer", href: "/jobs/ui-ux-designer" },
          { title: "DevOps Engineer", href: "/jobs/devops-engineer" },
          { title: "Business Analyst", href: "/jobs/business-analyst" },
          { title: "Sales Executive", href: "/jobs/sales-executive" }
        ]},
        { title: "Explore More Jobs", items: [
          { title: "View all jobs", href: "/jobs" },
          { title: "Remote Jobs", href: "/jobs/remote" },
          { title: "Part-time Jobs", href: "/jobs/part-time" },
          { title: "Freelance Jobs", href: "/jobs/freelance" }
        ]},
        { title: "Placement Courses with AI", badge: "NEW", items: [
          { title: "AI Placement Course", href: "/courses/ai-placement" },
          { title: "Data Science Bootcamp", href: "/courses/data-science" },
          { title: "Full Stack Development", href: "/courses/fullstack" },
          { title: "Digital Marketing", href: "/courses/digital-marketing" }
        ]}
      ]
    },
    "Learn Skills": {
      icon: Zap,
      items: [
        { title: "Programming Languages", items: [
          { title: "Python Masterclass", href: "/skill-based-course/python" },
          { title: "JavaScript Deep Dive", href: "/skill-based-course/javascript" },
          { title: "Java Programming", href: "/skill-based-course/java" },
          { title: "C++ Programming", href: "/skill-based-course/cpp" },
          { title: "Go Programming", href: "/skill-based-course/go" }
        ]},
        { title: "Web Development", items: [
          { title: "React Development", href: "/skill-based-course/react" },
          { title: "Node.js Backend", href: "/skill-based-course/nodejs" },
          { title: "Full Stack Development", href: "/skill-based-course/fullstack" },
          { title: "Next.js Framework", href: "/skill-based-course/nextjs" },
          { title: "Vue.js Development", href: "/skill-based-course/vuejs" }
        ]},
        { title: "Data Science & AI", items: [
          { title: "Machine Learning", href: "/skill-based-course/machine-learning" },
          { title: "Deep Learning", href: "/skill-based-course/deep-learning" },
          { title: "Data Analytics", href: "/skill-based-course/data-analytics" },
          { title: "Big Data", href: "/skill-based-course/big-data" },
          { title: "AI Fundamentals", href: "/skill-based-course/ai-fundamentals" }
        ]},
        { title: "Digital Marketing", items: [
          { title: "SEO Mastery", href: "/skill-based-course/seo" },
          { title: "Google Ads", href: "/skill-based-course/google-ads" },
          { title: "Social Media Marketing", href: "/skill-based-course/social-media" },
          { title: "Content Marketing", href: "/skill-based-course/content-marketing" },
          { title: "Email Marketing", href: "/skill-based-course/email-marketing" }
        ]},
        { title: "Design Skills", items: [
          { title: "UI/UX Design", href: "/skill-based-course/ui-ux" },
          { title: "Figma Mastery", href: "/skill-based-course/figma" },
          { title: "Adobe Creative Suite", href: "/skill-based-course/adobe" },
          { title: "Web Design", href: "/skill-based-course/web-design" },
          { title: "Motion Graphics", href: "/skill-based-course/motion-graphics" }
        ]}
      ]
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-lg md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          
          {/* Sidebar */}
          <motion.div 
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl border-l border-gray-200/30 md:hidden h-screen overflow-hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/30 bg-white flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group" onClick={onClose}>
              <Image 
                src="/logo.png" 
                alt="Collexa" 
                width={120} 
                height={40} 
                className="object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-3 hover:bg-primary/15 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-6 w-6 text-gray-700 hover:text-primary transition-colors duration-300" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <nav className="p-6 space-y-2">
              {/* Home Link */}
              <Link
                href="/"
                className={cn(
                  "flex items-center px-4 py-3 text-base font-medium transition-all duration-300 group",
                  isActive('/') 
                    ? "text-primary font-semibold" 
                    : "text-gray-800 hover:text-primary"
                )}
                onClick={onClose}
              >
                <Home className="mr-4 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Home
              </Link>

            {/* Main Navigation Sections */}
            {Object.entries(navigationData).map(([sectionName, sectionData]) => {
              const Icon = sectionData.icon;
              const isExpanded = expandedSections.includes(sectionName);
              
              return (
                <div key={sectionName} className="space-y-1">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(sectionName)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:text-primary transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <Icon className="mr-4 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {sectionName}
                    </div>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-all duration-300 group-hover:scale-110",
                        isExpanded && "rotate-180"
                      )} 
                    />
                  </button>

                  {/* Section Items */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        className="ml-8 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {sectionData.items.map((category, categoryIndex) => (
                          <motion.div 
                            key={category.title} 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: categoryIndex * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            {/* Category Header */}
                            <div className="px-4 py-2 text-sm font-semibold text-primary/80 uppercase tracking-wide border-l-4 border-primary">
                              {category.title}
                            </div>
                            
                            {/* Category Items */}
                            <div className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <motion.div
                                  key={item.title}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: (categoryIndex * 0.1) + (itemIndex * 0.05),
                                    ease: "easeOut"
                                  }}
                                >
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-all duration-300",
                                      isActive(item.href) && "text-primary font-medium"
                                    )}
                                    onClick={onClose}
                                  >
                                    {item.title}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

          {/* Footer */}
          <div className="border-t border-gray-200/30 p-6 bg-white flex-shrink-0">
            <div className="space-y-4">
              <Button 
                asChild
                variant="outline"
                className="w-full bg-white hover:bg-white text-secondary border-2 border-primary font-bold py-4 rounded-lg transition-all duration-300 hover:border-secondary hover:text-primary hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <Link href="/login" onClick={onClose}>
                  Login / Signup
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;