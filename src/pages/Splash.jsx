import { useEffect } from 'react';
import { SPLASH_DURATION } from '../constants';
import Logo from '../components/Logo';

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, SPLASH_DURATION);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main className="splash"><Logo big /></main>;
}
