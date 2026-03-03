import type { ComponentType, SVGProps } from "react";
import {
  BarChartIcon,
  ChatBubbleIcon,
  DesktopIcon,
  LightningBoltIcon,
  LockClosedIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FeatureItem = {
  title: string;
  description: string;
  benefit: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const featureItems: FeatureItem[] = [
  {
    title: "AI-Powered PR Summaries",
    description:
      "Get concise, high-signal summaries for every pull request with key risks and change intent surfaced first.",
    benefit: "Review decisions faster with less cognitive load.",
    icon: MagicWandIcon,
  },
  {
    title: "Inline Diff Collaboration",
    description:
      "Keep review conversations anchored to specific lines and files with clean, context-rich inline comments.",
    benefit: "Reduce back-and-forth and unblock merges sooner.",
    icon: ChatBubbleIcon,
  },
  {
    title: "Unified Repo Overview",
    description:
      "See README, file tree, activity, and status signals in one focused workspace instead of scattered tabs.",
    benefit: "Onboard contributors and orient reviewers in minutes.",
    icon: DesktopIcon,
  },
  {
    title: "Issue Triage Workflows",
    description:
      "Prioritize, filter, and act on issues quickly with context-aware views designed for engineering execution.",
    benefit: "Turn backlog noise into clear next actions.",
    icon: LightningBoltIcon,
  },
  {
    title: "CI/CD & Delivery Visibility",
    description:
      "Track workflow runs and branch health directly where collaboration happens so teams stay aligned on release quality.",
    benefit: "Ship confidently with fewer release surprises.",
    icon: BarChartIcon,
  },
  {
    title: "Security-Aware Reviews",
    description:
      "Surface advisories and risk signals alongside code changes to make security part of daily review habits.",
    benefit: "Catch problems earlier without slowing the team down.",
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <Section
      id="features"
      title="Everything your team needs to review, triage, and ship faster"
      description="Repolith combines AI assistance, focused repository context, and collaboration-first UX to improve code velocity and quality."
      badgeText="Features"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {featureItems.map((feature) => {
        const Icon = feature.icon;

        return (
          <Card key={feature.title} className="h-full">
            <CardHeader>
              <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md border border-border bg-card-elevated">
                <Icon
                  className="size-4 text-foreground/80"
                  aria-hidden="true"
                />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-foreground/75">{feature.benefit}</p>
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
}
