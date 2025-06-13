// app/blog/page.tsx
import BlogCard from "@/components/BlogCard";
import { blogs } from "../../../lib/blogs";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}