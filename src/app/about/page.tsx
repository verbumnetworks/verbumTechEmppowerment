'use client';
import  Image  from 'next/image';
import Pagebanner from '@/components/Pagebanner';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



 

const AboutPage = () => {
   const values = [
    {
      title: 'Innovation',
      desc: 'We embrace creativity and forward-thinking, continuously seeking new ways to improve, evolve, and add value. We foster an environment where bold ideas are encouraged, experimentation is welcomed, and learning from failure is seen as a stepping stone to success.',
    },
    {
      title: 'Integrity',
      desc: 'We are honest, ethical, and accountable in all that we do. We uphold the highest standards of transparency and responsibility, ensuring our actions align with our words. Trust is the foundation of our relationships—with clients, colleagues, and the community—and we work diligently to earn and maintain it.',
    },
    {
      title: 'Impact',
      desc: 'We drive meaningful change in communities by using our skills, resources, and innovations to make a lasting difference. Our work is guided by a deep sense of purpose, and we strive to create solutions that uplift, empower, and inspire.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? values.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === values.length - 1 ? 0 : prev + 1));
  };
  return (
    <main className="w-full">
      <Pagebanner
        title="About Us"
        subtitle="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />
 <section className="py-16 px-4 md:px-20 bg-white text-center">
    {/* Image and Text Section */}
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
          <p className="text-gray-600">
           Our goal is to bridge the digital skills gap by offering hands-on, practical training in areas such as graphic design, web development, computer literacy, UI/UX design, video editing, cybersecurity, and digital marketing. Whether you're a beginner or looking to upskill, our program provides the tools and mentorship you need to thrive in the digital economy. At Verbum, we believe technology is a powerful tool for personal and economic growth, and we are committed to empowering communities through knowledge, skills, and innovation. Join us and take the first step towards a tech-driven future!
          </p>
          <Link href="/donate">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          OUR MISSION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto"> At Verbum Networks, our mission is to empower individuals—especially youths and underserved communities—with free and affordable ICT training and digital skills that unlock opportunities for employment, entrepreneurship, and lifelong growth in the digital age. We are committed to building a tech-savvy society through inclusive, practical, and life-changing education.
        </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 mt-4">
           OUR VISION
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our vision is to become a leading force in tech empowerment across Africa, known for transforming lives through access to digital skills, fostering innovation, and bridging the digital divide. We envision a future where every willing learner, regardless of background, has the opportunity to thrive in the tech-driven world.
        </p>
       
      </section>

      {/* Values Section */}
       <section className="bg-gray-100 py-16 px-4 md:px-20">
      <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800">
        Our Core Values
      </h3>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide */}
        <div className="w-full max-w-xl bg-white p-6 rounded shadow text-center">
          <h4 className="text-lg font-semibold mb-2 text-black">
            {values[currentIndex].title}
          </h4>
          <p className="text-gray-600">{values[currentIndex].desc}</p>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>


    
      </main>
  );
};

export default AboutPage;
