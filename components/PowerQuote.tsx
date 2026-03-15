'use client';

import { Star } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function PowerQuote() {
  return (
    <AnimatedSection className="py-20 md:py-28 px-6 md:px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-6">
          WHAT CLIENTS SAY
        </div>

        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-[#F4F4F5] leading-snug mb-6">
          &ldquo;Mike Walker is the operational genius every visionary needs. While I&apos;m dreaming big, he&apos;s the one making sure I am taking the next best and correct step.&rdquo;
        </blockquote>

        <p className="text-base text-[#A1A1AA] font-body mb-6">
          &mdash; Tasha Blasi, Fertility and IVF Consultant
        </p>

        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-brand-orange text-brand-orange"
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
