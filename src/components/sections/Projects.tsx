"use client";

import { useState } from "react";

import { projectCategoryLabels, projects, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters: Filter[] = ["all", "web", "mobile", "systems"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding section-band">
      <div className="container-x">
        <p className="section-eyebrow text-center">Selected work</p>
        <h2 className="section-title text-center font-extrabold">Featured Projects</h2>
        <p className="mt-4 text-center text-ink-secondary">
          Filter by area — each card links to the source code and, where available, a live
          demo.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="filter-btn"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter === "all" ? "All" : projectCategoryLabels[filter]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-lg bg-bg-secondary p-6 transition hover:bg-bg-tertiary"
            >
              <span className="mb-4 w-fit rounded-md bg-bg-tertiary px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent-secondary">
                {projectCategoryLabels[project.category]}
              </span>
              <h3 className="font-display font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-secondary">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-bg-tertiary px-2 py-1 text-xs text-ink-tertiary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
