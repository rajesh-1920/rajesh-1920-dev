import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import CpStats from "@/components/sections/CpStats";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Cv from "@/components/sections/Cv";
import Contact from "@/components/sections/Contact";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Page() {
  return (
    <>
      <ProgressBar />
      <Hero />
      <About />
      <Experience />
      <CpStats />
      <Skills />
      <Projects />
      <Testimonials />
      <BlogPreview />
      <Cv />
      <Contact />
      <BackToTop />
    </>
  );
}
