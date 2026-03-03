import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import ContactFormCard from "@/sections/contact/_components/contact-form-card";
import { GridPattern } from "@/sections/contact/_components/grid-pattern";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Request a demo or explore a partnership"
      description="Tell us about your team, repository workflow, and what you want to improve. We’ll follow up with a tailored Repolith walkthrough and next steps."
      className="flex justify-center overflow-hidden"
      badgeText="Get in touch"
      badgeIcon={<PaperPlaneIcon aria-hidden="true" className="size-3.5" />}
    >
      <ContactFormCard />
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
    </Section>
  );
}
