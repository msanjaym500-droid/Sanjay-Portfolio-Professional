'use client';

/**
 * Projects Section
 * Features a clean, professional showcase card for the Raja Salon Appointment Booking Website
 * with live site link, project description, and three high-resolution project screenshots
 * with an interactive full-screen preview modal.
 */

import * as React from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ZoomIn,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

export function Projects() {
  const project = siteContent.projects[0];
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Handle Escape and Left/Right arrow keys when lightbox is open
  React.useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % project.screenshots.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + project.screenshots.length) % project.screenshots.length
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, project.screenshots.length]);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] dark:bg-[#0E172A] border-y border-[#E2E8F0] dark:border-[#1E293B]"
    >
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured project"
          description="A real, live web project built for a local business in Kanai, Villupuram."
        />

        <FadeIn>
          <Card className="p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto" hoverEffect={false}>
            <div className="space-y-8">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] dark:border-[#1E293B]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#E5E7EB]">
                      {project.title}
                    </h3>
                    <Badge variant="success">
                      <span>{project.caseStudy.status}</span>
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-[#475569] dark:text-[#94A3B8]">
                    {project.tagline}
                  </p>
                </div>

                {/* Primary Action Button */}
                <Button
                  asLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live site
                </Button>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-mono-tag mb-2.5">
                  Description
                </h4>
                <p className="text-[16px] sm:text-[17px] text-[#0F172A] dark:text-[#E5E7EB] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Three High-Resolution Screenshots Grid */}
              <div className="pt-6 border-t border-[#E2E8F0] dark:border-[#1E293B] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-mono-tag">
                    Application Screenshots (1. Homepage · 2. Booking · 3. Confirmation)
                  </h4>
                  <span className="text-xs text-[#475569] dark:text-[#94A3B8]">
                    Click any screen to view full size
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">
                  {project.screenshots.map((item, idx) => (
                    <div
                      key={item.src}
                      className="flex flex-col items-center space-y-3"
                    >
                      {/* Step Label Above Screen */}
                      <div className="w-full max-w-[320px] sm:max-w-none flex items-center justify-between px-1">
                        <span className="text-xs font-semibold text-[#0F172A] dark:text-[#E5E7EB]">
                          <span className="text-[#2563EB] dark:text-[#60A5FA] font-mono-tag mr-1.5">
                            0{idx + 1}.
                          </span>
                          {item.caption}
                        </span>
                      </div>

                      {/* Crisp Full-Resolution Device Frame */}
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(idx)}
                        aria-label={`View full size screenshot: ${item.caption}`}
                        className="group relative w-full max-w-[320px] sm:max-w-none rounded-2xl overflow-hidden border-2 border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#2563EB] dark:hover:border-[#60A5FA] bg-[#0B0B0E] shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={720}
                          height={1372}
                          quality={95}
                          sizes="(max-width: 640px) 320px, (max-width: 1024px) 33vw, 320px"
                          className="w-full h-auto block select-none"
                        />

                        {/* Subtle Enlarge Pill on Hover / Corner */}
                        <span className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-[#0F172A]/85 group-hover:bg-[#2563EB] text-white text-xs font-medium inline-flex items-center gap-1.5 backdrop-blur-xs transition-colors shadow-sm">
                          <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Full view</span>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screenshot preview"
          className="fixed inset-0 z-50 bg-[#0B1220]/95 flex flex-col"
        >
          {/* Top Bar with Top-Left Back Button and Step Indicator */}
          <div className="w-full bg-white dark:bg-[#111A2E] border-b border-[#E2E8F0] dark:border-[#1E293B] px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 shrink-0 shadow-sm">
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B1220] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to website</span>
            </button>

            <span className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-[#E5E7EB] truncate">
              0{lightboxIndex + 1}. {project.screenshots[lightboxIndex].caption}
            </span>

            {/* Previous / Next Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + project.screenshots.length) %
                      project.screenshots.length
                  )
                }
                className="w-9 h-9 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B1220] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex + 1) % project.screenshots.length
                  )
                }
                className="w-9 h-9 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B1220] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Full-Size Screenshot Area */}
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
            className="flex-1 w-full overflow-y-auto p-4 sm:p-6 flex justify-center items-start"
          >
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B0B0E]">
              <Image
                src={project.screenshots[lightboxIndex].src}
                alt={project.screenshots[lightboxIndex].alt}
                width={720}
                height={1372}
                quality={100}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
