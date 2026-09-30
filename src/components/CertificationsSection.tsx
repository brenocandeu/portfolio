"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

export default function CertificationsSection() {
  const { t } = useLanguage();

  const education = [
    {
      title: "Bacharelado em Sistemas de Informação",
      issuer: "Instituto Federal de São Paulo (IFSP)",
      date: "2023 - 2026",
      icon: FaUniversity,
      link: "#"
    },
    {
      title: "Técnico em Informática para Internet",
      issuer: "ETEC Frei Arnaldo Maria de Itaporanga",
      date: "2019 - 2021",
      icon: FaLaptopCode,
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 w-full max-w-[1000px] mx-auto px-6 font-sans">
      <ScrollReveal>
        <h2 className="text-[var(--fg)] text-3xl md:text-5xl font-light tracking-tighter mb-16">
          {t('certifications.title')}
        </h2>
      </ScrollReveal>

      <div className="flex flex-col border-t border-[var(--border-color)]">
        {education.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 md:py-10 border-b border-[var(--border-color)] transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <Icon size={24} className="text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors duration-300 hidden sm:block" />
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-medium text-[var(--fg)] mb-1 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <span className="text-sm tracking-wide text-[var(--muted)]">
                      {item.issuer}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono text-[var(--muted)] hidden md:block">
                    {item.date}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] transition-all duration-300 text-[var(--muted)]">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
