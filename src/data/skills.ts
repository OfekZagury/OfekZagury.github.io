export interface SkillGroup {
  title: string;
  skills: string[];
}

// Grouped from the technologies used in the featured projects.
export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLMs",
    skills: ["RAG pipelines", "GraphRAG", "Multi-agent systems (CrewAI)", "OpenAI API", "Embeddings & vector search", "Neo4j", "Prompt design"],
  },
  {
    title: "Computer Vision",
    skills: ["YOLO11 pose estimation", "OpenCV", "OCR (EasyOCR)", "Stable Diffusion + ControlNet", "Geometry (Shapely)"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "FastAPI", "Node.js / Express", "RabbitMQ", "MongoDB", "Redis", "SQLite", "ChromaDB", "MinIO"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Gradio"],
  },
  {
    title: "DevOps & Quality",
    skills: ["Docker & Compose", "GitHub Actions", "pytest", "Ruff / MyPy / Bandit", "Azure", "Datadog"],
  },
];
