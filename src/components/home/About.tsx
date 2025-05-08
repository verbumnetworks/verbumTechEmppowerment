import Image from "next/image";

const About: React.FC = () => {
  return (

<section className="relative -mt-36 pt-36 pb-20 overflow-x-clip" id="about">
  <div className="container px-4 sm:px-6 max-w-screen-xl mx-auto">
    <div className="flex md:flex-row items-center gap-12 flex-col-reverse">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold bg-gradient-to-b from-black to-[#c91313] text-transparent bg-clip-text">
          Revolutionise your hospital operations
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-6 text-neutral-600">
          Streamline processes, enhance patient care, and improve efficiency
          with our intuitive, custom-made software solution.
        </p>
      </div>

      <div className="w-full md:w-1/2 relative">
        <Image
          src="/assets/hero-img.jpg"
          alt="Productivity Illustration"
          width={600}
          height={600}
          className="w-full object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>


  );
};

export default About;
