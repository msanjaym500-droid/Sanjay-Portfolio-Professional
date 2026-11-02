'use client';

/**
 * Mobile Navigation Drawer
 * Opens full accessibility menu on narrow viewports with focus management and Esc key close.
 */

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@/content/site';

interface MobileMenuProps {
  links: NavLink[];
  currentSection: string;
}

export function MobileMenu({ links, currentSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#111A2E] text-[#0F172A] dark:text-[#E5E7EB] hover:bg-[#F8FAFC] dark:hover:bg-[#1E293B] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB]"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-16 z-50 bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] p-6 flex flex-col space-y-4 animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {links.map((link) => {
              const isActive = currentSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA]'
                      : 'text-[#0F172A] dark:text-[#E5E7EB] hover:bg-[#F8FAFC] dark:hover:bg-[#111A2E]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
