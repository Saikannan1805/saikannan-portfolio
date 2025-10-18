import { Container } from '@/components/container';
import { Glass } from '@/components/glass';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

export function Resume() {
  return (
    <Container id="resume">
      <Glass className="p-6 md:p-8 text-center" variant="panel">
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Resume
            </h2>
            <p className="text-base text-slate-400">
              Download or view my resume
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="default"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              asChild
            >
              <a href="/SaikannanSathish_Resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="default"
              className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 transition-all"
              asChild
            >
              <a href="/SaikannanSathish_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                Open in Browser
              </a>
            </Button>
          </div>
        </div>
      </Glass>
    </Container>
  );
}
