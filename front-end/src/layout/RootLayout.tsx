import { Menu } from "lucide-react";
import { siGithub } from "simple-icons";
import { Link, Outlet } from "react-router";

import { ModeToggle } from "@/components/Theme/mode-toggle";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { AnimatedGridBackground } from "@/components/ui/AnimatedGridBackground";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/BrandIcon";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2">
              <span
                className="
                  flex
                  size-7
                  items-center
                  justify-center
                  rounded-md
                  border
                  bg-foreground
                  text-xs
                  font-bold
                  text-background
                  transition-transform
                  duration-200
                  group-hover:rotate-6
                "
              >
                S
              </span>

              <span className="text-sm font-semibold tracking-tight">Sina.dev</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <Link
                to="/"
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Home
              </Link>

              <Link
                to="/blog"
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Blog
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/sinaghaffarii"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-md
                  text-muted-foreground
                  transition-colors
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                <BrandIcon icon={siGithub} className="size-4" />
              </a>

              <ModeToggle />

              <Button
                variant="ghost"
                size="icon"
                className="size-9 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Global background */}
        <AnimatedGridBackground>
          <main className="mx-auto max-w-7xl px-6">
            <Outlet />
          </main>
        </AnimatedGridBackground>

        {/* Footer */}
        <footer className="border-t">
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-3
              px-6
              py-8
              text-sm
              text-muted-foreground
              sm:flex-row
            "
          >
            <p>© {new Date().getFullYear()} Sina.dev</p>

            <p>Built with React & TypeScript</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
