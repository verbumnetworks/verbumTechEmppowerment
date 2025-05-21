'use client';
import  Image  from 'next/image';
import Pagebanner from '@/components/Pagebanner';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <main className="w-full">
      <Pagebanner
        title="About Us"
        subtitle="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />
 <section className="py-16 px-4 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Verbum Networks, we are dedicated to empowering individuals and organizations with cutting-edge technology solutions and ICT training that fosters growth, innovation, and success in the digital age.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-800">
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Innovation', desc: 'We embrace creativity and forward-thinking.' },
            { title: 'Integrity', desc: 'We are honest, ethical, and accountable.' },
            { title: 'Impact', desc: 'We drive meaningful change in communities.' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded shadow">
              <h4 className="text-lg font-semibold mb-2 text-black">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
            We are a team of tech enthusiasts and educators committed to equipping students, businesses, and institutions with the digital skills they need to thrive. From basic ICT to advanced development and cybersecurity, we build capacity across all levels.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
      </main>
  );
};

export default AboutPage;
