import { useState } from 'react';
import { CSS_INFO } from '../data';
import { accLabel } from '../utils/helpers';
import Sheet from './Sheet.jsx';

function PickList({ title, cls, options, selected, onSelect, isDisabled, getLabel, isOwned, emptyText }) {
  return (
    <>
      <h3>{title}</h3>
      <div className="chips">
        {options.map((id) => (
          <button
            key={id}
            className={`chip ${cls} ${selected === id ? 'sel' : ''}`}
            disabled={isDisabled(id)}
            onClick={() => onSelect(selected === id ? '' : id)}
          >
            {getLabel(id)}{isOwned(id) ? '' : ' (sticky)'}
          </button>
        ))}
        {!options.length && <span className="muted">{emptyText}</span>}
      </div>
    </>
  );
}

export default function LinkSheet({ game, onClose, onCorrect }) {
  const { me, htmlOptions, cssOptions, drawQuestion, answerQuestion, unlockLink } = game;
  const [question, setQuestion] = useState(null);
  const [pickH, setPickH] = useState('');
  const [pickC, setPickC] = useState('');
  const [msg, setMsg] = useState('');

  const handleAnswer = (choice) => {
    const ok = answerQuestion(question, choice, pickH, pickC);
    setQuestion(null);
    setPickH('');
    setPickC('');
    setMsg(ok ? 'Bonne réponse : la liaison est faite !' : 'Raté. Réessaie à ton prochain tour.');
    if (ok) onCorrect();
  };

  const handleUnlock = () => {
    unlockLink();
    setMsg('');
  };

  return (
    <Sheet title="Lier deux cartes" onClose={onClose}>
      {question ? (
        <div className="form">
          <p className="q">{question.q}</p>
          {question.c.map((c, i) => (
            <button key={i} className="choice" onClick={() => handleAnswer(i)}>{c}</button>
          ))}
        </div>
      ) : (
        <>
          <PickList
            title="Carte HTML"
            cls="orange"
            options={htmlOptions}
            selected={pickH}
            onSelect={setPickH}
            isDisabled={(id) => !!pickC && CSS_INFO[pickC].acc !== id}
            getLabel={accLabel}
            isOwned={(id) => me.html.includes(id)}
            emptyText="Aucune carte HTML."
          />
          <PickList
            title="Carte CSS"
            cls="purple"
            options={cssOptions}
            selected={pickC}
            onSelect={setPickC}
            isDisabled={(id) => !!pickH && CSS_INFO[id].acc !== pickH}
            getLabel={(id) => CSS_INFO[id].label}
            isOwned={(id) => me.css.includes(id)}
            emptyText="Aucune carte CSS."
          />

          {msg && <p className="note">{msg}</p>}

          {me.failed ? (
            <>
              <p className="note">Liaison verrouillée jusqu’à ton prochain tour.</p>
              <button className="pill yellow wide" onClick={handleUnlock}>C’est mon tour</button>
            </>
          ) : (
            <button
              className="pill purple wide"
              disabled={!pickH || !pickC}
              onClick={() => setQuestion(drawQuestion())}
            >
              Link
            </button>
          )}
        </>
      )}
    </Sheet>
  );
}
