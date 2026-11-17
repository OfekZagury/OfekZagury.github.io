export type Category = "AI & LLMs" | "Computer Vision" | "Backend" | "Frontend";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  /** Optional role line, e.g. for a product built with a team. */
  role?: string;
  /** Shown as a short period next to the role. */
  period?: string;
  description: string;
  categories: Category[];
  /** Short steps shown as a mini pipeline on the card cover. */
  pipeline: string[];
  highlights: string[];
  tech: string[];
  repo?: string;
  website?: string;
  /** Live demo visitors can try themselves. */
  demo?: string;
  /** Featured projects span the full width of the grid. */
  featured?: boolean;
}

const GITHUB = "https://github.com/OfekZagury";

export const projects: Project[] = [
  {
    id: "dor-ha-why",
    title: "Dor ha-Why (Generation Why)",
    tagline: "What did your elected representatives actually do?",
    role: "Co-Founder & CTO · team of 2 developers, with the CEO and product manager",
    period: "June 2026 – Present",
    description:
      "A civic-tech AI platform that lets citizens check what their elected representatives actually did, answered only from official state data, with every claim cited.",
    categories: ["AI & LLMs", "Backend"],
    pipeline: ["Citizen question", "10 AI agents", "58 typed tools", "6 official sources", "Evidence gates", "Cited answer"],
    highlights: [
      "Production multi-agent research system with 10 AI agents and 58 typed tools over 6 official government sources",
      "Powers the API behind Israel 2050's Smart Voter Guide for the 2026 elections: 4,000+ queries and 3,200+ conversations in two months",
      "Deterministic evidence gates validate every LLM finding before it can become a citation",
      "From an empty repo to a paying partner in 18 weeks, with code reviews and CI running 1,172 automated tests",
    ],
    tech: ["TypeScript", "Next.js", "Mastra", "Multi-agent systems", "Tool calling", "Grounded retrieval"],
    website: "https://dor-why.co.il",
    featured: true,
  },
  {
    id: "floorplan-copilot",
    title: "FloorplanCopilot",
    tagline: "Cursor for architects",
    description:
      "Describe an apartment in plain English, pick the best match from 17,000 real floor plans, resize it, furnish it in an interactive editor and export a layered DXF file that opens directly in AutoCAD.",
    categories: ["AI & LLMs", "Computer Vision"],
    pipeline: ["Text query", "Vector search", "Scale to m²", "Auto-furnish", "DXF export"],
    highlights: [
      "RAG over the ResPlan dataset: every plan becomes a topological description indexed in ChromaDB, combined with structured room filters",
      "Room-aware furniture placement, a Gradio web editor and optional Stable Diffusion + ControlNet renders",
      "54 unit tests, Ruff / MyPy / Bandit, a Docker image for Azure and CI on GitHub Actions",
    ],
    tech: ["Python", "ChromaDB", "SQLite", "Shapely", "ezdxf", "Gradio", "Diffusers", "Docker", "Azure", "pytest"],
    repo: `${GITHUB}/FloorplanCopilot`,
  },
  {
    id: "psychology-session-analyzer",
    title: "Psychology Session Analyzer",
    tagline: "From a session recording to structured insight",
    description:
      "An event-driven microservices backend that turns a recorded therapy session into a summary, the patient's breakthrough moments and emotional triggers, with every stage running as an independent worker.",
    categories: ["Backend", "AI & LLMs"],
    pipeline: ["Upload", "Extract audio", "Transcribe + diarize", "LLM analysis", "Report API"],
    highlights: [
      "Five services connected by durable RabbitMQ queues, manual acks and prefetch = 1",
      "Claim-check pattern: media lives in MinIO, only IDs travel through the queues",
      "Redis cache keyed by transcript hash, idempotent MongoDB upserts, structured JSON logs and Datadog",
    ],
    tech: ["Python", "FastAPI", "RabbitMQ", "MinIO", "MongoDB", "Redis", "AssemblyAI", "OpenAI", "Docker Compose", "Datadog"],
    repo: `${GITHUB}/Psychology-Session-Analyzer`,
  },
  {
    id: "pokeriq",
    title: "PokerIQ",
    tagline: "Duolingo for poker",
    description:
      "An interactive web app that teaches poker strategy through 24 gamified lessons, from hand rankings to bluffing theory, with a new lesson unlocking every day to build a learning habit.",
    categories: ["Frontend"],
    pipeline: ["Learn", "Practice", "Instant feedback", "Daily unlock", "Progress"],
    highlights: [
      "24 lessons in 11 chapters with drag-and-drop drills, odds calculations and animated feedback",
      "Product analytics: GA4 plus a server-side log of lesson starts, completions, attempts and active time",
      "Lessons are code-split and lazy-loaded, cutting the main bundle from 1.27 MB to 408 KB",
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "GA4"],
    repo: `${GITHUB}/PokerIQ`,
    demo: "https://ofekzagury.github.io/PokerIQ/",
  },
  {
    id: "algotrading-agents-crew",
    title: "Algotrading Agents Crew",
    tagline: "A team of LLM agents that trades (on paper)",
    description:
      "Four CrewAI agents (news analyst, technical strategist, risk manager and execution trader) hand off structured decisions and place bracket orders on an Alpaca paper-trading account. The live demo runs the whole crew on Gemini for any US stock ticker and shows each agent's decision as it lands.",
    categories: ["AI & LLMs"],
    pipeline: ["News sentiment", "RSI + MACD", "Risk 1:3", "Funds check", "Bracket order"],
    highlights: [
      "Typed tools with Pydantic field descriptions so agents call market-data and broker APIs with valid arguments",
      "Stop loss below the 30-day support, take profit at 3× the risk and fixed position sizing",
      "Fallback data sources (Yahoo → Alpaca prices, Google News) keep the crew running on rate-limited cloud hosts",
      "Streamlit demo in simulation mode, with per-visitor and daily run limits and shared result caching to cap API spend",
    ],
    tech: ["Python", "CrewAI", "Gemini", "OpenAI", "Streamlit", "pandas-ta", "Alpaca API", "pytest"],
    repo: `${GITHUB}/Algotrading-Agents-Crew`,
    demo: "https://algotrading-agents-crew.streamlit.app/",
  },
  {
    id: "ai-xml-story-investigator",
    title: "AI XML Story Investigator",
    tagline: "Three RAG strategies vs. one murder mystery",
    description:
      "Solve a whodunit hidden in chains of SMS messages by asking questions, and compare naive RAG, Microsoft GraphRAG and a Neo4j knowledge graph on the same story. In the live demo, naive RAG falls for the red herring while both GraphRAG searches find the culprit.",
    categories: ["AI & LLMs"],
    pipeline: ["SMS XML", "Chunk / build graph", "Retrieve", "Answer"],
    highlights: [
      "Namespaced XML parser for participants, group chats, chapters and attachment metadata",
      "Microsoft GraphRAG with global (community summaries) and local (entity) search over a Gemini-built index",
      "LLM-generated Cypher builds a Neo4j knowledge graph next to a vector index",
      "Streamlit demo answers each question with all strategies side by side, with run limits and a shared answer cache",
    ],
    tech: ["Python", "Gemini", "OpenAI", "Microsoft GraphRAG", "Neo4j", "Streamlit", "Embeddings"],
    repo: `${GITHUB}/AI-xml-Story-Investigator`,
    demo: "https://ai-xml-story-investigator.streamlit.app/",
  },
  {
    id: "table-tennis-analyzer",
    title: "Table Tennis Analyzer",
    tagline: "Match analytics from broadcast video",
    description:
      "Tracks both players with YOLO11 pose estimation, draws their skeletons on the video, builds a court-position heatmap and reads the scoreboard with OCR to plot the score over time.",
    categories: ["Computer Vision"],
    pipeline: ["Video", "YOLO11 pose", "Frame filter", "Heatmap", "Score OCR"],
    highlights: [
      "Frame validator drops replays, close-ups and crowd shots using player separation, height and size",
      "Kernel-density heatmap of where each player stood during the rally",
      "EasyOCR scoreboard reading with error correction and a score timeline",
    ],
    tech: ["Python", "YOLO11", "OpenCV", "EasyOCR", "pandas", "Seaborn"],
    repo: `${GITHUB}/table_tennis_analyzer`,
  },
];

export const categories: Category[] = ["AI & LLMs", "Computer Vision", "Backend", "Frontend"];
