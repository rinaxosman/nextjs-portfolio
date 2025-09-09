export type Project = {
  title: string;
  role?: string;
  description: string;
  tech: string[];
  href: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI Video Compressor (MVP)",
    role: "Founder & Engineer",
    description:
      "Web app that compresses MP4s to Discord-friendly 10MB. Free tier (2x/month) + paid plan.",
    tech: ["Next.js", "FFmpeg.wasm", "Stripe"],
    href: "#",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "GeekWeek Site (uOttawa)",
    role: "Front-End Lead",
    description:
      "Public-facing event website built across multiple editions, end-to-end from design to deploy.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    href: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Penguin: Spark → Iceberg Ingestion",
    role: "Data Engineer (Intern)",
    description:
      "Generic SparkDataFrameWriter (JSON→Iceberg) with table maintenance procedures.",
    tech: ["Spark", "Java", "Iceberg"],
    href: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
];
