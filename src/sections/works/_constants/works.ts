export interface WorksItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const works: WorksItem[] = [
  {
    image: "/placeholder-1.jpg",
    title: "Repository Overview That Reduces Noise",
    description:
      "See README, file tree, and activity in one focused layout so contributors can understand project state faster.",
    link: "https://github.com/radityprtama/repolith",
  },
  {
    image: "/placeholder-1.jpg",
    title: "PR Reviews With AI-Powered Summaries",
    description:
      "Review diffs, comments, and change context without tab overload, then use AI assistance to speed up feedback loops.",
    link: "https://github.com/radityprtama/repolith",
  },
  {
    image: "/placeholder-1.jpg",
    title: "Issue Triage and Command-Center Navigation",
    description:
      "Filter and act on issues quickly while jumping anywhere with keyboard-first workflows for daily collaboration.",
    link: "https://github.com/radityprtama/repolith",
  },
  {
    image: "/placeholder-1.jpg",
    title: "Built-In CI/CD and Security Visibility",
    description:
      "Track workflow runs across branches and monitor advisories in one place to keep delivery reliable and secure.",
    link: "https://github.com/radityprtama/repolith",
  },
];
