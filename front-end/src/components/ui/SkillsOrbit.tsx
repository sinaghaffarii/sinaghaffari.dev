import type { CSSProperties, ComponentType } from "react";
import type { SimpleIcon } from "simple-icons";

import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siRedux,
  siExpress,
  siMongodb,
  siPrisma,
  siDocker,
  siGithubactions,
  siEslint,
  siPrettier,
  siHtml5,
  siCss,
  siGit,
  siGithub,
  siTailwindcss,
  siVite,
  siVitest,
  siJest,
  siReactrouter,
  siNpm,
  siPnpm,
  siHackthebox,
  siReactquery,
  siPostgresql,
  siMysql,
  siLeetcode,
} from "simple-icons";

import {
  Accessibility,
  Bot,
  Code2,
  Gauge,
  Globe,
  LayoutGrid,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";

import { orbitRings } from "@/data/skills";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

type IconComponent = ComponentType<IconProps>;

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const RING_RADIUS = [
  "clamp(44px, 14vw, 110px)",
  "clamp(72px, 23vw, 175px)",
  "clamp(100px, 32vw, 245px)",
] as const;

const CENTER_SIZE = "size-14 sm:size-16";

const SKILL_ICON_CLASS = "size-full";

/* -------------------------------------------------------------------------- */
/*                              Icon Components                               */
/* -------------------------------------------------------------------------- */

const createBrandIcon =
  (icon: SimpleIcon): IconComponent =>
  ({ className }) => <BrandIcon icon={icon} className={className} />;

const createLucideIcon =
  (
    Icon: ComponentType<{
      className?: string;
      strokeWidth?: number;
    }>,
  ): IconComponent =>
  ({ className }) => <Icon className={className} strokeWidth={1.75} />;

/* -------------------------------------------------------------------------- */
/*                                  Icon Map                                  */
/* -------------------------------------------------------------------------- */

const ICON_MAP: Record<string, IconComponent> = {
  /* ------------------------------- Frontend ------------------------------ */

  html: createBrandIcon(siHtml5),
  html5: createBrandIcon(siHtml5),

  css: createBrandIcon(siCss),
  css3: createBrandIcon(siCss),

  javascript: createBrandIcon(siJavascript),
  typescript: createBrandIcon(siTypescript),

  react: createBrandIcon(siReact),
  nextjs: createBrandIcon(siNextdotjs),

  redux: createBrandIcon(siRedux),

  "react-query": createBrandIcon(siReactquery),
  tanstack: createBrandIcon(siReactquery),
  "tanstack-query": createBrandIcon(siReactquery),

  hackTheBox: createBrandIcon(siHackthebox),

  "react-router": createBrandIcon(siReactrouter),

  tailwind: createBrandIcon(siTailwindcss),
  tailwindcss: createBrandIcon(siTailwindcss),

  vite: createBrandIcon(siVite),

  /* ------------------------------- Backend ------------------------------- */

  nodejs: createBrandIcon(siNodedotjs),
  express: createBrandIcon(siExpress),

  /* -------------------------------- Database ------------------------------ */

  mongodb: createBrandIcon(siMongodb),
  postgresql: createBrandIcon(siPostgresql),
  postgres: createBrandIcon(siPostgresql),
  mysql: createBrandIcon(siMysql),

  prisma: createBrandIcon(siPrisma),

  /* ---------------------------- Dev / Tooling ---------------------------- */

  git: createBrandIcon(siGit),
  github: createBrandIcon(siGithub),

  npm: createBrandIcon(siNpm),
  pnpm: createBrandIcon(siPnpm),

  docker: createBrandIcon(siDocker),
  cicd: createBrandIcon(siGithubactions),

  eslint: createBrandIcon(siEslint),
  prettier: createBrandIcon(siPrettier),

  /* -------------------------------- Testing ------------------------------- */

  vitest: createBrandIcon(siVitest),
  jest: createBrandIcon(siJest),

  /* ----------------------------- Algorithms ------------------------------ */

  leetcode: createBrandIcon(siLeetcode),
  algorithms: createLucideIcon(Code2),
  "data-structures": createLucideIcon(Code2),

  /* ----------------------------- Engineering ----------------------------- */

  ai: createLucideIcon(Bot),

  "system-design": createLucideIcon(Network),

  performance: createLucideIcon(Gauge),

  architecture: createLucideIcon(LayoutGrid),

  accessibility: createLucideIcon(Accessibility),

  security: createLucideIcon(ShieldCheck),

  "web-security": createLucideIcon(LockKeyhole),

  http: createLucideIcon(Globe),

  "rest-api": createLucideIcon(Globe),
};

/* -------------------------------------------------------------------------- */
/*                              Fallback Icon                                 */
/* -------------------------------------------------------------------------- */

const FallbackIcon = createLucideIcon(Globe);

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

function SkillIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? FallbackIcon;

  return <Icon className={className ?? SKILL_ICON_CLASS} />;
}

function getRingRadius(index: number) {
  return RING_RADIUS[index] ?? RING_RADIUS[RING_RADIUS.length - 1];
}

/* -------------------------------------------------------------------------- */
/*                               Skills Orbit                                 */
/* -------------------------------------------------------------------------- */

export function SkillsOrbit() {
  return (
    <div className={cn("group relative mx-auto aspect-square w-full max-w-[560px]", "select-none")}>
      {/* ------------------------------------------------------------------ */}
      {/* Center                                                              */}
      {/* ------------------------------------------------------------------ */}

      <div
        className={cn(
          "absolute left-1/2 top-1/2 z-10",
          "flex -translate-x-1/2 -translate-y-1/2",
          "items-center justify-center",
          "rounded-full border",
          "bg-foreground text-background",
          "text-lg font-bold",
          "shadow-[0_0_40px_-8px_hsl(var(--foreground)/0.35)]",
          CENTER_SIZE,
        )}
        aria-hidden="true"
      >
        S
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Rings                                                               */}
      {/* ------------------------------------------------------------------ */}

      {orbitRings.map((ring, ringIndex) => {
        const radius = getRingRadius(ringIndex);

        const ringStyle = {
          "--r": radius,
        } as CSSProperties;

        const isOuterRing = ringIndex === orbitRings.length - 1;

        return (
          <div key={ring.id} className="absolute inset-0" style={ringStyle}>
            {/* Guide Circle */}

            <div
              aria-hidden="true"
              className={cn("absolute left-1/2 top-1/2", "rounded-full border border-border/40")}
              style={{
                width: "calc(var(--r) * 2)",
                height: "calc(var(--r) * 2)",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Orbit */}

            <div
              className={cn(
                "absolute inset-0",
                "will-change-transform",
                "[animation-play-state:running]",
                "group-hover:[animation-play-state:paused]",
                isOuterRing && "hidden sm:block",
              )}
              style={{
                animation: `orbit-spin ${ring.duration}s linear infinite`,
                animationDirection: ring.direction === "ccw" ? "reverse" : "normal",
              }}
              aria-hidden="true"
            >
              {ring.skills.map((skill, index) => {
                const angle = (360 / ring.skills.length) * index;

                return (
                  <div
                    key={skill.id}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                          rotate(${angle}deg)
                          translateX(var(--r))
                          rotate(${-angle}deg)
                        `,
                    }}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center",
                        "size-9 sm:size-11",
                        "-translate-x-1/2 -translate-y-1/2",
                        "rounded-full border",
                        "bg-background text-foreground",
                        "p-2 sm:p-2.5",
                        "transition-transform duration-200",
                        "hover:scale-125",
                        "hover:border-foreground/50",
                        "will-change-transform",
                      )}
                      style={{
                        animation: `orbit-spin ${ring.duration}s linear infinite`,
                        animationDirection: ring.direction === "ccw" ? "normal" : "reverse",
                      }}
                      title={skill.label}
                    >
                      <SkillIcon name={skill.icon} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* ------------------------------------------------------------------ */}
      {/* Accessibility                                                      */}
      {/* ------------------------------------------------------------------ */}

      <span className="sr-only">
        Skills: {orbitRings.flatMap((ring) => ring.skills.map((skill) => skill.label)).join(", ")}
      </span>
    </div>
  );
}
