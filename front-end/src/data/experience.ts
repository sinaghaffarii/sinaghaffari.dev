export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
};

// Sourced from the resume — most recent first.
export const experience: ExperienceItem[] = [
  {
    id: "kahkeshan-noor",
    role: "Front-End Developer",
    company: "Kahkeshan Noor",
    location: "Tehran, Iran",
    start: "Mar 2024",
    end: "Feb 2026",
    highlights: [
      "Implemented real-time features with WebSocket for dynamic, interactive UX.",
      "Built and maintained a reusable component library across multiple product areas.",
      "Managed client-side state and data fetching with Redux Toolkit and React Query.",
      "Took part in code reviews and technical discussions to raise overall code quality.",
      "Contributed to CI/CD process improvements and standardized Git workflows.",
    ],
  },
  {
    id: "kahkeshan-dana",
    role: "Front-End Developer",
    company: "Kahkeshan Dana",
    location: "Tehran, Iran",
    start: "Mar 2022",
    end: "Feb 2024",
    highlights: [
      "Developed and maintained production front-end apps with React, Next.js and TypeScript.",
      "Improved front-end architecture and codebase structure for long-term scalability.",
      "Worked closely with back-end developers and PMs to integrate APIs and business logic.",
      "Translated UI/UX designs into responsive, accessible interfaces.",
    ],
  },
  {
    id: "atropine",
    role: "Front-End Developer (Freelance)",
    company: "atropine.ir",
    location: "Remote",
    start: "—",
    end: "—",
    highlights: [
      "Built the site's front end in React, translating designs into responsive, reusable components.",
    ],
  },
  {
    id: "education",
    role: "B.Sc. in Civil Engineering",
    company: "Islamic Azad University",
    location: "Tehran, Iran",
    start: "2017",
    end: "2021",
    highlights: [
      "Transitioned into front-end engineering after graduating, self-taught alongside the degree.",
    ],
  },
];
