"use client";

import { useEffect, useState } from "react";

type Options = {
  words: string[];
  typeSpeed?: number; // ms per typed char
  deleteSpeed?: number; // ms per deleted char
  holdTime?: number; // ms to hold full word before deleting
};

/**
 * Typewriter effect that cycles through a list of words/phrases.
 * Returns the visible text and whether it's currently typing.
 */
export function useTypewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 40,
  holdTime = 1600,
}: Options) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which word
  const [sub, setSub] = useState(0); // chars typed of current word
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";

    // done typing -> hold, then start deleting
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(t);
    }

    // done deleting -> move to next word
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setSub((s) => (deleting ? s - 1 : s + 1));
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, holdTime]);

  useEffect(() => {
    setText((words[index % words.length] ?? "").slice(0, sub));
  }, [sub, index, words]);

  return text;
}
