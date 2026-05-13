"use client";

/* Inlined ArrowUpRight icon — avoids adding lucide-react as a dependency. */
function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

/* "Elsewhere I build" — the link-card row that surfaces external work
 * Jinwoong has shipped (CareMAR today; LinkedIn / GitHub / personal site
 * later by appending to FOUNDER_LINKS). Mirrors the aicollegeprep pattern
 * from components/sections/sub/FounderExternalLinks.tsx, restyled to match
 * the sidebarai navy + gold palette.
 *
 * Renders nothing if `links` is empty or undefined.                          */

export interface FounderLink {
  label: string;
  description: string;
  url: string;
}

export const FOUNDER_LINKS: FounderLink[] = [
  {
    label: "CareMAR",
    description:
      "Healthcare AI Jinwoong founded — software that helps small care homes and hospice facilities replace paper-based medication tracking with an AI-assisted app. Built specifically for non-technical operators in an industry governed by strict privacy rules. The same skillset Sidebar AI brings to law firms.",
    url: "https://caremar.us",
  },
];

interface FounderExternalLinksProps {
  links?: FounderLink[];
  className?: string;
  eyebrow?: string;
  /** "dark" renders for placement on a dark navy background; "light" for white. */
  variant?: "dark" | "light";
}

export default function FounderExternalLinks({
  links,
  className,
  eyebrow = "Elsewhere I build",
  variant = "light",
}: FounderExternalLinksProps) {
  if (!links || links.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <div data-testid="founder-links" className={className ?? "mt-8"}>
      <p
        className={`font-mono text-[11px] font-bold uppercase tracking-[0.12em] ${
          isDark ? "text-gold/80" : "text-navy"
        }`}
      >
        {eyebrow}
      </p>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="founder-link-card"
              className={`group flex h-full flex-col gap-1.5 rounded-xl border px-4 py-3.5 transition-all hover:-translate-y-[1px] ${
                isDark
                  ? "border-white/[0.08] bg-white/[0.04] hover:border-gold/40 hover:bg-white/[0.07] hover:shadow-[0_12px_24px_-12px_rgba(212,165,116,0.25)]"
                  : "border-neutral-200 bg-white hover:border-navy/40 hover:shadow-[0_12px_24px_-12px_rgba(30,58,95,0.25)]"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span
                  className={`font-serif text-base font-medium ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {link.label}
                </span>
                <ArrowUpRightIcon
                  className={`transition-colors ${
                    isDark
                      ? "text-neutral-400 group-hover:text-gold"
                      : "text-neutral-400 group-hover:text-navy"
                  }`}
                />
              </span>
              <span
                className={`text-sm leading-snug ${
                  isDark ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {link.description}
              </span>
              <span
                className={`mt-1 font-mono text-xs ${
                  isDark ? "text-gold" : "text-navy"
                }`}
              >
                {link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
