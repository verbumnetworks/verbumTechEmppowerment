"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { featuredprograms } from "@/constant/constants";

export default function FeaturedPrograms() {
  return (
    <motion.section
      className="py-12 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">  <motion.h2
        className="text-3xl md:text-5xl font-bold  text-center mb-8 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our Featured Program
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        We provide more than just tech training—we provide empowerment. Here’s
        why hundreds of students trust us to launch their digital careers.
      </motion.p></div>
    

      <div className="grid gap-6 md:grid-cols-3 cursor-pointer">
        {featuredprograms.map((program, id) => (
          <motion.div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + id * 0.2, duration: 0.5 }}
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
