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
  photo: "/profile.svg", // <-- replace this file in /public with your photo
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
    role: "Senior Full-Stack Developer",
    company: "Nimbus Digital Agency",
    period: "2023 — Present",
    location: "Remote",
    stack: ["Laravel", "Vue", "PostgreSQL", "Docker"],
    hash: "a1f3c9d",
    commitType: "feat",
    commitSubject: "lead multi-tenant SaaS platform",
    isHead: true,
    points: [
      "Led development of a multi-tenant SaaS platform serving 12k+ monthly users with 99.9% uptime.",
      "Cut average API response time by 47% through query optimization and a Redis caching layer.",
      "Mentored 3 junior developers and introduced CI/CD pipelines that reduced deploy time by 60%.",
    ],
  },
  {
    role: "Web Application Developer",
    company: "ByteForge Solutions",
    period: "2021 — 2023",
    location: "Singapore",
    stack: ["Django", "React", "MySQL", "AWS"],
    hash: "7b2e4f1",
    commitType: "feat",
    commitSubject: "ship Django inventory system @ scale",
    points: [
      "Shipped a Django-based inventory system adopted across 5 business units.",
      "Built REST APIs consumed by web and mobile clients serving 30k requests/day.",
      "Automated reporting workflows, saving the ops team ~15 hours each week.",
    ],
  },
  {
    role: "Odoo & WordPress Developer",
    company: "Pixel & Pine Studio",
    period: "2020 — 2021",
    location: "Yangon",
    stack: ["Odoo", "WordPress", "PHP", "MySQL"],
    hash: "0c8d2a6",
    commitType: "init",
    commitSubject: "bootstrap Odoo & WordPress practice",
    points: [
      "Delivered 20+ custom Odoo modules for retail and manufacturing clients.",
      "Developed bespoke WordPress themes and plugins with a 95% Lighthouse score baseline.",
      "Integrated payment gateways and ERP connectors for regional e-commerce stores.",
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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
