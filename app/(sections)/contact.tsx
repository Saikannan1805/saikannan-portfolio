import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { delay } from "@/lib/constants";

export function Contact() {
  return (
    <Container id="contact">
      <Glass className="p-6 md:p-8 text-center" variant="panel">
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="space-y-2">
            <div className="animate-fade-in" style={delay(27)}>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Get In Touch
              </h2>
            </div>
            <div className="animate-fade-in" style={delay(28)}>
              <p className="text-base text-slate-400">
                Let&apos;s collaborate or connect!
              </p>
            </div>
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
              <div className="animate-fade-in" style={delay(29)}>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Contact
                </h3>
              </div>

              {/* Primary CTA: Email */}
              <div className="flex justify-center md:justify-start">
                <div className="animate-fade-in" style={delay(30)}>
                  <Button variant="glass" size="default" asChild>
                    <a
                      href="mailto:ssathish2@binghamton.edu"
                      aria-label="Email ssathish2@binghamton.edu"
                      className="flex items-center gap-2"
                    >
                      <Mail className="size-4" />
                      ssathish2@binghamton.edu
                    </a>
                  </Button>
                </div>
              </div>

              {/* Secondary CTAs: Socials */}
              <div className="flex gap-3 justify-center md:justify-start">
                <div className="animate-fade-in" style={delay(30)}>
                  <Button variant="glass" size="sm" asChild>
                    <a
                      href="https://github.com/Saikannan1805"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub profile"
                      className="flex items-center gap-2"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
                <div className="animate-fade-in" style={delay(30)}>
                  <Button variant="glass" size="sm" asChild>
                    <a
                      href="https://www.linkedin.com/in/saikannansathish/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open LinkedIn profile"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="size-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Resume */}
            <div className="space-y-4 md:px-8 pt-6 md:pt-0">
              <div className="animate-fade-in" style={delay(31)}>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Resume
                </h3>
              </div>
              <div className="animate-fade-in" style={delay(32)}>
                <p className="text-slate-400">Download or view my resume</p>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <div className="animate-fade-in" style={delay(33)}>
                  <Button variant="glass" size="default" asChild>
                    <a
                      href="/SaikannanSathish_Resume.pdf"
                      download
                      aria-label="Download resume PDF"
                      className="flex items-center gap-2"
                    >
                      <Download className="size-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="animate-fade-in" style={delay(33)}>
                  <Button variant="glass" size="default" asChild>
                    <a
                      href="/SaikannanSathish_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open resume in browser"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="size-4" />
                      Open in Browser
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Glass>
    </Container>
  );
}
