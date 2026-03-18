import React from 'react';
import { EXPERIENCES } from '../data/content';
import Divider from './Divider';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience">
      <Divider label="Journey" />
      <SectionHeader label="Work History" title="Professional" italic="Experience" />

      <div className="experience-list">
        {EXPERIENCES.map((exp, i) => (
          <div key={`${exp.company}-${exp.role}`} className={`exp-item reveal reveal-delay-${i + 1}`}>
            <div className="exp-meta">
              <p className="exp-date">{exp.date}</p>
              <p className="exp-company">{exp.company}</p>
              <span className="exp-type">{exp.type}</span>
            </div>
            <div className="exp-content">
              <h3 className="exp-role">
                {exp.role} <span className="exp-role-arrow">→</span>
              </h3>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tech">
                {exp.tech.map((tech) => (
                  <span key={`${exp.company}-${tech}`}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
