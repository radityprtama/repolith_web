import { CheckIcon, StarIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Plan = {
	name: string;
	price: string;
	description: string;
	cta: string;
	features: string[];
	highlighted?: boolean;
};

const plans: Plan[] = [
	{
		name: "Starter",
		price: "$0",
		description: "For individual contributors exploring faster code collaboration.",
		cta: "Start Free",
		features: [
			"1 workspace",
			"Repo overview",
			"Basic PR review tools",
			"Community support",
		],
	},
	{
		name: "Growth",
		price: "$29",
		description:
			"For growing engineering teams that want AI-assisted review workflows.",
		cta: "Start Free Trial",
		highlighted: true,
		features: [
			"Unlimited repositories",
			"AI-powered PR summaries",
			"Issue triage workflow",
			"Command center + shortcuts",
			"Priority support",
		],
	},
	{
		name: "Enterprise",
		price: "Custom",
		description:
			"For larger organizations needing scale, controls, and security alignment.",
		cta: "Request Demo",
		features: [
			"SSO / SAML",
			"Advanced permissions",
			"Audit logs",
			"Dedicated onboarding",
			"Custom security reviews",
		],
	},
];

export default function PricingPreview() {
	return (
		<Section
			id="pricing"
			title="Simple pricing that scales with your team"
			description="Choose the plan that fits your collaboration maturity today, then upgrade as your workflow grows."
			badgeText="Pricing Preview"
			badgeIcon={<StarIcon aria-hidden="true" className="size-3.5" />}
			className="grid grid-cols-1 gap-4 md:grid-cols-3"
		>
			{plans.map((plan) => (
				<Card
					key={plan.name}
					className={cn(
						"relative h-full overflow-hidden",
						plan.highlighted &&
							"border-foreground/25 bg-card-elevated shadow-lg ring-1 ring-foreground/15",
					)}
				>
					{plan.highlighted ? (
						<div className="absolute right-3 top-3 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-foreground/70">
							Most Popular
						</div>
					) : null}

					<CardHeader>
						<CardTitle>{plan.name}</CardTitle>
						<div className="mt-2 flex items-end gap-1">
							<p className="text-2xl font-semibold text-foreground">{plan.price}</p>
							{plan.price !== "Custom" ? (
								<span className="mb-0.5 text-xs text-foreground/60">/seat/mo</span>
							) : null}
						</div>
						<CardDescription className="mt-2 text-foreground/65">
							{plan.description}
						</CardDescription>
					</CardHeader>

					<CardContent className="flex h-full flex-col gap-4">
						<ul className="space-y-2">
							{plan.features.map((feature) => (
								<li key={feature} className="flex items-start gap-2 text-sm text-foreground/75">
									<CheckIcon className="mt-0.5 size-4 shrink-0 text-foreground/70" />
									<span>{feature}</span>
								</li>
							))}
						</ul>

						<div className="mt-auto pt-2">
							<Button
								variant={plan.highlighted ? "default" : "secondary"}
								size="md"
								className="w-full"
							>
								{plan.cta}
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</Section>
	);
}
