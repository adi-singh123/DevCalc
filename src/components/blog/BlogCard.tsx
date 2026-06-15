import Link from "next/link";

import { Blog } from "@/src/types/blog";

type Props = {
  blog: Blog;
};

export default function BlogCard({
  blog,
}: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="
        group
        block
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Category */}
      <span
        className="
          inline-flex
          rounded-full
          bg-blue-100
          px-3
          py-1
          text-xs
          font-medium
          text-blue-700
        "
      >
        {blog.category}
      </span>

      {/* Title */}
      <h2
        className="
          mt-4
          text-xl
          font-bold
          leading-snug
          transition-colors
          group-hover:text-blue-600
        "
      >
        {blog.title}
      </h2>

      {/* Description */}
      <p
        className="
          mt-3
          line-clamp-3
          text-sm
          leading-6
          text-slate-600
        "
      >
        {blog.description}
      </p>

      {/* Footer */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          pt-4
          text-xs
          text-slate-500
        "
      >
        <span>{blog.author}</span>

        <span>{blog.readingTime}</span>
      </div>
    </Link>
  );
}