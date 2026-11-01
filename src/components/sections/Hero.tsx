import Image from "next/image";

import { basePath, site } from "@/data/site";
import {
  ArrowRightIcon,
  CodeforcesIcon,
  DownloadIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
  MailIcon,
  SparklesIcon,
  TrophyIcon,
} from "@/components/ui/Icons";

const highlightMetrics = [
  {
    value: "2,000+",
    label: "Problems Solved",
    detail: "Codeforces, LeetCode & CodeChef",
  },
  {
    value: "1416",
    label: "Codeforces Specialist",
    detail: "100+ Rated Contests",
  },
  {
    value: "2x",
    label: "ICPC Regionalist",
    detail: "15+ Onsite Competitions",
  },
  {
    value: "540+",
    label: "Production Commits",
    detail: "Web & Mobile Platforms",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 ambient-glow"
    >
      {/* Background ambient decorative blurs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-96 w-96 rounded-full bg-accent-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left / Main text column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-secondary/80 px-4 py-1.5 text-xs font-medium text-ink-primary backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-primary animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-accent-primary -ml-3" />
              <span className="text-ink-secondary">
                Seeking Software Engineering Roles
              </span>
              <span className="text-border-strong hidden sm:inline">•</span>
              <span className="text-accent-primary font-semibold hidden sm:inline">
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="font-mono text-sm tracking-wider uppercase text-accent-primary font-bold">
                Hello world, I&apos;m
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-primary leading-[1.1]">
                Rajesh Biswas
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ink-secondary leading-snug">
                Algorithmic Problem Solver &amp;{" "}
                <span className="bg-gradient-to-r from-accent-primary via-emerald-400 to-accent-secondary bg-clip-text text-transparent">
                  Full-Stack Systems Engineer
                </span>
              </h2>
            </div>

            {/* Bio description */}
            <p className="text-base sm:text-lg text-ink-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science undergraduate at PSTU, two-time ICPC Regionalist, and
              Codeforces Specialist with{" "}
              <strong className="text-ink-primary font-semibold">
                2,000+ problems solved
              </strong>
              . I engineer robust software across the entire stack — from an x86-64
              operating system kernel in C to production school management systems
              handling 540+ commits.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a href="#projects" className="btn btn-primary">
                <span>View Featured Projects</span>
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href="/rajesh-biswas-cv.pdf"
                className="btn btn-outline"
                download="rajesh-biswas-cv.pdf"
                aria-label="Download Rajesh Biswas CV PDF"
              >
                <DownloadIcon className="h-4 w-4 text-accent-primary" />
                <span>Download CV</span>
              </a>

              <a href="#contact" className="btn btn-ghost border border-border-subtle">
                <MailIcon className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider text-ink-tertiary font-semibold mr-1">
                Profiles:
              </span>
              <a
                href="https://github.com/rajesh-1920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-secondary/70 px-3 py-1.5 text-xs text-ink-secondary transition hover:border-accent-primary/50 hover:text-ink-primary"
                aria-label="GitHub profile"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://codeforces.com/profile/rajesh_1920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-secondary/70 px-3 py-1.5 text-xs text-ink-secondary transition hover:border-accent-primary/50 hover:text-ink-primary"
                aria-label="Codeforces profile"
              >
                <CodeforcesIcon className="h-3.5 w-3.5 text-accent-secondary" />
                <span>Codeforces</span>
              </a>
              <a
                href="https://leetcode.com/u/rajesh_1920/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-secondary/70 px-3 py-1.5 text-xs text-ink-secondary transition hover:border-accent-primary/50 hover:text-ink-primary"
                aria-label="LeetCode profile"
              >
                <LeetCodeIcon className="h-3.5 w-3.5 text-accent-amber" />
                <span>LeetCode</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-biswas-8b9780312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-secondary/70 px-3 py-1.5 text-xs text-ink-secondary transition hover:border-accent-primary/50 hover:text-ink-primary"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right / Visual column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient aura */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-accent-primary/40 via-accent-secondary/30 to-accent-tertiary/20 blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-bg-secondary p-3 shadow-2xl">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-bg-tertiary">
                  <Image
                    src={`${basePath}/images/profile-picture.jpg`}
                    alt={`${site.name} - Competitive Programmer & Full-Stack Developer`}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60" />

                  {/* Handle chip */}
                  <div className="absolute bottom-3 left-3 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-mono text-emerald-400 backdrop-blur-md">
                    @rajesh_1920
                  </div>
                </div>

                {/* Floating Achievement Badge 1 */}
                <div className="absolute -top-3 -right-3 rounded-2xl border border-border-strong bg-bg-primary/95 px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <TrophyIcon className="h-4 w-4 text-accent-amber" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-ink-tertiary tracking-wider">
                      ICPC Regionalist
                    </p>
                    <p className="text-xs font-bold text-ink-primary">2024 &amp; 2025</p>
                  </div>
                </div>

                {/* Floating Achievement Badge 2 */}
                <div className="absolute -bottom-3 -left-3 rounded-2xl border border-border-strong bg-bg-primary/95 px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <SparklesIcon className="h-4 w-4 text-accent-primary" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-ink-tertiary tracking-wider">
                      Codeforces
                    </p>
                    <p className="text-xs font-bold text-accent-primary">
                      Specialist (1416)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Proof Metrics Bar */}
        <div className="mt-14 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlightMetrics.map((metric) => (
              <div
                key={metric.label}
                className="card-glass p-5 text-center group hover:border-accent-primary/40"
              >
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-primary tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-primary">
                  {metric.label}
                </p>
                <p className="text-xs text-ink-tertiary mt-0.5">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
