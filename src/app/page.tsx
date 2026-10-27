import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CpStats from "@/components/sections/CpStats";
import Cv from "@/components/sections/Cv";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CpStats />
      <Cv />
      <Contact />
    </>
  );
}
