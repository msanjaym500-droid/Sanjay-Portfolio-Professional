'use client';

/**
 * Sticky Top Navigation Bar
 * Follows the 3-zone Top Bar Contract with light blur background.
 * Tracks active section on scroll, supports smooth anchor jumps with offset,
 * and includes ThemeToggle and MobileMenu.
 */

import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { siteContent } from '@/content/site';

export function Navbar() {
  const { navigation, personal } = siteContent;
  const [currentSection, setCurrentSection] = React.useState('');
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Monitor scroll for styling and active section highlighting
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionElements = navigation.map((nav) =>
        document.querySelector(nav.href)
      );

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i] as HTMLElement | null;
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSection(navigation[i].href.replace('#', ''));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  return (
    <>
      {/* Accessible Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-[#2563EB] text-white rounded-lg shadow-lg"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container>
          <div className="h-16 flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#top"
              className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#E5E7EB] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors whitespace-nowrap shrink-0"
              aria-label="Sanjay - Home"
            >
              {personal.name}
            </a>

            {/* Zone 2: Single-line text navigation links */}
            <nav
              className="hidden md:flex items-center gap-7 text-sm font-medium text-[#475569] dark:text-[#94A3B8]"
              aria-label="Main Navigation"
            >
              {navigation.map((link) => {
                const isActive = currentSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`py-1 transition-colors relative whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#2563EB] dark:text-[#60A5FA] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2563EB] dark:after:bg-[#60A5FA]'
                        : 'hover:text-[#0F172A] dark:hover:text-[#E5E7EB]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Actions - ThemeToggle and MobileMenu */}
            <div className="flex items-center gap-2.5 shrink-0">
              <ThemeToggle />
              <MobileMenu links={navigation} currentSection={currentSection} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
