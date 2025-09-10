import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import { Resume } from "@/components/Resume";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import TemplateCTA from "@/components/TemplateCTA";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";

const SECTIONS = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume",   label: "Resume" },
  { id: "blog",     label: "Research" },
  { id: "template", label: "Template" },
  { id: "contact",  label: "Contact" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      {/* Gutter wrapper */}
      <div className="mx-auto w-full max-w-6xl px-4 bp1130:px-0">
        <Hero />
        <Section id="about" title="About me" subtitle="CS @ uOttawa • Cyber • Data • Builder">
          <About />
        </Section>
        <Section id="projects" title="Projects" subtitle="Selected work I’m proud of.">
          <ProjectsGrid />
        </Section>
        <Section id="resume" title="Resume" subtitle="Quick view + full PDF download.">
          <Resume />
        </Section>
        <Section id="blog" title="Research & writing" subtitle="From Substack/Medium or a future MDX blog.">
          <BlogPreview />
        </Section>
        <Section id="template" title="Template & stack" subtitle="Grab the code and see how it’s built.">
          <TemplateCTA />
        </Section>
        <Section id="contact" title="Contact" subtitle="Let’s build something cool.">
          <Contact />
        </Section>
      </div>

      <Footer />
    </main>
  );
}