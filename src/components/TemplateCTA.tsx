"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { LINKS } from "@/lib/links";
import { ACCENT } from "@/lib/constants";

const STACK: string[] = [
  "Next.js (App Router) + React 18",
  "TypeScript",
  "Tailwind CSS",
  "Poppins via next/font",
  "lucide-react (icons)",
  "Optional: rss-parser for Substack/Medium feed",
  "Deployed on Vercel",
];

export default function TemplateCTA() {
  const [open, setOpen] = useState(false);
  const preview = STACK.slice(0, 3);
  const remaining = Math.max(0, STACK.length - preview.length);

  return (
    <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
      {/* CTA card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
        <h3 className="text-xl font-semibold">Use this template</h3>
        <p className="mt-2 text-neutral-300">
          Want to start from this portfolio? Grab the codebase and ship your own
          dark, componentized site in minutes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={LINKS.repo}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium text-neutral-950"
            style={{ backgroundColor: ACCENT }}
          >
            <Github size={18} /> View repo
          </a>
          <a
            href={(LINKS as any).readme || LINKS.repo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 hover:bg-white/5"
          >
            Docs <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Tech stack (single chip row that expands inline) */}
      <div className="rounded-2xl border border-white/10 bg-white/5">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(v => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(v => !v);
            }
          }}
          aria-expanded={open}
          aria-controls="stack-chips"
          className="w-full p-6 md:p-7 text-left flex items-start justify-between gap-4
               select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          <div className="min-w-0">
            <div className="font-medium text-neutral-200">This site’s stack</div>

            {/* Only the chips container height animates */}
            <div
              id="stack-chips"
              className={`mt-2 overflow-hidden transition-[max-height] duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${open ? "max-h-48 md:max-h-64" : "max-h-8"}`}
            >
              <div className="flex flex-wrap gap-2">
                {(open ? STACK : preview).map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}

                {!open && remaining > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpen(true);
                      }
                    }}
                    className="inline-flex items-center gap-1 rounded-full border border-white/15
                         bg-white/5 px-3 py-1 text-xs text-neutral-300
                         hover:bg-white/10 hover:text-white cursor-pointer
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label={`Show ${remaining} more stack items`}
                    title="Show full stack"
                  >
                    + {remaining} more
                    <ChevronDown className="h-3 w-3 opacity-80" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-sm text-neutral-300">
            <span className="hidden sm:inline">{open ? "Hide stack" : "Show stack"}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}