import { useState } from 'react';
import { useGame } from './hooks/useGame';
import ChevronBackground from './components/ChevronBackground';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Game from './pages/Game';
import Learn from './pages/Learn';
import './App.css';

export default function App() {
  const game = useGame();
  const [page, setPage] = useState('splash'); // splash | home | game | learn

  const handleStart = (name, code) => {
    const error = game.start(name, code);
    if (!error) setPage('game');
    return error;
  };

  const handleReset = () => {
    game.reset();
    setPage('home');
  };

  const renderPage = () => {
    switch (page) {
      case 'splash':
        return <Splash onDone={() => setPage(game.hasProfile ? 'game' : 'home')} />;
      case 'home':
        return <Home onStart={handleStart} />;
      case 'learn':
        return <Learn onBack={() => setPage('game')} />;
      default:
        return <Game game={game} onLearn={() => setPage('learn')} onReset={handleReset} />;
    }
  };

  return (
      <div className="app-shell">
        <ChevronBackground />
        {renderPage()}
      </div>
  );
}
