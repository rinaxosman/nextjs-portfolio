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
    title: "TrendMine",
    role: "Full-Stack Developer",
    description:
      "AI-powered platform that turns trending topics into startup and side-hustle ideas.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AI"],
    href: "https://trendmine.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Video Compressor",
    role: "Founder & Engineer",
    description:
      "Web app that compresses MP4 videos to Discord-friendly file sizes.",
    tech: ["Next.js", "FFmpeg.wasm", "Stripe"],
    href: "#",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Study Assistant",
    role: "Hackathon Developer",
    description:
      "AI study tool that organizes course information and identifies assignment deadlines.",
    tech: ["Python", "React", "AI"],
    href: "#",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
  },
];