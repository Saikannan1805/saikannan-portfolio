import Image from "next/image";
import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { delay } from "@/lib/constants";

// Exporting the About section as a named component
export function About() {
  return (
    // Constraining max width and anchoring for in-page nav
    <Container id="about" className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 mb-10">
        {/* Staggering avatar entrance */}
        <div className="animate-fade-in" style={delay(1)}>
          <div className="flex justify-center md:justify-end md:flex-[0.35] lg:flex-[0.3] items-center">
            {/* Sizing avatar responsively with fixed aspect ratio */}
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
              {/* Using next/image fill + sizes to serve correct resolutions */}
              <Image
                src="/me2.jpg"
                alt="Saikannan Sathish portrait"
                fill
                sizes="(max-width: 480px) 80px,
             (max-width: 640px) 96px,
             (max-width: 1024px) 128px,
             160px"
                priority
                // Applying circular crop and soft outer glow for contrast
                className="rounded-full object-cover shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              />
            </div>
          </div>
        </div>

        {/* Staggering text block entrance and centering vertically */}
        <div className="flex-1 flex items-center w-full">
          <div className="p-6 md:p-10 w-full h-full flex flex-col justify-center">
            {/* Applying subtle glow pulse on name */}
            <div className="animate-fade-in" style={delay(2)}>
              {/* Using text-shadow mix: light outer glow + dark drop for readability */}
              <h1
                className="glow-pulse text-5xl md:text-6xl font-extrabold text-white tracking-tight
                 [text-shadow:_0_0_10px_rgba(255,255,255,0.4),_0_2px_6px_rgba(0,0,0,0.6)]"
              >
                Saikannan Sathish
              </h1>
            </div>

            {/* Separating title for better line height and rhythm */}
            <div className="animate-fade-in" style={delay(3)}>
              <p
                className="text-xl md:text-2xl text-slate-100 mt-3 font-semibold
                 [text-shadow:_0_0_8px_rgba(255,255,255,0.3),_0_2px_5px_rgba(0,0,0,0.5)] leading-snug"
              >
                AI/ML Engineer • Software Developer
              </p>
            </div>

            {/* Showing concise education line with lighter emphasis */}
            <div className="animate-fade-in" style={delay(4)}>
              <p
                className="text-lg md:text-xl text-slate-300 mt-1 font-normal
                 [text-shadow:_0_0_6px_rgba(255,255,255,0.25),_0_1px_3px_rgba(0,0,0,0.6)]"
              >
                Graduate CS @ SUNY Binghamton
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structuring content row: left (tech) wider than right (personal) */}
      <div className="grid gap-6 md:grid-cols-12 items-start">
        {/* Rendering technical bio card with glass panel */}
        <div className="md:col-span-7 lg:col-span-8">
          <Glass className="p-6 md:p-8 text-left" variant="panel">
            <div className="space-y-4">
              {/* Delaying heading to follow avatar/text rhythm */}
              <div className="animate-fade-in" style={delay(5)}>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  About Me
                </h2>
              </div>

              {/* Using softer copy with emphasized key terms */}
              <div className="animate-fade-in" style={delay(6)}>
                <p className="text-base md:text-lg leading-relaxed text-slate-400">
                  I’m a Computer Science graduate student driven by curiosity
                  and a passion for building meaningful technology. I love
                  exploring where <span className="text-slate-200">AI</span>,{" "}
                  <span className="text-slate-200">data</span>, and{" "}
                  <span className="text-slate-200">design</span> meet - where
                  logic blends with creativity.
                  <br />
                  <br />I believe growth comes from constant learning and
                  experimentation, evolving as an engineer who values both
                  <span className="text-slate-200">
                    {" "}
                    technical excellence{" "}
                  </span>{" "}
                  and the
                  <span className="text-slate-200">
                    {" "}
                    human connection{" "}
                  </span>{" "}
                  that drives innovation.
                </p>

                {/* Keeping optional tag list ready for future surfacing */}
                {/*
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Machine Learning",
                    "NLP",
                    "Recommenders",
                    "FastAPI",
                    "Next.js",
                    "GCP",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                */}
              </div>
            </div>
          </Glass>
        </div>

        {/* Rendering personal highlights card with balanced contrast */}
        <div className="md:col-span-5 lg:col-span-4">
          <Glass className="p-6 md:p-8 text-left" variant="panel">
            <div className="space-y-3">
              {/* Matching hierarchy level to keep right panel lighter */}
              <div className="animate-fade-in" style={delay(7)}>
                <h3 className="text-xl font-semibold text-white">
                  Beyond my Resume
                </h3>
              </div>

              {/* Mixing short lines with spans to keep emphasis subtle */}
              <div className="animate-fade-in" style={delay(8)}>
                <p className="text-slate-400">
                  A{" "}
                  <span className="text-slate-200">
                    national-level tennis player
                  </span>{" "}
                  for
                  <span className="text-slate-200"> 19 years</span>, I’ve
                  learned discipline, focus, and composure that guide how I
                  think and grow.
                  <br />
                  Off the court, I stay{" "}
                  <span className="text-slate-200"> health-conscious</span>,
                  enjoy <span className="text-slate-200"> music</span>, and read
                  <span className="text-slate-200"> self-help books</span> that
                  keep me balanced, curious, and connected beyond technology.
                </p>
              </div>
            </div>
          </Glass>
        </div>
      </div>
    </Container>
  );
}
