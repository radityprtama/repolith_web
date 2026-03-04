"use client";

import type { ComponentType } from "react";
import {
  ChevronDownIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { LogoIcon } from "@/components/icons/logo-icon";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLenis } from "@/lib/lenis-context";
import { cn } from "@/lib/utils";

type DropdownKey = "product" | "solutions" | "resources";

type NavItem = {
  label: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

type NavSection = {
  heading: string;
  items: NavItem[];
};

type ProductConfig = {
  label: string;
  columns: NavSection[];
  featured: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

type SolutionsConfig = {
  label: string;
  byTeam: NavItem[];
  byUseCase: NavItem[];
};

type ResourcesConfig = {
  label: string;
  items: NavItem[];
};

const IconSpark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l2.3 4.7L19 10l-4.7 2.3L12 17l-2.3-4.7L5 10l4.7-2.3L12 3z" />
  </svg>
);

const IconHome = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" />
  </svg>
);

const IconLink = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 14l-2 2a3 3 0 1 1-4-4l2-2" />
    <path d="M14 10l2-2a3 3 0 1 1 4 4l-2 2" />
    <path d="M8 12h8" />
  </svg>
);

const IconCode = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

const IconShield = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l7 3v6c0 5-3.4 8.7-7 10-3.6-1.3-7-5-7-10V6l7-3z" />
  </svg>
);

const IconGear = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 15a7.8 7.8 0 0 0 .1-1 7.8 7.8 0 0 0-.1-1l2-1.5-2-3.5-2.4.6a7.6 7.6 0 0 0-1.7-1l-.4-2.5h-4l-.4 2.5c-.6.2-1.2.6-1.7 1l-2.4-.6-2 3.5 2 1.5a7.8 7.8 0 0 0-.1 1 7.8 7.8 0 0 0 .1 1l-2 1.5 2 3.5 2.4-.6c.5.4 1.1.8 1.7 1l.4 2.5h4l.4-2.5c.6-.2 1.2-.6 1.7-1l2.4.6 2-3.5-2-1.5z" />
  </svg>
);

const IconBuilding = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7a1 1 0 0 1 1-1h4v15" />
    <path d="M10 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17" />
    <path d="M7 10h1M7 13h1M7 16h1M13 7h1M16 7h1M13 10h1M16 10h1M13 13h1M16 13h1" />
  </svg>
);

const IconBook = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
    <path d="M8 7h7" />
    <path d="M8 11h7" />
  </svg>
);

const IconDoc = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M14 3v6h6" />
    <path d="M8 13h8M8 17h8" />
  </svg>
);

const IconChat = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 14a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
  </svg>
);

const NAV = {
  product: {
    label: "Product",
    columns: [
      {
        heading: "Platform",
        items: [
          {
            icon: IconHome,
            label: "Overview",
            description: "The complete picture of your workflow.",
            href: "#product-demo",
          },
          {
            icon: IconSpark,
            label: "Features",
            description: "Everything included in the platform.",
            href: "#features",
          },
          {
            icon: IconLink,
            label: "Integrations",
            description: "Connect your current stack quickly.",
            href: "#how-it-works",
          },
        ],
      },
      {
        heading: "Developers",
        items: [
          {
            icon: IconCode,
            label: "API & Developers",
            description: "Extend and automate with dev-friendly APIs.",
            href: "#how-it-works",
          },
          {
            icon: IconShield,
            label: "Security",
            description: "Built for secure collaboration at scale.",
            href: "#problem-solution",
          },
        ],
      },
    ],
    featured: {
      badge: "New",
      title: "Autopilot Reviews",
      description:
        "Let Repolith summarize and prioritize PRs so your team can merge faster.",
      cta: "Learn more",
      href: "#product-demo",
    },
  } as ProductConfig,
  solutions: {
    label: "Solutions",
    byTeam: [
      {
        icon: IconGear,
        label: "Engineering",
        description: "Ship faster with less review friction.",
        href: "#social-proof",
      },
      {
        icon: IconSpark,
        label: "Product",
        description: "Keep delivery aligned to roadmap goals.",
        href: "#how-it-works",
      },
      {
        icon: IconCode,
        label: "DevOps",
        description: "Operational visibility across releases.",
        href: "#problem-solution",
      },
      {
        icon: IconBuilding,
        label: "Enterprise",
        description: "Scale governance and team collaboration.",
        href: "#pricing",
      },
    ],
    byUseCase: [
      {
        icon: IconDoc,
        label: "Startups",
        description: "Move quickly from launch to scale.",
        href: "#how-it-works",
      },
      {
        icon: IconDoc,
        label: "Scale-ups",
        description: "Control complexity without slowing teams.",
        href: "#problem-solution",
      },
      {
        icon: IconDoc,
        label: "Agencies",
        description: "Manage multiple client repos efficiently.",
        href: "#pricing",
      },
    ],
  } as SolutionsConfig,
  resources: {
    label: "Resources",
    items: [
      {
        icon: IconBook,
        label: "Documentation",
        description: "Guides, references, and quick starts.",
        href: "#resources-documentation",
      },
      {
        icon: IconDoc,
        label: "Blog",
        description: "Product updates and engineering insights.",
        href: "#resources-blog",
      },
      {
        icon: IconSpark,
        label: "Changelog",
        description: "Track what shipped each release.",
        href: "#resources-changelog",
      },
      {
        icon: IconChat,
        label: "Help Center",
        description: "Answers to common setup questions.",
        href: "#faq",
      },
      {
        icon: IconBuilding,
        label: "Community",
        description: "Join users and contributors.",
        href: "#resources-community",
      },
    ],
  } as ResourcesConfig,
};

function DesktopItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (href: string) => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.href)}
      className="group flex w-full items-start gap-3 rounded-md border border-transparent px-2 py-2 text-left transition-all duration-200 hover:border-border hover:bg-card-muted/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/60"
    >
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-card-elevated">
        <Icon className="size-4 text-foreground/75" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-medium text-foreground">
          {item.label}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-foreground/65">
          {item.description}
        </span>
      </span>
    </button>
  );
}

function ProductDropdown({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="w-[min(92vw,42rem)] rounded-xl border border-border/80 bg-card/95 p-3 shadow-xl backdrop-blur-xl">
      <div className="grid gap-3 md:grid-cols-[1.4fr_.8fr]">
        <div className="grid gap-3 md:grid-cols-2">
          {NAV.product.columns.map((column) => (
            <div key={column.heading}>
              <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
                {column.heading}
              </p>
              <div className="space-y-1">
                {column.items.map((item) => (
                  <DesktopItem
                    key={item.label}
                    item={item}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border/80 bg-card-elevated p-3">
          <span className="inline-flex rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/70">
            {NAV.product.featured.badge}
          </span>
          <p className="mt-2 text-sm font-semibold text-foreground">
            {NAV.product.featured.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/65">
            {NAV.product.featured.description}
          </p>
          <button
            type="button"
            onClick={() => onNavigate(NAV.product.featured.href)}
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-foreground/75"
          >
            {NAV.product.featured.cta} →
          </button>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="w-[min(92vw,36rem)] rounded-xl border border-border/80 bg-card/95 p-3 shadow-xl backdrop-blur-xl">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
            By Team
          </p>
          <div className="space-y-1">
            {NAV.solutions.byTeam.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
            By Use Case
          </p>
          <div className="space-y-1">
            {NAV.solutions.byUseCase.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="w-[min(92vw,22rem)] rounded-xl border border-border/80 bg-card/95 p-3 shadow-xl backdrop-blur-xl">
      <div className="space-y-1">
        {NAV.resources.items.map((item) => (
          <DesktopItem key={item.label} item={item} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border/80 bg-card-elevated">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-foreground"
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (href: string) => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.href)}
      className="flex w-full items-start gap-2 rounded-md px-2 py-2 text-left hover:bg-card-muted"
    >
      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-card">
        <Icon className="size-3.5 text-foreground/75" />
      </span>
      <span className="text-sm text-foreground">{item.label}</span>
    </button>
  );
}

export function Navbar() {
  const { scrollTo } = useLenis();
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<DropdownKey | null>(
    "product",
  );

  const closeTimerRef = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileDrawerId = useId();

  const onNavigate = useCallback(
    (href: string) => {
      setActiveDropdown(null);
      setMobileOpen(false);
      if (href.startsWith("#")) {
        scrollTo(href);
        return;
      }
      window.location.href = href;
    },
    [scrollTo],
  );

  const openDropdown = useCallback((name: DropdownKey) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    setActiveDropdown(name);
  }, []);

  const closeDropdown = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);

  const keepOpen = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed inset-x-0 top-2 z-50 px-2 md:px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative flex h-12 items-center rounded-xl border border-border/80 bg-card/85 px-3 shadow-sm backdrop-blur-md">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("#hero");
              }}
              className="flex min-w-0 flex-1 items-center gap-2 text-sm font-semibold text-foreground"
              aria-label="Homepage"
            >
              <LogoIcon className="h-4 w-7 text-foreground" />
              <span>Repolith</span>
            </a>

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div
                className="pointer-events-auto flex items-center gap-1"
                role="menubar"
              >
                <div
                  onMouseEnter={() => openDropdown("product")}
                  onMouseLeave={closeDropdown}
                  className="relative"
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200",
                      activeDropdown === "product"
                        ? "bg-card-muted text-foreground"
                        : "text-foreground/75 hover:bg-card-muted hover:text-foreground",
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "product"}
                  >
                    Product
                    <ChevronDownIcon
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        activeDropdown === "product" && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 transition-all duration-200",
                      activeDropdown === "product"
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0",
                    )}
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeDropdown}
                  >
                    {activeDropdown === "product" ? (
                      <div className="pointer-events-auto">
                        <ProductDropdown onNavigate={onNavigate} />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  onMouseEnter={() => openDropdown("solutions")}
                  onMouseLeave={closeDropdown}
                  className="relative"
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200",
                      activeDropdown === "solutions"
                        ? "bg-card-muted text-foreground"
                        : "text-foreground/75 hover:bg-card-muted hover:text-foreground",
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "solutions"}
                  >
                    Solutions
                    <ChevronDownIcon
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        activeDropdown === "solutions" && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 transition-all duration-200",
                      activeDropdown === "solutions"
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0",
                    )}
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeDropdown}
                  >
                    {activeDropdown === "solutions" ? (
                      <div className="pointer-events-auto">
                        <SolutionsDropdown onNavigate={onNavigate} />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  onMouseEnter={() => openDropdown("resources")}
                  onMouseLeave={closeDropdown}
                  className="relative"
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200",
                      activeDropdown === "resources"
                        ? "bg-card-muted text-foreground"
                        : "text-foreground/75 hover:bg-card-muted hover:text-foreground",
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === "resources"}
                  >
                    Resources
                    <ChevronDownIcon
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        activeDropdown === "resources" && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 transition-all duration-200",
                      activeDropdown === "resources"
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0",
                    )}
                    onMouseEnter={keepOpen}
                    onMouseLeave={closeDropdown}
                  >
                    {activeDropdown === "resources" ? (
                      <div className="pointer-events-auto">
                        <ResourcesDropdown onNavigate={onNavigate} />
                      </div>
                    ) : null}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("#pricing")}
                  className="rounded-md px-2.5 py-1.5 text-sm text-foreground/75 transition-colors duration-200 hover:bg-card-muted hover:text-foreground"
                >
                  Pricing
                </button>
              </div>
            </div>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 md:flex">
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                onClick={() => onNavigate("https://app.repolith.my.id")}
              >
                Start Free Trial
              </Button>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="icon"
                size="sm"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls={mobileDrawerId}
              >
                <HamburgerMenuIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px] transition-opacity duration-200 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <aside
        id={mobileDrawerId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[70] w-[min(22rem,92vw)] border-l border-border/80 bg-card p-4 shadow-2xl transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <LogoIcon className="h-4 w-7 text-foreground" />
            <span>Repolith</span>
          </div>
          <Button
            variant="icon"
            size="sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <Cross2Icon className="size-4" />
          </Button>
        </div>

        <div className="mt-3 space-y-2 overflow-y-auto pb-24">
          <MobileSection
            label="Product"
            open={mobileSection === "product"}
            onToggle={() =>
              setMobileSection((prev) =>
                prev === "product" ? null : "product",
              )
            }
          >
            <div className="space-y-1 px-2 pb-2">
              {NAV.product.columns.map((section) => (
                <div key={section.heading}>
                  <p className="pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
                    {section.heading}
                  </p>
                  {section.items.map((item) => (
                    <MobileItem
                      key={item.label}
                      item={item}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              ))}
            </div>
          </MobileSection>

          <MobileSection
            label="Solutions"
            open={mobileSection === "solutions"}
            onToggle={() =>
              setMobileSection((prev) =>
                prev === "solutions" ? null : "solutions",
              )
            }
          >
            <div className="space-y-1 px-2 pb-2">
              <p className="pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
                By Team
              </p>
              {NAV.solutions.byTeam.map((item) => (
                <MobileItem
                  key={item.label}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
              <p className="pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
                By Use Case
              </p>
              {NAV.solutions.byUseCase.map((item) => (
                <MobileItem
                  key={item.label}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </MobileSection>

          <MobileSection
            label="Resources"
            open={mobileSection === "resources"}
            onToggle={() =>
              setMobileSection((prev) =>
                prev === "resources" ? null : "resources",
              )
            }
          >
            <div className="space-y-1 px-2 pb-2 pt-1">
              {NAV.resources.items.map((item) => (
                <MobileItem
                  key={item.label}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </MobileSection>

          <button
            type="button"
            onClick={() => onNavigate("#pricing")}
            className="w-full rounded-lg border border-border/80 bg-card-elevated px-3 py-2.5 text-left text-sm font-medium text-foreground"
          >
            Pricing
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-border/80 bg-card p-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center"
            onClick={() => onNavigate("#contact")}
          >
            Log in
          </Button>
          <Button
            variant="default"
            size="md"
            className="mt-2 w-full justify-center"
            onClick={() => onNavigate("#final-cta")}
          >
            Start Free Trial
          </Button>
        </div>
      </aside>
    </>
  );
}
