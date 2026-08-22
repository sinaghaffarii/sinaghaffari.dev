import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean(),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  async function onSubmit(values: LoginValues) {
    // TODO: replace with your authentication request.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  }

  return (
    <section className="flex min-h-[620px] items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-border bg-muted/40 lg:hidden">
            <span className="text-sm font-black">S</span>
          </div>

          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Welcome back
          </p>

          <h2 className="text-2xl font-bold tracking-tight">Sign in to your space</h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Enter your credentials to continue to your workspace.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={cn(
                  "h-11 pl-10",
                  errors.email && "border-destructive focus-visible:ring-destructive",
                )}
                {...register("email")}
              />
            </div>

            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>

              <button
                type="button"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                className={cn(
                  "h-11 pl-10 pr-10",
                  errors.password && "border-destructive focus-visible:ring-destructive",
                )}
                {...register("password")}
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* Remember */}
          <label className="flex cursor-pointer items-center gap-2">
            <Controller
              control={control}
              name="remember"
              render={({ field }) => (
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              )}
            />

            <span className="text-xs text-muted-foreground">Keep me signed in</span>
          </label>

          {/* Submit */}
          <Button type="submit" disabled={isSubmitting} className="group h-11 w-full">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Sign in
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            )}
          </Button>
        </form>

        {/* Security note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
          <LockKeyhole className="size-3" />

          <span>Your connection is encrypted and secure</span>
        </div>
      </div>
    </section>
  );
}
