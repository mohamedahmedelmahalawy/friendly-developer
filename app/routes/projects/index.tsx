import type { Project } from "~/types/types";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/project-card/ProjectCard";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8001/projects");
  const data = await res.json();
  return { projects: data };
}

function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Project[] };
  console.log(projects);
  return (
    <section>
      <h2 className="text-3xl text-white font-bold mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
