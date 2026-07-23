"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import { ACCENT } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function About() {
  // Snapshot chips shown inline; full grouped list revealed on expand
  const SNAPSHOT = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
    "MongoDB",
    "Git/GitHub",
  ];

  // Keep these in sync with the grouped lists below for an accurate “+N more”
  const TOTAL_ITEMS =
    4 /* FE */ + 3 /* BE */ + 4 /* Lang */ + 3 /* DevOps */ + 2 /* Data/Auth */;
  const remaining = Math.max(0, TOTAL_ITEMS - SNAPSHOT.length);

  const [stackOpen, setStackOpen] = useState(false);

  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      {/* Left: bio + skills */}
      <div className="md:col-span-2 space-y-5 text-neutral-300">
        <p>
          I’m Rina, a full-time <span className="font-semibold text-white">Software Developer </span> building secure, user-focused applications
  with React, TypeScript, Python, FastAPI, and SQL.
        </p>
        <p>
          I’ve completed internships across <span className="text-white font-medium">business analysis</span>,{" "}
          <span className="text-white font-medium">mobile app development</span>, and{" "}
          <span className="text-white font-medium">software development</span>, which gave me a solid view of the full
          product lifecycle from discovery to delivery.
        </p>

        {/* Snapshot row + toggle */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-sm font-semibold text-white">Tech stack</div>
          <div className="flex flex-wrap gap-2">
            {SNAPSHOT.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs text-neutral-300"
              >
                {t}
              </span>
            ))}

            {/* Toggle pill */}
            <button
  type="button"
  onClick={() => setStackOpen(v => !v)}
  aria-expanded={stackOpen}
  aria-controls="full-stack"
  className="group inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-medium transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2"
  style={{
    borderColor: ACCENT,
    color: ACCENT,
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.08)"
  }}
>
  <span>{stackOpen ? "Hide full stack" : `Show full stack${remaining ? ` (+${remaining})` : ""}`}</span>
  <ChevronDown
    className={`h-3.5 w-3.5 transition-transform duration-300 ${stackOpen ? "rotate-180" : ""}`}
    aria-hidden
  />
  
</button>

          </div>

          {/* Full grouped list (animated) */}
          <div
            id="full-stack"
            className={`overflow-hidden transition-[max-height,opacity,margin] duration-400 ease-out
              ${stackOpen ? "max-h-[1200px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <SkillGroup title="Frontend" items={["Next.js", "React", "Tailwind CSS", "shadcn/ui"]} />
              <SkillGroup title="Backend" items={["Node.js", "Next.js API Routes", "REST"]} />
              <SkillGroup title="Languages" items={["Python", "Java", "JavaScript", "TypeScript"]} />
              <SkillGroup title="Tooling & DevOps" items={["Git/GitHub", "Vercel", "CI basics"]} />
              <SkillGroup title="Data & Auth" items={["Firebase (Auth/Firestore/Storage)", "MongoDB"]} />
            </div>
          </div>
        </div>
      </div>

      {/* Right: cards */}
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text font-semibold" style={{ color: ACCENT }}>
            Currently I’m...
          </div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Building and shipping small projects</li>
            <li>• Creating custom websites for businesses</li>
            <li>• Exploring ML + product ideas</li>
            <li className="flex flex-wrap items-center gap-2">
              <span>• Researching and writing about tech, security, and society.</span>
              <a href="#blog" className="hidden md:inline underline hover:opacity-90" style={{ color: ACCENT }}>
                View the research section
              </a>
              <a href="#blog" className="md:hidden underline hover:opacity-90" style={{ color: ACCENT }}>
                View the research topics below
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text font-semibold" style={{ color: ACCENT }}>
            Outside of work I’m...
          </div>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            <li>Gym & volleyball</li>
            <li>Reading & writing</li>
            <li>Gaming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Helpers */
function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-white">{title}</div>
      <ul className="space-y-1">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2 text-sm">
            <Code2 size={16} style={{ color: ACCENT }} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
