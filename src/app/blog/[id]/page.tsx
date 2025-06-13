// app/blogs/[id]/page.tsx
import BlogDetail from "@/components/BlogDetail";
import { blogs } from "../../../../lib/blogs";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) notFound();
  return <BlogDetail blog={blog} />;
}
