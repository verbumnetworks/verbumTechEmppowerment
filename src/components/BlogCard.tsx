import Link from "next/link";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-sm text-gray-600">{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
