"use client";

import { useState } from "react";

import { projectCategoryLabels, projects, type ProjectCategory } from "@/data/projects";
import {
  ArrowUpRightIcon,
  CheckIcon,
  GithubIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "systems", "web", "mobile"];

const categoryColors: Record<ProjectCategory, string> = {
  systems: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  web: "border-accent-primary/30 bg-accent-primary/10 text-accent-primary",
  mobile: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding section-band">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Engineering Showcase</span>
          </p>
          <h2 className="section-title mt-2">Featured Projects</h2>
          <p className="section-subtitle">
            Exploring systems programming, full-stack web platforms, and mobile utilities.
            Each project is backed by public source code on GitHub.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="filter-btn text-xs font-semibold"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter === "all" ? "All Projects" : projectCategoryLabels[filter]}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => {
            const badgeStyle = categoryColors[project.category];

            return (
              <article
                key={project.id}
                className="card-glass flex flex-col justify-between p-6 hover:border-accent-primary/40 group transition-all duration-300"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${badgeStyle}`}
                    >
                      {projectCategoryLabels[project.category]}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-accent-amber">
                        <SparklesIcon className="h-3.5 w-3.5" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-ink-primary group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-border-subtle space-y-1.5">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-ink-secondary"
                        >
                          <CheckIcon className="h-3 w-3 text-accent-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border-subtle bg-bg-tertiary px-2 py-0.5 text-[11px] font-mono text-ink-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline !px-3 !py-1.5 text-xs font-medium"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !px-3 !py-1.5 text-xs"
                      aria-label={`Open live demonstration for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
