// components/BlogDetail.tsx
import { Blog } from "../../types/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={1000}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
}