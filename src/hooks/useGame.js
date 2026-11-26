import { useEffect, useState } from 'react';
import { ACCESSORIES, CARDS, CSS_INFO, MAX_HAND, QUESTIONS, ROLES } from '../data';
import { buildCode } from '../stickman';
import { EMPTY_PLAYER, STORAGE_KEY } from '../constants';
import { findCardCode, groupOfAcc, stickyGroup } from '../utils/helpers';

const load = () => {
  try {
    return { ...EMPTY_PLAYER, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return EMPTY_PLAYER;
  }
};

export function useGame() {
  const [me, setMe] = useState(load);

  // Sauvegarde automatique
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(me)); } catch {}
  }, [me]);

  // ----- Valeurs dérivées -----
  const { html, css } = buildCode(me.linked);
  const handSize = me.master.length + me.html.length + me.css.length + me.sticky.length;
  const hasProfile = Boolean(me.name && me.character);
  const isComplete = Object.keys(me.linked).length === ACCESSORIES.length;
  const characterLabel = ROLES.find((r) => r.id === me.character)?.label;

  // Les cartes sticky comptent pour tous les accessoires de leur groupe
  const stickyAccs = (kind) =>
    me.sticky.filter((s) => s.startsWith(kind)).flatMap((s) => stickyGroup(s).accs);

  const htmlOptions = [...new Set([...me.html, ...stickyAccs('html')])]
    .filter((a) => !me.linked[a]);

  const cssOptions = [...new Set([...me.css, ...stickyAccs('css').map((a) => `${me.character}-${a}`)])]
    .filter((r) => !me.linked[CSS_INFO[r].acc]);

  // ----- Actions -----

  /** Renvoie un message d'erreur, ou null si tout est bon. */
  const start = (name, rawCode) => {
    const card = CARDS[rawCode.trim().toUpperCase()];
    if (!name.trim()) return 'Entre ton nom.';
    if (card?.type !== 'character') return 'Code inconnu : saisis le code de ta carte personnage.';
    setMe({ ...me, name: name.trim(), character: card.ref });
    return null;
  };

  /** Renvoie { ok, message }. */
  const addCard = (rawCode) => {
    const code = rawCode.trim().toUpperCase();
    const card = CARDS[code];
    const fail = (message) => ({ ok: false, message });

    if (!card) return fail('Code inconnu. Vérifie le code sur ta carte.');
    if (card.type === 'character') return fail('Le code personnage se saisit à l’accueil.');
    if (me.scanned.includes(code)) return fail('Cette carte est déjà dans ta main.');
    if (card.type !== 'question' && handSize >= MAX_HAND) {
      return fail(`Main pleine (${MAX_HAND}/${MAX_HAND}) : défausse une carte d’abord.`);
    }
    if (card.type === 'html') {
      if (me.linked[card.ref]) return fail('Cet accessoire est déjà lié.');
      const master = groupOfAcc(card.ref);
      if (!me.master.includes(master.id)) {
        return fail(`Il te faut d’abord la carte maîtresse ${master.label}.`);
      }
    }

    setMe({
      ...me,
      scanned: [...me.scanned, code],
      [card.type]: [...me[card.type], card.ref],
    });
    return { ok: true, message: 'Carte ajoutée.' };
  };

  const discard = (type, ref) => {
    const code = findCardCode(type, ref);
    setMe({
      ...me,
      [type]: me[type].filter((x) => x !== ref),
      scanned: me.scanned.filter((x) => x !== code),
    });
  };

  const drawQuestion = () => {
    const idx = me.question.length ? me.question[0] : Math.floor(Math.random() * QUESTIONS.length);
    return QUESTIONS[idx];
  };

  /** Valide la réponse. Renvoie true si elle est correcte. */
  const answerQuestion = (question, choice, pickH, pickC) => {
    const ok = choice === question.a;

    setMe((m) => {
      const base = { ...m, question: m.question.slice(1) };
      if (!ok) return { ...base, failed: true };

      const linked = { ...m.linked, [pickH]: CSS_INFO[pickC].role };
      const isGroupDone = (s) => stickyGroup(s).accs.every((a) => linked[a]);

      return {
        ...base,
        linked,
        html: m.html.filter((x) => x !== pickH),
        css: m.css.filter((x) => x !== pickC),
        sticky: m.sticky.filter((s) => !isGroupDone(s)),
      };
    });

    return ok;
  };

  const unlockLink = () => setMe((m) => ({ ...m, failed: false }));
  const reset = () => setMe(EMPTY_PLAYER);

  return {
    me, html, css, handSize, hasProfile, isComplete, characterLabel,
    htmlOptions, cssOptions,
    start, addCard, discard, drawQuestion, answerQuestion, unlockLink, reset,
  };
}
