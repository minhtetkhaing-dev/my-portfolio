import Divider from '@/components/Divider';
import SectionHeader from '@/components/SectionHeader';
import { SKILLS } from '@/lib/content';

export default function Skills() {
  return (
    <section id="skills">
      <Divider label="Expertise" />
      <SectionHeader label="What I Do" title="Skills &" italic="Technologies" />

      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <div key={skill.num} className={`skill-card reveal reveal-delay-${(index % 3) + 1}`}>
            <span className="skill-icon">{skill.icon}</span>
            <p className="skill-category">{skill.cat}</p>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="skill-number">{skill.num}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
