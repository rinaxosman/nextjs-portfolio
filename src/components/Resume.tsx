import { FileText } from "lucide-react";
import { LINKS } from "@/lib/links";

export function Resume() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Experience</h3>
        <a
          href={LINKS.resume}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/5"
        >
          <FileText size={16} /> Download CV
        </a>
      </div>

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

        <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Education</h3>

      </div>

        {/* Education */}
        <ResumeItem
          left="2021 – 2025"
          title="B.Sc. Computer Science (Honours)"
          org="University of Ottawa"
          body="Management & Entrepreneurship option. Projects across data, AI, and full-stack development."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="font-semibold mb-3">Professional skillset</div>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li>Software Development</li>
            <li>Data Engineering</li>
            <li>Cloud & Automation</li>
            <li>Product Thinking</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="font-semibold mb-3">Languages</div>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li>Python · Java · TypeScript</li>
            <li>SQL</li>
            <li>English (native)</li>
            <li>French (proficient) · Arabic (conversational)</li>
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
