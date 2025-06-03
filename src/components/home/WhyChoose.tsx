"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Practical Hands-on Training",
    description:
      "We focus on real-world projects that help you apply what you learn immediately.",
  },
  {
    title: "Internship Opportunities",
    description:
      "Gain industry experience with internship placements after training.",
  },
  {
    title: "Tutor Support",
    description:
      "Access dedicated tutor support to guide you every step of the way.",
  },
  {
    title: "Lifetime Access",
    description:
      "Review course materials anytime with lifetime access after enrollment.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Learn valuable tech skills without breaking the bank. Learn valuable tech skills without breaking the bank. Learn valuable tech skills without breaking the bank.",
  },
  {
    title: "Certification",
    description:
      "Get a certificate upon completion of the one year program.",
  },
];

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
          className="text-3xl font-bold text-gray-800 mb-6"
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
