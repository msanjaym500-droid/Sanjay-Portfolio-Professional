import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteContent } from '@/content/site';

export function Skills() {
  const { skills } = siteContent;

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 relative">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="A direct overview of the tools, technologies, and languages I currently use or am actively studying."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.04}>
              <Card className="p-5 sm:p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] dark:text-[#E5E7EB] mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] text-[#475569] dark:text-[#94A3B8] flex items-center gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
