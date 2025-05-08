'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/constant/constants';
import DonateButton from '../button/DonateButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0C1A2B] text-gray-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-gray-50 font-bold text-xl">
            <Link href="/">Verbum_Tech</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.index}
                href={link.url}
                className="text-sm font-medium text-gray-50 hover:text-[#b41313]  transition duration-300"
              >
                {link.title}
              </Link>
            ))}
            <DonateButton
              text="Donate"
              className=" text-white py-2 px-4 rounded transition"
              link="/donate"
            />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        } bg-white shadow-sm`}
      >
        <div className="flex flex-col space-y-4 px-4">
          {['Home', 'About us', 'What We Do', 'Media', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm font-medium text-gray-50 hover:text-[#b41313] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <DonateButton
            text="Donate"
            className="text-white py-2 px-4 roundedt ransition"
            link="/donate"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
