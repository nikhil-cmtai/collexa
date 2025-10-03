import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-[#f6f8ff]">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Collexa" width={140} height={40} />
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Building careers with campus jobs, internships and industry-ready courses.
            </p>
            <div className="flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="size-9 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                <Facebook className="size-4" />
              </a>
              <a aria-label="Instagram" href="#" className="size-9 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                <Instagram className="size-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="size-9 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                <Linkedin className="size-4" />
              </a>
              <a aria-label="Twitter" href="#" className="size-9 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition">
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/jobs" className="hover:text-primary">Campus Jobs</Link></li>
              <li><Link href="/internships" className="hover:text-primary">Internships</Link></li>
              <li><Link href="/courses" className="hover:text-primary">Skill Courses</Link></li>
              <li><Link href="/employers" className="hover:text-primary">For Employers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-4">Get career tips, new jobs and course offers in your inbox.</p>
            <form className="flex items-stretch gap-2">
              <Input type="email" placeholder="Enter your email" className="h-10" />
              <Button type="submit" className="h-10 px-4">
                Join
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">By subscribing, you agree to our Terms & Privacy.</p>
          </div>
        </div>
      </div>

      {/* Middle ribbon */}
      <div className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-foreground">Verified Opportunities</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-secondary" />
            <span className="text-foreground">Trusted by 500+ Companies</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-foreground">AI-Powered Career Tools</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-foreground">24×7 Support</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} <span className="text-foreground font-semibold">Collexa Edu</span>. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/contact" className="hover:text-primary">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;