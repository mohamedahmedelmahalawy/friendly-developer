import type { PostMeta } from "~/types/types";
import type { Route } from "./+types";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PostCard from "~/components/post-card/PostCard";
import { useState } from "react";
import Pagination from "~/components/pagination/Pagination";
import PostFilter from "~/components/post-filter/PostFilter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "custom website developement | Blog" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Faild to fetch data.");
  const data = await res.json();
  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return { posts: data };
}
function BlogPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const changeHandler = (value: number) => {
    setCurrentPage(value);
  };
  const searchHandler = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">blog</h2>
      <PostFilter searchQuery={searchQuery} onSearchChange={searchHandler} />
      <div className="space-y-8">
        {currentPosts.length === 0 && (
          <p className="text-gray-400 text-center">No posts Found.</p>
        )}
        {currentPosts.length > 0 &&
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changeHandler}
        />
      )}
    </div>
  );
}

export default BlogPage;
