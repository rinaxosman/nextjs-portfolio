// components/BlogPreview.tsx
import { ArrowRight } from "lucide-react";
import { getSubstackPosts } from "@/lib/substack";
import { LINKS } from "@/lib/links";

export const revalidate = 3600;       // refresh hourly on Vercel
export const dynamic = "force-static"; // good default for RSS

export default async function BlogPreview() {
  const posts = await getSubstackPosts(LINKS.substack, 3);

  if (!posts?.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="font-medium">Latest posts</div>
        <p className="mt-2 text-sm text-neutral-300">
          No recent posts found. Double-check your Substack feed or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-sm bg-white/60" />
        <div className="font-medium">Latest posts</div>
      </div>

      <ul className="mt-4 space-y-4">
        {posts.map((p, idx) => (
          <li key={`${p.link}-${idx}`} className="group">
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10"
                    loading="lazy"
                  />
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold leading-snug truncate">
                      {p.title || "Untitled"}
                    </h3>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100 transition" />
                  </div>

                  <div className="mt-1 text-xs text-neutral-400 flex items-center gap-2">
                    {p.isoDate &&
                      new Date(p.isoDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    {p.readingMins ? <span>• {p.readingMins} min read</span> : null}
                  </div>

                  {p.contentSnippet && (
                    <p className="mt-2 line-clamp-2 text-sm text-neutral-300">
                      {p.contentSnippet}
                    </p>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href="https://rinaosman.substack.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
        >
          View all on Substack <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
