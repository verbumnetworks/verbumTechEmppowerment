'use client';

import Image from 'next/image';
import Link from 'next/link';
import VideoModal from '@/components/Video';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Verbun Networks FREE <span className="text-orange-700">Tech Empowerment Program</span>
          </h2>
          <p className="text-gray-800 mb-6">
          The Verbum Tech Empowerment Program is an initiative by Verbum Networks Limited designed to equip individuals—especially youths, students, entrepreneurs, and career switchers—with essential digital and technological skills for today’s fast-evolving world.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/about">
              <button className="bg-orange-500 text-white hover:bg-orange-600 transition-all 200 px-5 py-2 rounded-md">
                Learn More
              </button>
            </Link>
            <VideoModal />
          </div>
        </motion.div>

        {/* Image Section with Animation */}
        <motion.div
          className="relative w-full h-64 md:h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/hero-img.jpg"
            alt="Engineer working on solar panels"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
