"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, GraduationCap, Briefcase, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import MobileMenu from './mobile-menu';

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Jobs dropdown data with categories and items
  const jobsData = {
    categories: [
      { title: "Top Locations", items: [
        { title: "Work from Home", href: "/jobs" },
        { title: "Jobs in Delhi", href: "/jobs" },
        { title: "Jobs in Mumbai", href: "/jobs" },
        { title: "Jobs in Bangalore", href: "/jobs" },
        { title: "Jobs in Hyderabad", href: "/jobs" },
        { title: "Jobs in Kolkata", href: "/jobs" },
        { title: "Jobs in Chennai", href: "/jobs" },
        { title: "Jobs in Pune", href: "/jobs" },
        { title: "Jobs in Jaipur", href: "/jobs" }
      ]},
      { title: "Top Categories", items: [
        { title: "Software Engineer", href: "/jobs" },
        { title: "Data Analyst", href: "/jobs" },
        { title: "Product Manager", href: "/jobs" },
        { title: "Marketing Specialist", href: "/jobs" },
        { title: "UI/UX Designer", href: "/jobs" },
        { title: "DevOps Engineer", href: "/jobs" },
        { title: "Business Analyst", href: "/jobs" },
        { title: "Sales Executive", href: "/jobs" }
      ]},
      { title: "Explore More Jobs", items: [
        { title: "View all jobs", href: "/jobs" },
        { title: "Remote Jobs", href: "/jobs" },
        { title: "Part-time Jobs", href: "/jobs" },
        { title: "Freelance Jobs", href: "/jobs" }
      ]},
      { title: "Placement Courses with AI", badge: "NEW", items: [
        { title: "AI Placement Course", href: "/courses" },
        { title: "Data Science Bootcamp", href: "/courses" },
        { title: "Full Stack Development", href: "/courses" },
        { title: "Digital Marketing", href: "/courses" }
      ]}
    ]
  };

  // Internships dropdown data
  const internshipsData = {
    categories: [
      { title: "Tech Internships", items: [
        { title: "Software Development", href: "/internship" },
        { title: "Web Development", href: "/internship" },
        { title: "Mobile App Development", href: "/internship" },
        { title: "Data Science", href: "/internship" },
        { title: "AI/ML", href: "/internship" },
        { title: "Cybersecurity", href: "/internship" }
      ]},
      { title: "Marketing Internships", items: [
        { title: "Digital Marketing", href: "/internship" },
        { title: "Content Creation", href: "/internship" },
        { title: "Social Media Marketing", href: "/internship" },
        { title: "SEO/SEM", href: "/internship" },
        { title: "Brand Management", href: "/internship" }
      ]},
      { title: "Finance Internships", items: [
        { title: "Investment Banking", href: "/internship" },
        { title: "Financial Analysis", href: "/internship" },
        { title: "Risk Management", href: "/internship" },
        { title: "Corporate Finance", href: "/internship" }
      ]},
      { title: "Design Internships", items: [
        { title: "UI/UX Design", href: "/internship" },
        { title: "Graphic Design", href: "/internship" },
        { title: "Product Design", href: "/internship" },
        { title: "Web Design", href: "/internship" }
      ]},
      { title: "Business Internships", items: [
        { title: "Business Development", href: "/internship" },
        { title: "Operations", href: "/internship" },
        { title: "Strategy", href: "/internship" },
        { title: "Consulting", href: "/internship" }
      ]}
    ]
  };

  // Campus Courses dropdown data
  const campusCoursesData = {
    categories: [
      { title: "Engineering Courses", items: [
        { title: "B.Tech Computer Science", href: "/courses" },
        { title: "B.Tech Electronics", href: "/courses" },
        { title: "B.Tech Mechanical", href: "/courses" },
        { title: "M.Tech Programs", href: "/courses" },
        { title: "Diploma Engineering", href: "/courses" }
      ]},
      { title: "Management Courses", items: [
        { title: "MBA Programs", href: "/courses" },
        { title: "BBA Programs", href: "/courses" },
        { title: "PGDM", href: "/courses" },
        { title: "Executive MBA", href: "/courses" }
      ]},
      { title: "Computer Science", items: [
        { title: "B.Sc Computer Science", href: "/courses" },
        { title: "M.Sc Computer Science", href: "/courses" },
        { title: "BCA", href: "/courses" },
        { title: "MCA", href: "/courses" }
      ]},
      { title: "Data Science", items: [
        { title: "B.Sc Data Science", href: "/courses" },
        { title: "M.Sc Data Science", href: "/courses" },
        { title: "AI/ML Programs", href: "/courses" },
        { title: "Business Analytics", href: "/courses" }
      ]},
      { title: "Design Courses", items: [
        { title: "B.Des Programs", href: "/courses" },
        { title: "M.Des Programs", href: "/courses" },
        { title: "Fashion Design", href: "/courses" },
        { title: "Interior Design", href: "/courses" }
      ]}
    ]
  };

  // Learn Skills dropdown data
  const learnSkillsData = {
    categories: [
      { title: "Programming Languages", items: [
        { title: "Python Masterclass", href: "/skill-based-course" },
        { title: "JavaScript Deep Dive", href: "/skill-based-course" },
        { title: "Java Programming", href: "/skill-based-course" },
        { title: "C++ Programming", href: "/skill-based-course" },
        { title: "Go Programming", href: "/skill-based-course" }
      ]},
      { title: "Web Development", items: [
        { title: "React Development", href: "/skill-based-course" },
        { title: "Node.js Backend", href: "/skill-based-course" },
        { title: "Full Stack Development", href: "/skill-based-course" },
        { title: "Next.js Framework", href: "/skill-based-course" },
        { title: "Vue.js Development", href: "/skill-based-course" }
      ]},
      { title: "Data Science & AI", items: [
        { title: "Machine Learning", href: "/skill-based-course" },
        { title: "Deep Learning", href: "/skill-based-course" },
        { title: "Data Analytics", href: "/skill-based-course" },
        { title: "Big Data", href: "/skill-based-course" },
        { title: "AI Fundamentals", href: "/skill-based-course" }
      ]},
      { title: "Digital Marketing", items: [
        { title: "SEO Mastery", href: "/skill-based-course" },
        { title: "Google Ads", href: "/skill-based-course" },
        { title: "Social Media Marketing", href: "/skill-based-course" },
        { title: "Content Marketing", href: "/skill-based-course" },
        { title: "Email Marketing", href: "/skill-based-course" }
      ]},
      { title: "Design Skills", items: [
        { title: "UI/UX Design", href: "/skill-based-course" },
        { title: "Figma Mastery", href: "/skill-based-course" },
        { title: "Adobe Creative Suite", href: "/skill-based-course" },
        { title: "Web Design", href: "/skill-based-course" },
        { title: "Motion Graphics", href: "/skill-based-course" }
      ]}
    ]
  };

  const CategoryDropdown = ({ title, icon: Icon, data,  dropdownKey  } : { 
    title: string; 
    icon: React.ElementType; 
    data: { categories: Array<{ title: string; items: Array<{ title: string; href: string }>; badge?: string }> }; 
    dropdownKey: string;
  }) => {
    const isActive = activeDropdown === dropdownKey;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    
    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveDropdown(dropdownKey);
      // Set first category as active by default
      if (data.categories.length > 0) {
        setActiveCategory(data.categories[0].title);
      }
    };
    
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        setActiveCategory(null);
      }, 150);
    };
    
    return (
      <div 
        className="custom-dropdown-container relative"
        ref={(el) => {
          dropdownRefs.current[dropdownKey] = el;
        }}
        data-active={isActive}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={cn(
            "custom-nav-button flex items-center gap-2 px-4 py-2 text-md font-medium transition-all duration-300 rounded-lg hover:bg-primary/5",
            isActive ? "text-primary bg-primary/5" : "text-foreground hover:text-primary"
          )}
          onClick={() => setActiveDropdown(isActive ? null : dropdownKey)}
        >
          <Icon className="h-4 w-4" />
          {title}
          <ChevronDown className={cn(
            "h-3 w-3 transition-transform duration-200",
            isActive && "rotate-180"
          )} />
        </button>
        
        <div className="nav-dropdown absolute top-full left-0 mt-2 w-[600px] max-w-[90vw] rounded-lg border shadow-lg z-50 bg-white overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden md:flex">
            {/* Left Side - Categories */}
            <div className="w-2/5 bg-gray-50 rounded-l-lg p-4">
              <div className="space-y-1">
                {data.categories.map((category) => (
                  <div
                    key={category.title}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-md font-medium rounded-md cursor-pointer transition-all duration-200",
                      activeCategory === category.title 
                        ? "bg-primary text-white" 
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    )}
                    onMouseEnter={() => setActiveCategory(category.title)}
                  >
                    <span>{category.title}</span>
                    {category.badge && (
                      <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                        {category.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Items */}
            <div className="w-3/5 p-4">
              {(activeCategory || data.categories[0]) && (
                <div className="space-y-2">
                  {data.categories.find(cat => cat.title === (activeCategory || data.categories[0].title))?.items.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
             
            </div>
          </div>

          {/* Mobile Layout - Collapsible */}
          <div className="md:hidden max-h-[70vh] overflow-y-auto">
            <div className="p-4">
              {data.categories.map((category) => (
                <div key={category.title} className="mb-4">
                  <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-primary bg-primary/5 rounded-md mb-2">
                    <span>{category.title}</span>
                    {category.badge && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {category.badge}
                      </span>
                    )}
                  </div>
                  <div className="pl-4 space-y-1">
                    {category.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="Collexa" 
              width={120} 
              height={40} 
              className="object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 relative z-50">
            <CategoryDropdown
              title="Campus Courses"
              icon={GraduationCap}
              data={campusCoursesData}
              dropdownKey="campus-courses"
            />
            <CategoryDropdown
              title="Internships"
              icon={Briefcase}
              data={internshipsData}
              dropdownKey="internships"
            />
            <CategoryDropdown
              title="Jobs"
              icon={Briefcase}
              data={jobsData}
              dropdownKey="jobs"
            />
            <CategoryDropdown
              title="Learn Skills"
              icon={Zap}
              data={learnSkillsData}
              dropdownKey="learn-skills"
            />
          </nav>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild
              variant="outline"
              className="bg-white hover:bg-white text-secondary border-primary font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:border-secondary hover:text-primary hover:shadow-sm hover:bg-primary/5"
            >
              <Link href="/login">Login / Signup</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
          navigationData={{
            "Campus Courses": { icon: GraduationCap, items: campusCoursesData.categories },
            "Internships": { icon: Briefcase, items: internshipsData.categories },
            "Jobs": { icon: Briefcase, items: jobsData.categories },
            "Learn Skills": { icon: Zap, items: learnSkillsData.categories }
          }}
        />
      </div>
    </header>
  );
};

export default Header;