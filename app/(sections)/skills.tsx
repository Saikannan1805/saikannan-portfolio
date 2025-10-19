import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { Badge } from "@/components/ui/badge";
import { delay } from "@/lib/constants";

// Grouping related skill categories for clarity and scalability
const AI_STACK = [
  "Python",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "NLP",
  "Recommender Systems",
  "Computer Vision",
  "Deep Learning",
  "Machine Learning",
];

const SOFTWARE_DEPLOY = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Firebase",
  "FastAPI",
  "SQL",
  "Supabase",
  "Google Cloud Run",
  "Docker",
  "Git",
  "MLOps",
];

const SUPPORTING = [
  "Matplotlib",
  "Seaborn",
  "Data Science",
  "Automation Testing",
  "DSA",
  "AWS Academy Graduate",
];

// Rendering the Skills section with grouped stacks
export function Skills() {
  return (
    // Setting up container anchor for in-page navigation
    <Container id="skills">
      <div className="space-y-6">
        {/* Section header with short subtext */}
        <Glass className="p-4 text-center" variant="panel">
          <div className="animate-fade-in" style={delay(19)}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Skills
            </h2>
          </div>
          <div className="animate-fade-in" style={delay(20)}>
            <p className="text-sm text-slate-400">
              Focused on AI, Data Science, and Software Development
            </p>
          </div>
        </Glass>

        {/* Two-column layout: AIML stack and software stack */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left column — AIML stack */}
          <Glass className="p-4 md:p-5" variant="panel">
            <div className="animate-fade-in" style={delay(21)}>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                AIML & Data Science Stack
              </h3>
            </div>
            <div className="animate-fade-in" style={delay(22)}>
              {/* Displaying badges for each AIML skill */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                {AI_STACK.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-slate-700/50 text-slate-200 px-2.5 py-1 text-sm hover:bg-slate-600/60 hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Glass>

          {/* Right column — Software and deployment stack */}
          <Glass className="p-4 md:p-5" variant="panel">
            <div className="animate-fade-in" style={delay(23)}>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                Software & Deployment
              </h3>
            </div>
            <div className="animate-fade-in" style={delay(24)}>
              {/* Rendering each software/deployment skill as a badge */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                {SOFTWARE_DEPLOY.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-slate-700/50 text-slate-200 px-2.5 py-1 text-sm hover:bg-slate-600/60 hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Glass>
        </div>

        {/* Full-width supporting tools section */}
        <Glass className="p-4 md:p-5" variant="panel">
          <div className="animate-fade-in" style={delay(25)}>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Supporting Tools & Concepts
            </h3>
          </div>
          <div className="animate-fade-in" style={delay(26)}>
            {/* Rendering smaller badges for secondary tools */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              {SUPPORTING.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-700/50 text-slate-200 px-2.5 py-1 text-sm hover:bg-slate-600/60 hover:text-white transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </Glass>
      </div>
    </Container>
  );
}
