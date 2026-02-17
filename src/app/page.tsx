import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact/>
      <Navbar />
      <Services />
      <BackToTop />
    </main>
  );
}
