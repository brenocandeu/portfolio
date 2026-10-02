"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any | null;
  t: any;
}

export default function ProjectModal({ isOpen, onClose, project, t }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[var(--bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            <div className="relative w-full h-64 sm:h-80 bg-[var(--card-bg)] flex items-center justify-center overflow-hidden border-b border-[var(--border-color)]">
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="text-[var(--muted)] font-mono text-xs tracking-widest uppercase">
                  {t('projects.imgPlaceholder')}
                </div>
              )}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-medium text-[var(--fg)] mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg text-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors text-sm font-medium">
                      <FiGithub size={16} /> GitHub
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[var(--fg)] text-[var(--bg)] rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                      <ExternalLink size={16} /> {t('projects.viewProject')}
                    </a>
                  )}
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-[var(--muted)] leading-relaxed whitespace-pre-line text-lg">
                  {project.longDescription || project.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
