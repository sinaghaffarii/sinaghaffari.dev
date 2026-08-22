export default function FeaturedPost() {
  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative p-8 sm:p-12">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Featured article
        </span>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Building a scalable React architecture
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          How I think about structuring React applications as they grow from a small project into a
          maintainable production system.
        </p>

        <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Architecture</span>
          <span>·</span>
          <span>8 min read</span>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
          Read article
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}
