"use client";


import Pagebanner from "@/components/Pagebanner"
import { programs } from "@/constant/constants";


import Image from "next/image";
import Link from "next/link";


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
            <Link href={'/programs/'+ program.id}>
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
            </Link>
          
          </div>
        ))}
      </div>
    </section>
    </main> 

  );
}
