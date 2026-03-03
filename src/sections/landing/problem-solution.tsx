import { CrossCircledIcon, LightningBoltIcon, RocketIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const painPoints = [
	{
		title: "PR reviews are slow and fragmented",
		description:
			"Reviewers jump across tabs, comments get buried, and feedback loops stretch release timelines.",
		icon: CrossCircledIcon,
	},
	{
		title: "Context switching kills momentum",
		description:
			"Engineers bounce between repo views, CI status pages, and issue boards just to understand what’s happening.",
		icon: CrossCircledIcon,
	},
	{
		title: "AI tools lack repository awareness",
		description:
			"Generic assistants miss project context, making summaries noisy and suggestions harder to trust.",
		icon: CrossCircledIcon,
	},
];

const outcomes = [
	{
		title: "Faster, clearer pull request reviews",
		description:
			"AI-powered summaries plus inline diffs help teams review intent, risk, and code changes in minutes.",
		icon: LightningBoltIcon,
	},
	{
		title: "One focused collaboration workspace",
		description:
			"Repolith centralizes repo overview, PR feedback, issue triage, and delivery signals into a single flow.",
		icon: RocketIcon,
	},
	{
		title: "Human + agent workflows that scale",
		description:
			"Ghost assists with triage and drafting while your team stays in control of final technical decisions.",
		icon: RocketIcon,
	},
];

export default function ProblemSolution() {
	return (
		<Section
			id="problem-solution"
			badgeText="Problem → Solution"
			title="Modern teams need more than a code host UI"
			description="Repolith removes review friction, reduces context switching, and turns collaboration into a faster, AI-assisted product workflow."
			className="grid grid-cols-1 gap-6 lg:grid-cols-2"
		>
			<Card className="h-full">
				<CardContent className="space-y-4">
					<div>
						<p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
							The Problem
						</p>
						<CardTitle className="mt-2 text-lg">What slows teams down today</CardTitle>
					</div>

					<div className="space-y-3">
						{painPoints.map(({ title, description, icon: Icon }) => (
							<div
								key={title}
								className="rounded-md border border-border/80 bg-card-muted/40 p-4"
							>
								<div className="flex items-center gap-2">
									<Icon className="size-4 text-foreground/60" aria-hidden="true" />
									<p className="text-sm font-medium text-foreground">{title}</p>
								</div>
								<CardDescription className="mt-2 text-foreground/65">
									{description}
								</CardDescription>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card className="h-full">
				<CardContent className="space-y-4">
					<div>
						<p className="text-xs font-medium uppercase tracking-wide text-foreground/50">
							The Solution
						</p>
						<CardTitle className="mt-2 text-lg">How Repolith fixes the workflow</CardTitle>
					</div>

					<div className="space-y-3">
						{outcomes.map(({ title, description, icon: Icon }) => (
							<div
								key={title}
								className="rounded-md border border-border/80 bg-card-elevated p-4"
							>
								<div className="flex items-center gap-2">
									<Icon className="size-4 text-foreground/75" aria-hidden="true" />
									<p className="text-sm font-medium text-foreground">{title}</p>
								</div>
								<CardDescription className="mt-2 text-foreground/65">
									{description}
								</CardDescription>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</Section>
	);
}
