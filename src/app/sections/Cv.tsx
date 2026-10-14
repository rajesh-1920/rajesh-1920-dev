"use client";

import { cv } from "../../data/cv.data";
import Skills from "./Skills";
import Projects from "./Projects";
import cpStats from "./CpStats";

export default function Cv() {
  const {
    name,
    tagline,
    location,
    phone,
    email,
    github,
    linkedin,
    codeforces,
    leetcode,
    summary,
    skills,
    competitiveProgramming,
    projects,
    education,
    leadership,
    certifications,
  } = cv;

  return (
    <section id="cv" className="section-padding bg-alternate">
      <div className="container-x">
        <p className="section-eyebrow text-center">Curriculum Vitae</p>
        <h2 className="section-title text-3xl font-extrabold text-center">
          {name}
        </h2>

        <div className="mt-4 text-center text-ink-secondary">
          {tagline}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <strong>Location:</strong> {location}
          </div>
          <div>
            <strong>Phone:</strong> {phone}
          </div>
          <div>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Professional Summary
          </h3>
          <p className="text-ink-secondary text-center max-w-2xl mx-auto">
            {summary}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((category) => (
              <div key={category.title} className="bg-bg-secondary rounded-lg p-4">
                <h4 className="font-semibold mb-2">{category.title}</h4>
                <ul className="text-ink-secondary space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Competitive Programming & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-bg-secondary rounded-lg p-4">
              <h4 className="font-semibold mb-2">Codeforces</h4>
              <p className="text-ink-secondary">
                {competitiveProgramming.codeforces}
              </p>
            </div>
            <div className="bg-bg-secondary rounded-lg p-4">
              <h4 className="font-semibold mb-2">CodeChef</h4>
              <p className="text-ink-secondary">
                {competitiveProgramming.codechef}
              </p>
            </div>
            <div className="bg-bg-secondary rounded-lg p-4">
              <h4 className="font-semibold mb-2">LeetCode</h4>
              <p className="text-ink-secondary">
                {competitiveProgramming.leetcode}
              </p>
            </div>
            {competitiveProgramming.icpcRegionalist ? (
              <div className="bg-bg-secondary rounded-lg p-4">
                <h4 className="font-semibold mb-2">ICPC Regionalist</h4>
                <p className="text-ink-secondary">
                  Two-time participant, Asia West / Dhaka Regional (2024, 2025)
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Selected Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-bg-secondary rounded-lg p-6 hover:bg-bg-tertiary transition">
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-ink-secondary mb-4">{project.description}</p>
                <div className="project-tech mt-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge inline-block px-2 py-1 text-xs rounded-md bg-bg-tertiary text-ink-tertiary mr-1 mb-1">
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
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="btn-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Degree:</p>
              <p>{education.degree}</p>
              <p className="text-ink-secondary">
                {education.university} — {education.semester}
              </p>
              <p className="text-ink-secondary">
                CGPA: {education.cgpa} · Expected Graduation: {education.expectedGraduation}
              </p>
            </div>
            <div>
              <p className="font-semibold">Role:</p>
              <p>{leadership[0].role}</p>
              <p className="text-ink-secondary">
                {leadership[0].organization} · {leadership[0].period}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Leadership & Activities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leadership.map((l, i) => (
              <li key={i} className="font-medium">
                {l.role} — {l.organization} · {l.period}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="section-title text-2xl font-bold text-center mb-6">
            Certifications & Training
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <li key={i} className="text-ink-secondary">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}