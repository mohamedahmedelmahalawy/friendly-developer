import { BsStars } from "react-icons/bs";
import type { Project } from "~/types/types";
import ProjectCard from "../project-card/ProjectCard";

interface FeaturedProjectProps {
  projects: Project[];
  count: number;
}

function FeaturedProject({ projects, count = 4 }: FeaturedProjectProps) {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200">
        <i>
          <BsStars />
        </i>
        <span>Featured Projects</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProject;
