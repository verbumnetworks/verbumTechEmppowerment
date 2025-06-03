'use client';
import Hero from "@/components/home/Hero";
import About from "@/components/home/AboutSection";
// import Navbar from "@/components/navbar/Navbar";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import TestimonialSlider from '@/components/home/TestimonialSlider';
import WhyChooseUs from "@/components/home/WhyChoose";
import FaqSection from "@/components/home/FaqSection";


export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <FeaturedPrograms />
      <WhyChooseUs/>
      <TestimonialSlider />
      <FaqSection />

    </main>
  );
}
