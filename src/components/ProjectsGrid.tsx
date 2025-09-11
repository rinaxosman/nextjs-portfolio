import { PROJECTS } from "@/data/projects";
import { KAGGLE_NOTEBOOKS } from "@/data/kaggle";
import { ExternalLink, Film, GraduationCap } from "lucide-react";

function IconForNotebook({ title }: { title: string }) {
  const box =
    "mt-0.5 h-10 w-10 shrink-0 rounded-lg ring-1 ring-white/10 flex items-center justify-center";

  if (/movie/i.test(title)) {
    return (
      <div className={`${box} bg-gradient-to-br from-indigo-400/15 to-fuchsia-400/10`}>
        <Film className="h-5 w-5 opacity-80" />
      </div>
    );
  }

  if (/(university|universities|school|college)/i.test(title)) {
    return (
      <div className={`${box} bg-gradient-to-br from-cyan-300/20 to-blue-400/15`}>
        <GraduationCap className="h-5 w-5 opacity-80" />
      </div>
    );
  }

  if (/german/i.test(title)) {
    // tiny German flag
    return (
      <div className={`${box} overflow-hidden p-[2px] bg-white/5`}>
        <div className="h-full w-full rounded-[4px] overflow-hidden">
          <div className="h-1/3 w-full bg-black/90" />
          <div className="h-1/3 w-full bg-red-600/90" />
          <div className="h-1/3 w-full bg-yellow-400/90" />
        </div>
      </div>
    );
  }

  // fallback (subtle square)
  return (
    <div className={`${box} bg-white/5`} />
  );
}

export default function ProjectsGrid() {
  return (
    <div className="space-y-10">
      {/* Coding projects */}
      <div className="space-y-8">
        {PROJECTS.map((p, idx) => (
          <div
            key={p.title}
            className={`grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${
              idx % 2 ? "bg-white/[0.03]" : "bg-white/[0.06]"
            }`}
          >
            {/* Text */}
            <div
              className={`p-6 md:p-8 flex flex-col justify-between h-full ${
                idx % 2 ? "order-2 md:order-1" : ""
              }`}
            >
              <div>
                <div className="text-sm font-semibold text-neutral-300">
                  {p.role || "Project"}
                </div>
                <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-neutral-300 clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 px-2 py-0.5 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {p.href && (
                <a
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm hover:opacity-90"
                >
                  <ExternalLink size={16} /> View
                </a>
              )}
            </div>

            {/* Image */}
            <div
              className={`${
                idx % 2 ? "order-1 md:order-2" : ""
              } relative h-[220px] md:h-full`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Kaggle notebooks (3-up) */}
      <div className="pt-2">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-neutral-300">
            Kaggle notebooks
          </h4>
          <a
            href="https://www.kaggle.com/rinaosman/code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:opacity-90"
          >
            See all <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KAGGLE_NOTEBOOKS.slice(0, 3).map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 pb-10 transition-colors hover:bg-white/[0.06]"
              aria-label={n.title}
            >
              {/* badge bottom-right */}
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-purple-300/30 bg-purple-300/10 px-2 py-0.5 text-[10px] tracking-wide text-purple-300">
                KAGGLE
              </span>

              <div className="flex items-start gap-3">
                <IconForNotebook title={n.title} />
                <div className="min-w-0">
                  <div className="font-semibold leading-snug group-hover:underline">
                    {n.title}
                  </div>
                  {n.note && (
                    <div className="mt-1 text-sm text-neutral-400 line-clamp-2">
                      {n.note}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-300">
                Open <ExternalLink size={14} className="opacity-80" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
