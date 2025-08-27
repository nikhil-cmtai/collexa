import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const courses = [
  { name: "Online MBA", href: "#mba" },
  { name: "Online MCA", href: "#mca" },
  { name: "Online BBA", href: "#bba" },
  { name: "Online BCA", href: "#bca" },
  { name: "Online M.Com", href: "#mcom" },
  { name: "Online B.Com", href: "#bcom" },
  { name: "Online MA", href: "#ma" },
  { name: "Online BA", href: "#ba" },
  { name: "Online MSc", href: "#msc" },
  { name: "Online BSc", href: "#bsc" },
  { name: "Online PG Diploma", href: "#pgdiploma" },
  { name: "Certification Courses", href: "#certification" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-pink-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand & Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Collexa Logo" width={140} height={80} />
          </div>
          <p className="text-base text-neutral-700 mb-4">
            India&apos;s most trusted platform to compare &amp; choose the best online programs. <br />
            <span className="font-semibold text-pink-600">Empowering your education journey 🚀</span>
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        {/* Courses */}
        <div>
          <div className="text-lg font-bold mb-4 text-blue-700">Popular Courses</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base text-neutral-800">
            {courses.map((course) => (
              <li key={course.name}>
                <Link href={course.href} className="hover:text-pink-600 transition font-medium">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="text-lg font-bold mb-4 text-blue-700">Company</div>
          <ul className="space-y-3 text-base text-neutral-800">
            <li>
              <Link href="#about" className="hover:text-pink-600 transition font-medium">About Us</Link>
            </li>
            <li>
              <Link href="#careers" className="hover:text-pink-600 transition font-medium">Careers</Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-pink-600 transition font-medium">Blog</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-pink-600 transition font-medium">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <div className="text-lg font-bold mb-4 text-blue-700">Contact Us</div>
          <div className="text-base text-neutral-800 space-y-2">
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@collexa.app" className="hover:text-pink-600 transition">info@collexa.app</a>
            </div>
            <div>
              <span className="font-semibold">Toll Free:</span>{" "}
              <a href="tel:1800000000" className="hover:text-pink-600 transition">1800-000-000</a>
            </div>
            <div>
              <span className="font-semibold">Address:</span>
              <div className="ml-1 text-sm text-neutral-600">
                2nd Floor, Edu Tower, Sector 62, Noida, UP, India
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-600">
          <span>
            © {new Date().getFullYear()} <span className="font-semibold text-blue-700">Collexa Edu</span>. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="#terms" className="hover:text-pink-600 transition">Terms &amp; Conditions</Link>
            <Link href="#privacy" className="hover:text-pink-600 transition">Privacy Policy</Link>
            <Link href="#disclaimer" className="hover:text-pink-600 transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;