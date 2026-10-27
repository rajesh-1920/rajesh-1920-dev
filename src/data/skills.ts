export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Python",
      "Dart",
      "Java",
      "SQL",
    ],
  },
  {
    title: "Backend & Web",
    skills: [
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "REST APIs",
      "PHP",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Local Notifications"],
  },
  {
    title: "Systems",
    skills: [
      "Low-level C",
      "x86-64 kernel dev",
      "Limine bootloader",
      "QEMU",
      "Makefiles",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions (CI)",
      "Docker",
      "Linux (Kali)",
      "VS Code",
      "Android Studio",
    ],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Competitive Programming",
    ],
  },
];
