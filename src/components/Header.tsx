import { FileText } from "lucide-react";
import { ACCENT } from "@/lib/constants";
import { LINKS } from "@/lib/links";

export default function Header() {
  const items: [string, string][] = [
    ["About", "#about"],
    ["Resume", "#resume"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: ACCENT }} />
          <span>Rina Osman</span>
          <span className="text-neutral-400">/ Software Developer</span>
        </a>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          {items.map(([label, href]) => (
            <a key={href} href={href} className="hover:opacity-90">
              {label}
            </a>
          ))}
          <a
            href={LINKS.resume}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/5"
          >
            <FileText size={16} /> CV
          </a>
        </nav>
      </div>
    </header>
  );
}
