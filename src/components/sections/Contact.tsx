import * as React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

export function Contact() {
  const { contact, personal } = siteContent;

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] dark:bg-[#0E172A] border-t border-[#E2E8F0] dark:border-[#1E293B]"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={contact.heading}
          description={contact.text}
        />

        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 sm:p-8 space-y-6 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#E5E7EB]">
                  Let&apos;s connect
                </h3>
                <p className="text-[16px] text-[#475569] dark:text-[#94A3B8]">
                  You can reach me directly by email or on LinkedIn.
                </p>
              </div>

              {/* Direct channels */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asLink
                  href={`mailto:${personal.email}`}
                  variant="primary"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Email me
                </Button>

                {personal.linkedinUrl && (
                  <Button
                    asLink
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={<Linkedin className="w-4 h-4" />}
                  >
                    View LinkedIn
                  </Button>
                )}
              </div>

              {/* Location marker - no phone number, no map, no street address */}
              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-center gap-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
