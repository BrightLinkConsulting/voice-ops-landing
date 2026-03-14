'use client';

import { Check, X } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerChild, motion } from '@/components/MotionWrapper';

export default function PricingTiers() {
  const tiers = [
    {
      name: 'VOICE OPS LAUNCH',
      setup: '$1,997',
      monthly: '$197',
      annual: '$1,770/yr',
      annualSavings: 'save 2 months',
      tagline: 'The foundation for ops freedom.',
      description: 'For bootstrapped founders and solopreneurs ready to systematize their voice-first operations.',
      features: [
        { name: 'Voice Ops Systems Build', included: true },
        { name: 'One Custom Workflow Integration', included: true },
        { name: 'Voice-Triggered Automations', included: true },
        { name: 'Basic Reporting & Analytics', included: true },
        { name: 'Email Support', included: true },
        { name: 'Done-For-You GHL Configuration', included: true },
        { name: 'Unlimited Workflow Integrations', included: false },
        { name: 'White-Label Dashboard', included: false },
        { name: 'Dedicated Account Manager', included: false },
      ],
      cta: 'Start With Launch →',
      popular: false,
      enterprise: false,
    },
    {
      name: 'VOICE OPS PRO',
      setup: '$4,997',
      monthly: '$497',
      annual: '$4,470/yr',
      annualSavings: 'save 2 months',
      tagline: 'Scale voice ops across your entire business.',
      description: 'For established founders and teams ready to unlock exponential growth through voice intelligence.',
      features: [
        { name: 'Voice Ops Systems Build', included: true },
        { name: 'Unlimited Workflow Integrations', included: true },
        { name: 'Voice-Triggered Automations', included: true },
        { name: 'Advanced Reporting & Analytics', included: true },
        { name: 'Priority Email + Chat Support', included: true },
        { name: 'Done-For-You GHL Configuration', included: true },
        { name: 'White-Label Dashboard', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom Integration Development', included: true },
      ],
      cta: 'Start With Pro →',
      popular: true,
      enterprise: false,
    },
    {
      name: 'VOICE OPS ENTERPRISE',
      setup: 'Custom',
      monthly: 'Inquiry',
      annual: 'Custom — Book a Strategy Call',
      annualSavings: '',
      tagline: 'Fully-managed voice intelligence at enterprise scale.',
      description: 'For agencies and multi-million dollar operations requiring white-label solutions and custom integrations.',
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Custom API Development', included: true },
        { name: 'Dedicated Infrastructure', included: true },
        { name: 'White-Label Everything', included: true },
        { name: 'Dedicated Slack Channel', included: true },
        { name: 'Done-For-You GHL Configuration', included: true },
        { name: 'Quarterly Strategy Reviews', included: true },
        { name: '24/7 Priority Support', included: true },
        { name: 'Custom Compliance Features', included: true },
      ],
      cta: 'Book Enterprise Strategy Call →',
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <AnimatedSection id="pricing" className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            CHOOSE YOUR INSTALLATION
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F4F4F5] mb-4">
            Three Tiers. One Mission: Your Business Running Without You Babysitting It.
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            Every tier includes done-for-you GoHighLevel configuration, voice-triggered automations, and systems that let your business run while you sleep. Choose your starting point.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative ${index === 1 ? 'order-first lg:order-none' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {tier.enterprise && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[#2A2A32] text-[#A1A1AA] text-xs font-bold px-3 py-1 rounded-full">
                    FOR AGENCIES + ESTABLISHED OPERATORS
                  </div>
                </div>
              )}

              <div
                className={`bg-[#111114] border rounded-2xl p-8 transition-all h-full flex flex-col ${
                  tier.popular
                    ? 'border-brand-orange/30 animate-breathe'
                    : 'border-[#1E1E24] hover:border-brand-orange hover:-translate-y-1 hover:scale-[1.02]'
                }`}
              >
                <div className={tier.popular ? 'pt-4' : ''}>
                  <h3 className="text-xl font-semibold text-[#F4F4F5] mb-2">{tier.name}</h3>
                  <p className="italic text-[#A1A1AA] text-sm mb-6">{tier.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-[#1E1E24]">
                    {tier.enterprise ? (
                      <div className="text-2xl font-bold text-[#F4F4F5]">{tier.annual}</div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-2xl font-bold text-[#F4F4F5]">{tier.setup}</span>
                          <span className="text-sm text-[#52525B]">setup</span>
                        </div>
                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="text-2xl font-bold text-[#F4F4F5]">{tier.monthly}</span>
                          <span className="text-sm text-[#52525B]">/mo</span>
                        </div>
                        {tier.annualSavings && (
                          <div className="text-xs text-brand-orange">
                            Annual: {tier.annual} ({tier.annualSavings})
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <p className="text-sm text-[#A1A1AA] mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-[#F4F4F5] mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-[#52525B] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-[#A1A1AA]' : 'text-[#52525B]'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-semibold mt-auto transition-all ${
                    tier.popular
                      ? 'bg-brand-orange text-white text-lg animate-pulse-orange hover:bg-orange-600'
                      : 'bg-brand-orange text-white hover:bg-orange-600'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
