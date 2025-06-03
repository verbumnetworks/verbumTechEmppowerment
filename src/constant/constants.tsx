type NavLink = {
  index: number;
  title: string;
  url: string;
  
};

export const navLinks: NavLink[] = [
  { 
    index:1,
    title: "Home", url: "/" 
},
{
    index:2,
    title: "About", url: "/about" 
},
{ 
    index:3,
    title: "Programs", url: "/programs"
 },

{ 
    index:4,
    title: "Contact", url: "/contact"
 },
];

type Program = {
  id: number;
  title: string;
  description: string;
  image: string;
  body?:string;
}
export const programs: Program[] = [
  {
    id:1,
    title: "Web Development",
    description:
      "Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React.",
    image: "/assets/hero-img.jpg",
   body: `The Web Development track is designed to equip learners with the skills to build modern, responsive, and dynamic websites and web applications from the ground up.

You will start with foundational technologies such as HTML, CSS, and JavaScript to understand the structure, styling, and behavior of web pages. You'll then dive into advanced tools and frameworks like React for building component-based interfaces, and Next.js for server-side rendering and API integration.

Beyond the front-end, you’ll gain hands-on experience with back-end development using Node.js, Express, and databases such as MongoDB or PostgreSQL. You’ll also learn how to consume and build RESTful APIs, manage user authentication, and deploy applications to production using services like Vercel or Netlify.

Throughout the program, you'll work on real-world projects including a portfolio site, blog engine, and full-stack web app, preparing you for roles like Front-End Developer, Full-Stack Engineer, or Web App Consultant.

By the end of this track, you’ll have the practical skills and portfolio needed to succeed in the fast-paced world of modern web development.`,

  },
  {
    id:2,
    title: "Graphic Design",
    description:
      "Master design principles and tools like Canva, Photoshop, and Illustrator to create stunning visuals.",
    image: "/assets/hero-img.jpg",
  },
  {
    id:3,
    title: "Computer Networking",
    description:
      "Understand the fundamentals of networking, from IP addressing to setting up real-world networks.",
    image: "/assets/hero-img.jpg",
  },
  {
    id:4,
    title: "UI/UX Design",
    description:
      "Design user-friendly interfaces with a focus on user experience and design thinking methodologies.",
    image: "/assets/hero-img.jpg",
  },
  {
    id:5,
    title: "Data Analytics",
    description:
      "Learn how to collect, clean, and analyze data using tools like Excel, SQL, and Power BI.",
    image: "/assets/hero-img.jpg",
  },
  {
    id:6,
    title: "Cybersecurity",
    description:
      "Protect digital assets and learn ethical hacking, system hardening, and security protocols.",
    image: "/assets/hero-img.jpg",
  },
];
