export interface Position {
  org: string;
  role: string;
  period: string;
  href?: string;
  summary?: string;
  bullets: string[];
}

export interface TimelineGroup {
  title: string;
  icon: "work" | "education" | "service";
  items: Position[];
}

// Shown top to bottom in the Experience section, all in the same timeline style.
export const timeline: TimelineGroup[] = [
  {
    title: "Work",
    icon: "work",
    items: [
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
    ],
  },
  {
    title: "Education",
    icon: "education",
    items: [
      {
        org: "Reichman University",
        role: "B.Sc. in Computer Science",
        period: "2023 – July 2026",
        bullets: [
          "GPA 92 · Excellence Scholarship recipient",
          "Dean's Excellence List in years 1 and 2 (GPA 92.15, 94.65)",
        ],
      },
    ],
  },
  {
    title: "Military service",
    icon: "service",
    items: [
      {
        org: "Israel Defense Forces · Artillery Corps",
        role: "Fighter, Team Commander and Operations Officer",
        period: "2019 – 2021 · Reserves 2024 – Present",
        bullets: [
          "Team Commander (Reserves, 2024 – Present): lead an operational combat team, managing personnel, logistics and mission execution under high-pressure conditions",
          "Operations Officer (2021): managed operations for a reserve brigade, including strategic planning and coordination of training exercises",
          "Fighter & Team Commander (2019 – 2021): self-propelled artillery fighter; commanded operational and trainee teams",
        ],
      },
    ],
  },
];

export const languages = ["Hebrew (native)", "English (fluent)"];
