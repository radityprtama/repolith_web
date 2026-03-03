import {
  LightningBoltIcon,
  RocketIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Connect your repos",
    description:
      "Link your GitHub repositories and instantly load README, file tree, and activity context in one focused workspace.",
    icon: RocketIcon,
  },
  {
    title: "Review smarter with AI",
    description:
      "Repolith generates concise PR summaries, highlights key diffs, and helps reviewers prioritize high-risk changes first.",
    icon: LightningBoltIcon,
  },
  {
    title: "Ship with confidence",
    description:
      "Move faster with issue triage, CI/CD visibility, and collaboration history that keeps everyone aligned through release.",
    icon: TimerIcon,
  },
] as const;

export default function ProductDemo() {
  return (
    <Section
      id="product-demo"
      badgeText="Product Demo"
      title="See Repolith in action"
      description="Watch how engineering teams move from scattered review workflows to one AI-assisted collaboration loop in minutes."
      className="flex flex-col gap-6"
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video w-full rounded-lg border border-border/80 bg-card-elevated p-1">
          <div className="relative h-full w-full rounded-md border border-border/70 bg-[radial-gradient(circle_at_20%_20%,rgba(120,120,255,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(120,255,200,0.12),transparent_45%)]">
            <video
              className="h-full w-full rounded-md object-cover"
              src="/demo.mp4"
              poster="/demo.png"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Repolith demo demo"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent p-4">
              <p className="text-xs text-foreground/75">
                Onboarding walkthrough • Real product flow
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card key={step.title} className="h-full">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-foreground/60">
                    Step {index + 1}
                  </span>
                  <div className="rounded-md border border-border bg-card-muted p-1.5">
                    <Icon className="size-4 text-foreground/80" />
                  </div>
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
