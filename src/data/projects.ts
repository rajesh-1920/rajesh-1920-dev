export type ProjectCategory = "web" | "mobile" | "systems";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  highlights?: string[];
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  systems: "Systems",
};

export const projects: Project[] = [
  {
    id: "novaos",
    title: "NovaOS — 64-bit Operating System Kernel",
    description:
      "A hobby x86-64 operating system kernel developed from scratch. Boots via the modern Limine bootloader directly into long mode, featuring early serial debugging, custom framebuffer text console drivers, and an interactive command shell.",
    category: "systems",
    tech: ["C", "NASM", "Limine", "QEMU", "Make"],
    github: "https://github.com/rajesh-1920/novaos",
    featured: true,
    highlights: [
      "Boots Limine into 64-bit long mode",
      "Serial port logging & QEMU debugging",
      "Framebuffer text console & interactive shell",
    ],
  },
  {
    id: "paperhub",
    title: "PaperHub — Document-Management Platform",
    description:
      "Full-stack institutional document-management platform featuring role-based dashboards for users, verifying officers, and administrators, accompanied by file-review workflows and payment verification.",
    category: "web",
    tech: ["Node.js", "Express", "Tailwind CSS", "Docker", "MongoDB"],
    github: "https://github.com/rajesh-1920/paperhub",
    featured: true,
    highlights: [
      "Multi-role access (User, Officer, Admin)",
      "Dockerized container architecture",
      "Document review & approval lifecycle",
    ],
  },
  {
    id: "contestmate",
    title: "ContestMate — Competitive Programming Reminder",
    description:
      "Cross-platform mobile application that tracks live and upcoming programming contests across Codeforces, LeetCode, CodeChef, and AtCoder with proactive local push notifications before rounds begin.",
    category: "mobile",
    tech: ["Flutter", "Dart", "Local Notifications", "REST API"],
    github: "https://github.com/rajesh-1920/contestmate-a-flutter-base-reminder-app",
    featured: true,
    highlights: [
      "Aggregates Codeforces, LeetCode, CodeChef & AtCoder",
      "Local notification scheduling engine",
      "Clean responsive Flutter UI",
    ],
  },
  {
    id: "edusphere",
    title: "EduSphere — Learning Management System",
    description:
      "Full-stack LMS built with role-based authentication, modular course delivery, and dynamic instructor/admin dashboards. Engineered with optimized relational MySQL queries and responsive views.",
    category: "web",
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/rajesh-1920/edusphere",
    highlights: [
      "Role-based authentication & permissions",
      "Optimized relational schema & queries",
      "Administrative dashboard & analytics",
    ],
  },
  {
    id: "maze-run",
    title: "Maze Run — 2D Maze Algorithm Game",
    description:
      "Interactive 2D maze-navigation game engineered in C++ featuring custom collision detection, graph pathfinding algorithms, multiple procedural difficulty presets, and smooth real-time keyboard control.",
    category: "systems",
    tech: ["C++", "Algorithms", "Game Loop", "Graph Theory"],
    github: "https://github.com/rajesh-1920/Maze-Run-Game",
    highlights: [
      "Custom 2D collision detection",
      "Graph-based pathfinding algorithms",
      "Procedural difficulty tiers",
    ],
  },
];
