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

      <div className="hidden md:flex gap-6 font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/sponsor">Sponsor</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="hidden md:block">
        <Link
          href="/donate"
          className={`px-5 py-2 rounded-md transition-all duration-200 ${
            scrolled
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-[#0C1A2B] text-gray-300 hover:bg-gray-100"
          }`}
        >
          Donate
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-50 text-2xl"
      >
        ☰
      </button>

      {/* Mobile Full-Height Menu with Slide Transition */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-transform duration-300 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
        <Link href="/sponsor" onClick={() => setIsOpen(false)}>Sponsor</Link>
        <Link href="/donate" onClick={() => setIsOpen(false)}>Donate</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link
          href="/donate"
          className="bg-orange-500 px-6 py-2 rounded-md text-white"
          onClick={() => setIsOpen(false)}
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
