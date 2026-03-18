import React from 'react';
import { SKILLS } from '../data/content';
import Divider from './Divider';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills">
      <Divider label="Expertise" />
      <SectionHeader label="What I Do" title="Skills &" italic="Technologies" />

      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div key={skill.num} className={`skill-card reveal reveal-delay-${(i % 3) + 1}`}>
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
