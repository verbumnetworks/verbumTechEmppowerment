// components/BlogCard.tsx
import { Blog } from "../../types/blog";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors"
        >
          View More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}