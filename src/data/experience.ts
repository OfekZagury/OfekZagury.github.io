export interface Position {
  org: string;
  role: string;
  period: string;
  href?: string;
  summary?: string;
  bullets: string[];
}

export const work: Position[] = [
  {
    org: "Dor ha-Why (Generation Why)",
    role: "Co-Founder & CTO",
    period: "June 2026 – Present",
    href: "https://dor-why.co.il",
    summary:
      "Civic-tech AI platform that lets citizens check what their elected representatives actually did, answered only from official state data with every claim cited.",
    bullets: [
      "Designed the production multi-agent research system (TypeScript, Next.js, Mastra): 10 AI agents and 58 typed tools over 6 official government sources",
      "Led a team of 2 developers, working with the CEO and product manager, from an empty repo to a paying partner in 18 weeks",
      "Delivered the API behind Israel 2050's Smart Voter Guide for the 2026 elections: 4,000+ queries and 3,200+ conversations in two months",
      "Built deterministic evidence gates that validate every LLM finding before it can become a citation; ran code reviews and CI with 1,172 automated tests",
    ],
  },
  {
    org: "Fortune Wide Solutions",
    role: "Student Software Engineer",
    period: "April 2025 – Present",
    bullets: [
      "Build and maintain the company's internal web interface, used daily by analysts and managers, integrating financial data with a clear, user-friendly design",
      "Refactored the monolithic backend into Flask microservices (database access, internal-system data fetching, data processing and email sending), containerized with Docker",
      "Build Python data pipelines that pull data from internal systems and MongoDB and serve it to the platform through REST APIs",
      "Develop frontend features in JavaScript, HTML and CSS that present processed financial data in clear tables, plus custom Python tools for operational needs",
    ],
  },
];

export const education = {
  org: "Reichman University",
  degree: "B.Sc. in Computer Science",
  period: "2023 – July 2026",
  details: [
    "GPA 92",
    "Excellence Scholarship recipient",
    "Dean's Excellence List in years 1 and 2 (GPA 92.15, 94.65)",
  ],
};

export const service: Position = {
  org: "Israel Defense Forces · Artillery Corps",
  role: "Fighter, Team Commander and Operations Officer",
  period: "2019 – 2021 · Reserves 2024 – Present",
  bullets: [
    "Team Commander (Reserves, 2024 – Present): lead an operational combat team, managing personnel, logistics and mission execution under high-pressure conditions",
    "Operations Officer (2021): managed operations for a reserve brigade, including strategic planning and coordination of training exercises",
    "Fighter & Team Commander (2019 – 2021): self-propelled artillery fighter; commanded operational and trainee teams",
  ],
};

export const languages = ["Hebrew (native)", "English (fluent)"];
