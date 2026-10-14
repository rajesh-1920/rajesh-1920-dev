"use client";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-x">
        <p className="section-eyebrow text-center">Stack</p>
        <h2 className="section-title text-3xl font-extrabol text-center">
          Technical Skills
        </h2>
        <p className="mt-4 text-center text-ink-secondary">
          A practical toolkit for contests, data, and full-stack delivery.
        </p>

        <div className="mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title font-display font-medium mb-4">
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: skill.name.includes("Expert") ? "95%" : skill.name.includes("Advanced") ? "85%" : "75%" }}
                        aria-valuenow={parseInt(skill.name.includes("Expert") ? "95" : skill.name.includes("Advanced") ? "85" : "75")}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}