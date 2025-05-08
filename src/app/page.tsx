// import Image from "next/image";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className="pt-14">
      <Hero
        title="Support a Cause That Matters"
        subtitle="Your contribution helps us empower communities through technology."
        backgroundImage="/assets/hero-img.jpg"
      />
      <About/>
    </main>
  );
}
