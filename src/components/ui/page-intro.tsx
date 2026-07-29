import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <div className="max-w-2xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
      >
        <span aria-hidden="true">←</span>
        Back to dashboard
      </Link>

      <p className="mt-8 font-mono text-sm text-[var(--accent)]">
        {eyebrow}
      </p>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h1>

      <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
        {description}
      </p>
    </div>
  );
}
