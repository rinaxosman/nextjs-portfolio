import { ArrowRight } from "lucide-react";
import { ACCENT } from "@/lib/constants";

export default function BlogPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: ACCENT }} />
        <div className="font-medium">Latest posts</div>
      </div>
      <p className="mt-2 text-sm text-neutral-300">
        Auto-pull from Substack/Medium via RSS on the server (Next.js route) or use MDX posts.
      </p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold">Sample post title {i}</h4>
            <p className="text-sm text-neutral-300 mt-1">Short teaser of the article to invite clicks.</p>
            <a href="#" className="inline-flex items-center gap-1 text-sm mt-2" style={{ color: ACCENT }}>
              Read <ArrowRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
