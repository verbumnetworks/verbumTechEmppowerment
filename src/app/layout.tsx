import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import FooterBanner from "@/components/FooterBanner";
// import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Verbum Tech Empowerment Program",
  description:
    "Learn in-demand tech skills with the Verbum Tech Empowerment Program; digital literacy, web design, graphics, and more! Empowering the next generation through tech! Verbum Tech Empowerment Program provides practical digital skills to help young minds build a brighter, tech-driven future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <ClientLayout> */}
      <body>
        <header>
          <Navbar />
        </header>
        
          {children}
        
        <footer>
          <FooterBanner/>
          <Footer />
        </footer>
      </body>
      {/* </ClientLayout> */}
    </html>
  );
}
