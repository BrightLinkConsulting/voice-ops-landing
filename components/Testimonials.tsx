'use client';

import { Star } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerChild } from '@/components/MotionWrapper';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kim O\'Hara',
      title: 'Book Coach to Best Sellers',
      quote: 'When it came time to add automation to my business, I am so grateful I found Michael to walk me through all the nooks and crannies... In two short months, he has gone above and beyond.',
    },
    {
      name: 'Marley Jaxx',
      title: 'CEO, Jaxx Productions',
      quote: 'Mike Walker is a straight-up genius when it comes to business... He has this rare ability to drop one-liners that stop you in your tracks and completely shift the way you think.',
    },
    {
      name: 'Yousef Badou',
      title: 'Founder, Emergence LLC',
      quote: 'Michael has been instrumental in the exponential growth of my business. His mentoring and upper level strategy has transformed my business into an agile and focused machine.',
    },
    {
      name: 'Byron Rodgers',
      title: 'CEO, Bravo Research Group',
      quote: 'Mike Walker supercharged my business success. He doesn\'t just talk about amplifying and monetizing your message. He actually delivers.',
    },
    {
      name: 'Josh Orr',
      title: 'Founder, Capital Commerce',
      quote: 'Mike has a crazy ability to simplify all the complex pieces of growing a business, from operations to what it takes to keep clients happy.',
    },
    {
      name: 'Tasha Blasi',
      title: 'Fertility and IVF Consultant',
      quote: 'Mike Walker is the operational genius every visionary needs. While I\'m dreaming big, he\'s the one making sure I am taking the next best and correct step.',
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
