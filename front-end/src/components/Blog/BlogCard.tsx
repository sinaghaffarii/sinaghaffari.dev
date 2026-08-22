import { ArrowUpRight, Clock3, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

import CuteProgrammer from "../../../public/images/cute-programmer.jpg";

const BlogCard = () => {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl border bg-muted">
        <img
          src={CuteProgrammer}
          alt="Cute programmer illustration"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          AI & Engineering
        </span>
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Meta */}
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span>July 3, 2025</span>

          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />

          <span className="inline-flex items-center gap-1">
            <Clock3 className="size-3" />8 min read
          </span>

          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />

          <span className="inline-flex items-center gap-1">
            <Eye className="size-3" />
            45
          </span>
        </div>

        {/* Title */}
        <h2 className="max-w-xl text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
          How AI Is Changing the Future of Software Engineering
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-6 text-muted-foreground">
          AI is changing how software is built, but the fundamentals of engineering are becoming
          more important than ever.
        </p>

        {/* Action */}
        <Button
          variant="link"
          className="mt-3 h-auto p-0 text-sm font-medium text-foreground hover:no-underline"
        >
          Read article
          <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </article>
  );
};

export default BlogCard;
