"use client";

import { useLanguage } from "../i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiPostgresql, 
  SiMongodb, 
  SiFigma 
} from "react-icons/si";

const techItems = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--fg)" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "var(--fg)" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

export default function TechStackSection() {
  const { t } = useLanguage();
  
  return (
    <section id="stack" className="py-32 md:py-40 w-full max-w-7xl mx-auto px-6 font-sans">
      <ScrollReveal>
        <h2 className="text-[var(--fg)] text-3xl md:text-5xl font-bold tracking-tighter mb-20 md:mb-32 text-center uppercase">
          {t('stack.title')}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-24 max-w-5xl mx-auto">
          {techItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.name}
                className="group flex flex-col items-center gap-5 cursor-pointer"
                title={item.name}
              >
                <Icon 
                  className="w-10 h-10 md:w-14 md:h-14 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" 
                  style={{ color: item.color }}
                />
                <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
