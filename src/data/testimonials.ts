export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha Rahman",
    role: "Engineering Lead",
    company: "TechSolutions BD",
    avatar: "https://ui-avatars.com/api/?name=Aisha+Rahman&background=00ff88&color=000",
    quote:
      "Rajesh delivered a production-ready document-management platform on time. His attention to edge cases and clean architecture impressed the whole team.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Kabir Ahmed",
    role: "CTO",
    company: "CodeNest",
    avatar: "https://ui-avatars.com/api/?name=Kabir+Ahmed&background=3b82f6&color=fff",
    quote:
      "Strong problem-solving skills and a solid grasp of systems programming. Rajesh's NovaOS kernel work shows rare depth for an undergraduate.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sneha Das",
    role: "Product Manager",
    company: "LearnEdge",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Das&background=a855f7&color=fff",
    quote:
      "EduSphere was built with clean, role-based access control and a responsive UI that just works. Easy to collaborate with and fast to iterate.",
    rating: 5,
  },
];
