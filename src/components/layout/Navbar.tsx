"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BriefcaseIcon, CloseIcon, DownloadIcon, MenuIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#cp", label: "CP Stats" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = [
        "home",
        "about",
        "experience",
        "cp",
        "skills",
        "projects",
        "cv",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-bg-primary/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-bg-primary/60 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 sm:h-20 items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="#home"
            className="group flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"
            aria-label="Rajesh Biswas - home"
            onClick={closeMenu}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-base transition-transform group-hover:scale-105">
              &gt;_
            </span>
            <span>
              Rajesh
              <span className="text-accent-primary">.dev</span>
            </span>
          </Link>

          {/* Availability pill (desktop) */}
          <div className="hidden xl:inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Roles
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-1 rounded-full border border-border-subtle bg-bg-secondary/60 px-3 py-1.5 backdrop-blur-md"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-accent-primary text-slate-950 font-bold shadow-sm"
                    : "text-ink-secondary hover:text-ink-primary hover:bg-bg-tertiary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/rajesh-biswas-cv.pdf"
            download="rajesh-biswas-cv.pdf"
            className="btn btn-outline !px-3.5 !py-2 text-xs font-medium"
            aria-label="Download Rajesh Biswas CV"
          >
            <DownloadIcon className="h-3.5 w-3.5 text-accent-primary" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary !px-4 !py-2 text-xs"
            aria-label="Hire Rajesh"
          >
            <BriefcaseIcon className="h-3.5 w-3.5" />
            <span>Hire me</span>
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger & Theme Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary/80 text-ink-primary hover:border-accent-primary/40 focus:outline-none focus:ring-2 focus:ring-accent-primary/30"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border-subtle bg-bg-primary/95 backdrop-blur-2xl transition-all">
          <div className="container-x py-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary">
                Menu Navigation
              </span>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-accent-primary/50 bg-accent-primary/10 text-accent-primary font-bold"
                        : "border-border-subtle bg-bg-secondary/60 text-ink-secondary hover:border-accent-primary/40 hover:text-ink-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href="/rajesh-biswas-cv.pdf"
                download="rajesh-biswas-cv.pdf"
                onClick={closeMenu}
                className="btn btn-outline w-full justify-center"
              >
                <DownloadIcon className="h-4 w-4 text-accent-primary" />
                Download CV (PDF)
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn btn-primary w-full justify-center"
              >
                <BriefcaseIcon className="h-4 w-4" />
                Contact / Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
