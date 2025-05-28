// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-[#0C1A2B] text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="font-bold text-xl">VERBUM</div>

      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/sponsor">Sponsor</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="hidden md:block">
        <Link
          href="/donate"
          className={`px-5 py-2 rounded-md transition ${
            scrolled
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-[#0C1A2B] text-gray-300  hover:bg-gray-100"
          }`}
        >
          Donate
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-10"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-black/70 text-white flex flex-col items-center py-4 gap-4 transition-all 200 z-0 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/sponsor">Sponsor</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/donate" className="bg-orange-500 px-4 py-2 rounded-md">
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
