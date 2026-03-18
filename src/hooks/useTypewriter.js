import { useEffect, useState } from 'react';

export function useTypewriter(phrases) {
  const [text, setText] = useState('');
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[phaseIdx];
    let timeout;

    if (paused) {
      timeout = setTimeout(() => setPaused(false), deleting ? 400 : 2800);
      return () => clearTimeout(timeout);
    }

    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 45);
      } else {
        setPaused(true);
        setDeleting(true);
      }
    } else if (charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 22);
    } else {
      setDeleting(false);
      setPaused(true);
      setPhaseIdx((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, paused, phaseIdx, phrases]);

  useEffect(() => {
    setText(phrases[phaseIdx].slice(0, charIdx));
  }, [charIdx, phaseIdx, phrases]);

  return text;
}
