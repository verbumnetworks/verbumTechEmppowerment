type NavLink = {
  id: number;
  title: string;
  url: string;
};

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Programs",
    url: "/programs",
  },
   {
    id: 4,
    title: "Sponsor",
    url: "/donate",
  },
   {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];
type FeaturedProgram = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const featuredprograms: FeaturedProgram[] = [
  {
    id: 1,
    title: "Web Development",
   description:
      "Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React.",
    image: "/assets/web.jpg",
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Master design principles and tools like Canva, Photoshop, and Illustrator to create stunning visuals.",
    image: "/assets/graphc.jpg",
  },
  {
    id: 3,
    title: "Computer Networking",
description:
      "Understand the fundamentals of networking, from IP addressing to setting up real-world networks.",
    image: "/assets/networking.jpg",
  },
];
type Program = {
  id: number;
  title: string;
  description: string;
  image: string;
  body?: string;
};
export const programs: Program[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React.",
    image: "/assets/web.jpg",
    body: `The Web Development track is designed to equip learners with the skills to build modern, responsive, and dynamic websites and web applications from the ground up. You will start with foundational technologies such as HTML, CSS, and JavaScript to understand the structure, styling, and behavior of web pages. You'll then dive into advanced tools and frameworks like React for building component-based interfaces, and Next.js for server-side rendering and API integration. Beyond the front-end, you’ll gain hands-on experience with back-end development using Node.js, Express, and databases such as MongoDB or PostgreSQL. You’ll also learn how to consume and build RESTful APIs, manage user authentication, and deploy applications to production using services like Vercel or Netlify. Throughout the program, you'll work on real-world projects including a portfolio site, blog engine, and full-stack web app, preparing you for roles like Front-End Developer, Full-Stack Engineer, or Web App Consultant. By the end of this track, you’ll have the practical skills and portfolio needed to succeed in the fast-paced world of modern web development.`,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Master design principles and tools like Canva, Photoshop, and Illustrator to create stunning visuals.",
    image: "/assets/graphc.jpg",
    body: "Graphic Design is a powerful tool for communication, branding, and storytelling in the digital age. At Verbum Tech Empowerment, we believe that teaching young people this skill opens doors to countless economic opportunities. Our Graphic Design training program is tailored to empower participants—especially youths, students, and job seekers—with the skills needed to create visual content for businesses, organizations, and personal brands. Through this hands-on course, students will learn to design flyers, posters, social media graphics, logos, branding materials, business cards, and much more using beginner-friendly platforms like Canva, while also getting introduced to industry-standard tools like Photoshop, CorelDRAW, and Illustrator. They will also be trained on real-world projects that help them build portfolios and prepare them for freelance or full-time work. The goal of this program is not just skill acquisition but economic empowerment. A well-trained graphic designer can earn between ₦100,000 to ₦300,000 monthly depending on their experience and client base. By equipping just one individual with this skill, a sponsor is not only providing education but potentially lifting a person—and even their family—out of poverty through sustainable digital income. To train one participant in this program, the cost is ₦100,000. This covers tuition, training materials, hands-on projects, mentorship, certification, and lifetime access to resources and community support. We are currently calling on individuals, organizations, NGOs, faith-based institutions, and corporate bodies to sponsor students in this program. Your sponsorship can make a lasting impact by helping us train more young people who are eager to learn but financially unable to afford the program.Every donation you make, trains one future graphic designer. Imagine the ripple effect of empowering 10, 50, or even 100 young people with this life-changing skill. With your support, we can expand access to quality tech education and reduce unemployment in our communities.Let’s build a future where no one is left behind. Sponsor a student today!",
  },
  {
    id: 3,
    title: "Computer Networking",
    description:
      "Understand the fundamentals of networking, from IP addressing to setting up real-world networks.",
    image: "/assets/networking.jpg",
    body: "Computer Networking is the backbone of modern communication and information technology. From internet access to secure file sharing and enterprise systems, networking skills are essential for the proper functioning of businesses, schools, hospitals, and governments. At Verbum Tech Empowerment, our Computer Networking Training Program equips learners with practical, job-ready skills in designing, managing, and troubleshooting computer networks. Participants will learn the fundamentals of networking, including network types (LAN, WAN, WLAN), IP addressing, routing and switching, cabling and hardware setup, network security, and server configurations. The training is delivered in a simplified, hands-on format that ensures even complete beginners can understand and apply what they learn in real-life scenarios. This program prepares learners for roles such as IT support technician, network administrator, or system engineer—with or without a university degree. It also forms a strong foundation for more advanced certifications like CompTIA Network+, Cisco CCNA, or Microsoft certifications. With these skills, learners can secure jobs in schools, tech firms, banks, and government agencies or work as independent network support consultants. The average earning potential for an entry-level computer networking professional in Nigeria ranges from ₦60,000 to ₦250,000 monthly, depending on location and certifications. As experience grows, so does income—especially with opportunities to work remotely or manage multiple clients. To train one individual in this program, the total cost is ₦10,000. This covers intensive training sessions, practical labs, mentorship, certification of completion, and lifetime access to reference materials. We are calling on sponsors, philanthropists, and development partners to support this initiative by sponsoring one or more students. Each ₦10,000 donation gives one young person access to a skill that can launch them into a productive career. With your support, we can build a network of skilled professionals who will contribute meaningfully to the digital economy.Invest in their future. Sponsor a networking student today.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Design user-friendly interfaces with a focus on user experience and design thinking methodologies.",
    image: "/assets/ux5.jpg",
  },
  {
    id: 5,
    title: "Data Analytics",
    description:
      "Learn how to collect, clean, and analyze data using tools like Excel, SQL, and Power BI.",
    image: "/assets/data1.jpg",
    body: "Data Analytics is one of the most sought-after skills in today’s digital economy. It involves the process of collecting, organizing, analyzing, and interpreting data to support decision-making in businesses, organizations, and government institutions. At Verbum Tech Empowerment, our Data Analytics Training Program empowers learners with the ability to turn raw data into meaningful insights that can solve real-world problems. Participants will gain hands-on experience in using essential tools such as Microsoft Excel, Google Sheets, SQL, and Power BI. They will also be introduced to data cleaning, data visualization, reporting dashboards, and basic statistical analysis. The training simplifies complex concepts so that even beginners with no technical background can confidently learn and apply data skills. This program prepares learners for entry-level roles such as Data Analyst, Business Intelligence Assistant, Operations Analyst, and Research Assistant. It’s also ideal for entrepreneurs and managers who want to make better decisions based on facts, not guesswork. Professionals with data analytics skills can earn anywhere between ₦80,000 to ₦350,000 monthly in Nigeria, with much higher potential in freelance and remote opportunities. Globally, data analytics is one of the highest-paying entry-level tech careers, and demand continues to grow in industries like finance, healthcare, marketing, logistics, and education.To train one student in this life-changing skill, the cost is ₦10,000, which covers practical sessions, datasets for practice, training software, tutor support, and certification. We also provide lifetime access to materials and continuous mentorship to help participants transition into the workforce. We are inviting sponsors, NGOs, foundations, and individuals to join us in creating opportunities for the next generation of digital professionals. By sponsoring just ₦10,000, you can help a young person unlock a career in data analytics and break the cycle of unemployment or underemployment.Support tech empowerment. Sponsor a data analytics student today.",
  },
  {
    id: 6,
    title: "Cybersecurity",
    description:
      "Protect digital assets and learn ethical hacking, system hardening, and security protocols.",
    image: "/assets/cyber.jpg",
    body: "Cybersecurity is one of the fastest-growing and most critical fields in the tech industry today. As cyber threats become more advanced and frequent, the demand for skilled cybersecurity professionals continues to soar across the world. At Verbum Tech Empowerment, our Cybersecurity Training Program is designed to introduce learners to the fundamentals of protecting digital systems, networks, and data from unauthorized access, attacks, and damage. Participants will gain hands-on experience in topics such as ethical hacking, network security, malware protection, firewalls, cyber threat detection, and risk management. They will also explore real-world scenarios to learn how to identify vulnerabilities and apply protective measures. The course is structured to be beginner-friendly, making it ideal for students, tech enthusiasts, and job seekers with little or no prior experience.This program prepares participants for junior roles such as Cybersecurity Analyst, IT Security Assistant, or Security Operations Center (SOC) Analyst, while also laying the foundation for more advanced certifications like CompTIA Security+, CEH, or CISSP. The training boosts job readiness and opens doors to career paths in corporate IT departments, banks, government institutions, and tech companies.The average monthly earning for a beginner cybersecurity professional in Nigeria ranges from ₦80,000 to ₦300,000, with higher figures for those who gain certifications and experience. Globally, cybersecurity experts are among the highest-paid professionals due to the sensitivity and importance of their work.The cost to train one cybersecurity student through our program is ₦10,000. This fee covers training materials, practical tools, mentorship, tutor support, and a certificate of completion. We also offer lifetime access to learning resources and guidance on further career advancement.We are actively calling on corporate sponsors, donors, and individuals to support our mission to raise a new generation of cybersecurity defenders. By donating just ₦10,000, you can empower a young person with a high-income digital skill that is in demand and future-proof.Make a difference where it counts. Sponsor a cybersecurity trainee today. Your support can help us train more students, reduce unemployment, and build a safer digital world for everyone. Together, we can create opportunities and change lives through technology education.",
  },
];


type Reason = {
  id: number;
  title: string;    
description: string;
};
export const reasons:Reason[] = [
  {
    id: 1,
    title: "Practical Hands-on Training",
    description:
      "Our training goes beyond theory—we immerse you in real-world projects that mirror industry scenarios. This hands-on approach ensures you gain practical experience and confidence. You won’t just learn; you’ll do.",
  },
  {
    id: 2,
    title: "Internship Opportunities",
    description:
      "We connect you with real companies where you can apply your skills in a professional setting. Our internship placements are designed to bridge the gap between learning and working. It’s a great opportunity to build your resume and grow your network.",
  },
  {
    id: 3,
    title: "Tutor Support",
    description:
      "You’re never alone on your learning journey. Our experienced tutors are available to offer support, answer questions, and provide feedback. Whether you're stuck on a project or need career advice, we’ve got your back.",
  },
  {
    id:4,
    title: "Lifetime Access",
    description:
      "Once you enroll, you get lifetime access to all course materials and resources. Revisit lessons anytime to refresh your knowledge or learn something new. Your learning doesn’t stop when the program ends—it continues for life.",
  },
  {
    id: 5,
    title: "Affordable Pricing",
    description:
      "We believe quality tech education should be within everyone’s reach. Our programs are competitively priced without compromising on value. Learn valuable skills without stretching your budget.",
  },
  {
    id: 6,
    title: "Certification",
    description:
      "Receive a certificate that validates your skills and commitment upon completing the full one-year program. It serves as proof of your achievement and can be a great addition to your CV or portfolio. Stand out to employers and clients alike.",
  },
];
