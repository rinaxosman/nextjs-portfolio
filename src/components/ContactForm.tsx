"use client";

import { Github, Linkedin } from "lucide-react";
import { LINKS } from "@/lib/links";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    // 1 col on mobile; 2 cols on md+. The form spans the full width.
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Contact form — full width row */}
      <div className="md:col-span-2">
        <ContactForm />
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
    </div>
  );
}
