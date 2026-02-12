import type { Project } from "~/types/types";
import type { Route } from "./+types/ProjectDetailsPage";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/${params.id}`,
  );
  console.log(import.meta.env.VITE_API_URL, params.id);

  if (!res.ok) throw new Response("Project not Found", { status: 404 });
  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loadin...</div>;
}

export function ProjectDetailsPage({ loaderData }: Route.ComponentProps) {
  const project = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <i className="mr-2">
          <FaArrowLeft />
        </i>
        <span>Back To Projects</span>
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <figure className="w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </figure>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition "
          >
            <span className="flex items-center gap-2">
              <span>View Live Site</span>
              <i>
                <FaArrowRight />
              </i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
