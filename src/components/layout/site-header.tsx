import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/lib/site-config";

const primaryNavigation = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Labs",
    href: "/labs",
  },
  {
    label: "Writing",
    href: "/writing",
  },
  {
    label: "About",
    href: "/about",
  },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container className="flex min-h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} homepage`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-[var(--border)] font-mono text-sm font-semibold"
          >
            DS
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-semibold">
              {siteConfig.name}
            </span>

            <span className="hidden text-xs text-[var(--muted-foreground)] sm:block">
              Building one piece at a time.
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 md:flex"
          >
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            GitHub
          </a>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
