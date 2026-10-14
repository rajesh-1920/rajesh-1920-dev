import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-alternate">
      <div className="container-x">
        <p className="section-eyebrow text-center">Selected work</p>
        <h2 className="section-title text-3xl font-extrabold text-center">
          Featured Projects
        </h2>
        <p className="mt-4 text-center text-ink-secondary">
          Filter by area — each card links to code and a live demo.
        </p>

        <div className="mt-8">
          <div className="project-filters grid grid-cols-5 gap-2 justify-center">
            {["all", "web", "ml", "tools"].map((category) => (
              <button
                key={category}
                className={`filter-btn ${category === "all" ? "active" : ""}`}
                data-filter={category}
              >
                {category === "all"
                  ? "All"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div
            className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            id="projects-grid"
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                data-category={project.category}
              >
                <div className="project-image aspect-square bg-bg-secondary rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                </div>

                <div className="project-content p-4">
                  <h3 className="project-title font-display font-semibold">
                    {project.title}
                  </h3>
                  <p className="project-description mt-2 text-sm text-ink-secondary">
                    {project.description}
                  </p>

                  <div className="project-tech mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge inline-block px-2 py-1 text-xs rounded-md bg-bg-tertiary text-ink-tertiary mr-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links mt-4">
                    <a
                      href={project.github}
                      className="btn-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg
                        className="icon w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 3.405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.015 12.015 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      className="btn-link"
                      aria-label={`View Live Demo for ${project.title}`}
                    >
                      <svg
                        className="icon w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="view-more text-center mt-8">
            <a href="#" className="btn btn-primary">
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
