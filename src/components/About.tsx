import { Code2 } from "lucide-react";
import { ACCENT } from "@/lib/constants";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      {/* Left: bio + grouped skills */}
      <div className="md:col-span-2 space-y-5 text-neutral-300">
        <p>
          I’m Rina, a <span className="font-semibold text-white">Software Developer (Full-Stack & Data)</span> with interests in
          cybersecurity and data analytics. I build end-to-end products—web apps, mobile apps, data flows—and I care
          about clean systems, clear UX, and measurable impact.
        </p>
        <p>
          I’ve completed internships across <span className="text-white font-medium">business analysis</span>,{" "}
          <span className="text-white font-medium">mobile app development</span>, and{" "}
          <span className="text-white font-medium">software development</span>, which gave me a solid view of the full
          product lifecycle from discovery to delivery.
        </p>

        {/* Grouped skill buckets */}
        {/* Grouped skill buckets */}
        <div className="grid sm:grid-cols-2 gap-4">
          <SkillGroup
            title="Frontend"
            items={["Next.js", "React", "Tailwind CSS", "shadcn/ui"]}
          />
          <SkillGroup
            title="Backend"
            items={["Node.js", "Next.js API Routes", "REST"]}
          />
          <SkillGroup
            title="Languages"
            items={["Python", "Java", "JavaScript", "TypeScript"]}
          />
          <SkillGroup
            title="Tooling & DevOps"
            items={["Git/GitHub", "Vercel", "CI basics"]}
          />
          <SkillGroup
            title="Data & Auth"
            items={["Firebase (Auth/Firestore/Storage)", "MongoDB"]}
          />
        </div>


      </div>

      {/* RIGHT: two cards with spacing + purple titles */}
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold" style={{ color: ACCENT }}>
            Currently I’m...
          </div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Building an AI video compressor</li>
            <li>• Exploring ML + product ideas</li>
            <li>
              • Researching and writing about: AI misinformation, cybersecurity breach trends, cash → digital shifts,
              the impact of AI on critical thinking, memes’ cultural impact, short-form attention, and Game Theory.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold" style={{ color: ACCENT }}>
            Outside of work I’m...
          </div>
          <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
            <li>At the gym</li>
            <li>Writing papers</li>
            <li>Reading books</li>
            <li>Playing volleyball</li>
            <li>Playing video games</li>
          </ul>
        </div>
      </div>

    </div>

  );
}

/* Helpers */
function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-white">{title}</div>
      <ul className="space-y-1">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2 text-sm">
            <Code2 size={16} style={{ color: ACCENT }} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
