import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="font-mono text-[clamp(6rem,15vw,10rem)] font-bold leading-none tracking-tighter text-muted-foreground/10">
          404
        </div>

        <div className="-mt-4">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Page not found
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            This page doesn't exist.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            The page you're looking for may have been moved, deleted, or never existed in the first
            place.
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <Button
              render={
                <Link to="/">
                  <Home />
                  Back home
                </Link>
              }
            />

            <Button
              variant="ghost"
              render={
                <Link to="/blog">
                  Explore blog
                  <ArrowLeft />
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
