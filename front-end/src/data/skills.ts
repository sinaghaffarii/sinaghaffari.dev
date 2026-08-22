export type OrbitSkill = {
  id: string;
  label: string;
  /** Key looked up in the ICON_MAP inside SkillsOrbit.tsx */
  icon: string;
};

export type OrbitRing = {
  id: string;
  /** Seconds for one full 360° revolution. Inner ring is fastest, like real orbital mechanics. */
  duration: number;
  direction: "cw" | "ccw";
  radius: number; // px, at the largest (lg) breakpoint — component scales it down responsively
  skills: OrbitSkill[];
};

export const orbitRings: OrbitRing[] = [
  {
    id: "core",
    duration: 34,
    direction: "cw",
    radius: 110,
    skills: [
      { id: "react", label: "React", icon: "react" },
      { id: "nextjs", label: "Next.js", icon: "nextjs" },
      { id: "typescript", label: "TypeScript", icon: "typescript" },
      { id: "javascript", label: "JavaScript", icon: "javascript" },
      { id: "nodejs", label: "Node.js", icon: "nodejs" },
    ],
  },
  {
    id: "data",
    duration: 52,
    direction: "ccw",
    radius: 175,
    skills: [
      { id: "redux", label: "Redux Toolkit", icon: "redux" },
      { id: "zustand", label: "Zustand", icon: "zustand" },
      { id: "react-query", label: "React Query", icon: "react-query" },
      { id: "express", label: "Express", icon: "express" },
      { id: "mongodb", label: "MongoDB", icon: "mongodb" },
      { id: "prisma", label: "Prisma", icon: "prisma" },
    ],
  },
  {
    id: "practice",
    duration: 76,
    direction: "cw",
    radius: 245,
    skills: [
      { id: "docker", label: "Docker", icon: "docker" },
      { id: "cicd", label: "CI/CD", icon: "cicd" },
      { id: "eslint", label: "ESLint", icon: "eslint" },
      { id: "husky", label: "Husky", icon: "husky" },
      { id: "prettier", label: "Prettier", icon: "prettier" },
      { id: "ai-agents", label: "AI Agents", icon: "ai" },
      { id: "system-design", label: "System Design", icon: "system-design" },
      { id: "performance", label: "Performance", icon: "performance" },
      { id: "architecture", label: "Front-End Architecture", icon: "architecture" },
    ],
  },
];
