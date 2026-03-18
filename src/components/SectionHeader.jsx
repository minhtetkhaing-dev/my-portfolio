import React from 'react';

export default function SectionHeader({ label, title, italic, delay = '' }) {
  return (
    <div className={`section-header reveal ${delay}`}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">
        {title} <em>{italic}</em>
      </h2>
    </div>
  );
}
