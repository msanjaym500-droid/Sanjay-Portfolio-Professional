'use client';

/**
 * Hero Section
 * Presents Sanjay's name (H1), role line, honest personal summary, status badge,
 * fixed circular portrait photo, and primary action buttons.
 * Features a "View and Download resume" button that opens the full-page Resume Viewer
 * with the "Back to website" button in the top-left corner and "Download PDF" in the top-right corner.
 */

import * as React from 'react';
import Image from 'next/image';
import { FileText, Mail, ArrowDown, ArrowLeft, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

/**
 * Converts a base64 string into a Uint8Array of raw binary bytes.
 */
function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function Hero() {
  const { personal } = siteContent;
  const [photoError, setPhotoError] = React.useState(false);
  const [resumeBytes, setResumeBytes] = React.useState<Uint8Array | null>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [isResumeViewerOpen, setIsResumeViewerOpen] = React.useState(false);

  // Pre-fetch verified PDF bytes on mount
  React.useEffect(() => {
    let active = true;

    async function preloadResumePdf() {
      try {
        const res = await fetch('/api/resume?format=base64', {
          credentials: 'same-origin',
          cache: 'no-store',
        });
        if (!res.ok) return;
        const data = (await res.json()) as { base64?: string };
        if (!data.base64 || !active) return;

        const bytes = base64ToUint8Array(data.base64);
        if (active) {
          setResumeBytes(bytes);
        }
      } catch {
        // Fallback handled in click handler
      }
    }

    if (personal.resumePdfPath) {
      preloadResumePdf();
    }

    return () => {
      active = false;
    };
  }, [personal.resumePdfPath]);

  // Close resume viewer on Escape key and lock background scroll while open
  React.useEffect(() => {
    if (!isResumeViewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeViewerOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeViewerOpen]);

  /**
   * Downloads Sanjay_Resume_Website.pdf as a clean, standard application/pdf file.
   */
  const handleDownloadResumePdf = async () => {
    if (isDownloading) return;
    try {
      setIsDownloading(true);
      let bytes = resumeBytes;

      if (!bytes) {
        const res = await fetch('/api/resume?format=base64', {
          credentials: 'same-origin',
          cache: 'no-store',
        });
        if (res.ok) {
          const data = (await res.json()) as { base64?: string };
          if (data.base64) {
            bytes = base64ToUint8Array(data.base64);
            setResumeBytes(bytes);
          }
        }
      }

      if (bytes) {
        const blob = new Blob([bytes.buffer as ArrayBuffer], {
          type: 'application/pdf',
        });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'sanjay Professional resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
      } else {
        const link = document.createElement('a');
        link.href = '/api/resume';
        link.download = 'sanjay Professional resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <section
        id="hero"
        className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 relative overflow-hidden"
      >
        <Container>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
            {/* Left Column: Text & Call to Actions */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <FadeIn delay={0}>
                <Badge variant="accent">
                  <span>{personal.badgeText}</span>
                </Badge>
              </FadeIn>

              <FadeIn delay={0.05}>
                <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.02em] text-[#0F172A] dark:text-[#E5E7EB] leading-[1.12]">
                  {personal.name}
                </h1>
                <p className="mt-2 text-lg sm:text-xl font-medium text-[#2563EB] dark:text-[#60A5FA]">
                  {personal.roleLine}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[17px] text-[#475569] dark:text-[#94A3B8] leading-[1.6] max-w-[65ch] text-pretty">
                  {personal.heroBio}
                </p>
              </FadeIn>

              {/* Buttons: View Projects, View and Download resume, Email Me */}
              <FadeIn delay={0.15}>
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Button
                    asLink
                    href="#projects"
                    variant="primary"
                    icon={<ArrowDown className="w-4 h-4" />}
                  >
                    View projects
                  </Button>

                  {personal.resumePdfPath && (
                    <Button
                      type="button"
                      onClick={() => setIsResumeViewerOpen(true)}
                      variant="secondary"
                      icon={<FileText className="w-4 h-4" />}
                    >
                      View and Download resume
                    </Button>
                  )}

                  <Button
                    asLink
                    href={`mailto:${personal.email}`}
                    variant="secondary"
                    icon={<Mail className="w-4 h-4" />}
                  >
                    Email me
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Fixed Circular Portrait Photo */}
            <FadeIn delay={0.1} className="shrink-0">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] bg-[#F8FAFC] dark:bg-[#111A2E] flex items-center justify-center">
                {!photoError ? (
                  <Image
                    src={personal.photoPath}
                    alt="Photo of Sanjay"
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                    className="object-cover object-center"
                    priority
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  /* Fallback clean circle with letter S if photo is missing */
                  <div
                    className="w-full h-full flex items-center justify-center bg-[#2563EB] text-white font-bold text-6xl"
                    aria-label="Photo of Sanjay"
                  >
                    S
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Full-Page Resume Viewer with Corner Back Button and Corner Download Button */}
      {isResumeViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sanjay Resume Viewer"
          className="fixed inset-0 z-50 bg-[#0B1220]/95 flex flex-col"
        >
          {/* Top Header Bar: Back button in top-left corner, Download button in top-right corner */}
          <div className="w-full bg-white dark:bg-[#111A2E] border-b border-[#E2E8F0] dark:border-[#1E293B] px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 shrink-0 shadow-sm">
            {/* Top-Left Corner: Back to website button */}
            <button
              type="button"
              onClick={() => setIsResumeViewerOpen(false)}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B1220] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to website</span>
            </button>

            {/* Top-Right Corner: Download PDF button */}
            <button
              type="button"
              onClick={handleDownloadResumePdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>
          </div>

          {/* Full Unclipped Resume Page View */}
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsResumeViewerOpen(false);
            }}
            className="flex-1 w-full overflow-y-auto p-3 sm:p-6"
          >
            <div className="mx-auto w-full max-w-3xl bg-white rounded-lg shadow-2xl border border-[#E2E8F0]">
              <Image
                src="/sanjay-resume-page.png"
                alt="Full Resume of Sanjay"
                width={2125}
                height={2750}
                quality={95}
                className="w-full h-auto block rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
