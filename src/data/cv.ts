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
  tagline: "CSE Undergraduate • Competitive Programmer • Full-Stack Developer",
  location: "Khulna, Bangladesh",
  phone: "+880 1400 234847",
  email: "rajesh18@cse.pstu.ac.bd",
  github: "github.com/rajesh-1920",
  linkedin: "linkedin.com/in/rajesh-biswas-8b9780312",
  codeforces: "codeforces.com/profile/rajesh_1920",
  leetcode: "leetcode.com/u/rajesh_1920",
  summary:
    "Computer Science & Engineering undergraduate and competitive programmer with 2,000+ problems solved across Codeforces (Specialist, max 1416), CodeChef (3★), and LeetCode, and a two-time ICPC Regionalist. Comfortable from low-level systems to the web — from a hobby x86-64 OS kernel written in C to full-stack applications with Node.js, Next.js, and PHP, containerized with Docker and shipped through GitHub Actions CI. Strong foundation in data structures, algorithms, and systems programming. Seeking a Software Engineering internship or entry-level role.",

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
