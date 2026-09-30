"use client";

export default function DevBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      
      <div 
        className="absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--fg) 1px, transparent 1px),
              linear-gradient(to bottom, var(--fg) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--fg) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      
    </div>
  );
}
