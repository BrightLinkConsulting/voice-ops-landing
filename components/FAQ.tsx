'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function FAQ() {
  const faqs = [
    {
      question: 'I keep seeing open-source AI agents doing incredible things on YouTube. Is this the same thing?',
      answer: 'It\u2019s a fair question and it deserves a direct answer.\n\nOpen-source AI agent frameworks are powerful infrastructure \u2014 toolkits that let technically skilled people connect AI models to files, apps, and messaging platforms. The results can be impressive when someone knows how to architect it.\n\nBut that\u2019s exactly the problem: you still have to architect it. Those frameworks have no memory of your business between sessions. They don\u2019t know your clients, your pipeline, what a normal week looks like for your retention metrics, or what\u2019s changed since last Tuesday. Every time you use them, you\u2019re briefing a blank slate.\n\nCEO Systems is different at a fundamental level. It\u2019s a pre-built, opinionated operating environment installed specifically inside your business \u2014 with your GHL pipelines, your client data, your retention intelligence, and your acquisition system all connected and running continuously.\n\nThink of it this way: open-source agents are infrastructure. CEO Systems with AIOS is a running operating environment. Both involve similar underlying technology. Only one of them is configured, connected, and already working inside your specific business context.',
    },
    {
      question: 'Is this a GoHighLevel certification course or a new platform?',
      answer: 'Neither. CEO Systems is a done-for-you service that uses GoHighLevel as the backbone. We build, configure, and optimize your GHL account as a complete operating environment \u2014 infrastructure, intelligence, and client visibility all connected. You get a fully managed system, not a course or new platform to learn.',
    },
    {
      question: 'Can I use CEO Systems if I already have existing builds in GoHighLevel?',
      answer: 'Yes. We integrate CEO Systems into your existing GHL environment. Our team audits your current setup and builds the operating environment on top of what\u2019s already there. We don\u2019t replace \u2014 we enhance.',
    },
    {
      question: 'How do I know which tier is right for me?',
      answer: 'The fastest way to decide is to ask where your biggest operating gap actually is right now.\n\nIf your acquisition system is fragmented or founder-dependent, start with Starter. You need the infrastructure installed before intelligence has anything to work with.\n\nIf you already have a working acquisition system and you want operating leverage \u2014 faster answers, less dashboard time, a system that briefs you on what matters \u2014 add Signature and activate AIOS.\n\nIf you have an active client base and retention directly affects your revenue, move to Pro. ClientBloom gives you real visibility into what is actually happening inside each client relationship before issues surface.\n\nIf you are operating at a level where the business is performing but you feel the gap between your strategic thinking and your operating rhythm, Pro Plus and CE.OS is the right layer.\n\nYou can start at any tier and move up at any time. The layers are cumulative \u2014 every tier includes everything below it.',
    },
    {
      question: 'How long until my CEO Systems operating environment is live?',
      answer: 'Typical timeline: 7\u201314 business days from contract to launch. We conduct discovery calls, build your systems in a staging environment, run quality assurance, then deploy to production. Timeline can vary based on complexity and your responsiveness to our questions.',
    },
    {
      question: 'What happens if I cancel?',
      answer: 'Your GHL sub-account deactivates and you lose access to the installed operating environment. You are subscribing to a managed, continuously maintained system \u2014 not purchasing software you install and own outright. When the subscription ends, the environment stops running.\n\nThis is not a limitation \u2014 it is why the system works well. We maintain the infrastructure, handle updates, and keep the intelligence layer current because your subscription funds that work. Most clients stay because the operating environment earns its cost every month.',
    },
    {
      question: 'Who is this right for?',
      answer: 'CEO Systems is built for founders, consultants, coaches, and service-based business owners who have real demand and a backend that can\u2019t keep pace. You need to have some existing processes and a clear vision of your business model. This is not for one-off projects \u2014 it is for businesses that need a connected, continuously running operating environment.',
    },
    {
      question: 'What do I need to provide to get started?',
      answer: 'Access to your GoHighLevel account, documentation of your current workflows, and clarity on your business goals. We ask detailed discovery questions about your operations, team structure, and growth plans. The more detailed you are upfront, the better we can build.',
    },
  ];

  return (
    <AnimatedSection id="faq" className="py-20 md:py-28 lg:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
            STRAIGHT ANSWERS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-5 md:mb-6 mt-3 md:mt-4">
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
                <Accordion.Content className="text-base text-[#A1A1AA] leading-relaxed pb-5 px-4 border-b border-[#1E1E24] whitespace-pre-line">
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
