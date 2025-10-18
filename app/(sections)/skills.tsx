import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { Badge } from "@/components/ui/badge";

// --- AI & Data Science Stack ---
const AI_STACK = [
  // Language
  "Python",

  // Core ML Frameworks
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",

  // Data Handling
  "Pandas",
  "NumPy",

  // Model Domains
  "NLP",
  "Recommender Systems",
  "Computer Vision",
  "Deep Learning",
  "Machine Learning",
];

// --- Software & Deployment Stack ---
const SOFTWARE_DEPLOY = [
  // Development & Frontend
  "JavaScript",
  "React.js",
  "Next.js",
  "Firebase",

  // Backend & API
  "FastAPI",
  "SQL",

  // Cloud & Deployment
  "Supabase",
  "Google Cloud Run",
  "Docker",

  // Version Control
  "Git",

  // Lifecycle
  "MLOps",
];

// --- Supporting Tools & Concepts ---
const SUPPORTING = [
  "Matplotlib",
  "Seaborn",
  "Data Science",
  "Automation Testing",
  "DSA",
  "AWS Academy Graduate",
];

export function Skills() {
  return (
    <Container id="skills">
      <div className="space-y-6">
        {/* --- Header --- */}
        <Glass className="p-4 text-center" variant="panel">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Skills
          </h2>
          <p className="text-sm text-slate-400">
            Focused on AI, Data Science, and Software Development
          </p>
        </Glass>

        {/* --- Two balanced columns --- */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left: AI & Data Science */}
          <Glass className="p-4 md:p-5" variant="panel">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              AIML & Data Science Stack
            </h3>
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
          </Glass>

          {/* Right: Software & Deployment */}
          <Glass className="p-4 md:p-5" variant="panel">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Software & Deployment
            </h3>
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
          </Glass>
        </div>

        {/* --- Full-width Supporting section --- */}
        <Glass className="p-4 md:p-5" variant="panel">
          <h3 className="text-lg font-semibold text-white mb-3 text-center">
            Supporting Tools & Concepts
          </h3>
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
        </Glass>
      </div>
    </Container>
  );
}
