"use client";

import { useLanguage } from '../i18n/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { FiInstagram, FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative w-full py-12 md:py-24 border-t border-[var(--border-color)] overflow-hidden bg-[var(--bg)] text-[var(--fg)]">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[var(--border-color)] opacity-10 pointer-events-none select-none whitespace-nowrap z-0">
        {t('nav.contact').toUpperCase()}
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex gap-6 md:gap-8 mb-12">
            
            <a href="https://www.linkedin.com/in/brenocandeu/" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-[var(--border-color)] rounded-full text-[var(--muted)] hover:text-[var(--bg)] hover:bg-[var(--fg)] hover:border-[var(--fg)] transition-all transform hover:-translate-y-1 hover:shadow-lg" aria-label="LinkedIn">
              <FiLinkedin size={22} strokeWidth={1.5} />
            </a>
            
            <a href="https://github.com/brenocandeu" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-[var(--border-color)] rounded-full text-[var(--muted)] hover:text-[var(--bg)] hover:bg-[var(--fg)] hover:border-[var(--fg)] transition-all transform hover:-translate-y-1 hover:shadow-lg" aria-label="GitHub">
              <FiGithub size={22} strokeWidth={1.5} />
            </a>
            
            <a href="https://x.com/BrenoCandeu" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-[var(--border-color)] rounded-full text-[var(--muted)] hover:text-[var(--bg)] hover:bg-[var(--fg)] hover:border-[var(--fg)] transition-all transform hover:-translate-y-1 hover:shadow-lg" aria-label="X (Twitter)">
              <RiTwitterXLine size={22} />
            </a>
            
            <a href="https://www.instagram.com/brenocandeu/" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-[var(--border-color)] rounded-full text-[var(--muted)] hover:text-[var(--bg)] hover:bg-[var(--fg)] hover:border-[var(--fg)] transition-all transform hover:-translate-y-1 hover:shadow-lg" aria-label="Instagram">
              <FiInstagram size={22} strokeWidth={1.5} />
            </a>
            
            <a href="https://www.youtube.com/@BrenoCandeu" target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 border border-[var(--border-color)] rounded-full text-[var(--muted)] hover:text-[var(--bg)] hover:bg-[var(--fg)] hover:border-[var(--fg)] transition-all transform hover:-translate-y-1 hover:shadow-lg" aria-label="YouTube">
              <FiYoutube size={22} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-[var(--fg)] text-base md:text-lg font-light mb-12 max-w-md text-center leading-relaxed">
            {t('footer.slogan')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-[var(--muted)] font-mono text-xs md:text-sm tracking-widest uppercase">
              {t('footer.copyright')}
            </p>
            <p className="text-[var(--muted)] text-xs md:text-sm font-light">
              {t('footer.builtWith')}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
