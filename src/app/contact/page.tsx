'use client';
import Pagebanner from '@/components/Pagebanner';
const Contact: React.FC = () => {
  return (
    <main className='w-full'>
       <Pagebanner
        title="Contact Us"
        subtitle ="Who we are and what we stand for"
        backgroundImage="/assets/hero-img.jpg"
      />
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600">We’d love to hear from you! Reach out through the form or find us on the map below.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring focus:ring-indigo-300" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="w-full h-[400px]">


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.203598799951!2d7.4903953296584165!3d6.431303562609139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a164ddaabdd7%3A0x15205a092b91068c!2sCatholic%20Institute%20for%20Development%20Justice%20And%20Peace!5e0!3m2!1sen!2sng!4v1746718652453!5m2!1sen!2sng"   width="100%"
            height="100%" style={{ border: 0 }}    allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our location"></iframe>
       
        </div>
      </div>
    </section>
    </main>
  );
};

export default Contact;
