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
            { t: 'What is a HTML?', d: 'HyperText MarkUp Language. HTML is written using tags and attributes. Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is <div>.' },
            { t: 'What is a Tag?', d: 'HTML is written using tags and attributes. Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is <div>.' },
            { t: 'What is a Attributes?', d: 'Attributes contain additional pieces of information. They take the form of an opening tag and additional info is placed inside. An example of an attribute is: <div class="head">.' },
            { t: 'What is a Anchor?', d: 'An anchor element creates a hyperlink, which is used to link from one page to another. It is written <a>.' },
            { t: 'What is a List?', d: 'HTML lists are used to group a set of related items in lists. HTML supports two kinds of lists: ordered lists and unordered lists. Within lists each individual list item has its own tag.' },
            { t: 'What is a Table?', d: 'An element for displaying information in rows and columns.' },
            { t: 'What is a Metadata?', d: 'Metadata is data about data. It is information that describes some other information in a meaningful way. The meta tag is used in an HTML document to provide information about the web page that can be understood by browsers.' },
            { t: 'What is a Markup language?', d: 'A way that computers speak to each other to control how text is processed and presented.' },
            { t: 'What is a Semantics?', d: 'Semantics means the correct meaning of a word or sentence. In programming, semantics describes the processes a computer follows when executing a program in that specific language.' },
        ] },
    { title: 'CSS', items: [
            { t: 'What is a CSS?', d: 'Cascading style sheet. A style sheet contains the specifications of a document’s layout, such as the page size, margins, fonts and font sizes.' },
            { t: 'What is a Style sheet?', d: 'A style sheet contains the specifications of a document’s layout, such as the page size, margins, fonts and font sizes.' },
            { t: 'What is a Layout?', d: 'The layout of a website is how all the different visual elements are presented. It includes headers, menus, content and a footer.' },
            { t: 'What is a Positioning?', d: 'The CSS position property defines the position of an element in a document. Positioning can be static, relative, absolute, fixed or sticky.' },
        ] },
    { title: 'Programming', items: [
            { t: 'What is a OOP?', d: 'Object-oriented Programming. Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.' },
            { t: 'What is a Inheritance?', d: 'Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.' },
        ] },
];

// Banque de questions de liaison (QCM). a = index de la bonne réponse.
export const QUESTIONS = [
    { q: 'What is the main role of HTML when creating a website ?', c: ['Creating complex animations and vidéo games', 'Structurizing and organizing a web page content', 'Managing the data bases and password'], a: 1 },
    { q: 'What is the main use of CSS language ?', c: ['To automatically translate a website in multiple languages', 'Stylizing and giving the shape of a web page', 'To verify forms from the server'], a: 1 },
    { q: 'What CSS property allows to change the background\'s colour of a section or a page ?', c: ['Color', 'bgcolor', 'Background-color'], a: 2 },
    { q: 'What is the correct way to open a tag with HTML', c: ['Between chevrons, like <p>', 'Between sockets, like (p)', 'Between braces, like {p}'], a: 0 },
    { q: 'What is the use of the tag <input> in a form ?', c: ['Creating a text spot on which the user can write text', 'Activating fullscreen on a vidéo', 'Change the website\'s background'], a: 1 },
    { q: 'What CSS property allows to change the text\'s color ?', c: ['font-color', 'text-color', 'color'], a: 2 },
    { q: 'What HTML tag allows to insert an image on a webpage ?', c: ['<image>', '<img>', '<src>'], a: 1 },
    { q: 'What HTML allows to create a clickable link towards another page ? ', c: ['<link>', '<url>', '<a>'], a: 2 },
    { q: 'What HTML tag is used to display the main title, the most important title on a page ?', c: ['<title>', '<h1>', '<header>>'], a: 1 },
    { q: 'What does the acronym HTML refer to ?', c: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Management Layout'], a: 0 },
];

// Codes imprimés sur les cartes (modifie-les pour qu'ils correspondent à tes cartes).
// type: character | master | sticky | html | css | question   -   ref: id de l'accessoire, « personnage-accessoire » pour le CSS, ou index de la question
export const CARDS = {
    // Cartes personnage (saisies à l'accueil)
    '0001': { type: 'character', ref: 'dragon' },
    '0002': { type: 'character', ref: 'pirate' },
    '0003': { type: 'character', ref: 'robot' },
    '0004': { type: 'character', ref: 'princesse' },

    // Cartes maîtresses
    'HEADER': { type: 'master', ref: 'header' },
    'BODY': { type: 'master', ref: 'body' },
    'FOOTER': { type: 'master', ref: 'footer' },

    // Cartes sticky (html-groupe ou css-groupe)
    'STK-HEADER': { type: 'sticky', ref: 'html-header' },
    'STK-BODY': { type: 'sticky', ref: 'html-body' },
    'STK-FOOTER': { type: 'sticky', ref: 'html-footer' },

    // Cartes HTML (20 cartes imprimées : une par personnage et par accessoire,
    // mais elles renvoient toutes à l'accessoire)
    // Dragon
    '2468': { type: 'html', ref: 'chapeau' },
    '1357': { type: 'html', ref: 'haut' },
    '3086': { type: 'html', ref: 'bas' },
    '5678': { type: 'html', ref: 'chaussures' },
    '7432': { type: 'html', ref: 'mains' },
    // Princesse
    '4432': { type: 'html', ref: 'chapeau' },
    '5557': { type: 'html', ref: 'haut' },
    '8897': { type: 'html', ref: 'bas' },
    '2309': { type: 'html', ref: 'chaussures' },
    '0009': { type: 'html', ref: 'mains' },
    // Pirate
    '0987': { type: 'html', ref: 'chapeau' },
    '6785': { type: 'html', ref: 'haut' },
    '3019': { type: 'html', ref: 'bas' },
    '6123': { type: 'html', ref: 'chaussures' },
    '9125': { type: 'html', ref: 'mains' },
    // Robot
    '7609': { type: 'html', ref: 'chapeau' },
    '0997': { type: 'html', ref: 'haut' },
    '8122': { type: 'html', ref: 'bas' },
    '5311': { type: 'html', ref: 'chaussures' },
    '6008': { type: 'html', ref: 'mains' },

    // Cartes CSS (ref = personnage-accessoire)
    // Princesse
    '2424': { type: 'css', ref: 'princesse-chapeau' },
    '0801': { type: 'css', ref: 'princesse-haut' },
    '7370': { type: 'css', ref: 'princesse-bas' },
    '6600': { type: 'css', ref: 'princesse-chaussures' },
    '0007': { type: 'css', ref: 'princesse-mains' },
    // Dragon
    '4359': { type: 'css', ref: 'dragon-chapeau' },
    '6335': { type: 'css', ref: 'dragon-haut' },
    '9999': { type: 'css', ref: 'dragon-bas' },
    '1019': { type: 'css', ref: 'dragon-chaussures' },
    '7777': { type: 'css', ref: 'dragon-mains' },
    // Pirate
    '1111': { type: 'css', ref: 'pirate-chapeau' },
    '5665': { type: 'css', ref: 'pirate-haut' },
    '7979': { type: 'css', ref: 'pirate-bas' },
    '4447': { type: 'css', ref: 'pirate-chaussures' },
    '3262': { type: 'css', ref: 'pirate-mains' },
    // Robot
    '8888': { type: 'css', ref: 'robot-chapeau' },
    '2024': { type: 'css', ref: 'robot-haut' },
    '5885': { type: 'css', ref: 'robot-bas' },
    '2067': { type: 'css', ref: 'robot-chaussures' },
    '0041': { type: 'css', ref: 'robot-mains' },

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
 