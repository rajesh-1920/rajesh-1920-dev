"use client";

import { useState } from "react";

import { skillCategories } from "@/data/skills";
import {
  CodeIcon,
  CpuIcon,
  GraduationCapIcon,
  SparklesIcon,
  TerminalIcon,
} from "@/components/ui/Icons";

const categoryIcons: Record<string, typeof CodeIcon> = {
  Languages: CodeIcon,
  "Backend & Web": TerminalIcon,
  Databases: TerminalIcon,
  Mobile: SparklesIcon,
  Systems: CpuIcon,
  "DevOps & Tools": TerminalIcon,
  "Core CS": GraduationCapIcon,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </p>
          <h2 className="section-title mt-2">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning competitive programming, low-level OS
            development, and modern full-stack web and mobile engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="filter-btn text-xs font-semibold"
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.title] || CodeIcon;

            return (
              <div
                key={cat.title}
                className="card-glass p-6 hover:border-accent-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink-primary">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs font-mono font-medium text-ink-secondary hover:border-accent-primary/40 hover:text-ink-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
