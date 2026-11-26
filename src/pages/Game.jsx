import { useState } from 'react';
import Stickman from '../stickman';
import Logo from '../components/Logo';
import Inspector from '../components/Inspector';
import AddCardSheet from '../components/AddCardSheet';
import LinkSheet from '../components/LinkSheet';

export default function Game({ game, onLearn, onReset }) {
  const { me, html, css, characterLabel, isComplete } = game;
  const [sheet, setSheet] = useState(null); // null | 'add' | 'link'
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const closeSheet = () => setSheet(null);

  return (
    <main className="phone">
      <header className="top">
        <button className="pill orange" onClick={() => setSheet('add')}>Add Card</button>
        <Logo />
        <button className="pill purple" onClick={() => setSheet('link')}>Link</button>
      </header>

      <p className="count"><b>{me.name}</b> · {characterLabel}</p>

      <section className="screen">
        <Stickman css={css} linked={me.linked} />
        <Inspector
          html={html}
          css={css}
          open={inspectorOpen}
          onToggle={() => setInspectorOpen((o) => !o)}
        />
      </section>

      {isComplete && <p className="count">Stickman complet, bravo !</p>}
      <button className="pill wide learn black" onClick={onLearn}>
        En savoir plus sur le HTML et le CSS
      </button>

      {sheet === 'add' && <AddCardSheet game={game} onClose={closeSheet} onReset={onReset} />}
      {sheet === 'link' && (
        <LinkSheet game={game} onClose={closeSheet} onCorrect={() => setInspectorOpen(true)} />
      )}
    </main>
  );
}
