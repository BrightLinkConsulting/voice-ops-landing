'use client';

import { Play } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function VSLVideo() {
  return (
    <section id="overview" className="w-full py-20 md:py-28 lg:py-40 px-4 md:px-8 bg-[#0A0A0B]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-8 md:space-y-12">
            {/* Eyebrow */}
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-[#E8600A] font-body mb-4">
                THE 3-MINUTE OVERVIEW
              </p>
            </div>

            {/* Headline */}
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-6 mt-3 md:mt-4">
                Watch Before You Read Anything Else
              </h2>
            </div>

            {/* Video Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl aspect-video bg-[#111114] border border-[#1E1E24] rounded-xl flex items-center justify-center group cursor-pointer hover:border-[#E8600A] transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,96,10,0.2)]">
                {/* Replace src with Loom/Vimeo embed URL */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.3)] rounded-xl pointer-events-none" />
                <button className="relative w-16 h-16 rounded-full bg-[#E8600A] flex items-center justify-center hover:bg-[#d4570a] transition-all duration-200 hover:shadow-[0_0_30px_rgba(232,96,10,0.4)] group-hover:scale-110 transform">
                  <Play size={32} className="text-white fill-white ml-1" />
                </button>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center">
              <blockquote className="italic text-[#A1A1AA] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                "I was driving when a client popped into my head. I sent a voice note to my AI agent, the email went out, the CRM updated — all before I reached the next stoplight. That's the point: the system runs the business so you can run the vision."
              </blockquote>
              <p className="text-[#52525B] text-sm mt-4 font-semibold">— Mike Walker, Founder, CEO Systems</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
