'use client';

import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function FinalCTA() {
  return (
    <AnimatedSection
      id="cta"
      className="py-20 md:py-28 px-4"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(232,96,10,0.08) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
          THE NEXT STEP
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
          This Isn't a Pitch. It's a Mutual Evaluation.
        </h2>

        <p className="text-[#A1A1AA] leading-relaxed mb-8 max-w-2xl mx-auto">
          We only work with founders and operators who are ready to think differently about operations. If you're content with your current systems and chaos level, this isn't for you. If you're serious about scaling without hiring 10 more people, let's talk.
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
