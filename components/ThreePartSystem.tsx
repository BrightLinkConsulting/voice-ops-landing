'use client'

import { Zap, Mic, Brain, Check } from 'lucide-react'
import { StaggerContainer, StaggerChild, motion } from '@/components/MotionWrapper'

const ThreePartSystem = () => {
  const layers = [
    {
      number: 'LAYER 01',
      title: 'Your Entire Acquisition Engine, Built and Live',
      icon: Zap,
      body: 'Four complete funnel types installed inside your GoHighLevel sub-account — lead magnet funnel, front-end SLO with upsells, VSL with booking integration, and flagship offer page. All email and SMS automations pre-loaded. Your community infrastructure (free group, paid group, courses) fully configured. This is not a template you fill in. It\'s a finished, running system.',
      bullets: [
        'Lead Magnet Funnel + automation sequence',
        'SLO funnel with 2 upsells',
        'VSL + Call Booking funnel',
        'Flagship Offer Page',
        'Free + Paid community groups',
        'Products and courses infrastructure'
      ]
    },
    {
      number: 'LAYER 02',
      title: 'Talk to Your Business. Watch It Move.',
      icon: Mic,
      body: 'Your dedicated Telegram bot, connected to your entire GoHighLevel account. Ask what\'s in your pipeline. Send emails by voice. Update client profiles, log notes, query leads, trigger follow-up sequences — all without opening a dashboard. This is the interface shift. The same way email moved from desktop to mobile, your business operations are moving from dashboards to conversation.',
      bullets: [
        'Dedicated Telegram bot connected to your GHL',
        'Voice and text commands executed across your CRM',
        'Pipeline queries and deal status on demand',
        'CRM note logging and contact updates by voice',
        'Morning brief delivered daily — what needs attention'
      ]
    },
    {
      number: 'LAYER 03',
      title: 'Your Business, Monitored 24/7. Insights Delivered Before You Ask.',
      icon: Brain,
      body: 'Powered by ClientBloom — a proprietary intelligence layer that tracks every client relationship based on their individual baseline behavior, not generic benchmarks. When a client\'s engagement deviates from their normal pattern, you find out before they go quiet. The system proactively surfaces who needs attention, what the risk signals are, and what to do about them. The morning brief isn\'t just data. It\'s a briefing from a system that\'s been watching while you slept.',
      bullets: [
        'Individual client baseline behavioral scoring',
        'Proactive churn risk detection',
        'Engagement pattern monitoring across platforms',
        'Daily CEO brief with recommended actions',
        'Decision journal with automated review tracking',
        'OPI (Operating Performance Index) scoring'
      ],
      badge: 'PRO'
    }
  ]

  return (
    <section
      id="system"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-brand-orange uppercase mb-4">
          WHAT GETS INSTALLED
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          One Ecosystem. Three Layers of Power.
        </h2>
        <p className="text-[#A1A1AA] text-base md:text-lg max-w-3xl">
          Most agencies install a snapshot and hand you a manual. We install the system and connect
          the brain that runs it.
        </p>
      </div>

      <div className="space-y-8">
        {layers.map((layer, index) => {
          const IconComponent = layer.icon
          return (
            <StaggerChild key={index}>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-8 relative">
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-mono text-brand-orange font-semibold">
                        {layer.number}
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#F4F4F5] mt-2">
                        {layer.title}
                        {layer.badge && (
                          <span className="inline-flex ml-2 bg-brand-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {layer.badge}
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-6">
                    {layer.body}
                  </p>

                  <ul className="space-y-3">
                    {layer.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#A1A1AA] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < layers.length - 1 && (
                  <div className="hidden md:flex justify-center py-4">
                    <div className="w-px h-8 bg-[#1E1E24]"></div>
                  </div>
                )}
              </motion.div>
            </StaggerChild>
          )
        })}
      </div>
    </section>
  )
}

export default ThreePartSystem
