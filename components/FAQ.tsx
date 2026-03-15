'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/MotionWrapper';

export default function FAQ() {
  const faqs = [
    {
      question: 'I keep seeing OpenClaw agents doing incredible things on YouTube. Is this the same thing?',
      answer: 'It\u2019s a fair question and it deserves a direct answer.\n\nOpenClaw is powerful infrastructure \u2014 an open toolkit that lets technically skilled people connect AI models to files, apps, and messaging platforms. The results can be genuinely impressive when someone knows how to architect it.\n\nBut that\u2019s exactly the problem: you still have to architect it. OpenClaw has no memory of your business between sessions. It doesn\u2019t know your clients, your pipeline, what a normal week looks like for your retention metrics, or what\u2019s changed since last Tuesday. Every time you use it, you\u2019re briefing a blank slate.\n\nVoice Ops is different at a fundamental level. It\u2019s a pre-built, opinionated operating system installed specifically inside your business \u2014 with your GHL pipelines, your client data, your retention intelligence, and your acquisition system all connected and running continuously.\n\nThink of it this way: OpenClaw is lumber. Voice Ops is a finished house. Both involve the same raw materials. Only one of them is somewhere you can actually live.',
    },
    {
      question: 'Is this a GoHighLevel certification course or a new platform?',
      answer: 'Neither. Voice Ops is a done-for-you service that uses GoHighLevel as the backbone. We build, configure, and optimize your GHL account specifically for voice-triggered operations. You get a fully managed system, not a course or new platform to learn.',
    },
    {
      question: 'Can I use Voice Ops if I already have existing builds in GoHighLevel?',
      answer: 'Yes. We integrate Voice Ops into your existing GHL environment. Our team audits your current setup and builds voice automation on top of what\u2019s already there. We don\u2019t replace\u2014we enhance.',
    },
    {
      question: 'How do I know which tier is right for me?',
      answer: 'Ask yourself two questions.\n\nFirst: do you have an active client base you\u2019re responsible for retaining? If yes, you need at least Pro \u2014 that\u2019s where ClientBloom activates and starts monitoring those relationships continuously.\n\nSecond: do you currently run your company on EOS, Traction, or a similar framework? If yes, Pro Plus is designed specifically for you \u2014 CE.OS replaces the manual quarterly cadence with a continuous AI-driven operating rhythm.\n\nIf you\u2019re starting fresh and need a complete professional acquisition system, Starter is the right entry point. Add voice command at Signature. Add client intelligence at Pro. Add CEO operating intelligence at Pro Plus.\n\nMost serious operators end up at Pro or above. You can start anywhere and move up anytime.',
    },
    {
      question: 'How long until my Voice Ops system is live?',
      answer: 'Typical timeline: 2-3 weeks from contract to launch. We conduct discovery calls, build your systems in a staging environment, run quality assurance, then deploy to production. Timeline can vary based on complexity and your responsiveness to our questions.',
    },
    {
      question: 'What happens if I cancel?',
      answer: 'Your GHL sub-account deactivates and you lose access to the running system. You\u2019re subscribing to a managed, always-on operating system \u2014 not purchasing software you install once. The moment you stop subscribing, the system stops running.\n\nThis isn\u2019t a gotcha. It\u2019s the reason the system works so well. We maintain the infrastructure, handle updates, and keep everything running because your subscription funds that. Most clients stay because the system earns its cost every month.',
    },
    {
      question: 'Who is this right for?',
      answer: 'Voice Ops is ideal for founders, agency owners, and service-based businesses drowning in operational overhead. You need to have some existing processes and a clear vision of your business model. It\u2019s not for one-off projects\u2014it\u2019s for sustainable systems.',
    },
    {
      question: 'What do I need to provide to get started?',
      answer: 'Access to your GoHighLevel account, documentation of your current workflows, and clarity on your business goals. We ask detailed discovery questions about your operations, team structure, and growth plans. The more detailed you are upfront, the better we can build.',
    },
  ];

  return (
    <AnimatedSection id="faq" className="py-24 md:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
            STRAIGHT ANSWERS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
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
