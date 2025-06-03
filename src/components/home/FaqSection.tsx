import Image from "next/image";
import { AccordionItem } from "../AccordionItem";

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

     
      </div>
    </section>
  );
}
