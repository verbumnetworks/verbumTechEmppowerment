'use client';

import Image from 'next/image';
import Link from 'next/link';
import VideoModal from '@/components/Video'; // Make sure this path is correct and points to the VideoModal component

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            lvinar ultrices, purus lectuss urna <span className="text-orange-700">lesuada libero, 
            sit amet commodo magna eros quis urna</span>
          </h2>
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. 
            Fusce posuere, magna sed pulvinar ultrices, purus lectus malesuada libero, 
            sit amet commodo magna eros quis urna.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/about">
              <button className="bg-orange-500 text-white hover:bg-orange-600 transition-all 200 px-5 py-2 rounded-md ">
                Learn More
              </button>
            </Link>

            <VideoModal />
          </div>
        </div>

        <div className="relative w-full h-64 md:h-[400px]">
          <Image
            src="/assets/hero-img.jpg"
            alt="Engineer working on solar panels"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
