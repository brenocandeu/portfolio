"use client";

import { useTheme } from '../i18n/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-[var(--border-color)]/50 flex items-center justify-center text-[var(--fg)] transition-all duration-300 hover:bg-[var(--border-color)]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
    </button>
  );
}
