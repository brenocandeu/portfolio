"use client";

import { Code2, Palette, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 w-full max-w-5xl mx-auto px-6 font-sans">
      <ScrollReveal>
        <span className="text-[var(--muted)] font-mono text-sm tracking-tight block mb-4">
          // {t("about.label")}
        </span>
        <h2 className="text-[var(--fg)] text-4xl md:text-5xl font-bold tracking-tighter mb-16">
          {t("about.title")}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0.1}>
          <div className="aspect-square rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--border-color)]/50 to-transparent mix-blend-overlay pointer-events-none" />
            <span className="text-[var(--muted)] font-mono text-xs">// {t("about.photoFrame")}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col space-y-10">
          <p className="text-[var(--muted)] text-xl md:text-2xl leading-relaxed font-light">
            {t("about.p1.start")}{" "}
            <span className="text-[var(--fg)] font-medium inline-flex items-center gap-1.5"><Code2 className="w-6 h-6 stroke-[1.5]" /> {t("about.p1.highlight1")}</span>{" "}
            {t("about.p1.middle")}{" "}
            <span className="text-[var(--fg)] font-medium inline-flex items-center gap-1.5"><Palette className="w-6 h-6 stroke-[1.5]" /> {t("about.p1.highlight2")}</span>{" "}
            {t("about.p1.end")}{" "}
            <span className="text-[var(--fg)] font-medium inline-flex items-center gap-1.5"><Sparkles className="w-6 h-6 stroke-[1.5]" /></span>.
          </p>
          <p className="text-[var(--muted)] text-xl md:text-2xl leading-relaxed font-light">
            {t("about.p2")}
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-8 mt-6 border-t border-[var(--border-color)]/50">
            <div className="flex flex-col">
              <span className="text-[var(--fg)] text-3xl font-bold tracking-tight">2+</span>
              <span className="text-[var(--muted)] font-mono text-sm mt-2">{t("about.stats.exp")}</span>
            </div>
            <div className="w-px h-12 bg-[var(--border-color)]" />
            <div className="flex flex-col">
              <span className="text-[var(--fg)] text-3xl font-bold tracking-tight">10+</span>
              <span className="text-[var(--muted)] font-mono text-sm mt-2">{t("about.stats.projects")}</span>
            </div>
            <div className="w-px h-12 bg-[var(--border-color)]" />
            <div className="flex flex-col">
              <span className="text-[var(--fg)] text-3xl font-bold tracking-tight">100%</span>
              <span className="text-[var(--muted)] font-mono text-sm mt-2">{t("about.stats.focus")}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
