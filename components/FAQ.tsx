'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function FAQ() {
  const faqs = [
    {
      question: 'Can I integrate Voice Ops with my existing OpenClaw setup?',
      answer: 'Absolutely. Voice Ops connects directly to OpenClaw. We\'ve worked with dozens of OpenClaw users and can integrate Voice Ops as an additional layer that triggers your existing OpenClaw automations. No disruption to your current systems.',
    },
    {
      question: 'Is this a GoHighLevel certification course or a new platform?',
      answer: 'Neither. Voice Ops is a done-for-you service that uses GoHighLevel as the backbone. We build, configure, and optimize your GHL account specifically for voice-triggered operations. You get a fully managed system, not a course or new platform to learn.',
    },
    {
      question: 'Can I use Voice Ops if I already have existing builds in GoHighLevel?',
      answer: 'Yes. We integrate Voice Ops into your existing GHL environment. Our team audits your current setup and builds voice automation on top of what\'s already there. We don\'t replace—we enhance.',
    },
    {
      question: 'What\'s the difference between Launch and Pro?',
      answer: 'Launch is perfect for solopreneurs and bootstrapped founders—one integration, foundational automations, email support. Pro is for scaling teams—unlimited integrations, advanced analytics, dedicated account manager, and custom development. Both include done-for-you GHL configuration.',
    },
    {
      question: 'How long until my Voice Ops system is live?',
      answer: 'Typical timeline: 2-3 weeks from contract to launch. We conduct discovery calls, build your systems in a staging environment, run quality assurance, then deploy to production. Timeline can vary based on complexity and your responsiveness to our questions.',
    },
    {
      question: 'What happens after installation? Do I get ongoing support?',
      answer: 'Full ongoing support based on your tier. Launch includes email support. Pro includes priority email and chat support plus a dedicated account manager. Enterprise gets 24/7 support. We also handle updates, optimizations, and troubleshooting.',
    },
    {
      question: 'Who is this right for?',
      answer: 'Voice Ops is ideal for founders, agency owners, and service-based businesses drowning in operational overhead. You need to have some existing processes and a clear vision of your business model. It\'s not for one-off projects—it\'s for sustainable systems.',
    },
    {
      question: 'What do I need to provide to get started?',
      answer: 'Access to your GoHighLevel account, documentation of your current workflows, and clarity on your business goals. We ask detailed discovery questions about your operations, team structure, and growth plans. The more detailed you are upfront, the better we can build.',
    },
  ];

  return (
    <AnimatedSection id="faq" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            STRAIGHT ANSWERS
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5]">
            Questions We Get Asked. Answered Directly.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible>
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`}>
                <Accordion.Trigger className="w-full text-left py-5 px-4 flex justify-between items-center text-base font-semibold text-[#F4F4F5] hover:bg-[rgba(232,96,10,0.04)] min-h-[56px] border-b border-[#1E1E24] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-brand-orange flex-shrink-0 transition-transform" />
                </Accordion.Trigger>
                <Accordion.Content className="text-sm text-[#A1A1AA] leading-relaxed pb-5 px-4 border-b border-[#1E1E24]">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </AnimatedSection>
  );
}
