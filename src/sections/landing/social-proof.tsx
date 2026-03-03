import { CheckIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const trustBadges = [
	"Used by Engineering Teams",
	"AI-Assisted PR Reviews",
	"Keyboard-First Workflow",
	"GitHub-Native Collaboration",
	"Security-Aware by Design",
	"Fast Team Onboarding",
] as const;

const testimonials = [
	{
		quote:
			"Repolith cut our PR review time significantly. The AI summaries help everyone understand scope immediately.",
		name: "Maya Chen",
		role: "Engineering Manager",
	},
	{
		quote:
			"We replaced tab chaos with one focused collaboration flow. Context is easier to find, and decisions happen faster.",
		name: "Jonas Ribeiro",
		role: "Staff Engineer",
	},
	{
		quote:
			"Ghost became part of our daily routine for triage and review prep. It saves real hours every sprint.",
		name: "Aisha Patel",
		role: "Tech Lead",
	},
] as const;

export default function SocialProof() {
	return (
		<Section
			id="social-proof"
			title="Trusted by teams shipping code every day"
			description="Repolith helps engineering teams review faster, triage better, and keep collaboration clear across repositories."
			badgeText="Social proof"
			badgeIcon={<CheckIcon aria-hidden="true" className="size-3.5" />}
			className="grid grid-cols-1 gap-4 md:grid-cols-3"
		>
			<div className="md:col-span-3 flex flex-wrap gap-2">
				{trustBadges.map((badge) => (
					<div
						key={badge}
						className="rounded-md border border-border bg-card-elevated px-3 py-1.5 text-xs text-foreground/80 shadow-sm"
					>
						{badge}
					</div>
				))}
			</div>

			{testimonials.map((item) => (
				<Card key={item.name} className="h-full">
					<CardHeader>
						<CardTitle className="text-sm">“{item.quote}”</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="text-foreground/65">
							{item.name} · {item.role}
						</CardDescription>
					</CardContent>
				</Card>
			))}
		</Section>
	);
}
