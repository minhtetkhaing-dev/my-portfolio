export const PHRASES = [
  'I craft scalable, elegant web applications - from architecture to pixel-perfect UI.',
  'Passionate about clean code, thoughtful design, and products that genuinely matter.',
  '4+ years shipping fullstack solutions across SaaS, fintech, and consumer products.',
] as const;

export const SKILLS = [
  { icon: '⬡', cat: 'Frontend', name: 'UI Engineering', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML/CSS', 'Bootstrap'], num: '01' },
  { icon: '◈', cat: 'Backend', name: 'Server Architecture', tags: ['Python', 'PHP', 'Odoo', 'Django', 'Laravel'], num: '02' },
  { icon: '▦', cat: 'Database', name: 'Data Systems', tags: ['PostgreSQL', 'MySQL', 'Redis'], num: '03' },
] as const;

export const EXPERIENCES = [
  {
    date: '2023 - 2026',
    company: 'OneTerrace',
    country: 'Japan',
    flag: '🇯🇵',
    type: 'Full-time',
    role: 'Backend Developer',
    desc: 'Developed and maintained web applications with a focus on backend architecture, API development, database design, and fullstack feature delivery using PHP, Laravel, Python, Django, PostgreSQL, MySQL, Next.js, and TypeScript.',
    tech: ['PHP', 'Laravel', 'Python', 'Django', 'MySQL', 'PostgreSQL', 'Next.js', 'TypeScript', 'Tailwind', 'HTML/CSS'],
  },
  {
    date: '2021 - 2023',
    company: 'Myanmar Software Integrated Solutions (MSIS)',
    country: 'Myanmar',
    flag: '🇲🇲',
    type: 'Full-time',
    role: 'Odoo ERP Developer',
    desc: 'Specialized in developing and customizing Odoo ERP solutions and web applications. Implemented various business modules using Python, Django, and Odoo framework.',
    tech: ['JavaScript', 'Python', 'Django', 'Odoo', 'XML', 'PostgreSQL', 'QWeb', 'HTML/CSS', 'Bootstrap'],
  },
  {
    date: '2020 - 2021',
    company: 'Asia Brightway Co., Ltd.',
    country: 'Myanmar',
    flag: '🇲🇲',
    type: 'Internship',
    role: 'C# Developer',
    desc: 'Developed Windows desktop applications using C# and MS SQL Server. Created data-driven solutions and automated Excel reporting systems.',
    tech: ['C#', 'MySQL'],
  },
] as const;
