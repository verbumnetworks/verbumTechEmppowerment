// components/Banner.tsx
"use client";
import Link from "next/link";
const FooterBanner = () => {


  return (
     
      <section className="py-20 text-center px-6 md:px-20 bg-gradient-to-b from-black to-orange-500 text-white">
        <h2 className="text-5xl font-bold mb-4">Become a Sponsor Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Every contribution brings someone closer to a fulfilling tech career.
          Join us in building the future.
        </p>
        <Link
          href="/donate"
          className="inline-block bg-white transition-all 200 text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-black hover:text-white"
        >
          Sponsor Now
        </Link>
      </section>
  
  );
};

export default FooterBanner;
