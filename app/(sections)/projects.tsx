import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { delay } from "@/lib/constants";

// Rendering the Projects section that lists all showcased works
export function Projects() {
  return (
    // Anchoring section for smooth scrolling
    <Container id="projects">
      <div className="space-y-6">
        {/* Section heading with short intro text */}
        <Glass className="p-4 text-center" variant="panel">
          <div className="animate-fade-in" style={delay(13)}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Projects
            </h2>
          </div>
          <div className="animate-fade-in" style={delay(14)}>
            <p className="text-sm text-slate-400">
              Showcase of my work in AI/ML and software development
            </p>
          </div>
        </Glass>

        {/* Displaying project cards in a responsive grid layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            // Passing each project object to the reusable card component
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
