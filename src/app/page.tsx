'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import DevBackground from '@/components/DevBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import CatEasterEgg from '@/components/CatEasterEgg';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : locale;
  }, [locale]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <DevBackground />
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <TechStackSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
          <QuoteSection />
          <Footer />
          <CatEasterEgg />
        </>
      )}
    </main>
  );
}
