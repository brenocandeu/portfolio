"use client";

import { useLanguage } from "../i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Folder } from "lucide-react";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = t('experience.items');

  const getTags = (idx: number) => {
    const tagsList = [
      ["DIAGNÓSTICO DE REDES", "ATENDIMENTO TÉCNICO", "INFRAESTRUTURA", "RESOLUÇÃO DE FALHAS"],
      ["SUPORTE A SOFTWARES", "TREINAMENTO", "GESTÃO DE PONTO", "ATENDIMENTO CORPORATIVO"]
    ];
    return tagsList[idx % tagsList.length];
  };

  return (
    <section id="experience" className="py-32 md:py-40 w-full max-w-7xl mx-auto px-6 font-sans overflow-hidden">
      <ScrollReveal>
        {/* <span className="text-[var(--muted)] font-mono text-lg md:text-xl tracking-tight block mb-4 text-center">
          // {t('experience.label')}
        </span> */}
        <h2 className="text-[var(--fg)] text-4xl md:text-6xl font-bold tracking-tighter mb-24 md:mb-32 text-center uppercase">
          {t('experience.title')}
        </h2>
      </ScrollReveal>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--fg)] -translate-x-1/2 opacity-30" />
        
        <div className="block md:hidden absolute left-[1.35rem] top-0 bottom-0 w-px bg-[var(--fg)] opacity-30" />

        <div className="space-y-24 md:space-y-32">
          {Array.isArray(experiences) && experiences.map((exp: any, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={index} delay={0.1}>
                <div className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--fg)] z-10" />

                  <div className="block md:hidden absolute left-[1.35rem] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--fg)] z-10" />

                  <div className={`w-full md:w-1/2 flex flex-col items-center justify-center pl-16 md:pl-0 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <div className="relative flex flex-col items-center group cursor-pointer">
                      <div 
                        className="text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5.5rem] whitespace-nowrap font-bold tracking-tighter leading-none select-none" 
                        style={{ WebkitTextStroke: '2px var(--fg)', color: 'transparent' }}
                      >
                        {exp.period}
                      </div>
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg)] p-2 rounded-xl">
                        <Folder size={64} className="fill-[var(--fg)] text-[var(--fg)]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--bg)] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] font-bold">
                          &lt;/&gt;
                        </div>
                      </div>
                      
                      <span className="mt-8 text-xs font-bold tracking-[0.2em] uppercase text-[var(--fg)]">
                        Experience Archive
                      </span>
                      <span className="text-[10px] text-[var(--muted)] mt-2">
                        Click Folder
                      </span>
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 pl-8 sm:pl-16 md:pl-0 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                    <div 
                      className="bg-[var(--bg)] border-2 border-[var(--fg)] rounded-2xl p-6 sm:p-8 md:p-10 relative" 
                      style={{ boxShadow: '8px 8px 0px 0px var(--fg)' }}
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[var(--fg)] mb-3">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-[var(--muted)] text-xs sm:text-sm uppercase tracking-wider font-semibold mb-6">
                        <MapPin size={16} strokeWidth={2.5} />
                        {exp.company}
                      </div>

                      <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mb-8 font-medium">
                        {exp.description}
                      </p>

                      <div className="border-t-2 border-[var(--border-color)] pt-6 flex flex-wrap gap-2">
                        {getTags(index).map((tag, i) => (
                          <span key={i} className="px-3 py-1.5 border-2 border-[var(--border-color)] text-[var(--muted)] text-[9px] sm:text-[10px] uppercase font-bold tracking-widest rounded-md hover:border-[var(--fg)] hover:text-[var(--fg)] transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
