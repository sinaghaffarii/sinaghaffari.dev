import type { SVGProps } from "react";

export function HuskyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* ears */}
      <path d="M5.5 9.5 3 3.2l5.2 3.3" />
      <path d="M18.5 9.5 21 3.2l-5.2 3.3" />
      {/* head */}
      <path d="M5.5 9.7c0-3.1 2.6-5.2 6.5-5.2s6.5 2.1 6.5 5.2c0 4.1-2.1 8-6.5 9.9-4.4-1.9-6.5-5.8-6.5-9.9Z" />
      {/* eyes */}
      <path d="M9 10.2h.01" strokeWidth={2.4} />
      <path d="M15 10.2h.01" strokeWidth={2.4} />
      {/* snout + nose */}
      <path d="M10.1 13.6c.4.7 1.1 1.1 1.9 1.1s1.5-.4 1.9-1.1" />
      <path d="M12 12.5h.01" strokeWidth={2.4} />
    </svg>
  );
}
