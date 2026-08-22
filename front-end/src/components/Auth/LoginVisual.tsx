import { Activity, Braces, Check, CircleDot } from "lucide-react";

const nodes = [
  {
    id: "react",
    label: "React",
    className: "left-[14%] top-[26%]",
  },
  {
    id: "api",
    label: "API",
    className: "right-[14%] top-[22%]",
  },
  {
    id: "db",
    label: "Database",
    className: "right-[18%] bottom-[18%]",
  },
  {
    id: "deploy",
    label: "Deploy",
    className: "left-[18%] bottom-[14%]",
  },
];

export function LoginVisual() {
  return (
    <section className="relative hidden min-h-[620px] flex-col overflow-hidden border-r border-border/60 lg:flex">
      {/* Header — normal flow now, not absolutely pinned */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
            <span className="text-sm font-black">S</span>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight">Engineering Space</p>

            <p className="text-xs text-muted-foreground">Developer workspace</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />

          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            system online
          </span>
        </div>
      </div>

      {/* Network — a fixed-height block right under the header now, instead
          of being centered on the whole section. Since it sits in normal
          flow above the text block (not absolutely positioned over it), it
          can never overlap it regardless of how long the heading/paragraph
          run. */}
      <div className="relative mt-4 h-[240px] px-8">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full px-8"
          viewBox="0 0 600 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M120 85 L300 150 L475 75"
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <path
            d="M300 150 L470 230"
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <path
            d="M300 150 L130 235"
            className="stroke-border"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <circle cx="300" cy="150" r="40" className="stroke-primary/20" strokeWidth="1" />

          <circle
            cx="300"
            cy="150"
            r="65"
            className="stroke-border/40"
            strokeWidth="1"
            strokeDasharray="3 8"
          />
        </svg>

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex size-20 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_50px_-10px_hsl(var(--primary)/0.4)]">
            <div className="flex size-12 items-center justify-center rounded-full bg-foreground text-background">
              <Braces className="size-5" />
            </div>

            <div className="absolute inset-0 animate-ping rounded-full border border-primary/20 [animation-duration:3s]" />
          </div>
        </div>

        {/* Nodes */}
        {nodes.map((node) => (
          <div key={node.id} className={`absolute ${node.className}`}>
            <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-md">
              <div className="flex size-7 items-center justify-center rounded-lg bg-muted">
                <CircleDot className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>

              <span className="font-mono text-[11px] text-muted-foreground">{node.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom content — normal flow, follows the network block instead of
          being absolutely pinned to the section's bottom edge */}
      <div className="relative z-10 mt-auto px-8 pb-8">
        <div className="mb-5 flex items-center gap-2 text-muted-foreground">
          <Activity className="size-4" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            build · ship · improve
          </span>
        </div>

        <h1 className="max-w-md text-3xl font-bold tracking-tight xl:text-4xl">
          Build systems.
          <br />
          <span className="text-muted-foreground">Solve problems.</span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
          A focused workspace for building products, exploring ideas and turning complex problems
          into simple solutions.
        </p>

        {/* Mini terminal */}
        <div className="mt-6 max-w-md overflow-hidden rounded-xl border border-border/60 bg-muted/30">
          <div className="flex items-center gap-1.5 border-b border-border/50 px-3 py-2">
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />

            <span className="ml-2 font-mono text-[9px] text-muted-foreground">terminal</span>
          </div>

          <div className="space-y-2 px-4 py-3 font-mono text-[10px]">
            <div className="flex gap-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">git status</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-500/80">
              <Check className="size-3" />
              <span>working tree clean</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
