import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

export function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] dark:bg-[#0E172A] border-y border-[#E2E8F0] dark:border-[#1E293B]"
    >
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="About me"
          description={about.summary}
        />

        {/* Small block titled "How I work with AI" */}
        <div className="mt-10 sm:mt-12">
          <FadeIn>
            <h3 className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#E5E7EB] mb-6">
              How I work with AI
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {about.howIWorkWithAi.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <Card className="p-5 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] font-mono-tag block">
                      {item.step} · {item.title}
                    </span>
                    <p className="text-[15px] text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
