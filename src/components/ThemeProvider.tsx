'use client';

/**
 * ThemeProvider component using next-themes
 * Provides light/dark theme switching and persists the choice in localStorage.
 * Default theme is light, as requested.
 */

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
