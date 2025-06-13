"use client";

import { motion } from "framer-motion";

import { reasons } from "@/constant/constants";


export default function WhyChooseUs() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      id="why-choose-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Verbum Tech Empower?
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We provide more than just tech training—we provide empowerment. Here’s why hundreds of students trust us to launch their digital careers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, id) => (
            <motion.div
              key={reason.id}
              className="bg-white p-6 rounded-2xl shadow transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-justify hover:cursor-pointer">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
