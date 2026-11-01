"use client";

import { useState } from "react";

import { cv } from "@/data/cv";
import {
  AwardIcon,
  CodeChefIcon,
  CodeforcesIcon,
  DownloadIcon,
  GithubIcon,
  GraduationCapIcon,
  LeetCodeIcon,
  LinkedinIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

type Tab = "overview" | "education" | "certifications" | "honors";

export default function Cv() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const {
    name,
    tagline,
    location,
    phone,
    email,
    summary,
    education,
    competitiveProgramming,
    certifications,
  } = cv;

  return (
    <section id="cv" className="section-padding">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Interactive Resume</span>
          </p>
          <h2 className="section-title mt-2">Curriculum Vitae</h2>
          <p className="section-subtitle">
            A structured breakdown of academic background, competitive honors, and
            specialized certifications.
          </p>
        </div>

        {/* Download Hero Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-border-strong bg-gradient-to-r from-bg-secondary via-bg-tertiary to-bg-secondary p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
                ATS-Optimized &amp; Verified
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-primary">{name}</h3>
              <p className="text-sm text-ink-secondary">{tagline}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-tertiary pt-1">
                <span>📍 {location}</span>
                <a href={`mailto:${email}`} className="hover:text-accent-primary">
                  ✉️ {email}
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-accent-primary"
                >
                  📞 {phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <a
                href="/rajesh-biswas-cv.pdf"
                download="rajesh-biswas-cv.pdf"
                className="btn btn-primary justify-center shadow-lg"
                aria-label="Download Rajesh Biswas CV PDF"
              >
                <DownloadIcon className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-1">
                <a
                  href={`https://${cv.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-2 text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={`https://${cv.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-2 text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={`https://${cv.codeforces}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-2 text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40"
                  aria-label="Codeforces"
                >
                  <CodeforcesIcon className="h-4 w-4 text-accent-secondary" />
                </a>
                <a
                  href={`https://${cv.leetcode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-2 text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40"
                  aria-label="LeetCode"
                >
                  <LeetCodeIcon className="h-4 w-4 text-accent-amber" />
                </a>
                <a
                  href={`https://${cv.codechef}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border-subtle bg-bg-secondary p-2 text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40"
                  aria-label="CodeChef"
                >
                  <CodeChefIcon className="h-4 w-4 text-amber-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {[
            { id: "overview", label: "Executive Summary" },
            { id: "education", label: "Education & Academics" },
            { id: "honors", label: "Awards & CP Honors" },
            { id: "certifications", label: "Certifications & Training" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className="filter-btn text-xs font-semibold"
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <div className="card-glass p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-lg font-bold text-ink-primary flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-accent-primary" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {summary}
              </p>
              <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="rounded-xl bg-bg-tertiary p-3">
                  <p className="text-xs text-ink-tertiary font-semibold uppercase">
                    Solved Problems
                  </p>
                  <p className="text-xl font-extrabold text-accent-primary mt-1">
                    {competitiveProgramming.totalProblems}+
                  </p>
                </div>
                <div className="rounded-xl bg-bg-tertiary p-3">
                  <p className="text-xs text-ink-tertiary font-semibold uppercase">
                    Onsite Contests
                  </p>
                  <p className="text-xl font-extrabold text-accent-secondary mt-1">
                    {competitiveProgramming.onsiteContests}+
                  </p>
                </div>
                <div className="rounded-xl bg-bg-tertiary p-3">
                  <p className="text-xs text-ink-tertiary font-semibold uppercase">
                    Current Semester
                  </p>
                  <p className="text-xl font-extrabold text-accent-tertiary mt-1">
                    {education.semester}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="card-glass p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary mt-1">
                    <GraduationCapIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-primary">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-accent-secondary">
                      {education.university}
                    </p>
                    <p className="text-xs text-ink-tertiary mt-1">
                      {education.semester} • Cumulative GPA:{" "}
                      <strong className="text-ink-primary">{education.cgpa}</strong>
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-border-strong bg-bg-tertiary px-3 py-1 text-xs font-mono font-medium text-ink-tertiary">
                  Expected {education.expectedGraduation}
                </span>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <p className="text-xs uppercase font-semibold text-ink-tertiary tracking-wider mb-2">
                  Key Undergraduate Coursework &amp; Competencies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Graph Theory",
                    "Dynamic Programming",
                    "Segment Trees",
                    "Disjoint Set Union (DSU)",
                    "Operating Systems",
                    "Database Management Systems",
                    "Object-Oriented Programming (C++/Java)",
                    "x86-64 Systems & Assembly",
                    "Software Engineering",
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-border-subtle bg-bg-tertiary px-2.5 py-1 text-xs text-ink-secondary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "honors" && (
            <div className="card-glass p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-lg font-bold text-ink-primary flex items-center gap-2">
                <AwardIcon className="h-5 w-5 text-accent-amber" />
                <span>Competitive Programming Honors</span>
              </h3>
              <ul className="space-y-3">
                {competitiveProgramming.awards.map((award, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border-subtle bg-bg-tertiary/50 p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-amber/20 text-accent-amber text-xs font-bold">
                      ★
                    </span>
                    <span className="text-sm font-medium text-ink-primary">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="card-glass p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-lg font-bold text-ink-primary flex items-center gap-2">
                <AwardIcon className="h-5 w-5 text-accent-primary" />
                <span>Specialized Camps &amp; Training</span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-tertiary/50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                      ✓
                    </div>
                    <p className="text-sm font-semibold text-ink-primary">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
