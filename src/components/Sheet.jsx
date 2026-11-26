export default function Sheet({ title, onClose, children }) {
  return (
    <div className="backdrop" onClick={onClose}>
      <section className="sheet" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>{title}</h2>
          <button className="x" onClick={onClose} aria-label="Fermer">×</button>
        </header>
        {children}
      </section>
    </div>
  );
}
