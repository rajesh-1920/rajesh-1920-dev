import { cv } from "@/data/cv";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

const profileLinks = [
  { label: "GitHub", href: `https://${cv.github}` },
  { label: "LinkedIn", href: `https://${cv.linkedin}` },
  { label: "Codeforces", href: `https://${cv.codeforces}` },
  { label: "LeetCode", href: `https://${cv.leetcode}` },
];

export default function Cv() {
  const {
    name,
    tagline,
    location,
    phone,
    email,
    summary,
    competitiveProgramming,
    education,
    leadership,
    certifications,
  } = cv;

  return (
    <section id="cv" className="section-padding section-band">
      <div className="container-x">
        <p className="section-eyebrow text-center">Curriculum Vitae</p>
        <h2 className="section-title text-center font-extrabold">{name}</h2>
        <p className="mt-4 text-center text-ink-secondary">{tagline}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-secondary">
          <span>{location}</span>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-ink-primary">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:text-ink-primary">
            {email}
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="mb-6 text-center text-2xl font-bold">Professional Summary</h3>
          <p className="mx-auto max-w-2xl text-center text-ink-secondary">{summary}</p>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 text-center text-2xl font-bold">Technical Skills</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="rounded-lg bg-bg-secondary p-4">
                <h4 className="mb-2 font-semibold">{category.title}</h4>
                <ul className="space-y-2 text-ink-secondary">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 text-center text-2xl font-bold">
            Competitive Programming &amp; Achievements
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-bg-secondary p-4">
              <h4 className="mb-1 font-semibold">Codeforces</h4>
              <p className="text-ink-secondary">{competitiveProgramming.codeforces}</p>
            </div>
            <div className="rounded-lg bg-bg-secondary p-4">
              <h4 className="mb-1 font-semibold">CodeChef</h4>
              <p className="text-ink-secondary">{competitiveProgramming.codechef}</p>
            </div>
            <div className="rounded-lg bg-bg-secondary p-4">
              <h4 className="mb-1 font-semibold">LeetCode</h4>
              <p className="text-ink-secondary">{competitiveProgramming.leetcode}</p>
            </div>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {competitiveProgramming.awards.map((award) => (
              <li
                key={award}
                className="rounded-lg border border-white/10 p-4 text-sm text-ink-secondary"
              >
                {award}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 text-center text-2xl font-bold">Selected Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-lg bg-bg-secondary p-6 transition hover:bg-bg-tertiary"
              >
                <h4 className="mb-2 font-semibold">{project.title}</h4>
                <p className="mb-4 flex-1 text-ink-secondary">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5">
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
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-bg-secondary p-6">
            <h3 className="mb-2 text-xl font-bold">Education</h3>
            <p className="font-semibold">{education.degree}</p>
            <p className="text-ink-secondary">
              {education.university} — {education.semester}
            </p>
            <p className="text-ink-secondary">
              CGPA: {education.cgpa} · Expected Graduation: {education.expectedGraduation}
            </p>
          </div>
          <div className="rounded-lg bg-bg-secondary p-6">
            <h3 className="mb-2 text-xl font-bold">Leadership</h3>
            <p className="font-semibold">{leadership[0].role}</p>
            <p className="text-ink-secondary">
              {leadership[0].organization} · {leadership[0].period}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-center text-2xl font-bold">
            Leadership &amp; Activities
          </h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {leadership.map((item) => (
              <li key={`${item.role}-${item.period}`} className="rounded-lg p-4">
                <p className="font-medium">
                  {item.role} — {item.organization} · {item.period}
                </p>
                <p className="mt-1 text-sm text-ink-secondary">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-center text-2xl font-bold">
            Certifications &amp; Training
          </h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => (
              <li
                key={certificate}
                className="rounded-lg bg-bg-secondary p-4 text-ink-secondary"
              >
                {certificate}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
