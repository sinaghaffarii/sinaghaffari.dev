"use client";

import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type DashboardHeaderProps = {
  onMenuClick?: () => void;
};

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[88px] items-center justify-between border-b bg-background/95 px-5 backdrop-blur lg:px-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="size-5" />
        </Button>

        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
      </div>

      <div className="hidden w-full max-w-[390px] md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search something..."
            className="h-11 rounded-xl bg-muted/20 pl-10 pr-14"
          />

          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ⌘ K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon">
          <Sun className="size-5" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />

          <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground">
            3
          </span>
        </Button>

        <button className="ml-2 flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted">
          <Avatar className="size-8">
            <AvatarImage src="/avatars/sina.jpg" alt="Sina Ghaffari" />
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium">Sina Ghaffari</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>

          <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
        </button>
      </div>
    </header>
  );
}
