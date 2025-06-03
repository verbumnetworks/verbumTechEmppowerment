import BlogCard from "./BlogCard";

export default function BlogList({ blogs }: { blogs: any[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
