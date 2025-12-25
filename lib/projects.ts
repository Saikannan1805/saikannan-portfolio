// Type definition for a single project entry
export interface Project {
  title: string;
  summary: string;
  tags: string[];
  github: string;
  demo: string;
}

// List of all showcased projects
export const projects: Project[] = [
  {
  title: "Hybrid Knowledge Assistant – RAG System",
  summary:
    "Built a Retrieval-Augmented Generation (RAG) system that answers user queries over custom documents using semantic search and large language models. Implemented document ingestion, chunking, embedding generation, and vector-based retrieval with pgvector, integrated via FastAPI for low-latency responses.",
  tags: [
    "RAG",
    "LLMs",
    "Vector Search",
    "AI/ML",
    "Python",
    "FastAPI",
    "pgvector",
    "Supabase",
    "Embeddings",
  ],
  github: "https://github.com/Saikannan1805/saikannan-portfolio.git",
  demo: "https://saikannan-portfolio.vercel.app/",
},
{
    title: "Hybrid Cold-Start Recommender System",
    summary:
      "Developed a hybrid recommender combining content and collaborative signals, deployed via FastAPI and Supabase Edge Functions on Google Cloud Run for low-latency personalization.",
    tags: [
      "Recommender Systems",
      "Cold-Start",
      "Python",
      "FastAPI",
      "Supabase Edge Functions",
      "Google Cloud Run",
      "Scikit-learn",
      "Pandas",
      "MLOps",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
  {
    title: "Text Summarizer – NLP Context Extraction",
    summary:
      "Built a BERT-based summarization model to generate concise, context-aware transcripts from long YouTube videos. Implemented advanced preprocessing, multi-threaded execution, and embedding fine-tuning for semantic accuracy.",
    tags: [
      "NLP",
      "Deep Learning",
      "Python",
      "Transformers",
      "BERT",
      "Scikit-learn",
      "Pandas",
      "NLTK",
      "Matplotlib",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
  {
    title: "Diabetes Prediction – AI-Powered Health Analytics",
    summary:
      "Developed an Artificial Neural Network (ANN) to predict diabetes risk with 85% accuracy using health data. Applied feature scaling, outlier detection, and hyperparameter tuning to enhance model stability and reliability.",
    tags: [
      "AI/ML",
      "Health Analytics",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    summary:
      "Built a computer vision system capable of classifying and interpreting hand gestures in real-time using TensorFlow and OpenCV. Achieved 92% accuracy through CNN-based feature extraction and live video inference.",
    tags: [
      "Computer Vision",
      "AI/ML",
      "Python",
      "TensorFlow",
      "OpenCV",
      "LabelImg",
      "Object Detection",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
  {
    title: "PILGRIM – Smart Travel Partner App",
    summary:
      "Developed a cross-platform AI-driven travel planner using Flutter and Firebase. Implemented itinerary generation, authentication, and optimized Firestore queries for real-time data handling and superior user experience.",
    tags: [
      "Mobile App",
      "AI/ML",
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "NoSQL",
      "UI/UX",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
  {
    title: "Toxic Comment Classification – AI-Driven Online Safety",
    summary:
      "Developed an NLP-based toxicity detection system using LSTM and Logistic Regression to identify and filter harmful comments on social media. Enhanced text preprocessing and reduced false positives by 25%.",
    tags: [
      "NLP",
      "Deep Learning",
      "Content Moderation",
      "Python",
      "TensorFlow",
      "LSTM",
      "Scikit-learn",
      "NLTK",
    ],
    github: "https://saikannan-portfolio.vercel.app/",
    demo: "https://saikannan-portfolio.vercel.app/",
  },
];
