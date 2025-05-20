// components/Banner.tsx
"use client";
import React from 'react';

const FooterBanner = () => {
  return (
    <section className="bg-[#ace7f8] text-teal-950 py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Don’t miss our weekly updates about donations
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mt-6"
      >
        <input
          type="email"
          placeholder="Enter your email address..."
          className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 outline-2"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default FooterBanner;
