import {
  BarChart3,
  Code2,
  FileText,
  GraduationCap,
  HandHeart,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LINKS } from "@/lib/links";

export function Resume() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Experience</h3>
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/5"
        >
          <FileText size={16} /> Download CV
        </a>
      </div>

      <div className="grid gap-6">
        <ResumeItem
          icon={Code2}
          left="Jan 2026 – Present"
          title="Full-Time Software Developer"
          org="Government of Canada"
          body="Develop secure web applications using React, TypeScript, Python, FastAPI, and SQL. Build frontend components, backend APIs, and database-integrated features."
        />

        <ResumeItem
          icon={Code2}
          left="Sept 2024 – Apr 2025"
          title="Software Developer (2 Internships)"
          org="Government of Canada"
          body="Supported backend applications, cloud environments, and data-processing tools. Modernized legacy functionality using Python and Java."
        />

        <ResumeItem
          icon={BarChart3}
          left="May 2023 – Aug 2024"
          title="Business Analyst (3 Internships)"
          org="Government of Canada"
          body="Supported internal web projects, data analysis, reporting, dashboards, documentation, and communications."
        />

        <ResumeItem
          icon={Smartphone}
          left="Nov 2023 – Mar 2024"
          title="Application Developer Intern"
          org="AINA Software"
          body="Created mobile app prototypes and UX/UI designs in Figma while supporting frontend development and testing."
        />

        <ResumeItem
          icon={HandHeart}
          left="May 2023 – Aug 2023"
          title="Volunteer Project Consultant"
          org="Dimension Sportive et Culturelle"
          body="Improved the organization’s business plan, website strategy, budgeting, and financial planning."
        />

        <div className="flex items-center justify-between pt-2">
          <h3 className="text-xl font-semibold">Education</h3>
        </div>

        <ResumeItem
          icon={GraduationCap}
          left="Sept 2021 – Apr 2025"
          title="Honours BSc in Computer Science"
          org="University of Ottawa"
          body="Management and Entrepreneurship option. Ideas Lab winner and participant in Hack the Hill, uOttaHack, and Hack the Future 2026."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="mb-3 font-semibold">Technical skills</div>
          <ul className="grid gap-y-2 text-sm text-neutral-300 sm:grid-cols-2">
            <li>React & TypeScript</li>
            <li>Python & FastAPI</li>
            <li>Java & SQL</li>
            <li>Git & Docker</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 p-5">
          <div className="mb-3 font-semibold">Languages</div>
          <ul className="grid gap-y-2 text-sm text-neutral-300 sm:grid-cols-2">
            <li>English</li>
            <li>French</li>
            <li>Arabic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ResumeItem({
  icon: Icon,
  left,
  title,
  org,
  body,
}: {
  icon: LucideIcon;
  left: string;
  title: string;
  org: string;
  body: string;
}) {
  return (
    <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[48px_160px_1fr] md:gap-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon size={21} className="text-violet-400" />
      </div>

      <div className="text-sm text-neutral-400">{left}</div>

      <div>
        <div className="text-lg font-semibold">
          {title}{" "}
          <span className="font-normal text-neutral-400">· {org}</span>
        </div>

        <p className="mt-2 text-sm text-neutral-300">{body}</p>
      </div>
    </div>
  );
}