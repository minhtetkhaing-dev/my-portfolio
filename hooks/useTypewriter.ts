'use client';

import { useEffect, useState } from 'react';

export function useTypewriter(phrases: readonly string[]) {
  const [text, setText] = useState('');
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[phaseIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (paused) {
      timeout = setTimeout(() => setPaused(false), deleting ? 400 : 2800);
      return () => clearTimeout(timeout);
    }

    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => setCharIndex((current) => current + 1), 45);
      } else {
        setPaused(true);
        setDeleting(true);
      }
    } else if (charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((current) => current - 1), 22);
    } else {
      setDeleting(false);
      setPaused(true);
      setPhaseIndex((current) => (current + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, paused, phaseIndex, phrases]);

  useEffect(() => {
    setText(phrases[phaseIndex].slice(0, charIndex));
  }, [charIndex, phaseIndex, phrases]);

  return text;
}
