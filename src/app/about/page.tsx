'use client';

import Image from 'next/image';
import Pagebanner from '@/components/Pagebanner';
import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Innovation',
    desc: 'We embrace creativity and forward-thinking, continuously seeking new ways to improve, evolve, and add value. We foster an environment where bold ideas are encouraged, experimentation is welcomed, and learning from failure is seen as a stepping stone to success.',
  },
  {
    title: 'Integrity',
    desc: 'At Verbum Tech Empowerment Internship, we believe in doing the right thing—always. We instill a strong sense of honesty and ethical conduct in our interns, ensuring they grow into trustworthy professionals.',
  },
  {
    title: 'Expertise and Professionalism',
    desc: 'Our internship program is designed to develop industry-relevant skills and professional conduct. Interns are trained to approach every task with confidence, competence, and a commitment to excellence.',
  },
  {
    title: 'Flexibility',
    desc: 'We equip interns to be adaptable in today’s fast-changing tech world. Whether learning new tools or working in dynamic teams, flexibility is a skill we nurture intentionally.',
  },
  {
    title: 'Impact',
    desc: 'We drive meaningful change in communities by using our skills, resources, and innovations to make a lasting difference. Our work is guided by a deep sense of purpose, and we strive to create solutions that uplift, empower, and inspire.',
  },
  {
    title:"Innovation",
    desc:'Our program encourages creativity and bold thinking. Interns are challenged to come up with fresh ideas, experiment with solutions, and explore new ways of solving problems using technology.'
  }
];

// Framer Motion animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const AboutPage = () => {
  return (
    <main className="w-full">
      <Pagebanner
        title="About Us"
        subtitle="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/assets/hero-img.jpg"
            alt="Team working"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-gray-600 text-justify">
            Our goal is to bridge the digital skills gap by offering hands-on, practical training in areas such as graphic design, web development, computer literacy, UI/UX design, video editing, cybersecurity, and digital marketing. Whether you`re a beginner or looking to upskill, our program provides the tools and mentorship you need to thrive in the digital economy. At Verbum, we believe technology is a powerful tool for personal and economic growth, and we are committed to empowering communities through knowledge, skills, and innovation. Join us and take the first step towards a tech-driven future!
          </p>
          <Link href="/donate">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          OUR MISSION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify">
          At Verbum Networks, our mission is to empower individuals—especially youths and underserved communities—with free and affordable ICT training and digital skills that unlock opportunities for employment, entrepreneurship, and lifelong growth in the digital age. We are committed to building a tech-savvy society through inclusive, practical, and life-changing education.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 mt-10">
          OUR VISION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-justify">
          Our vision is to become a leading force in tech empowerment across Africa, known for transforming lives through access to digital skills, fostering innovation, and bridging the digital divide. We envision a future where every willing learner, regardless of background, has the opportunity to thrive in the tech-driven world.
        </p>
      </section>

      {/* Core Values Section with Animation */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800">
          Our Core Values
        </h3>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white p-6 rounded shadow text-center"
              variants={cardVariants}
            >
              <h4 className="text-lg font-semibold mb-2 text-black">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
