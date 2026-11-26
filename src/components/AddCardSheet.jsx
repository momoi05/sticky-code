import { useEffect, useRef, useState } from 'react';
import { CSS_INFO, MAX_HAND } from '../data';
import { accLabel, getGroup, stickyLabel } from '../utils/helpers';
import Sheet from './Sheet';
import Chip from './Chip';

// Préfixe pré-écrit dans le champ selon le type de carte choisi
const PREFIXES = { html: 'HTML-', css: 'CSS-', other: '' };

export default function AddCardSheet({ game, onClose, onReset }) {
    const { me, handSize, addCard, discard } = game;
    const [code, setCode] = useState('');
    const [msg, setMsg] = useState('');
    const [confirmReset, setConfirmReset] = useState(false);
    const [kind, setKind] = useState(null); // null | 'html' | 'css' | 'other'
    const inputRef = useRef(null);

    // Une fois le type choisi : focus sur le champ, curseur après le préfixe
    useEffect(() => {
        const el = inputRef.current;
        if (!kind || !el) return;
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
    }, [kind]);

    const chooseKind = (k) => {
        setKind(k);
        setCode(PREFIXES[k]);
        setMsg('');
    };

    const backToKinds = () => {
        setKind(null);
        setCode('');
        setMsg('');
    };

    const submit = (e) => {
        e.preventDefault();
        const { ok, message } = addCard(code);
        setMsg(message);
        if (ok) {
            setKind(null); // on redemande le type pour la carte suivante
            setCode('');
        }
    };

    const remove = (type, ref) => {
        discard(type, ref);
        setMsg('Carte défaussée.');
    };

    return (
        <Sheet title="Ajouter une carte" onClose={onClose}>
            {kind === null ? (
                <div className="form">
                    <p className="q">Quel type de carte veux-tu ajouter ?</p>
                    <button className="pill orange wide" onClick={() => chooseKind('html')}>Carte HTML</button>
                    <button className="pill purple wide" onClick={() => chooseKind('css')}>Carte CSS</button>
                    <button className="pill wide" onClick={() => chooseKind('other')}>Autre (maîtresse, sticky, question)</button>
                </div>
            ) : (
                <form onSubmit={submit} className="form">
                    <input
                        ref={inputRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code de la carte (ex. HTML-01)"
                        autoCapitalize="characters"
                    />
                    <button className="pill orange">Ajouter</button>
                    <button type="button" className="pill ghost" onClick={backToKinds}>Changer de type</button>
                </form>
            )}
            {msg && <p className="note">{msg}</p>}

            <h3>Ma main : {handSize}/{MAX_HAND}</h3>
            <div className="chips">
                {me.master.map((id) => (
                    <Chip key={id} cls="dark" label={getGroup(id).label} onDelete={() => remove('master', id)} />
                ))}
                {me.html.map((id) => (
                    <Chip key={id} cls="orange" label={accLabel(id)} onDelete={() => remove('html', id)} />
                ))}
                {me.css.map((id) => (
                    <Chip key={id} cls="purple" label={CSS_INFO[id].label} onDelete={() => remove('css', id)} />
                ))}
                {me.sticky.map((id) => (
                    <Chip key={id} cls="blue" label={stickyLabel(id)} onDelete={() => remove('sticky', id)} />
                ))}
                {me.question.length > 0 && <span className="chip yellow">Questions ×{me.question.length}</span>}
                {!handSize && <span className="muted">Ta main est vide.</span>}
            </div>

            <div className="reset">
                {confirmReset ? (
                    <>
                        <p className="note">Tout supprimer, y compris ton nom et ton personnage ?</p>
                        <div className="row">
                            <button className="pill orange" onClick={onReset}>Oui, recommencer</button>
                            <button className="pill" onClick={() => setConfirmReset(false)}>Annuler</button>
                        </div>
                    </>
                ) : (
                    <button className="pill ghost" onClick={() => setConfirmReset(true)}>
                        Tout enlever et recommencer
                    </button>
                )}
            </div>
        </Sheet>
    );
}
