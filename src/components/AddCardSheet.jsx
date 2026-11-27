import { useEffect, useRef, useState } from 'react';
import { CSS_INFO, MAX_HAND } from '../data';
import { accLabel, getGroup, stickyLabel } from '../utils/helpers';
import Sheet from './Sheet';
import Chip from './Chip';

// Prefix pre-filled in the field depending on the chosen card type
const PREFIXES = { html: 'HTML-', css: 'CSS-', other: '' };

export default function AddCardSheet({ game, onClose, onReset }) {
    const { me, handSize, addCard, discard } = game;
    const [code, setCode] = useState('');
    const [msg, setMsg] = useState('');
    const [confirmReset, setConfirmReset] = useState(false);
    const [kind, setKind] = useState(null); // null | 'html' | 'css' | 'other'
    const inputRef = useRef(null);

    // Once the type is chosen: focus the field, cursor after the prefix
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
            setKind(null); // ask for the type again for the next card
            setCode('');
        }
    };

    const remove = (type, ref) => {
        discard(type, ref);
        setMsg('Card discarded.');
    };

    return (
        <Sheet title="Add a card" onClose={onClose}>
            {kind === null ? (
                <div className="form">
                    <p className="q">Which type of card do you want to add?</p>
                    <button className="pill orange wide" onClick={() => chooseKind('html')}>HTML card</button>
                    <button className="pill purple wide" onClick={() => chooseKind('css')}>CSS card</button>
                    <button className="pill wide black" onClick={() => chooseKind('other')}>Other (master, sticky)</button>
                </div>
            ) : (
                <form onSubmit={submit} className="form">
                    <input
                        ref={inputRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Card code (e.g. STK-HEADER)"
                        autoCapitalize="characters"
                    />
                    <button className="pill orange">Add</button>
                    <button type="button" className="pill ghost" onClick={backToKinds}>Change the type</button>
                </form>
            )}
            {msg && <p className="note">{msg}</p>}

            <h3>My hand: {handSize}/{MAX_HAND}</h3>
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
                {!handSize && <span className="muted">Your hand is empty.</span>}
            </div>

            <div className="reset">
                {confirmReset ? (
                    <>
                        <p className="note">Delete everything, including your name and character?</p>
                        <div className="row">
                            <button className="pill orange" onClick={onReset}>Yes, start over</button>
                            <button className="pill" onClick={() => setConfirmReset(false)}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <button className="pill ghost" onClick={() => setConfirmReset(true)}>
                        Remove everything and start over
                    </button>
                )}
            </div>
        </Sheet>
    );
}