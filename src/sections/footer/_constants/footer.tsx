const IconGithub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>GitHub Logo</title>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.604-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.46 11.46 0 0 1 12 6.844c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12Z" />
  </svg>
);

const IconGlobe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <title>Website</title>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.7 2.3 4.2 5.6 4.2 9S14.7 18.7 12 21c-2.7-2.3-4.2-5.6-4.2-9S9.3 5.3 12 3Z" />
  </svg>
);

const IconIssues = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <title>Issues</title>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6" />
    <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const footerLinks: FooterLink[] = [
  { label: "Hero", href: "#hero" },
  { label: "Product Demo", href: "#product-demo" },
  { label: "Problem → Solution", href: "#problem-solution" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Social Proof", href: "#social-proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "Get Started", href: "#final-cta" },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/radityprtama/repolith",
    icon: IconGithub,
  },
  {
    label: "Website",
    href: "https://better-hub.com",
    icon: IconGlobe,
  },
  {
    label: "Report an Issue",
    href: "https://github.com/better-auth/better-hub/issues",
    icon: IconIssues,
  },
];
