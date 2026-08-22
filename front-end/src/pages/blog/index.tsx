import BlogCard from "@/components/Blog/BlogCard";
import BlogHero from "@/components/Blog/BlogHero";
import FeaturedPost from "@/components/Blog/FeaturedPost";

const posts = [{}, {}, {}, {}, {}];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-6">
        <BlogHero />

        <section className="pb-20">
          <FeaturedPost />
        </section>

        <section className="pb-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Latest</p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Latest articles</h2>
            </div>

            <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              View all →
            </button>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((_, index) => (
              <li key={index}>
                <BlogCard />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
