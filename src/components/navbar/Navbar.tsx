'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import DonateButton from '../button/DonateButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-black font-bold text-xl">
            <Link href="/">largerthan<span className="text-blue-600">/</span></Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About us', 'What We Do', 'Media', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-black transition duration-300"
              >
                {item}
              </Link>
            ))}
            <DonateButton
              text="Donate"
              className="bg-[#1C1C2A] text-white py-2 px-4 rounded hover:bg-[#34344a] transition"
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
              className="text-sm font-medium text-gray-700 hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <DonateButton
            text="Donate"
            className="bg-[#1C1C2A] text-white py-2 px-4 rounded hover:bg-[#34344a] transition"
            link="/donate"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
