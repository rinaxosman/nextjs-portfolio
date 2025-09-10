"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/lib/links";
import { useState } from "react";

export default function Contact() {
  const email = (LINKS.email || "").replace(/^mailto:/, "");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    } finally {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  };

  return (
    // 1 col by default, 2 cols ≥768px, 3 cols ≥1280px
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* Email card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <Mail className="shrink-0" />
          {/* min-w-0 + truncate prevents wrapping */}
          <div className="min-w-0">
            <div className="text-sm text-neutral-400">Email</div>
            <div className="font-medium truncate" title={email}>
              {email}
            </div>
          </div>

          <button
            onClick={copyEmail}
            title="Copy to clipboard"
            className="ml-auto shrink-0 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5 cursor-pointer active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Copy email to clipboard"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* If you want a compose button only on small screens, uncomment:
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5 md:hidden"
        >
          Compose <Mail className="h-4 w-4" />
        </a>
        */}
      </div>

      {/* LinkedIn */}
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        aria-label="LinkedIn"
      >
        <Linkedin className="text-[#0A66C2] transition-colors duration-200 " />
        <span className="transition-colors">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        aria-label="GitHub"
      >
        <Github className="transition-colors duration-200 group-hover:text-white" />
        <span>GitHub</span>
      </a>
    </div>
  );
}
