'use client';

import { Check, X, RefreshCw, Layers, Shield } from 'lucide-react';
import { AnimatedSection, motion } from '@/components/MotionWrapper';

export default function PricingTiers() {
  const tiers = [
    {
      name: 'STARTER',
      monthly: '$97',
      annual: '$970/yr',
      annualSavings: 'save 2 months',
      tagline: 'Your complete acquisition system, installed and running.',
      bestFor: 'Founders who need a professional system built, not a template to figure out.',
      features: [
        { name: 'Complete GHL sub-account snapshot installation', included: true },
        { name: 'Lead Magnet Funnel + email/SMS automation', included: true },
        { name: 'SLO Funnel with 2 upsells', included: true },
        { name: 'VSL + Call Booking Funnel', included: true },
        { name: 'Flagship Offer Page', included: true },
        { name: 'Free + Paid Community Groups', included: true },
        { name: 'Products + Courses infrastructure', included: true },
        { name: 'Group onboarding session (live Zoom)', included: true },
        { name: '30-day support access', included: true },
        { name: 'Business Intelligence Agent', included: false },
        { name: 'Voice command interface', included: false },
        { name: 'Daily morning brief', included: false },
        { name: 'Client retention scoring', included: false },
        { name: 'CE.OS operating system', included: false },
      ],
      cta: 'Start With Starter \u2192',
      popular: false,
      elite: false,
      includesBelow: false,
      mobileOrder: 'order-4 lg:order-1',
      credential: null,
    },
    {
      name: 'SIGNATURE',
      monthly: '$147',
      annual: '$1,470/yr',
      annualSavings: 'save 2 months',
      tagline: 'Everything in Starter, plus your voice-command BI Agent.',
      bestFor: 'Founders ready to stop logging into dashboards and start commanding their business by voice.',
      features: [
        { name: 'Everything in Starter', included: true },
        { name: 'Dedicated Business Intelligence Agent (Telegram)', included: true },
        { name: 'Voice and text commands across your entire tech stack', included: true },
        { name: 'Pipeline queries and deal status on demand', included: true },
        { name: 'CRM note logging and contact updates by voice', included: true },
        { name: 'Daily morning brief \u2014 what needs attention, before you ask', included: true },
        { name: 'Private 1:1 onboarding session (60 min)', included: true },
        { name: 'ClientBloom client intelligence', included: false },
        { name: 'Churn risk detection', included: false },
        { name: 'CE.OS operating system', included: false },
      ],
      cta: 'Start With Signature \u2192',
      popular: false,
      elite: false,
      includesBelow: true,
      mobileOrder: 'order-3 lg:order-2',
      credential: null,
    },
    {
      name: 'PRO',
      monthly: '$497',
      annual: '$4,470/yr',
      annualSavings: 'save 2 months',
      tagline: 'Everything in Signature, plus ClientBloom client intelligence.',
      bestFor: 'Founders with an active client base who need to know which relationships need attention before they go quiet.',
      features: [
        { name: 'Everything in Signature', included: true },
        { name: 'ClientBloom client intelligence engine activated', included: true },
        { name: 'Individual Client Retention Score (CRS) per client', included: true },
        { name: 'Individual baseline behavioral scoring', included: true },
        { name: 'Proactive churn risk detection', included: true },
        { name: 'Engagement pattern monitoring across platforms', included: true },
        { name: 'Morning brief upgraded with client health signals + recommended actions', included: true },
        { name: 'Private 90-minute 1:1 onboarding session', included: true },
        { name: 'Priority support for 90 days', included: true },
        { name: 'Quarterly system audit call', included: true },
        { name: 'CE.OS operating system', included: false },
      ],
      cta: 'Start With Pro \u2192',
      popular: true,
      elite: false,
      includesBelow: true,
      mobileOrder: 'order-1 lg:order-3',
      credential: 'Includes ClientBloom \u2014 the official digital implementation of The Exceptional Experience (Amazon #1 Bestseller)',
    },
    {
      name: 'PRO PLUS',
      monthly: '$997',
      annual: '$9,970/yr',
      annualSavings: 'save 2 months',
      tagline: 'Everything in Pro, plus CE.OS \u2014 the Chief Executive OS.',
      bestFor: 'Founders who\u2019ve outgrown EOS/Traction and want an AI-driven operating system that runs continuously, not quarterly.',
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'CE.OS Chief Executive Operating System activated', included: true },
        { name: 'OPI (Operating Performance Index) scoring', included: true },
        { name: 'Daily CEO brief with strategic recommendations', included: true },
        { name: 'Decision journal with automated review tracking', included: true },
        { name: 'Energy and mindset monitoring', included: true },
        { name: 'Long-term persistent memory for contextual reasoning', included: true },
        { name: 'Replaces manual EOS/Traction cadence with continuous AI rhythm', included: true },
        { name: 'Private CE.OS Community (Circle)', included: true },
        { name: 'Ongoing CE.OS plugin updates', included: true },
      ],
      cta: 'Start With Pro Plus \u2192',
      popular: false,
      elite: true,
      includesBelow: true,
      mobileOrder: 'order-2 lg:order-4',
      credential: 'EOS gave you the structure. CE.OS gives you the intelligence.',
    },
  ];

  const howTiersWork = [
    {
      icon: RefreshCw,
      label: 'Monthly subscription',
      description: 'Cancel anytime. Your system runs as long as your subscription does.',
    },
    {
      icon: Layers,
      label: 'Cumulative tiers',
      description: 'Every tier includes everything below it. Move up anytime.',
    },
    {
      icon: Shield,
      label: 'Your sub-account',
      description: 'Everything lives in your GHL sub-account. Cancel and access deactivates.',
    },
  ];

  return (
    <AnimatedSection id="pricing" className="py-24 md:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
            CHOOSE YOUR TIER
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-6">
            Start Where You Are.{'\n'}Scale As You Grow.
          </h2>
          <p className="text-base leading-relaxed text-[#A1A1AA] max-w-2xl mx-auto">
            Every tier is a monthly subscription. No setup fees. No long-term contracts. If you cancel, your sub-account deactivates. Your system runs as long as your subscription does.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative ${tier.mobileOrder}`}
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

              {tier.elite && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[#534AB7] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ELITE
                  </div>
                </div>
              )}

              <div
                className={`bg-[#111114] border rounded-2xl p-6 transition-all h-full flex flex-col ${
                  tier.popular
                    ? 'border-brand-orange/30 animate-breathe'
                    : tier.elite
                      ? 'border-[#534AB7]/30 bg-[#111118]'
                      : 'border-[#1E1E24] hover:border-brand-orange hover:-translate-y-1 hover:scale-[1.02]'
                }`}
              >
                <div className={tier.popular || tier.elite ? 'pt-4' : ''}>
                  <h3 className="text-lg font-semibold text-[#F4F4F5] mb-1">{tier.name}</h3>

                  {tier.includesBelow && (
                    <p className="text-xs text-[#52525B] mb-3">Includes all layers below ↑</p>
                  )}

                  <p className="text-sm font-normal text-gray-400 mb-4 truncate">{tier.tagline}</p>

                  <div className="mb-4 pb-4 border-b border-[#1E1E24]">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl font-bold text-[#F4F4F5]">{tier.monthly}</span>
                      <span className="text-sm text-[#52525B]">/mo</span>
                    </div>
                    <div className="text-xs text-brand-orange">
                      Annual: {tier.annual} ({tier.annualSavings})
                    </div>
                  </div>

                  <div className="mb-4 pt-3 mt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-sm">
                      <span className="font-semibold text-white">Best for:</span>{' '}
                      <span className="text-gray-300">{tier.bestFor}</span>
                    </p>
                  </div>

                  <div className="mb-6 flex-grow">
                    <ul className="space-y-3 min-h-[320px]">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-[#52525B] flex-shrink-0 mt-0.5 opacity-[0.35]" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-[#A1A1AA]' : 'text-[#52525B] opacity-[0.35]'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mt-auto transition-all text-sm ${
                    tier.popular
                      ? 'bg-brand-orange text-white animate-pulse-orange hover:bg-orange-600'
                      : 'bg-brand-orange text-white hover:bg-orange-600'
                  }`}
                >
                  {tier.cta}
                </button>

                {tier.credential && (
                  <p className={`text-sm text-center mt-3 ${
                    tier.elite
                      ? 'font-medium text-[#8B82E0]'
                      : 'text-gray-300'
                  }`}>
                    {tier.credential}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Tiers Work */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {howTiersWork.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex-1 flex items-start gap-3 bg-[#111114] border border-[#1E1E24] rounded-xl py-12 px-5">
                <IconComponent className="w-10 h-10 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-[#F4F4F5] mb-1">{item.label}</p>
                  <p className="text-sm text-[#A1A1AA]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
