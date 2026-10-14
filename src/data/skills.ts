export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "DOM Manipulation", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Docker", level: "Beginner" },
    ],
  },
];