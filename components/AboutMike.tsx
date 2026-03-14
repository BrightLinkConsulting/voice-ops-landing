'use client';

import { AnimatedSection } from '@/components/MotionWrapper';

export default function AboutMike() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-12">
          A NOTE FROM MIKE WALKER
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Content - left side, wider */}
          <div className="md:col-span-3 order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
              We Take Your Goals as Seriously as You Do.
            </h2>

            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
              <p>
                Five years ago, I was drowning in the same operational chaos you might be facing right now. Running a business meant choosing between growth and sanity. Every new client meant more admin work, more context switching, more mental overhead. I tried every tool, every system, every productivity hack. Nothing stuck.
              </p>

              <p>
                So I started building. Not another app. Not another tool to add to the stack. I built a way to think about operations differently—voice-first, system-driven, designed for founders who want to scale without scaling headcount. The same systems that freed me from the grind are now helping 100+ entrepreneurs do the same.
              </p>

              <p>
                Voice Ops isn't a service we offer. It's a philosophy we live. Your business should run without your constant intervention. Your team should focus on high-impact work. Your growth shouldn't demand another app or another login.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-[#F4F4F5] mb-1">
                Mike Walker, Founder & CEO
              </p>
              <p className="text-sm text-[#A1A1AA]">
                Two-Time Amazon #1 Best Selling Author: The Systems-Thinking Visionary and The Exceptional Experience
              </p>
            </div>
          </div>

          {/* Photo placeholder - right side */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-[#111114] border border-[#1E1E24] rounded-xl aspect-[3/4] w-full max-w-xs mx-auto md:max-w-none flex items-center justify-center text-[#52525B]">
              {/* Replace with Mike Walker professional photo */}
              <span className="text-center px-4 text-sm">
                Mike Walker Professional Headshot
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
