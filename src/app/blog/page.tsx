import BlogList from "@/components/BlogList";
import Pagebanner from '@/components/Pagebanner';


const dummyBlogs = [
  {
    slug: "s",
    title: "cohort 1",
    excerpt: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "/assets/image3.jpg",
  },
  {
    slug: "i",
    title: "chort 3",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "/assets/youth5.jpg",
  },
];

export default function BlogHomePage() {
  return <main>
      <Pagebanner
        title="Events and activities"
        backgroundImage="/assets/hero-img.jpg"
      />
    <BlogList blogs={dummyBlogs} />
  </main> ;
}
