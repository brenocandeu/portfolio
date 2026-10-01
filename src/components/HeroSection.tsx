"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowRight, Download } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";

// Custom Hook para o efeito de Máquina de Escrever (Typewriter)
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export default function HeroSection() {
  const { locale, t } = useLanguage();

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Web Designer"
  ];
  const typedText = useTypewriter(roles);

  const greeting = locale === 'pt-BR' ? "Olá, eu sou" : locale === 'es' ? "Hola, soy" : "Hi, I'm";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      
      <div className="w-full flex flex-col lg:flex-row gap-20 lg:gap-24 items-center justify-between">
        
        {/* Lado Esquerdo: Identidade e Título */}
        <motion.div 
          className="w-full lg:w-[55%] flex flex-col space-y-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <div className="space-y-6">
            <span className="text-2xl md:text-3xl font-mono text-[var(--muted)] font-light">
              {greeting}
            </span>
            <h1 className="text-7xl sm:text-8xl md:text-[9rem] font-black tracking-tighter text-[var(--fg)] leading-none uppercase ml-[-5px]">
              Breno.
            </h1>
            
            {/* Efeito Typewriter */}
            <div className="h-12 mt-4 flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-medium text-[var(--muted)] flex items-center">
                <span className="text-[var(--fg)] mr-4">&gt;</span> 
                {typedText}
                {/* Cursor piscante simulando terminal */}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-4 md:w-5 h-8 md:h-10 bg-[var(--fg)] ml-2"
                />
              </span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a 
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[var(--fg)] text-[var(--bg)] px-8 py-4 md:px-10 md:py-5 rounded-none font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-[var(--muted)] hover:scale-105"
            >
              {locale === 'pt-BR' ? 'Baixar CV' : locale === 'es' ? 'Descargar CV' : 'Download CV'}
              <Download size={20} className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="pt-8 flex items-center gap-6">
            {[
              { icon: FiGithub, href: "https://github.com/brenocandeu" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/brenocandeu/" },
              { icon: FiMail, href: "mailto:brenocandeu16@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                <div className="absolute inset-0 bg-[var(--border-color)] opacity-0 group-hover:opacity-30 rounded-full transition-all scale-50 group-hover:scale-100 duration-300" />
                <social.icon size={26} className="relative z-10" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Lado Direito: Texto de Apresentação (Editorial / Minimalista) */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative pl-8 md:pl-14 border-l-2 border-[var(--border-color)]">
            {/* Detalhe arquitetônico na borda */}
            <div className="absolute left-[-2px] top-0 w-[2px] h-16 bg-[var(--fg)]" />
            
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--fg)] font-bold mb-8 block">
              // {locale === 'pt-BR' ? 'Introdução' : locale === 'es' ? 'Introducción' : 'Introduction'}
            </span>
            
            <p className="text-xl md:text-3xl text-[var(--fg)] leading-[1.6] font-light">
              {t('hero.description')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
