import React from "react";
import Link from "next/link";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Link
        href="https://wa.me/918000000000"
        target="_blank"
        className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white shadow hover:bg-green-600"
        aria-label="WhatsApp"
      >
        WA
      </Link>
      <a
        href="tel:+18004205757"
        className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700"
        aria-label="Call"
      >
        Call
      </a>
      <Link
        href="#suggest"
        className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-black text-white shadow hover:bg-neutral-800"
        aria-label="Suggest in 2 mins"
      >
        ⚡
      </Link>
    </div>
  );
};

export default FloatingButtons;