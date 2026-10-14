export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  github: string;
  stack: string[];
  liveDemo?: string;
}

export interface CvData {
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
  skills: SkillCategory[];
  competitiveProgramming: {
    codeforces: string;
    codechef: string;
    leetcode: string;
    icpcRegionalist: boolean;
    onsiteContests: number;
    totalProblems: number;
    awards: string[];
  };
  projects: Project[];
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