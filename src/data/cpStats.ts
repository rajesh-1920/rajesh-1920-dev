export interface CpStat {
  platform: string;
  rating: string;
  contests: string;
  problems: string;
  badge: string;
  /** Badge modifier used for styling (lowercase). */
  tone?: "specialist" | "advanced" | "intermediate";
  link?: string;
}

export const cpStats: CpStat[] = [
  {
    platform: "Codeforces",
    rating: "1416",
    contests: "100+",
    problems: "1500+",
    badge: "Specialist",
    tone: "specialist",
    link: "https://codeforces.com/profile/rajesh_1920",
  },
  {
    platform: "CodeChef",
    rating: "1615",
    contests: "—",
    problems: "280+",
    badge: "3★",
    tone: "advanced",
    link: "https://www.codechef.com/users/rajesh_1920",
  },
  {
    platform: "LeetCode",
    rating: "Top 50%",
    contests: "—",
    problems: "330+",
    badge: "56 Hard",
    tone: "advanced",
    link: "https://leetcode.com/u/rajesh_1920/",
  },
  {
    platform: "AtCoder",
    rating: "1650",
    contests: "28",
    problems: "320+",
    badge: "Intermediate",
    tone: "intermediate",
  },
];
