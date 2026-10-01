'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useIsMounted } from '@/hooks/use-mounted';
import { Sun, Moon, Menu, X, FileText, Briefcase, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenRecruiterBrief: () => void;
}

export function Navbar({ onOpenResume, onOpenRecruiterBrief }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI Workflow', href: '#ai-workflow' },
    { label: 'Internship', href: '#internship' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark as per Top Bar Contract */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 group"
          aria-label="Sanjay Portfolio Homepage"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 transition-transform group-hover:scale-125" />
          <span>Sanjay</span>
        </a>

        {/* Zone 2: 4-7 text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button - Hydration safe */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label={
              isMounted
                ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
                : 'Switch color theme'
            }
            title={
              isMounted
                ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
                : 'Switch color theme'
            }
          >
            {isMounted && theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span className="text-xs font-medium hidden lg:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-medium hidden lg:inline">Light</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenRecruiterBrief}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Recruiter Fast Overview"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter View</span>
          </button>

          <button
            onClick={onOpenResume}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0c1220]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Theme Toggle Row */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                toggleTheme();
              }}
              type="button"
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {isMounted && theme === 'light' ? (
                  <Moon className="w-4 h-4 text-slate-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
                <span>
                  Theme:{' '}
                  <strong className="capitalize">{isMounted ? theme : 'Dark'}</strong>
                </span>
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                Switch
              </span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterBrief();
              }}
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 rounded-lg"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Recruiter Snapshot
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-slate-900 dark:bg-blue-600 rounded-lg"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
