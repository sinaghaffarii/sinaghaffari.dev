import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { RecentPost } from "@/data/dashboard";

type RecentPostsProps = {
  posts: RecentPost[];
};

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <Card className="rounded-2xl border bg-background p-6 shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Recent Posts</h2>

        <Link to="/dashboard/posts" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-4 divide-y">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/dashboard/posts/${post.id}`}
            className="group flex items-center gap-3 py-4"
          >
            <span
              className={[
                "size-2 shrink-0 rounded-full",
                post.status === "Published" ? "bg-emerald-500" : "bg-amber-500",
              ].join(" ")}
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium group-hover:text-primary">{post.title}</p>

              <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
            </div>

            <Badge
              variant="secondary"
              className={[
                "rounded-full px-3 font-normal",
                post.status === "Published"
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-300",
              ].join(" ")}
            >
              {post.status}
            </Badge>
          </Link>
        ))}
      </div>
    </Card>
  );
}
