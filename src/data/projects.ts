export type ProjectCategory = "web" | "mobile" | "systems";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  demo?: string;
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  systems: "Systems",
};

export const projects: Project[] = [
  {
    id: "paperhub",
    title: "PaperHub — Document-Management Platform",
    description:
      "Full-stack document-management app with role-based dashboards for users, officers, and admins, plus file-review and payment workflows.",
    category: "web",
    tech: ["Node.js", "Express", "Tailwind", "Docker", "MongoDB"],
    github: "https://github.com/rajesh-1920/paperhub",
  },
  {
    id: "edusphere",
    title: "EduSphere — Learning Management System",
    description:
      "Full-stack LMS with user authentication, role-based access, and a dynamic admin dashboard. Optimized MySQL queries and a responsive UI for mobile and desktop.",
    category: "web",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/rajesh-1920/edusphere",
  },
  {
    id: "contestmate",
    title: "ContestMate — Contest Reminder App",
    description:
      "Mobile app that tracks upcoming programming contests and fires local notifications before start times, with a clean, readable UI.",
    category: "mobile",
    tech: ["Flutter", "Dart", "Local Notifications"],
    github: "https://github.com/rajesh-1920/contestmate-a-flutter-base-reminder-app",
  },
  {
    id: "novaos",
    title: "NovaOS — Hobby x86-64 Operating System Kernel",
    description:
      "64-bit OS kernel that boots via the Limine bootloader directly into long mode, with serial logging, a framebuffer text console, and an interactive shell.",
    category: "systems",
    tech: ["C", "NASM", "Limine", "QEMU", "Make"],
    github: "https://github.com/rajesh-1920/novaos",
  },
  {
    id: "maze-run",
    title: "Maze Run — 2D Maze Game",
    description:
      "2D maze-navigation game with collision detection, pathfinding, multiple difficulty levels, and smooth character control.",
    category: "systems",
    tech: ["C++", "Game Logic"],
    github: "https://github.com/rajesh-1920/Maze-Run-Game",
  },
];
