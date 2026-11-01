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
      "TypeScript",
      "JavaScript",
      "Python",
      "Dart",
      "PHP",
      "SQL",
      "Assembly (NASM)",
    ],
  },
  {
    title: "Algorithms & Core CS",
    skills: [
      "Data Structures & Algorithms",
      "Graph Theory",
      "Dynamic Programming",
      "Segment Trees",
      "Disjoint Set Union (DSU)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems (OS)",
      "Database Management Systems (DBMS)",
    ],
  },
  {
    title: "Web & Cloud",
    skills: [
      "Next.js 16",
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "Node.js",
      "Express",
      "FastAPI",
      "Firebase",
      "Cloud Functions",
      "REST APIs",
    ],
  },
  {
    title: "Databases & Mobile",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firestore",
      "Flutter",
      "Dart",
      "Local Notifications",
    ],
  },
  {
    title: "Systems & DevOps",
    skills: [
      "x86-64 Kernel Dev",
      "Limine Bootloader",
      "QEMU",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions (CI/CD)",
      "Linux (Debian/Kali)",
      "GNU Make",
    ],
  },
];
