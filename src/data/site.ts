export interface SocialLink {
  label: string;
  href: string;
}

/**
 * Sub-path the app is served from (e.g. "/rajesh-1920-dev" on GitHub Pages).
 * Empty for root deployments such as Vercel.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export interface SiteConfig {
  /** Canonical origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
  url: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  email: string;
  phone: string;
  location: string;
  social: SocialLink[];
}

export const site: SiteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://rajesh-1920.github.io/rajesh-1920-dev",
  name: "Rajesh Biswas",
  title: "Rajesh Biswas — Competitive Programmer & Full-Stack Developer",
  description:
    "Portfolio of Rajesh Biswas — Computer Science undergraduate, competitive programmer (Codeforces Specialist, two-time ICPC Regionalist), and full-stack developer.",
  keywords: [
    "Rajesh Biswas",
    "portfolio",
    "competitive programming",
    "Codeforces",
    "ICPC",
    "full-stack developer",
    "software engineer",
  ],
  email: "rajesh18@cse.pstu.ac.bd",
  phone: "+8801400234847",
  location: "Khulna, Bangladesh",
  social: [
    { label: "GitHub", href: "https://github.com/rajesh-1920" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rajesh-biswas-8b9780312" },
    { label: "Codeforces", href: "https://codeforces.com/profile/rajesh_1920" },
    { label: "LeetCode", href: "https://leetcode.com/u/rajesh_1920/" },
  ],
};
