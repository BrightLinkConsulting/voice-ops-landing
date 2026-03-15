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
            <h2 className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-[#F4F4F5] mb-6 leading-tight">
              We Take Your Goals as Seriously as You Do.
            </h2>

            <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
              <p>
                With over two decades building brands, leading launches, and architecting marketing and operational systems, I&apos;ve seen firsthand how difficult it can be to earn and keep the attention of your market — and how much harder it is to scale without the right infrastructure.
              </p>

              <p>
                Voice Ops is the most complete version of everything I&apos;ve been building toward for the past several years. The client acquisition system, the retention intelligence, and now the AI operating layer that ties it all together into something you can actually run from your phone.
              </p>

              <p>
                I look forward to learning more about your objectives and exploring whether this is the right system for your next stage of growth.
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
                src="/mike-walker-headshot.jpg"
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
