import Divider from '@/components/Divider';
import SectionHeader from '@/components/SectionHeader';
import { EXPERIENCES } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience">
      <Divider label="Journey" />
      <SectionHeader label="Work History" title="Professional" italic="Experience" />

      <div className="experience-list">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className={`exp-item reveal reveal-delay-${index + 1}`}
          >
            <div className="exp-meta">
              <p className="exp-date">{experience.date}</p>
              <p className="exp-company">{experience.company}</p>
              <span className="exp-type">{experience.type}</span>
            </div>
            <div className="exp-content">
              <h3 className="exp-role">
                {experience.role}
                {' '}
                <span className="exp-role-arrow">→</span>
              </h3>
              <p className="exp-desc">{experience.desc}</p>
              <div className="exp-tech">
                {experience.tech.map((tech) => (
                  <span key={`${experience.company}-${tech}`}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
