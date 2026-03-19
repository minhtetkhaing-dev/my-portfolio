type SectionHeaderProps = {
  label: string;
  title: string;
  italic: string;
  delay?: string;
};

export default function SectionHeader({
  label,
  title,
  italic,
  delay = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header reveal ${delay}`.trim()}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">
        {title}
        {' '}
        <em>{italic}</em>
      </h2>
    </div>
  );
}
