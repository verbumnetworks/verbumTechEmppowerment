// components/Hero.tsx
'use client';

import React from 'react';
import DonateButton from '@/components/button/DonateButton'; // Ensure this is correctly imported

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg', // Set a default image
}) => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        <DonateButton
           text="Donate"
           className=" text-white py-2 px-4 rounded transition"
           link="/donate" />
      </div>
    </section>
  );
};

export default Hero;
