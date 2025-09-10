"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Copy, ExternalLink } from "lucide-react";
import { ACCENT } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import type { CSSProperties } from "react";

const accentStyle: CSSProperties & Record<"--accent", string> = {
  "--accent": ACCENT,
};


export function Hero() {
  // normalize email + mailto
  const email = (LINKS.email || "").replace(/^mailto:/, "");
  const mailHref = `mailto:${email}`;

  // popover state
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null);

  // close on outside click / Esc
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onEsc);
    }
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1130px] px-6 sm:px-8 lg:px-10 xl:px-6 py-20 md:py-28">

        <div className="grid md:grid-cols-2 items-center gap-y-10 sm:gap-y-12 md:gap-y-0">
          {/* Left: Photo + Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* bigger, crisp avatar */}
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 lg:h-48 lg:w-48 rounded-full overflow-hidden ring-2 ring-white/10 mb-5">
              <Image
                src="/portrait.jpg"
                alt="Rina Osman"
                fill
                priority
                quality={95}
                sizes="(min-width:1024px) 12rem, (min-width:640px) 11rem, 10rem"
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold">Rina Osman</h2>
            <p className="text-neutral-400 text-sm mt-1 tracking-wide uppercase">Software Developer</p>
            <p className="text-neutral-400 text-xs tracking-wide">BSc Computer Science</p>

            {/* Socials */}
            <div className="flex gap-4 mt-4 text-neutral-300" style={accentStyle}>
              {/* LinkedIn (brand blue -> white on hover) */}
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={30}
                  className="text-[#0A66C2] transition-colors duration-200 group-hover:text-white"
                />
              </a>

              {/* Email (mailto on small screens, popover on sm+) */}
              <div className="relative">
                {/* Small screens: just mailto */}
                <a
                  href={mailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden group cursor-pointer"
                  aria-label="Email"
                >
                  <Mail
                    size={30}
                    className="text-[var(--accent)] transition-colors duration-200 group-hover:text-white"
                  />
                </a>

                {/* sm and up: button + popover */}
                <button
                  type="button"
                  onClick={() => setOpen(v => !v)}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  className="hidden sm:block group cursor-pointer"
                  aria-label="Email options"
                >
                  <Mail
                    size={30}
                    className="text-[var(--accent)] transition-colors duration-200 group-hover:text-white"
                  />
                </button>

                {/* Popover with smooth transition */}
                <div
                  ref={popRef}
                  role="menu"
                  className={[
                    "hidden sm:block absolute -top-3 left-1/2 -translate-x-1/2",
                    "rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur px-3 py-2",
                    "shadow-lg ring-1 ring-white/10 origin-bottom",
                    "transition-all duration-200 ease-out",
                    open
                      ? "opacity-100 scale-100 -translate-y-[110%] pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-[90%] pointer-events-none",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
                      role="menuitem"
                      aria-label="Copy email"
                    >
                      <Copy className="h-4 w-4" />
                      {copied ? "Copied" : "Copy"}
                    </button>

                    <a
                      href={mailHref}
                      onClick={() => setOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
                      role="menuitem"
                      aria-label="Compose email"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Compose
                    </a>
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900/95 border-r border-b border-white/10 transition-opacity duration-200" />
                </div>
              </div>

              {/* GitHub (accent -> white on hover) */}
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <Github
                  size={30}
                  className="text-[var(--accent)] transition-colors duration-200 group-hover:text-white"
                />
              </a>
            </div>

          </div>

          {/* Right: Hello + Intro */}
          <div className="mt-8 sm:mt-10 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Hello,</h1>
            <p className="mt-8 max-w-xl text-neutral-300">
              I turn fuzzy ideas into shipped products—web apps, data pipelines, and cybersecurity tooling.
            </p>
            <p className="mt-8 max-w-xl text-neutral-300">
              I care about clean systems, clear UX, and measurable impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium text-neutral-950 transform transition-transform duration-300 hover:scale-102 hover:shadow-[0_0_12px_rgba(128,112,255,0.6)]"
                style={{ backgroundColor: ACCENT }}
              >
                Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 hover:bg-white/5"
              >
                Projects <ArrowRight size={16} />
              </a>
              <a
                href="#template"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 hover:bg-white/5"
              >
                Use my template <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
