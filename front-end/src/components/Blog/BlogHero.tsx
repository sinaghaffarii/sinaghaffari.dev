export default function BlogHero() {
  return (
    <section className="relative mx-auto max-w-4xl py-24 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        Thoughts, experiments & engineering
      </div>

      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Building things.
        <br />
        <span className="text-muted-foreground">Understanding how they work.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Notes about frontend engineering, React, Next.js, performance, architecture and the things I
        learn while building software.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["React", "Next.js", "TypeScript", "Architecture", "Performance"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
