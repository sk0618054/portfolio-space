import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className={`w-full ${
              index % 3 === 0 ? "md:w-1/2 lg:w-1/4" : "md:w-1/2 lg:w-1/4"
            } p-4`}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
