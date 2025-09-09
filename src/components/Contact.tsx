"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/lib/links";
import { useState } from "react";

export default function Contact() {
  // strip any "mailto:" if you added it in LINKS
  const email = (LINKS.email || "").replace(/^mailto:/, "");
  // const mailHref = `mailto:${email}`;

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // small fallback for older browsers
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  };

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {/* Email card (shows address + actions) */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Mail className="shrink-0" />
            <div>
              <div className="text-sm text-neutral-400">Email</div>
              <div className="font-medium break-all">{email}</div>
            </div>
          </div>

          <button
            onClick={copyEmail}
            className="rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
            aria-label="Copy email to clipboard"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* <a
          href={mailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
          aria-label="Compose email"
        >
          Compose <Mail className="h-4 w-4" />
        </a> */}
      </div>

      {/* LinkedIn */}

<a
  href={LINKS.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
  aria-label="LinkedIn"
>
  <Linkedin className="text-[#0A66C2]" />
  <span className="transition-colors group-hover:text-[#0A66C2]">LinkedIn</span>
</a>


      {/* GitHub */}
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        aria-label="GitHub"
      >
        <Github /> <span>GitHub</span>
      </a>
    </div>
  );
}
