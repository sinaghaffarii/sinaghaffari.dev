import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { Card } from "@/components/ui/card";

type StatVariant = "primary" | "success" | "warning" | "info";

type DashboardStatCardProps = {
  title: string;
  value: number;
  change: number;
  changeLabel?: string;
  icon: LucideIcon;
  variant?: StatVariant;
  trend?: number[];
};

const variantClasses: Record<
  StatVariant,
  {
    icon: string;
    trend: string;
  }
> = {
  primary: {
    icon: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
    trend: "text-violet-500",
  },
  success: {
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
    trend: "text-emerald-500",
  },
  warning: {
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-300",
    trend: "text-amber-500",
  },
  info: {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
    trend: "text-blue-500",
  },
};

function Sparkline({ data, className }: { data: number[]; className: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 30 - ((value - min) / range) * 25;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 35" preserveAspectRatio="none" className="h-9 w-16">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}

export function DashboardStatCard({
  title,
  value,
  change,
  changeLabel = "this month",
  icon: Icon,
  variant = "primary",
  trend = [],
}: DashboardStatCardProps) {
  const positive = change >= 0;
  const styles = variantClasses[variant];

  return (
    <Card className="rounded-2xl border bg-background p-5 shadow-none">
      <div className="flex items-start justify-between">
        <div className={`flex size-12 items-center justify-center rounded-xl ${styles.icon}`}>
          <Icon className="size-6" />
        </div>

        {trend.length > 1 && <Sparkline data={trend} className={styles.trend} />}
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{title}</p>

        <p className="mt-1 text-2xl font-semibold tracking-tight">{value.toLocaleString()}</p>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs">
        {positive ? (
          <ArrowUp className="size-3.5 text-emerald-500" />
        ) : (
          <ArrowDown className="size-3.5 text-red-500" />
        )}

        <span className={positive ? "text-emerald-600" : "text-red-500"}>{Math.abs(change)}%</span>

        <span className="text-muted-foreground">{changeLabel}</span>
      </div>
    </Card>
  );
}
