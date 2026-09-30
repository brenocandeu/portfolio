"use client";

import React, { useEffect, useState } from "react";

interface CodeCommentProps {
  text: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  className?: string;
}

export function CodeComment({ text, position, className = "" }: CodeCommentProps) {
  return (
    <div
      className={`absolute font-mono text-[var(--fg)] opacity-5 pointer-events-none select-none text-xl sm:text-2xl font-bold ${className}`}
      style={position}
    >
      // {text}
    </div>
  );
}

interface CodeBracketsProps {
  children: React.ReactNode;
  type: "curly" | "square" | "angle";
  className?: string;
}

export function CodeBrackets({ children, type, className = "" }: CodeBracketsProps) {
  const brackets = {
    curly: ["{", "}"],
    square: ["[", "]"],
    angle: ["<", ">"],
  };

  const [open, close] = brackets[type];

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <span className="font-mono text-[var(--muted)] opacity-30 text-2xl md:text-3xl font-light mr-2 select-none">
        {open}
      </span>
      {children}
      <span className="font-mono text-[var(--muted)] opacity-30 text-2xl md:text-3xl font-light ml-2 select-none">
        {close}
      </span>
    </div>
  );
}

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-sm tracking-wider uppercase text-[var(--muted)] opacity-70 mb-4 select-none flex items-center gap-2 ${className}`}
    >
      <span className="text-[var(--accent)] font-bold">//</span> {text}
    </div>
  );
}

interface TerminalPromptProps {
  text: string;
  className?: string;
}

export function TerminalPrompt({ text, className = "" }: TerminalPromptProps) {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`font-mono text-base md:text-lg text-[var(--muted)] select-none flex items-center ${className}`}
    >
      <span className="text-[var(--accent)] mr-2 font-bold">$</span>
      <span>{text}</span>
      <span
        className={`ml-1 w-2 h-5 bg-[var(--fg)] opacity-70 inline-block transition-opacity duration-100 ${
          showCursor ? "opacity-70" : "opacity-0"
        }`}
      ></span>
    </div>
  );
}
