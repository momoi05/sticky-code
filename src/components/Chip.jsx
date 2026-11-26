export default function Chip({ cls, label, onDelete }) {
  return (
    <span className={`chip ${cls}`}>
      {label}
      <button className="del" onClick={onDelete} aria-label={`Défausser ${label}`}>×</button>
    </span>
  );
}
