import { Project } from '@/lib/projects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full glass-panel-dark rounded-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-white mb-2">
          {project.title}
        </CardTitle>
        <p className="text-sm leading-relaxed text-slate-300">
          {project.summary}
        </p>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
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
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-xs px-3 py-1.5"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-xs px-3 py-1.5"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
