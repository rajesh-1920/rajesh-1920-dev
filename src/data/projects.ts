export type ProjectCategory = "systems" | "web" | "mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  highlights: string[];
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  systems: "Systems & Low-Level",
  web: "Full-Stack Web",
  mobile: "Mobile Application",
};

export const projects: Project[] = [
  {
    id: "contestmate",
    title: "ContestMate — CP Contest Reminder App",
    description:
      "Cross-platform mobile utility tracking live and upcoming contests across Codeforces, LeetCode, CodeChef, and AtCoder for 100+ university peers. Implemented background polling and automated local notifications prior to contest rounds with custom alert windows.",
    category: "mobile",
    tech: ["Flutter", "Dart", "REST APIs", "Local Notifications"],
    github: "https://github.com/rajesh-1920/contestmate-a-flutter-base-reminder-app",
    featured: true,
    highlights: [
      "Tracks Codeforces, LeetCode, CodeChef & AtCoder in real-time",
      "Background polling & automated local push notifications",
      "Used by 100+ university peer competitive programmers",
    ],
  },
  {
    id: "novaos",
    title: "NovaOS — Hobby x86-64 Operating System Kernel",
    description:
      "Engineered a 64-bit operating system kernel entering long mode via Limine, with serial logging, framebuffer console, and interactive shell over PS/2 keyboard and serial. Shipped freestanding libc, device drivers, and higher-half linker script; automated hybrid BIOS/UEFI bootable ISO generation from 1 Makefile.",
    category: "systems",
    tech: ["C", "NASM", "Limine", "QEMU", "Make"],
    github: "https://github.com/rajesh-1920/novaos",
    featured: true,
    highlights: [
      "Boots 64-bit long mode via Limine bootloader",
      "Freestanding libc, PS/2 keyboard & serial drivers",
      "Interactive shell & automated hybrid BIOS/UEFI ISO build",
    ],
  },
  {
    id: "paperhub",
    title: "PaperHub — Document-Management Platform",
    description:
      "Built 3-role RBAC (user, officer, admin) document processing platform with verification workflows and payment tracking on Node/Express and MongoDB. Shipped responsive framework-free Tailwind + vanilla-JS frontend; containerized with Docker Compose and automated GitHub Actions CI.",
    category: "web",
    tech: ["Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
    github: "https://github.com/rajesh-1920/paperhub",
    featured: true,
    highlights: [
      "3-role RBAC (user, officer, admin) with audit trail",
      "Verification workflows & payment tracking pipelines",
      "Containerized with Docker Compose & GitHub Actions CI",
    ],
  },
  {
    id: "maze-run",
    title: "Maze Run — 2D Algorithmic Maze Game",
    description:
      "Developed a 2D maze game in C++ implementing BFS/DFS graph pathfinding, collision detection, and dynamic obstacle traversal algorithms with keyboard controls.",
    category: "systems",
    tech: ["C++", "Graph Algorithms", "BFS/DFS", "Game Logic"],
    github: "https://github.com/rajesh-1920/Maze-Run-Game",
    featured: false,
    highlights: [
      "BFS and DFS graph-based algorithmic pathfinding",
      "Custom 2D collision detection & obstacle traversal",
      "Engineered in modern C++ with game loop architecture",
    ],
  },
];
