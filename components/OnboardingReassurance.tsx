'use client';

import { ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function OnboardingReassurance() {
  return (
    <AnimatedSection
      className="py-12 px-4 bg-[#111114]"
      style={{
        borderTop: '1px solid #1E1E24',
        borderBottom: '1px solid #1E1E24',
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-4 md:gap-5">
          <ShieldCheck className="w-8 h-8 text-brand-orange flex-shrink-0" />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#F4F4F5] mb-3">
              You&apos;re Never Left to Figure It Out Alone
            </h3>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              Every installation includes a live Zoom onboarding session. We log in with you, walk through the system, run your first voice commands together, and don&apos;t hand off until everything is working and you&apos;re confident. Starter clients receive a group session. Signature and above receive private 1:1 sessions.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
