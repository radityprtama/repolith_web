export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is Repolith?",
    answer:
      "Repolith is a code collaboration platform designed for humans and AI agents. It improves repo overview, pull request reviews, issue triage, and day-to-day developer workflows.",
  },
  {
    question: "How is Repolith different from a standard Git hosting UI?",
    answer:
      "Repolith focuses on clarity and speed: cleaner repository context, AI-assisted PR summaries, keyboard-first navigation, and workflows that reduce context switching for engineering teams.",
  },
  {
    question: "What can Ghost (AI assistant) help with?",
    answer:
      "Ghost can help review pull requests, navigate code, triage issues, and draft commit messages. It is built to accelerate repetitive collaboration tasks while keeping humans in control.",
  },
  {
    question: "Do I need to change my existing Git workflow to adopt Repolith?",
    answer:
      "No. Teams can adopt Repolith incrementally and keep familiar repository practices. The platform is designed to enhance existing collaboration loops rather than force a full process rewrite.",
  },
  {
    question: "Can Repolith help speed up pull request reviews?",
    answer:
      "Yes. Repolith combines inline diffs, focused discussion threads, and AI-generated summaries so reviewers can understand intent faster and provide higher-quality feedback with less friction.",
  },
  {
    question: "Does Repolith support keyboard-first usage?",
    answer:
      "Absolutely. Repolith includes shortcuts and command-center style navigation to help power users search, switch context, and execute actions without constant mouse-heavy interactions.",
  },
  {
    question: "What visibility does Repolith provide beyond PRs?",
    answer:
      "Repolith also surfaces repository activity, issue management workflows, CI/CD status, and security advisory context, helping teams make better release decisions in one place.",
  },
  {
    question: "How can our team start evaluating Repolith?",
    answer:
      "Use the contact section to request a demo or implementation walkthrough. We can map Repolith to your current review and triage process and outline an adoption path for your team.",
  },
];

export const faqItemsMobile: FaqItem[] = [
  {
    question: "What is Repolith?",
    answer:
      "A collaboration platform for code, built for both humans and AI agents.",
  },
  {
    question: "How does it improve Git workflows?",
    answer:
      "It adds clearer repo context, faster PR reviews, and less context switching.",
  },
  {
    question: "What does Ghost do?",
    answer:
      "Ghost helps with PR review, issue triage, code navigation, and commit drafting.",
  },
  {
    question: "Can we adopt it gradually?",
    answer:
      "Yes, Repolith is designed for incremental adoption with existing team workflows.",
  },
  {
    question: "Will it speed up PR reviews?",
    answer:
      "Yes, AI summaries and focused inline collaboration reduce review cycle time.",
  },
  {
    question: "Is it keyboard-friendly?",
    answer: "Yes, shortcuts and command-center navigation are built in.",
  },
  {
    question: "Does it include CI/CD and security context?",
    answer:
      "Yes, it surfaces workflow and advisory signals alongside code collaboration.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a demo through the contact form to plan rollout for your team.",
  },
];
