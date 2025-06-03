"use client";
import { Phone, MessageCircle, MapPin } from "lucide-react";

import Pagebanner from "@/components/Pagebanner";
const Contact: React.FC = () => {
  return (
    <main className="w-full">
      <Pagebanner
        title="Contact Us"
        subtitle="We’d love to hear from you! Reach out through the form or find us on the map below."
        backgroundImage="/assets/hero-img.jpg"
      />
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.203598799951!2d7.4903953296584165!3d6.431303562609139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a164ddaabdd7%3A0x15205a092b91068c!2sCatholic%20Institute%20for%20Development%20Justice%20And%20Peace!5e0!3m2!1sen!2sng!4v1746718652453!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our location"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Help Cards */}
      <div className="mt-6 text-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Still Need Help</h2>
        <p className="text-gray-600 mb-10">
          We're here to support you anytime, anywhere
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-teal-50 p-6 rounded-lg shadow">
            <Phone className="w-6 h-6 mb-4 text-teal-700" />
            <h3 className="font-semibold mb-2">Call Support</h3>
           <p className="text-gray-600">Reach us by phone Mon–Fri 9am–5pm.
</p><p className="text-gray-600 text-left">+2349057054137,+2348107586270,+2347031272362</p>
              {/* <ul className="space-y-2 text-sm">
              <li>+2349057054137</li>
              <li>+2348107586270</li>
              <li>+2347031272362</li>
            </ul> */}
          </div>
          <div className="bg-teal-50 p-6 rounded-lg shadow text-center">
            <MessageCircle className="w-6 h-6 mb-4 text-teal-700 " />
            <h3 className="font-semibold mb-2">Chat With Us</h3>
            <p className="text-gray-600">
              Live chat available 24/7 for quick help.
            </p>
          
          </div>
          <div className="bg-teal-50 p-6 rounded-lg shadow">
            <MapPin className="w-6 h-6 mb-4 text-teal-700 text-center" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
              1-3 CIDJAP Street Behind MRS Filling staion Uwani, Enugu,Nigeria
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
