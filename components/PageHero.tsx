import type { ReactNode } from "react";

const VARIANTS = {
  accent: { blob: "bg-accent", eyebrow: "border-white/20 bg-white/10 text-white" },
  violet: { blob: "bg-violet", eyebrow: "border-white/20 bg-white/10 text-white" },
  gold: { blob: "bg-gold", eyebrow: "border-white/20 bg-white/10 text-white" },
  ink: { blob: "bg-ink-500", eyebrow: "border-white/20 bg-white/10 text-white" },
} as const;

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "accent",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  variant?: keyof typeof VARIANTS;
  children?: ReactNode;
}) {
  const v = VARIANTS[variant];

  return (
    <section className="relative -mx-4 overflow-hidden rounded-b-3xl bg-ink-950 px-4 pb-8 pt-8 sm:-mx-6 sm:px-6">
      <div aria-hidden className={`pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl ${v.blob}`} />
      <div aria-hidden className={`pointer-events-none absolute -left-20 bottom-[-4rem] h-56 w-56 rounded-full opacity-20 blur-3xl ${v.blob}`} />
      <div className="relative mx-auto max-w-6xl">
        {eyebrow && (
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur ${v.eyebrow}`}>
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-2 max-w-3xl text-white/75">{description}</p>}
        {children}
      </div>
    </section>
  );
}
