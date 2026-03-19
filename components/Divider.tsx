type DividerProps = {
  label: string;
};

export default function Divider({ label }: DividerProps) {
  return (
    <div className="section-divider">
      <span>{label}</span>
    </div>
  );
}
