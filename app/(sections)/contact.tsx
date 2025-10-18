import { Container } from '@/components/container';
import { Glass } from '@/components/glass';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <Container id="contact">
      <Glass className="p-6 md:p-8 text-center" variant="panel">
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-base text-slate-400">Let&apos;s collaborate or connect!</p>
          </div>

          {/* Two-column layout with subtle divider */}
          <div
            className="
              grid gap-8 md:grid-cols-2 md:gap-0
              md:divide-x md:divide-white/10
              text-left md:items-start
            "
          >
            {/* LEFT COLUMN — Contact */}
            <div className="space-y-3 md:px-8">
              <h3 className="text-lg md:text-xl font-semibold text-white">Contact</h3>

              {/* Primary CTA: Email */}
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="default"
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 transition-all"
                  asChild
                >
                  {/* Keeping your existing mailto + visible address exactly as-is */}
                  <a href="mailto:youremail@example.com" aria-label="Email ssathish2@binghamton.edu">
                    <Mail size={18} />
                    ssathish2@binghamton.edu
                  </a>
                </Button>
              </div>

              {/* Secondary CTAs: Socials */}
              <div className="flex gap-3 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 transition-all"
                  asChild
                >
                  <a
                    href="https://github.com/Saikannan1805"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub profile"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 transition-all"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/saikannansathish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn profile"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN — Resume */}
            <div className="space-y-4 md:px-8 pt-6 md:pt-0">
              <h3 className="text-lg md:text-xl font-semibold text-white">Resume</h3>
              <p className="text-slate-400">Download or view my resume</p>

              <div className="flex gap-3 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="default"
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 transition-all"
                  asChild
                >
                  <a href="/SaikannanSathish_Resume.pdf" download aria-label="Download resume PDF">
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
                  <a
                    href="/SaikannanSathish_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in browser"
                  >
                    <ExternalLink size={18} />
                    Open in Browser
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Glass>
    </Container>
  );
}
