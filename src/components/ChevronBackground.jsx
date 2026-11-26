import './ChevronBackground.css';

const CYAN = '#12b5e5';
const ORANGE = '#ffa21f';
const PURPLE = '#c660ff';
const RED = '#ff4d26';
const WHITE = '#ffffff';

// anim : 'float' (monte/descend) | 'sway' (balancier gauche/droite) | 'spin' (tourne)
// Modifie librement cette liste : position, couleur, taille, vitesse (dur), inclinaison (rot).
const CHEVRONS = [
  // haut
  { color: CYAN,   top: '6%',  left: '8%',  size: 52, dur: 4.5, delay: 0,    rot: -10, anim: 'float' },
  { color: ORANGE, top: '5%',  left: '80%', size: 52, dur: 5,   delay: -1.5, rot: 12,  anim: 'sway' },
  { color: PURPLE, top: '16%', left: '90%', size: 30, dur: 5.5, delay: -2,   rot: 20,  anim: 'float' },
  { color: RED,    top: '17%', left: '2%',  size: 32, dur: 6.5, delay: -4,   rot: -20, anim: 'sway' },
  // côtés
  { color: ORANGE, top: '34%', left: '1%',  size: 40, dur: 5,   delay: -1,   rot: 8,   anim: 'spin' },
  { color: CYAN,   top: '40%', left: '91%', size: 44, dur: 4.8, delay: -2.5, rot: -8,  anim: 'float' },
  { color: WHITE,  top: '55%', left: '2%',  size: 30, dur: 6,   delay: -3.5, rot: 15,  anim: 'sway' },
  { color: PURPLE, top: '62%', left: '90%', size: 34, dur: 5.2, delay: -0.5, rot: -15, anim: 'spin' },
  { color: RED,    top: '72%', left: '3%',  size: 36, dur: 5.8, delay: -4.5, rot: 5,   anim: 'float' },
  // bas
  { color: PURPLE, top: '86%', left: '8%',  size: 52, dur: 4.6, delay: -2,   rot: -12, anim: 'sway' },
  { color: RED,    top: '82%', left: '80%', size: 52, dur: 5,   delay: -1,   rot: 14,  anim: 'float' },
  { color: WHITE,  top: '92%', left: '44%', size: 50, dur: 4.4, delay: -3,   rot: 0,   anim: 'spin' },
  { color: CYAN,   top: '93%', left: '70%', size: 26, dur: 6,   delay: -5,   rot: 18,  anim: 'sway' },
  { color: ORANGE, top: '94%', left: '22%', size: 28, dur: 5.5, delay: -2.8, rot: -18, anim: 'float' },
  { color: CYAN,   top: '78%', left: '92%', size: 24, dur: 6.2, delay: -1.2, rot: 10,  anim: 'spin' },
];

function Chevron({ color, top, left, size, dur, delay, rot, anim }) {
  const style = {
    top,
    left,
    width: size,
    height: size,
    color,
    '--rot': `${rot}deg`,
    animationDuration: `${dur}s`,
    animationDelay: `${delay}s`,
  };

  return (
      <svg
          className={`chevron ${anim}`}
          style={style}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
      >
        {/* les deux moitiés s'écartent / se rapprochent en continu */}
        <polyline className="half left" points="9,4 3,12 9,20" style={{ animationDuration: `${dur / 2}s` }} />
        <polyline className="half right" points="15,4 21,12 15,20" style={{ animationDuration: `${dur / 2}s` }} />
      </svg>
  );
}

export default function ChevronBackground() {
  return (
      <div className="chevron-bg" aria-hidden="true">
        {CHEVRONS.map((c, i) => <Chevron key={i} {...c} />)}
      </div>
  );
}
