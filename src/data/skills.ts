interface Skill {
    name: string;
    icon: string;
    type: 'frontend' | 'backend' | 'language' | 'database' | 'tool' | 'devops' | 'framework' | 'markup' | 'template';
  }
  
  export const skills: Skill[] = [
    { name: "React", icon: "/images/react.svg", type: "frontend" },
    { name: "Next.js", icon: "/images/next_js.svg", type: "frontend" },
    { name: "TypeScript", icon: "/images/typescript.svg", type: "language" },
    { name: "Python", icon: "/images/python.svg", type: "language" },
    { name: "Django", icon: "/images/django.svg", type: "backend" },
    { name: "Odoo", icon: "/images/odoo.svg", type: "framework" },
    { name: "Laravel", icon: "/images/laravel.svg", type: "backend" },
    { name: "Tailwind CSS", icon: "/images/tailwind_css.svg", type: "frontend" },
    { name: "Bootstrap", icon: "/images/bootstrap.svg", type: "frontend" },
    { name: "JavaScript", icon: "/images/javascript.svg", type: "language" },
    { name: "C#", icon: "/images/c_sharp.svg", type: "language" },
    { name: "SQL", icon: "/images/sql.svg", type: "database" },
    { name: "Node.js", icon: "/images/node_js.svg", type: "backend" },
    { name: "Express.js", icon: "/images/express_js.svg", type: "backend" },
    { name: "PHP", icon: "/images/php.svg", type: "language" },
    { name: "MySQL", icon: "/images/mysql.svg", type: "database" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg", type: "database" },
    { name: "MongoDB", icon: "/images/mongodb.svg", type: "database" },
    { name: "Excel", icon: "/images/excel.svg", type: "tool" },
    { name: "Word", icon: "/images/word.svg", type: "tool" },
    { name: "GitHub", icon: "/images/github.svg", type: "tool" },
    { name: "GitLab", icon: "/images/gitlab.svg", type: "tool" },
    { name: "Docker", icon: "/images/docker.svg", type: "devops" },
    { name: "QWeb", icon: "/images/qweb.svg", type: "template" },
    { name: "XML", icon: "/images/xml.svg", type: "markup" },
    { name: "HTML", icon: "/images/html.svg", type: "markup" },
    { name: "CSS", icon: "/images/css.svg", type: "frontend" }
  ];