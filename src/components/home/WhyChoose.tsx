"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Practical Hands-on Training",
    description:
      "Our training goes beyond theory—we immerse you in real-world projects that mirror industry scenarios. This hands-on approach ensures you gain practical experience and confidence. You won’t just learn; you’ll do.",
  },
  {
    title: "Internship Opportunities",
    description:
      "We connect you with real companies where you can apply your skills in a professional setting. Our internship placements are designed to bridge the gap between learning and working. It’s a great opportunity to build your resume and grow your network.",
  },
  {
    title: "Tutor Support",
    description:
      "You’re never alone on your learning journey. Our experienced tutors are available to offer support, answer questions, and provide feedback. Whether you're stuck on a project or need career advice, we’ve got your back.",
  },
  {
    title: "Lifetime Access",
    description:
      "Once you enroll, you get lifetime access to all course materials and resources. Revisit lessons anytime to refresh your knowledge or learn something new. Your learning doesn’t stop when the program ends—it continues for life.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We believe quality tech education should be within everyone’s reach. Our programs are competitively priced without compromising on value. Learn valuable skills without stretching your budget.",
  },
  {
    title: "Certification",
    description:
      "Receive a certificate that validates your skills and commitment upon completing the full one-year program. It serves as proof of your achievement and can be a great addition to your CV or portfolio. Stand out to employers and clients alike.",
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
          className="text-3xl  md:text-4xl font-bold mb-6 bg-gradient-to-b from-black to-orange-500 text-transparent bg-clip-text"
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
              <p className="text-gray-600 text-justify hover:cursor-pointer">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
