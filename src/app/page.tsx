import * as React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { ExperienceEducation } from '@/components/sections/ExperienceEducation';
import { Contact } from '@/components/sections/Contact';

/**
 * Main Single Page Portfolio for Sanjay
 * Assembles all sections in order.
 */
export default function HomePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white dark:bg-[#0B1220]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
    </div>
  );
}
