'use client';

import { AnimatedSection } from '@/components/MotionWrapper';

const OrangeCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M5 10.5L8.5 14L15 7" stroke="#E8600A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="cta"
      className="relative overflow-hidden py-20 md:py-28 lg:py-40 px-4"
    >
      {/* Dual-color breathing glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 60% at 35% 50%, rgba(232,96,10,0.10) 0%, transparent 70%)',
            animation: 'cta-glow-orange 14s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 60% at 65% 50%, rgba(83,74,183,0.08) 0%, transparent 70%)',
            animation: 'cta-glow-purple 18s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
      </div>
      <div className="relative z-[1] max-w-4xl mx-auto text-center">
        <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
          THE NEXT STEP
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-5 md:mb-6 mt-3 md:mt-4">
          Ready to Install the System{'\n'}Your Business Actually Needs?
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA] mb-8 max-w-2xl mx-auto">
          Choose your starting layer and we will have your operating environment installed and running within 14 days. Starter and Signature clients begin with an intake form and we schedule onboarding from there. Pro and Pro Plus clients receive a private strategy session before we begin the build.
        </p>

        <p className="text-[#A1A1AA] font-semibold mb-8">On the strategy call, we&apos;ll either:</p>

        <div className="space-y-3 mb-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <OrangeCheck />
            <span className="text-base leading-relaxed text-[#A1A1AA] text-left">
              Confirm the right layer for your current stage
            </span>
          </div>
          <div className="flex items-start gap-3">
            <OrangeCheck />
            <span className="text-base leading-relaxed text-[#A1A1AA] text-left">
              Map your existing stack and identify the gaps
            </span>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA] italic mb-12">
          Either way, you leave the call with a clear picture of what your operating environment should look like.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto py-4 md:py-5 px-8 md:px-10 text-sm md:text-base font-semibold tracking-wide bg-brand-orange text-white rounded-lg animate-pulse-orange hover:bg-orange-600 transition-all">
            Start With the Right Layer &rarr;
          </button>
          <a
            href="#overview"
            className="w-full sm:w-auto py-4 md:py-5 px-8 md:px-10 text-sm md:text-base font-semibold tracking-wide border border-[#1E1E24] text-[#A1A1AA] rounded-lg hover:border-brand-orange hover:text-brand-orange transition-all text-center"
          >
            Watch the Overview Video
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
