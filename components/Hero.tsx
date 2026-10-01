'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useIsMounted } from '@/hooks/use-mounted';
import {
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  GraduationCap,
  Sparkles,
  Code2,
  Terminal,
  Atom,
  Camera,
  Trash2,
  Upload,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiterBrief: () => void;
}

export function Hero({ onOpenResume, onOpenRecruiterBrief }: HeroProps) {
  const isMounted = useIsMounted();
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('sanjay_profile_photo');
      } catch {
        return null;
      }
    }
    return null;
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDimension = 360;
        let { width, height } = img;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setProfilePhoto(compressedDataUrl);
          try {
            localStorage.setItem('sanjay_profile_photo', compressedDataUrl);
          } catch (err) {
            console.error('Storage quota exceeded:', err);
          }
        } else {
          setProfilePhoto(rawDataUrl);
          try {
            localStorage.setItem('sanjay_profile_photo', rawDataUrl);
          } catch (err) {
            console.error('Storage quota exceeded:', err);
          }
        }
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleClearPhoto = () => {
    setProfilePhoto(null);
    try {
      localStorage.removeItem('sanjay_profile_photo');
    } catch (e) {
      console.error(e);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const displayPhoto = isMounted ? profilePhoto : null;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Decorative Grids and Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Unboxed Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Junior & Intern Roles
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Villupuram, Tamil Nadu
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                B.Sc Physics 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                Hi, I&apos;m Sanjay.
                <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  AI-Assisted Web Developer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-pretty pt-2 max-w-2xl">
                Building modern, user-friendly, and impactful digital experiences by fusing analytical physics problem-solving with AI-assisted development workflows.
              </p>
            </motion.div>

            {/* Recruiter Quick Snapshot bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <span>Recruiter Quick Scan</span>
                <button
                  onClick={onOpenRecruiterBrief}
                  className="text-blue-600 dark:text-blue-400 hover:underline capitalize font-medium flex items-center gap-1"
                >
                  View 60s summary →
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 dark:text-slate-300">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block">Core Discipline</span>
                  <span className="font-medium">Web Dev + Python</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block">Internship</span>
                  <span className="font-medium">Skibui Technologies</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 dark:text-slate-500 block">Education</span>
                  <span className="font-medium">B.Sc Physics, Annamalai</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm hover:shadow-blue-500/20 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 rounded-lg transition-all shadow-2xs"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual Identity Card with Photo Upload & Clear */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-sm"
            >
              {/* Hidden File Input for Photo Upload */}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload-input"
              />

              {/* Profile Card Container with Double Border Glassmorphism */}
              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md overflow-hidden">
                {/* Subtle orbital physics vectors decoration */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full border border-blue-500/10 dark:border-blue-400/10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full border border-indigo-500/10 dark:border-indigo-400/10 pointer-events-none" />

                {/* Profile Avatar Frame */}
                <div className="relative mx-auto w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 p-[2px] shadow-lg group">
                  <div className="w-full h-full rounded-[14px] bg-slate-100 dark:bg-[#0b1220] flex flex-col items-center justify-center relative overflow-hidden">
                    {displayPhoto ? (
                      /* Display Uploaded Custom Portrait (only rendered post-hydration) */
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={displayPhoto}
                        alt="Sanjay Profile Portrait"
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                    ) : (
                      /* Default Abstract Physics Orbitals SVG & Stylized Initials */
                      <>
                        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                          <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(30 50 50)" className="text-blue-500" />
                          <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-30 50 50)" className="text-indigo-500" />
                          <circle cx="50" cy="50" r="4" fill="currentColor" className="text-blue-600" />
                        </svg>

                        <div className="relative z-10 text-center">
                          <span className="text-3xl font-black tracking-wider text-slate-800 dark:text-white">
                            SJ
                          </span>
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400 mt-0.5">
                            SANJAY
                          </span>
                        </div>
                      </>
                    )}

                    {/* Quick Camera Hover Overlay */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-medium gap-1 rounded-[14px] cursor-pointer"
                      title="Click to upload profile photo"
                    >
                      <Camera className="w-5 h-5 text-white" />
                      <span>Change Photo</span>
                    </button>
                  </div>
                </div>

                {/* Photo Upload & Clear Controls */}
                <div className="mt-3.5 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-900 rounded-lg transition-colors cursor-pointer"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload Photo</span>
                  </button>

                  {isMounted && profilePhoto && (
                    <button
                      type="button"
                      onClick={handleClearPhoto}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 rounded-lg transition-colors cursor-pointer"
                      title="Clear custom photo and restore default initials"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>

                {/* Profile Identity Details */}
                <div className="mt-4 text-center space-y-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Sanjay
                  </h2>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    AI-Assisted Web Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    B.Sc Physics · Annamalai University
                  </p>
                </div>

                {/* Pillar Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <Atom className="w-4 h-4 mx-auto text-blue-600 dark:text-blue-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 block">Physics</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Analytical</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <Terminal className="w-4 h-4 mx-auto text-emerald-600 dark:text-emerald-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 block">Python</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Internship</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <Sparkles className="w-4 h-4 mx-auto text-amber-500 dark:text-amber-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 block">AI-Assisted</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Workflow</span>
                  </div>
                </div>

                {/* Honesty & Integrity Tagline */}
                <div className="mt-4 pt-3 text-center border-t border-dashed border-slate-200 dark:border-slate-800/70">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    &ldquo;Focused on continuous learning, discipline, and building meaningful web experiences.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
