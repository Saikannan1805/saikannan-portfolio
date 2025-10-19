import Image from "next/image";
import { Container } from "@/components/container";
import { Glass } from "@/components/glass";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { delay } from "@/lib/constants";

// Defining a compact type for each experience card
type Exp = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo?: string;
};

// Listing experience entries that drive the grid below
const experiences: Exp[] = [
  {
    company: "Uplifty AI • Intern",
    role: "Machine Learning Engineer",
    duration: "Aug 2025 - Present",
    description: `• Designed and deployed machine learning models for content feed personalization and moderation using NLP, deep learning, and recommendation systems.
  • Implemented cold-start mitigation and ranking optimization strategies to improve model coverage and engagement accuracy.
  • Built and containerized inference APIs with FastAPI and integrated deployments on Google Cloud Run through Supabase Edge Functions.
  • Developed scalable data pipelines for feature engineering and preprocessing to support real-time predictions.
  • Conducted A/B tests and performance evaluations using Matplotlib and Tableau to measure model impact on user interaction metrics.`,
    logo: "/logos/upliftyai.jpg",
  },

  {
    company: "iTechnowiZ Solutions • Intern",
    role: "Automation Test Engineer",
    duration: "Mar 2024 - Jun 2024",
    description: `• Designed and implemented the Page Object Model (POM) architecture in Selenium, streamlining framework scalability and improving overall automation efficiency by 35%.
  • Automated 500+ end-to-end regression and smoke test cases across multiple web applications, increasing test coverage by 40% and accelerating release cycles.
  • Developed reusable automation libraries and keyword-driven scripts using Python and Robot Framework, reducing manual testing overhead and enhancing maintainability.
  • Integrated automation pipelines with Jenkins CI/CD workflows for scheduled test execution, reporting, and failure analysis.
  • Collaborated with developers and QA leads in an Agile environment to align automation strategy with sprint goals and evolving client requirements.`,
    logo: "/logos/itechnowiz.jpg",
  },

  {
    company: "Verzeo • Intern",
    role: "AIML Engineer",
    duration: "Dec 2022 - Feb 2023",
    description: `• Developed a real-time hand gesture recognition system leveraging TensorFlow and OpenCV to detect and classify dynamic gestures from live camera streams.
  • Implemented an object detection API using the TensorFlow Object Detection Framework, improving recognition accuracy by 92% through model fine-tuning and dataset optimization.
  • Annotated and prepared custom datasets with LabelImg, applying augmentation and preprocessing techniques to enhance model robustness under varying lighting and backgrounds.
  • Integrated the trained model into cross-platform applications, ensuring efficient inference and seamless interaction within user-facing interfaces.
  • Collaborated with UI/UX and software engineering teams to align deployment strategy with functional requirements and user experience goals.`,
    logo: "/logos/verzeo.jpg",
  },

  {
    company: "Qurinom Solutions • Intern",
    role: "Mobile App Developer",
    duration: "Jan 2022 - Mar 2022",
    description: `• Designed and developed *PILGRIM*, a cross-platform travel companion application using Flutter and Firebase, enabling seamless trip planning and social interaction among travelers.
  • Implemented robust state management with Provider and integrated user authentication workflows via Firebase Auth for secure, real-time access.
  • Architected and optimized scalable NoSQL data models in Firestore to ensure efficient synchronization and minimal read/write latency across devices.
  • Integrated REST APIs, Google Maps, and location services to deliver contextual, data-driven recommendations within the app.
  • Collaborated closely with product managers, designers, and backend engineers to refine app functionality and elevate user experience across platforms.`,
    logo: "/logos/qurinom.jpg",
  },
];

// Rendering the Experience section with a glass header and a responsive grid
export function Experience() {
  return (
    <Container id="experience">
      <div className="space-y-6">
        {/* Showing section title inside a compact glass panel */}
        <Glass className="p-4 text-center" variant="panel">
          <div className="animate-fade-in" style={delay(9)}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Professional Experience
            </h2>
          </div>
          <div className="animate-fade-in" style={delay(10)}>
            <p className="text-sm text-slate-400">
              Journey across AI/ML, Software Development, and Automation
            </p>
          </div>
        </Glass>

        {/* Laying out experience cards in 2 columns on md+ */}
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp, index) => (
            // Applying translucent card style consistent with the theme
            <Card
              key={index}
              className="glass-panel-dark rounded-xl border border-white/10"
            >
              {/* Aligning role/company text with a right-side logo block */}
              <CardHeader className="pb-3">
                <div className="flex items-stretch gap-3">
                  {/* Wrapping left text side with min-w-0 to handle overflow gracefully */}
                  <div className="min-w-0 flex-1">
                    <div className="animate-fade-in" style={delay(11)}>
                      <CardTitle className="text-lg text-white mb-1">
                        {exp.role}
                      </CardTitle>
                      <p className="text-slate-300 font-medium text-sm">
                        {exp.company}
                      </p>
                      {/* Showing duration as a subtle badge rather than body text */}
                      <Badge
                        variant="secondary"
                        className="mt-1 bg-slate-700/50 text-slate-200 text-xs inline-block"
                      >
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>

                  {/* Rendering company logo only when provided; preserving square aspect */}
                  {exp.logo && (
                    <div className="shrink-0 self-stretch flex items-center">
                      <div className="h-full aspect-square rounded-md overflow-hidden max-h-14 md:max-h-16 flex items-center justify-center">
                        <div className="animate-fade-in" style={delay(11)}>
                          {/* Using next/image to keep logos crisp without layout shift */}
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={64}
                            height={64}
                            className="h-full w-full object-contain"
                            priority={false}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Preserving line breaks in description with whitespace-pre-line */}
              <CardContent className="pt-0">
                <div className="animate-fade-in" style={delay(12)}>
                  <p className="text-slate-400 leading-relaxed text-sm whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
