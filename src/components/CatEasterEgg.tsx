"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

export default function CatEasterEgg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [clicks, setClicks] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    setWindowLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2; 
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      
      const maxDistX = window.innerWidth / 1.5;
      const maxDistY = window.innerHeight / 1.5;
      
      mouseX.set(Math.max(-1, Math.min(1, dx / maxDistX)));
      mouseY.set(Math.max(-1, Math.min(1, dy / maxDistY)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const eyeX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const eyeY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const bodyRotate = useTransform(smoothX, [-1, 1], [-8, 8]);

  const handleClick = () => {
    if (isJumping) return;
    
    setClicks(c => c + 1);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    
    // Animação de pulo
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
  };

  if (!windowLoaded) return null;

  return (
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      
      <motion.div 
        ref={containerRef}
        className="absolute bottom-4 right-4 md:right-12 w-32 h-32 md:w-36 md:h-36 pointer-events-auto cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        whileDrag={{ scale: 1.1, rotate: 5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.8 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--fg)] text-[var(--bg)] px-4 py-2 rounded-2xl rounded-br-none font-bold text-xs whitespace-nowrap shadow-2xl z-10"
            >
              {clicks > 5 ? "Stop poking me!" : "Wheeeee!"}
            </motion.div>
          )}
        </AnimatePresence>

        <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible drop-shadow-2xl">
          
          <motion.g 
            style={{ rotate: bodyRotate, originX: "60px", originY: "90px" }}
            animate={isJumping ? { 
              y: [0, -60, 0], 
              scaleY: [1, 0.7, 1.1, 1], 
              scaleX: [1, 1.2, 0.9, 1] 
            } : { y: 0, scaleY: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            
            {/* Corpo */}
            <path 
              d="M 30 60 A 30 30 0 0 1 90 60 L 90 85 A 10 10 0 0 1 80 95 L 40 95 A 10 10 0 0 1 30 85 Z" 
              fill="var(--fg)" 
            />
            
            {/* Pezinhos */}
            <ellipse cx="42" cy="95" rx="8" ry="6" fill="var(--fg)" />
            <ellipse cx="78" cy="95" rx="8" ry="6" fill="var(--fg)" />

            {/* Olhos (Felizes no Hover, Piscando normal fora) */}
            {isHovered ? (
              <motion.g style={{ x: eyeX, y: eyeY }} className="stroke-[var(--bg)]" strokeWidth="4" strokeLinecap="round" fill="none">
                <path d="M 38 55 Q 45 45 52 55" />
                <path d="M 68 55 Q 75 45 82 55" />
              </motion.g>
            ) : (
              <motion.g style={{ x: eyeX, y: eyeY }}>
                <motion.ellipse 
                  cx="45" cy="55" rx="7" ry="11" fill="var(--bg)" 
                  animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.95, 0.97, 1, 1] }}
                />
                <motion.ellipse 
                  cx="75" cy="55" rx="7" ry="11" fill="var(--bg)" 
                  animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.95, 0.97, 1, 1] }}
                />
              </motion.g>
            )}
            
            {/* Boquinha */}
            <motion.path
              d={isHovered ? "M 54 68 Q 60 74 66 68" : "M 57 68 Q 60 70 63 68"}
              fill="none"
              stroke="var(--bg)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ x: eyeX, y: eyeY }}
              className={isHovered ? "opacity-100" : "opacity-50"}
            />
          </motion.g>

          {/* Plaquinha Flutuante com o </> */}
          <motion.g 
            animate={{ y: [0, -8, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="85" y="30" width="30" height="24" rx="8" fill="var(--bg)" stroke="var(--fg)" strokeWidth="2.5" />
            <text x="100" y="46" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle" fill="var(--fg)">&lt;/&gt;</text>
          </motion.g>
        </svg>

      </motion.div>
    </div>
  );
}
