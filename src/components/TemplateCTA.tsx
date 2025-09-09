import { ExternalLink, Github } from "lucide-react";
import { LINKS } from "@/lib/links";
import { ACCENT } from "@/lib/constants";

export default function TemplateCTA() {
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
            href={LINKS.repo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 hover:bg-white/5"
          >
            Docs <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Tech stack overview */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7">
        <div className="text-sm text-neutral-300 mb-4">This site’s stack</div>
        <ul className="space-y-2 text-sm">
          <StackItem>Next.js (App Router) + React 18</StackItem>
          <StackItem>TypeScript</StackItem>
          <StackItem>Tailwind CSS</StackItem>
          <StackItem>Poppins via <code>next/font</code></StackItem>
          <StackItem>lucide-react (icons)</StackItem>
          <StackItem>Optional: <code>rss-parser</code> for Substack/Medium feed</StackItem>
          <StackItem>Deployed on Vercel</StackItem>
        </ul>
      </div>
    </div>
  );
}

function StackItem({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed text-neutral-300">• {children}</li>;
}