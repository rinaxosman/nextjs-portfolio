import { FileText } from "lucide-react";
import { LINKS } from "@/lib/links";

export function Resume() {
  return (
    <div className="space-y-10">
      {/* Experience header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Experience</h3>
        <a
          href={LINKS.resume}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/5"
        >
          <FileText size={16} /> Download CV
        </a>
      </div>

      {/* Experience list */}
      <div className="grid gap-6">
        {/* Grouped: Software Developer x2 */}
        <ResumeItem
          left="Sept 2024 – Apr 2025"
          title="Software Developer (x2 Internships)"
          org="Communications Security Establishment"
          body="Two rotations contributing to internal services and data tooling. Helped modernize Python/JVM backends, improve cloud automation, and support secure service integrations."
        />

        {/* Grouped: Business Analyst x3 (2 with Web Dev) */}
        <ResumeItem
          left="May 2023 – Aug 2024"
          title="Business Analyst (x3 Internships)"
          org="Communications Security Establishment"
          body="Three terms across analysis, reporting, and internal web tools. Built clear dashboards and documentation; in two rotations, contributed front-end updates and static-site content for internal portals."
        />

        {/* Individual roles */}
        <ResumeItem
          left="Nov 2023 – Mar 2024"
          title="Application Developer (Intern)"
          org="AINA Software"
          body="Prototyped a mobile app; collaborated on UI in Figma and implemented front-end features and tests."
        />
        <ResumeItem
          left="May 2023 – Aug 2023"
          title="Volunteer Project Consultant"
          org="Dimension Sportive et Culturelle"
          body="Refined the organization’s plan and budget and presented recommendations as part of a consulting engagement."
        />

        {/* Education header */}
        <div className="flex items-center justify-between pt-2">
          <h3 className="text-xl font-semibold">Education</h3>
        </div>

        {/* Degree */}
        <ResumeItem
          left="2021 – 2025"
          title="B.Sc. Computer Science (Honours)"
          org="University of Ottawa"
          body="Management & Entrepreneurship option. Projects across data, AI, and full-stack development. Active in student clubs and hackathons."
        />

        {/* Honours project highlight */}
        <ResumeItemWithAction
          left="2025"
          title="Honours Project (Capstone)"
          org="Revisiting VulRepair"
          body="Reproduced and evaluated VulRepair, a T5/CodeT5-based neural vulnerability-repair model. Implemented 10 variants, ran ablations on pre-training and BPE tokenization, and re-evaluated on a deduplicated CVEFixes split; best model reached ~46% perfect repairs."
          ctaHref={LINKS.honoursReport || "/CSI4900-VulRepair.pdf"}
          ctaLabel="View final report (PDF)"
        />

      </div>

      {/* Skills / Languages */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="font-semibold mb-3">Professional skillset</div>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li>Software Development</li>
            <li>Data Analysis</li>
            <li>Cloud & Automation</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="font-semibold mb-3">Languages</div>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li>English (native)</li>
            <li>French (proficient)</li>
            <li>Arabic (conversational)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ResumeItem({
  left,
  title,
  org,
  body,
}: {
  left: string;
  title: string;
  org: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[160px,1fr] gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-sm text-neutral-400">{left}</div>
      <div>
        <div className="text-lg font-semibold">
          {title} <span className="text-neutral-400 font-normal">· {org}</span>
        </div>
        <p className="mt-2 text-sm text-neutral-300">{body}</p>
      </div>
    </div>
  );
}

function ResumeItemWithAction({
  left,
  title,
  org,
  body,
  ctaHref,
  ctaLabel,
}: {
  left: string;
  title: string;
  org: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="grid grid-cols-[160px,1fr] gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-sm text-neutral-400">{left}</div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-lg font-semibold">
            {title} <span className="text-neutral-400 font-normal">· {org}</span>
          </div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
          >
            <FileText size={16} /> {ctaLabel}
          </a>
        </div>
        <p className="mt-2 text-sm text-neutral-300">{body}</p>
      </div>
    </div>
  );
}
