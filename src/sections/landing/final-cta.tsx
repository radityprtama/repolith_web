import { ArrowRightIcon, RocketIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function FinalCta() {
	return (
		<Section
			id="final-cta"
			badgeText="Get Started"
			badgeIcon={<RocketIcon aria-hidden="true" className="size-3.5" />}
			title="Ready to speed up code reviews and ship with confidence?"
			description="Start your free trial today or book a personalized demo to see how Repolith fits your team’s workflow."
			className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_.8fr]"
		>
			<Card className="h-full">
				<CardHeader>
					<CardTitle className="text-xl md:text-2xl leading-tight">
						Move from scattered review workflows to one AI-assisted
						collaboration platform.
					</CardTitle>
					<CardDescription className="text-foreground/65">
						No complex migration required. Connect your repos, invite your team,
						and start reviewing with better context in minutes.
					</CardDescription>
				</CardHeader>

				<CardContent className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-3">
						<Button asChild size="lg" variant="default">
							<a href="#contact">
								Start Free Trial
								<ArrowRightIcon className="size-4" aria-hidden="true" />
							</a>
						</Button>
						<Button asChild size="lg" variant="secondary">
							<a href="#product-demo">Request Demo</a>
						</Button>
					</div>

					<p className="text-xs text-foreground/60">
						No credit card required • Guided onboarding available
					</p>
				</CardContent>
			</Card>

			<Card className="h-full">
				<CardHeader>
					<CardTitle>What happens next</CardTitle>
					<CardDescription>
						A simple path to evaluate Repolith with your team.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-3">
					<div className="rounded-md border border-border/80 bg-card-elevated p-3">
						<p className="text-xs text-foreground/55">Step 1</p>
						<p className="text-sm font-medium text-foreground">
							Connect repositories
						</p>
					</div>
					<div className="rounded-md border border-border/80 bg-card-elevated p-3">
						<p className="text-xs text-foreground/55">Step 2</p>
						<p className="text-sm font-medium text-foreground">
							Run your first AI-assisted review
						</p>
					</div>
					<div className="rounded-md border border-border/80 bg-card-elevated p-3">
						<p className="text-xs text-foreground/55">Step 3</p>
						<p className="text-sm font-medium text-foreground">
							Scale across your team
						</p>
					</div>
				</CardContent>
			</Card>
		</Section>
	);
}
