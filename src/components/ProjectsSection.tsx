"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Globe } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiPython, SiNodedotjs, SiPostgresql, SiMongodb, SiFirebase 
} from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const projectsData = [
    {
      title: "RAGKNO",
      description: "A production-grade RAG system with semantic reranking and multi-source ingestion.",
      tech: [SiTailwindcss, SiReact, SiPython, SiPostgresql],
      status: "Building",
      link: "#"
    },
    {
      title: "Plant Doctor",
      description: "AI + IoT plant health platform with real-time ESP32 sensor data.",
      tech: [SiPython, SiJavascript, SiMongodb, SiFirebase],
      status: "Operational",
      link: "#"
    },
    {
      title: "FinDash Pro",
      description: "Enterprise financial dashboard with real-time websocket data streams.",
      tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs],
      status: "Maintenance",
      link: "#"
    },
    {
      title: "NeoCommerce",
      description: "Headless e-commerce storefront with sub-second page loads.",
      tech: [SiNextdotjs, SiReact, SiPostgresql],
      status: "Operational",
      link: "#"
    },
    {
      title: "DevSync",
      description: "Collaborative real-time code editor with CRDTs and built-in terminal.",
      tech: [SiTypescript, SiNodedotjs, SiReact],
      status: "Building",
      link: "#"
    },
    {
      title: "Orbit Analytics",
      description: "Privacy-first analytics platform tracking user flows without cookies.",
      tech: [SiNextdotjs, SiTailwindcss, SiPostgresql],
      status: "Operational",
      link: "#"
    }
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projetos" className="py-24 md:py-32 w-full max-w-[1400px] mx-auto px-6 font-sans">
      <ScrollReveal>
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-[var(--fg)] text-4xl md:text-6xl font-light tracking-tighter">
            {t('projects.title')}
          </h2>
          
          {!showAll && projectsData.length > 3 && (
            <button 
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm font-mono uppercase tracking-widest"
            >
              {t('projects.viewAll')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </button>
          )}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group border border-[var(--border-color)] bg-[var(--card-bg)] rounded-3xl overflow-hidden hover:border-[var(--muted)] transition-colors duration-500 h-full flex flex-col relative">
              
              <div className="w-full h-48 md:h-56 bg-gradient-to-b from-[var(--border-color)] to-transparent opacity-30 flex items-center justify-center overflow-hidden">
                 <div className="text-[var(--muted)] font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                    {t('projects.imgPlaceholder')}
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 bg-[var(--bg)]">
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-medium text-[var(--fg)]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                      <Globe size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                      <FiGithub size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 flex-1 font-light">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-color)]">
                  <div className="flex gap-3">
                    {project.tech.map((Icon, i) => (
                      <Icon key={i} size={16} className="text-[var(--muted)]" />
                    ))}
                  </div>

                  <a href={project.link} className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--muted)] group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] group-hover:border-[var(--fg)] transition-all">
                    <ArrowRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
