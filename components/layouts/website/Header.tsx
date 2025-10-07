"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { 
  Menu, 
  ChevronDown, 
  Search, 
  User,
  Book,
  Briefcase,
  GraduationCap,
  MapPin,
  Grid3X3,
  Home,
  Globe,
  Building,
  Code,
  Award,
  Brain,
  Database,
  Palette,
  Shield,
  Cloud,
  Calculator,
  TrendingUp,
  Wrench,
  DollarSign,
  Link as LinkIcon,
  TestTube,
  Lock,
  BarChart3,
  PenTool,
  ImageIcon
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

// Define types for better type safety
interface NavLink {
  href: string
  label: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
  hasBadge?: boolean
  badgeText?: string
}

interface DropdownItem {
  href: string
  label: string
  description?: string
  isNew?: boolean
  icon?: React.ReactNode
}

const navLinks: NavLink[] = [
   {
    href: "/campus-courses",
    label: "Campus Courses",
    hasDropdown: true,
    dropdownItems: [
      // Undergraduate (course names only)
      { href: "/campus-courses/ba", label: "BA" },
      { href: "/campus-courses/bsc", label: "B.Sc" },
      { href: "/campus-courses/bcom", label: "B.Com" },
      { href: "/campus-courses/bba", label: "BBA" },
      { href: "/campus-courses/bbm", label: "BBM" },
      { href: "/campus-courses/bca", label: "BCA" },
      { href: "/campus-courses/btech", label: "B.Tech" },
      { href: "/campus-courses/llb", label: "LLB" },
      { href: "/campus-courses/mbbs", label: "MBBS" },
      { href: "/campus-courses/bpharm", label: "B.Pharm" },
      { href: "/campus-courses/barch", label: "B.Arch" },
      { href: "/campus-courses/bdes", label: "B.Des" },
      { href: "/campus-courses/bed", label: "B.Ed" },
      { href: "/campus-courses/bhm", label: "BHM" },
      // Postgraduate (course names only)
      { href: "/campus-courses/ma", label: "MA" },
      { href: "/campus-courses/msc", label: "M.Sc" },
      { href: "/campus-courses/mcom", label: "M.Com" },
      { href: "/campus-courses/mba", label: "MBA" },
      { href: "/campus-courses/mca", label: "MCA" },
      { href: "/campus-courses/mtech", label: "M.Tech" },
      { href: "/campus-courses/llm", label: "LLM" },
      { href: "/campus-courses/md", label: "MD" },
      { href: "/campus-courses/ms", label: "MS" },
      { href: "/campus-courses/mds", label: "MDS" },
      { href: "/campus-courses/mpt", label: "MPT" },
      { href: "/campus-courses/mph", label: "MPH" },
      { href: "/campus-courses/mdes", label: "M.Des" },
      { href: "/campus-courses/mhm", label: "MHM" },
      { href: "/campus-courses/pgdm", label: "PGDM" },
      // Diplomas & Certificates (names only)
      { href: "/campus-courses/polytechnic", label: "Polytechnic" },
      { href: "/campus-courses/dca", label: "DCA" },
      { href: "/campus-courses/hotel-management", label: "Hotel Management" },
      { href: "/campus-courses/paramedical", label: "Paramedical" },
      { href: "/campus-courses/certificates", label: "Certificates" },
      { href: "/campus-courses/all", label: "View all courses" },
    ],
  },
  {
    href: "/jobs",
    label:  " Internships",
    hasDropdown: true,
    dropdownItems: [
      // Types
      { href: "/jobs/full-time", label: "Full-time" },
      // Popular locations
      { href: "/jobs/top-locations", label: "Top Locations" },
      { href: "/jobs/work-from-home", label: "Work from home" },
      { href: "/jobs/delhi", label: "Jobs in Delhi" },
      { href: "/jobs/mumbai", label: "Jobs in Mumbai" },
      { href: "/jobs/bangalore", label: "Jobs in Bangalore" },
      { href: "/jobs/hyderabad", label: "Jobs in Hyderabad" },
      { href: "/jobs/kolkata", label: "Jobs in Kolkata" },
      { href: "/jobs/chennai", label: "Jobs in Chennai" },
      { href: "/jobs/pune", label: "Jobs in Pune" },
      // Categories (query presets)
      { href: "/jobs/developer", label: "Developer roles" },
      { href: "/jobs/design", label: "Design" },
      { href: "/jobs/marketing", label: "Marketing" },
      { href: "/jobs/finance", label: "Finance" },
      { href: "/jobs/hr", label: "Human Resources" },
      { href: "/jobs/all", label: "View all jobs" },
    ],
  },
  // {
  //   href: "/internship",
  //   label: "Internships",
  //   hasDropdown: true,
  //   dropdownItems: [
  //     { href: "/internship/top-locations", label: "Top Locations" },
  //     { href: "/internship/top-categories", label: "Top Categories" },
  //     { href: "/internship/explore-more", label: "Explore More Internships" },
  //     { href: "/internship/placement-courses", label: "Placement Courses with AI", isNew: true },
  //     { href: "/internship/work-from-home", label: "Work from Home" },
  //     { href: "/internship/bangalore", label: "Internship in Bangalore" },
  //     { href: "/internship/delhi", label: "Internship in Delhi" },
  //     { href: "/internship/hyderabad", label: "Internship in Hyderabad" },
  //     { href: "/internship/mumbai", label: "Internship in Mumbai" },
  //     { href: "/internship/chennai", label: "Internship in Chennai" },
  //     { href: "/internship/international", label: "International Internship" },
  //     { href: "/internship/all", label: "View all internships" },
  //   ],
  // },
  {
    href: "/courses",
    label: " Skiils Courses",
    hasBadge: true,
    // badgeText: "OFFER",
    hasDropdown: true,
    dropdownItems: [
      { href: "/courses/certification", label: "Certification Courses" },
      { href: "/courses/placement-ai", label: "Placement Courses with AI" },
      { href: "/courses/ai-ml", label: "Artificial Intelligence & ML", isNew: true },
      { href: "/courses/full-stack", label: "Full Stack Development" },
      { href: "/courses/web-dev-ai", label: "Web Development with AI" },
      { href: "/courses/data-science", label: "Data Science" },
      { href: "/courses/python-ai", label: "Programming with Python with AI" },
      { href: "/courses/hr-management", label: "Human Resource Management" },
      { href: "/courses/digital-marketing-ai", label: "Digital Marketing with AI" },
      { href: "/courses/cyber-security", label: "Cyber Security" },
      { href: "/courses/cloud-computing", label: "Cloud Computing" },
      { href: "/courses/ui-ux", label: "UI/UX Design" },
      { href: "/courses/excel-ai", label: "Advanced Excel with AI" },
      { href: "/courses/product-management", label: "Product Management" },
      { href: "/courses/autocad", label: "AutoCAD" },
      { href: "/courses/financial-modelling", label: "Financial Modelling" },
      { href: "/courses/blockchain", label: "Blockchain Development" },
      { href: "/courses/supply-chain", label: "Supply Chain Logistics" },
      { href: "/courses/software-testing", label: "Software Testing" },
      { href: "/courses/ethical-hacking", label: "Ethical Hacking" },
      { href: "/courses/business-analytics", label: "Business Analytics" },
      { href: "/courses/creative-writing", label: "Creative Writing" },
      { href: "/courses/graphic-design", label: "Graphic Design" },
      { href: "/courses/all", label: "View 100+ more courses" },
    ],
  },
]

// For Employers dropdown items - currently not used in the component
// const employerDropdownItems = [
//   { href: "/employers/post-job", label: "Post a Job" },
//   { href: "/employers/hire-interns", label: "Hire Interns" },
//   { href: "/employers/pricing", label: "Pricing" },
//   { href: "/employers/success-stories", label: "Success Stories" },
//   { href: "/employers/contact", label: "Contact Us" },
// ]

// Icon mapping function
const getIconForItem = (label: string): React.ReactNode => {
  const iconMap: { [key: string]: React.ReactNode } = {
    // Jobs icons
    "Top Locations": <MapPin className="size-4 shrink-0 text-[var(--primary)]" />,
    Profile: <User className="size-4 shrink-0 text-[var(--primary)]" />,
    "Top Categories": <Grid3X3 className="size-4 shrink-0 text-[var(--primary)]" />,
    "Explore More Jobs": <Search className="size-4 shrink-0 text-[var(--primary)]" />,
    "Placement Courses with AI": <Brain className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Work from home": <Home className="size-4 shrink-0 text-[var(--primary)]" />,
    "Work from Home": <Home className="size-4 shrink-0 text-[var(--primary)]" />,
    "Jobs in Delhi": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Mumbai": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Bangalore": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Hyderabad": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Kolkata": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Chennai": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Jobs in Pune": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "View all jobs": <Briefcase className="size-4 shrink-0 text-[var(--primary)]" />,

    // Internships icons
    "Explore More Internships": <Search className="size-4 shrink-0 text-[var(--primary)]" />,
    "Internship in Bangalore": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Internship in Delhi": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Internship in Hyderabad": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Internship in Mumbai": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "Internship in Chennai": <Building className="size-4 shrink-0 text-[var(--muted-text)]" />,
    "International Internship": <Globe className="size-4 shrink-0 text-[var(--primary)]" />,
    "View all internships": <GraduationCap className="size-4 shrink-0 text-[var(--primary)]" />,

    // Courses icons
    "Certification Courses": <Award className="size-4 shrink-0 text-[var(--primary)]" />,
    "Artificial Intelligence & ML": <Brain className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Full Stack Development": <Code className="size-4 shrink-0 text-[var(--primary)]" />,
    "Web Development with AI": <Code className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Data Science": <Database className="size-4 shrink-0 text-[var(--primary)]" />,
    "Programming with Python with AI": <Code className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Human Resource Management": <User className="size-4 shrink-0 text-[var(--primary)]" />,
    "Digital Marketing with AI": <TrendingUp className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Cyber Security": <Shield className="size-4 shrink-0 text-[var(--primary)]" />,
    "Cloud Computing": <Cloud className="size-4 shrink-0 text-[var(--primary)]" />,
    "UI/UX Design": <Palette className="size-4 shrink-0 text-[var(--primary)]" />,
    "Advanced Excel with AI": <Calculator className="size-4 shrink-0 text-[var(--secondary)]" />,
    "Product Management": <TrendingUp className="size-4 shrink-0 text-[var(--primary)]" />,
    AutoCAD: <Wrench className="size-4 shrink-0 text-[var(--primary)]" />,
    "Financial Modelling": <DollarSign className="size-4 shrink-0 text-[var(--primary)]" />,
    "Blockchain Development": <LinkIcon className="size-4 shrink-0 text-[var(--primary)]" />,
    "Supply Chain Logistics": <TrendingUp className="size-4 shrink-0 text-[var(--primary)]" />,
    "Software Testing": <TestTube className="size-4 shrink-0 text-[var(--primary)]" />,
    "Ethical Hacking": <Lock className="size-4 shrink-0 text-[var(--primary)]" />,
    "Business Analytics": <BarChart3 className="size-4 shrink-0 text-[var(--primary)]" />,
    "Creative Writing": <PenTool className="size-4 shrink-0 text-[var(--primary)]" />,
    "Graphic Design": <ImageIcon className="size-4 shrink-0 text-[var(--primary)]" />,
    "View 100+ more courses": <Book className="size-4 shrink-0 text-[var(--primary)]" />,
    // Campus Courses (names)
    BA: <Book className="size-4 shrink-0 text-blue-600" />,
    "B.Sc": <TestTube className="size-4 shrink-0 text-teal-500" />,
    "B.Com": <DollarSign className="size-4 shrink-0 text-blue-600" />,
    BBA: <Briefcase className="size-4 shrink-0 text-blue-600" />,
    BBM: <BarChart3 className="size-4 shrink-0 text-blue-600" />,
    BCA: <Code className="size-4 shrink-0 text-teal-500" />,
    "B.Tech": <Wrench className="size-4 shrink-0 text-blue-600" />,
    LLB: <Shield className="size-4 shrink-0 text-blue-600" />,
    MBBS: <TestTube className="size-4 shrink-0 text-teal-500" />,
    "B.Pharm": <TestTube className="size-4 shrink-0 text-teal-500" />,
    "B.Arch": <Building className="size-4 shrink-0 text-blue-600" />,
    "B.Des": <Palette className="size-4 shrink-0 text-blue-600" />,
    "B.Ed": <GraduationCap className="size-4 shrink-0 text-blue-600" />,
    BHM: <Building className="size-4 shrink-0 text-blue-600" />,
    MA: <Book className="size-4 shrink-0 text-blue-600" />,
    "M.Sc": <TestTube className="size-4 shrink-0 text-teal-500" />,
    "M.Com": <DollarSign className="size-4 shrink-0 text-blue-600" />,
    MBA: <BarChart3 className="size-4 shrink-0 text-blue-600" />,
    MCA: <Code className="size-4 shrink-0 text-teal-500" />,
    "M.Tech": <Wrench className="size-4 shrink-0 text-blue-600" />,
    LLM: <Shield className="size-4 shrink-0 text-blue-600" />,
    MD: <TestTube className="size-4 shrink-0 text-teal-500" />,
    MS: <TestTube className="size-4 shrink-0 text-teal-500" />,
    MDS: <TestTube className="size-4 shrink-0 text-teal-500" />,
    MPT: <TestTube className="size-4 shrink-0 text-teal-500" />,
    MPH: <TestTube className="size-4 shrink-0 text-teal-500" />,
    "M.Des": <Palette className="size-4 shrink-0 text-blue-600" />,
    MHM: <Building className="size-4 shrink-0 text-blue-600" />,
    PGDM: <GraduationCap className="size-4 shrink-0 text-blue-600" />,
    Polytechnic: <Wrench className="size-4 shrink-0 text-blue-600" />,
    DCA: <Code className="size-4 shrink-0 text-teal-500" />,
    "Hotel Management": <Building className="size-4 shrink-0 text-blue-600" />,
    Paramedical: <TestTube className="size-4 shrink-0 text-teal-500" />,
    Certificates: <Award className="size-4 shrink-0 text-blue-600" />,
    "View all courses": <Book className="size-4 shrink-0 text-blue-600" />,
  }

  return iconMap[label] || <Book className="size-4 shrink-0 text-[var(--primary)]" />
}

const Header: React.FC = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Compute dropdown grid columns and width based on item count
  const getGridCols = (count: number) => {
    if (count >= 12) return "grid-cols-3"
    if (count >= 6) return "grid-cols-2"
    return "grid-cols-1"
  }

  const getDropdownWidth = (count: number) => {
    const cols = getGridCols(count)
    if (cols === "grid-cols-3") return "w-[48rem]"
    if (cols === "grid-cols-2") return "w-[32rem]"
    return "w-80"
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`)
    }
  }

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  // Render navigation item for desktop
  const renderNavItem = (item: NavLink) => {
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 no-underline relative group-hover:text-[var(--primary)] ${
              isActive(item.href)
                ? "text-[var(--primary)]"
                : "text-[var(--text-color)] hover:text-[var(--primary)]"
            }`}
          >
            {item.label}
            {item.hasBadge && (
              <span className="ml-2 px-2 py-0.5 text-xs font-bold text-[var(--primary-foreground)] bg-[var(--accent)] rounded animate-pulse">
                {item.badgeText}
              </span>
            )}
            <ChevronDown
              size={14}
              className={`ml-1 transition-transform duration-200 ${
                activeDropdown === item.label ? "rotate-180" : ""
              }`}
            />
          </Link>

          {/* Dropdown Menu */}
          {activeDropdown === item.label && (
            <div className={`absolute top-full left-0 mt-2 z-50 ${getDropdownWidth(item.dropdownItems.length)} bg-[var(--background)] border border-[var(--border-color)] rounded-lg shadow-xl py-4 animate-in slide-in-from-top-2 duration-200`}>
              <div className={`grid ${getGridCols(item.dropdownItems.length)} gap-x-6 gap-y-1 px-4`}>
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.href}
                    href={dropdownItem.href}
                    className="flex items-center text-sm text-[var(--text-color)] py-2 px-3 no-underline hover:bg-[var(--surface)] hover:text-[var(--primary)] rounded-md transition-all duration-150 group"
                  >
                    {getIconForItem(dropdownItem.label)}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-150">
                      {dropdownItem.label}
                    </span>
                    {dropdownItem.isNew && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-[var(--accent)]/20 text-[var(--accent-foreground)] rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 no-underline ${
          isActive(item.href)
            ? "text-[var(--primary)]"
            : "text-[var(--text-color)] hover:text-[var(--primary)]"
        }`}
      >
        {item.label}
        {item.hasBadge && (
          <span className="ml-2 px-2 py-0.5 text-xs font-bold text-[var(--primary-foreground)] bg-[var(--accent)] rounded animate-pulse">
            {item.badgeText}
          </span>
        )}
      </Link>
    )
  }

  // Render mobile navigation item
  const renderMobileNavItem = (item: NavLink) => {
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <AccordionItem key={item.label} value={item.label} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline text-gray-700">
            <span className="flex items-center gap-2">
              {item.label}
              {item.hasBadge && item.badgeText && (
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5">
                  {item.badgeText}
                </Badge>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="mt-2 bg-white">
            {item.dropdownItems.map((dropdownItem) => (
              <a
                key={dropdownItem.href}
                className="flex items-center gap-3 rounded-md p-3 text-sm leading-none outline-none transition-colors hover:bg-gray-50 hover:text-blue-600 text-gray-900"
                href={dropdownItem.href}
              >
                {getIconForItem(dropdownItem.label)}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{dropdownItem.label}</span>
                  {dropdownItem.isNew && (
                    <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs px-1.5 py-0.5">
                      NEW
                    </Badge>
                  )}
                </div>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      )
    }

    return (
      <a key={item.label} href={item.href} className="font-semibold text-gray-700 hover:text-blue-600">
        <span className="flex items-center gap-2">
          {item.label}
          {item.hasBadge && item.badgeText && (
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5">
              {item.badgeText}
            </Badge>
          )}
        </span>
      </a>
    )
  }

  return (
    <header className={`sticky top-0 z-40 bg-[var(--background)] transition-all duration-300 ${
      isScrolled ? "shadow-md border-b border-[var(--border-color)]" : "shadow-sm border-b border-[var(--border-color)]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center no-underline">
              <Image
                src="/logo.png"
                alt="Collexa"
                width={150}
                height={40}
                className="h-8 w-auto object-contain transition-all duration-200 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 relative z-50">
            {navLinks.map((item) => renderNavItem(item))}
          </nav>

          {/* Search Bar & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-64 pl-10 pr-4 py-2 border border-[var(--border-color)] rounded-full bg-[var(--background)] placeholder-[var(--muted-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
                placeholder="Search jobs, internships, courses..."
              />
            </form>

            {/* Login Button */}
            <Button
              variant="outline"
              onClick={() => router.push("/login")}
              className="text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--surface)] hover:border-[var(--primary)] font-medium text-sm px-6 py-2 rounded-md transition-all duration-200"
            >
              Login
            </Button>

            {/* Register Button */}
            <Button
              onClick={() => router.push("/register")}
              className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] px-6 py-2 rounded-md font-medium text-sm transition-all duration-200 hover:shadow-lg"
            >
              Register
            </Button>

            {/* Divider */}
            <div className="h-6 w-px bg-[var(--border-color)]" />

            {/* For Employers Link */}
            <Link
              href="/employers"
              className="text-[var(--primary)] hover:text-[var(--primary)]/90 text-sm font-medium no-underline whitespace-nowrap flex items-center transition-colors duration-200"
            >
              For employers
              <ChevronDown size={14} className="ml-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-[var(--border-color)]">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="Collexa"
                        width={120}
                        height={32}
                        className="h-8 w-auto object-contain"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  {/* Mobile Search */}
                  <div className="px-3 py-2">
                    <form onSubmit={handleSearch} className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-[var(--border-color)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Search jobs, internships, courses..."
                      />
                    </form>
                  </div>

                  {/* Mobile Navigation Links */}
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {navLinks.map((item) => renderMobileNavItem(item))}
                  </Accordion>

                  {/* Mobile Login/Register Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="outline"
                      onClick={() => router.push("/login")}
                      className="text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--surface)]"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => router.push("/register")}
                      className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)]"
                    >
                      Register
                    </Button>
                    <Link
                      href="/employers"
                      className="block text-center w-full py-2 text-[var(--primary)] text-sm font-medium no-underline hover:text-[var(--primary)]/90"
                    >
                      For employers →
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
