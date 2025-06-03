import BlogList from "@/components/BlogList";

const dummyBlogs = [
  {
    slug: "solar-benefits",
    title: "5 Benefits of Solar Power",
    excerpt: "Discover why solar energy is the future for homes and businesses.",
    coverImage: "/images/solar.jpg",
  },
  {
    slug: "install-guide",
    title: "Step-by-Step Solar Installation Guide",
    excerpt: "From panel selection to wiring, get the full guide here.",
    coverImage: "/images/guide.jpg",
  },
];

export default function BlogHomePage() {
  return <BlogList blogs={dummyBlogs} />;
}
