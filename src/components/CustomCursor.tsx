"use client";

import { useEffect } from "react";

const createDefaultCursor = (color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 4 4, auto`;
};

const createPointerCursor = (color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/><path d="M6 11V4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0"/></svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 10 2, pointer`;
};

export default function CustomCursor() {
  useEffect(() => {
    const applyCursors = () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark" ||
        document.documentElement.classList.contains("dark") ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches &&
          !document.documentElement.getAttribute("data-theme"));

      const color = isDark ? "#aaaaaa" : "#555555";
      const hoverColor = isDark ? "#ffffff" : "#000000";

      const defaultCursor = createDefaultCursor(color);
      const pointerCursor = createPointerCursor(hoverColor);

      let styleEl = document.getElementById("custom-cursor-styles");
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "custom-cursor-styles";
        document.head.appendChild(styleEl);
      }

      styleEl.innerHTML = `
        body, html {
          cursor: ${defaultCursor} !important;
        }
        a, button, [role="button"], input[type="submit"], input[type="button"], select, .cursor-pointer {
          cursor: ${pointerCursor} !important;
        }
      `;
    };

    applyCursors();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "data-theme" || mutation.attributeName === "class")
        ) {
          applyCursors();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyCursors();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
      const styleEl = document.getElementById("custom-cursor-styles");
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return null;
}
