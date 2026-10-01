'use client';

import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import {
  X,
  Download,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Check,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    setDownloading(true);

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
      const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
      const margin = 36;
      const contentWidth = pageWidth - margin * 2;
      let y = 38;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - 36) {
          doc.addPage();
          y = 38;
        }
      };

      // 1. Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text('SANJAY', margin, y);
      y += 18;

      doc.setFontSize(11);
      doc.setTextColor(37, 99, 235); // blue-600
      doc.text('AI-Assisted Web Developer', margin, y);
      y += 14;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105); // slate-600
      const contactText =
        'Villupuram, Tamil Nadu, India  |  msanjay662006@gmail.com  |  +91 9345850520  |  linkedin.com/in/sanjay-sanjay-10479231b';
      doc.text(contactText, margin, y);
      y += 10;

      // Header separator line
      doc.setDrawColor(15, 23, 42);
      doc.setLineWidth(1.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 16;

      // Helper for Section Titles
      const addSectionTitle = (title: string) => {
        checkPageBreak(30);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(title.toUpperCase(), margin, y);
        y += 4;
        doc.setDrawColor(203, 213, 225); // slate-300
        doc.setLineWidth(0.75);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
      };

      // Helper for paragraphs
      const addParagraph = (text: string, fontSize = 8.5, textColor = [51, 65, 85]) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(fontSize);
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        const lines = doc.splitTextToSize(text, contentWidth);
        checkPageBreak(lines.length * 11 + 6);
        doc.text(lines, margin, y);
        y += lines.length * 11 + 6;
      };

      // 2. Professional Summary
      addSectionTitle('Professional Summary');
      const summaryText =
        "I am Sanjay, an AI-Assisted Web Developer with a passion for building modern, user-friendly, and impactful digital experiences. I recently graduated with a Bachelor of Science in Physics from Annamalai University, where I developed strong analytical thinking, logical reasoning, and problem-solving abilities. " +
        "I enjoy combining creativity with technology to build websites and explore innovative solutions using AI-assisted development workflows. I actively use AI tools to support learning, research, planning, productivity, content creation, and software development, enabling me to work more efficiently while continuously expanding my technical knowledge. " +
        "My internship in Python Programming at Skibui Technologies strengthened my programming fundamentals, logical thinking, debugging skills, and problem-solving approach. It also reinforced my interest in software development and motivated me to continue learning modern technologies and industry best practices. " +
        "I believe that continuous learning, adaptability, and discipline are essential qualities for every developer. I am always eager to improve my skills, embrace new challenges, and create digital solutions that provide real value to users. I enjoy working collaboratively, learning from experienced professionals, and contributing with dedication and a positive mindset. " +
        "My goal is to build a successful career as a professional Web Developer by creating high-quality, responsive, and performance-driven web applications. I am committed to growing every day, delivering meaningful work, and making a positive impact through technology.";
      addParagraph(summaryText, 8.5);

      // 3. Education
      addSectionTitle('Education');
      checkPageBreak(40);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text('Bachelor of Science in Physics (B.Sc Physics)', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text('2023 – 2026', pageWidth - margin, y, { align: 'right' });
      y += 12;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(37, 99, 235);
      doc.text('Annamalai University — Chidambaram, Tamil Nadu, India', margin, y);
      y += 12;

      addParagraph(
        'Analytical foundations: Mathematical Physics, Optics, Classical Mechanics, Vector Calculus, Experimental Deductive Logic, Statistical Problem Solving.',
        8
      );

      // 4. Internship Experience
      addSectionTitle('Internship Experience');
      checkPageBreak(65);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text('Python Programming Intern', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text('15 May 2025 – 15 June 2025', pageWidth - margin, y, { align: 'right' });
      y += 12;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(37, 99, 235);
      doc.text('Skibui Technologies', margin, y);
      y += 12;

      const bullets = [
        'Completed comprehensive hands-on Python training covering data structures, modular logic, and exception handling.',
        'Learned core Python programming fundamentals and standard library modules for filesystem operations.',
        'Developed simple automation scripts for directory file sorting, batch processing, and audit reporting.',
        'Strengthened debugging skills and logical thinking through systematic traceback isolation.',
        'Improved problem-solving ability on practical software development tasks.',
      ];

      bullets.forEach((b) => {
        checkPageBreak(14);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        doc.text('•', margin + 4, y);
        const bLines = doc.splitTextToSize(b, contentWidth - 16);
        doc.text(bLines, margin + 14, y);
        y += bLines.length * 10 + 2;
      });
      y += 4;

      // 5. Technical & Soft Skills
      addSectionTitle('Technical & Soft Skills');
      checkPageBreak(45);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text('Technical Skills: ', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.text('AI-Assisted Web Development, Python Programming (Fundamentals), AI Tools', margin + 85, y);
      y += 12;

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('Office & Creative: ', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.text('Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Canva', margin + 85, y);
      y += 12;

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('Soft Skills: ', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const softSkills =
        'Problem Solving, Analytical Thinking, Quick Learner, Communication, Adaptability, Teamwork, Positive Attitude, Continuous Learning';
      const softLines = doc.splitTextToSize(softSkills, contentWidth - 85);
      doc.text(softLines, margin + 85, y);
      y += softLines.length * 10 + 4;

      // 6. AI Tools Workflow Integration
      addSectionTitle('AI Tools Workflow Integration');
      const aiWorkflowText =
        'Pragmatic, disciplined developer usage for: Learning (syntax & framework concepts), Research (architectural trade-offs), Brainstorming (UX ideas & edge cases), Productivity (scaffolding boilerplate), Website Development (frontend styling acceleration), Problem Solving (debugging traceback logs), Writing (documentation & notes), and Planning (task decomposition). All code is verified with developer oversight without claiming expert-level status.';
      addParagraph(aiWorkflowText, 8.5);

      // 7. Demonstrated Projects
      addSectionTitle('Demonstrated Projects');

      const projects = [
        {
          name: 'OpticsLab — Physics Wave & Vector Simulator',
          tools: 'Next.js · TypeScript · Canvas',
          desc: 'Interactive wave simulation web app demonstrating harmonic interference and wavelength variance with real-time canvas rendering.',
        },
        {
          name: 'PyAutomate — Python Automation & Batch File Organizer',
          tools: 'Python 3 · Pathlib · Regex',
          desc: 'Batch filesystem utility that categorizes chaotic directories by extension, executes safe moves, and creates execution logs with exception handling.',
        },
        {
          name: 'DevSprint — AI-Assisted Study & Sprint Tracker',
          tools: 'React · Next.js · Tailwind CSS',
          desc: 'Focused developer productivity dashboard for organizing learning milestones, markdown study notes, and daily coding sprint cadences.',
        },
      ];

      projects.forEach((p) => {
        checkPageBreak(30);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42);
        doc.text(p.name, margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(p.tools, pageWidth - margin, y, { align: 'right' });
        y += 10;
        addParagraph(p.desc, 8);
      });

      // Save as genuine PDF file
      doc.save('Sanjay_Resume.pdf');

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c1220] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h3 id="resume-modal-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Sanjay — Professional Resume
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              · ATS Optimized PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Resume Button (Outputs genuine .pdf format) */}
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloading ? 'Generating PDF...' : 'Download Resume (PDF)'}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 selection:bg-blue-200 selection:text-slate-900">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">
                Sanjay
              </h1>
              <span className="text-base font-bold text-blue-700">
                AI-Assisted Web Developer
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-600" />
                Villupuram, Tamil Nadu, India
              </span>
              <span>·</span>
              <a href="mailto:msanjay662006@gmail.com" className="flex items-center gap-1 text-blue-700 hover:underline">
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                msanjay662006@gmail.com
              </a>
              <span>·</span>
              <a href="tel:+919345850520" className="flex items-center gap-1 text-slate-800">
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                +91 9345850520
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/sanjay-sanjay-10479231b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-700 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                linkedin.com/in/sanjay-sanjay-10479231b
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-800 text-justify">
              I am Sanjay, an AI-Assisted Web Developer with a passion for building modern, user-friendly, and impactful digital experiences. I recently graduated with a Bachelor of Science in Physics from Annamalai University, where I developed strong analytical thinking, logical reasoning, and problem-solving abilities.
              I enjoy combining creativity with technology to build websites and explore innovative solutions using AI-assisted development workflows. I actively use AI tools to support learning, research, planning, productivity, content creation, and software development, enabling me to work more efficiently while continuously expanding my technical knowledge.
              My internship in Python Programming at Skibui Technologies strengthened my programming fundamentals, logical thinking, debugging skills, and problem-solving approach. It also reinforced my interest in software development and motivated me to continue learning modern technologies and industry best practices.
              I believe that continuous learning, adaptability, and discipline are essential qualities for every developer. I am always eager to improve my skills, embrace new challenges, and create digital solutions that provide real value to users. I enjoy working collaboratively, learning from experienced professionals, and contributing with dedication and a positive mindset.
              My goal is to build a successful career as a professional Web Developer by creating high-quality, responsive, and performance-driven web applications. I am committed to growing every day, delivering meaningful work, and making a positive impact through technology.
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Bachelor of Science in Physics (B.Sc Physics)
                </h3>
                <p className="text-xs text-slate-700">
                  Annamalai University — Chidambaram, Tamil Nadu, India
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-700">
                2023 – 2026
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Analytical foundations: Mathematical Physics, Optics, Classical Mechanics, Vector Calculus, Experimental Deductive Logic, Statistical Problem Solving.
            </p>
          </div>

          {/* Section: Internship */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Internship Experience
            </h2>
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Python Programming Intern
                </h3>
                <p className="text-xs text-blue-700 font-medium">
                  Skibui Technologies
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-700">
                15 May 2025 – 15 June 2025
              </span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 pl-1">
              <li>Completed comprehensive hands-on Python training covering data structures, modular logic, and exception handling.</li>
              <li>Learned core Python programming fundamentals and standard library modules for filesystem operations.</li>
              <li>Developed simple automation scripts for directory file sorting, batch processing, and audit reporting.</li>
              <li>Strengthened debugging skills and logical thinking through systematic traceback isolation.</li>
              <li>Improved overall problem-solving ability on practical software tasks.</li>
            </ul>
          </div>

          {/* Section: Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical & Soft Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-800">
              <div>
                <span className="font-bold text-slate-900 block">Technical Skills:</span>
                <p className="text-slate-700">
                  AI-Assisted Web Development · Python Programming (Fundamentals) · AI Tools Workflow Integration
                </p>
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Productivity & Design Tools:</span>
                <p className="text-slate-700">
                  Microsoft Word · Microsoft Excel · Microsoft PowerPoint · Canva
                </p>
              </div>
              <div className="sm:col-span-2 pt-1">
                <span className="font-bold text-slate-900 block">Soft Skills & Personal Strengths:</span>
                <p className="text-slate-700">
                  Problem Solving · Analytical Thinking · Quick Learner · Clear Communication · Adaptability · Teamwork · Positive Attitude · Continuous Learning
                </p>
              </div>
            </div>
          </div>

          {/* Section: AI Skills & Pragmatic Workflows */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              AI Tools Workflow Integration (Pragmatic Developer Usage)
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Actively applies AI tools for: <strong>Learning</strong> (syntax & framework concepts), <strong>Research</strong> (architectural trade-offs), <strong>Brainstorming</strong> (UI ideas & edge cases), <strong>Productivity</strong> (scaffolding boilerplate), <strong>Website Development</strong> (frontend styling acceleration), <strong>Problem Solving</strong> (debugging traceback logs), <strong>Writing</strong> (documentation & notes), and <strong>Planning</strong> (task decomposition). All code is verified with developer oversight.
            </p>
          </div>

          {/* Section: Selected Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Demonstrated Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>OpticsLab — Physics Wave & Vector Simulator</span>
                  <span className="font-normal text-slate-600">Next.js · TypeScript · Canvas</span>
                </div>
                <p className="text-slate-700 text-[11px] mt-0.5">
                  Interactive wave simulation web app demonstrating harmonic interference, wavelength variance, and physics formulas with dynamic canvas rendering.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>PyAutomate — Python Automation & Batch File Organizer</span>
                  <span className="font-normal text-slate-600">Python 3 · Pathlib · Regex</span>
                </div>
                <p className="text-slate-700 text-[11px] mt-0.5">
                  Batch filesystem utility that categorizes chaotic directories by extension, executes safe moves, and creates execution logs with exception handling.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>DevSprint — AI-Assisted Study & Sprint Tracker</span>
                  <span className="font-normal text-slate-600">React · Next.js · Tailwind CSS</span>
                </div>
                <p className="text-slate-700 text-[11px] mt-0.5">
                  Focused developer productivity dashboard for organizing learning milestones, markdown study notes, and daily coding sprint cadences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
