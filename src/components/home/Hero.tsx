// app/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-img.jpg"
          alt="Verbum tech empowerment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
          Empowering African Youth Through Tech — Join Us to Sponsor an Intern
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl">
          Verbum Tech Empowerment Program equips aspiring developers with the skills to thrive in the tech world. Help us make tech dreams a reality.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a href="/donate" className="bg-orange-500 px-6 py-3 rounded-md text-white hover:bg-orange-600">
            Donate Now
          </a>
          <a href="/sponsor" className="border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
            Sponsor an Intern
          </a>
        </div>
      </div>
      
    </section>
  );
}
