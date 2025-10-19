import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { delay } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
}

// Displays a single project card with title, summary, tech stack, and optional links
export function ProjectCard({ project }: ProjectCardProps) {
  const hasGitHub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  return (
    <Card className="h-full glass-panel-dark rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      {/* --- Header: Title & Summary --- */}
      <CardHeader className="pb-3">
        <div className="animate-fade-in" style={delay(15)}>
          <CardTitle className="text-lg font-semibold text-white mb-2">
            {project.title}
          </CardTitle>
        </div>
        <div className="animate-fade-in" style={delay(16)}>
          <p className="text-sm leading-relaxed text-slate-300">
            {project.summary}
          </p>
        </div>
      </CardHeader>

      {/* --- Content: Tags + Links --- */}
      <CardContent className="space-y-3 pt-0">
        {/* Tech stack / tags */}
        <div className="animate-fade-in" style={delay(17)}>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-700/50 text-slate-200 text-xs px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub and Demo buttons */}
        <div className="animate-fade-in" style={delay(18)}>
          <div className="flex gap-2">
            {/* GitHub link (disabled if missing) */}
            {hasGitHub ? (
              <Button variant="glass" size="sm" asChild>
                <a
                  href={project.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub`}
                  className="flex items-center gap-1.5 text-xs"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </Button>
            ) : (
              <Button variant="glass" size="sm" disabled className="text-xs">
                <Github size={14} />
                GitHub
              </Button>
            )}

            {/* Demo link (disabled if missing) */}
            {hasDemo ? (
              <Button variant="glass" size="sm" asChild>
                <a
                  href={project.demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} demo`}
                  className="flex items-center gap-1.5 text-xs"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </Button>
            ) : (
              <Button variant="glass" size="sm" disabled className="text-xs">
                <ExternalLink size={14} />
                Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
