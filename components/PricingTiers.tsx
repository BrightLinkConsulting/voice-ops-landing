'use client';

import { X, RefreshCw, Layers, Shield } from 'lucide-react';
import { AnimatedSection, motion } from '@/components/MotionWrapper';

const OrangeCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
    <path d="M5 10.5L8.5 14L15 7" stroke="#E8600A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const glowConfigs = [
  {
    border: '#BA7517',
    bgTint: '#BA751722',
    glowColor: '#BA751755',
    glowColorHover: '#BA751788',
    animation: 'breathe-starter 3s ease-in-out infinite',
  },
  {
    border: '#185FA5',
    bgTint: '#185FA522',
    glowColor: '#185FA555',
    glowColorHover: '#185FA588',
    animation: 'breathe-signature 3.4s ease-in-out infinite 0.4s',
  },
  {
    border: '#E8600A',
    bgTint: '#E8600A22',
    glowColor: '#E8600A66',
    glowColorHover: '#E8600Aaa',
    animation: 'breathe-pro 3.8s ease-in-out infinite 0.8s',
  },
  {
    border: '#534AB7',
    bgTint: '#534AB722',
    glowColor: '#534AB755',
    glowColorHover: '#534AB788',
    animation: 'breathe-proplus 4.2s ease-in-out infinite 1.2s',
  },
];

export default function PricingTiers() {
  const tiers = [
    {
      name: 'STARTER',
      monthly: '$97',
      annual: '$970/yr',
      annualSavings: 'save 2 months',
      tagline: 'Your complete acquisition system, installed and running.',
      bestFor: 'Expert-led businesses that need a complete, professional operating backend installed and running.',
      features: [
        { name: 'Complete GHL sub-account installation', included: true },
        { name: 'Lead Magnet Funnel + email/SMS automation', included: true },
        { name: 'SLO Funnel with 2 upsells', included: true },
        { name: 'VSL + Call Booking Funnel', included: true },
        { name: 'Flagship Offer Page', included: true },
        { name: 'Free + Paid Community Groups', included: true },
        { name: 'Products + Courses infrastructure', included: true },
        { name: 'Group onboarding session (Zoom)', included: true },
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
      bestFor: 'Founders ready to add AIOS and operate from context instead of dashboards.',
      features: [
        { name: 'Everything in Starter', included: true },
        { name: 'Dedicated BI Agent (Telegram)', included: true },
        { name: 'Voice and text commands across your stack', included: true },
        { name: 'Pipeline queries and deal status on demand', included: true },
        { name: 'CRM logging and updates by voice', included: true },
        { name: 'Daily morning brief, before you ask', included: true },
        { name: 'Private 1:1 onboarding (60 min)', included: true },
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
      bestFor: 'Operators with an active client base who need visibility into retention and health.',
      features: [
        { name: 'Everything in Signature', included: true },
        { name: 'ClientBloom intelligence engine activated', included: true },
        { name: 'Client Retention Score (CRS) per client', included: true },
        { name: 'Behavioral baseline scoring', included: true },
        { name: 'Proactive churn risk detection', included: true },
        { name: 'Engagement monitoring across platforms', included: true },
        { name: 'Morning brief with client health signals', included: true },
        { name: 'Private 90-min 1:1 onboarding', included: true },
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
      bestFor: 'Founders who have outgrown manual frameworks and want continuous executive intelligence.',
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'CE.OS Chief Executive OS activated', included: true },
        { name: 'OPI (Operating Performance Index) scoring', included: true },
        { name: 'Daily CEO brief with strategic recs', included: true },
        { name: 'Decision journal with review tracking', included: true },
        { name: 'Energy and mindset monitoring', included: true },
        { name: 'Persistent memory for contextual reasoning', included: true },
        { name: 'Replaces EOS/Traction with AI rhythm', included: true },
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
      description: 'Cancel anytime. Your operating environment runs as long as your subscription does.',
    },
    {
      icon: Layers,
      label: 'Cumulative layers',
      description: 'Every tier includes everything below it. Add the next layer when you are ready.',
    },
    {
      icon: Shield,
      label: 'Your sub-account',
      description: 'Everything is installed inside your GHL sub-account. It is yours to operate.',
    },
  ];

  return (
    <AnimatedSection id="pricing" className="relative overflow-hidden py-20 md:py-28 lg:py-40 px-4">
      {/* Diagonal light sweep — hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-0"
        style={{
          width: '60%',
          height: '100%',
          background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.015) 50%, transparent 60%)',
          animation: 'sweep 20s linear infinite',
          willChange: 'transform',
        }}
      />
      <div className="relative z-[1] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
            CHOOSE YOUR LAYER
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-5 md:mb-6 mt-3 md:mt-4">
            Start with the Infrastructure.{'\n'}Add Intelligence as You Grow.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA] max-w-2xl mx-auto">
            Every tier is a monthly subscription. No setup fees. No long-term contracts. Start at the layer that fits where you are today — and move up as your operating needs evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const glow = glowConfigs[index];
            return (
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
                className={`pricing-card pricing-card-${index} rounded-2xl px-5 py-6 md:p-6 h-full flex flex-col`}
                style={{
                  background: `linear-gradient(135deg, ${glow.bgTint} 0%, #111114 60%)`,
                  border: `1px solid ${glow.border}44`,
                  boxShadow: `0 0 20px ${glow.glowColor}, inset 0 0 20px ${glow.bgTint}`,
                  animation: glow.animation,
                  transition: 'all 0.3s ease',
                }}
              >
                <div className={tier.popular || tier.elite ? 'pt-4' : ''}>
                  <h3 className="text-xl md:text-2xl font-bold text-[#F4F4F5] mb-3">{tier.name}</h3>

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
                    <p className="text-sm md:text-base font-semibold text-white mb-1">Best for:</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{tier.bestFor}</p>
                  </div>

                  <div className="mb-6 flex-grow pt-5 md:pt-6 mt-5 md:mt-6 border-t border-[#1E1E24]">
                    <ul className="space-y-3 min-h-[320px]">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          {feature.included ? (
                            <OrangeCheck />
                          ) : (
                            <X className="w-5 h-5 text-[#52525B] flex-shrink-0 mt-0.5 opacity-[0.35]" />
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
                  className={`w-full py-4 md:py-5 rounded-lg text-sm md:text-base font-semibold mt-auto transition-all ${
                    tier.popular
                      ? 'bg-brand-orange text-white animate-pulse-orange hover:bg-orange-600'
                      : 'bg-brand-orange text-white hover:bg-orange-600'
                  }`}
                >
                  {tier.cta}
                </button>

              </div>
            </motion.div>
            );
          })}
        </div>

        {/* How Tiers Work */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mt-12">
          {howTiersWork.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex-1 flex items-start gap-3 bg-[#111114] border border-[#1E1E24] rounded-xl p-5 md:py-12 md:px-5">
                <IconComponent className="w-10 h-10 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-lg text-[#F4F4F5] mb-1">{item.label}</p>
                  <p className="text-base leading-relaxed text-[#A1A1AA]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe-starter {
          0%, 100% { box-shadow: 0 0 15px #BA751733, inset 0 0 15px #BA751711; border-color: #BA751744; }
          50% { box-shadow: 0 0 25px #BA751755, inset 0 0 25px #BA751722; border-color: #BA751766; }
        }
        @keyframes breathe-signature {
          0%, 100% { box-shadow: 0 0 15px #185FA533, inset 0 0 15px #185FA511; border-color: #185FA544; }
          50% { box-shadow: 0 0 25px #185FA555, inset 0 0 25px #185FA522; border-color: #185FA566; }
        }
        @keyframes breathe-pro {
          0%, 100% { box-shadow: 0 0 20px #E8600A44, inset 0 0 20px #E8600A18; border-color: #E8600A55; }
          50% { box-shadow: 0 0 40px #E8600A77, inset 0 0 30px #E8600A30; border-color: #E8600A88; }
        }
        @keyframes breathe-proplus {
          0%, 100% { box-shadow: 0 0 15px #534AB733, inset 0 0 15px #534AB711; border-color: #534AB744; }
          50% { box-shadow: 0 0 25px #534AB755, inset 0 0 25px #534AB722; border-color: #534AB766; }
        }
        .pricing-card:hover {
          transform: translateY(-4px);
        }
        .pricing-card-0:hover {
          box-shadow: 0 0 35px #BA751788, inset 0 0 30px #BA751733 !important;
          border-color: #BA7517 !important;
        }
        .pricing-card-1:hover {
          box-shadow: 0 0 35px #185FA588, inset 0 0 30px #185FA533 !important;
          border-color: #185FA5 !important;
        }
        .pricing-card-2:hover {
          box-shadow: 0 0 50px #E8600Aaa, inset 0 0 35px #E8600A44 !important;
          border-color: #E8600A !important;
        }
        .pricing-card-3:hover {
          box-shadow: 0 0 35px #534AB788, inset 0 0 30px #534AB733 !important;
          border-color: #534AB7 !important;
        }
      `}</style>
    </AnimatedSection>
  );
}
