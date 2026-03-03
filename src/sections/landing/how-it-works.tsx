import {
	ArrowRightIcon,
	CheckCircledIcon,
	LightningBoltIcon,
	RocketIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const steps = [
	{
		title: "Connect your repositories",
		description:
			"Link your GitHub repos and instantly centralize README context, file structure, and team activity in one focused workspace.",
		outcome: "Setup in minutes",
		icon: RocketIcon,
	},
	{
		title: "Run AI-assisted review workflows",
		description:
			"Use Repolith and Ghost to summarize pull requests, highlight high-risk changes, and reduce reviewer context switching.",
		outcome: "Faster decision cycles",
		icon: LightningBoltIcon,
	},
	{
		title: "Ship with aligned teams",
		description:
			"Track issue status, PR feedback, CI/CD signals, and security visibility together so releases move forward with confidence.",
		outcome: "Predictable delivery",
		icon: CheckCircledIcon,
	},
] as const;

export default function HowItWorks() {
	return (
		<Section
			id="how-it-works"
			badgeText="How it works"
			title="Adopt Repolith in three simple steps"
			description="A clean rollout path for engineering teams: connect existing repos, improve review quality with AI, and scale collaboration without workflow churn."
			className="flex flex-col gap-4"
		>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{steps.map((step, index) => {
					const Icon = step.icon;

					return (
						<Card key={step.title} className="h-full">
							<CardHeader>
								<div className="mb-3 flex items-center justify-between">
									<span className="rounded-md border border-border bg-card-muted px-2 py-1 text-xs text-foreground/70">
										Step {index + 1}
									</span>
									<div className="rounded-md border border-border bg-card-elevated p-1.5">
										<Icon className="size-4 text-foreground/80" aria-hidden="true" />
									</div>
								</div>
								<CardTitle>{step.title}</CardTitle>
								<CardDescription>{step.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="rounded-md border border-border/80 bg-card-elevated px-3 py-2 text-xs text-foreground/70">
									Outcome: <span className="font-medium text-foreground">{step.outcome}</span>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<div className="flex justify-start">
				<Button asChild size="md" variant="secondary">
					<a href="#final-cta">
						Start rollout plan
						<ArrowRightIcon className="size-4" aria-hidden="true" />
					</a>
				</Button>
			</div>
		</Section>
	);
}
