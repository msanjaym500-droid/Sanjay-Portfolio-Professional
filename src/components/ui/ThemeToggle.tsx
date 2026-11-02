'use client';

/**
 * Accessible Theme Toggle button
 * Toggles between light and dark themes using next-themes.
 * Includes hydration mounted check to prevent layout shift.
 */

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={`w-10 h-10 rounded-lg flex items-center justify-center border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] cursor-pointer ${className}`}
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`w-10 h-10 rounded-lg flex items-center justify-center border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#111A2E] text-[#0F172A] dark:text-[#E5E7EB] hover:bg-[#F8FAFC] dark:hover:bg-[#1E293B] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB] ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-[#475569]" aria-hidden="true" />
      )}
    </button>
  );
}
