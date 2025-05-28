"use client";


import Pagebanner from "@/components/Pagebanner"




import Image from "next/image";

const programs = [
  {
    title: "Web Development",
    description:
      "Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Master design principles and tools like Canva, Photoshop, and Illustrator to create stunning visuals.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Computer Networking",
    description:
      "Understand the fundamentals of networking, from IP addressing to setting up real-world networks.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Design user-friendly interfaces with a focus on user experience and design thinking methodologies.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Data Analytics",
    description:
      "Learn how to collect, clean, and analyze data using tools like Excel, SQL, and Power BI.",
    image: "/assets/hero-img.jpg",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect digital assets and learn ethical hacking, system hardening, and security protocols.",
    image: "/assets/hero-img.jpg",
  },
];

export default function Programs() {
  return (
     <main>
   <Pagebanner
         title="Programs we offer"
         backgroundImage="/assets/hero-img.jpg"
       />
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        All Programs
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <div className="h-48 w-full relative">
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
    </section>
    </main> 

  );
}
