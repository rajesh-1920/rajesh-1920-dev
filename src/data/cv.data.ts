import { SkillCategory, Project, CvData } from "./cv";

export const cv: CvData = {
  name: "Rajesh Biswas",
  tagline:
    "CSE Undergraduate &nbsp;•&nbsp; Competitive Programmer &nbsp;•&nbsp; Full-Stack Developer",
  location: "Khulna, Bangladesh",
  phone: "+880 1400 234847",
  email: "rajesh18@cse.pstu.ac.bd",
  github: "github.com/rajesh-1920",
  linkedin: "linkedin.com/in/rajesh-biswas-8b9780312",
  codeforces: "codeforces.com/profile/rajesh_1920",
  leetcode: "leetcode.com/u/rajesh_1920",
  summary:
    "Computer Science & Engineering undergraduate and competitive programmer with 2,000+ problems solved across Codeforces (Specialist, max 1416), CodeChef (3★), and LeetCode, and a two-time ICPC Regionalist. Comfortable from low-level systems to the web — from a hobby x86-64 OS kernel written in C to full-stack applications with Node.js, Next.js, and PHP, containerized with Docker and shipped through GitHub Actions CI. Strong foundation in data structures, algorithms, and systems programming. Seeking a Software Engineering internship or entry-level role.",

  skills: [
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
  ],

  competitiveProgramming: {
    codeforces: "Specialist (max 1416): 1,500+ problems solved across 100+ rated contests (rajesh_1920)",
    codechef: "3★, peak rating 1615 (rajesh_1920)",
    leetcode: "330+ problems solved, including 56 Hard (rajesh_1920)",
    icpcRegionalist: true,
    onsiteContests: 15,
    totalProblems: 2000,
    awards: [
      "ICPC Regionalist — Asia West / Dhaka Regional (2024, 2025)",
      "1st Runner-up — Intra-University Programming Contest, PSTU CSE Club (2025)",
      "Consistent top performer at PSTU IT Carnival and Intra-University Programming Contests (2024–2026)",
    ],
  },

  projects: [
    {
      title: "PaperHub — Document-Management Platform (SaaS-style)",
      description:
        "Developed a full-stack document-management app with role-based dashboards for users, officers, and admins, plus file-review and payment workflows.",
      github: "github.com/rajesh-1920/paperhub",
      liveDemo: undefined,
      stack: ["Node.js", "Express", "Tailwind", "Docker", "MongoDB"],
    },
    {
      title: "EduSphere — Learning Management System",
      description:
        "Built a full-stack LMS featuring user authentication, role-based access, and a dynamic admin dashboard. Optimized MySQL queries and designed a responsive UI for mobile and desktop.",
      github: "github.com/rajesh-1920/edusphere",
      liveDemo: undefined,
      stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    },
    {
      title: "ContestMate — Contest Reminder App",
      description:
        "Engineered a mobile app that tracks upcoming programming contests and fires local notifications before start times, with a clean, readable UI.",
      github: "github.com/rajesh-1920/contestmate-a-flutter-base-reminder-app",
      liveDemo: undefined,
      stack: ["Flutter", "Dart", "Local Notifications"],
    },
    {
      title: "NovaOS — Hobby x86-64 Operating System Kernel",
      description:
        "Built a 64-bit OS kernel that boots via the Limine bootloader directly into long mode, with serial logging, a framebuffer text console, and an interactive shell.",
      github: "github.com/rajesh-1920/novaos",
      liveDemo: undefined,
      stack: ["C", "NASM", "Limine", "QEMU", "Make"],
    },
    {
      title: "Maze Run — 2D Maze Game",
      description:
        "Built a 2D maze-navigation game with collision detection, pathfinding, multiple difficulty levels, and smooth character control.",
      github: "github.com/rajesh-1920/Maze-Run-Game",
      liveDemo: undefined,
      stack: ["C++", "Game Logic"],
    },
  ],

  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    university: "Patuakhali Science and Technology University (PSTU)",
    semester: "7th Semester",
    cgpa: "3.41 / 4.00",
    expectedGraduation: "2027",
  },

  leadership: [
    {
      role: "Assistant General Secretary (AGS)",
      organization: "PSTU CSE Club",
      period: "Feb 2026 – Present",
      description:
        "Coordinate and organize inter- and intra-university programming contests and technical events; help lead the club's competitive-programming community.",
    },
    {
      role: "Member",
      organization: "PSTU CSE Club",
      period: "2022 – 2026",
      description:
        "Participated in club workshops, seminars, and programming contests; volunteered at departmental tech events and mentored junior students in problem-solving.",
    },
  ],

  certifications: [
    "Cython – Programming, DSA with C++ and Python – bongoDev, 2024",
    "BAPS National Programming Camp (Intermediate) – BUBT, 2025",
    "Flutter App Development Training – EDGE Program, PSTU, 2024",
  ],
};