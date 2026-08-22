export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  /** True for the fake/example entries — swap these out for real projects. */
  placeholder?: boolean;
};

export const projects: Project[] = [
  // Real — from the resume
  {
    id: "labasino",
    title: "لباسینو — Persian RTL Storefront",
    description:
      "A Persian RTL e-commerce storefront focused on clean component architecture and props-driven, reusable UI patterns, with Suspense-based streaming for a faster perceived load.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "canvas-visualizations",
    title: "Interactive Canvas / SVG Visualizations",
    description:
      "Browser-based animations — including a solar system and a neural network — built with Canvas and SVG, later adapted into short-form video content.",
    tags: ["Canvas", "SVG", "Animation"],
  },

  // Placeholders — replace with real projects later
  {
    id: "placeholder-dashboard",
    title: "Real-Time Ops Dashboard",
    description:
      "An example real-time dashboard with live charts and notifications over WebSocket, built to demo state architecture at scale.",
    tags: ["React", "Socket.IO", "Redux Toolkit"],
    placeholder: true,
  },
  {
    id: "placeholder-design-system",
    title: "Component Library & Design System",
    description:
      "A sample internal design system: themeable components, Storybook docs, and visual regression tests.",
    tags: ["TypeScript", "Storybook", "shadcn/ui"],
    placeholder: true,
  },
  {
    id: "placeholder-api",
    title: "Full-Stack Starter Kit",
    description:
      "An example Next.js + Express + Prisma starter with a Dockerized dev environment and a GitHub Actions CI/CD pipeline.",
    tags: ["Next.js", "Express", "Prisma", "Docker"],
    placeholder: true,
  },
];
