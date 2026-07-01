import {
  SiPhp,
  SiPython,
  SiJavascript,
  SiLaravel,
  SiWordpress,
  SiDjango,
  SiOdoo,
  SiMysql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

/**
 * Editable profile info. Change these values to personalize the site.
 */
export const PROFILE = {
  name: "Min Htet Khaing",
  firstName: "Min Htet Khaing",
  initials: "MHK",
  role: "Full-Stack Developer",
  tagline: "I turn ideas into robust, scalable web apps.",
  email: "minhtetkhaing.dev@gmail.com",
  phone: "+95 9 123 456 789",
  location: "Yangon, Myanmar · Remote",
  github: "https://github.com/mhk-dev",
  githubHandle: "mhk-dev",
  linkedin: "https://linkedin.com/in/min-htet-khaing",
  linkedinHandle: "min-htet-khaing",
  photo: "/profile.jpg",
  logo: "/profile.svg",
  available: true,
};

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  version: string;
  tag: string; // language | framework | cms | erp | database | tool
  desc: string;
};

export const SKILLS: Skill[] = [
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
    version: "8.3",
    tag: "language",
    desc: "Backend services & legacy modernization",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    version: "3.12",
    tag: "language",
    desc: "Automation, APIs & data tooling",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    version: "ES2024",
    tag: "language",
    desc: "Interactive front-ends & Node tooling",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
    version: "11.x",
    tag: "framework",
    desc: "Elegant full-stack PHP apps",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
    version: "6.5",
    tag: "cms",
    desc: "Themes, plugins & headless CMS",
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
    version: "5.0",
    tag: "framework",
    desc: "Secure, scalable Python web apps",
  },
  {
    name: "Odoo",
    icon: SiOdoo,
    color: "#714B67",
    version: "17",
    tag: "erp",
    desc: "ERP modules & custom business apps",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    version: "8.0",
    tag: "database",
    desc: "Relational data modeling & tuning",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    version: "16",
    tag: "database",
    desc: "Advanced queries & JSONB workflows",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    version: "2.x",
    tag: "tool",
    desc: "Version control & team workflows",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  points: string[];
  // git-log decoration
  hash: string;
  commitType: string; // e.g. "feat", "refactor"
  commitSubject: string; // commit-message-style headline
  isHead?: boolean;
};

export const EXPERIENCE: Job[] = [
  {
    role: "Full-Stack Developer",
    company: "OneTerrace",
    period: "Jun 2023 — Present",
    location: "Yangon, Myanmar · Akita, Japan · Remote",
    stack: ["PHP", "Laravel", "Next.js", "WordPress"],
    hash: "8f4c2d1",
    commitType: "feat",
    commitSubject: "build and maintain full-stack web products",
    isHead: true,
    points: [
      "Develop web applications and websites using PHP, Laravel, Next.js, and WordPress.",
      "Worked remotely from Yangon from June 2023 to March 2025, then on-site in Akita, Japan through May 2026.",
      "Continues with the OneTerrace team remotely from Yangon, Myanmar.",
    ],
  },
  {
    role: "Odoo Developer",
    company: "MSIS Co., Ltd.",
    period: "May 2021 — Jun 2023",
    location: "Yangon, Myanmar",
    stack: ["Python", "Django", "Odoo", "JavaScript"],
    hash: "4b7e9a3",
    commitType: "feat",
    commitSubject: "deliver ERP and e-commerce solutions",
    points: [
      "Developed and customized Odoo ERP systems for business workflows.",
      "Built e-commerce sites and web applications with Python, Django, Odoo, and JavaScript.",
      "Maintained and extended business modules based on project requirements.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Asia Brightway Co., Ltd.",
    period: "Oct 2019 — Jan 2020",
    location: "Mandalay, Myanmar",
    stack: ["C#", "MSSQL", "Windows Applications"],
    hash: "1c6a5f0",
    commitType: "init",
    commitSubject: "start professional software development",
    points: [
      "Contributed to Windows desktop application development using C#.",
      "Worked with Microsoft SQL Server for application data and database tasks.",
      "Gained practical experience in a professional software development environment.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  topics: string[];
  url: string;
  highlight?: boolean; // featured repo
};

export const PROJECTS: Project[] = [
  {
    name: "tenant-saas-platform",
    description:
      "Multi-tenant SaaS platform with role-based access, billing, and a Vue admin dashboard. Serves 12k+ monthly users.",
    language: "PHP",
    languageColor: "#777BB4",
    stars: 248,
    forks: 37,
    topics: ["laravel", "postgresql", "multi-tenant", "saas", "docker"],
    url: "https://github.com/mhk-dev",
    highlight: true,
  },
  {
    name: "django-inventory-suite",
    description:
      "Headless inventory system with REST APIs for web + mobile. Reporting workflows automated across 5 business units.",
    language: "Python",
    languageColor: "#3776AB",
    stars: 156,
    forks: 22,
    topics: ["django", "rest-api", "mysql", "aws"],
    url: "https://github.com/mhk-dev",
  },
  {
    name: "odoo-retail-toolkit",
    description:
      "Collection of 20+ custom Odoo modules for retail & manufacturing — POS, stock, and accounting connectors.",
    language: "Python",
    languageColor: "#3776AB",
    stars: 98,
    forks: 14,
    topics: ["odoo", "erp", "python", "retail"],
    url: "https://github.com/mhk-dev",
  },
  {
    name: "headless-wp-starter",
    description:
      "Headless WordPress + Next.js starter with a custom plugin layer. Ships with 95+ Lighthouse scores out of the box.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stars: 312,
    forks: 51,
    topics: ["wordpress", "nextjs", "headless", "graphql"],
    url: "https://github.com/mhk-dev",
    highlight: true,
  },
  {
    name: "pg-jsonb-toolkit",
    description:
      "Query builder & indexing helpers for PostgreSQL JSONB columns. Cuts read latency by ~40% on document-heavy tables.",
    language: "Python",
    languageColor: "#3776AB",
    stars: 74,
    forks: 9,
    topics: ["postgresql", "jsonb", "performance", "python"],
    url: "https://github.com/mhk-dev",
  },
  {
    name: "deploy-pilot",
    description:
      "Tiny CI/CD helper that wraps Git + Docker to ship Laravel/Django apps in one command. Reduced deploy time by 60%.",
    language: "Shell",
    languageColor: "#89E051",
    stars: 121,
    forks: 18,
    topics: ["ci-cd", "docker", "git", "automation"],
    url: "https://github.com/mhk-dev",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  // { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
