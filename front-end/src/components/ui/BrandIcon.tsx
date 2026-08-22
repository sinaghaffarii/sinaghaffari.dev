import type { SimpleIcon } from "simple-icons";

type BrandIconProps = {
  icon: SimpleIcon;
  className?: string;
};

export function BrandIcon({ icon, className = "size-4" }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
