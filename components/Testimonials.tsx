'use client';

import { Star } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerChild } from '@/components/MotionWrapper';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kim O\'Hara',
      title: 'Book Coach to Best Sellers',
      quote: 'Voice Ops has transformed how I manage client communications. What used to take hours of manual work now happens automatically. I\'ve reclaimed 15+ hours per week.',
    },
    {
      name: 'Marley Jaxx',
      title: 'CEO, Jaxx Productions',
      quote: 'The level of automation is insane. Our team no longer drowns in administrative tasks. Everything from scheduling to follow-ups is handled through voice commands.',
    },
    {
      name: 'Yousef Badou',
      title: 'Founder, Emergence LLC',
      quote: 'We went from reactive chaos to proactive systems. Voice Ops didn\'t just automate our processes—it fundamentally changed how our business operates.',
    },
    {
      name: 'Byron Rodgers',
      title: 'CEO, Bravo Research Group',
      quote: 'The implementation was seamless. Mike\'s team understood our business from day one and built systems that actually fit our workflow, not the other way around.',
    },
    {
      name: 'Josh Orr',
      title: 'Founder, Capital Commerce',
      quote: 'ROI was immediate. Within the first month, the automation savings paid for the entire setup cost. Now we\'re scaling faster than ever.',
    },
    {
      name: 'Tasha Blasi',
      title: 'Fertility and IVF Consultant',
      quote: 'My clients receive faster responses, my team has less stress, and I finally have time to focus on what I do best. This is a game-changer for service-based businesses.',
    },
  ];

  return (
    <AnimatedSection id="testimonials" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            FROM THE PEOPLE WHO'VE BEEN THROUGH THE BUILD
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5]">
            Results Don't Lie. Neither Do Clients.
          </h2>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerChild key={index}>
                <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-6 hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-brand-orange text-brand-orange"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed italic mb-4 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-[#F4F4F5]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#52525B]">{testimonial.title}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
