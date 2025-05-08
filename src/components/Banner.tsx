'use client';
const Banner = () => {
  return (
    <section className="bg-[#D7E6EF] text-gray-800 py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Empowering lives through technology education and access.
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mt-6"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-amber-50"
        />
      </form>
      <button type="submit" className="bg-[#b41313] hover:bg-[#8F0000] text-white font-semibold mt-4 px-6 py-3 rounded-md transition"
      >Sponsor an Intern</button>
    </section>
  );
};
export default Banner;
