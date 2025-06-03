"use client";

import Pagebanner from "@/components/Pagebanner";
import { programs } from "@/constant/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
  const images = [
  "/assets/image1.jpg",
  "/assets/youth2.jpg",
  "/assets/image3.jpg",
  "/assets/youth4.jpg",
  "/assets/youth5.jpg",
  "/assets/youth6.avif",
];

export default function Programs() {
  return (
    <main>
      <Pagebanner
        title="Programs we offer"
        backgroundImage="/assets/hero-img.jpg"
      />

      {/* Programs Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          All Programs
        </h2>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <Link href={`/programs/${program.id}`}>
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
          <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 bg-white"
          >
            <Image
              src={img}
              alt={`Event ${i + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
          </motion.div>
        ))}
      </div>
    </section>
    </main>
  );
}
