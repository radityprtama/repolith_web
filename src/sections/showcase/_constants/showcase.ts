export type ShowcaseHighlight = {
  title: string;
  description: string;
  src: string;
  poster: string;
  className?: string;
  projectUrl?: string;
};

export const showcaseHighlights: ShowcaseHighlight[] = [
  {
    title: "AI PR Review Summaries",
    description:
      "Highlight how Repolith generates concise, actionable pull request summaries so reviewers can understand scope, risk, and intent in seconds.",
    src: "",
    poster: "/placeholder-1.jpg",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Inline Diff Collaboration",
    description:
      "Showcase threaded comments and inline diffs that keep conversations close to the code and reduce back-and-forth during review cycles.",
    src: "",
    poster: "/placeholder-1.jpg",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Ghost AI Assistant Workflow",
    description:
      "Feature Ghost assisting with PR navigation, issue triage, and commit drafting to help teams and agents ship changes with more confidence.",
    src: "",
    poster: "/placeholder-1.jpg",
    className: "lg:col-span-1 lg:row-span-1",
  },
];
