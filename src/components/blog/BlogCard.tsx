import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Blog } from "@/src/types/blog";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-stone-200
        bg-[#faf7f0]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1f3a5c]/50
        hover:shadow-md
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Classic top accent bar — reveals on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#1f3a5c] transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Category */}
      <span className="inline-flex w-fit items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
        {blog.category}
      </span>

      {/* Title */}
      <h2 className="mt-4 font-serif text-xl font-semibold leading-snug tracking-tight text-[#26364a] transition-colors group-hover:text-[#1f3a5c] dark:text-white dark:group-hover:text-blue-400">
        {blog.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-stone-600 dark:text-slate-400">
        {blog.description}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4 text-xs text-stone-500 dark:border-slate-800 dark:text-slate-400">
        <span>{blog.author}</span>
        <span className="flex items-center gap-2">
          {blog.readingTime}
          <ArrowRight
            size={14}
            className="text-[#1f3a5c] transition-transform duration-300 group-hover:translate-x-1 dark:text-blue-400"
          />
        </span>
      </div>
    </Link>
  );
}
