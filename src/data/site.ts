export interface SiteData {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  social: { label: string; href: string }[];
}

export const site: SiteData = {
  name: "Rajesh Biswas",
  title: "Rajesh Biswas - Portfolio",
  description:
    "Rajesh Biswas - Competitive Programmer, Machine Learning Enthusiast, Full Stack Developer. Showcase of projects, skills, and competitive programming achievements.",
  email: "rajesh@example.com",
  phone: "+8801400234847",
  location: "Khulna, Bangladesh",
  social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "CodeForces", href: "#" },
  ],
};