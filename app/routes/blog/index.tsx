import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "custom website developement | Blog" },
  ];
}
function BlogPage() {
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">blog</h2>
    </>
  );
}

export default BlogPage;
