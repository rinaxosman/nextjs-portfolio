# Rina’s Portfolio — Next.js + Tailwind (Free Template)

A clean, dark, componentized portfolio template built with **Next.js (App Router)**, **React 18**, and **Tailwind CSS**.  
It ships with a hero, about section, projects grid, resume snapshot, research/posts preview, contact, and a “Use my template” CTA.  
Includes small UX touches: animated project cards, section timeline (desktop), and an email popover (copy/compose) that gracefully falls back to `mailto:` on mobile.

---

## ✨ Features

- **Modern stack**: Next.js App Router, React 18, Tailwind CSS, TypeScript, `next/font`
- **Dark UI** with accessible contrast and subtle depth
- **Responsive** and mobile-friendly layout
- **Hero** with crisp `next/image` avatar + social links
- **Email popover** in the hero (copy/compose) with **automatic `mailto:` fallback on small screens**
- **About** with grouped skill buckets + “Currently / Outside of work” cards
- **Projects** grid with equal-height cards and subtle hover scale
- **Resume** snapshot with quick download CTA
- **Research & writing** preview (optional RSS pull)
- **Contact** with email display/copy and external links
- **Template CTA** section + stack overview
- **Sticky timeline** nav on the left (auto-hides below a large breakpoint)
- **Single accent color** via `ACCENT` constant for easy theming
- **Clean data-driven content** (projects come from `src/data/projects.ts`)
- **SEO-friendly** head, favicon, and Next/Image best practices

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router), React 18  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS (with shadcn/ui-ready classes)  
- **Icons:** [`lucide-react`](https://lucide.dev)  
- **Fonts:** `next/font`  
- **Deployment:** Vercel (recommended)  

---

## 📂 Project Structure

```
src/
  app/
    layout.tsx          // App shell & metadata
    page.tsx            // Home page that composes all sections
    globals.css         // Tailwind + CSS variables (themes)
  components/
    Header.tsx
    Hero.tsx
    Section.tsx
    About.tsx
    ProjectsGrid.tsx
    Resume.tsx
    BlogPreview.tsx
    Contact.tsx
    TemplateCTA.tsx
    Footer.tsx
    ScrollTimeline.tsx   // left-side vertical timeline (desktop only)
  data/
    projects.ts          // Your projects data (title, tech, image, links)
  lib/
    constants.ts         // ACCENT color + globals
    links.ts             // Email, LinkedIn, GitHub, Resume, Repo, RSS
public/
  portrait.jpg        // Your avatar (high-res)
  favicon.ico            // Tab icon
  ... other static assets
```

---

## 🚀 Getting Started

1) **Install deps**
```bash
pnpm i
# or
npm i
# or
yarn
```

2) **Run dev**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

3) **Open** http://localhost:3000

> This template uses the **App Router**. All sections are rendered on the home page and composed in `src/app/page.tsx`.

---

## 🎨 Personalize It (What to Edit)

You can build your entire personal site by editing **a few files**.

### 1) Global links & labels
`src/lib/links.ts`
```ts
export const LINKS = {
  email: "you@example.com",                    // plain email (lib handles mailto and UI)
  linkedin: "https://www.linkedin.com/in/you/",
  github: "https://github.com/yourname",
  resume: "/Your-Name-Resume.pdf",            // put a PDF in /public
  substackRSS: "https://substack.com/@you",   // optional
  repo: "https://github.com/yourname/your-portfolio-repo",
};
```

### 2) Accent color & meta
`src/lib/constants.ts`
```ts
export const ACCENT = "#806FFF"; // your brand purple

// You can also export other globals like titles, etc.
export const SITE_TITLE = "Your Name — Software Developer";
```
> Most components read the accent via the `ACCENT` constant or a CSS variable. Change once, update everywhere.

### 3) About content & skills
`src/components/About.tsx`
- Update your **bio paragraphs**, **skill groups**, and the **Currently / Outside of work** cards.  
- The section subtitle `CS @ uOttawa • Software • Data • Cybersecurity` can be tuned in the `Section` props when `About` is used.

### 4) Projects
`src/data/projects.ts`
```ts
export const PROJECTS = [
  {
    title: "AI Video Compressor (MVP)",
    role: "Founder & Engineer",
    description: "Web app that compresses MP4s to Discord-friendly 10MB.",
    tech: ["Next.js", "ffmpeg.wasm", "Stripe"],
    image: "/projects/compressor.jpg", // put image in /public
    href: "https://your-project.example.com"
  },
  // ...
];
```
- Images go in `/public/projects/...`
- The grid automatically keeps card heights consistent.  
- The subtle hover scale is set via Tailwind `hover:scale-[1.02]` and transitions in `ProjectsGrid.tsx`.

### 5) Avatar & images
- Replace `public/portrait_bg.jpg` with your own **high-resolution** image.  
- The hero uses `next/image` with `priority` and `quality=95` to keep it crisp.  
- If you use a new filename, update the `src` in `Hero.tsx`.

### 6) Favicon / Tab icon
- Replace `src/app/favicon.ico` or `public/favicon.ico`.  
- For multiple sizes & PWA-style icons, add `apple-touch-icon.png`, `site.webmanifest`, etc.

### 7) Contact section
- The Contact card shows your email **and a copy button**; LinkedIn & GitHub open in a new tab.  
- You can switch to a simple `mailto:` if preferred (see `Contact.tsx`).

### 8) Email behaviors in the Hero
- Small screens: the email icon links straight to `mailto:`.  
- `sm` and up: clicking the email icon opens a small **popover** with two actions: **Copy** and **Compose**.  
- The popover smoothly transitions in/out and closes on outside click or `Esc`.

### 9) Timeline (left vertical)
- The sticky timeline is rendered by `ScrollTimeline.tsx` and mounted in `page.tsx`.  
- It **auto-hides on screens below ~1470px** (custom breakpoint in the component’s class list).  
- You can change the breakpoint by editing the wrapper’s responsive classes in `ScrollTimeline.tsx`.

---

## 🧪 Optional: Blog / Research Feed

`BlogPreview.tsx` supports pulling a few recent posts.  
If you want to programmatically fetch posts from Substack/Medium, add a tiny API route that uses `rss-parser`:

```bash
pnpm add rss-parser
# or npm i rss-parser
```

Then create an API endpoint (example):
```ts
// src/app/api/rss/route.ts
import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL(process.env.RSS_URL!);
  const items = feed.items?.slice(0, 3) ?? [];
  return Response.json({ items });
}
```

And set `process.env.RSS_URL` in `.env.local` to your feed URL.  
Alternatively, keep the component static with sample links.

---

## 🛠️ Tailwind & Styling Notes

- Global styles live in `src/app/globals.css`.  
- Most stylistic accents leverage Tailwind classes and the `ACCENT` constant.  
- Icons from `lucide-react` inherit text color; we color LinkedIn with brand blue (`#0A66C2`) and make all icons **turn white on hover**.

---

## 🌐 Deploy (Vercel) + Custom Domain

1. Push the repo to GitHub.  
2. Import into Vercel → select your repo → deploy.  
3. In Vercel, go to **Settings → Domains** and add your domain (e.g., `rinaosman.com`).  
4. In your domain registrar (Namecheap/GoDaddy/Cloudflare), add the DNS records Vercel shows (typically a couple of `A` records or CNAMEs).  
5. Wait for DNS to propagate (usually a few minutes up to an hour).  
6. Set `rinaosman.com` as the **primary** domain in Vercel; enable **WWW redirect** if you like.

> Tip: if you’re using Cloudflare proxy, either disable proxy for the A/CNAME that points to Vercel or follow Vercel’s docs for Cloudflare-specific setup.

---

## 🧰 Scripts

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## ❓FAQ

**1) Is this free to use?**  
Yes. This template is MIT‑licensed—use it for personal or commercial work. Credit/star is appreciated but not required.

**2) What files do I need to customize?**  
Minimum pass to make it yours:
- `src/lib/links.ts` – email, LinkedIn, GitHub, resume PDF path, repo link.
- `src/components/About.tsx` – bio, skill buckets, “Currently I’m…” and “Outside of work…” cards.
- `src/data/projects.ts` – your projects data (title, description, tech, image, links). Add images to `/public`.
- `src/components/Resume.tsx` (or data it reads) – quick CV entries. Place your PDF in `/public` and point `LINKS.resume` to it.
- `/public/portrait.jpg` (or `_bg.jpg`) – your avatar.
- `src/app/favicon.ico` (or `/public/favicon.ico`) – tab icon.
- `src/components/TemplateCTA.tsx` – repo/docs buttons and “stack” list.
- (Optional) `src/components/ScrollTimeline.tsx` – the purple section timeline.

**3) How do I deploy and connect my domain?**  
1. Push to GitHub.  
2. Import the repo on **Vercel** (defaults work).  
3. Add your domain (e.g., `rinaosman.com`) in **Vercel → Settings → Domains**.  
4. At your registrar (Namecheap/Cloudflare/GoDaddy): create a CNAME for `www → cname.vercel-dns.com` and, if you want the apex, add the A records Vercel shows you **or** set an ALIAS/ANAME to `cname.vercel-dns.com`.  
5. Wait for DNS to propagate, then enable HTTPS in Vercel (automatic).

**4) Can I remove the timeline on smaller screens?**  
Yes—`ScrollTimeline.tsx` only renders on very wide screens (e.g., `2xl`). You can tighten/expand the breakpoints with Tailwind’s responsive classes.

**5) My avatar looks soft—how do I fix it?**  
Use a higher‑resolution image and keep the `next/image` props: `priority`, `quality={95}`, and the larger wrapper sizes (e.g., `sm:h-44 w-44`, `lg:h-48 w-48`).

## 📜 License

MIT — free to use, modify, and ship.  
A link back or a shout-out is appreciated but not required.

---

## 🙌 Credits

- Built with love using **Next.js**, **React**, **Tailwind**, and **lucide-react**.  
- Deployment examples assume **Vercel**.
