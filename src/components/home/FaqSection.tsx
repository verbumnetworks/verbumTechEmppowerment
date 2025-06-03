import Image from "next/image";
import { AccordionItem } from "../AccordionItem";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const faqData = [
  {
    question: "Let’s Do The Right Thing Now",
    answer: "Support a cause today and make a positive impact.",
  },
  {
    question: "Can I Donate Anonymously?",
    answer: "Yes, anonymous donations are allowed through our platform.",
  },
  {
    question: "Join Your Hand With Us For a Better Life",
    answer: "Partner with us and help spread kindness around the world.",
  },
  {
    question: "How Do I Cancel My Recurring Donation?",
    answer:
      "Log in and go to settings > billing to cancel recurring donations.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-gray-500 mb-4">Have Any Question?</h2>
        <h1 className="text-3xl font-bold mb-10">Frequently Asked Questions</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Placeholder */}
          <div className="bg-[#ace7f8] text-teal-950 w-full">
            <Image src="/assets/faq.avif" width={200} height={200} alt="faq"  className="w-full"/>
          </div>
          {/* FAQ Items */}
          <div className="bg-[#ace7f8] text-teal-950rounded-lg p-6 shadow">
            <AccordionItem
              question="Make A Difference In The Life Of A Child"
              answer="Your contribution can help provide essentials like food, education, and shelter."
            />
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* Help Cards */}
        <div className="mt-36 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help</h2>
          <p className="text-gray-600 mb-10">
            We're here to support you anytime, anywhere
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-teal-50 p-6 rounded-lg shadow">
              <Phone className="w-6 h-6 mb-4 text-teal-700" />
              <h3 className="font-semibold mb-2">Call Support</h3>
              <p className="text-gray-600">
                Reach us by phone Mon–Fri 9am–5pm.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow">
              <MessageCircle className="w-6 h-6 mb-4 text-teal-700" />
              <h3 className="font-semibold mb-2">Chat With Us</h3>
              <p className="text-gray-600">
                Live chat available 24/7 for quick help.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow">
              <MapPin className="w-6 h-6 mb-4 text-teal-700" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Visit our HQ at 123 Hope Street, Lagos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
