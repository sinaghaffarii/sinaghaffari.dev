import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className={cn(
            "group relative flex flex-col rounded-lg border bg-background/60 p-6 transition-colors",
            "hover:bg-muted/40",
          )}
        >
          {project.placeholder && (
            <span className="absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
              Placeholder
            </span>
          )}

          <h3 className="pr-16 text-base font-semibold text-foreground">{project.title}</h3>

          <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.href || project.repo) && (
            <a
              href={project.href ?? project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground"
            >
              View project
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
