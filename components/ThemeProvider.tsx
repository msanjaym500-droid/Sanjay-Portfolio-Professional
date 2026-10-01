'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const themeStore = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot(): Theme {
    if (typeof window === 'undefined') return 'dark';
    try {
      const stored = localStorage.getItem('sanjay_portfolio_theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {}
    return 'dark';
  },
  getServerSnapshot(): Theme {
    return 'dark';
  },
  setTheme(newTheme: Theme) {
    try {
      localStorage.setItem('sanjay_portfolio_theme', newTheme);
      const root = document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.style.colorScheme = 'light';
      }
    } catch {}
    emitChange();
  },
  toggleTheme() {
    const current = themeStore.getSnapshot();
    themeStore.setTheme(current === 'dark' ? 'light' : 'dark');
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  useEffect(() => {
    // Keep DOM in sync on client
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const toggleTheme = () => themeStore.toggleTheme();
  const setTheme = (t: Theme) => themeStore.setTheme(t);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
