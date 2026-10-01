'use client';

import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#070b14] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <a
              href="#top"
              className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Sanjay</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              AI-Assisted Web Developer · Physics Graduate · Villupuram, Tamil Nadu, India
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sanjay-sanjay-10479231b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              aria-label="Sanjay on LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:msanjay662006@gmail.com"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              aria-label="Email Sanjay"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+919345850520"
              className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              aria-label="Call Sanjay"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Copyright & Subtle Statement */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} Sanjay. Built with honest craftsmanship, Next.js, TypeScript, and AI-assisted workflows.
          </p>
          <p className="text-[11px]">
            Designed for recruiters & engineering teams seeking disciplined, high-velocity talent.
          </p>
        </div>
      </div>
    </footer>
  );
}
