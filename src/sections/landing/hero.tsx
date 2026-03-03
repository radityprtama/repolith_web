import { ArrowRightIcon, PlayIcon, RocketIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const trustBadges = [
  "AI-native workflows",
  "GitHub-ready",
  "Keyboard-first UX",
];

export default function LandingHero() {
  return (
    <section
      id="hero"
      className="relative w-full border-b border-border/80"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-7xl md:border-x border-border/80">
        <div className="px-4 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80 shadow-sm">
                <RocketIcon className="size-3.5" aria-hidden="true" />
                <span>Built for modern engineering teams</span>
              </div>

              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl"
                >
                  Ship code faster with AI-powered collaboration in one place
                </h1>
                <p className="max-w-xl text-base text-foreground/70 md:text-lg">
                  Repolith unifies repository context, pull request reviews,
                  issue triage, and assistant workflows so your team can focus
                  on shipping instead of switching tabs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="default">
                  <a href="#final-cta">
                    Start Free Trial
                    <ArrowRightIcon className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#product-demo">
                    <PlayIcon className="size-4" aria-hidden="true" />
                    Watch Demo
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {trustBadges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card-elevated px-2.5 py-1 text-xs text-foreground/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="border-b border-border/80 p-4">
                <CardTitle className="text-sm md:text-base">
                  Live Product Demo
                </CardTitle>
                <CardDescription>
                  See a complete review flow: repo overview → AI PR summary →
                  issue action.
                </CardDescription>
              </div>

              <CardContent className="p-3 md:p-4">
                <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-card-muted">
                  <video
                    className="h-full w-full object-cover"
                    src="/demo.mp4"
                    poster="/onboarding.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Repolith demo preview"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-2.5 py-1 text-xs text-foreground">
                    <PlayIcon className="size-3.5" aria-hidden="true" />
                    2-min product walkthrough
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-md border border-border bg-card-elevated p-3">
                    <p className="text-[11px] uppercase tracking-wide text-foreground/50">
                      Review speed
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Faster context
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card-elevated p-3">
                    <p className="text-[11px] uppercase tracking-wide text-foreground/50">
                      Collaboration
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Inline by default
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card-elevated p-3">
                    <p className="text-[11px] uppercase tracking-wide text-foreground/50">
                      AI assistance
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Ghost-ready
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
