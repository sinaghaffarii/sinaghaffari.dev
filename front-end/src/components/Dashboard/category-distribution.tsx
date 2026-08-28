import { Card } from "@/components/ui/card";

type Category = {
  name: string;
  value: number;
};

type CategoryDistributionProps = {
  categories: Category[];
};

const categoryColors = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-400",
  "bg-orange-500",
];

const chartColors = ["#8b5cf6", "#3b82f6", "#10b981", "#fbbf24", "#f97316"];

export function CategoryDistribution({ categories }: CategoryDistributionProps) {
  const gradient = categories
    .reduce<{ parts: string[]; accumulated: number }>(
      (result, category, index) => {
        const start = result.accumulated;
        const end = start + category.value;

        result.parts.push(`${chartColors[index % chartColors.length]} ${start}% ${end}%`);

        return {
          parts: result.parts,
          accumulated: end,
        };
      },
      {
        parts: [],
        accumulated: 0,
      },
    )
    .parts.join(", ");

  return (
    <Card className="rounded-2xl border bg-background p-6 shadow-none">
      <h2 className="font-semibold">Category Distribution</h2>

      <div className="mt-6 flex items-center gap-8">
        <div
          className="relative size-40 shrink-0 rounded-full"
          style={{
            background: `conic-gradient(${gradient})`,
          }}
        >
          <div className="absolute inset-[25%] rounded-full bg-background" />
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          {categories.map((category, index) => (
            <div key={category.name} className="flex items-center justify-between gap-3 text-sm">
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={`size-2.5 shrink-0 rounded-full ${
                    categoryColors[index % categoryColors.length]
                  }`}
                />

                <span className="truncate text-muted-foreground">{category.name}</span>
              </div>

              <span className="font-medium">{category.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
