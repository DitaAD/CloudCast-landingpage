// src/types/gtag.d.ts

interface Window {
    gtag: (command: string, config: string, params?: object) => void;
  }
  