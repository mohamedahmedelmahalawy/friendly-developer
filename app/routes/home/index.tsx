import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";
import AboutPreview from "~/components/about-preview/AboutPreview";
import FeaturedProject from "~/components/featured-project/FeaturedProject";
import type { Project } from "~/types/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "custom website developement" },
  ];
}

export async function loader({
  req,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProject projects={projects} count={2} />
      <AboutPreview />
    </>
  );
}

export default HomePage;
