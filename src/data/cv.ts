export interface ProfessionalExperience {
  role: string;
  company: string;
  period: string;
  tech: string[];
  description: string[];
}

export interface CvProfile {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  codeforces: string;
  leetcode: string;
  summary: string;
  competitiveProgramming: {
    codeforces: string;
    codechef: string;
    leetcode: string;
    icpcRegionalist: boolean;
    onsiteContests: number;
    totalProblems: number;
    awards: string[];
  };
  education: {
    degree: string;
    university: string;
    semester: string;
    cgpa: string;
    expectedGraduation: string;
  };
  professionalExperience: ProfessionalExperience[];
  leadership: {
    role: string;
    organization: string;
    period: string;
    description: string;
  }[];
  certifications: string[];
}

export const cv: CvProfile = {
  name: "Rajesh Biswas",
  tagline: "CSE Undergraduate • Competitive Programmer • Full-Stack & Systems Developer",
  location: "Khulna, Bangladesh",
  phone: "+880 1400 234847",
  email: "rajesh18@cse.pstu.ac.bd",
  github: "github.com/rajesh-1920",
  linkedin: "linkedin.com/in/rajesh-biswas-8b9780312",
  codeforces: "codeforces.com/profile/rajesh_1920",
  leetcode: "leetcode.com/u/rajesh_1920",
  summary:
    "Competitive programmer and CSE undergraduate with 2,000+ algorithmic problems solved across Codeforces (Specialist, peak 1416), LeetCode (330+ solved, 56 Hard), and CodeChef (3★, peak 1615) — all under handle rajesh_1920. Two-time ICPC Regionalist and competitor in 15+ national IUPCs. Ships production-scale software on 2 paid team projects (540+ commits) and a bootable x86-64 OS kernel in C. Strong foundation in Data Structures, Algorithms, and Systems Engineering. Seeking a Software Engineering or Algorithmic Problem Solving role.",

  competitiveProgramming: {
    codeforces:
      "Specialist (max 1416): 1,500+ problems solved across 100+ rated contests (rajesh_1920)",
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

  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    university: "Patuakhali Science and Technology University (PSTU)",
    semester: "7th Semester",
    cgpa: "3.41 / 4.00",
    expectedGraduation: "2027",
  },

  professionalExperience: [
    {
      role: "Software Developer — Web & Mobile",
      company: "Srijanee Bidyaniketan School Management System",
      period: "Aug 2026 – Present",
      tech: ["Next.js 16", "React 19", "Flutter", "Dart", "Firebase", "Turborepo"],
      description: [
        "Top contributor on a 10-person team with 540+ commits across core web and mobile repositories.",
        "Engineered the production Flutter mobile app end-to-end (35+ screens, 43 routes) and large portions of the 44-route web administration console.",
        "Architected database-driven RBAC layer: 24 modules × 4 actions, enforced across 95 server guards and 38 Firestore rule blocks.",
        "Built an idempotent payments engine settling across 3 paths (browser return, signed IPN, reconciler) on SSLCommerz.",
        "Implemented low-level network communication for the ZKTeco biometric attendance protocol and BDRIS registration relay.",
      ],
    },
    {
      role: "Frontend & Extension Lead",
      company: "ihateresume",
      period: "Jun 2026 – Sep 2026",
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript 5",
        "Chrome MV3",
        "FastAPI",
        "PostgreSQL",
      ],
      description: [
        "Directed frontend engineering on a team of 6, delivering the Next.js 15 / React 19 web platform (19 routes, 165 components) and Chrome MV3 extension.",
        "Engineered extension web scraper parsing schema.org JobPosting across 9 job boards plus a custom Workday adapter.",
        "Built 1-click application autofill compatible with dynamic React and Vue forms; secured client against XSS using DOMPurify and shadow-root isolation.",
      ],
    },
  ],

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
