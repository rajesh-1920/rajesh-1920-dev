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
  /** Open Graph / Twitter card image (defaults to profile picture). */
  ogImage: string;
  social: SocialLink[];
}

export const site: SiteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://rajesh-1920-dev.vercel.app",
  name: "Rajesh Biswas",
  title: "Rajesh Biswas — Competitive Programmer & Full-Stack Systems Developer",
  description:
    "Official portfolio of Rajesh Biswas — CSE undergraduate at PSTU, two-time ICPC Regionalist, Codeforces Specialist (1416), and full-stack systems engineer.",
  keywords: [
    "Rajesh Biswas",
    "portfolio",
    "competitive programming",
    "Codeforces Specialist",
    "ICPC Regionalist",
    "Full-Stack Developer",
    "Systems Programmer",
    "NovaOS",
    "ContestMate",
    "PaperHub",
    "PSTU CSE",
  ],
  email: "rajesh18@cse.pstu.ac.bd",
  phone: "+880 1400 234847",
  location: "Khulna, Bangladesh",
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://rajesh-1920-dev.vercel.app"}/images/profile-picture.jpg`,
  social: [
    { label: "GitHub", href: "https://github.com/rajesh-1920" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajesh-biswas-8b9780312",
    },
    { label: "Codeforces", href: "https://codeforces.com/profile/rajesh_1920" },
    { label: "LeetCode", href: "https://leetcode.com/u/rajesh_1920/" },
    { label: "CodeChef", href: "https://www.codechef.com/users/rajesh_1920" },
  ],
};
