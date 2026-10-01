"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.certifications"), href: "#certifications" },
    { name: t("nav.projects"), href: "#projetos" },
    { name: t("nav.contact"), href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div className="w-1/4 flex justify-start">
          <Link href="#home" className="group relative font-mono text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-1 z-50">
            <span className="text-[var(--muted)] opacity-50 font-light">&lt;</span>
            <span className="text-[var(--fg)] group-hover:tracking-widest transition-all duration-300">BRENO</span>
            <span className="text-[var(--muted)] opacity-50 font-light">/&gt;</span>
            <span className="w-2.5 h-6 bg-[var(--fg)] ml-1 animate-pulse"></span>
          </Link>
        </div>

        <div className="hidden lg:flex w-2/4 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] md:text-sm font-bold uppercase tracking-[0.15em] text-[var(--fg)] hover:text-[var(--muted)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex w-1/4 justify-end items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center justify-end w-3/4 gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--fg)] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--bg)] border-b border-[var(--border-color)] p-6 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--fg)] hover:text-[var(--muted)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
