'use client';

import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="cta"
      className="py-24 md:py-36 px-4"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(232,96,10,0.08) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
          THE NEXT STEP
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
          Ready to Command Your Business?
        </h2>

        <p className="text-base text-[#A1A1AA] leading-relaxed mb-8 max-w-2xl mx-auto">
          Pick your tier and we&apos;ll have your system installed and running within 14 days. No strategy call required for Starter or Signature — just choose your tier and we&apos;ll reach out to schedule your onboarding. Pro and Pro Plus clients receive a private strategy session before we begin building.
        </p>

        <p className="text-[#A1A1AA] font-semibold mb-8">On the strategy call, we'll either:</p>

        <div className="space-y-4 mb-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <span className="text-[#A1A1AA] text-left">
              Confirm alignment and outline next steps
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <span className="text-[#A1A1AA] text-left">
              Provide clarity and direction you can implement independently
            </span>
          </div>
        </div>

        <p className="text-[#A1A1AA] italic mb-12">
          Either way, you leave the call with more insight than you arrived with.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold animate-pulse-orange hover:bg-orange-600 transition-all">
            Start the Conversation →
          </button>
          <button className="w-full md:w-auto px-8 py-4 border border-[#1E1E24] text-[#A1A1AA] rounded-lg font-semibold hover:border-brand-orange hover:text-brand-orange transition-all">
            Watch the Overview Video
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
