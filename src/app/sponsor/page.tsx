"use client";


export default function SponsorPage() {
  return (
    <main className="min-h-screen bg-white text-[#0C1A2B]">
      {/* Hero Section */}
      <section className="py-20 bg-orange-50 text-center px-6 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Sponsor an Intern</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Empower Africa's future by investing in young talents. Your support can launch a tech career.
        </p>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold mb-4">Why Sponsor an Intern?</h2>
        <p className="text-gray-700 max-w-4xl">
          Sponsoring an intern is a direct investment in the next generation of African tech innovators. It offers hope,
          skills, and opportunity to youths who might otherwise lack access to quality training.
        </p>
      </section>

      {/* Areas of Sponsorship */}
      <section className="py-16 px-6 md:px-20 bg-orange-50">
        <h2 className="text-2xl font-bold mb-4">Areas of Sponsorship</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Tuition support for a 1-year training program</li>
          <li>Laptops and internet access for learners</li>
          <li>Project materials and tech resources</li>
          <li>Mentorship and career coaching</li>
          <li>Transport and living stipends</li>
        </ul>
      </section>

      {/* Financial Breakdown Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold mb-4">What It Takes to Train an Intern</h2>
        <p className="text-gray-700 mb-4 max-w-4xl">
          Sponsoring one intern for a full year includes the following average costs:
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p>✔ Tuition & Learning Materials: <strong>$500</strong></p>
            <p>✔ Laptop & Internet Access: <strong>$300</strong></p>
          </div>
          <div>
            <p>✔ Mentorship & Supervision: <strong>$150</strong></p>
            <p>✔ Transport & Stipends: <strong>$250</strong></p>
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold">Total per intern: <span className="text-orange-600">$1,200</span></p>
      </section>

      {/* How to Sponsor */}
      <section className="py-16 px-6 md:px-20 bg-orange-50">
        <h2 className="text-2xl font-bold mb-4">How You Can Sponsor</h2>
        <p className="text-gray-700 max-w-4xl mb-4">
          You can sponsor one or multiple interns. Choose a plan that works for you:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">One-Time Sponsor</h3>
            <p className="text-gray-600">Sponsor a full-year training for one intern.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Monthly Contribution</h3>
            <p className="text-gray-600">Contribute monthly toward a pool of interns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Corporate Partnership</h3>
            <p className="text-gray-600">Partner with us to fund and mentor interns as a company.</p>
          </div>
        </div>
      </section>

      {/* Impact Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold mb-4">Hear From Past Beneficiaries</h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Discover how your sponsorship can change lives:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-orange-50 p-6 rounded-lg shadow">
            "Thanks to my sponsor, I learned front-end development and now work remotely for a global company."
            <footer className="mt-4 text-sm text-gray-600">— Ada, Class of 2023</footer>
          </blockquote>
          <blockquote className="bg-orange-50 p-6 rounded-lg shadow">
            "I had no laptop or access to learning materials. Verbum Empower gave me both. Today I’m a full-time junior developer."
            <footer className="mt-4 text-sm text-gray-600">— Samuel, Class of 2022</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
     
    </main>
  );
}
