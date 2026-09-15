'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'es' || savedLang === 'en') {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
  };

  const changeLang = (newLang) => {
    if (newLang === 'es' || newLang === 'en') {
      setLang(newLang);
      localStorage.setItem('portfolio_lang', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'es', toggleLang: () => {}, setLang: () => {} };
  }
  return context;
}
