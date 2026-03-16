'use client';

import { AnimatedSection } from '@/components/MotionWrapper';

export default function AboutMike() {
  return (
    <AnimatedSection id="about" className="py-24 md:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-12">
          A NOTE FROM MIKE WALKER
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Content - left side, wider */}
          <div className="md:col-span-3 order-2 md:order-1">
            <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-[#F4F4F5] mb-6 leading-tight">
              We Take Your Goals as Seriously as You Do.
            </h2>

            <div className="space-y-4 text-base text-[#A1A1AA] leading-relaxed">
              <p>
                With over two decades building brands, leading launches, and architecting marketing and operational systems, I have seen firsthand how difficult it is to scale when the backend cannot keep up with the capability at the front of the business.
              </p>

              <p>
                BrightLink Consulting is the clearest expression of the work I have spent years building toward — not just funnels, not just automations, and not just another AI feature. It is a connected operating environment for expert-led businesses that need their infrastructure to finally catch up with their capability.
              </p>

              <p>
                Start with the system you need today. Then layer in AIOS, ClientBloom, and CE.OS as the business grows into a more intelligent, more integrated way of operating.
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

          {/* Photo - right side */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="rounded-xl overflow-hidden aspect-[3/4] w-full max-w-xs mx-auto md:max-w-none">
              <img
                src="/Studio-3.png"
                alt="Mike Walker, Founder and CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
