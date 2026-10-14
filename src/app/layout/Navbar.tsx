"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#cp", label: "CP Stats" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 border-b border-white/10 bg-bg-primary/90 backdrop-blur"
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="font-display text-lg font-extrabold"
          aria-label="Rajesh Biswas - home"
        >
          Rajesh<span className="text-accent-primary">.dev</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex" id="primary-navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-secondary hover:text-ink-primary"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !px-4 !py-2">
            Hire me
          </a>
        </div>
        <button
          onClick={toggle}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={theme === "light"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}
