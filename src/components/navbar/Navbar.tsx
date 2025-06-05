"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import DonateButton from "../button/DonateButton";
import { navLinks } from "@/constant/constants";

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
      className={`fixed top-0 left-0 w-full z-50 px-8 py-2 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-[#0C1A2B] text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-center ">
        <Image
          src="/assets/logo.png"
          alt="Verbum Health Management System"
          width={40}
          height={40}
          className="rounded-full h-10 w-10 md:h-12 md:w-12 object-cover"
          loading="lazy"
        />
        <p className="text-lg hidden font-bold md:block italic">
          Verbum Tech 
        </p>
      </div>{" "}
      <div className="hidden md:flex gap-6 font-bold">
        {/* Map through navLinks for dynamic links */}
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:text-orange-500 transition-colors duration-300"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <DonateButton link="/donate" label="Donate Now" />
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
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 40 }}
      >
        {/* Map through navLinks for dynamic links */}
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </Link>
        ))}

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
