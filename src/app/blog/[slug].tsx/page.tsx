import BlogDetail from "@/components/BlogDetail";
import { useRouter } from "next/router";

const dummyContent = {
  "solar-benefits": {
    title: "chort1 graduation",
    date: "June 1, 2023",
    coverImage: "/assets/hero-img.jpg",
    content: [
      { type: "paragraph", text: "Lorem ipsum dolor sit amet," },
      { type: "image", src: "/assets/youth2.jpg" },
      { type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu." },
      { type: "video", src: "/videos/solar-benefits.mp4" },
    ],
  },
  "install-guide": {
    title: "Step-by-Step Solar Installation Guide",
    date: "June 2, 2025",
    coverImage: "/assets/youth4.jpg",
    content: [
      { type: "paragraph", text: "Start by calculating your energy needs..." },
      { type: "image", src: "/images/solar-install.jpg" },
      { type: "paragraph", text: "Then, hire certified installers and apply for permits." },
    ],
  },
};

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = dummyContent[slug as string];

  if (!blog) return <p className="p-8 text-center">Blog not found</p>;

  return <BlogDetail blog={blog} />;
}
