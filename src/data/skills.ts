export interface SkillGroup {
  title: string;
  skills: string[];
}

// From the resume's technical skills, plus what the featured projects use.
export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLMs",
    skills: [
      "Multi-agent systems (Mastra, CrewAI)",
      "LLM APIs (Gemini, OpenRouter, OpenAI)",
      "Tool calling",
      "Grounded retrieval with citations",
      "RAG & GraphRAG",
      "LLM evaluation",
      "Prompt caching & cost optimization",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    title: "Backend & Data",
    skills: [
      "Flask",
      "FastAPI",
      "Node.js",
      "Next.js",
      "REST APIs",
      "Microservices",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
    ],
  },
  {
    title: "Computer Vision",
    skills: ["YOLO11 pose estimation", "OpenCV", "OCR (EasyOCR)", "Stable Diffusion + ControlNet"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub Actions CI/CD",
      "Vercel",
      "Automated testing (pytest)",
      "Claude Code",
      "OpenAI Codex",
      "GitHub Copilot",
    ],
  },
];
