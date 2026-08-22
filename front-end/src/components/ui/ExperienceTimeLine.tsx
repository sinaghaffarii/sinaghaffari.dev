import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-border pl-6 sm:pl-8">
      {experience.map((item, index) => (
        <li key={item.id} className={cn("relative", index !== experience.length - 1 && "pb-10")}>
          {/* Dot */}
          <span
            className={cn(
              "absolute -left-[calc(1.5rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-background sm:-left-[calc(2rem+5px)]",
              item.current ? "bg-foreground" : "bg-muted-foreground",
            )}
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              {item.role}{" "}
              <span className="font-normal text-muted-foreground">· {item.company}</span>
            </h3>
            <span className="text-sm text-muted-foreground">
              {item.start} — {item.end}
            </span>
          </div>

          <p className="mt-0.5 text-sm text-muted-foreground">{item.location}</p>

          <ul className="mt-3 space-y-1.5">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                {h}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
