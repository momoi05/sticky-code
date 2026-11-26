import { useState } from 'react';

export default function Inspector({ html, css, open, onToggle }) {
  const [tab, setTab] = useState('html');

  return (
    <div className={`inspector ${open ? 'open' : ''}`}>
      <button className="handle" onClick={onToggle} aria-expanded={open}>Inspector</button>
      <div className="tabs">
        <button className={tab === 'html' ? 'on o' : ''} onClick={() => setTab('html')}>HTML</button>
        <button className={tab === 'css' ? 'on p' : ''} onClick={() => setTab('css')}>CSS</button>
      </div>
      <pre>{tab === 'html' ? html : css || '/* Aucun accessoire lié */'}</pre>
    </div>
  );
}
