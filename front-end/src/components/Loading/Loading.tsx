export default function Loading() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="relative flex size-4">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/20" />

          <span className="relative inline-flex size-4 rounded-full bg-foreground/60" />
        </span>
        Loading content...
      </div>
    </section>
  );
}
