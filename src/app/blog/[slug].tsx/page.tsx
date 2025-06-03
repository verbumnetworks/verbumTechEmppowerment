import BlogDetail from "@/components/BlogDetail";
import { useRouter } from "next/router";

const dummyContent = {
  "solar-benefits": {
    title: "5 Benefits of Solar Power",
    date: "June 1, 2025",
    coverImage: "/images/solar.jpg",
    content: [
      { type: "paragraph", text: "Solar energy is clean, renewable, and cost-efficient..." },
      { type: "image", src: "/images/solar-farm.jpg" },
      { type: "paragraph", text: "It also increases property value and offers energy independence." },
      { type: "video", src: "/videos/solar-benefits.mp4" },
    ],
  },
  "install-guide": {
    title: "Step-by-Step Solar Installation Guide",
    date: "June 2, 2025",
    coverImage: "/images/guide.jpg",
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
