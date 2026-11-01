import Link from "next/link";

import { site } from "@/data/site";
import {
  CodeChefIcon,
  CodeforcesIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "@/components/ui/Icons";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#cp", label: "CP Stats" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-sm">
                &gt;_
              </span>
              <span>
                Rajesh<span className="text-accent-primary">.dev</span>
              </span>
            </Link>

            <p className="text-sm text-ink-secondary max-w-sm leading-relaxed">
              Competitive programmer, two-time ICPC Regionalist, and full-stack systems
              developer focused on algorithms, kernel engineering, and scalable web apps.
            </p>

            <div className="flex items-center gap-2 text-xs text-ink-tertiary">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/rajesh-1920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-biswas-8b9780312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4 text-sky-400" />
              </a>
              <a
                href="https://codeforces.com/profile/rajesh_1920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/50 transition-colors"
                aria-label="Codeforces"
              >
                <CodeforcesIcon className="h-4 w-4 text-accent-secondary" />
              </a>
              <a
                href="https://leetcode.com/u/rajesh_1920/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/50 transition-colors"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="h-4 w-4 text-amber-400" />
              </a>
              <a
                href="https://www.codechef.com/users/rajesh_1920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/50 transition-colors"
                aria-label="CodeChef"
              >
                <CodeChefIcon className="h-4 w-4 text-amber-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-primary mb-4">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-ink-secondary hover:text-accent-primary transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-primary mb-4">
              Contact
            </h3>
            <p className="text-xs text-ink-tertiary">Reach out directly:</p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-semibold text-ink-primary hover:text-accent-primary transition-colors block truncate"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-sm text-ink-secondary hover:text-ink-primary transition-colors block"
            >
              {site.phone}
            </a>
            <p className="text-xs text-ink-tertiary pt-2">
              Patuakhali Science &amp; Technology University
              <br />
              {site.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-tertiary">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed &amp; Engineered with{" "}
            <span className="text-accent-primary font-medium">Next.js 16</span>,{" "}
            <span className="text-accent-secondary font-medium">TypeScript</span> &amp;{" "}
            <span className="text-accent-primary font-medium">Tailwind CSS</span>
          </p>
          <a
            href="#home"
            className="rounded-lg border border-border-subtle px-3 py-1.5 hover:border-accent-primary/40 hover:text-ink-primary transition-colors"
            aria-label="Back to top of page"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
