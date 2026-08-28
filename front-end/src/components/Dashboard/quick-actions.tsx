import { Link } from "react-router";
import { ArrowUpRight, FolderPlus, MessageSquare, Plus } from "lucide-react";

import { Card } from "@/components/ui/card";

const actions = [
  {
    label: "Create New Post",
    href: "/dashboard/posts/new",
    icon: Plus,
    disabled: false,
  },
  {
    label: "Manage Categories",
    href: "#",
    icon: FolderPlus,
    disabled: true,
  },
  {
    label: "View All Comments",
    href: "#",
    icon: MessageSquare,
    disabled: true,
  },
];

export function QuickActions() {
  return (
    <Card className="rounded-2xl border bg-background p-6 shadow-none">
      <h2 className="font-semibold">Quick Actions</h2>

      <div className="mt-4 space-y-2.5">
        {actions.map((action) => {
          const Icon = action.icon;

          if (action.disabled) {
            return (
              <div
                key={action.label}
                className="flex h-12 items-center gap-3 rounded-xl border px-4 text-sm text-muted-foreground/50"
              >
                <Icon className="size-[18px]" />

                <span className="flex-1">{action.label}</span>

                <span className="text-[10px]">Soon</span>
              </div>
            );
          }

          return (
            <Link
              key={action.label}
              to={action.href}
              className="flex h-12 items-center gap-3 rounded-xl border px-4 text-sm transition-colors hover:bg-muted"
            >
              <Icon className="size-[18px] text-muted-foreground" />

              <span className="flex-1">{action.label}</span>

              <ArrowUpRight className="size-4 text-muted-foreground" />
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
