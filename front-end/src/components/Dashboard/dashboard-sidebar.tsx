"use client";

import { Link } from "react-router";
import { PenLine, PanelLeftClose } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dashboardNavigation } from "@/data/dashboard";

type DashboardSidebarProps = {
  collapsed?: boolean;
  onCollapse?: () => void;
};

export function DashboardSidebar({ collapsed = false, onCollapse }: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden border-r bg-background transition-all duration-200 lg:flex lg:flex-col",
        collapsed ? "w-[76px]" : "w-[254px]",
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "flex h-[88px] items-center border-b px-6",
          collapsed && "justify-center px-0",
        )}
      >
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary">
            <PenLine className="size-5 text-primary-foreground" />
          </div>

          {!collapsed && (
            <span className="text-[17px] font-semibold tracking-tight">Blog Admin</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {dashboardNavigation.map((item) => {
          const Icon = item.icon;

          if (item.disabled) {
            return (
              <div
                key={item.label}
                title={`${item.label} is coming soon`}
                className={cn(
                  "flex h-12 items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground/50",
                  collapsed && "justify-center px-0",
                )}
              >
                <Icon className="size-[19px]" />

                {!collapsed && (
                  <>
                    <span>{item.label}</span>

                    <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium">
                      Soon
                    </span>
                  </>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href ?? "#"}
              className={cn(
                "flex h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                item.label === "Dashboard" &&
                  "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                collapsed && "justify-center px-0",
              )}
            >
              <Icon className="size-[19px]" />

              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-5">
        <Separator className="mb-4" />

        <Button
          variant="ghost"
          onClick={onCollapse}
          className={cn(
            "w-full justify-start gap-3 text-muted-foreground",
            collapsed && "justify-center px-0",
          )}
        >
          <PanelLeftClose className="size-[18px]" />

          {!collapsed && <span>Collapse</span>}
        </Button>
      </div>
    </aside>
  );
}
