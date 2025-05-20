"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    name: "Yeshwanth",
    school: "Zzz School",
    image: "/assets/hero-img.jpg",
  },
  {
    quote:
      "This is the second testimonial, showing the impact of our programs across local schools and communities.",
    name: "Amira",
    school: "Hope Academy",
    image: "/images/testimonial2.jpg",
  },
  {
    quote:
      "Another voice from the ground—proving how youth-led initiatives shape a greener tomorrow.",
    name: "Tunde",
    school: "Bright Future School",
    image: "/images/testimonial3.jpg",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="bg-[#0B1D29] text-white py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#2C3E50] p-6 rounded-lg"
            >
              <p className="text-sm mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-semibold">
                {testimonial.name},{" "}
                <span className="font-normal">{testimonial.school}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex mt-4 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-500"
                } transition`}
                onClick={() => setIndex(i)}
              ></button>
            ))}
          </div>
        </div>

        <div className="relative w-full h-64 md:h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.image}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
