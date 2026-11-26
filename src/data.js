// 5 accessoires (cartes HTML)
export const ACCESSORIES = [
    { id: 'chapeau', label: 'Chapeau' },
    { id: 'haut', label: 'Haut' },
    { id: 'bas', label: 'Bas' },
    { id: 'chaussures', label: 'Chaussures' },
    { id: 'mains', label: 'Accessoire de main' },
];

// 3 cartes maîtresses : elles donnent accès aux cartes HTML de leur groupe
export const GROUPS = [
    { id: 'header', label: 'Header', accs: ['chapeau'] },
    { id: 'body', label: 'Body', accs: ['haut', 'mains'] },
    { id: 'footer', label: 'Footer', accs: ['bas', 'chaussures'] },
];
export const MAX_HAND = 8; // cartes en main (maîtresses, HTML, CSS, sticky)

// 4 personnages (cartes CSS)
export const ROLES = [
    { id: 'princesse', label: 'Princesse' },
    { id: 'dragon', label: 'Dragon' },
    { id: 'pirate', label: 'Pirate' },
    { id: 'robot', label: 'Robot' },
];

// Le CSS de chaque combinaison personnage + accessoire : STYLES[personnage][accessoire]
const c = (s) => s.trim().split('\n').map((l) => l.trim()).join('\n');

export const STYLES = {
    princesse: {
        chapeau: c(`top: -40px;
      left: 78px;
      width: 44px;
      height: 76px;
      rotate: 8deg;
      clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
      background: radial-gradient(circle at 50% 10%, gold 0 5px, transparent 6px), linear-gradient(160deg, #f7a8d8, #c477f7);`),
        haut: c(`top: 84px;
      left: 74px;
      width: 52px;
      height: 60px;
      border-radius: 10px 10px 0 0;
      background: linear-gradient(#f7a8d8, #c477f7);
      box-shadow: inset 0 -6px 0 gold;`),
        bas: c(`top: 140px;
      left: 50px;
      width: 100px;
      height: 80px;
      clip-path: polygon(35% 0, 65% 0, 100% 100%, 0 100%);
      background: linear-gradient(#f7a8d8, #c477f7);`),
        chaussures: c(`top: 256px;
      left: 52px;
      width: 96px;
      height: 16px;
      border-radius: 8px;
      background: linear-gradient(90deg, #9be3ff 0 30%, transparent 30% 70%, #9be3ff 70%);`),
        mains: c(`top: 70px;
      left: 163px;
      width: 14px;
      height: 60px;
      rotate: 20deg;
      background: radial-gradient(circle at 50% 7px, gold 0 7px, transparent 8px), linear-gradient(#c477f7, #c477f7) center / 4px 100% no-repeat;`),
    },
    dragon: {
        chapeau: c(`top: 0;
      left: 68px;
      width: 64px;
      height: 34px;
      clip-path: polygon(0 0, 35% 100%, 65% 100%, 100% 0, 100% 100%, 0 100%);
      background: linear-gradient(#f0e0a0, #c9a24a);`),
        haut: c(`top: 84px;
      left: 76px;
      width: 48px;
      height: 60px;
      background: radial-gradient(circle at 50% 100%, #3fae5a 0 5px, #1f6b3a 5px 7px, transparent 7px) 0 0 / 14px 10px, #3fae5a;`),
        bas: c(`top: 150px;
      left: 74px;
      width: 52px;
      height: 76px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 50% 45%, 40% 100%, 0 100%);
      background: radial-gradient(circle at 50% 100%, #3fae5a 0 5px, #1f6b3a 5px 7px, transparent 7px) 0 0 / 14px 10px, #3fae5a;`),
        chaussures: c(`top: 254px;
      left: 52px;
      width: 96px;
      height: 18px;
      border-radius: 4px 4px 10px 10px;
      background: linear-gradient(90deg, #3fae5a 0 30%, transparent 30% 70%, #3fae5a 70%);
      filter: drop-shadow(0 3px 0 #f0e0a0);`),
        mains: c(`top: 100px;
      left: 154px;
      width: 30px;
      height: 26px;
      clip-path: polygon(0 0, 100% 0, 100% 30%, 86% 100%, 72% 40%, 58% 100%, 44% 40%, 30% 100%, 16% 40%, 0 30%);
      background: linear-gradient(#3fae5a 0 35%, #f0e0a0 35%);`),
    },
    pirate: {
        chapeau: c(`top: -6px;
      left: 44px;
      width: 112px;
      height: 44px;
      clip-path: polygon(0% 100%, 12% 55%, 30% 40%, 50% 0%, 70% 40%, 88% 55%, 100% 100%, 50% 80%);
      background: radial-gradient(circle at 50% 50%, #fff 0 6px, transparent 7px), linear-gradient(#2b2b2b, #000);`),
        haut: c(`top: 84px;
      left: 74px;
      width: 52px;
      height: 60px;
      border-radius: 8px 8px 0 0;
      background: repeating-linear-gradient(#fff 0 6px, #1b1b1b 6px 12px);`),
        bas: c(`top: 150px;
      left: 76px;
      width: 48px;
      height: 76px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 85% 88%, 70% 100%, 60% 100%, 50% 45%, 40% 100%, 30% 88%, 15% 100%, 0 88%);
      background: #7a4b2a;`),
        chaussures: c(`top: 238px;
      left: 52px;
      width: 96px;
      height: 34px;
      border-radius: 6px 6px 0 0;
      background: linear-gradient(90deg, #4a2c17 0 30%, transparent 30% 70%, #4a2c17 70%);`),
        mains: c(`top: 50px;
      left: 165px;
      width: 10px;
      height: 90px;
      rotate: 15deg;
      background: linear-gradient(#ddd, #ddd) center top / 4px 66% no-repeat, linear-gradient(#c9a24a, #c9a24a) center 66% / 10px 4px no-repeat, linear-gradient(#4a2c17, #4a2c17) center bottom / 4px 28% no-repeat;`),
    },
    robot: {
        chapeau: c(`top: -18px;
      left: 70px;
      width: 60px;
      height: 52px;
      border-radius: 14px 14px 0 0;
      background: radial-gradient(circle at 50% 6px, #ff5a5a 0 6px, transparent 7px), linear-gradient(#9aa7b5, #9aa7b5) center 10px / 3px 16px no-repeat, linear-gradient(#9aa7b5, #3b4a5a) center bottom / 100% 26px no-repeat;`),
        haut: c(`top: 84px;
      left: 72px;
      width: 56px;
      height: 60px;
      border-radius: 6px;
      border: 3px solid #3b4a5a;
      background: radial-gradient(circle at 50% 35%, #35e0ff 0 7px, transparent 8px), linear-gradient(#9aa7b5, #3b4a5a);`),
        bas: c(`top: 150px;
      left: 74px;
      width: 52px;
      height: 76px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 50% 45%, 40% 100%, 0 100%);
      background: repeating-linear-gradient(#9aa7b5 0 10px, #3b4a5a 10px 12px);`),
        chaussures: c(`top: 256px;
      left: 52px;
      width: 96px;
      height: 18px;
      border-radius: 4px;
      background: linear-gradient(90deg, #3b4a5a 0 30%, transparent 30% 70%, #3b4a5a 70%);
      filter: drop-shadow(0 0 4px #35e0ff);`),
        mains: c(`top: 96px;
      left: 158px;
      width: 26px;
      height: 30px;
      clip-path: polygon(0 0, 100% 0, 100% 55%, 70% 100%, 56% 100%, 50% 60%, 44% 100%, 30% 100%, 0 55%);
      background: linear-gradient(#9aa7b5, #3b4a5a);`),
    },
};

// Une carte CSS par personnage ET par accessoire (4 x 5 = 20)
export const CSS_INFO = {};
ROLES.forEach((r) => ACCESSORIES.forEach((a) => {
    CSS_INFO[`${r.id}-${a.id}`] = { role: r.id, acc: a.id, label: `${r.label} · ${a.label}` };
}));

// Contenu de la page « Learn » : [{ title, items: [{ t, d }] }]
export const LEARN = [
    { title: 'HTML', items: [
            { t: 'Balise', d: 'Un mot entre chevrons, comme <div>, qui indique le type d’un élément. Elle s’ouvre <div> et se ferme </div>.' },
            { t: 'Élément', d: 'L’ensemble formé par la balise ouvrante, son contenu et la balise fermante.' },
            { t: 'Attribut', d: 'Une information ajoutée dans la balise ouvrante, par exemple class="chapeau".' },
            { t: 'Classe', d: 'Un nom donné à un élément (attribut class) pour pouvoir le cibler en CSS.' },
            { t: '<div>', d: 'Un bloc générique, sans sens particulier : il sert à construire et styler des formes.' },
        ] },
    { title: 'CSS', items: [
            { t: 'Sélecteur', d: 'Ce qui désigne les éléments à styler. Le sélecteur .chapeau cible la classe « chapeau ».' },
            { t: 'Propriété et valeur', d: 'Une déclaration s’écrit propriété: valeur; par exemple width: 80px; fixe la largeur.' },
            { t: 'position: absolute', d: 'Place un élément à un endroit précis de son parent avec top et left.' },
            { t: 'background', d: 'Définit le fond d’un élément : une couleur ou un dégradé.' },
            { t: 'linear-gradient', d: 'Un fond qui passe progressivement d’une couleur à une autre.' },
            { t: 'border-radius', d: 'Arrondit les angles d’un élément.' },
            { t: 'clip-path', d: 'Découpe un élément selon une forme, par exemple un triangle ou des griffes.' },
            { t: 'rotate', d: 'Fait tourner un élément selon un angle, par exemple rotate: 8deg;.' },
        ] },
    { title: 'Règles du jeu', items: [
            { t: 'Main de 8 cartes', d: 'Tu ne peux pas avoir plus de 8 cartes en main (maîtresses, HTML, CSS et sticky). Les cartes Questions ne comptent pas.' },
            { t: 'Se défausser', d: 'Appuie sur × à côté d’une carte dans Add Card pour la défausser. Tu pourras la reprendre plus tard.' },
            { t: 'Cartes maîtresses', d: 'Header (chapeau), Body (haut et accessoire de main) et Footer (bas et chaussures). Il faut la maîtresse du groupe pour ajouter une carte HTML de ce groupe.' },
            { t: 'Sticky cards', d: 'Une sticky HTML remplace toutes les cartes HTML d’une maîtresse, une sticky CSS remplace toutes les cartes CSS de ton personnage pour ce groupe. Elle disparaît quand tout le groupe est lié.' },
            { t: 'Lier deux cartes', d: 'Choisis une carte HTML et la carte CSS du même accessoire, puis réponds à la question. Si tu te trompes, tu attends ton prochain tour.' },
        ] },
];

// Banque de questions de liaison (QCM). a = index de la bonne réponse.
export const QUESTIONS = [
    { q: 'Quelle balise HTML crée un bloc générique ?', c: ['<span>', '<div>', '<p>'], a: 1 },
    { q: 'Quel attribut donne une classe à un élément ?', c: ['class', 'style', 'name'], a: 0 },
    { q: 'Quel sélecteur CSS cible la classe "chapeau" ?', c: ['#chapeau', 'chapeau', '.chapeau'], a: 2 },
    { q: 'Quelle propriété change la couleur de fond ?', c: ['background', 'color', 'fill'], a: 0 },
    { q: 'Quelle propriété arrondit les angles ?', c: ['corner', 'border-radius', 'round'], a: 1 },
    { q: 'Quelle propriété ajoute une ombre à un bloc ?', c: ['shadow', 'text-shadow', 'box-shadow'], a: 2 },
    { q: 'Quelle unité est relative à la taille de la police ?', c: ['px', 'em', 'cm'], a: 1 },
    { q: 'Comment fermer une balise <div> ?', c: ['</div>', '<div/>', '<\\div>'], a: 0 },
    { q: 'Quelle propriété CSS tourne un élément ?', c: ['turn', 'rotate', 'spin'], a: 1 },
    { q: 'Quelle propriété fixe la largeur d’un élément ?', c: ['size', 'width', 'long'], a: 1 },
    { q: 'Quelle déclaration CSS est correcte ?', c: ['color = red;', 'color: red;', 'color -> red;'], a: 1 },
    { q: 'Quelle propriété place un élément à un endroit précis de son parent ?', c: ['position: absolute', 'display: block', 'float: none'], a: 0 },
];

// Codes imprimés sur les cartes (modifie-les pour qu'ils correspondent à tes cartes).
// type: character | master | sticky | html | css | question   -   ref: id de l'accessoire, « personnage-accessoire » pour le CSS, ou index de la question
export const CARDS = {
    // Cartes personnage (saisies à l'accueil)
    'CHR-01': { type: 'character', ref: 'princesse' },
    'CHR-02': { type: 'character', ref: 'dragon' },
    'CHR-03': { type: 'character', ref: 'pirate' },
    'CHR-04': { type: 'character', ref: 'robot' },

    // Cartes maîtresses
    'MST-01': { type: 'master', ref: 'header' },
    'MST-02': { type: 'master', ref: 'body' },
    'MST-03': { type: 'master', ref: 'footer' },

    // Cartes sticky (html-groupe ou css-groupe)
    'STK-01': { type: 'sticky', ref: 'html-header' },
    'STK-02': { type: 'sticky', ref: 'html-body' },
    'STK-03': { type: 'sticky', ref: 'html-footer' },
    'STK-04': { type: 'sticky', ref: 'css-header' },
    'STK-05': { type: 'sticky', ref: 'css-body' },
    'STK-06': { type: 'sticky', ref: 'css-footer' },

    // Cartes HTML
    'HTML-01': { type: 'html', ref: 'chapeau' },
    'HTML-02': { type: 'html', ref: 'haut' },
    'HTML-03': { type: 'html', ref: 'bas' },
    'HTML-04': { type: 'html', ref: 'chaussures' },
    'HTML-05': { type: 'html', ref: 'mains' },

    // Cartes CSS : une par personnage et par accessoire (ref = personnage-accessoire)
    'CSS-01': { type: 'css', ref: 'princesse-chapeau' },
    'CSS-02': { type: 'css', ref: 'princesse-haut' },
    'CSS-03': { type: 'css', ref: 'princesse-bas' },
    'CSS-04': { type: 'css', ref: 'princesse-chaussures' },
    'CSS-05': { type: 'css', ref: 'princesse-mains' },

    'CSS-06': { type: 'css', ref: 'dragon-chapeau' },
    'CSS-07': { type: 'css', ref: 'dragon-haut' },
    'CSS-08': { type: 'css', ref: 'dragon-bas' },
    'CSS-09': { type: 'css', ref: 'dragon-chaussures' },
    'CSS-10': { type: 'css', ref: 'dragon-mains' },

    'CSS-11': { type: 'css', ref: 'pirate-chapeau' },
    'CSS-12': { type: 'css', ref: 'pirate-haut' },
    'CSS-13': { type: 'css', ref: 'pirate-bas' },
    'CSS-14': { type: 'css', ref: 'pirate-chaussures' },
    'CSS-15': { type: 'css', ref: 'pirate-mains' },

    'CSS-16': { type: 'css', ref: 'robot-chapeau' },
    'CSS-17': { type: 'css', ref: 'robot-haut' },
    'CSS-18': { type: 'css', ref: 'robot-bas' },
    'CSS-19': { type: 'css', ref: 'robot-chaussures' },
    'CSS-20': { type: 'css', ref: 'robot-mains' },

    // Cartes Questions (ref = position dans QUESTIONS, en partant de 0)
    'QST-01': { type: 'question', ref: 0 },
    'QST-02': { type: 'question', ref: 1 },
    'QST-03': { type: 'question', ref: 2 },
    'QST-04': { type: 'question', ref: 3 },
    'QST-05': { type: 'question', ref: 4 },
    'QST-06': { type: 'question', ref: 5 },
    'QST-07': { type: 'question', ref: 6 },
    'QST-08': { type: 'question', ref: 7 },
    'QST-09': { type: 'question', ref: 8 },
    'QST-10': { type: 'question', ref: 9 },
    'QST-11': { type: 'question', ref: 10 },
    'QST-12': { type: 'question', ref: 11 },
};
 