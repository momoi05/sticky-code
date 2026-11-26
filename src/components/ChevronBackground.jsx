import './ChevronBackground.css';

// Positions et couleurs inspirées de la maquette. Modifie librement cette liste.
const CHEVRONS = [
  { color: '#12b5e5', top: '12%', left: '10%', size: 38, dur: 7,  delay: 0,    rot: -8 },
  { color: '#ffa21f', top: '8%',  left: '78%', size: 38, dur: 8,  delay: -2,   rot: 10 },
  { color: '#c660ff', top: '86%', left: '12%', size: 38, dur: 9,  delay: -4,   rot: -14 },
  { color: '#ff4d26', top: '80%', left: '80%', size: 38, dur: 7.5, delay: -1,  rot: 12 },
  { color: '#ffffff', top: '94%', left: '48%', size: 36, dur: 8.5, delay: -3,  rot: 0 },
  // petits chevrons supplémentaires pour plus de vie
  { color: '#12b5e5', top: '45%', left: '3%',  size: 18, dur: 10, delay: -5,   rot: 20 },
  { color: '#ffa21f', top: '60%', left: '92%', size: 18, dur: 11, delay: -6,   rot: -18 },
  { color: '#c660ff', top: '26%', left: '90%', size: 16, dur: 9.5, delay: -2.5, rot: 6 },
];

function Chevron({ color, top, left, size, dur, delay, rot }) {
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
    <svg className="chevron" style={style} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
      <polyline points="9,4 3,12 9,20" />
      <polyline points="15,4 21,12 15,20" />
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
