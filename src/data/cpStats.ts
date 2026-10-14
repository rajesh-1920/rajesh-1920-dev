export interface CpStats {
  platform: string;
  rating: string;
  contests: string;
  problems: string;
  badge: string;
  link?: string;
}

export const cpStats: CpStats[] = [
  {
    platform: "Codeforces",
    rating: "1411",
    contests: "100+",
    problems: "1500+",
    badge: "Specialist",
    link: "https://codeforces.com/profile/rajesh_1920",
  },
  {
    platform: "LeetCode",
    rating: "Top 50%",
    contests: "—",
    problems: "150+",
    badge: "Advanced",
    link: "https://leetcode.com/u/rajesh_1920/",
  },
  {
    platform: "Codechef",
    rating: "Advanced",
    contests: "—",
    problems: "280+",
    badge: "Advanced",
    link: "https://www.codechef.com/users/rajesh_1920",
  },
  {
    platform: "AtCoder",
    rating: "1650",
    contests: "28",
    problems: "320+",
    badge: "Intermediate",
    link: "#",
  },
];