import { Link } from "react-router";
import type { PostMeta } from "~/types/types";
import { MdFiberNew } from "react-icons/md";
import { useState } from "react";

interface LatestPostsProps {
  posts: PostMeta[];
  limit?: number;
}

function LatestPosts({ posts, limit = 3 }: LatestPostsProps) {
  const sortedPosts = [...posts].sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const latestSortedPosts = sortedPosts.slice(0, limit);
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 h2">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <i>
          <MdFiberNew />
        </i>
        <span>Latest Posts</span>
      </h2>
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestSortedPosts.map((post) => (
          <Link
            to={`blog/${post.slug}`}
            key={post.slug}
            className="blovk p-4 border border-gray-700 rounded-l bg-gray-800 hover:shadow-md transition flex flex-col justify-between h-full"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-1 line-clamp-2">
              {post.title}
            </h3>
            <div>
              <p className="text-sm text-gray-300">{post.excerpt}</p>
              <span className="block mt-3 text-xs text-gray-400">
                {new Date(post.date).toDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;
