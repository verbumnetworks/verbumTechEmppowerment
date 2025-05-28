'use client';
import { signIn } from "next-auth/react";

import DonateButton from "@/components/button/DonateButton";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-[#0C1A2B] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-bold mb-2">Verbum</h2>
          <p className="text-sm mb-4">
            Verbum Tech Empowerment Program provides practical digital skills to
            help young minds build a brighter, tech-driven future.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Verbum</h3>
          <ul className="space-y-2 text-sm">
            <li>Why Verbum Tech </li>
            <li>Mentor</li>
            <li>Testimonial</li>
            <li>Donate</li>
            <li>Volunteer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Contact</li>
            <li>Products</li>
            <li>Sign Up</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Get in Touch with Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>1 - 3 CIDJAP Street</li>
            <li>Behind MRS Filling Station Uwani Enugu</li>
            <li>+2349057054137</li>
            <li>info@verbumnetworksenugu.com</li>
                  <button onClick ={ ()=> signIn()}>Sinin</button>

          </ul>
          <div className="mt-4">
            <DonateButton
              link="https://yourdonationlink.com"
              className="bg-orange-500 hover:bg-orange-600"
              text="Donate Now"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Verbum Networks Limited. All rights
        reserved — Verbum Tech Empowerment Website.
      </p>
    </footer>
  );
};
