"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="py-40 w-full px-6 border-y border-[var(--border-color)] bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto text-center relative">
        <ScrollReveal>
          <span className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-serif leading-none text-[var(--fg)] opacity-5 select-none pointer-events-none">
            &ldquo;
          </span>
          
          <blockquote className="relative z-10">
            <p className="text-2xl md:text-4xl text-[var(--fg)] font-serif italic leading-relaxed tracking-tight">
              {t("quote.text")}
            </p>
            <footer className="mt-8">
              <span className="text-[var(--muted)] font-mono text-sm uppercase tracking-widest">
                — {t("quote.author")}
              </span>
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
