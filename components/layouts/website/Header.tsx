import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={140} height={60} />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <Link href="#programs" className="hover:text-black">Explore Programs</Link>
          <Link href="#universities" className="hover:text-black">Top Universities</Link>
          <Link href="#tools" className="hover:text-black">Tools</Link>
          <Link href="#about" className="hover:text-black">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="hidden md:inline text-sm text-neutral-700 hover:text-black">Sign in</Link>
          <Link href="#suggest" className="inline-flex items-center rounded-md bg-black text-white text-sm px-4 py-2 hover:bg-neutral-800">
            Suggest in 2 mins
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;