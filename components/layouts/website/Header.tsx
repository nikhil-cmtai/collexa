  import React from "react";
  import Image from "next/image";
  import Link from "next/link";

  const navLinks = [
    { href: "#programs", label: "Explore Programs" },
    { href: "#universities", label: "Top Universities" },
    { href: "#tools", label: "Tools" },
    { href: "#about", label: "About" },
  ];

  const Header = () => {
    return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-secondary shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center">
              <span className="absolute -left-4 -top-2 h-10 w-10 rounded-full bg-secondary blur-lg opacity-70 -z-10 animate-pulse" />
              <Image
                src="/logo.png"
                alt="Collexa logo"
                width={120}
                height={48}
                className="drop-shadow-md transition-transform group-hover:scale-105"
                priority
              />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1 rounded-md text-neutral-700 hover:text-secondary hover:bg-primary/10 transition-colors duration-150"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#suggest"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-sm font-semibold px-5 py-2 shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <span className="hidden sm:inline-block">✨</span>
              Suggest in 2 mins
            </Link>
          </div>
        </div>
        {/* Sexy bottom accent bar */}
        <div className="h-1/2 w-full bg-gradient-to-r from-primary to-secondary opacity-80" />
      </header>
    );
  };

  export default Header;