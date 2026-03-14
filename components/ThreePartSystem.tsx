'use client'

import { Zap, Mic, Brain, Check } from 'lucide-react'
import { StaggerContainer, StaggerChild, motion } from '@/components/MotionWrapper'

const ThreePartSystem = () => {
  const layers = [
    {
      number: 'LAYER 01',
      title: 'Your Entire Acquisition Engine, Built and Live',
      icon: Zap,
      body: 'We install your complete lead generation and customer acquisition stack in a single engagement. Everything from landing pages to conversation to fulfillment runs through a single, unified system. No more stitching platforms together. This is your personal acquisition machine.',
      bullets: [
        'Custom landing pages auto-generated from your existing content',
        'Live phone and SMS concierge powered by AI Voice',
        'Automated lead qualification and routing',
        'Multi-channel conversation memory and context',
        'Direct integration with your CRM and delivery infrastructure',
        'Real-time notifications and escalations'
      ]
    },
    {
      number: 'LAYER 02',
      title: 'Talk to Your Business. Watch It Move.',
      icon: Mic,
      body: 'The system doesn\'t just answer calls. It runs your business. Every conversation is an instruction set. When a customer tells the system what they need, the system doesn\'t respond with a document. It moves.',
      bullets: [
        'Voice commands trigger business actions in real time',
        'Conversations become automated workflows instantly',
        'CRM updates happen as customers are still talking',
        'Decision trees adapt based on conversation context',
        'Multi-step processes execute in a single command'
      ]
    },
    {
      number: 'LAYER 03',
      title: 'Your Business, Monitored 24/7. Insights Delivered Before You Ask.',
      icon: Brain,
      body: 'This isn\'t a dashboard you check. This is a system that briefed you. While you sleep, while you\'re in meetings, while you\'re in the car—your business is being watched. Patterns are being tracked. Anomalies are being flagged. You wake up briefed.',
      bullets: [
        'Predictive alerts on customer churn and expansion signals',
        'Overnight analysis of all conversation and transaction data',
        'Automated insights on performance bottlenecks',
        'Revenue forecasting based on real pipeline movement',
        'Competitive intelligence from customer conversations',
        'Custom intelligence briefings delivered on your schedule'
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
