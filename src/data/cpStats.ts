export interface CpStat {
  platform: string;
  rating: string;
  contests: string;
  problems: string;
  badge: string;
  handle: string;
  tone?: "specialist" | "advanced" | "intermediate";
  link?: string;
  highlight?: string;
}

export const cpStats: CpStat[] = [
  {
    platform: "Codeforces",
    rating: "1416",
    contests: "100+",
    problems: "1,500+",
    badge: "Specialist",
    handle: "rajesh_1920",
    tone: "specialist",
    link: "https://codeforces.com/profile/rajesh_1920",
    highlight: "1,500+ problems across 100+ rated rounds",
  },
  {
    platform: "LeetCode",
    rating: "Top 50%",
    contests: "Regular",
    problems: "330+",
    badge: "56 Hard Solved",
    handle: "rajesh_1920",
    tone: "advanced",
    link: "https://leetcode.com/u/rajesh_1920/",
    highlight: "56 Hard DP, Graphs, and Tree challenges",
  },
  {
    platform: "CodeChef",
    rating: "1615",
    contests: "Rated Divs",
    problems: "280+",
    badge: "3★ Star",
    handle: "rajesh_1920",
    tone: "advanced",
    link: "https://www.codechef.com/users/rajesh_1920",
    highlight: "Peak rating 1615 in division contests",
  },
  {
    platform: "CSES & AtCoder",
    rating: "1650 / 98",
    contests: "28 Contests",
    problems: "418+",
    badge: "CSES Core & AtCoder",
    handle: "rajesh_1920",
    tone: "intermediate",
    highlight: "98 CSES problems + 320 AtCoder problems",
  },
];
