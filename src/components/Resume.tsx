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
        <ResumeItem
          left="2023 – 2024"
          title="Cyber Developer (Intern)"
          org="Canadian Centre for Cyber Security"
          body="Built public event site for GeekWeek (multiple editions). Developed Spark→Iceberg ingestion with table maintenance. Worked across Python, Java, and web stacks."
        />
        <ResumeItem
          left="2019 – 2025"
          title="B.Sc. Computer Science"
          org="University of Ottawa"
          body="Honours with Management & Entrepreneurship option. Projects in AI, data, and full-stack dev."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-5">
          <div className="font-semibold mb-3">Professional skillset</div>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
            <li>Entrepreneurial Mindset</li>
            <li>Data Engineering</li>
            <li>Cybersecurity Toolkit</li>
            <li>Product Thinking</li>
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

function ResumeItem({ left, title, org, body }: { left: string; title: string; org: string; body: string }) {
  return (
    <div className="grid grid-cols-[140px,1fr] gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
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
