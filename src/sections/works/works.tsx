import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
  return (
    <Section
      id="works"
      title="See how Repolith streamlines repository workflows"
      description="Explore core product flows across repo overview, pull request reviews, issue triage, and delivery visibility."
      className="grid grid-cols-1 gap-4"
      badgeText="Repository workflows"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
}
