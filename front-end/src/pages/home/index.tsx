import { ArrowRight, Download, Mail } from "lucide-react";
import { siGithub, siTwitch } from "simple-icons";

import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/button";
import { SkillsOrbit } from "@/components/ui/SkillsOrbit";
import { ExperienceTimeline } from "@/components/ui/ExperienceTimeLine";
import { ProjectsGrid } from "@/components/ui/ProjectsGrid";

const TAGS = ["React", "Next.js", "TypeScript", "Node.js", "System Design"];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16 sm:gap-32 sm:pt-24">
      {/* ============ Hero ============ */}
      <section className="flex flex-col items-center text-center">
        <span
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            bg-background/60
            px-3
            py-1
            text-xs
            text-muted-foreground
            backdrop-blur
          "
        >
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Open to front-end engineering roles
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Sina Ghaffari.
          <br />
          <span className="text-muted-foreground">Front-End Engineer.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-muted-foreground sm:text-lg">
          4+ years building production interfaces with React and Next.js — from component
          architecture and state management to real-time features and the CI/CD that ships them.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">
            <a href="#projects" className="flex items-center justify-center">
              View projects <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>

          <Button size="lg" variant="outline">
            <a
              href="/Sina-Ghaffari-Resume-EN.pdf"
              download
              className="flex items-start justify-center"
            >
              <Download className="mr-2 size-4" /> Resume
            </a>
          </Button>

          <Button size="lg" variant="ghost">
            <a
              href="mailto:sinaghafari.dev@gmail.com"
              className="flex items-center justify-center"
            >
              <Mail className="mr-2 size-4" /> Contact
            </a>
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-1">
          <a
            href="https://github.com/sinaghaffarii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <BrandIcon icon={siGithub} className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/sina-ghaffari-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <BrandIcon icon={siTwitch} className="size-4" />
          </a>
        </div>
      </section>

      {/* ============ Skills orbit ============ */}
      <section className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <p className="text-sm text-muted-foreground">Stack</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What I build with</h2>
        </div>

        <SkillsOrbit />
      </section>

      {/* ============ Experience ============ */}
      <section className="mx-auto w-full max-w-3xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Timeline</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>
          </div>
        </div>

        <ExperienceTimeline />
      </section>

      {/* ============ Projects ============ */}
      <section id="projects">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Selected work</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
          </div>
        </div>

        <ProjectsGrid />
      </section>
    </div>
  );
}
