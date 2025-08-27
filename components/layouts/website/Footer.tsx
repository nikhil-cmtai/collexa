import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-semibold mb-3">Chuno Apna Sahi</div>
          <p className="text-sm text-neutral-600">India&apos;s trusted place to compare online programs.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Programs</div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="#mba" className="hover:text-black">Online MBA</Link></li>
            <li><Link href="#mca" className="hover:text-black">Online MCA</Link></li>
            <li><Link href="#ug" className="hover:text-black">UG Courses</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="#about" className="hover:text-black">About</Link></li>
            <li><Link href="#careers" className="hover:text-black">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <div className="text-sm text-neutral-700">
            <div>Email: info@collexa.app</div>
            <div>Toll Free: 1800-000-000</div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Collexa Edu. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#terms" className="hover:text-black">Terms</Link>
            <Link href="#privacy" className="hover:text-black">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;