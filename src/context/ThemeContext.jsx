import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'rm-theme';
const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = useCallback((nextTheme) => {
    const root = document.documentElement;
    if (nextTheme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem(STORAGE_KEY, nextTheme);

    // Notify the canvas about theme change
    if (typeof window._updateCanvasTheme === 'function') {
      window._updateCanvasTheme(nextTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
