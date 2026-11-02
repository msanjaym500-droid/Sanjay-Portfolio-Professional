import * as React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

export function ExperienceEducation() {
  const { experience, education } = siteContent;
  const exp = experience[0];
  const edu = education[0];

  return (
    <section id="experience-education" className="py-16 sm:py-24 lg:py-28 relative">
      <Container>
        <SectionHeading
          eyebrow="Timeline"
          title="Experience & Education"
          description="Practical internship training and academic foundation in physics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Experience */}
          <FadeIn delay={0}>
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] shrink-0">
                    <Briefcase className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-mono-tag block">
                      Work Experience
                    </span>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#E5E7EB]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[#475569] dark:text-[#94A3B8]">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-xs text-[#475569] dark:text-[#94A3B8] mt-1 font-mono-tag">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                  <ul className="space-y-3 text-[15px] text-[#475569] dark:text-[#94A3B8]">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#60A5FA] shrink-0 mt-2"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Card 2: Education */}
          <FadeIn delay={0.08}>
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/50 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] shrink-0">
                    <GraduationCap className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-mono-tag block">
                      Education
                    </span>
                    <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#E5E7EB]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-[#475569] dark:text-[#94A3B8]">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-[#475569] dark:text-[#94A3B8] mt-1 font-mono-tag">
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                  <div className="p-4 rounded-lg bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#1E293B]">
                    <span className="text-xs text-[#475569] dark:text-[#94A3B8] block">
                      Percentage
                    </span>
                    <span className="text-2xl font-bold text-[#0F172A] dark:text-[#E5E7EB] font-mono-tag">
                      {edu.percentage}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
