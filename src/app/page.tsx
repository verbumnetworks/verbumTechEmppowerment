// import Image from "next/image";
import Hero from "@/components/home/Hero";
import About from "@/components/home/AboutSection";
import Navbar from "@/components/navbar/Navbar";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import TestimonialSlider from '@/components/home/TestimonialSlider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedPrograms />
            <TestimonialSlider />

    </main>
  );
}
