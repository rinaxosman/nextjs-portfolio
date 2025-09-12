import { PROJECTS } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import DataScienceWork from "@/components/DataScienceWork";

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
            <div className={`${idx % 2 ? "order-1 md:order-2" : ""} relative h-[220px] md:h-full`}>
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Data science & ML section */}
      <DataScienceWork />
    </div>
  );
}