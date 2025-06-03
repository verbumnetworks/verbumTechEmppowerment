import Image from "next/image";
import Pagebanner from "@/components/Pagebanner";

export default function EmpowermentDonatePage() {
  return (
    <main >
        <Pagebanner
        title="donate"
        subtitle ="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />
      {/* Left/Main Content */}
<section  className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <section className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">
          Support Verbum Tech Empowerment Program
        </h1>

        {/* Banner Image */}
        <div className="mb-6 rounded overflow-hidden">
          <Image
            src="/assets/hero-img.jpg"
            alt="Empowerment Banner"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
        </div>

        {/* Donate Button & Progress */}
        <button className="bg-orange-500 px-6 py-3 rounded-md text-white hover:bg-orange-600">
          Donate Now
        </button>

        <div className="mt-4 mb-2">
          <div className="bg-gray-300 h-3 rounded-full">
            <div className="bg-orange-600 h-3 w-3/5 rounded-full" />
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Empowering Youth Through Technology
          </h2>
          <p className="text-gray-700 mb-4">
            The Verbum Tech Empowerment Program is focused on equipping
            underprivileged youth in Nigeria with digital skills, from coding to
            tech entrepreneurship. Your support helps us provide laptops,
            internet access, and professional mentorship to youths across rural
            and urban communities.
          </p>
          <p className="text-gray-700">
            With your sponsorship, we can expand training centers, fund
            certification exams, and create long-term economic impact through
            technology education.
          </p>
        </div>

        {/* Secondary Image */}
        <div className="mb-6 rounded overflow-hidden">
          <Image
            src="/assets/hero-img.jpg"
            alt="Tech Training"
            width={1200}
            height={300}
            className="w-full h-56 object-cover rounded"
          />
        </div>

        {/* Challenge Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Challenges</h2>
          <p className="text-gray-700">
            Many talented youths lack access to the tools and platforms needed
            to thrive in today’s digital economy. Verbum Tech Empowerment
            bridges this gap through community-based innovation hubs, but we
            need your help to scale.
          </p>
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className="lg:col-span-1 space-y-6">
        {/* Categories */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Tech Training</li>
            <li>Mentorship</li>
            <li>Data Support</li>
            <li>Hardware Support</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Recent Updates</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center space-x-2">
              <Image
                src="/assets/hero-img.jpg"
                alt="Update 1"
                width={48}
                height={48}
                className="rounded w-12 h-12 object-cover"
              />
              <span>May Outreach Summary</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src="/assets/hero-img.jpg"
                alt="Update 2"
                width={48}
                height={48}
                className="rounded w-12 h-12 object-cover"
              />
              <span>Meet Our Trainees</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src="/assets/hero-img.jpg"
                alt="Update 3"
                width={48}
                height={48}
                className="rounded w-12 h-12 object-cover"
              />
              <span>Why Tech Is Our Future</span>
            </li>
          </ul>
        </div>

        {/* Popular Tags */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Popular</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-[#ace7f8] text-teal-950 px-2 py-1 rounded">
              tech
            </span>
            <span className="bg-[#ace7f8] text-teal-950 px-2 py-1 rounded">
              youth
            </span>
            <span className="bg-[#ace7f8] text-teal-950 px-2 py-1 rounded">
              empowerment
            </span>
            <span className="bg-[#ace7f8] text-teal-950 px-2 py-1 rounded">
              education
            </span>
            <span className="bg-[#ace7f8] text-teal-950 px-2 py-1 rounded">
              future
            </span>
          </div>
        </div>
      </aside>
      </section>
    </main>
  );
}
