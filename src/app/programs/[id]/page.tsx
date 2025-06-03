import { programs } from "@/constant/constants";
import Image from "next/image";
import Pagebanner from "@/components/Pagebanner";

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = programs.find((item) => item.id === Number(id));

  if (!program) {
    return <div className="text-center py-20">Program not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Pagebanner
        title={program.title}
        // subtitle =""
        backgroundImage="/assets/hero-img.jpg"
      />

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed break-words">
          <div className="w-full mx-auto mb-6">
            {" "}
            <Image
              src="/assets/hero-img.jpg"
              alt="h"
              height={200}
              width={200}
              className="w-full h-72 object-cover rounded"
            />
          </div>{" "}
          {program.body ? (
            program.body.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))
          ) : (
            <p>More details about this program will be added soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}

// import { programs } from "@/constant/constants";

// async function page({params}: any) {
//     const {id} = await params;
//     const program = programs.find(item=> item.id == id);

//   return (
//     <div>{program?.title}</div>
//   )
// }

// export default page
