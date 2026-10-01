'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { AiWorkflow } from '@/components/AiWorkflow';
import { Internship } from '@/components/Internship';
import { EducationTimeline } from '@/components/EducationTimeline';
import { Projects } from '@/components/Projects';
import { Strengths } from '@/components/Strengths';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';
import { RecruiterBriefModal } from '@/components/RecruiterBriefModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRecruiterBriefOpen, setIsRecruiterBriefOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. AI Skills / Pragmatic Workflow */}
        <AiWorkflow />

        {/* 5. Internship (Skibui Technologies) */}
        <Internship />

        {/* 6. Education (Annamalai University Timeline) */}
        <EducationTimeline />

        {/* 7. Projects (With Live Interactive Simulations) */}
        <Projects />

        {/* 8. Strengths */}
        <Strengths />

        {/* 9. Contact & Location */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <RecruiterBriefModal
        isOpen={isRecruiterBriefOpen}
        onClose={() => setIsRecruiterBriefOpen(false)}
        onOpenResume={() => {
          setIsRecruiterBriefOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}
