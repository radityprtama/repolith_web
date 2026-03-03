type MetaTag = {
  charSet?: string;
  name?: string;
  content?: string;
  property?: string;
  title?: string;
};

type LinkTag = {
  rel: string;
  href: string;
  as?: string;
  type?: string;
  sizes?: string;
  media?: string;
};

type ScriptTag = {
  type?: string;
  children?: string;
  src?: string;
  defer?: boolean;
  async?: boolean;
};

export type HeadTags = {
  meta?: MetaTag[];
  links?: LinkTag[];
  scripts?: ScriptTag[];
};

export type BlogSeoPayload = {
  slug: string;
  title: string;
  excerpt?: string;
  tags?: string[];
  date?: string;
};

const SITE_URL = "https://better-hub.com";
const SITE_NAME = "Repolith";
const DEFAULT_TITLE =
  "Repolith — Re-imagining code collaboration for humans and agents";
const DEFAULT_DESCRIPTION =
  "Repolith is a better place to collaborate on code. Streamline repo overview, PR reviews, issue management, and AI-assisted developer workflows.";
const DEFAULT_KEYWORDS = [
  "Repolith",
  "code collaboration",
  "pull request review",
  "AI code assistant",
  "developer productivity",
  "repository management",
  "issue triage",
  "GitHub workflow",
];
const AUTHOR = "Repolith Team";
const CONTACT_EMAIL = "hello@better-hub.com";
const SOCIAL_PROFILES = ["https://github.com/radityprtama/repolith"];

export const absoluteUrl = (path = "/") => {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return new URL(path, SITE_URL).toString();
};

const DEFAULT_IMAGE = absoluteUrl("/og-image.jpg");
const DEFAULT_LOGO = absoluteUrl("/favicon.svg");

export const siteMetadata = {
  siteName: SITE_NAME,
  baseUrl: SITE_URL,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  author: AUTHOR,
  email: CONTACT_EMAIL,
  socialProfiles: SOCIAL_PROFILES,
  defaultOgImage: DEFAULT_IMAGE,
};

const defaultJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  image: DEFAULT_IMAGE,
  url: absoluteUrl("/"),
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  sameAs: SOCIAL_PROFILES,
  featureList: [
    "Repo overview with README and file tree context",
    "AI-powered pull request summaries",
    "Inline diff reviews and collaboration",
    "Issue triage and management",
    "Keyboard-first command center",
    "CI/CD status visibility",
    "Security advisory tracking",
  ],
};

export function getRootSeo(): HeadTags {
  const canonical = absoluteUrl("/");
  const meta: MetaTag[] = [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: DEFAULT_TITLE },
    { name: "description", content: DEFAULT_DESCRIPTION },
    { name: "keywords", content: DEFAULT_KEYWORDS.join(", ") },
    { name: "author", content: AUTHOR },
    { name: "robots", content: "index,follow" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: canonical },
    { property: "og:title", content: DEFAULT_TITLE },
    { property: "og:description", content: DEFAULT_DESCRIPTION },
    { property: "og:image", content: DEFAULT_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: canonical },
    { property: "twitter:title", content: DEFAULT_TITLE },
    { property: "twitter:description", content: DEFAULT_DESCRIPTION },
    { property: "twitter:image", content: DEFAULT_IMAGE },
  ];

  const links: LinkTag[] = [
    { rel: "canonical", href: canonical },
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
      rel: "icon",
      href: "/favicon-16x16.svg",
      type: "image/svg+xml",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.svg",
      type: "image/svg+xml",
    },
  ];

  const scripts: ScriptTag[] = [
    {
      type: "application/ld+json",
      children: JSON.stringify(defaultJsonLd),
    },
  ];

  return { meta, links, scripts };
}

const getIsoDate = (input?: string) => {
  if (!input) return undefined;
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
};

export function getBlogPostSeo(post: BlogSeoPayload): HeadTags {
  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const description = post.excerpt?.trim() || DEFAULT_DESCRIPTION;
  const keywords =
    post.tags && post.tags.length > 0
      ? post.tags.join(", ")
      : DEFAULT_KEYWORDS.join(", ");
  const isoDate = getIsoDate(post.date);

  const meta: MetaTag[] = [
    { title: `${post.title} | Repolith Insights` },
    { name: "description", content: description },
    { name: "author", content: AUTHOR },
    { name: "keywords", content: keywords },
    { property: "og:type", content: "article" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: canonical },
    { property: "og:title", content: post.title },
    { property: "og:description", content: description },
    { property: "og:image", content: DEFAULT_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: canonical },
    { property: "twitter:title", content: post.title },
    { property: "twitter:description", content: description },
    { property: "twitter:image", content: DEFAULT_IMAGE },
  ];

  if (isoDate) {
    meta.push(
      { property: "article:published_time", content: isoDate },
      { property: "article:modified_time", content: isoDate },
    );
  }

  (post.tags ?? []).forEach((tag) => {
    if (tag && tag.trim().length > 0) {
      meta.push({ property: "article:tag", content: tag });
    }
  });

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    headline: post.title,
    description,
    image: DEFAULT_IMAGE,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: AUTHOR,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_LOGO,
      },
    },
    keywords:
      post.tags && post.tags.length > 0 ? post.tags.join(", ") : undefined,
  };

  const links: LinkTag[] = [{ rel: "canonical", href: canonical }];
  const scripts: ScriptTag[] = [
    {
      type: "application/ld+json",
      children: JSON.stringify(blogJsonLd),
    },
  ];

  return { meta, links, scripts };
}
