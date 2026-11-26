import { useState } from 'react';
import Logo from '../components/Logo';

export default function Home({ onStart }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const error = onStart(name, code);
    if (error) setMsg(error);
  };

  return (
    <main className="phone home">
      <Logo big />
      <form onSubmit={submit} className="form">
        <input
          className="plain"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ton nom"
          maxLength={20}
          autoFocus
        />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code carte personnage"
          autoCapitalize="characters"
        />
        {msg && <p className="note">{msg}</p>}
        <button className="pill purple wide">Jouer</button>
      </form>
    </main>
  );
}
