"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from './translations';

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => any;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('pt-BR');

  useEffect(() => {
    const savedLocale = localStorage.getItem('app-locale') as Locale;
    if (savedLocale && (savedLocale === 'pt-BR' || savedLocale === 'en' || savedLocale === 'es')) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('app-locale', newLocale);
  };

  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[locale];
    
    for (const key of keys) {
      if (current === undefined || current === null) return path;
      current = current[key as keyof typeof current];
    }
    
    return current || path;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
