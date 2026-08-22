import { ArrowLeft, RefreshCcw } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

import { Button } from "@/components/ui/button";

export default function RouterError() {
  const error = useRouteError();

  let status = "500";
  let title = "Something went wrong";
  let description = "An unexpected error occurred while loading this page.";

  if (isRouteErrorResponse(error)) {
    status = String(error.status);
    title = error.statusText || "Request failed";

    if (error.status === 404) {
      title = "Page not found";
      description = "The page you're looking for doesn't exist.";
    }
  } else if (error instanceof Error) {
    description = error.message;
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <div className="w-full max-w-lg text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          ERROR / {status}
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 flex justify-center gap-2">
          <Button onClick={() => window.location.reload()}>
            <RefreshCcw />
            Try again
          </Button>

          <Button
            variant="ghost"
            render={
              <Link to="/">
                <ArrowLeft />
                Back home
              </Link>
            }
          />
        </div>
      </div>
    </section>
  );
}
