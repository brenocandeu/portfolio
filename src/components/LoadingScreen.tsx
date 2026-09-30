"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) setTimeout(onComplete, 500);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--fg)]"
        >
          <div className="w-full max-w-sm px-8">
            <div className="flex justify-between items-end mb-6 font-mono tracking-widest">
              <div className="flex items-center gap-1 text-base md:text-xl font-bold">
                <span className="text-[var(--muted)] opacity-50 font-light">&lt;</span>
                <span className="text-[var(--fg)]">BRENO</span>
                <span className="text-[var(--muted)] opacity-50 font-light">/&gt;</span>
                <span className="w-2.5 h-5 bg-[var(--fg)] ml-1 animate-pulse"></span>
              </div>
              <span className="tabular-nums text-[var(--muted)] text-sm">{Math.min(progress, 100)}%</span>
            </div>
            
            <div className="h-[2px] w-full bg-[var(--border-color)] overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-[var(--fg)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
