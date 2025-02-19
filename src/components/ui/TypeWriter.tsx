"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  className?: string;
  delay?: number;
}

export default function TypeWriter({ texts = [""], className = ""}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingDelay = isDeleting ? 50 : 100;
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentFullText.length) {
          setCurrentText(prev => prev + currentFullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Pause at the end
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <div className={className}>
      <p className="min-h-[4rem]">
        {currentText}
        <span className="animate-pulse">_</span>
      </p>
    </div>
  );
}