export default function BlogDetail({ blog }: { blog: any }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img src={blog.coverImage} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      <p className="text-gray-500 mt-2">{blog.date}</p>

      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        {blog.content.map((section: any, index: number) => {
          if (section.type === "paragraph") return <p key={index}>{section.text}</p>;
          if (section.type === "image")
            return <img key={index} src={section.src} alt="" className="rounded-md my-4" />;
          if (section.type === "video")
            return (
              <video key={index} controls className="w-full rounded-md my-4">
                <source src={section.src} type="video/mp4" />
              </video>
            );
        })}
      </div>
    </div>
  );
}
