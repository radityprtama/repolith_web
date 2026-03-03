import { CubeIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import ShowcaseCard from "@/sections/showcase/_components/showcase-card";
import { showcaseHighlights } from "@/sections/showcase/_constants/showcase";

export default function Showcase() {
  return (
    <Section
      id="showcase"
      title="See AI-assisted pull request reviews in action"
      description="Explore how Repolith combines inline diffs, concise AI summaries, and collaboration context to help teams review changes faster and ship with confidence."
      className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-[220px]"
      badgeText="PR Experience"
      badgeIcon={<CubeIcon aria-hidden="true" className="size-3.5" />}
    >
      {showcaseHighlights.map(
        ({ className, title, description, src, poster }) => (
          <div key={title} className={cn("w-full", className)}>
            <ShowcaseCard
              title={title}
              description={description}
              src={src}
              poster={poster}
            />
          </div>
        ),
      )}
    </Section>
  );
}
