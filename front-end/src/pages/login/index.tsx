import { LoginForm } from "@/components/Auth/LoginForm";
import { LoginVisual } from "@/components/Auth/LoginVisual";

export default function Login() {
  return (
    <div className="min-h-screen">
      <div className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        {/* Extra soft glows behind the glass card, on top of the shared grid/beams */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div
          className="
            relative grid w-full max-w-5xl
            overflow-hidden rounded-3xl
            border border-border/50
            bg-background/25
            shadow-2xl
            ring-1 ring-inset ring-white/10
            backdrop-blur-2xl
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* Decorative corners */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 size-32 rounded-br-full bg-primary/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 size-32 rounded-tl-full bg-primary/5"
          />

          {/* Visual */}
          <LoginVisual />

          {/* Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
