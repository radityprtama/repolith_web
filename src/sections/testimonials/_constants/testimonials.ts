export interface TestimonialType {
  content: string;
  author: string;
  position: string;
  imageSrc: string;
}

export const testimonials: TestimonialType[] = [
  {
    content:
      "Repolith made PR review dramatically faster for our team. The AI summaries give immediate context, and inline comments keep discussions focused.",
    author: "Maya Chen",
    position: "Engineering Manager, SaaS Platform",
    imageSrc: "/placeholder-2.jpg",
  },
  {
    content:
      "The repo overview is clean and actually useful. New contributors ramp up quicker because they can understand project structure and activity at a glance.",
    author: "Jonas Ribeiro",
    position: "Staff Engineer, Developer Tools",
    imageSrc: "/placeholder-2.jpg",
  },
  {
    content:
      "Ghost has become part of our daily workflow. We use it to triage issues, summarize changes, and draft commit messages without breaking flow.",
    author: "Aisha Patel",
    position: "Tech Lead, Product Engineering",
    imageSrc: "/placeholder-2.jpg",
  },
  {
    content:
      "Keyboard-first navigation and command center search save us a surprising amount of time every day. The UX feels built for real engineering teams.",
    author: "Liam O'Connor",
    position: "Senior Frontend Engineer, B2B Startup",
    imageSrc: "/placeholder-2.jpg",
  },
  {
    content:
      "We moved code reviews from 'necessary friction' to a collaborative process. Repolith helps reviewers focus on risks and decisions, not busywork.",
    author: "Nina Alvarez",
    position: "Principal Engineer, Platform Team",
    imageSrc: "/placeholder-2.jpg",
  },
];
