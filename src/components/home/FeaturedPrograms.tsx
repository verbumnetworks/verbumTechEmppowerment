"use client";

import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Web DeveLopment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "S psum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Computer Networking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.",
    image: "/assets/hero-img.jpg",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Featured Program
      </h2>

      <div className="grid gap-6 md:grid-cols-3 hover:cursor-pointer">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <div className="h-48 w-full relative ">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-[#0C1A2B]">
                {program.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2 text-center">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/programs"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded inline-block text-center"
        >
          View All Programs
        </Link>
      </div>
    </section>
  );
}
