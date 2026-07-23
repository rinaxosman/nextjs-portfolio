"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/lib/links";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const email = (LINKS.emailto || "").replace(/^mailto:/, "");
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* Email */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <Mail className="shrink-0" />

          <div className="min-w-0">
            <div className="text-sm text-neutral-400">Email</div>
            <div className="truncate font-medium" title={email}>
              {email}
            </div>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            title="Copy to clipboard"
            className="ml-auto shrink-0 cursor-pointer rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Copy email to clipboard"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {/* LinkedIn */}
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
        aria-label="LinkedIn"
      >
        <Linkedin className="text-[#0A66C2] transition-colors duration-200" />
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

      {/* Contact form */}
      <div className="md:col-span-2 xl:col-span-3">
        <ContactForm />
      </div>
    </div>
  );
}