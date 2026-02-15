import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import type { PostMeta } from "~/types/types";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="bg-gray-800 p-6 rounded-lg shadow mb-4">
      <div className="text-2xl font-semibold text-blue-400">{post.title}</div>
      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toDateString()}
      </p>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-300 text-sm hover:underline"
      >
        <span className="flex items-center gap-2">
          <span>Read More</span>
          <i>
            <FaArrowRight />
          </i>
        </span>
      </Link>
    </article>
  );
}
