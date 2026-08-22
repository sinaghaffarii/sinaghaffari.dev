import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "right" | "left" | "down" | "up";

type Beam = {
  id: number;
  direction: Direction;
  offset: number;
  duration: number;
  delay: number;
  size: number;
  /** Skip rendering below the `sm` breakpoint — keeps mobile light and avoids
   *  beams landing outside the (shorter) mobile viewport. */
  hideOnMobile?: boolean;
};

type AnimatedGridBackgroundProps = {
  children: ReactNode;
  className?: string;
};

const beams: Beam[] = [
  // Horizontal — offset is the grid-line row index counted from the top edge
  { id: 1, direction: "right", offset: 2, duration: 8, delay: -2, size: 110 },
  { id: 2, direction: "left", offset: 5, duration: 11, delay: -7, size: 80 },
  { id: 3, direction: "right", offset: 8, duration: 13, delay: -5, size: 140, hideOnMobile: true },
  { id: 4, direction: "left", offset: 11, duration: 9, delay: -1, size: 90, hideOnMobile: true },
  {
    id: 5,
    direction: "right",
    offset: 14,
    duration: 15,
    delay: -10,
    size: 120,
    hideOnMobile: true,
  },

  // Vertical — offset is the grid-line column index counted from the left edge
  { id: 6, direction: "down", offset: 3, duration: 10, delay: -4, size: 100 },
  { id: 7, direction: "up", offset: 7, duration: 12, delay: -8, size: 80 },
  { id: 8, direction: "down", offset: 10, duration: 14, delay: -3, size: 130, hideOnMobile: true },
  { id: 9, direction: "up", offset: 13, duration: 9, delay: -6, size: 90, hideOnMobile: true },
  {
    id: 10,
    direction: "down",
    offset: 16,
    duration: 16,
    delay: -12,
    size: 110,
    hideOnMobile: true,
  },
];

export function AnimatedGridBackground({ children, className }: AnimatedGridBackgroundProps) {
  return (
    <div className={cn("relative isolate min-h-[calc(100vh-4rem)] overflow-hidden", className)}>
      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          bg-[size:64px_64px]
          bg-left-top
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]
        "
      />

      {/* Moving beams */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
          [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_55%,transparent_100%)]
        "
      >
        {beams.map((beam) => {
          const isHorizontal = beam.direction === "left" || beam.direction === "right";

          const style = {
            "--beam-offset": `${beam.offset * 64}px`,
            "--beam-size": `${beam.size}px`,
            "--beam-duration": `${beam.duration}s`,
            "--beam-delay": `${beam.delay}s`,
          } as CSSProperties;

          return (
            <span
              key={beam.id}
              style={style}
              className={cn(
                "absolute block opacity-70 will-change-transform",
                beam.hideOnMobile && "hidden sm:block",
                isHorizontal
                  ? "left-0 h-px w-[var(--beam-size)]"
                  : "top-0 h-[var(--beam-size)] w-px",
                `animate-beam-${beam.direction}`,
              )}
            />
          );
        })}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
