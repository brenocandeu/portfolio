"use client";

import ScrollReveal from "./ScrollReveal";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-32 md:py-48 w-full max-w-[1000px] mx-auto px-6 font-sans text-center flex flex-col items-center justify-center">
      <ScrollReveal>
        
        <h2 className="text-[var(--fg)] text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-tight">
          {t('contactSection.titlePart1')} <br className="hidden md:block" />
          <span className="font-bold italic">{t('contactSection.titlePart2')}</span>
        </h2>
        
        <p className="text-[var(--muted)] text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          {t('contactSection.description')}
        </p>

        <div className="flex w-full justify-center items-center">
          <a 
            href="mailto:brenocandeu16@gmail.com"
            className="group flex items-center justify-center gap-3 text-[var(--fg)] border-b-2 border-[var(--fg)] pb-2 font-medium text-lg md:text-xl hover:text-[var(--muted)] hover:border-[var(--muted)] transition-all duration-300"
          >
            <Mail size={24} />
            {t('contactSection.btnEmail')}
          </a>
        </div>

      </ScrollReveal>
    </section>
  );
}
