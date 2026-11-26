import { ACCESSORIES, CARDS, GROUPS } from '../data';

export const accLabel = (id) => ACCESSORIES.find((a) => a.id === id).label;
export const getGroup = (id) => GROUPS.find((g) => g.id === id);
export const groupOfAcc = (acc) => GROUPS.find((g) => g.accs.includes(acc));

// "html-xxx" ou "css-xxx"  ->  "xxx"
export const stickyGroupId = (s) => s.slice(s.indexOf('-') + 1);
export const stickyGroup = (s) => getGroup(stickyGroupId(s));
export const stickyLabel = (s) =>
  `Sticky ${s.startsWith('html') ? 'HTML' : 'CSS'} · ${stickyGroup(s).label}`;

// Retrouve le code imprimé sur une carte à partir de son type et de sa référence
export const findCardCode = (type, ref) =>
  Object.keys(CARDS).find((k) => CARDS[k].type === type && CARDS[k].ref === ref);
