"use client";

import { createContext, useContext, useState } from "react";
import { en } from "@/translations/en";
import { my } from "@/translations/my";

type Language = "en" | "my";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "my" : "en"));
  };

  const translations = language === "en" ? en : my;

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};