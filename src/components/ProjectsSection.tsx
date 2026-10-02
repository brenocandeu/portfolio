"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Globe } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiPython, SiNodedotjs, SiPostgresql, SiMongodb, SiFirebase,
  SiRedis, SiExpress, SiHtml5, SiCss
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { t } = useLanguage();

  const translatedProjects = t('projects.items') as any[];

  const projectsData = [
    {
      ...translatedProjects[0], // Weave
      image: "/device-weave.png",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, DiRedis, SiPostgresql, FaAws],
      github: "https://github.com/brenocandeu/weave",
      live: "#"
    },
    {
      ...translatedProjects[1], // OpenBus
      image: "/device-openbus.png",
      tech: [SiReact, SiNodedotjs],
      github: "https://github.com/brenocandeu/openbus",
      live: "#"
    },
    {
      ...translatedProjects[2], // Barão Suplementos
      image: "/device-daniel.png",
      tech: [SiHtml5, SiCss, SiJavascript],
      live: "https://barao-suplementos.vercel.app"
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
          
          <a 
            href="#"
            className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm font-mono uppercase tracking-widest"
          >
            {t('projects.viewAll')}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div 
              onClick={() => setSelectedProject(project)}
              className="group border border-[var(--border-color)] bg-[var(--card-bg)] cursor-pointer rounded-3xl overflow-hidden hover:border-[var(--muted)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative"
            >
              
              <div className="relative w-full h-48 md:h-56 bg-gradient-to-b from-[var(--border-color)] to-transparent flex items-center justify-center overflow-hidden border-b border-[var(--border-color)]">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="text-[var(--muted)] font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                    {t('projects.imgPlaceholder')}
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1 bg-[var(--bg)]">
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-medium text-[var(--fg)]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.live && project.live !== "#" && (
                      <span className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                        <Globe size={18} strokeWidth={1.5} />
                      </span>
                    )}
                    {project.github && (
                      <span className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                        <FiGithub size={18} strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 flex-1 font-light line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-color)]">
                  <div className="flex gap-3">
                    {project.tech.map((Icon: any, i: number) => (
                      <Icon key={i} size={16} className="text-[var(--muted)]" />
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--muted)] group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] group-hover:border-[var(--fg)] transition-all">
                    <ArrowRight size={14} strokeWidth={2} className="-rotate-45" />
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject}
        t={t}
      />
    </section>
  );
}
