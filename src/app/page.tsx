import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CpStats from "@/components/sections/CpStats";
import Testimonials from "@/components/sections/Testimonials";
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
      <Skills />
      <Projects />
      <CpStats />
      <Testimonials />
      <Cv />
      <Contact />
      <BackToTop />
    </>
  );
}
