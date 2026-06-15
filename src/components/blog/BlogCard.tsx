import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/src/types/blog";

export default function BlogCard({
  blog,
}: {
  blog: Blog;
}) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl text-4xl text-black ">
            {blog.icon}
     </div>

      <div className="p-5">
        <h2 className="line-clamp-2 text-xl font-bold">
          {blog.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-slate-600">
          {blog.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>
            {blog.author}
          </span>

          <span>
            {blog.publishedDate}
          </span>
        </div>
      </div>
    </Link>
  );
}