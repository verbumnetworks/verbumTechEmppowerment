"use client";

import Image from "next/image";
import Pagebanner from "@/components/Pagebanner";

export default function EmpowermentSponsorDonatePage() {
  return (
    <main className="min-h-screen bg-white text-[#0C1A2B]">
      {/* Banner */}
      <Pagebanner
        title="donate"
        subtitle="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />

      <section className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Support Verbum Tech Empowerment Program
          </h1>

          <div className="mb-6 rounded overflow-hidden">
            <Image
              src="/assets/youth1.jpg"
              alt="Empowerment Banner"
              width={1200}
              height={400}
              className="w-full h-64 object-cover rounded"
            />
          </div>

          <div className="mt-4 mb-6">
            <div className="bg-gray-300 h-3 rounded-full">
              <div className="bg-orange-600 h-3 w-3/5 rounded-full" />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Empowering Youth Through Technology
          </h2>
          <p className="text-gray-700 mb-4">
            The Verbum Tech Empowerment Program equips underprivileged youth in
            Nigeria with digital skills—from coding to tech entrepreneurship.
            Your support provides laptops, internet access, and mentorship to
            youths in rural and urban areas.
          </p>
          <p className="text-gray-700">
            Sponsorship expands training centers, funds certification exams, and
            fosters long-term economic impact through tech education.
          </p>
        </div>

        <div>
          <Image
            src="/assets/hero-img.jpg"
            alt="Tech Training"
            width={1200}
            height={300}
            className="w-full h-56 object-cover rounded"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Challenges</h2>
          <p className="text-gray-700">
            Many talented youths lack access to the tools, training, and
            platforms needed to thrive in today`s digital economy. Verbum Tech
            Empowerment is our response: inclusive, community-based innovation
            hubs offering practical digital skills training. Your support helps
            us scale this vision to reach more underserved communities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Why Sponsor an Intern?</h2>
          <p className="text-gray-700 mb-6">
            Sponsoring an intern invests in Africa`s future innovators. It
            provides hope, access, and opportunity for youth with limited access
            to quality tech training.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Areas of Sponsorship
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tuition support for a 1-year training program</li>
                <li>Laptops and internet access</li>
                <li>Project materials and tech resources</li>
                <li>Mentorship and career coaching</li>
                <li>Transport and living stipends</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Program Costs</h3>
              <ul className="text-gray-700 space-y-2">
                <li>➔ 📣 Digital Marketing: ₦750,000</li>
                <li>➔ 💻 Web Development: ₦850,000</li>
                <li>➔ 🌐 Computer Networking: ₦700,000</li>
                <li>➔ 🔐 Cybersecurity: ₦850,000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 py-10 px-4 rounded">
          <h2 className="text-2xl font-bold mb-4">
            What It Takes to Train an Intern
          </h2>
          <p className="text-gray-700 mb-4 max-w-4xl">
            Sponsoring one intern for a full year includes:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p>
                ✔ Tuition & Learning Materials: <strong>$500</strong>
              </p>
              <p>
                ✔ Laptop & Internet Access: <strong>$300</strong>
              </p>
            </div>
            <div>
              <p>
                ✔ Mentorship & Supervision: <strong>$150</strong>
              </p>
              <p>
                ✔ Transport & Stipends: <strong>$250</strong>
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold text-center">
            Total per intern: <span className="text-orange-600">$1,200</span>
          </p>
          <div className="mt-10">
          <div className="border rounded-lg p-4 bg-white shadow-sm text-center">
            <h3 className="font-bold text-4xl mb-2">
              Bank Transfer (Naira)
            </h3>
            <p>
              <strong>Bank:</strong> Zenith Bank
            </p>
            <p>
              <strong>Account Name:</strong> Verbum Networks Limited
            </p>
            <p>
              <strong>Account Number:</strong> 1011567764
            </p>
          </div>

          {/* <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">
              International Donations (USD)
            </h3>
            <p>
              <strong>Bank:</strong> Access Bank
            </p>
            <p>
              <strong>SWIFT Code:</strong> ABNGNGLA
            </p>
            <p>
              <strong>Account Name:</strong> Verbum Tech Foundation
            </p>
            <p>
              <strong>Account Number:</strong> 9876543210
            </p>
          </div> */}
        </div>
        </div>
       
      </section>
    </main>
  );
}
