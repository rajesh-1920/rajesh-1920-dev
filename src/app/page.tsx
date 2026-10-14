"use client";

import "./globals.css";
import { ThemeProvider } from "./layout/ThemeProvider";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CpStats from "./sections/CpStats";
import Contact from "./sections/Contact";

export default function Page() {
  return (
    <ThemeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <CpStats />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}