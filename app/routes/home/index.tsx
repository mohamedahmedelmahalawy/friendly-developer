import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";
import AboutPreview from "~/components/about-preview/AboutPreview";
import FeaturedProject from "~/components/featured-project/FeaturedProject";
import type { PostMeta, Project } from "~/types/types";
import LatestPosts from "~/components/lastest-posts/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "custom website developement" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", url)),
  ]);
  if (!projectRes.ok || !postRes.ok)
    throw new Error("Faild to fetch Projects or Posts");

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);
  // console.log(projects, posts);
  return { projects, posts };
}

function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} />
    </>
  );
}

export default HomePage;
