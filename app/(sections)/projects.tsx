import { Container } from '@/components/container';
import { Glass } from '@/components/glass';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects';

export function Projects() {
  return (
    <Container id="projects">
      <div className="space-y-6">
        <Glass className="p-4 text-center" variant="panel">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Projects
          </h2>
          <p className="text-sm text-slate-400">
            Showcase of my work in AI/ML and software development
          </p>
        </Glass>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
