import {
  FigmaLogoIcon,
  FileIcon,
  FilePlusIcon,
  FileTextIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
  ConvertingCardContent,
  type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
  href: string;
  className: string;
  background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
  destination: {
    id: "developer",
    Icon: PersonIcon,
  },
  hub: {
    id: "repolith",
    Icon: GitHubLogoIcon,
  },
  sources: [
    {
      id: "repo",
      Icon: FileTextIcon,
    },
    {
      id: "pull-request",
      Icon: FilePlusIcon,
    },
    {
      id: "issues",
      Icon: FileIcon,
    },
    {
      id: "context",
      Icon: FigmaLogoIcon,
    },
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    name: "Repo Overview",
    description:
      "Get a cleaner repository experience with README rendering, file tree navigation, and activity context in one place.",
  },
  {
    name: "PR Reviews",
    description:
      "Review pull requests faster with inline diffs, AI-powered summaries, and focused collaboration on code changes.",
  },
  {
    name: "Issue Management",
    description:
      "Triage, filter, and act on issues quickly so your team can move from backlog to execution with less friction.",
  },
  {
    name: "Ghost AI Assistant",
    description:
      "Use Ghost to review PRs, navigate code, triage issues, and draft commit messages when context is heavy.",
  },
  {
    name: "Command Center",
    description:
      "Jump across repositories, actions, and views using a keyboard-first command palette built for speed.",
  },
  {
    name: "CI/CD Visibility",
    description:
      "Track workflow runs and compare branch health without leaving your collaboration flow.",
  },
  {
    name: "Security Advisories",
    description:
      "Keep risk visible with repository-level vulnerability tracking and better security awareness.",
  },
];

export const bestPractices: ServiceItem[] = [
  {
    name: "Principle 01 — Human + Agent Collaboration",
    description:
      "Design every workflow so people and AI assistants can work together without losing accountability.",
  },
  {
    name: "Principle 02 — Context First",
    description:
      "Surface the exact repository, PR, and issue context needed to make confident decisions quickly.",
  },
  {
    name: "Principle 03 — Keyboard-First Speed",
    description:
      "Prioritize shortcuts and command-driven navigation so power users can move without interruption.",
  },
  {
    name: "Principle 04 — AI With Operator Control",
    description:
      "AI should accelerate understanding and drafting while keeping final judgment with the team.",
  },
  {
    name: "Principle 05 — Review Clarity",
    description:
      "Make diffs, comments, and summaries easier to scan so feedback quality goes up as review time goes down.",
  },
  {
    name: "Principle 06 — End-to-End Visibility",
    description:
      "Unify repo health, CI/CD status, and security signals to reduce status chasing across tools.",
  },
  {
    name: "Principle 07 — Frictionless Navigation",
    description:
      "Let contributors search, switch, and act from anywhere with minimal UI overhead.",
  },
  {
    name: "Principle 08 — Reliable Collaboration",
    description:
      "Build interactions that stay consistent across review, issue triage, and day-to-day development.",
  },
  {
    name: "Principle 09 — Practical Extensibility",
    description:
      "Support browser extension entry points and integration patterns teams can adopt incrementally.",
  },
  {
    name: "Principle 10 — Delight in the Daily Loop",
    description:
      "Improve the repetitive parts of collaboration so teams spend more time shipping and less time wrestling tools.",
  },
];

export const serviceFeatures: ServiceFeature[] = [
  {
    name: "Core Collaboration Features",
    description:
      "See the key capabilities Repolith brings to repository workflows, PR velocity, and issue execution.",
    href: "#",
    className: "col-span-1",
    background: <ServicesCardContent items={serviceItems} />,
  },
  {
    name: "Unified Workflow Graph",
    description:
      "Visualize how code, pull requests, issues, and AI context converge into faster decisions.",
    href: "#",
    className: "col-span-1",
    background: <ConvertingCardContent icons={convertingCardIcons} />,
  },
  {
    name: "Platform Principles",
    description:
      "Understand the product principles guiding Repolith's experience for humans and AI agents.",
    href: "#",
    className: "col-span-1",
    background: <CleanCodeCardContent items={bestPractices} />,
  },
];
