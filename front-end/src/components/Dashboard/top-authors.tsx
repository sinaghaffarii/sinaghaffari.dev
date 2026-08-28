import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type Author = {
  id: string;
  name: string;
  posts: number;
  avatar?: string;
};

type TopAuthorsProps = {
  authors: Author[];
};

export function TopAuthors({ authors }: TopAuthorsProps) {
  return (
    <Card className="rounded-2xl border bg-background p-6 shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Top Authors</h2>

        <Link to="/dashboard/authors" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-4 space-y-4">
        {authors.map((author) => (
          <div key={author.id} className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarImage src={author.avatar} alt={author.name} />

              <AvatarFallback>
                {author.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{author.name}</p>
            </div>

            <span className="text-xs text-muted-foreground">{author.posts} posts</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
