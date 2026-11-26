import { LEARN } from '../data';
import Logo from '../components/Logo';

export default function Learn({ onBack }) {
  return (
    <main className="phone">
      <header className="top">
        <button className="pill" onClick={onBack}>Retour</button>
        <Logo />
        <span />
      </header>

      <h2 className="learn-title">Apprendre le HTML et le CSS</h2>
      {LEARN.map((g) => (
        <section key={g.title} className="lgroup">
          <h3>{g.title}</h3>
          {g.items.map((i) => (
            <details key={i.t}>
              <summary>{i.t}</summary>
              <p>{i.d}</p>
            </details>
          ))}
        </section>
      ))}
    </main>
  );
}
