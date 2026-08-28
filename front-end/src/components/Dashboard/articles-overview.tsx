import { ChevronDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ArticlesOverviewProps = {
  data: number[];
  title?: string;
};

export function ArticlesOverview({ data, title = "Posts Overview" }: ArticlesOverviewProps) {
  const max = Math.max(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / max) * 75;

      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <Card className="rounded-2xl border bg-background p-6 shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{title}</h2>

        <Button variant="outline" size="sm" className="gap-2 rounded-lg">
          Last 7 days
          <ChevronDown className="size-3.5" />
        </Button>
      </div>

      <div className="mt-6">
        <div className="relative h-[260px]">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[40, 30, 20, 10, 0].map((value) => (
              <div key={value} className="flex items-center gap-3">
                <span className="w-5 text-xs text-muted-foreground">{value}</span>

                <div className="h-px flex-1 bg-border/60" />
              </div>
            ))}
          </div>

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute left-8 right-0 top-0 h-[230px] w-[calc(100%-32px)]"
          >
            <polygon points={areaPoints} className="fill-primary/5" />

            <polyline
              points={points}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            />
          </svg>

          <div className="absolute bottom-0 left-8 right-0 flex justify-between">
            {["May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16"].map((date) => (
              <span key={date} className="text-[11px] text-muted-foreground">
                {date}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
