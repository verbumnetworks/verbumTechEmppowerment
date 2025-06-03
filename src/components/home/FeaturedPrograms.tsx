"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/image1.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "S psum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/image2.jpg",
  },
  {
    title: "Computer Networking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/image3.jpg",
  },
];

export default function FeaturedPrograms() {
  return (
    <motion.section
      className="py-12 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Featured Program
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3 cursor-pointer">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
          >
            <div className="h-48 w-full relative">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-[#0C1A2B]">
                {program.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2 text-center">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <Link
          href="/programs"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded inline-block text-center"
        >
          View All Programs
        </Link>
      </motion.div>
    </motion.section>
  );
}
