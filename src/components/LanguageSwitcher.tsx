"use client";

import { useLanguage } from '../i18n/LanguageContext';

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-[var(--border-color)]/50 rounded-full p-1 relative">
      {['pt-BR', 'en', 'es'].map((lang) => {
        const isActive = locale === lang;
        return (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 z-10 ${
              isActive
                ? 'bg-[var(--bg)] text-[var(--fg)] shadow-sm'
                : 'text-[var(--muted)] hover:text-[var(--fg)]'
            }`}
          >
            {lang === 'pt-BR' ? 'PT' : lang}
          </button>
        );
      })}
    </div>
  );
};
