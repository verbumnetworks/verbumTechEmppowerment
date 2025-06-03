"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/assets/hero-img.jpg",
  "/assets/youth1.jpg",
  "/assets/youth4.jpg",
  "/assets/youth5.jpg",
  "/assets/youth2.jpg",
  "/assets/youth3.avif",
  "/assets/youth6.avif",
];

export default function Hero() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % heroImages.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === current) return;
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slide Backgrounds */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={heroImages[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <Image
              src={heroImages[current]}
              alt="Verbum Tech Empowerment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Boxed */}
      <div className="h-full flex justify-center items-center px-4 mt-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold">
            Empowering African Youth Through Tech — Join Us to Sponsor an Intern
          </h1>
          <p className="mt-4 text-base md:text-lg">
            Verbum Tech Empowerment Program equips aspiring developers with the skills to thrive in the tech world. Help us make tech dreams a reality.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href="/donate"
              className="bg-orange-500 px-6 py-3 rounded-md text-white hover:bg-orange-600"
            >
              Donate Now
            </a>
            <a
              href="/sponsor"
              className="border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
            >
              Sponsor an Intern
            </a>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-orange-500"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
